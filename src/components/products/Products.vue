<template>
    <div v-for="product in allProducts" :key="product.productId">
        <Product :product="product" />
    </div>
</template>

<script>
// Components
import Product from '@/components/products/Product.vue'

export default {
    name: 'Products',
    props: ['allProducts'],
    components: {
        Product,
    },
}
</script>

<style></style>
