import express from 'express';

var router = express.Router();

import { router as routerFromsrcWithFolder } from './srcWithFolder/routes.js';

router.use('/srcWithFolder', routerFromsrcWithFolder);

export { router };