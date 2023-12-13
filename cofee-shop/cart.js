let cartArray = JSON.parse(localStorage.getItem('mycart'));
function createCartProductElement(obj) {
  const cartProduct = document.createElement('div');
  cartProduct.classList.add('cart-Product');
  cartProduct.innerHTML = `
    <div class="cart-image">
      <img src="${obj.image}">
    </div>
    <div class="cart-details">
      <div class="quantity-display">
        <button class="up" id="up" onclick="pressUp(${obj.id})">up</button>
        <h1 id="quantity">${obj.quantity}</h1>
        <button class="up" id="down"onclick="pressDown(${obj.id})" >down</button>
      </div>
      <div class="amount-box">
        <h1 id="amount">${obj.Total}</h1>
      </div>
    </div>
  `;
  return cartProduct;
}

var totalRate=0;
const displayCartDiv = document.getElementById('display-cart');
cartArray.forEach(obj => {
  if(obj.quantity==0)
  {
    obj.quantity=0;
    obj.Total=0;
  }
  if(obj.quantity>=1)
  {
    totalRate=totalRate+obj.Total;
    const cartElement = createCartProductElement(obj);
    displayCartDiv.append(cartElement);
  }
  document.getElementById('tot').innerText="Total : "+totalRate;

});
function pressUp(id)
{
  cartArray.forEach((item)=>{
    if(item.id==id)
    {
      item.quantity++;
      item.Total+=item.price;
      localStorage.setItem('mycart', JSON.stringify(cartArray));
      window.location.reload()
      
    }
  })
}
function pressDown(id)
{
  cartArray.forEach((item)=>{
    if(item.id==id)
    {
      item.quantity--;
      item.Total-=item.price;
      localStorage.setItem('mycart', JSON.stringify(cartArray));
      window.location.reload()
    }
  })
}
document.getElementById('order-placed').addEventListener('click',()=>{
  if(totalRate!=0)
  {
    window.location="thanks.html";
  }
  else{
    alert("Please add any item");
  }
})
