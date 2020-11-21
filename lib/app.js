import Invoice from "./classes/Invoice.js";
const inv1 = new Invoice("Andela", "Web work", 300);
const inv2 = new Invoice("Mookh", "Web work too", 500);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
console.log(invoices);
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({
        type: type.value,
        toFrom: tofrom.value,
        details: details.value,
        amount: amount.valueAsNumber,
    });
});
