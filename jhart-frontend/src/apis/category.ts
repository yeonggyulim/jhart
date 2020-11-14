import axios from 'axios';
const SERVER = 'http://localhost:4000';
const CATEGORY_PREFIX = 'api/categories';

export const categoryApi = {
	get: async () => await axios.get<Category[]>(`${SERVER}/${CATEGORY_PREFIX}`),
	put: async (body: Category[]) =>
		await axios.put(`${SERVER}/${CATEGORY_PREFIX}`, body),
};

export interface Category {
	idx: number;
	id: string;
	name_ko: string;
	name_en: string;
	name_ch: string;
	children: SubCategory;
}

interface SubCategory {
	idx: number;
	id: string;
	name_ko: string;
	name_en: string;
	name_ch: string;
}
