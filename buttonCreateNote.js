const form = document.querySelector(".container-form");
import formModal from "./formModal.js";
import createNotesItemsMarkup from "./createNotesItemsMarkup.js";







export default function buttonCreateNote(e) {
    form.classList.add("active");
     const idUser = parseInt(e.target.parentElement.parentElement.id);
     console.log(idUser);
  
  formModal


}
