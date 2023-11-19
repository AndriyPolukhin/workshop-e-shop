export const addDecimals = (num) => {
	return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
	// * Calculate items price
	const itemsPrice = state.cartItems.reduce(
		(acc, item) => acc + (item.price * 100 * item.qty) / 100,
		0
	)
	state.itemsPrice = addDecimals(itemsPrice)
	// * Calculate shipping price ( if order over $100 then free, else $10 shipping)
	const shippingPrice = itemsPrice > 100 ? 0 : 10
	state.shippingPrice = addDecimals(shippingPrice)
	// * Calculate tax price
	const taxPrice = 0.15 * itemsPrice
	state.taxPrice = addDecimals(taxPrice)
	// * Calculate total price
	const totalPrice = itemsPrice + shippingPrice + taxPrice
	state.totalPrice = addDecimals(totalPrice)

	// Save to LocalStorage
	localStorage.setItem('cart', JSON.stringify(state))

	return state
}
