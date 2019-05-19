// we create a variable para for the P paragraph,and give it an event listener for clicks,with a function.

const para = document.querySelector("p");

para.addEventListener("click", updateName);

// Then we create the function named above,which runs when P is clicked. Inside the function is a new variable which calls for a prompt,that changes the text content of P.

function updateName() {
  let name = prompt("Enter a new name:");
  para.textContent = "Player name: " + name;
}

// new exercise below

// We create a function which creates new paragraph element when clicked upon,and we append it to the correct html element.

function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button and generated this!";
  document.body.appendChild(para);
}

//selects all the buttons!

const buttons = document.querySelectorAll("button");

// Now we need to loop through all the buttons we just called above,so that all of them have the createParagraph function when clicked!
// We do this by looping through all the buttons using a for loop.

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
