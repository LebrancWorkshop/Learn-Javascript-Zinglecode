const basenumber = document.getElementById("basenumber");
const processButton = document.getElementById("processButton");
const display = document.getElementById("display");

processButton.addEventListener("click", () => {
  let displayContent = "";
  if(basenumber.value !== "") {
    const number = parseInt(basenumber.value);
    for(let i = 1; i <= 12; i++) {
      displayContent += `${number} x ${i} = ${number * i}<br>`;
    }

    display.innerHTML = displayContent;
    return;
  } else {
    alert("Please enter a number");
    return;
  }
});
