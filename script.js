const productItem = document.querySelector('#product-item');
    fetch("https://fakestoreapi.com/products")
         .then(res=>res.json())
         .then(data=>{
            data.map((e)=>{
                productItem.innerHTML+=`<div class="product-card">
        <img src=${e.image} alt="">
        <h3>${e.title}</h3>
        <p>${e.price}$</p>
    </div>`
            })
         })
