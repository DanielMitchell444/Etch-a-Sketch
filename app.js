window.onload = function () {
  makeGrid(16);
};

//get grid container and container //

let gridContainer = document.querySelector(".grid-container");

let container = document.querySelector(".container");

let optionsContainer = document.querySelector(".options");

let sizeContainer = document.querySelector('.size');

let square = document.querySelectorAll(".square");

let sliderContainer = document.querySelector('.slider-container');

//Create the buttons at the top of the page //

let color = document.createElement("button");

color.textContent = "Classic Mode";

color.classList = "classicBtn";

color.style.width = "150px";
color.style.height = "25px";

let modernColor = document.createElement("button");

modernColor.textContent = "Modern Mode";

modernColor.classList = "modernBtn"

modernColor.style.width = "150px";
modernColor.style.height = "25px";

let rainbowColor = document.createElement("button");

rainbowColor.textContent = "Rainbow Mode";

rainbowColor.classList = "rainbowBtn"

rainbowColor.style.width = "150px";
rainbowColor.style.height = "25px";

let sliderBtn = document.createElement('button');

sliderBtn.classList = "sliderBtn";

sliderBtn.textContent = "Change Size";







let eraseBtn = document.createElement("button");

eraseBtn.textContent = "Erase";

eraseBtn.classList = "eraseBtn";
eraseBtn.style.width = "150px";
eraseBtn.style.height = "25px";

let saveBtn = document.createElement('button');

saveBtn.textContent = "Change Size";

saveBtn.classList = "saveBtn";

saveBtn.style.width = "150px";

saveBtn.style.height = "25px";

//Clear button //

let clearBtn = document.createElement('button');

clearBtn.textContent = "Clear";

clearBtn.className = "clearBtn";

clearBtn.style.width = "150px";

clearBtn.style.width = "25px";



//Create the size slider //


optionsContainer.append(color);
optionsContainer.append(modernColor);
optionsContainer.append(rainbowColor);
optionsContainer.append(eraseBtn);
optionsContainer.append(saveBtn);

sliderContainer.append(saveBtn);

const makeGrid = (size) => {
  //Loop through the grid and create a 16 by 16 grid
   
  let totalSize = size * size;
  
  for (let i = 0; i < totalSize; i++) {
     let square = document.createElement('div');
     square.classList.add('square');
     square.style.backgroundColor = "white";
     gridContainer.appendChild(square); 
    }
  }


const classicMode = () => {
  let square = document.querySelectorAll(".square");

  /*Loop through the squares, add a mouseover event listener
to the squares, and add a black background color*/
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", function () {
      square[i].style.backgroundColor = "black";
    });
  }
};

const modernMode = () => {
  let square = document.querySelectorAll(".square");

  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", function () {
      square[i].style.backgroundColor = "grey";
    });
  }
};

const rainbowMode = () => {
  let square = document.querySelectorAll(".square");

  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", function () {
      const randomColor1 = Math.floor(Math.random() * 256);
      const randomColor2 = Math.floor(Math.random() * 256);
      const randomColor3 = Math.floor(Math.random() * 256);

      square[i].style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
    });
  }
};

const erase = () => {
  let square = document.querySelectorAll(".square");

  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", function () {
      square[i].style.backgroundColor = "white";
    });
  }
};

const clear = () => {
  let square = document.querySelectorAll('.square');

  for(let i = 0; i < square.length; i++){
    square[i].style.backgroundColor = "white";
    square[i].removeChild(square);
  }
}

const changeSize = () => {
  let newSize = +prompt('enter number of squares');
   
  clear();
  makeGrid(newSize);
}









color.addEventListener("click", classicMode);

modernColor.addEventListener("click", modernMode);

rainbowColor.addEventListener("click", rainbowMode);

eraseBtn.addEventListener("click", erase);

saveBtn.addEventListener('click', changeSize);

clearBtn.addEventListener('click', clear);








 
