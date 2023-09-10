export interface IProduct {
	_id: string
	name: string
	imagePath: string
	price: number
}
export interface ICardItem extends IProduct {
	count: number
}

