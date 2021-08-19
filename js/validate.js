// const btnAddProduct = document.querySelector('#add-product');

const productName = document.querySelector('#productname')
const descriptionProduct = document.querySelector('#descriptionproduct')
const linkProduct = document.querySelector('#linkproduct')
const priceProduct = document.querySelector('#priceproduct')

productName.addEventListener('input', onChangeTitle)
descriptionProduct.addEventListener('input', onChangeDescription)
linkProduct.addEventListener('input', onChangeLink)
priceProduct.addEventListener('input', onChangePrice)

let formState = {
    title: '',
    description: '',
    link: '',
    price: 0
}


function onChangeTitle(e) {
    const value = e.target.value
    formState.title = value

    if (!value) {
        e.target.classList.add('empty')
    } else {
        e.target.classList.remove('empty')
    }

    checkForm()
}

function onChangeDescription(e) {
    const value = e.target.value
    formState.description = value
}

function onChangeLink(e) {
    const value = e.target.value
    formState.link = value

    if (!value) {
        e.target.classList.add('empty')
    } else {
        e.target.classList.remove('empty')
    }

    checkForm()
}

function onChangePrice(e) {
    const value = e.target.value
    formState.price = value

    if (!value || value == '0') {
        e.target.classList.add('empty')
    } else {
        e.target.classList.remove('empty')
    }

    checkForm()
}

function checkForm() {
   for (v in formState) {
    if (v === 'description') {
        continue
    }

    if (!formState[v] || formState[v] == '0') {
        setBtnDisabled(true)

        return
    } 
   }

   setBtnDisabled(false)
}

function setBtnDisabled(value) {
    btnAddProduct.disabled = value
}