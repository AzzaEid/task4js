async function getDetails (){
    console.log("9999");
    const urlParams = new URLSearchParams(window.location.search);
    const iD = urlParams.get('id');
    axios.get(`https://dummyjson.com/products?id${iD}`)
    .then(function(responce){
        const products = responce.data.products; 
        const {title,thumbnail, description, price, discountPercentage} = products[iD-1];
        console.log(title);
        const result= `<h1>${title}</h1>
        <img src="${thumbnail}"/> `;
        document.querySelector(".top").innerHTML=result;
        const rslt= `<li>price:: ${price} </li>
        <li>description::  ${description} </li>
        <li>discountPercentage::  ${discountPercentage}</li>`;
        document.querySelector(".moreInfo").innerHTML=rslt;
    });

    }
    getDetails();
