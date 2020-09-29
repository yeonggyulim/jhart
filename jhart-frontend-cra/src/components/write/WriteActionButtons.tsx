import React from 'react';
import { Button } from '..';

type WriteACtionButtonsType = {
	onCancel: () => void;
	onPublish: () => void;
};

const WriteActionButtons = ({ onCancel, onPublish }: WriteACtionButtonsType) => {
	return (
		<div className="write-action">
			<Button className="cyan" onClick={onPublish}>
				포스트 등록
			</Button>
			<Button onClick={onCancel}>
				취소
			</Button>
		</div>
	);
};

export default WriteActionButtons;
