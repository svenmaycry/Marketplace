import { Dispatch, SetStateAction } from "react"

export interface IProduct {
	_id: string
	name: string
	imagePath: string
	price: number
}
export interface ICardItem extends IProduct {
	count: number
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>