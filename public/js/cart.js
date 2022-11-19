class CartItem extends ItemDynamicList {
    renderTemplate() {
        let total = this.quantity * this.product.price;
        return `
            <div class="cart-block">    
            <div class="cart__item_right">   
                <div data-total="${total}">
                    <a class="cart__item_header normal-link transition" href="/catalog/${this.product_id}">${this.product.name}</a>
                </div> 
                <div>${this.quantity} X ${this.product.price} = ${total} &#8381;</div>
            </div>
                <div class="cart__item_buttons">
                    <a href="" data-cart_id='${this.id}' data-action='subItem' class='cart-item-edit black-button black-button_sm'>
                        <svg class="cart-item-edit-svg transition" viewBox="-0.57 0 7.4083335 7.4083335" id="svg8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs2"/><g id="layer1" transform="translate(-33.427884,-320.81249)"><path d="m 133,122 a 1.0001001,1.0001001 0 0 0 -0.99609,0.99609 l -0.008,4.00196 a 1.0002463,1.0002463 0 1 0 2,0 V 124 H 148 v 24 h -14.00391 v -2.99805 a 1.0002463,1.0002463 0 1 0 -2,0 l 0.008,4.00196 A 1.0001001,1.0001001 0 0 0 133,150 h 16.00391 A 1.0001001,1.0001001 0 0 0 150,149.00391 V 122.99609 A 1.0001001,1.0001001 0 0 0 149.00391,122 Z m -0.008,7.3457 c -3.65973,0 -6.65039,2.99068 -6.65039,6.65039 0,3.65976 2.99066,6.64453 6.65039,6.64453 3.65973,0 6.64453,-2.98477 6.64453,-6.64453 0,-3.65971 -2.9848,-6.65039 -6.64453,-6.65039 z m 0,2 c 2.57885,0 4.64258,2.07155 4.64258,4.65039 0,2.57889 -2.06373,4.64258 -4.64258,4.64258 -2.57885,0 -4.65039,-2.06369 -4.65039,-4.64258 0,-2.57884 2.07154,-4.65039 4.65039,-4.65039 z M 129.99414,135 a 1.000252,1.000252 0 1 0 0,2 h 6.00195 a 1.000252,1.000252 0 1 0 0,-2 z" id="icon-19" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"/></g></svg>
                    </a>
                    <a href="" data-cart_id='${this.id}' data-action='addItem' class='cart-item-edit black-button black-button_sm'>
                        <svg class="cart-item-edit-svg transition" viewBox="-0.58 0 7.4083335 7.4083335" id="svg8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs2"/><g id="layer1" transform="translate(-22.845623,-320.81249)"><path d="M 92.996094,122 C 92.44688,122.0022 92.002198,122.44688 92,122.99609 v 4.00196 c 0,1.33463 2.001953,1.33463 2.001953,0 V 124 h 13.994137 v 24 H 94.001953 v -2.99805 c 0,-1.33463 -2.001953,-1.33463 -2.001953,0 v 4.00196 c 0.0022,0.54921 0.44688,0.99389 0.996094,0.99609 h 16.005856 c 0.54922,-0.002 0.9939,-0.44687 0.9961,-0.99609 v -26.00782 c -0.002,-0.54922 -0.44688,-0.9939 -0.9961,-0.99609 z m -0.0059,7.3457 c -3.659731,0 -6.644531,2.99068 -6.644531,6.65039 0,3.65976 2.9848,6.64453 6.644531,6.64453 3.659728,0 6.650391,-2.98477 6.650391,-6.64453 0,-3.65971 -2.990663,-6.65039 -6.650391,-6.65039 z m 0,2 c 2.578848,0 4.650391,2.07155 4.650391,4.65039 0,2.57889 -2.071543,4.64258 -4.650391,4.64258 -2.578851,0 -4.65039,-2.06369 -4.65039,-4.64258 0,-2.57884 2.071539,-4.65039 4.65039,-4.65039 z M 92,133 v 2 h -2 c -1.363604,-0.0306 -1.363604,2.03061 0,2 h 2 v 2 c 0,1.33463 2.001953,1.33463 2.001953,0 v -2 h 1.992188 c 1.363604,0.0306 1.363604,-2.03061 0,-2 h -1.992188 v -2 C 94.001953,131.64675 92,131.69866 92,133 Z" id="icon-18" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"/></g></svg>
                    </a>
                    <a href="" data-cart_id='${this.id}' data-action='deleteItem' class='cart-item-edit black-button black-button_sm'>
                        <svg class="cart-item-edit-svg transition" viewBox="-0.57 0 7.4083376 7.4083376" id="svg8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs2"/><g id="layer1" transform="translate(-44.011789,-320.81248)"><path d="m 173.00195,122 c -0.55226,-0.002 -1.00169,0.44383 -1.0039,0.99609 v 4.00196 c -0.0303,1.36326 2.03026,1.36326 2,0 V 124 h 14.0039 v 24 h -14.0039 v -2.99805 c 0.0303,-1.36326 -2.03026,-1.36326 -2,0 v 4.00196 c 0.002,0.55226 0.45164,0.99819 1.0039,0.99609 h 15.9961 c 0.55226,0.002 1.00169,-0.44383 1.0039,-0.99609 v -26.00782 c -0.002,-0.55226 -0.45164,-0.99819 -1.0039,-0.99609 z m -0.0156,7.3457 c -3.65973,0 -6.64258,2.99068 -6.64258,6.65039 0,3.65976 2.98285,6.64453 6.64258,6.64453 3.65973,0 6.65234,-2.98477 6.65234,-6.64453 0,-3.65971 -2.99261,-6.65039 -6.65234,-6.65039 z m 0,2 c 2.57885,0 4.65234,2.07155 4.65234,4.65039 0,2.57889 -2.07349,4.64258 -4.65234,4.64258 -2.57885,0 -4.64258,-2.06369 -4.64258,-4.64258 0,-2.57884 2.06373,-4.65039 4.64258,-4.65039 z m -2.81836,3.24024 1.41406,1.41406 -1.41406,1.41406 c -0.86543,0.94317 0.47283,2.28144 1.41601,1.41602 l 1.41407,-1.41406 1.41406,1.41406 c 0.94376,0.9866 2.40327,-0.4709 1.41797,-1.41602 L 174.41602,136 l 1.41406,-1.41406 c 0.93611,-0.93611 -0.47973,-2.35621 -1.41797,-1.41797 l -1.41406,1.41406 -1.41407,-1.41406 c -0.97013,-0.97013 -2.37322,0.46076 -1.41601,1.41797 z" id="icon-20" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"/></g></svg>
                    </a>
                </div>
            </div>
        `;
    }

}

class Cart extends DynamicList {

    constructor(idList, pageSize=10, urlApi='/api/cart', itemClassName='cart__item') {
        super(idList, pageSize, urlApi, itemClassName);
        this.total = 0;
        this.changeTotal();
    }

    newItem(id, data) {
        return new CartItem(this.elList, id, data, this.itemClassName);
    }


    addElEventListeners(id) {
        let btns = document.querySelectorAll('#'+id+' .cart-item-edit')
        btns.forEach((btn) => {
            btn.addEventListener('click', event => {
                this.doFeedBack(
                    btn.dataset['action'],
                    btn.dataset['cart_id']
                );
                event.preventDefault();
            });
        })
    }

    async addItem(id, data, position = 'beforeend') {
        let sum = (!(id in this.items)) ? 0 : Number(this.items[id].product.price * this.items[id].quantity);
        super.addItem(id, data, position);
        this.total += Number(this.items[id].product.price * this.items[id].quantity) - sum;
        this.changeTotal();

    }
    async deleteItem(id) {
        let sum = Number(this.items[id].product.price * this.items[id].quantity);
        super.deleteItem(id);
        this.total -= sum;
        this.changeTotal();
    }

    changeTotal() {
        document.querySelector('#total_cart').innerHTML = `Итого: ${Number(this.total)} &#8381;`;
        let make_order = document.querySelector('#make_order');
        make_order.style.display = (Number(this.total) > 0) ? "block" : "none";
    }

    async doFeedBack(action, id) {
        let answer = await application.postJson(this.getURLApi(action), {
            'id': id
        });

        if (!answer || answer.result !== 'ok' || !answer.item) {
            alert("Что-то пошло не так...")
        } else {
            if (answer.item.quantity > 0)  {
                this.addItem(answer.item.id, answer.item, 'afterbegin');
            } else {
                this.deleteItem(answer.item.id);
                this.fillVisible(false);
            }
            application.cartTotalUpdate(answer.count);
        }
    }

}