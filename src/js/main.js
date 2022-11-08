const output = document.getElementById('output-range');
const range = document.getElementById('customRange');
const filters = document.querySelector('#filters');

const PRODUCTS = [
  {
    color: 'green',
    price: 10,
    image: './img/cart.png',
    size: 'S',
  },
  {
    color: 'white',
    price: 20,
    image: './img/cart.png',
    size: 'M',
  },
  {
    color: 'black',
    price: 40,
    image: './img/cart.png',
    size: 'S',
  },
  {
    color: 'white',
    price: 70,
    image: './img/cart.png',
    size: 'XL',
  },
];

range.addEventListener('input', initRangeOutput);
filters.addEventListener('input', productFilters);

function initRangeOutput() {
  output.innerHTML = this.value + ' UAH';
}

function productFilters() {
  const color = filters.querySelector('#select-color').value;
  const checkedSizes = filters.querySelectorAll('.select-size .form-check input:checked');
  const finalSizes = [...checkedSizes].map((item) => item.value);
  const price = range.value;

  filteredItems(
    PRODUCTS.filter(
      ({ color, price, size }) =>
        (!color || color === color) &&
        (!finalSizes.length || finalSizes.includes(size)) &&
        (price == 0 || price >= price)
    )
  );
}

function filteredItems(output) {
  document.getElementById('products').innerHTML = output
    .map(
      ({ image, color, price, size }) => `
        <div class="col-md-6 col-lg-3 card-wrapper mb-5">
          <div class="card">
            <img class="p-3" src="${image}">
            <div class="card-body">
              <p class="card-text">Color: <span class="text-uppercase">${color}</span></p>
              <p class="card-text">Price: ${price} UAH</p>
              <p class="card-text">Size: ${size}</p>
              <a href="#" class="btn btn-success">Buy</a>
            </div>
          </div>
        </div>`
    )
    .join('');
}

filteredItems(PRODUCTS);
