// // document.getElementById("count-el").innerText = 10)

// // initialize the count as 0
// // listen for clicks on the button
// // increment the count variable when the button is clicked
// // change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment(){
    console.log("The button was clicked")
    count += 1
    countEl.innerText = count
    // document.getElementById("count-el").innerText = count
}

function save(){
    console.log("The save button was clicked")
    let saveEl = document.getElementById("save-el")
    saveEl.textContent += count + " , "
    count = 0
    countEl.innerText = count
}