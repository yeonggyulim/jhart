import axios from 'axios';
const SERVER = document.location.origin;
const API_PREFIX = 'api';
const CATEGORY_PREFIX = 'categories';

export const categoryApi = {
	get: async (): Promise<unknown> =>
		await axios.get<Category[]>(`${SERVER}/${API_PREFIX}/${CATEGORY_PREFIX}`),
	put: async (body: Category[]): Promise<unknown> =>
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
