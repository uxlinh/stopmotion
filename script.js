window.addEventListener('wheel', handleScroll);

function handleScroll (event) {
    console.log('wheel');
    let productElm = document.querySelector('.product-demo');
    productElm.style.cssText = "border: 5px solid black;";
};