'use strict';

var container = document.querySelector('.offers__container');
var loader = document.querySelector('.loader');
var GOOD_REQUEST = 200;
var TIME_OUT = 3000;

var request = function () {
  var data = [];
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.jsonbin.io/b/5df3c10a2c714135cda0bf0f/1', false);
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
        element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер '; //окончание через кратность двойки?
        } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
      }
      element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
      element.querySelector('.server__info--ram').textContent = info.ram;
      element.querySelector('.server__info--price').textContent = price + ' ₽/мес.';
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
    var price = String(info.price / 100).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '); // Перевод копеек в рубли, разделитель разрядов
    if (info.disk.type == "SSD" && (info.cpu.count * info.cpu.cores) == value) {
      element.querySelector('.server__info--name').textContent = info.name;
      if (info.cpu.count >= 2) {
        element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер '; //окончание через кратность двойки?
      } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
      }
      element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
      element.querySelector('.server__info--ram').textContent = info.ram;
      element.querySelector('.server__info--price').textContent = price + ' ₽/мес.';
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
    var price = String(info.price / 100).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '); // Перевод копеек в рубли, разделитель разрядов
    if (info.gpu != null && (info.cpu.count * info.cpu.cores) == value) {
      element.querySelector('.server__info--name').textContent = info.name;
      if (info.cpu.count >= 2) {
        element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер '; //окончание через кратность двойки?
        } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
      }
      element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
      element.querySelector('.server__info--ram').textContent = info.ram;
      element.querySelector('.server__info--price').textContent = price + ' ₽/мес.';
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
    var price = String(info.price / 100).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '); // Перевод копеек в рубли, разделитель разрядов
    if (info.disk.count >= 2 && (info.cpu.count * info.cpu.cores) == value) {
      element.querySelector('.server__info--name').textContent = info.name;
      if (info.cpu.count >= 2) {
        element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер '; //окончание через кратность двойки?
      } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
      }
      element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
      element.querySelector('.server__info--ram').textContent = info.ram;
      element.querySelector('.server__info--price').textContent = price + ' ₽/мес.';
      element.querySelector('.server__info--gpu').textContent = info.gpu;
      container.appendChild(element);
    }
  };
  var servers = request();
  servers.forEach(function (item) {
    create(item);
  });
}

/*(function () {
  var create = function (info) {
    var template = document.querySelector('#template-server');
    var server = template.content.querySelector('.server');
    var element = server.cloneNode(true);
    var price = String(info.price / 100).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '); // Перевод копеек в рубли, разделитель разрядов
    if ((info.cpu.count * info.cpu.cores) == 6 ) {
      element.querySelector('.server__info--name').textContent = info.name;
      if (info.cpu.count >= 2) {
        element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер '; //окончание через кратность двойки?
        } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
      }
      element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
      element.querySelector('.server__info--ram').textContent = info.ram;
      element.querySelector('.server__info--price').textContent = price + ' ₽/мес.';
      element.querySelector('.server__info--gpu').textContent = info.gpu;
      container.appendChild(element);
    }
  };
  var servers = request();
  servers.forEach(function (item) {
    create(item);
  });
})();*/