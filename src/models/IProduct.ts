export interface Product {
	id: number,
	article: string,
	name: string,
	price: number,
	store_price: number,
	condition: string,
	manufacturer: string,
	availability: number,
	images: string[]
	num_of_favorites: number
}

export interface ProductPage {
	id: number,
	article: string,
	name: string,
	price: number,
	store_price: number,
	condition: string,
	manufacturer: string,
	availability: number,
	category: string,
	images: string[]
	description: string
	gender: string
	color: string
	length: string
	width: string
	height: string
}