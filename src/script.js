let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; //clear input field after adding item
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

//save list items in "data"
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//display data each time page loaded
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
