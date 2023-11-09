export interface OrderProduct {
	color: string
	condition: string
	images: string[]
	kit: any
	manufacturer: string
	model_name: string
	price: number
}

export interface Order {
	client_name: string
	client_phone: string
	cost: string
	createdon: string | null
	delivery_address: string
	delivery_type: string
	id: number
	num: string
	payment_type: string
	products: OrderProduct[]
	status: string
	status_description: string
}