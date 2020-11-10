import { Context } from 'koa';
import Joi from 'joi';
import Category from '../../models/category';

/*
PUT /api/categories
[
    {
        idx: 1,
        id: 'processing',
        name_ko: '조형 작업',
        name_en: 'Modeling',
        name_ch: 'Modeling',
        children: [
            {
            idx: 1,
            id: 'sculpture',
            name_ko: '조형물',
            name_en: 'Sculpture',
            name_ch: 'Sculpture',
            },
            {
            idx: 2,
            id: 'character',
            name_ko: '캐릭터',
            name_en: 'Character',
            name_ch: 'Character',
            },
        ]
    },
    {
        idx: 2,
        id: 'processing',
        name_ko: '작업 공정',
        name_en: 'Processing',
        name_ch: 'Processing',
        children: [
            {
            idx: 1,
            id: 'antique',
            name_ko: '유지보수',
            name_en: 'Antique',
            name_ch: 'Antique',
            },
            {
            idx: 2,
            id: 'character',
            name_ko: '캐릭터',
            name_en: 'Character',
            name_ch: 'Character',
            },
        ]
    },
]
*/
export const write = async (ctx: Context) => {
  const categoriesArr = ctx.request.body;

  const subCategorySchema = Joi.object().keys({
    idx: Joi.number().required(),
    id: Joi.string().required(),
    name_ko: Joi.string().required(),
    name_en: Joi.string().required(),
    name_ch: Joi.string().required(),
  });

  const categorySchema = Joi.object().keys({
    idx: Joi.number().required(),
    id: Joi.string().required(),
    name_ko: Joi.string().required(),
    name_en: Joi.string().required(),
    name_ch: Joi.string().required(),
    children: Joi.array().items(subCategorySchema),
  });

  const wrappingSchema = Joi.array().items(categorySchema);

  const result = Joi.validate(categoriesArr, wrappingSchema);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  // 기존에 categories를 가지고 있으면 가지고 있는 것을 업데이트, 안가지고 있으면 instance를 만들어서 넣어줌
  try {
    const findOne = await Category.findOne().exec();
    const category = findOne
      ? findOne.set({
          categories: categoriesArr,
        })
      : new Category({
          categories: categoriesArr,
        });

    await category.save();
    ctx.body = category.get('categories');
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 카테고리 조회
GET /api/categories
*/
export const read = async (ctx: Context) => {
  try {
    const categories = await Category.findOne().exec();
    ctx.body = categories?.get('categories');
  } catch (e) {
    ctx.throw(500, e);
  }
};
