import express from 'express';

var router = express.Router();

import { router as routergetFuncs } from './getFuncs/EntryFile.js';

router.use('/', routergetFuncs);

export { router };