import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, require: true },
    amount: { type: Number, required: true}
})

export const TransactionModel = mongoose.model('User', TransactionSchema);

export const getTransactions = () => TransactionModel.find();
// export const getTransactionById = (email: string) => TransactionModel.findOne({ email });
export const getTransactionsByUserId = (sessionToken: string) => TransactionModel.findOne({
    'authentication.sessionToken': sessionToken,
});
export const getTransactionById = (id: string) => TransactionModel.findById(id);
export const createTransaction = ( values: Record<string, any>) => new TransactionModel(values)
.save().then((transaction) => transaction.toObject());
export const deleteTransactionById = (id: string) => TransactionModel.findOneAndDelete({ _id: id});
export const updateTransactionById = (id: string, value: Record<string, any>) => TransactionModel.findByIdAndUpdate(id, value);
