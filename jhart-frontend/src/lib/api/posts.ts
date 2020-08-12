import client from './client';

export type PostType = {
	title: string;
	body: string;
	categories: string;
};

export const writePost = ({ title, body, categories }: PostType) =>
	client.post('/api/posts', { title, body, categories });
