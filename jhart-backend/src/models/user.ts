import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';

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

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    // 첫 번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET as Secret,
    {
      expiresIn: '7d', // 7일 동안 유효
    },
  );
  return token;
};

UserSchema.statics.findByUsername = function (username: string) {
  return this.findOne({ username });
};

interface IUserDocument extends Document {
  setPassword: (password: string) => {};
  checkPassword: (password: string) => boolean;
  serialize: () => {};
  generateToken: () => string;
}
interface IUserModel extends Model<IUserDocument> {
  findByUsername: (username: string) => IUserDocument;
}

const User = mongoose.model<IUserDocument, IUserModel>('User', UserSchema);
export default User;
