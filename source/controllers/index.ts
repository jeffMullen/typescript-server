// import { Request, Response, NextFunction } from 'express';
// import logging from '../config/logging';

// const NAMESPACE = 'Overall Controller';

// const overallController = (req: Request, res: Response, next: NextFunction) => {
//     logging.info(NAMESPACE, `All routes come from this point`);
// };
import express from 'express';
import math from './api/math';

const router = express.Router();

router.use('/api/math', math);

export default router;
