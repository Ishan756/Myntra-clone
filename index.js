let bagItems =[];
onload();

function onload(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr)  : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));  
    displayBagIcon();
}

function displayBagIcon(){
    let BagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0){
    BagItemCountElement.innerText = bagItems.length;
    BagItemCountElement.style.visibility = 'visible';
    }
    else{
        BagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }

    let innerhtml = '';
    items.forEach(item=>{
        innerhtml += `
        <div class="item-container">
        <img src="${item.image}" alt="#">
        <div class="rating">
          ${item.rating.stars}  ⭐| ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.origianl_price}</span>
            <span class="discount">(${item.discount_percentage}% off)</span>             
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`
    })
    
    itemsContainerElement.innerHTML = innerhtml;
}

