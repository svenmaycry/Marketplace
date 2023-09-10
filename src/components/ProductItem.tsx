import { useDispatch } from "react-redux"
import { IProduct } from "../types"
import Quantity from "./Quantity"
import { addToCart } from "../store/card/actions"
import { useState } from "react"

interface IProductItem {
	product: IProduct
}

const ProductItem = ({ product }: IProductItem) => {

	const [count, setCount] = useState(0)

	const dispatch = useDispatch()

	const addHandler = () => {
		dispatch(addToCart(product, count))
	}

	return (
		<div className="shadow-md rounded-md p-5 w-3/5 mx-auto mb-7 bg-indigo-300 flex flex-col justify-center items-center text-center">
			<img src={product.imagePath} alt={product.name} width='200' />
			<div className="text-lg font-bold my-1">{product.name}</div>
			<div className="text-sm text-gray-600">{product.price}$</div>
			<Quantity count={count} setCount={setCount} />
			<button onClick={addHandler} className=" bg-orange-400 font-semibold rounded-md py-1 px-2">В корзину</button>
		</div>
	)
}

export default ProductItem
