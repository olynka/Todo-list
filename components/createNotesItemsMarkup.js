export default function createNotesItemsMarkup(notes) {
  const forma=notes
    .map(
      ({ Name, Created, Category, Content, Dates, i, Svg }) =>
        `
          <tr id=${i}>
            <td >${Svg}${Name}</td>
            <td>${Created}</td>
            <td>${Category}</td>
            <td>${Content}</td>
            <td>${Dates}</td>
            <td>
              <button class="btn btn-primary" >1</button>
              <button class="btn btn-info"> 1</button>
              <button class="btn btn-danger">2</path>
</svg>
</button>
            </td>
          </tr>
        `
    )
    .join("");
  
  return forma;
}
