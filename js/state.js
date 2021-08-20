let productState = [
    {
        title: 'Product 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
        link: './img/polaroid.png',
        price: '1000'
    },
    {
        title: 'Product 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
        link: './img/polaroid.png',
        price: '5000'
    },
    {
        title: 'Product 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
        link: './img/polaroid.png',
        price: '10000'
    },
    {
        title: 'Product 4',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
        link: './img/polaroid.png',
        price: '15000'
    }
]

function render() {
    const products = productState.map((elem, i) => {
        const price = formatPrice(elem.price)
        const product = createProduct(i, elem.title, elem.description, elem.link, price)

        return product
    })

    divProducts.innerHTML = ''
    divProducts.append(...products)
   
} 

render()


