let products = [];

function showAddProductModal() {
    $('#addProductModal').modal('show');
}

function addProduct() {
    const productName = $('#productName').val();
    const productPrice = parseFloat($('#productPrice').val());
    const productQuantity = parseInt($('#productQuantity').val());

    const product = {
        name: productName,
        price: productPrice,
        quantity: productQuantity
    };

    products.push(product);

    // Display updated product list
    displayProducts();

    // Clear form and close modal
    $('#addProductForm')[0].reset();
    $('#addProductModal').modal('hide');
}

function displayProducts() {
    const productList = $('#product-list');
    productList.empty();

    let total = 0;

    products.forEach(product => {
        const subtotal = product.price * product.quantity;
        total += subtotal;

        const productItem = `<div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text">Harga: ${product.price} | Jumlah: ${product.quantity}</p>
                                    <p class="card-text">Subtotal: ${subtotal}</p>
                                </div>
                            </div>`;

        productList.append(productItem);
    });

    // Display total
    productList.append(`<div class="card mt-3">
                            <div class="card-body">
                                <h5 class="card-title">Total</h5>
                                <p class="card-text">Rp ${total}</p>
                            </div>
                        </div>`);
}
