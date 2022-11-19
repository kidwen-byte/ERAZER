
class OrderItems extends ItemDynamicList {
    renderTemplate() {
        return `
        <tr>
            <td><a class="normal-link transition" href="/order/${this.uId}">${this.date}</a></td>
            <td class="center-text">${this.id}</td>
            <td class="center-text">${this.total} &#8381;</td>
            <td class="center-text">${this.status}</td>
        </tr>
        `;
    }

}

class Orders extends DynamicList {
    constructor(idList, pageSize = 10, urlApi = '/api/orderList', itemClassName='order-item') {
        super(idList, pageSize, urlApi, itemClassName);
    }

    newItem(id, data) {
        return new OrderItems(this.elList, id, data, this.itemClassName);
    }    

}