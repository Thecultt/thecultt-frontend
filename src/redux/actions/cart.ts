import { Dispatch } from "redux";
import axios from "axios";

import $api from "../../http";

import { ProductPage } from "../../models/IProduct";
import { CartItem } from "../../models/ICartItem";

import { CartActionTypes, CartActions } from "../types/ICart";

export const checkAvailabilityCartItems = (items: { [key: string]: CartItem }) => async (dispatch: Dispatch<CartActions>) => {
	await Promise.all(Object.keys(items).map(async (article) => {
		const { data: { id, images, manufacturer, category, subcategory, name, price, availability, is_trial } } = await $api.get<ProductPage>(`/product/${article}`)

		dispatch({
			type: CartActionTypes.CHANGE_CART_ITEMS,
			payload: {
				article,
				data: {
					id,
					checked: items[article].checked,
					article,
					category,
					subcategory,
					image: images[0],
					manufacturer,
					name,
					price,
					availability,
					is_trial
				}
			}
		})
	}))
}

export const addCartItem = (item: CartItem) => {
	window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
	window.dataLayer.push({
		event: "add_to_cart",
		ecommerce: {
			timestamp: Math.floor(Date.now() / 1000),
			items: [{
				item_name: item.name,
				item_id: `${item.id}`,
				price: `${item.price}`,
				item_brand: item.manufacturer,
				item_category: item.category,
				item_category2: item.subcategory,
				item_category3: "-",
				item_category4: "-",
				item_list_name: "Search Results",
				item_list_id: item.article,
				index: 1,
				quantity: 1
			}]
		}
	});

	// window.mindbox("async", {
	// 	operation: "Website.SetCart",
	// 	data: {
	// 		addProductToList: {
	// 			product: {
	// 				ids: {
	// 					website: item.id
	// 				}
	// 			},
	// 			productGroup: {
	// 				ids: {
	// 					website: item.id
	// 				}
	// 			},
	// 			pricePerItem: item.price
	// 		},
	// 		customer: {
	// 			email: `${localStorage.getItem("email")}`
	// 		}
	// 	}
	// });

	axios.post(`https://api.mindbox.ru/v3/operations/async?endpointId=thecultt.Website&operation=Website.SetCart&deviceUUID=${localStorage.getItem("mindboxDeviceUUID")}`,
		{
			addProductToList: {
				product: {
					ids: {
						website: item.id
					}
				},
				// productGroup: {
				// 	ids: {
				// 		website: item.id
				// 	}
				// },
				pricePerItem: item.price
			},
			customer: {
				email: `${localStorage.getItem("email")}`
			}
		},
		{
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'Accept': 'application/json',
				'Authorization': 'Mindbox secretKey="Lyv5BiL99IxxpHRgOFX0N875s6buFjii"'
			}
		}
	)

	// const cart = JSON.parse(localStorage.getItem("cart") as string);

	// if (cart) {
	// 	window.mindbox("async", {
	// 		operation: "Website.SetCart",
	// 		data: {
	// 			productList: [
	// 				...Object.keys(cart).map((article: any) => (
	// 					{
	// 						product: {
	// 							ids: {
	// 								website: `${cart[article].id}`
	// 							}
	// 						},
	// 						count: "1",
	// 						pricePerItem: cart[article].price
	// 					}
	// 				)),
	// 				{
	// 					product: {
	// 						ids: {
	// 							website: `${item.id}`
	// 						}
	// 					},
	// 					count: "1",
	// 					pricePerItem: item.price
	// 				}]
	// 		}
	// 	});
	// } else {
	// 	window.mindbox("async", {
	// 		operation: "Website.SetCart",
	// 		data: {
	// 			productList: [
	// 				{
	// 					product: {
	// 						ids: {
	// 							website: `${item.id}`
	// 						}
	// 					},
	// 					count: "1",
	// 					pricePerItem: item.price
	// 				}
	// 			]
	// 		}
	// 	});
	// }

	return {
		type: CartActionTypes.ADD_CART_ITEMS,
		payload: item
	}
}

export const changeCheckCartItem = (article: string, status: boolean) => ({
	type: CartActionTypes.CHANGE_CHECK_CART_ITEMS,
	payload: { article, status }
})

export const removeCartItem = (id: string, item: CartItem) => {
	window.dataLayer.push({ ecommerce: null });
	window.dataLayer.push({
		event: "remove_from_cart",
		ecommerce: {
			timestamp: Math.floor(Date.now() / 1000),
			items: [{
				item_name: item.name,
				item_id: `${item.id}`,
				price: `${item.price}`,
				item_brand: item.manufacturer,
				item_category: item.category,
				item_category2: item.subcategory,
				item_category3: "-",
				item_category4: "-",
				item_list_name: "Search Results",
				item_list_id: item.article,
				index: 1,
				quantity: 1
			}]
		}
	});

	axios.post(`https://api.mindbox.ru/v3/operations/async?endpointId=thecultt.Website&operation=Website.ClearCart&deviceUUID=${localStorage.getItem("mindboxDeviceUUID")}`,
		{
			customer: {
				email: `${localStorage.getItem("email")}`
			},
			removeProductFromList: {
				product: {
					ids: {
						website: item.id
					}
				},
				// productGroup: {
				// 	ids: {
				// 		website: item.id
				// 	}
				// },
				pricePerItem: item.price
			},
			executionDateTimeUtc: new Date()
		},
		{
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'Accept': 'application/json',
				'Authorization': 'Mindbox secretKey="Lyv5BiL99IxxpHRgOFX0N875s6buFjii"'
			}
		}
	)

	// window.mindbox("async", {
	// 	operation: "Website.ClearCart",
	// 	data: {
	// 		customer: {
	// 			email: `${localStorage.getItem("email")}`
	// 		},
	// 		removeProductFromList: {
	// 			product: {
	// 				ids: {
	// 					website: item.id
	// 				}
	// 			},
	// 			productGroup: {
	// 				ids: {
	// 					website: item.id
	// 				}
	// 			},
	// 			pricePerItem: item.price
	// 		},
	// 		executionDateTimeUtc: new Date()
	// 	}
	// });

	return {
		type: CartActionTypes.REMOVE_CART_ITEMS,
		payload: id
	}
}

export const setCartIsVisibleMessage = (status: boolean) => ({
	type: CartActionTypes.SET_CART_IS_VISIBLE_MESSAGE,
	payload: status
})