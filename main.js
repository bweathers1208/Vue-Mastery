var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        description: 'Unisex, soft socks',
        image: './src/assets/js/vmSocks-green.jpg',
        link: '#',
        inventory: 6,
        onSale: true,
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        
        variants: [
            {
                variantId: 2234,
                variantImage: './src/assets/js/vmSocks-green.jpg',
                variantColor: "#50C878"
            },
            {
                variantId: 2235,
                variantImage: './src/assets/js/vmSocks-blue.jpg',
                variantColor: "#1c4966"
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

    }, 
    computed: {
        title() {
            return this.brand + ' ' + this.product 
        },
        saleItem() {
            return this.brand + ' ' + this.product
        }
    }

})
