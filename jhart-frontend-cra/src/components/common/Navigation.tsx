import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

type Navigation = {
	title: string;
	link: string;
};

type Navigations = {
	// '/': [];
	'/information': Navigation[];
	'/processing': Navigation[];
	'/modeling': Navigation[];
	'/buddhism-art': Navigation[];
	// '/contact-us': [];
};

// type RootNavigation = '/' | '/information' | '/processing' | '/modeling' | '/buddhism-art' | '/contact-us';
type RootNavigation =
	| '/information'
	| '/processing'
	| '/modeling'
	| '/buddhism-art';

const Navigation = ({ location }: RouteComponentProps) => {
	const navigations: Navigations = {
		// '/': [],
		'/information': [
			{ title: '회사 소개', link: '/information' },
			{ title: '찾아오시는 길', link: '/information/map' },
			{ title: '연혁', link: '/information/career' },
		],
		'/processing': [
			{ title: '대불 조성', link: '/processing/buddha-statue' },
			{ title: '유지 보수', link: '/processing/antique' },
			{ title: '캐릭터', link: '/processing/character' },
		],
		'/modeling': [
			{ title: '전시 미술', link: '/modeling/art-exhibition' },
			{ title: '디오라마', link: '/modeling/diorama' },
			{ title: '유물 복제', link: '/modeling/antique-reproduction' },
			{ title: '문화재', link: '/modeling/cultural-assets' },
			{ title: '인물', link: '/modeling/statue' },
			{ title: '조형물', link: '/modeling/sculpture' },
			{ title: '캐릭터', link: '/modeling/character' },
			{ title: '모형', link: '/modeling/model' },
		],
		'/buddhism-art': [
			{ title: '대불 조성', link: '/buddhism-art/buddhism-statue' },
			{ title: '불교 조각', link: '/buddhism-art/buddhist-sculpture' },
			{ title: '불교 건축', link: '/buddhism-art/buddhist-architecture' },
			{ title: '불교 용품', link: '/buddhism-art/buddhist-goods' },
			{ title: '3D Data', link: '/buddhism-art/3d-data' },
		],
		// '/contact-us': [],
	};

	const path = location.pathname;
	const rootPath = ('/' + path.split('/')[1]) as RootNavigation;

	return (
		<div className="outer-layout navigation">
			<div className="inner-layout navigation">
				<nav>
					{rootPath &&
						navigations[rootPath].map((navigation: Navigation) => {
							return <Link to={navigation.link}>{navigation.title}</Link>;
						})}
				</nav>
			</div>
		</div>
	);
};

export default withRouter(Navigation);
