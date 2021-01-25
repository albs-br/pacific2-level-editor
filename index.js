// Import stylesheets
import "./style.css";

const appDiv = document.getElementById("app");

const COLUMNS = 32;
const LINES = 23;

const borderMouseOver = "1px solid blue";

const withBorder = "1px solid lightgray";
const noBorder = "1px solid white";
let currentBorder = withBorder;

var table = document.createElement("table");
table.style.borderSpacing = "0px";
table.style.borderPadding = "0px";
table.style.border = "1px solid lightgray";

for (var i = 0; i < LINES; i++) {
  var tr = document.createElement("tr");

  for (var j = 0; j < COLUMNS; j++) {
    var td = document.createElement("td");
    td.style.width = "20px";
    td.style.height = "20px";
    td.style.border = "1px solid lightgray";
    td.addEventListener("mouseover", function() {
      $(this).css({
        border: borderMouseOver
      }); 
    });
    td.addEventListener("mouseout", function() {
      $(this).css({
        border: currentBorder
      }); 
    });
    td.addEventListener("click", function() {
      this.style.backgroundColor = "red";
      this.style.border = "0px solid green";
    });
    //var text = document.createTextNode('');
    //td.appendChild(text);
    tr.appendChild(td);
  }

  table.appendChild(tr);
}
app.appendChild(table);

document.all["chkGrid"].addEventListener("click", function() {
  console.info(this.checked);

  if (this.checked) {
    currentBorder = withBorder;
  } else {
    currentBorder = noBorder;
  }

  $("td").css({
    border: currentBorder
  });  
});
