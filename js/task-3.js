const nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", (event) => {
  const nameOutput = document.querySelector("#name-output");
  nameOutput.textContent = event.currentTarget.value || "Anonymous";
});