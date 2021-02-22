import * as React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { Location } from 'history';

const { Header, Sider } = Layout;

const HeaderBlock = styled.div`
	text-align: center;
	font-size: 20px;
	color: white;
`;

interface ISidebarProps {
	location: Location;
}

export const Sidebar: React.FunctionComponent<ISidebarProps> = ({
	location,
}) => {
	return (
		<Sider width="250">
			<Link to="/">
				<Header>
					<HeaderBlock>전흥공예</HeaderBlock>
				</Header>
			</Link>
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={[location.pathname]}
				defaultOpenKeys={[location.pathname.split('/').slice(1)[0]]}
				style={{ borderRight: 0 }}
			>
				<Menu.Item key="/" icon={<DesktopOutlined />}>
					<Link to="/">대시보드</Link>
				</Menu.Item>

				<Menu.Item key="/shops" icon={<PieChartOutlined />}>
					<Link to="/shops">가게 목록</Link>
				</Menu.Item>

				<Menu.Item key="/wef" icon={<FileOutlined />}>
					<Link to="/wef">거래 관리</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};
