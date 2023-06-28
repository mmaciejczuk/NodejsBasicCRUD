import express from 'express';

export const logRequest = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.info(`${req.method} ${req.originalUrl}`);
    next();
}