let $ = document;
let inputField = $.getElementById("input-field");
let colorSelectElem = $.getElementById("color-select");
let saveBtn = $.getElementById("btn-save");
let deleteBtn = $.getElementById("btn-delete");
let listElem = $.getElementById("listed");

let colorBox = [
  {
    id: 1,
    color: "#fff",
  },
  {
    id: 2,
    color: "#FFD37F",
  },
  {
    id: 3,
    color: "#FFFA81",
  },
  {
    id: 4,
    color: "#D5FA80",
  },
  {
    id: 5,
    color: "#78F87F",
  },
  {
    id: 6,
    color: "#79FBD6",
  },
  {
    id: 7,
    color: "#79FDFE",
  },
  {
    id: 8,
    color: "#7AD6FD",
  },
  {
    id: 9,
    color: "#7B84FC",
  },
  {
    id: 10,
    color: "#D687FC",
  },
  {
    id: 11,
    color: "#FF89FD",
  },
];

//Create Color Box
colorBox.forEach((item) => {
  let colorElem = $.createElement("div");
  colorElem.setAttribute("class", "color-box");
  colorElem.style.backgroundColor = item.color;
  colorSelectElem.append(colorElem);
  colorElem.addEventListener("click", function () {
    inputField.style.backgroundColor = item.color;
  });
});

//Create Note List

function createElement() {
  //Check If Input has value Invoke CreatElement Function
  if (inputField.value) {
    let newNoteElem = $.createElement("div");
    newNoteElem.setAttribute("class", "card shadow-sm rounded");
    newNoteElem.style.backgroundColor = inputField.style.backgroundColor;
    newNoteElem.addEventListener("click", removeNote);
    let newNoteP = $.createElement("p");
    newNoteP.setAttribute("class", "card-text p-3");
    newNoteP.innerHTML = inputField.value;

    newNoteElem.append(newNoteP);
    listElem.append(newNoteElem);

    inputField.value = "";
    inputField.style.backgroundColor = "#FFF";
  } else {
    alert("Please Insert Note");
    inputField.style.backgroundColor = "#FFF";
  }
}

//Remove Note
function removeNote(event) {
  event.target.parentElement.remove();
}

//Activate Enter Key
inputField.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    createElement();
  }
});

saveBtn.addEventListener("click", createElement);
deleteBtn.addEventListener("click", function () {
  inputField.style.backgroundColor = "#FFF";
  inputField.value = "";
});
