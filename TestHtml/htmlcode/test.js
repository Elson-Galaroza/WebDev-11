let fruits = [];

function displayFruits() {
  const fruitsList = document.getElementById("fruit-list");
  fruitsList.innerHTML = '';

  for (let i = 0; i < fruits.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = fruits[i];
    fruitsList.appendChild(listItem);
  }
}

function addFruit() {
  const addedFruit = document.getElementById("fruit-input").value;
  if(!addedFruit){
    alert("Please enter a valid fruit name.");
  }

  else{
    fruits.push(addedFruit);
    document.getElementById("fruit-input").value = '';
    displayFruits();
  }
}






let numbers = [];

function displayNumbers() {
  const oddList = document.getElementById("odd-list");
  const evenList = document.getElementById("even-list");

  oddList.innerHTML = '';
  evenList.innerHTML = '';

  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] %2 != 0){
      const oddNumber = document.createElement("li");
      oddNumber.textContent = numbers[i];
      oddList.appendChild(oddNumber);
    }
    else {
      const evenNumber = document.createElement("li");
      evenNumber.textContent = numbers[i];
      evenList.appendChild(evenNumber);
    }    
  }
}

function addNumber() {
  const addedNumber = document.getElementById("add-input").value;
  if(!addedNumber){
    alert("Please enter a valid number.");
  } 

  else{
    numbers.push(addedNumber);
    document.getElementById("add-input").value = '';
    displayNumbers();
  }
}
 




