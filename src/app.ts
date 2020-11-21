const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLButtonElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log({
    type: type.value,
    toFrom: tofrom.value,
    details: details.value,
    amount: amount.value,
  });
});
