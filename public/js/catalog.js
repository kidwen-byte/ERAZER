window.addEventListener("load", function() {
    var element = document.getElementById("catalog-menu-closer");
    element.onclick = function(){
        if (element.className.baseVal == "catalog-menu-close"){
            console.log("yes");
            document.querySelector(".catalog-menu").classList.remove("catalog-menu-closed");
            document.querySelector(".catalog-menu").classList.add("catalog-menu-opened");
            element.classList.remove("catalog-menu-close");
            element.classList.add("catalog-menu-open");
        }else{
            console.log("no");
            document.querySelector(".catalog-menu").classList.remove("catalog-menu-opened");
            document.querySelector(".catalog-menu").classList.add("catalog-menu-closed");
            element.classList.remove("catalog-menu-open");
            element.classList.add("catalog-menu-close");
        }
    };
});


class ProductItem extends ItemDynamicList {
    renderTemplate() {
        let order_button = `<a href="javascript:void(0)" class="black-button btn-buy" data-id="${this.id}">В корзину</a>`;
        if (this.quantity_stock == 'Нет в наличии' || this.quantity_stock == 'Ожидается поставка') {
            order_button = `<p class="not-buy">Нет в наличии</p>`;
        }
        return `
            <a class="product-item__link" href="/catalog/${this.id}">
                 <img class="product_item__img" src="/images/products/${this.image}" alt="${this.name}" >
                 <p class="product_item__header">${this.name}</p>
            </a>
            <div class="product_item__bottom">
                <div class="product_item__price">${this.price} &#8381;</div>
                ${order_button}
            </div>
        `;
    }

}

class Products extends DynamicList {
    constructor(idList, pageSize=10, urlApi='/api/products', itemClassName='product-item') {
        super(idList, pageSize, urlApi, itemClassName);
    }

    addElEventListeners(id) {
        application.addListenerToBtnBuy('#'+id+' .btn-buy');
    }

    newItem(id, data) {
        return new ProductItem(this.elList, id, data, this.itemClassName);
    }    

}