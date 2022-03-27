<template>
    <input type="text" v-model="searchTerm" />
    <Cart />
    <SelectProduct />
    <Products :allProducts="filterProducts" />
</template>

<script>
// Components
import Products from '@/components/products/Products.vue'
import Cart from '@/components/Cart.vue'
import SelectProduct from '@/components/SelectProduct.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'App',
    components: {
        Products,
        Cart,
        SelectProduct,
    },
    data() {
        return {
            searchTerm: '',
        }
    },
    methods: {
        ...mapActions(['fetchProducts']),
    },
    computed: {
        ...mapGetters(['allProducts']),

        filterProducts() {
            if (this.searchTerm.length > 2) {
                return this.allProducts.filter((product) =>
                    product.title
                        .toLowerCase()
                        .includes(this.searchTerm.toLowerCase())
                )
            } else {
                return this.allProducts
            }
        },
    },
    created() {
        this.fetchProducts()
    },
}
</script>

<style></style>
