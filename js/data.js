'use strict';

var container = document.querySelector('.offers__container');
var loader = document.querySelector('.loader');
var GOOD_REQUEST = 200;
var TIME_OUT = 3000;
var request = function () {
  var data = [];
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.myjson.com/bins/150rb0', false); //пока заблокирован https://api.jsonbin.io/b/5df3c10a2c714135cda0bf0f/1
  xhr.send();
  var error = function () {
    var errorMsg = document.createElement('h5');
    errorMsg.className = 'error-message';
    errorMsg.innerHTML = 'Ошибка соединения';
    container.removeChild(loader);
    container.appendChild(errorMsg);
  };
  if (xhr.status !== GOOD_REQUEST) {
    setTimeout(error, TIME_OUT);
  } else {
    var servers = JSON.parse(xhr.responseText);
    data = servers.slice();
    container.removeChild(loader);
  }
  return data
};

function cpu(value) {
  var create = function (info) {
    var template = document.querySelector('#template-server');
    var server = template.content.querySelector('.server');
    var element = server.cloneNode(true);
    var price = String(info.price / 100).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '); // Перевод копеек в рубли, разделитель разрядов
    if ((info.cpu.count * info.cpu.cores) == value ) {
      element.querySelector('.server__info--name').textContent = info.name;
      if (info.cpu.count >= 2) {
        element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер '; //прописать дополнительный if для 2 и 4?
        } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
      }
      element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
      element.querySelector('.server__info--ram').textContent = info.ram;
      element.querySelector('.server__info--price').textContent = price + ' ₽/месяц';
      element.querySelector('.server__info--gpu').textContent = info.gpu;
      container.appendChild(element);
    }
  };
  var servers = request();
  servers.forEach(function (item) {
    create(item);
  });
}

function ssd(value) {
  var create = function (info) {
    var template = document.querySelector('#template-server');
    var server = template.content.querySelector('.server');
    var element = server.cloneNode(true);
    var price = String(info.price / 100).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
    if (info.disk.type == "SSD" && (info.cpu.count * info.cpu.cores) == value) {
      element.querySelector('.server__info--name').textContent = info.name;
      if (info.cpu.count >= 2) {
        element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер '; 
      } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
      }
      element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
      element.querySelector('.server__info--ram').textContent = info.ram;
      element.querySelector('.server__info--price').textContent = price + ' ₽/месяц';
      element.querySelector('.server__info--gpu').textContent = info.gpu;
      container.appendChild(element);
    }
  };
  var servers = request();
  servers.forEach(function (item) {
    create(item);
  });
}

function gpu(value) { 
  var create = function (info) {
    var template = document.querySelector('#template-server');
    var server = template.content.querySelector('.server');
    var element = server.cloneNode(true);
    var price = String(info.price / 100).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
    if (info.gpu != null && (info.cpu.count * info.cpu.cores) == value) {
      element.querySelector('.server__info--name').textContent = info.name;
      if (info.cpu.count >= 2) {
        element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
        } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
      }
      element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
      element.querySelector('.server__info--ram').textContent = info.ram;
      element.querySelector('.server__info--price').textContent = price + ' ₽/месяц';
      element.querySelector('.server__info--gpu').textContent = info.gpu;
      container.appendChild(element);
    }
  };
  var servers = request();
  servers.forEach(function (item) {
    create(item);
  });
}

function raid(value) {
  var create = function (info) {
    var template = document.querySelector('#template-server');
    var server = template.content.querySelector('.server');
    var element = server.cloneNode(true);
    var price = String(info.price / 100).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
    if (info.disk.count >= 2 && (info.cpu.count * info.cpu.cores) == value) {
      element.querySelector('.server__info--name').textContent = info.name;
      if (info.cpu.count >= 2) {
        element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер '; 
      } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
      }
      element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
      element.querySelector('.server__info--ram').textContent = info.ram;
      element.querySelector('.server__info--price').textContent = price + ' ₽/месяц';
      element.querySelector('.server__info--gpu').textContent = info.gpu;
      container.appendChild(element);
    }
  };
  var servers = request();
  servers.forEach(function (item) {
    create(item);
  });
}

function move(){
var slider = document.getElementById('slider__cpu');
var item = slider.querySelector('#item');
var result = document.getElementById('result');
 
var sliderClientCoords = slider.getBoundingClientRect();
var sliderCoords = {};
sliderCoords.top = sliderClientCoords.top + pageYOffset;
sliderCoords.left = sliderClientCoords.left + pageXOffset;
 
item.onmousedown = function(e){
 item.ondragstart = function() {
      return false;
   };
    
   var itemClientCoords = item.getBoundingClientRect();
   var itemCoords = {};
   itemCoords.top = itemClientCoords.top + pageYOffset;
 itemCoords.left = itemClientCoords.left + pageXOffset;
   
   var right = slider.offsetWidth - item.offsetWidth;
   
   var shiftX = e.pageX - itemCoords.left;
   
   document.onmousemove = function(e){
   var newLeft = e.pageX - sliderCoords.left - shiftX;
      if(newLeft < 0) newLeft = 0;
      if(newLeft > right) newLeft = right;
      item.style.left = newLeft + 'px';
      result.innerHTML = Math.round(newLeft / right * 100) + '%';
return false;
   }
   
   document.onmouseup = function(){
   document.onmousemove = document.onmouseup = null;
   }
}
}

(function () {
  var create = function (info) {
    var template = document.querySelector('#template-server');
    var server = template.content.querySelector('.server');
    var element = server.cloneNode(true);
    var price = String(info.price / 100).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
    if ((info.cpu.count * info.cpu.cores) == 6 ) {
      element.querySelector('.server__info--name').textContent = info.name;
      if (info.cpu.count >= 2) {
        element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
        } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
      }
      element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
      element.querySelector('.server__info--ram').textContent = info.ram;
      element.querySelector('.server__info--price').textContent = price + ' ₽/месяц';
      element.querySelector('.server__info--gpu').textContent = info.gpu;
      container.appendChild(element);
    }
  };
  var servers = request();
  servers.forEach(function (item) {
    create(item);
  });
})();