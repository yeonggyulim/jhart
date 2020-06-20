import mongoose from 'mongoose';

const { Schema } = mongoose;

const CareerSchema = new Schema({
    year: Number,
    history: String,
});

const Career = mongoose.model('Career', CareerSchema);
export default Career;