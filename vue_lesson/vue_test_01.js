// Vue.js для начинающих
// урок 1: экземпляр Vue
// урок 2: привязка атрибутов
// урок 3: условный рендеринг
// урок 4: рендеринг списков
// урок 5: обработка событий
// -------
// урок 6: привязка классов и стилей
// урок 7: вычисляемые свойства
// урок 8: компоненты


var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        color: "green",
        image: "./assets/vmSocks-green-onWhite.jpg",
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        altText: "A pair of socks",
        inStock: true,
        inventory: 20,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {variantId: 2234, variantColor: 'green', variantImage: "./assets/vmSocks-green-onWhite.jpg"},
            {variantId: 2235, variantColor: 'blue', variantImage: "./assets/vmSocks-blue-onWhite.jpg"}
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0
    },
    methods: {

        addToCart() {
            this.cart += 1
        },

        updateProduct(variantImage) {
            this.image = variantImage
        },

    }
})
