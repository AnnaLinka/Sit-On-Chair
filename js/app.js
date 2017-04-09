document.addEventListener("DOMContentLoaded", function(){

//Submenu

  var showMenu = document.querySelector('li.show a');
  var submenu = document.querySelector('ul.sub-menu');

  showMenu.addEventListener("mouseover", function (event) {
    submenu.style.display="block";
  });

  showMenu.addEventListener("mouseout", function (event) {
    submenu.style.display="none";
  });

//Slider

  var arrowNext = document.querySelector('.arrow-right');
  var arrowPrevious = document.querySelector('.arrow-left');
  var sliderElements = document.querySelectorAll('#slider li');
  var currIndex = 0;

  sliderElements[currIndex].classList.add('visible');

    arrowNext.addEventListener("click", function (event) {

        sliderElements[currIndex].classList.remove('visible');
        currIndex +=1;
        if (sliderElements.length === currIndex) {
          currIndex=0;
        }
        sliderElements[currIndex].classList.add('visible');
    });

    arrowPrevious.addEventListener('click', function (event) {

        sliderElements[currIndex].classList.remove('visible');
        currIndex -=1;
        if (currIndex < 0) {
          currIndex=sliderElements.length-1;
        }
        sliderElements[currIndex].classList.add('visible');
    });

//Calculate price

  var arrowModels = document.querySelector('span.list_arrow.models');
  var arrowColors = document.querySelector('span.list_arrow.colors');
  var arrowMaterials = document.querySelector('span.list_arrow.materials');

  // console.log(arrowModels);
  // console.log(arrowColors);
  // console.log(arrowMaterials);

  var models = document.querySelectorAll('ul.models li');
  var colors = document.querySelectorAll('ul.colors li');
  var materials = document.querySelectorAll('ul.materials li');
  var chosenModel = document.querySelector('span.models');
  var chosenColor = document.querySelector('span.colors');
  var chosenMaterial = document.querySelector('span.materials');
  var chosenTransport = document.querySelector('.checkbox label');
  var transport = document.getElementById('transport');

  // console.log(models);
  // console.log(colors);
  // console.log(materials);
  // console.log(chosenModel);
  // console.log(chosenColor);
  // console.log(chosenMaterial);
  // console.log(chosenTransport);
  // console.log(transport);

  var selectedModel = document.querySelector('.panel_left h4.title');
  var selectedColor = document.querySelector('.panel_left span.color');
  var selectedMaterial = document.querySelector('.panel_left span.pattern');
  var selectedTransport = document.querySelector('.panel_left span.transport');

  // console.log(selectedChair);
  // console.log(selectedColor);
  // console.log(selectedMaterial);
  // console.log(selectedTransport);

  var selectedModelPrice = document.querySelector('.panel_right h4.title.value');
  var selectedColorPrice = document.querySelector('.panel_right span.color.value');
  var selectedMaterialPrice = document.querySelector('.panel_right span.pattern.value');
  var selectedTransportPrice = document.querySelector('.panel_right span.transport.value');

  // console.log(selectedModelPrice);
  // console.log(selectedColorPrice);
  // console.log(selectedMaterialPrice);
  // console.log(selectedTransportPrice);

  var price1 = 0;
  var price2 = 0;
  var price3 = 0;
  var priceT = 0;
  var finalPrice = document.querySelector('.sum strong');

  arrowModels.addEventListener("click", function (event) {
    this.nextElementSibling.classList.toggle('visible');
  });

  for (var i=0; i<models.length; i++) {
    models[i].addEventListener("click", function (event) {
      chosenModel.innerHTML = this.innerHTML;
      selectedModel.innerHTML = this.innerHTML;
      selectedModelPrice.innerHTML = this.getAttribute("data-model-price");
      price1 = parseInt(selectedModelPrice.innerHTML,10);
      finalPrice.innerHTML = price1 + price2 + price3 + priceT;
      this.parentElement.classList.toggle('visible');
    });
  };

  arrowColors.addEventListener("click", function (event) {
    this.nextElementSibling.classList.toggle('visible');
  });

  for (var i=0; i<colors.length; i++) {
    colors[i].addEventListener("click", function (event) {
      chosenColor.innerHTML = this.innerHTML;
      selectedColor.innerHTML = chosenColor.innerHTML;
      selectedColorPrice.innerHTML = this.getAttribute("data-color-price");
      price2 = parseInt(selectedColorPrice.innerHTML,10);
      finalPrice.innerHTML = price1 + price2 + price3 + priceT;
      this.parentElement.classList.toggle('visible');
    });
  };

  arrowMaterials.addEventListener("click", function (event) {
    this.nextElementSibling.classList.toggle('visible');
  });

  for (var i=0; i<materials.length; i++) {
    materials[i].addEventListener("click", function (event) {
      chosenMaterial.innerHTML = this.innerHTML;
      selectedMaterial.innerHTML = chosenMaterial.innerHTML;
      selectedMaterialPrice.innerHTML = this.getAttribute("data-material-price");
      price3 = parseInt(selectedMaterialPrice.innerHTML,10);
      finalPrice.innerHTML = price1 + price2 + price3 +priceT;
      this.parentElement.classList.toggle('visible');
    });
  };

  transport.addEventListener('click', function (event) {
     if (this.checked) {
       selectedTransport.innerHTML = chosenTransport.innerHTML;
       selectedTransportPrice.innerHTML = transport.getAttribute("data-transport-price");
       priceT = parseInt(transport.getAttribute("data-transport-price"))
       finalPrice.innerHTML = price1 + price2 + price3 + priceT;
     } else {
       finalPrice.innerHTML = price1 + price2 + price3;
       selectedTransport.innerHTML = "";
       selectedTransportPrice.innerHTML = "";
     }
  });


});
