const btnAddProduct = document.querySelector('#add-product');
const divProducts = document.querySelector('#products');


btnAddProduct.addEventListener('click', addProductHandler);

function addProductHandler() {
const productName = document.querySelector('#productname').value
const descriptionProduct = document.querySelector('#descriptionproduct').value
const linkProduct = document.querySelector('#linkproduct').value
const priceProduct = document.querySelector('#priceproduct').value

let product = createProduct(productName, descriptionProduct, linkProduct, priceProduct)

divProducts.append(product)

};

function createProduct(name, description, link, price) {
    let product = document.createElement('div')
    product.className = 'item__product'
    product.innerHTML = `<img src="${link}" alt="">
    <div class="product__description">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="product__price">${price} руб.</div>
    </div>`

    return product
};
