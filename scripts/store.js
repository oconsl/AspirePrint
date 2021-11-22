class Product {
    constructor(title,price,img_source){
        this.title = title;
        this.price = price;
        this.img_source = img_source;
    }
}
// IMPRESORAS
const product1 = new Product("Impresora Ender 3","$ 45.541","impresora_ender3");
const product2 = new Product("Impresora de Resina","$ 43.299","impresora_resina");
const product3 = new Product("Curadora Resina","$ 30.199","curadora_resina");
const product4 = new Product("Impresora + Curadora Resina","$ 68.799","impresora_curadora_resina");
const set1 = [product1, product2, product3, product4];
// PLA
const product5 = new Product("Pla Blanco","$ 2.599", "pla_blanco");
const product6 = new Product("Pla Lavanda","$ 2.599", "pla_lavanda");
const product7 = new Product("Pla Negro","$ 2.599", "pla_negro");
const product8 = new Product("Pla Amarillo","$ 2.599", "pla_amarillo_f");
const set2 = [product5, product6, product7, product8];
// PETG
const product9 = new Product("PETG Azul","$ 3.299", "petg_azul");
const product10 = new Product("PETG naranja","$ 3.299", "petg_naranja");
const product11 = new Product("PETG verde","$ 3.299","petg_verde");
const product12 = new Product("PETG Marrón","$ 3.299", "petg_marron");
const set3 = [product9, product10, product11, product12];
// REPUESTOS
const product13 = new Product("Resina Hellbot","$ 1.849","resina_hellbot");
const product14 = new Product("Repuesto nema17","$ 7.699","nema17_ender3");
const product15 = new Product("Lija al agua", "$ 2.099","lija_agua");
const product16 = new Product("Extrusor ender 3","$ 1.759","extrusor_ender3");
const set4 = [product13, product14, product15, product16];

const products = [set1, set2, set3, set4,set4];

window.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.querySelectorAll("a[data-order]");

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
            window.location.href = "order.html"; 
        });
    });

    const productsButton = document.querySelectorAll("li[card-change]");    
    const cards = document.querySelectorAll("div.card");

    productsButton.forEach(item => {
        item.addEventListener("click", (event) => {
            const setSelector = event.currentTarget.getAttribute("card-change");
            cards.forEach((card,index) => {
                let set = setSelector[setSelector.length - 1]-1;
                const setSelected = products[set];
                const cardImg = card.querySelector(".box-img").children.item(0);
                cardImg.setAttribute("src",`images/product/${setSelected[index].img_source}.png`);
                card.querySelector("h3").innerText = setSelected[index].title;
                card.querySelector(".price").innerText = setSelected[index].price;
                card.querySelector(".buy").setAttribute("data-order",setSelected[index].img_source);
            });
        });
    });
});