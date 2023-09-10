import { useState } from 'react';

const Quantity = () => {

	const [count, setCount] = useState(0)


	return (
		<div className=" flex items-center my-2">
			<button onClick={() => count > 0 && setCount(count - 1)}>-</button>
			<input type="number" className="mx-2" onChange={e => setCount(+e.target.value)} value={count} />
			<button onClick={() => count < 30 && setCount(count + 1)}>+</button>
		</div >
	)
}

export default Quantity
