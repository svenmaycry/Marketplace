import { IProduct } from "../types"
import ProductItem from "./ProductItem"

const products: IProduct[] = [
	{
		_id: 'wow2',
		imagePath: 'https://dodopizza-a.akamaihd.net/static/Img/Products/f8bcc0d18f5a4817a720a159f0f8c37c_292x292.webp',
		name: 'Пицца Жюльен',
		price: 489,
	},
	{
		_id: 'wow3',
		imagePath: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_292x292.webp',
		name: 'Пицца Сырная',
		price: 400,
	},
	{
		_id: 'wow4',
		imagePath: 'https://dodopizza-a.akamaihd.net/static/Img/Products/03c840b1ab6f4ccb84f5dc167e146598_292x292.webp',
		name: 'Диабло',
		price: 435,
	},
]

const Products = () => {
	return (
		<div>
			{products.map(product => (
				<ProductItem product={product} key={product._id} />
			))}
		</div>
	)
}

export default Products
