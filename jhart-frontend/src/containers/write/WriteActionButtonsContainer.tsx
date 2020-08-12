import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { writeActions } from '../../modules/write';
import { RootState } from '../../modules';

const WriteACtionButtonsContainer = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { title, body, categories, post, postError } = useSelector(
		({ write }: RootState) => ({
			title: write.title,
			body: write.body,
			categories: write.categories,
			post: write.post,
			postError: write.postError,
		}),
	);

	const onPublish = () => {
		dispatch(
			writeActions.writePost({
				title,
				body,
				categories,
			}),
		);
	};

	const onCancel = () => {
		history.goBack();
	};

	// 성공 혹은 실패시 할 작업
	useEffect(() => {
		// TODO
		if (post) {
			console.log(post);
		}
		if (postError) {
			console.log(postError);
		}
	}, [history, post, postError]);
	return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteACtionButtonsContainer;
