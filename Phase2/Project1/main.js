try {
    if (localStorage.getItem("JesseImbodenJSONCart") != null) {
        var cart = JSON.parse(localStorage.getItem("JesseImbodenJSONCart"));
    }
    else {
        var cart = [];
    }
}
catch (error) {
    var cart = [];
}
var total = 0;
var size = 0;
function add(i) {
    var item = shop[i];
    if (cart.indexOf(item) >= 0) {
        cart[cart.indexOf(item)].quantity++;
    }
    else {
        cart.push(item);
    }
    total += item.cost;
    size++;
    sessionStorage.setItem("JesseImbodenJSONCart", JSON.stringify(cart));
}
var item = /** @class */ (function () {
    function item(name, cost) {
        this.name = name;
        this.cost = cost;
        this.quantity = 1;
    }
    return item;
}());
var shop = [new item("pants", 40), new item("shirts", 20),
    new item("socks", 5), new item("boots", 35),
    new item("Shorts", 15), new item("hat", 20)];
function displayCheckout() {
    var result = "<h1 class=\"border-dark rounded\">Checkout</h1><div class=\"text-left\"><a onClick=\"displayShop()\">Shop</a></div>\n    <div class=\"row text-center\">\n    <div class=col-1></div><div class=col-4><h4 >Item Name</h4></div><div class=col-4><h4>Price</h4></div><h4 class=\"col-2\">Quantity</h4><div class=col-1></div>\n    <div class=col-1></div>";
    for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
        var i = cart_1[_i];
        result += "<h4 class=\"col-4 bg-secondary\">" + i.name + "</h4>\n        <h4 class=\"col-4 bg-secondary\">$" + i.cost + "</h4>\n        <h4 class=\"col-2 bg-secondary\">" + i.quantity + "</h4>\n        <div class=col-1></div><div class=col-1></div>";
    }
    document.getElementById("display").innerHTML = result + ("</div><h2>Total Price: $" + total + "</h2>");
}
function displayShop() {
    var result = "<h1>Shop</h1>\n    <div class=\"text-left\"><a onClick=\"displayCheckout()\">Checkout</a><p></p></div>\n    <div class=\"row text-center\"><div class=\"col-2\"></div>";
    for (var i in shop) {
        result += "<div class=\"col-4 bg-secondary\"><h4>" + shop[i].name + "</h4>\n        <h4>" + shop[i].cost + "</h4>\n        <button class=\"btn btn-primary\" onClick=\"add(" + i + ")\">Add</button><br/><br/></div>";
        if ((Number(i) + 1) % 2 == 0) {
            result += "<div class=\"col-2\"></div><div class=\"col-2\"></div>";
        }
    }
    document.getElementById("display").innerHTML = result + "</div>";
}
