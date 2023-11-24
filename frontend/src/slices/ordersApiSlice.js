import { apiSlice } from './apiSlice'
import { ORDERS_URL, PAYPAL_URL } from '../constants'

export const orderApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createOrder: builder.mutation({
			query: (order) => ({
				url: ORDERS_URL,
				method: 'POST',
				body: { ...order },
			}),
		}),
		getOrderDetails: builder.query({
			query: (orderId) => ({
				url: `${ORDERS_URL}/${orderId}`,
				method: 'GET',
			}),
			keepUnusedDataFor: 5,
		}),
		payOrder: builder.mutation({
			query: ({ orderId, details }) => ({
				url: `${ORDERS_URL}/${orderId}/pay`,
				method: 'PUT',
				body: { ...details },
			}),
		}),
		getPayPalClientId: builder.query({
			query: () => ({
				url: `${PAYPAL_URL}`,
				method: 'GET',
			}),
			keepUnusedDataFor: 5,
		}),
		getMyOrders: builder.query({
			query: () => ({
				url: `${ORDERS_URL}/myorders`,
			}),
			keepUnusedDataFor: 5,
		}),
		getOrders: builder.query({
			query: () => ({
				url: ORDERS_URL,
				method: 'GET',
			}),
			keepUnusedDataFor: 5,
		}),
	}),
})

export const {
	useCreateOrderMutation,
	useGetOrderDetailsQuery,
	usePayOrderMutation,
	useGetPayPalClientIdQuery,
	useGetMyOrdersQuery,
	useGetOrdersQuery,
} = orderApiSlice
