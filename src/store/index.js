import { createStore } from 'vuex'
// Products Data
import productsData from '@/data/products.js'

export default createStore({
    state: {
        products: [],
        cart: [],
    },
    getters: {
        productQuantity: (state) => state.cart.length,
        allProducts: (state) => state.products,
        cartProducts: (state) => state.cart,
    },
    mutations: {
        setProducts: (state, products) => (state.products = products),
        addToCart(state, product) {
            let item = state.cart.find((i) => i.productId === product.productId)

            if (item) {
                item.quantity++
            } else {
                state.cart.push({ ...product, quantity: 1 })
            }
        },
        removeFromCart(state, id) {
            let item = state.cart.find((i) => i.productId === id)

            if (item.quantity > 1) {
                item.quantity--
            } else {
                state.cart = state.cart.filter((i) => i.productId !== id)
            }
        },
        sortProduct(state, val) {
            let selectValue = val.target.value

            switch (selectValue) {
                case 'min':
                    state.products.sort((a, b) => {
                        return a.price - b.price
                    })
                    break
                case 'max':
                    state.products.sort((a, b) => {
                        return b.price - a.price
                    })
                    break
                case 'abc':
                    state.products.sort((a, b) => {
                        return a.title.localeCompare(b.title)
                    })
                    break
                case 'cba':
                    state.products.sort((a, b) => {
                        return b.title.localeCompare(a.title)
                    })
                    break
                default:
                    console.log('Unexpected Error')
                    break
            }
        },
    },
    actions: {
        fetchProducts({ commit }) {
            commit('setProducts', productsData)
        },
    },
    modules: {},
})
