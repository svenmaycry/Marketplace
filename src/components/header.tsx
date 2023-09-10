import cn from 'classnames';
import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/card/actions';


const Header = () => {

	const [isShowCard, setIsShowCard] = useState(false)

	const cart = useTypedSelector(state => state.cart)

	const total = cart.reduce((acc, item) =>
		acc + item.price
		, 0)

	const dispatch = useDispatch()

	const removeHandler = (id: string) => {
		dispatch(removeFromCart(id))
	}

	return (
		<div
			className='flex items-center justify-between relative w-full py-1 px-3 mb-4'
			style={{
				background:
					'linear-gradient(90deg, rgba(12, 7, 7) 0%, rgba(204, 132, 24) 100%)',
				boxShadow: '1px 3px 30px 0px rgba(50, 50, 50, 0.75)',
			}}
		>
			<img className=' py-3' src='../img/obsidian.svg' alt="" width='250' />

			<button className='bg-transparent border-none relative' onClick={() => setIsShowCard(!isShowCard)}>
				<img src='./img/bx-cart.svg' alt="" width='40' />
				<div className='text-white absolute bottom-0 right-0 font-bold rounded-full  bg-slate-600 w-5 h-5 flex items-center justify-center'>{cart.length}</div>
			</button>

			<div className={cn('absolute right-0 top-20 shadow-lg rounded-lg mr-2 bg-indigo-300 p-3', {
				hidden: !isShowCard
			})}
			>
				{cart.map(item => (
					<div className='flex items-center mb-3' key={item._id}>
						<img
							src={item.imagePath}
							alt={item.name}
							width='55'
							height='55'
							className=' mr-3'
						/>
						<div>
							<div className='font-semibold'>{item.name}</div>
							<div>{`${item.count} x $${item.price.toLocaleString()}`}</div>
							<button
								className='text-red-700 bg-transparent border-0'
								onClick={() => removeHandler(item._id)}
							>
								Удалить
							</button>
						</div>
					</div>
				))}
				<div className='text-lg border-solid border-t-2 border-black pt-2'>
					<span className='text-red-600'>Total</span>: <b>${total.toLocaleString()}</b>
				</div>
			</div>
		</div>
	)
}

export default Header