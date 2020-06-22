var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'Unisex, soft socks',
        image: './src/assets/js/vmSocks-green.jpg',
        link: '#',
        inventory: 6,
        onSale: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantImage: './src/assets/js/vmSocks-green.jpg',
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantImage: './src/assets/js/vmSocks-blue.jpg',
                variantColor: "blue"
            }
        ],
        sizes: ["small", "medium", "large"],
        cart: 0
        },
        methods: {
            addToCart() {
                this.cart += 1
            },
            updateProduct(variantImage) {
                this.image = variantImage
            }

    }

})
