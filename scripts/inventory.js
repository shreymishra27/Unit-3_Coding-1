document.querySelector("#add_more_product").addEventListener("click", function(){
    window.location.href = "index.html"
})

var products = JSON.parse(localStorage.getItem("products")) || [];

products.map(function(elem, index){

    var box = document.createElement("div");
    box.setAttribute("id", "box")

    var img = document.createElement("img");
    img.src = elem.image;
    img.setAttribute("id", "img");

    var type = document.createElement("h3");
    type.innerText = elem.type;

    var desc = document.createElement("p");
    desc.innerText = elem.desc;

    var price = document.createElement("p");
    price.innerText = elem.price;

    var btn = document.createElement("button");
    btn.innerText = "Remove Product";
    btn.setAttribute("id", "remove_product");
    btn.addEventListener("click", function(){
        removeProduct(elem, index)
    })

    box.append(img, type, desc, price, btn);

    document.querySelector("#all_products").append(box)
})

function removeProduct(elem, index){
    products.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(products));
    window.location.reload();
}