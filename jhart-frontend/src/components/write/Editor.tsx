import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type EditorProps = {
	title: string;
	body: string;
	onChangeField: Function;
};

const Editor = ({ title, body, onChangeField }: EditorProps) => {
	const onChangeBody = (html: string) => {
		onChangeField({ key: 'body', value: html });
	};

	const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeField({ key: 'title', value: e.target.value });
	};

	return (
		<div className="editor-block">
			<input
				className="title"
				placeholder="제목을 입력하세요"
				value={title}
				onChange={onChangeTitle}
			/>
			<div className="quill-wrapper">
				<ReactQuill
					theme={'snow'}
					onChange={onChangeBody}
					value={body}
					modules={Editor.modules}
					formats={Editor.formats}
					bounds={'.quill-wrapper'}
					placeholder="내용을 작성하세요..."
				/>
			</div>
		</div>
	);
};

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
	toolbar: [
		[{ header: '1' }, { header: '2' }, { font: [] }],
		[{ size: [] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[
			{ list: 'ordered' },
			{ list: 'bullet' },
			{ indent: '-1' },
			{ indent: '+1' },
		],
		['link', 'image', 'video'],
		['clean'],
	],
	clipboard: {
		// toggle to add extra line breaks when pasting HTML:
		matchVisual: false,
	},
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'video',
];

export default Editor;
