import Invoice from "./classes/Invoice.js";

const inv1 = new Invoice("Andela", "Web work", 300);
const inv2 = new Invoice("Mookh", "Web work too", 500);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

console.log(invoices);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log({
    type: type.value,
    toFrom: tofrom.value,
    details: details.value,
    amount: amount.valueAsNumber,
  });
});
