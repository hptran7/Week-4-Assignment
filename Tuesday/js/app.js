let task = document.getElementById("task");
let submitButton = document.getElementById("submitButton");
let pendingTaskUL = document.getElementById("pendingTaskUL");
let completedTaskUL = document.getElementById("completedTask");

submitButton.addEventListener("click", function () {

    if(task.value === ""){
        window.alert("Please enter your task's name")
    }
    else{
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let label = document.createElement("label");
  let button = document.createElement("button");

  label.setAttribute("class","itemLabel")

  label.innerHTML = task.value;
  pendingTaskUL.appendChild(li);
  li.setAttribute("class","taskItem")
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);

  //Add Attribute to checkbox//
  checkbox.setAttribute("type", "checkbox");

  checkbox.addEventListener("click", function () {
    if (this.checked) {
      completedTaskUL.appendChild(this.parentElement);
    } else {
      pendingTaskUL.appendChild(this.parentElement);
    }
  });

  //Add attribute to button//
  button.innerHTML = "Remove";

  //function to remove tasks//
  //   let removeButton = document.getElementById("removeButton");
  button.addEventListener("click", function () {
    button.parentElement.remove();
  });}
});
