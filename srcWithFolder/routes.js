import express from 'express';

var router = express.Router();

import { router as routerFromksSample } from './kSampleFolder/routes.js';

router.use('/kSampleFolder', routerFromksSample);

export { router };