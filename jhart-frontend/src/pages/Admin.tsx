import * as React from 'react';

interface IAdminProps {
	children?: React.Component;
}

const Admin: React.FunctionComponent<IAdminProps> = () => {
	return (
		<>
			<div>admin</div>
		</>
	);
};

export default Admin;
