window.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.querySelectorAll("a[data-order]");
    console.log(orderButton);

    orderButton.forEach(item => {
        item.addEventListener("click", (event) => {
            const button = event.currentTarget;
            const container = button.parentNode.parentNode;
            const order = {
                price: container.querySelector(".price").innerText,
                title: container.querySelector("h3").innerText,
                id: button.getAttribute("data-order")
            };
            localStorage.setItem("order",JSON.stringify(order));
            const url = window.location.href.replace("store.html","order.html");
            window.location.href = url;
        });
    });
});