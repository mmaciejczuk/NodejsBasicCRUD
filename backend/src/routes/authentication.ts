import express from 'express';
import { logRequest } from '../middlewares/logging';

import { login, register } from '../controllers/authentication';

export default (router: express.Router) => {
    router.post('/auth/register',logRequest, register);
    router.post('/auth/login',logRequest, login);
};