let prices = {
    product1: 10000,
    product2: 5000,
    product3: 1000,
    product4: 299,
    product5: 499,
    product6: 699,
    product7: 999,
    product8: 199
};

let quantities = {
  product1: 0,
  product2: 0,
  product3: 0,
  product4: 0,
  product5: 0,
  product6: 0,
  product7: 0,
  product8: 0
};

function increaseQuantity(product) {
    quantities[product]++;
    document.getElementById(product).innerText = quantities[product];
}

function decreaseQuantity(product) {
    if (quantities[product] > 0) {
        quantities[product]--;
        document.getElementById(product).innerText = quantities[product];
    }
}

function calculateTotal() {
    let total = (quantities.product1 * prices.product1) +
                (quantities.product2 * prices.product2) +
                (quantities.product3 * prices.product3) +
                (quantities.product4 * prices.product4) +
                (quantities.product5 * prices.product5) +
                (quantities.product6 * prices.product6) +
                (quantities.product7 * prices.product7) +
                (quantities.product8 * prices.product8);

    document.getElementById("total").innerText = total.toFixed(2);
}
