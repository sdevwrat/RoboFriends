import React from 'react';
import Card from './Card';

const Cardlist= ({robots}) => {
	const cardcomponent=robots.map((user,i) => {
		return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
	})

	return (
		<div>
			{cardcomponent}
		</div>
	);
}

export default Cardlist;