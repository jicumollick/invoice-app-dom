
document.getElementById('detail-submit-btn').addEventListener('click' , function(){
    let buyerDetails = document.getElementById('buyer-details-input').value ;

    document.getElementById('buyer-info').innerText = buyerDetails;
    document.getElementById('buyer-details-input').value= "";

})

document.getElementById('add-details-btn').addEventListener('click', function(){

    let itemName = document.getElementById('item-name-input').value;
    let itemPrice = document.getElementById('item-price-input').value;
    let itemQty = document.getElementById('item-quantity-input').value;


    let infoTable = document.getElementById('info-table');

//      <tr>
//     <th >1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
// </tr> 

    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    th.innerText = itemName;
    td1.innerHTML = itemPrice;
    td2.innerText = itemQty;
    td3.innerText = parseFloat(itemPrice) * parseFloat(itemQty);

    td3.classList.add('item-total');

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);

    
    document.getElementById('item-name-input').value = "";
    document.getElementById('item-price-input').value = "";
    document.getElementById('item-quantity-input').value = "";

    
    subTotalCalculation();
    totalCalculation();

})

function totalCalculation(){
    const subTotal = subTotalCalculation();

    const subTotalDisplay = document.getElementById('sub-total');
    subTotalDisplay.innerText = subTotal; 

    const tax = parseFloat( subTotal * .2);
    document.getElementById('tax').innerText = tax;

    const grandTotal = subTotal + tax;

    document.getElementById('grand-total').innerText = grandTotal; 
    document.getElementById('grand-total-2').innerText = grandTotal; 

}

function subTotalCalculation(){
    
let total = 0;

    const cost = document.getElementsByClassName('item-total');

    for (let index = 0; index < cost.length; index++) {
        const element = cost[index];
        
        const price = parseFloat(element.innerText);
        
        total+= price;
    }
    return total;
}