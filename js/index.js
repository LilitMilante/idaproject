const btnAddProduct = document.querySelector('#add-product');
const divProducts = document.querySelector('#products');


btnAddProduct.addEventListener('click', addProductHandler);

function addProductHandler() {
const productName = document.querySelector('#productname').value
const descriptionProduct = document.querySelector('#descriptionproduct').value
const linkProduct = document.querySelector('#linkproduct').value
let priceProduct = document.querySelector('#priceproduct').value

priceProduct = formatPrice(priceProduct)


let product = createProduct(productName, descriptionProduct, linkProduct, priceProduct)

divProducts.append(product)

};

function formatPrice(price) {
  return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
};

function createProduct(name, description, link, price) {
    let product = document.createElement('div')
    product.className = 'item__product'
    product.innerHTML = ` <button class="btn-dlt"><img src="img/delete.svg" alt=""></button>
                          <img src="${link}" alt="">
                          <div class="product__description">
                              <h3>${name}</h3>
                              <p>${description}</p>
                              <div class="product__price">${price} руб.</div>
                          </div>`

    return product
};

/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
    window.onclick = function(event) {
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