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
  // const req = [];

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

  try {
    console.log({ Category });
    await Category.remove({});

    const category = new Category({
      categories: categoriesArr,
    });

    console.log({ category });

    await category.save();
    ctx.body = category;
  } catch (e) {
    ctx.throw(500, e);
  }

  // for (const categoriesItem of categoriesArr) {
  //   const result = Joi.validate(categoriesItem, categorySchema);
  //   if (result.error) {
  //     ctx.status = 400; // Bad Request
  //     ctx.body = result.error;
  //     return;
  //   }

  //   const { idx, id, name_ko, name_en, name_ch, children } = categoriesItem;
  //   const category = new Category({
  //     idx,
  //     id,
  //     name_ko,
  //     name_en,
  //     name_ch,
  //     children,
  //   });
  //   try {
  //     await category.save();
  //     req.push(category);
  //   } catch (e) {
  //     ctx.throw(500, e);
  //   }
  // }
  // ctx.body = req;
};

/* 카테고리 조회
GET /api/categories
*/
export const read = async (ctx: Context) => {
  try {
    const categories = await Category.find().exec();
    ctx.body = categories;
  } catch (e) {
    ctx.throw(500, e);
  }
};
