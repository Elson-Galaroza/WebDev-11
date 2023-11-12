
 // Initialize the array of fruits
 const fruits = [];
 
 function displayFruits() {
    let fruitsList = document.getElementById("fruit-list");
    fruitsList.innerHTML = '';
    for (let i = 0; i < fruits.length; i++) {
        let listItem = document.createElement("li");
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
