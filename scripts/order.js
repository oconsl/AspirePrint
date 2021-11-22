window.addEventListener("DOMContentLoaded", () => {
    const order = localStorage.getItem("order");
    if (order) {
        const storeOrder = JSON.parse(order);
        document.getElementById("item").setAttribute("value", storeOrder.title + ", " + storeOrder.price);
        const orderSelected = document.querySelector(".contentBox");
        const orderImg = document.querySelector(".img-box");
        const img = orderImg.querySelector("img");
        console.log(img);
        img.setAttribute("src", `images/product/${storeOrder.id}.png`);
    }
});