// Initialize an array to store results for different scenarios
let res = [0, 0, 0, 0];

// Boolean flag to control certain conditions in the program
let bool = true;

// Initialize temporary variables to hold state information
let temp, tempcolor, temprow, tempcol;

// Retrieve elements with the class name "black" and store them in a collection
let news = document.getElementsByClassName("black");

// Get a specific image element by its ID "bamboo"
const image = document.getElementById("bamboo");

// const altText = image.alt;

// Get the inner HTML content of specific elements by their respective IDs
let green = document.getElementById("bam").innerHTML;
let white = document.getElementById("ba").innerHTML;
let red = document.getElementById("bamb").innerHTML;
let black = document.getElementById("bambo").innerHTML;

// console.log(altText);

//
// let chance = Math.floor(Math.random() * 4) + 1;
// console.log(chance)
//

function fun(b, color, row, col) {
  // Get a specific element by its ID "randomImage" and store it in a variable
  var peiceElement = document.getElementById("randomImage");

  // Create an array "peices" containing strings representing image file names
  var peices = ["Bird1.png", "Bamboo1.png", "Wind1.png", "Dragon1.png"];

  // Get elements by their IDs passed as variables 'b' and 'temp'
  let obj = document.getElementById(b);
  let obj1 = document.getElementById(temp);

  // Log the value of the variable 'green' to the console
  // console.log(green);

  // Log the inner HTML content of the 'obj' element to the console
  console.log(obj.innerHTML);

  // Trim any leading or trailing whitespace from the inner HTML content of the 'obj' element
  obj.innerHTML = obj.innerHTML.trim();

  black = black.trim();
  red = red.trim();
  green = green.trim();
  white = white.trim();

  // Check if the boolean flag 'bool' is true
  if (bool) {
    // Store the current values of 'b', 'color', 'row', and 'col' in temporary variables
    temp = b;
    tempcolor = color;
    temprow = row;
    tempcol = col;

    // Check if the inner HTML content of the 'obj' element is not empty
    if (obj.innerHTML != "") {
      // Nested conditional statements based on 'chance' and the inner HTML content of 'obj'

      // Scenario 1: 'chance' is 1 and the inner HTML content matches 'green'
      if (chance == 1 && obj.innerHTML == green) {
        // Conditions are met: update styles, change 'bool' to false, and increment 'chance'
        bool = false;
        document.getElementById(b).style =
          "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";
        chance++;
        peiceElement = peices[+1];
      }
      // Scenario 2: 'chance' is 2 and the inner HTML content matches 'white'
      else if (chance == 2 && obj.innerHTML == white) {
        // Conditions are met: update styles, change 'bool' to false, increment 'chance', and possibly increment 'peices'
        bool = false;
        document.getElementById(b).style =
          "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";
        chance++;
        peices++; // Incrementing 'peices'
      }
      // Scenario 3: 'chance' is 3 and the inner HTML content matches 'red'
      else if (chance == 3 && obj.innerHTML == red) {
        // Conditions are met: update styles, change 'bool' to false, increment 'chance', and possibly increment 'peices'
        bool = false;
        document.getElementById(b).style =
          "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";
        chance++;
        peices++; // Incrementing 'peices'
      } else if (chance == 4 && obj.innerHTML == black) {
        // Conditions are met: update styles, change 'bool' to false, increment 'chance', and possibly increment 'peices'
        bool = false;
        document.getElementById(b).style =
          "box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";
        chance = 1;
        peices++; // Incrementing 'peices'
      } else {
        // If none of the specified conditions are met, display a custom alert
        alert("Wrong Move");
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

    // Check if the inner HTML content of 'obj1' matches 'black'
    if (obj1.innerHTML == black) {
      console.log(obj1.innerHTML);
      console.log("black");
      if (
        (temprow.charCodeAt() == row.charCodeAt() + 1 ||
          temprow.charCodeAt() == row.charCodeAt() - 1 ||
          temprow.charCodeAt() == row.charCodeAt()) && // Checking row differences
        (tempcol == col || tempcol == col + 1 || tempcol == col - 1) && // Checking column differences
        Number(b.substring(1, 4)) > 9 && // Check if 'b' number is greater than 9
        col != 1 && // Check if column is not 1
        col != 13 // Check if column is not 13
      ) {
        // Check for color conditions matching 'tempcolor' and 'color'
        if (
          color == tempcolor ||
          color == "yellow" ||
          tempcolor == "yellow" ||
          color == "red" ||
          tempcolor == "red"
        ) {
          // Check if inner HTML of 'obj1' matches inner HTML of 'obj'
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
            // Conditions met: manipulate HTML elements and variables
            document.getElementById(temp).innerHTML = ""; // Clear inner HTML of 'temp' element
            document.getElementById(b).innerHTML = black; // Set inner HTML of 'b' to 'black'
            bool = true; // Set 'bool' to true

            // Update 'res' array based on the substring of 'b'
            if (Number(b.substring(1, 4)) == 79) res[3]++;
          }
        } else
        alert("Wrong Move");
      } else {
        alert("Wrong Move");
      }
    } else if (obj1.innerHTML == white) {
      console.log(obj1.textContent);
      console.log("white");
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
          alert("Wrong Move");
        }
      } else {
        alert("Wrong Move");
      }
    } else if (obj1.innerHTML == red) {
      console.log(obj1.textContent);
      console.log("red");
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
          alert("Wrong Move");
        }
      } else {
        alert("Wrong Move");
      }
    } else if (obj1.innerHTML == green) {
      console.log(obj1.textContent);
      console.log("green");
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
          alert("Wrong Move");
        }
      } else {
        alert("Wrong Move");
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
