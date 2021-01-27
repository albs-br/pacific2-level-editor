// Level editor for PAcific 2 game for MSX computers
// v.0.4.0

import "./style.css";

const appDiv = document.getElementById("app");

const COLUMNS = 32;
const LINES = 23;

const borderMouseOver = "1px solid blue";
const borderTileSelected = "2px solid red";

const withBorder = "1px solid lightgray";
const noBorder = "1px solid white";
let currentBorder = withBorder;

let currentTile = {
  number: null,
  src: ""
};

//let matrix = [LINES][COLUMNS];
let matrix = Array.from(Array(LINES), () => new Array(COLUMNS));

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
      //this.style.border = "0px solid green";
      $(this).css("background-image", "url(" + currentTile.src + ")");
    });
    //var text = document.createTextNode('');
    //td.appendChild(text);
    td.column = j;
    td.line = i;
    matrix[i][j] = null;

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

$("#tiles")
  .children("img")
  .click(event => {
    currentTile.number = event.currentTarget.tilenumber;
    currentTile.src = event.currentTarget.src;
    $(event.currentTarget).css({
      border: borderTileSelected
    });
  });

$("#btn").click(() => {
  $("#output").text("sdfsdfaf");
});
