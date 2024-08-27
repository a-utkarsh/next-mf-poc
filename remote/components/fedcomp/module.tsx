import React, { useState } from 'react';

function HostComp () {

	const [counter, setCounter] = useState (false);

	const handleCounter = () => {
		setCounter ((prev) => prev + 1)
	}

	return (
		<div>
			<button onClick = {handleCounter}> Host Counter Button: {counter}</button>
		</div>
	)
}

export default HostComp
