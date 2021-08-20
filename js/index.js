const btnAddProduct = document.querySelector('#add-product');
const divProducts = document.querySelector('#products');


document.addEventListener('click', (e) => {
    if (e.target.className === 'btn-dlt') {
      deleteProduct(e.target.dataset.product)
    }
})

btnAddProduct.addEventListener('click', addProductHandler);

function addProductHandler() {
  const productName = document.querySelector('#productname').value
  const descriptionProduct = document.querySelector('#descriptionproduct').value
  const linkProduct = document.querySelector('#linkproduct').value
  let priceProduct = document.querySelector('#priceproduct').value

  productState.push({
    title: productName,
    description: descriptionProduct,
    link: linkProduct,
    price: priceProduct
  })

  render()
};

function formatPrice(price) {
  return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
};

function createProduct(index, name, description, link, price) {
  let product = document.createElement('div')
  product.className = 'item__product'
  product.innerHTML = ` <button class="btn-dlt" data-product="${index}"></button>
                          <img src="${link}" alt="product image">
                          <div class="product__description">
                              <h3>${name}</h3>
                              <p>${description}</p>
                              <div class="product__price">${price} руб.</div>
                          </div>`

  return product
};

function deleteProduct(index) {
  const newState =  productState.filter((elem, i) => {
    console.log('index:', i);
      if (index != i) {
        return elem
      }
  })

  productState = newState

  render()
}



/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}