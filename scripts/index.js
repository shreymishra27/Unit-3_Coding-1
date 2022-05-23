//store the products array in localstorage as "products"

document.querySelector("#add_product").addEventListener("click", myFunction)

var arr= JSON.parse(localStorage.getItem("products")) || [];

function Products(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price= p;
    this.image= i;
}

function myFunction(){
    event.preventDefault();

    let form = document.querySelector("#products");

    let type = form.type.value;

    let desc = form.desc.value;

    let price = form.price.value;

    let image = form.image.value;

    let p = new Products(type, desc, price, image)

    arr.push(p);

    localStorage.setItem("products", JSON.stringify(arr));

    
}

document.querySelector("#show_products").addEventListener("click", function(){
    window.location.href = "inventory.html"
})