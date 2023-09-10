import cn from 'classnames';
import { ICardItem } from '../types';
import { useState } from 'react';

const cardItems: ICardItem[] = [
	{
		_id: 'wow1',
		imagePath: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f8bcc0d18f5a4817a720a159f0f8c37c_292x292.webp',
		name: 'Пицца Жюльен',
		count: 1,
		price: 489,
	},
]

const Header = () => {

	const [isShowCard, setIsShowCard] = useState(false)

	const total = cardItems.reduce((acc, item) =>
		acc + item.price
		, 0)

	const removeHandler = (id: string) => {
		console.log(id);
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

			<button className='bg-transparent border-none' onClick={() => setIsShowCard(!isShowCard)}>
				<img src='./img/bx-cart.svg' alt="" width='40' />
			</button>

			<div className={cn('absolute right-0 top-20 shadow-lg p-5 rounded-lg mr-2 bg-indigo-300', {
				hidden: !isShowCard
			})}
			>
				{cardItems.map(item => (
					<div className='flex items-center mb-1' key={item._id}>
						<img
							src={item.imagePath}
							alt={item.name}
							width='55'
							height='55'
							className=' mr-3'
						/>
						<div>
							<div>{item.name}</div>
							<div>{`${item.count} x $${item.price}`}</div>
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
					Total: <b>${total}</b>
				</div>
			</div>
		</div>
	)
}

export default Header