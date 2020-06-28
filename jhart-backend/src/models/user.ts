import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password: string) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password: string) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.statics.findByUsername = function (username: string) {
  return this.findOne({ username });
};

interface IUserDocument extends Document {
  setPassword: (password: string) => {};
  checkPassword: (password: string) => boolean;
  serialize: () => {};
}
interface IUserModel extends Model<IUserDocument> {
  findByUsername: (username: string) => boolean;
}

const User = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);
export default User;
