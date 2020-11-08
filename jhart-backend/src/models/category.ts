import mongoose from 'mongoose';

const { Schema } = mongoose;

const SubCategorySchema = new Schema({
  idx: Number,
  id: String,
  name_ko: String,
  name_en: String,
  name_ch: String,
});

const CategorySchema = new Schema({
  idx: Number,
  id: String,
  name_ko: String,
  name_en: String,
  name_ch: String,
  children: [SubCategorySchema],
});

const Category = mongoose.model('Category', CategorySchema);
export default Category;
