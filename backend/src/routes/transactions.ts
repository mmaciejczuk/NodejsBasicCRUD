import express from 'express';
import { getAllTransactions, deleteTransaction, updateTransaction } from '../controllers/transactions';
import { isOwner, isAuthenticated } from '../middlewares/authentication'
import { logRequest } from '../middlewares/logging';

export default (router: express.Router) => {
    router.get('/transactions',logRequest, isAuthenticated, getAllTransactions);
    router.delete('/transaction/:id',logRequest, isAuthenticated, isOwner, deleteTransaction);
    router.patch('/transaction/:id',logRequest, isAuthenticated, isOwner, updateTransaction);
};