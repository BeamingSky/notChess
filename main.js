let res = [0, 0, 0, 0];
let bool = true;
let temp, tempcolor, temprow, tempcol;
let news = document.getElementsByClassName("black");
const image = document.getElementById("bamboo");
const altText = image.alt;
let black = document.getElementById("bambo").innerHTML;
let white = document.getElementById("ba").innerHTML;
let red = document.getElementById("bamb").innerHTML;
let green = document.getElementById("bam").innerHTML;
console.log(altText);
//
// let chance = Math.floor(Math.random() * 4) + 1;
// console.log(chance)
//

function fun(b, color, row, col) {
  var peiceElement = document.getElementById("randomImage");
  var peices = ["Bird1.png", "Bamboo1.png", "Wind1.png", "Dragon1.png"];

  let obj = document.getElementById(b);
  let obj1 = document.getElementById(temp);
  console.log(green);
  console.log(obj.innerHTML);
  obj.innerHTML = obj.innerHTML.trim();
  // obj1.innerHTML=obj1.innerHTML.trim()
  black = black.trim();
  red = red.trim();
  green = green.trim();
  white = white.trim();
  // console.log('r->'+black);
  if (bool) {
    temp = b;
    tempcolor = color;
    temprow = row;
    tempcol = col;
    if (obj.innerHTML != "") {
      if (chance == 1 && obj.innerHTML == green) {
        bool = false;
        document.getElementById(b).style =
          "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";
        chance++;
      } else if (chance == 2 && obj.innerHTML == white) {
        bool = false;
        document.getElementById(b).style =
          "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";
        chance++;
        peices++;
      } else if (chance == 3 && obj.innerHTML == red) {
        bool = false;
        document.getElementById(b).style =
          "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";
        chance++;
        peices++;
      } else if (chance == 4 && obj.innerHTML == black) {
        bool = false;
        document.getElementById(b).style =
          "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";
        chance = 1;
        peices++;
      } else {
        function showAlert() {
          document.getElementById("customAlert").style.display = "block";
        }
      }
    }
  } else {
    obj.innerHTML = obj.innerHTML.trim();
    obj1.innerHTML = obj1.innerHTML.trim();
    black = black.trim();
    red = red.trim();
    green = green.trim();
    white = white.trim();
    console.log("w->" + obj1.innerHTML.trim());

    if (obj1.innerHTML == black) {
      console.log(obj1.innerHTML);
      //console.log(row.charCodeAt());
      if (
        (temprow.charCodeAt() == row.charCodeAt() + 1 ||
          temprow.charCodeAt() == row.charCodeAt() - 1 ||
          temprow.charCodeAt() == row.charCodeAt()) &&
        (tempcol == col || tempcol == col + 1 || tempcol == col - 1) &&
        Number(b.substring(1, 4)) > 9 &&
        col != 1 &&
        col != 13
      ) {
        if (
          color == tempcolor ||
          color == "yellow" ||
          tempcolor == "yellow" ||
          color == "red" ||
          tempcolor == "red"
        ) {
          if (obj1.innerHTML == obj.innerHTML) {
            // alert("Unselected");
            bool = true;
            chance = 4;
          } else if (
            obj.innerHTML == white ||
            obj.innerHTML == "" ||
            obj.innerHTML == red ||
            obj.innerHTML == green
          ) {
            document.getElementById(temp).innerHTML = "";
            // document.getElementById(temp).style = "background:white;";
            document.getElementById(b).innerHTML = black;
            bool = true;

            if (Number(b.substring(1, 4)) == 79) res[3]++;
            if (tempcolor == "yellow") {
              // document.getElementById(temp).style = "background:yellow;";
            }
          }
        } else
          function showAlert() {
            document.getElementById("customAlert").style.display = "block";
          }
      } else {
        function showAlert() {
          document.getElementById("customAlert").style.display = "block";
        }
      }
    } else if (obj1.innerHTML == white) {
      // console.log(obj1.textContent);
      if (
        (temprow.charCodeAt() == row.charCodeAt() + 1 ||
          temprow.charCodeAt() == row.charCodeAt() - 1 ||
          temprow.charCodeAt() == row.charCodeAt()) &&
        (tempcol == col || tempcol == col + 1 || tempcol == col - 1) &&
        Number(b.substring(1, 4)) < 149 &&
        col != 1 &&
        col != 13
      ) {
        if (
          color == tempcolor ||
          color == "yellow" ||
          tempcolor == "yellow" ||
          color == "red" ||
          tempcolor == "red"
        ) {
          if (obj1.innerHTML == obj.innerHTML) {
            // alert("Unselected");
            bool = true;
            chance = 2;
          } else if (
            obj.innerHTML == black ||
            obj.innerHTML == "" ||
            obj.innerHTML == red ||
            obj.innerHTML == green
          ) {
            document.getElementById(temp).innerHTML = "";
            // document.getElementById(temp).style = "background:white;";
            document.getElementById(b).innerHTML = white;
            bool = true;
            if (Number(b.substring(1, 4)) == 79) {
              res[1]++;
            }
            if (tempcolor == "yellow") {
              // document.getElementById(temp).style = "background:yellow;";
            }
          }
        } else {
          function showAlert() {
            document.getElementById("customAlert").style.display = "block";
          }
        }
      } else {
        function showAlert() {
          document.getElementById("customAlert").style.display = "block";
        }
      }
    } else if (obj1.innerHTML == red) {
      // console.log(obj1.textContent);
      if (
        temprow.charCodeAt() == row.charCodeAt() + 1 ||
        temprow.charCodeAt() == row.charCodeAt() - 1 ||
        (temprow.charCodeAt() == row.charCodeAt() &&
          (tempcol == col || tempcol == col + 1 || tempcol == col - 1) &&
          Number(b.substring(1, 4)) > 9 &&
          Number(b.substring(1, 4)) < 149 &&
          col != 1)
      ) {
        console.log(Number(b.substring(1, 4)));
        console.log(b);
        if (
          color == tempcolor ||
          color == "yellow" ||
          tempcolor == "yellow" ||
          color == "red" ||
          tempcolor == "red"
        ) {
          if (obj1.innerHTML == obj.innerHTML) {
            // alert("Unselected");
            bool = true;
            chance = 3;
          } else if (
            obj.innerHTML == black ||
            obj.innerHTML == "" ||
            obj.innerHTML == green ||
            obj.innerHTML == white
          ) {
            document.getElementById(temp).innerHTML = "";
            // document.getElementById(temp).style = "background:white;";
            document.getElementById(b).innerHTML = red;
            bool = true;
            if (Number(b.substring(1, 4)) == 79) {
              res[2]++;
            }
            if (tempcolor == "yellow") {
              // document.getElementById(temp).style = "background:yellow;";
            }
          }
        } else {
          function showAlert() {
            document.getElementById("customAlert").style.display = "block";
          }
        }
      } else {
        function showAlert() {
          document.getElementById("customAlert").style.display = "block";
        }
      }
    } else if (obj1.innerHTML == green) {
      // console.log(obj1.textContent);
      if (
        (temprow.charCodeAt() == row.charCodeAt() + 1 ||
          temprow.charCodeAt() == row.charCodeAt() - 1 ||
          temprow.charCodeAt() == row.charCodeAt()) &&
        (tempcol == col || tempcol == col + 1 || tempcol == col - 1) &&
        Number(b.substring(1, 4)) > 9 &&
        Number(b.substring(1, 4)) < 149 &&
        col != 13
      ) {
        if (
          color == tempcolor ||
          color == "yellow" ||
          tempcolor == "yellow" ||
          color == "red" ||
          tempcolor == "red"
        ) {
          if (obj1.innerHTML == obj.innerHTML) {
            // alert("Unselected");
          } else if (
            obj.innerHTML == black ||
            obj.innerHTML == "" ||
            obj.innerHTML == red ||
            obj.innerHTML == white
          ) {
            document.getElementById(temp).innerHTML = "";
            // document.getElementById(temp).style = "background:white;";
            document.getElementById(b).innerHTML = green;
            bool = true;
            if (Number(b.substring(1, 4)) == 79) {
              res[0]++;
            }
            if (tempcolor == "yellow") {
              // document.getElementById(temp).style = "background:yellow;";
            }
          }
        } else {
          function showAlert() {
            document.getElementById("customAlert").style.display = "block";
          }
        }
      } else {
        function showAlert() {
          document.getElementById("customAlert").style.display = "block";
        }
      }
    }
    for (let i in news) {
      // news[i].style = "background:grey;";
    }
    console.log(res);

    // function marks() {
    var marks = document.getElementById("marks");
    marks.innerHTML = res[0] + "," + res[1] + "," + res[2] + "," + res[3];
    // }
  }
}

// ------alert
function showAlert() {
  const customAlert = document.getElementById("customAlert");
  if (customAlert) {
    customAlert.style.display = "block";
  } else {
    // Create a div element if the alert doesn't exist
    const customAlertDiv = document.createElement("div");
    customAlertDiv.id = "customAlert";
    customAlertDiv.classList.add("alert");

    const closeBtnSpan = document.createElement("span");
    closeBtnSpan.classList.add("closebtn");
    closeBtnSpan.textContent = "\u00D7";
    closeBtnSpan.onclick = closeAlert;

    const strongText = document.createElement("strong");
    strongText.textContent = "Alert!";

    const alertMessage = document.createTextNode(
      " This is a custom alert box."
    );

    customAlertDiv.appendChild(closeBtnSpan);
    customAlertDiv.appendChild(strongText);
    customAlertDiv.appendChild(alertMessage);

    document.body.appendChild(customAlertDiv);
  }
}

function closeAlert() {
  const customAlert = document.getElementById("customAlert");
  if (customAlert) {
    customAlert.style.display = "none";
  }
}
