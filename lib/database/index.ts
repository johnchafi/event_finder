import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

console.log("MONGODB_URI => " + MONGODB_URI);

let cached = (global as any).mongoose || {conn: null, promise: null}
 const connectToDatabase = async () => {
    if(cached.conn) return cached.connect;
    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');
    console.log('Before connect => ' + MONGODB_URI);
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'evently',
        bufferCommands: false,
    })
    console.log('After connect => ' + MONGODB_URI);
    cached.conn = await cached.promise
    console.log('connectedToDatabase => ' + cached.conn);
    return cached.conn;
}
export default connectToDatabase;

