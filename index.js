/* eslint-disable eqeqeq */

let productState = [
  {
    title: 'Product 1',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
    link: './img/polaroid.png',
    price: 12000,
  },
  {
    title: 'Product 2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
    link: './img/polaroid.png',
    price: 5000,
  },
  {
    title: 'Product 3',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
    link: './img/polaroid.png',
    price: 10000,
  },
  {
    title: 'Product 4',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
    link: './img/polaroid.png',
    price: 3000,
  },
  {
    title: 'Product 1',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
    link: './img/polaroid.png',
    price: 12000,
  },
  {
    title: 'Product 2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
    link: './img/polaroid.png',
    price: 5000,
  },
  {
    title: 'Product 3',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
    link: './img/polaroid.png',
    price: 10000,
  },
  {
    title: 'Product 4',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime cum vero architecto at tempora, ratione ipsam quisquam ducimus magnam molestiae! Culpa magnam ab asperiores saepe sunt quasi odio minima quaerat?',
    link: './img/polaroid.png',
    price: 3000,
  },
];

const productName = document.querySelector('#productname');
const descriptionProduct = document.querySelector('#descriptionproduct');
const linkProduct = document.querySelector('#linkproduct');
const priceProduct = document.querySelector('#priceproduct');
const btnAddProduct = document.querySelector('#add-product');
const divProducts = document.querySelector('#products');
const btndropdown = document.querySelector('#btndropdown');
const dropdownContent = document.querySelector('#dropdown-content');
const btnSortPriceAsc = document.querySelector('#sortPriceAsc');
const btnSortPriceDesc = document.querySelector('#sortPriceDesc');
const btnSortTitleAsc = document.querySelector('#sortTitleAsc');

const formState = {
  title: '',
  description: '',
  link: '',
  price: 0,
};

function setBtnDisabled(value) {
  btnAddProduct.disabled = value;
}

function checkForm() {
  const keys = Object.keys(formState);
  for (let v = 0; v < keys.length; v += 1) {
    if (
      (
        !formState[keys[v]]
      || formState[keys[v]] == '0'
      )
      && keys[v] !== 'description'
    ) {
      setBtnDisabled(true);

      return;
    }
  }
  setBtnDisabled(false);
}

function onChangeTitle(e) {
  const { value } = e.target;
  formState.title = value;

  if (!value) {
    e.target.classList.add('empty');
  } else {
    e.target.classList.remove('empty');
  }

  checkForm();
}

function onChangeDescription(e) {
  const { value } = e.target;
  formState.description = value;
}

function onChangeLink(e) {
  const { value } = e.target;
  formState.link = value;

  if (!value) {
    e.target.classList.add('empty');
  } else {
    e.target.classList.remove('empty');
  }

  checkForm();
}

function onChangePrice(e) {
  const { value } = e.target;
  formState.price = value;

  if (!value || value == '0') {
    e.target.classList.add('empty');
  } else {
    e.target.classList.remove('empty');
  }

  checkForm();
}

function formatPrice(price) {
  return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

function createProduct(index, name, description, link, price) {
  const product = document.createElement('div');
  product.className = 'item__product';
  product.innerHTML = ` <button class="btn-dlt" data-product="${index}"></button>
                          <img src="${link}" alt="product image">
                          <div class="product__description">
                              <h3>${name}</h3>
                              <p>${description}</p>
                              <div class="product__price">${price} руб.</div>
                          </div>`;

  return product;
}

function render() {
  const products = productState.map((elem, i) => {
    const price = formatPrice(elem.price);
    const product = createProduct(i, elem.title, elem.description, elem.link, price);

    return product;
  });

  divProducts.innerHTML = '';
  divProducts.append(...products);
}

function addProductHandler() {
  productState.push({ ...formState });

  render();
}

function deleteProduct(index) {
  const newState = productState.filter((elem, i) => {
    if (index != i) {
      return elem;
    }
    return null;
  });

  productState = newState;

  render();
}

// sorting

function showSorting() {
  dropdownContent.classList.toggle('show');
}

function closeSorting() {
  const dropdowns = document.getElementsByClassName('dropdown__content');
  for (let i = 0; i < dropdowns.length; i += 1) {
    const openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

function sortByPrice(arr, typeSort = 'asc') {
  arr.sort((a, b) => {
    if (a.price === b.price) {
      return 0;
    }

    if (typeSort === 'desc') {
      if (a.price > b.price) {
        return -1;
      }

      return 1;
    }

    if (a.price > b.price) {
      return 1;
    }

    return -1;
  });
}

function sortByPriceAscHandler() {
  sortByPrice(productState);

  btndropdown.innerHTML = 'По возрастанию цены';

  render();
}

function sortByPriceDescHandler() {
  sortByPrice(productState, 'desc');

  btndropdown.innerHTML = 'По убываню цены';

  render();
}

function sortByTitle(arr) {
  arr.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }

    if (a.title < b.title) {
      return -1;
    }

    return 0;
  });
}

function sortByTitleAscHandler() {
  sortByTitle(productState);

  btndropdown.innerHTML = 'По наименованию';

  render();
}

// listeners

document.addEventListener('click', (e) => {
  if (e.target.className === 'btn-dlt') {
    deleteProduct(e.target.dataset.product);
  }

  if (!e.target.matches('.dropbtn')) {
    closeSorting();
  }
});
btnAddProduct.addEventListener('click', addProductHandler);
productName.addEventListener('input', onChangeTitle);
descriptionProduct.addEventListener('input', onChangeDescription);
linkProduct.addEventListener('input', onChangeLink);
priceProduct.addEventListener('input', onChangePrice);
btndropdown.addEventListener('click', showSorting);
btnSortPriceAsc.addEventListener('click', sortByPriceAscHandler);
btnSortPriceDesc.addEventListener('click', sortByPriceDescHandler);
btnSortTitleAsc.addEventListener('click', sortByTitleAscHandler);

render();
