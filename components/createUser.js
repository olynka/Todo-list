
import notesItems from "./notesItems.js";
import createNotesItemsMarkup from "./createNotesItemsMarkup.js";
import rudioButton from "./radioButton.js";


const form = document.querySelector(".container-form");
const tbody = document.querySelector(".tbody-js");



export default function createUser(e) {
     const {
       elements: { name, created, category, content, dates },
     } = e.currentTarget;

     const idUser = Math.ceil(Math.random() * (10000000 - 1) + 1);

     const info = {
       Name: name.value,
       Created: created.value,
       Category: category.value,
       Content: content.value,
       Dates: dates.value,
       i: idUser,
       svg: "",
     };

     e.currentTarget.reset();

     form.classList.remove("active");

     notesItems.push(info);
     // rudioButton(idUser);

     console.log(notesItems);

     tbody.innerHTML = "";
     tbody.insertAdjacentHTML("beforeend", createNotesItemsMarkup(notesItems));
}