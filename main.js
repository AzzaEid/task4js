 function getProduct (){
    axios.get("https://dummyjson.com/products")
    .then(function(responce){
        console.log(responce) ; 
        const product = responce.data.products;
        console.log(product);    
        const result=product.map ( function(p){
            return `
            <div class="product">
            <img src="${p.thumbnail}"/>
            <div class="desc">
            <h2> ${p.title} <h2>
            <h3> ${p.price} $ <h3>
            </div>
            <button> <a href="details.html?id=${p.id}"> details<a> </button>
            </div>
            `;
        } ).join('');
        document.querySelector(".products").innerHTML=result;
    });
    
/*
    const responce = await fetch("https://dummyjson.com/products");
    const data = await responce.json();
    const product = data.products;
    console.log(product);
    
    const result=product.map ( function(p){
        return `
        <div class="product">
        <img src="${p.thumbnail}"/>
        <div class="desc">
        <h2> ${p.title} <h2>
        <h3> ${p.price} $ <h3>
        </div>
        </div>
        `;
    } ).join('');
    document.querySelector(".products").innerHTML=result;
    */
}
getProduct();
