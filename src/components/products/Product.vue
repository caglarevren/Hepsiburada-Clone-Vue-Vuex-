<template>
    <div>
        {{ product.title }}
        ({{ product.price }})
        <button @click="addToCart">Sepete Ekle</button>
    </div>
</template>

<script>
export default {
    name: 'Product',
    components: {},
    props: ['product'],
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
        },
    },
}
</script>

<style></style>
