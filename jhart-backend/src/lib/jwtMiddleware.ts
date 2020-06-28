import jwt, { Secret } from 'jsonwebtoken';
import User from '../models/user';
import { Context, Next } from 'koa';
import constants from './constants';

type decodedType = {
  _id: string;
  username: string;
  exp: number;
};

const jwtMiddleware = async (ctx: Context, next: Next) => {
  const token = ctx.cookies.get('access_token');
  if (!token) return next(); // 토큰이 없음
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as Secret,
    ) as decodedType;
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
    };
    // 토큰의 남은 유효 기간이 3.5일 미만이면 재발급
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < constants.reissueTime) {
      const user = await User.findById(decoded._id);
      const token = user?.generateToken() as string;
      ctx.cookies.set('access_token', token, {
        maxAge: constants.tokenTTL,
        httpOnly: true,
      });
    }
    return next();
  } catch (e) {
    // 토큰 검증 실패
    return next();
  }
};

export default jwtMiddleware;
