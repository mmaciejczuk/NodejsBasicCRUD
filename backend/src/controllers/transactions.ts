import express from 'express';

import { getTransactions, deleteTransactionById, getTransactionById } from '../models/transactions';

export const getAllTransactions = async (req: express.Request, res: express.Response) => {
    try{
        const transactions = await getTransactions();

        return res.status(200).json(transactions).end();
    }
    catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteTransaction = async (req: express.Request, res: express.Response ) => {
    try {
        const { id } = req.params;

        const deletedTransaction = await deleteTransactionById(id);

        return res.json(deletedTransaction);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateTransaction = async (req: express.Request, res: express.Response) => { 
    try{
        const { id } = req.params;
        const { transactionId } = req.body;

        if (!transactionId){
            res.sendStatus(400);
        }

        const transaction = await getTransactionById(id);
        transaction.id = transactionId;
        await transaction.save();

        return res.status(200).json(transaction).end();
    }
    catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}