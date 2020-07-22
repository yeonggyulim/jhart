import React from 'react';
import { Editor, WriteActionButtons } from '..';

const PostWrite = () => {
	return (
		<>
			<Editor />
			<WriteActionButtons onPublish={() => {}} onCancel={() => {}} />
		</>
	);
};

export default PostWrite;
