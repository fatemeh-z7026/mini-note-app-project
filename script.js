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
});

//Create Note List

function createElement() {
  let newNoteElem = $.createElement("div");
  newNoteElem.setAttribute("class", "card shadow-sm rounded");

  let newNoteP = $.createElement("p");
  newNoteP.setAttribute("class", "card-text p-3");

  newNoteElem.append(newNoteP);
  listElem.append(newNoteElem);
}
