import React from 'react';

const Card = (props) => {
	return (
	<div className = "bg-light-green dib ma2 br3 pa3 grow pointer">
		<img src={`https://robohash.org/${props.name}?100x100`} alt="robo" />
		<div>
			<h2>{props.name}</h2>
			<p>{props.email}</p>
		</div>
	</div>
	);
}

export default Card;
