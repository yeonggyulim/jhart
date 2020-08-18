import React from 'react';
import { Header, Footer, Navigation } from '../../components';

const CharacterPage = () => {
	// TODO: id 같은 걸 정해서 categories로 컨테이너 컴포넌트에서
	// 카테고리에 맞는 리스트 가져오기!
	return (
		<>
			<Header />
			<Navigation />
			<div>Processing</div>
			<Footer />
		</>
	);
};

export default CharacterPage;
