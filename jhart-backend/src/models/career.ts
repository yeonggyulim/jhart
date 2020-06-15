import mongoose from 'mongoose';

const { Schema } = mongoose;

const CareerSchema = new Schema({
    year: Number,
    career: String,
});

const Career = mongoose.model('Career', CareerSchema);
export default Career;