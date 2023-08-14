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
	images: string[]
	description: string
}