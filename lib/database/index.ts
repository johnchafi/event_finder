import mongoose from 'mongoose';

let cached = (global as any).mongoose || {conn: null, promise: null}
export const connecToDatabase = async () => {
    if(cached.conn) return cached.connect;
}