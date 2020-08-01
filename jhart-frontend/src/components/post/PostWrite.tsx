import React from 'react';
import { WriteActionButtons } from '..';
import { EditorContainer } from '../../containers';

const PostWrite = () => {
	return (
		<>
			<EditorContainer />
			<WriteActionButtons onPublish={() => {}} onCancel={() => {}} />
		</>
	);
};

export default PostWrite;
