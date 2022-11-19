let model_id = document.getElementById('model_id');
let = id = model_id.dataset.id;
let message = document.getElementById("message");
let button = document.querySelector('.button');

button.addEventListener("click", function () {

    let name = document.getElementById('name').value;

    let brand_id = document.getElementById('brand_id').value;

    (async () => {
        const response = await fetch('/admin/models/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(
                {
                    id: id,
                    name: name,
                    brand_id: brand_id
                }
            )
        });

        let answer = await response.json();
        message.innerText = answer.result;

    })();
});