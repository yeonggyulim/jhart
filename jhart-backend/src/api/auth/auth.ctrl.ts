import { Context } from 'koa';
import Joi from 'joi';
import User from '../../models/user';

/*
    POST /api/auth/register
    {
        username: 'scv0128',
        password: 'mypass123'
    }
*/
export const register = async (ctx: Context) => {
  // 회원가입
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;
  try {
    // username 존재하는지 체크
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({
      username,
    });
    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    // 응답할 데이터에서 hashedPassword 필드 제거
    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx: Context) => {
  // 로그인
};

export const check = async (ctx: Context) => {
  // 로그인 상태 확인
};

export const logout = async (ctx: Context) => {
  // 로그아웃
};
