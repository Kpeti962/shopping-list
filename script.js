"use strict";

const btnInput = document.querySelector(".btn");
const input = document.querySelector(".input-text");

const inputquantity = document.querySelector(".quantityinput");

btnInput.addEventListener("click", function () {
  const food = document.querySelector(".input-text");
  const qtity = document.querySelector(".quantityinput");
  const unit = document.getElementById("selectInput");
  const list = document.getElementById("list");
  const entry = document.createElement("li");
  entry.setAttribute("contenteditable", true);
  const egyseg = document.createElement("li")
  const delet = document.createElement("button");
  
  
  delet.style.display = "list-item";
  entry.style.display = "list-item";
  
  
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container-div");
  delet.innerText = "Törlés";

  let isQuantityValid = false;
  let isFoodValid = false;
  let isUnitValid = false;

  const inputsAreValid = () => {
    if (qtity.value !== "" && qtity.value > 0) {
      isQuantityValid = true;
    }
    if (food.value !== "") {
      isFoodValid = true;
    }
        if(unit.value !== "default"){
      isUnitValid = true;
    } 
    return isQuantityValid && isFoodValid && isUnitValid
  };

  if (!inputsAreValid()) {
    if (isQuantityValid === false && isFoodValid === false) {
      alert("Mennyiség nem megfelelő és élelmiszer megadása kötelező");
    } else {
      if (isQuantityValid === false) {
        alert("Mennyiség nem megfelelő");
      }
      if (isFoodValid === false) {
        alert("Élelmiszer megadása kötelező");
      }
       if (isUnitValid === false) {
         alert("Egység megadása kötelező")
       }
    }
  } else {
    const icon = document.createElement("i");

    icon.classList = "fa-solid fa-circle icon";

    entry.appendChild(icon);
    entry.appendChild(
      document.createTextNode(`${food.value} ${qtity.value} ${unit.value}`)
    );

    food.value = "";
    qtity.value = "";
    unit.value = "default";
    
    containerDiv.appendChild(entry);
    containerDiv.appendChild(delet);
    containerDiv.appendChild(egyseg);

    list.appendChild(containerDiv);
  }

  delet.addEventListener("click", function () {
    containerDiv.remove();
  });
});
