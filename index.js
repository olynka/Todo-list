import notesItems from "./components/notesItems.js";
import editButton from "./components/buttonEdit.js";
import buttonRemove from "./components/buttonRemove.js";
import buttonCreateNote from "./buttonCreateNote.js";
import buttonModalCancel from "./buttonModalCancel.js";
import buttonSave from "./components/buttonSave.js";
import formModal from "./formModal.js";


const tbody = document.querySelector(".tbody-js");
const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");
const saveBtn = document.querySelector(".save");
const forma = document.querySelector(".container-form");

function createNotesItemsMarkup(notes) {
 
  return notes
    .map(
      ({ Name, Created, Category, Content, Dates, i }) =>
        `
          <tr id=${i}>
            <td >${Name}</td>
            <td>${Created}</td>
            <td>${Category}</td>
            <td>${Content}</td>
            <td>${Dates}</td>
            <td>
              <button class="btn btn-primary" >Edit</button>
              <button class="btn btn-info">Save</button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        `
    )
    .join("");
}

const NotesItemsMarkup = createNotesItemsMarkup(notesItems);
tbody.insertAdjacentHTML("beforeend", NotesItemsMarkup);

function buttons() {
  for (let btn of document.querySelectorAll(".btn-primary")) {
    btn.addEventListener("click", editButton);
  }
  for (let btn of document.querySelectorAll(".btn-danger")) {
    btn.addEventListener("click", buttonRemove);
  }
  for (let btn of document.querySelectorAll(".btn-info")) {
    btn.addEventListener("click", buttonSave);
    
  }
  addBtn.addEventListener("click", buttonCreateNote);
  cancelBtn.addEventListener("click", buttonModalCancel);
  forma.addEventListener("submit", formModal);
}
buttons();



export default createNotesItemsMarkup