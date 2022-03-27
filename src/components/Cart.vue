<template>
    <div>
        Sepet:
        <span v-if="cartTotal">{{ cartTotal }}</span>
        <span v-else>0</span>
        <button @click="showCart">Sepeti Göster</button>
        <div v-if="show" class="cart-products">
            <div
                v-for="cartProduct in cartProducts"
                :key="cartProduct.productId"
            >
                {{ cartProduct.title }}
                Adet: {{ cartProduct.quantity }}
                <button @click="removeFromCart(cartProduct.productId)">
                    Ürünü Sil
                </button>
            </div>
            <div v-if="cartTotal === 0">Sepetinizde ürün bulunamamaktadır.</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Cart',
    data() {
        return {
            show: false,
        }
    },
    methods: {
        showCart() {
            this.show = !this.show
        },
        removeFromCart(id) {
            this.$store.commit('removeFromCart', id)
        },
    },
    computed: {
        ...mapGetters(['cartProducts']),
        cartTotal() {
            return this.$store.getters.productQuantity
        },
    },
}
</script>

<style>
.cart-products {
    padding: 1rem;
    border: 1px solid #fff;
}
</style>
