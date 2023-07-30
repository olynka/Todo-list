const form = document.querySelector(".container-form");
import notesItems from "./notesItems.js";
import buttonCreateNote from "../buttonCreateNote.js";



export default function buttonSave(e) {
  console.log(e.target.parentElement.parentElement.id);
  const id = e.target.parentElement.parentElement.id;
  for (let id of notesItems) {
    console.log(id.i);
    if (condition) {
      id.i === id;
    }
  }

    
}
