// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

const COLUMNS = 32;
const LINES = 23;

// appDiv.innerHTML += '<table>';

// for(let j=0; j < LINES; j++) {
//   appDiv.innerHTML += '  <tr>';
//   for(let i=0; i < COLUMNS; i++) {
//     appDiv.innerHTML += '    <td>sdfsdf</td>';
//   }
//   appDiv.innerHTML += '  </tr>';
// }

// appDiv.innerHTML += '</table>';

var table = document.createElement("table");
table.style.borderSpacing = "0px";
table.style.borderPadding = "0px";
table.style.border = "solid 1px lightgray";

for (var i = 0; i < LINES; i++) {
  var tr = document.createElement("tr");

  for (var j = 0; j < COLUMNS; j++) {
    var td = document.createElement("td");
    td.style.width = "20px";
    td.style.height = "20px";
    td.style.border = "solid 1px lightgray";
    td.addEventListener("mouseover", function() {
      this.style.border = "solid 1px blue";
    });
    td.addEventListener("mouseout", function() {
      this.style.border = "solid 1px lightgray";
    });
    //var text = document.createTextNode('');
    //td.appendChild(text);
    tr.appendChild(td);
  }

  table.appendChild(tr);
}
app.appendChild(table);
