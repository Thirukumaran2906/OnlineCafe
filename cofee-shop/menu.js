const items = [
  {id:1,image:'./item/cofeeBuscuit.jpg',name:"Cappuccino",price:320, Total: 320, quantity: 1},
  {id:2,image: './item/cremy-cofee.jpg', name: 'Creamy-coffee ', price: 220, Total: 220, quantity: 1},
  {id:3, image: './item/hot cream-coffee.jpg', name: 'Hot Cremy Coffee', price: 200, Total: 200, quantity: 1},
  {id:4,image: './item/hot-choco-cofee.jpg', name: 'Choco Coffee', price: 320, Total: 320, quantity: 1},
  {id:5,image:'./item/ice-coffee.jpg',name:"Ice Coffee",price:190, Total: 190, quantity: 1},
  {id:6,image:'./item/paked-cofee.jpg',name:"Flavoured Coffee",price:180, Total: 180, quantity: 1},
  {id:7,image:'./item/puffy-choco-coffee.jpg',name:"Snow flav Coffee",price:250, Total: 250, quantity: 1},
  {id:8,image:'./item/water-cofee.jpg',name:"Normal Coffee",price:120, Total: 120, quantity: 1},
];
const snaks = [
  {id:10,image:'./item/cake.jpg',name:"Choco-JellyCake",price:250, Total: 250, quantity: 1},
  {id:11, image: './item/brownie.jpg', name: 'Brownie', price: 140, Total: 140, quantity: 1},
  {id:12,image: './item/choco-fills.jpg', name: 'ChocoFills', price: 100, Total: 100, quantity: 1},
  {id:13, image: './item/cupCake.jpg', name: 'CupCake', price: 100, Total: 100, quantity: 1},
  {id:14,image:'./item/donut.jpg',name:"Donut",price:190, Total: 190, quantity: 1},
  {id:15,image:'./item/pulpCake.jpg',name:"PineCake",price:120, Total: 120, quantity: 1},
  {id:16,image:'./item/chicken-roll.jpg',name:"Chicken roll",price:80, Total: 80, quantity: 1},
  {id:17,image:'./item/sandwich.avif',name:"SandWich",price:140, Total: 140, quantity: 1},
  {id:18,image:'./item/jarShake.jpg',name:"MilkShakes",price:210, Total: 210, quantity: 1},
  {id:19,image:'./item/strawberry-milkshake.jpg',name:"Strawberry Shake",price:210, Total: 210, quantity: 1},
  {id:20,image:'./item/plain-bun.jpg',name:"Plain Bread",price:60, Total: 60, quantity: 1},
  {id:21,image:'./item/rusk.jpg',name:"Rusk",price:70, Total: 70, quantity: 1}
];
var count=1;
const box = document.getElementById('box');
const box2 = document.getElementById('box2');
if(count<items.length){
  addItems(items,box);
}
if(count>=items.length){
  addItems(snaks,box2);
}
function addItems(itr,box)
{
  itr.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('outer');
      const temp=document.createElement('div');
      temp.classList.add('imgbox');
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = 'img Not available';
      temp.append(img);
      const innerDiv = document.createElement('div');
      innerDiv.classList.add('con');
      const h1 = document.createElement('h1');
      h1.textContent = item.name;
      const h3 = document.createElement('h3');
      h3.textContent = `Price: ${item.price}`;
      const button = document.createElement('button');
      button.classList.add('cart-btn');
      button.innerHTML = `<i class="fas fa-shopping-cart"></i> Add`;
      button.id=count;
      count++;
      button.addEventListener('click', () => addToCart(button.id,itr));
      innerDiv.appendChild(h1);
      innerDiv.appendChild(h3);
      innerDiv.appendChild(button);
      div.appendChild(temp);
      div.appendChild(innerDiv);
      box.append(div);
  });
}
// -----------------------------------------------------------------------------//
let cartArray = []
cartArray = JSON.parse(localStorage.getItem('mycart'));
if(!cartArray){
  cartArray = [];
}
function addToCart(index,itr){
  var indexVal = Number(index);
  var itemExists = false;
  if(cartArray.length>=1)
  {
    for (let i=0;i<cartArray.length;i++)
    {
      if(cartArray[i].id ===indexVal)
      {
        cartArray[i].Total=(cartArray[i].Total+cartArray[i].price);
        cartArray[i].quantity++; 
        itemExists=true;break;
      }
    }
  }
  if(itemExists==false)
  {
    var newItem = itr.find((item) => item.id == indexVal);
    if(newItem){cartArray.push({ ...newItem });}
  }
  localStorage.setItem('mycart', JSON.stringify(cartArray));
}
document.addEventListener('DOMContentLoaded',addToCart());

