'use strict';

(function () {

  var container = document.querySelector('.offers__container');
  var loader = document.querySelector('.loader');
  var gpu = document.getElementById("radio__gpu").checked;
  var raid = document.getElementById("radio__raid").checked;
  var ssd = document.getElementById("radio__ssd").checked;
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


  var create = function (info) {
    var template = document.querySelector('#template-server');
    var server = template.content.querySelector('.server');
    var element = server.cloneNode(true);
    var price = String(info.price / 100).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '); // Перевод копеек в рубли, разделитель разрядов
    element.querySelector('.server__info--name').textContent = info.name;
    if (info.cpu.count >= 2) {
      element.querySelector('.server__info--cpu').textContent = info.cpu.count + ' x ' + info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер '; //окончание через кратность двойки?
      } else {
        element.querySelector('.server__info--cpu').textContent = info.cpu.name + ', ' + info.cpu.cores * info.cpu.count + ' ядер ';
    }
    element.querySelector('.server__info--hdd').textContent = info.disk.count + " x " + info.disk.value + ' ГБ' + ' ' + info.disk.type;  
    element.querySelector('.server__info--ram').textContent = info.ram;
    element.querySelector('.server__info--price').textContent = price + ' ₽/мес.';
    if (gpu == true) {
      element.querySelector('.server__info--gpu').textContent = info.gpu;
    }
    container.appendChild(element);
  };
  var servers = request();

  var kek = function (bad){
    alert("kek");
  }

  servers.forEach(function (item) {
    create(item);
  });
})();