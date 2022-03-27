<template>
    <select @change="filterProduct($event)">
        <option value="">Seçiniz</option>
        <option value="min">En Düşük Fiyat</option>
        <option value="max">En Yüksek Fiyat</option>
        <option value="abc">En Yeniler (A > Z)</option>
        <option value="cba">En Yeniler (Z > A)</option>
    </select>
</template>

<script>
export default {
    name: 'SelectProduct',
    methods: {
        filterProduct(elem) {
            this.$store.commit('sortProduct', elem)
        },
    },
}
</script>

<style></style>
