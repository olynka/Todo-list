import notesItems from "./components/notesItems.js";
import editButton from "./components/buttonEdit.js";
import buttonRemove from "./components/buttonRemove.js";
import buttonCreateNote from "./buttonCreateNote.js";
import buttonModalCancel from "./buttonModalCancel.js";
import buttonSave from "./components/buttonSave.js";
import formModal from "./formModal.js"
import createNotesItemsMarkup from "./createNotesItemsMarkup.js";



const tbody = document.querySelector(".tbody-js");
const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");
const saveBtn = document.querySelector(".save");
const forma = document.querySelector(".container-form");



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



export default buttons()