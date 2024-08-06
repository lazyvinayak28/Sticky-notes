let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let div = document.querySelector("#creation");
btn.onclick = creation;
let n = 1;

function creation() {
  if (input.value == "") {
    alert("please enter your note first");
  } else {
    let note = document.createElement("div");
    let del = document.createElement("button");
    // note.id = n;
    note.style.height = "150px";
    note.style.width = "150px";
    note.style.border = "2px solid black";
    note.style.margin = "5px";
    note.style.display = "inline-block";

    del.innerText = "remove";
    del.style.color = "black";
    del.style.display = "block";
    del.style.backgroundColor = "#FF4C4C";
    del.style.marginLeft = "2px";
    del.style.marginTop = "2px";
    del.style.marginBottom = "5px";
    del.style.boxShadow = "black 1.2px 1.2px";
    // del.id = n;
    del.onclick = delet;

    function delet() {
      note.remove();
      console.log("hekki");
    }
    if (n == 1) {
      note.style.backgroundColor = "#33adff";
    } else if (n == 2) {
      note.style.backgroundColor = "#f46f87";
    } else if (n == 3) {
      note.style.backgroundColor = "#ffd859";
    } else if (n == 4) {
      note.style.backgroundColor = "#50c878";
    } else if (n == 5) {
      note.style.backgroundColor = "#fc7401";
    } else if (n == 6) {
      note.style.backgroundColor = "#d24dff";
    } else if (n == 7) {
      note.style.backgroundColor = "#ff3300";
    } else if (n == 9) {
      note.style.backgroundColor = "#ffbf80";
    } else if (n == 8) {
      note.style.backgroundColor = "#ff4dc4";
    } else if (n % 3 == 0) {
      note.style.backgroundColor = "#fc7401";
    } else if (n % 2 == 0) {
      note.style.backgroundColor = "#33adff";
    } else {
      note.style.backgroundColor = "#ff3300";
    }
    note.innerText = input.value;
    div.after(note);
    note.prepend(del);
    input.value = "";
    n++;
  }
}
