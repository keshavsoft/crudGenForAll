import express from 'express';

var router = express.Router();

import { router as routerKSequelize } from './kSequelize/routes.js';

import { router as routerFromksSample } from './ksSample/routes.js';

router.use('/tableNames', routerKSequelize);

router.use('/ksSample', routerFromksSample);

export { router };