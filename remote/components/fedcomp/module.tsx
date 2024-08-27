import React, { useState } from 'react';

function RemoteComp () {

	const [counter, setCounter] = useState (false);

	const handleCounter = () => {
		setCounter ((prev) => prev + 1)
	}

	return (
		<div>
			<button onClick = {handleCounter}> Remote Counter Button: {counter}</button>
		</div>
	)
}

export default RemoteComp
