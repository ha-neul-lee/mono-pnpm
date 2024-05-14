import express, { NextFunction, Request, Response } from 'express';
import { Todo, todo } from '../__mock__';

interface DataItem extends Todo {
  id: number;
}

let router = express.Router();
let data: DataItem[] = Array(10)
  .fill(null)
  .map((_, index) => ({ ...todo, id: index + 1 }));

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now());
  next();
});

router
  .route('/data')
  .post((req: Request, res: Response) => {
    const newItem: DataItem = req.body;
    data.push(newItem);
    res.status(201).send(newItem);
  })
  .get((req: Request, res: Response) => {
    res.status(200).send(data);
  });

router
  .route('/data/:id')
  .put((req: Request, res: Response) => {
    let item = data.find(i => i.id === Number(req.params.id));
    if (item) {
      Object.assign(item, req.body);
      res.send(item);
    } else {
      res.status(404).send({ message: 'Data not found' });
    }
  })
  .delete((req: Request, res: Response) => {
    let index = data.findIndex(i => i.id === Number(req.params.id));
    if (index !== -1) {
      data.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Data not found' });
    }
  });

export default router;
