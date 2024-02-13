import express from 'express';

var router = express.Router();

import { router as routerFromFolders } from './folders/routes.js';

router.use('/folders', routerFromFolders);

export { router };