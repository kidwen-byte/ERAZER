let div = document.getElementById('product_id');
let = id = div.dataset.id;
let message = document.getElementById("message");
let button = document.querySelector('.button');

button.addEventListener("click", function () {

    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    let filter_id = document.getElementById('filter_id').value;
    let quantity_stock = '';
    let check = document.querySelector('.check:checked')

    if (check == null) {
        quantity_stock = document.getElementById('quantity').value;
    } else {
        quantity_stock = check.value;
    }

    let categories_id = document.getElementById('categories_id').value;

    (async () => {
        const response = await fetch('/admin/products/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(
                {
                    id: id,
                    name: name,
                    description: description,
                    price: price,
                    quantity_stock: quantity_stock,
                    categories_id: categories_id,
                    filter_id: filter_id
                }
            )
        });

        let answer = await response.json();
        message.innerText = answer.result;

    })();
});

const checks = document.querySelectorAll('.check');
checks.forEach(function (ch) {
    ch.addEventListener('click', function () {
        var that = this;
        checks.forEach(function (ch2) {
            if (ch2 != that)
                ch2.checked = false;


        });
    });
});