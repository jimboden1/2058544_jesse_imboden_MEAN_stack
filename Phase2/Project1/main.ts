
try {
    if(localStorage.getItem("JesseImbodenJSONCart")!=null){
        var cart:Array<item> = JSON.parse(localStorage.getItem("JesseImbodenJSONCart"));
    }
    else{
        var cart:Array<item> = [];
    }
} 
catch (error) {
    var cart:Array<item> = [];
}
var total:number = 0;
var size:number = 0;

function add(i:number){
    let item = shop[i];
    if(cart.indexOf(item)>=0){
        cart[cart.indexOf(item)].quantity++;
    }
    else{
        cart.push(item);
    }
    total+=item.cost;
    size++;
    sessionStorage.setItem("JesseImbodenJSONCart",JSON.stringify(cart));
}


class item{
    public quantity:number = 1;
    constructor(public name:string, public cost:number){}
}

var shop:Array<item> = [new item("pants",40), new item("shirts", 20),
    new item("socks", 5), new item("boots", 35),
    new item("Shorts", 15), new item("hat", 20)];


function displayCheckout(){
    let result:string =`<h1 class="border-dark rounded">Checkout</h1><div><a onClick="displayShop()">Shop</a></div>
    <div class="row text-center">
    <div class=col-1></div><div class=col-4><h4 >Item Name</h4></div><div class=col-4><h4>Price</h4></div><h4 class="col-2">Quantity</h4><div class=col-1></div>
    <div class=col-1></div>`;
    for(let i of cart){
        result+=`<h4 class="col-4 bg-light">${i.name}</h4>
        <h4 class="col-4 bg-light">$${i.cost}</h4>
        <h4 class="col-2 bg-light">${i.quantity}</h4>
        <div class=col-1></div><div class=col-1></div>`
    }
    document.getElementById("display").innerHTML=result+`</div><h2>Total Price: $${total}</h2>`;
}


function displayShop(){
    let result=`<h1>Shop</h1>
    <div><a onClick="displayCheckout()">Checkout</a><p></p></div>
    <div class="row text-center"><div class="col-2"></div>`;
    for(let i in shop){
        result+=`<div class="col-4 bg-light"><h4>${shop[i].name}</h4>
        <h4>${shop[i].cost}</h4>
        <button class="btn btn-primary" onClick="add(${i})">Add</button><br/><br/></div>`
        if((Number(i)+1)%2==0){
            result+=`<div class="col-2"></div><div class="col-2"></div>`
        }
    }
    document.getElementById("display").innerHTML=result+`</div>`;
}
