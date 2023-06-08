let label=document.getElementById('label');
let shoppingCart=document.getElementById('shopping-cart');

let basket=JSON.parse(localStorage.getItem("data")) || []

let calculate = (item) =>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
}

calculate();

let generateCartItems = () => {
    if(basket.length!==0){
        return shoppingCart.innerHTML=basket.map((x)=>{
            let {id,item}=x;
            let search=shopItemsData.find( (y) => y.id===id) || [];
            let {img,price,name}=search
            return `
            <div class="cart-item">
                <img src=${img} width="100" alt="">
                <div class="details">
                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${name}</p>
                            <p class="cart-item-price">$ ${price}</p>
                        </h4>
                        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                    </div>

                    <div class="button">
                        <i onclick="decreament(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increament(${id})" class="bi bi-plus-lg"></i>
                    </div>

                    <h3>$ ${item*search.price}</h3>

                </div>
            </div>
            `;
        }).join("");
    }
    else{
        shoppingCart.innerHTML = ``
        label.innerHTML=`
        <h2>Cart is Empty</h2>
        <a href="task-6.html">
        <button class="homeBtn">Back to Home</button>
        </a>
        `
    }
}

generateCartItems();

let increament = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id===selectedItem.id)
    if(search===undefined){
        basket.push({
            id:selectedItem.id,
            item:1
        })
    }
    else{
        search.item+=1;
    }
    // console.log(basket)
    update(selectedItem.id)
    generateCartItems();
    localStorage.setItem("data",JSON.stringify(basket))

}

let decreament = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id===selectedItem.id)
    if(search===undefined) return;
    else if(search.item===0) return ;
    else{
        search.item-=1;
    }
    // console.log(basket)
    update(selectedItem.id)
    basket=basket.filter( (x) => x.item !== 0); 
    generateCartItems();
    localStorage.setItem("data",JSON.stringify(basket))
}

let update = (id) =>{
    let search = basket.find((x)=>x.id ===id)
    document.getElementById(id).innerHTML=search.item;
    calculate()
    totalAmount()
}

let removeItem = (id) => {
    let selectedItem=id;
    basket=basket.filter((x)=>x.id!==selectedItem.id);
    generateCartItems()
    totalAmount()
    calculate()
    localStorage.setItem("data",JSON.stringify(basket));
}

let totalAmount = () => {
    if(basket.length!==0){
        let amount=basket.map((x)=>{
            let {item,id}=x;
            let search=shopItemsData.find( (y) => y.id===id) || [];
            return item*search.price
        }).reduce((x,y)=>x+y,0);
        label.innerHTML=`
        <h2>Total Bill : $ ${amount}</h2>
        <button class="checkout">Checkout</button>
        <button onclick="clearCart()" class="clearCart">Clear Cart</button>
        `
    }
    else return
}

totalAmount();

let clearCart = () => {
    basket=[]
    generateCartItems();
    calculate()
    localStorage.setItem("data",JSON.stringify(basket))
}