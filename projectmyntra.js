
let bagitem;
onload();
function onload(){
    let bagitemstr=localStorage.getItem('bagitem');
    bagitem=bagitemstr?JSON.parse(bagitemstr):[];

displayItemsOnHomePage();
displayBagCount();
}
function displayItemsOnHomePage(){
    
const items = [
    {
        id: '001',
        image: 'p1',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 2000,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        image: 'p2',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '003',
        image: 'p3',
        company: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: 'p4',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: 'p5',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '006',
        image: 'p6',
        company: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: 'p7',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '008',
        image: 'p8',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    }
];
    let itemContainerElement=document.querySelector('.items-container');
    if(!itemContainerElement)
        return;
let innerhtml=``;
for(i=0;i<8;i++){
   let item= items[i];
    innerhtml+= ` <div class="item-container">
    <img class="item-image" src="${item.image}.jpg" alt="no image ">
    <div class="rating">
    ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name"> ${item.item_name}</div>
    <div class="price">
    <span class="current-price">Rs ${item.current_price} </span>
    <span class="original-price">RS ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button onclick="AddToBag(${item.id})" class="btn-add-bag">Add To Bag</button> 
    </div>`
    
};
itemContainerElement.innerHTML=innerhtml;
}
function AddToBag(itemId){
    bagitem.push(itemId);
    displayBagCount();
    localStorage.setItem('bagitem',JSON.stringify(bagitem));
   
}
function displayBagCount(){
    let bagElement=document.querySelector('.bag-item-counter')
    if(bagitem.length>0){
        bagElement.style.visibility='visible';
        bagElement.innerHTML=bagitem.length;
    }
    else
    bagElement.style.visibility='hidden';

}












