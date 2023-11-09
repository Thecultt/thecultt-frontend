export interface Product {
	id: number,
	article: string,
	price: number,
	store_price: number,
	condition: string,
	manufacturer: string,
	model_name: string,
	availability: number,
	images: string[]
	num_of_favorites: number
	category: string
	subcategory: string
	ring_size: string
}

export interface ProductPage {
	id: number,
	article: string,
	price: number,
	store_price: number,
	condition: string,
	manufacturer: string,
	model_name: string,
	availability: number,
	category: string,
	images: string[]
	description: string
	gender: string
	color: string
	subcategory: string

	nuances: string

	external_material: string
	lining_material: string
	kit: string
	model_height: string
	length: string
	width: string
	height: string
	handle_length: string
	strap_length: string
	leather_type: string
	bag_year: string
	brand_size: string
	hardware: string
	insole_length: string
	heel_height: string
	shoe_sizes: string
	style: string
	lens_type: string
	frame_type: string
	glasses_sizes: string
	diameter: string
	scarf_composition: string
	ring_size: string
	jewelry_material: string
}