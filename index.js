Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Отклонено' ? 'danger' 
        : order.status === 'В процессе' ? 'warning'
        : 'success'}">${order.status}</td>
        <td class="primary">Детали</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})