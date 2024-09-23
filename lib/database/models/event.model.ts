import { Schema, model, models } from "mongoose";

export interface IEvent {
    _id: string
    title: string;                       // Required field
    description?: string;               // Optional field
    location: string;                  // Optional field
    createdAt: Date;                    // Default to current date
    imageUrl: string;                   // Required field
    startDateTime: Date;                // Required field
    endDateTime: Date;                  // Required field
    price?: number;                     // Optional field, can be a number
    isFree: boolean;                    // Default to false
    url?: string;                       // Optional field
    category: {_id: string, name: string} // Optional reference to Category
    organiser: {_id: string, firstName: string, lastName: string} 

}
const EventSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String},
    location: {type: String, default: 'Ottawa'},
    createdAt:{type: String, default: Date.now},
    imageUrl: {type: String, required: true},
    startDateTime:{type: String, default: Date.now},
    endDateTime:{type: String, default: Date.now},
    price:{type: String},
    isFree:{type: String, default: false},
    Url:{type: String},
    category:{type: Schema.Types.ObjectId, ref: 'Category'},
    organiser:{type: Schema.Types.ObjectId, ref: 'User'},


})
const Event = models.Event || model('Event', EventSchema);
export default Event;