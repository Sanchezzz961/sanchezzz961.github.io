"use strict";var container=document.querySelector(".offers__container"),loader=document.querySelector(".loader"),GOOD_REQUEST=200,TIME_OUT=3e3,request=function(){var e=[],t=new XMLHttpRequest;t.open("GET","https://api.myjson.com/bins/150rb0",!1),t.send();t.status!==GOOD_REQUEST?setTimeout(function(){var e=document.createElement("h5");e.className="error-message",e.innerHTML="Ошибка соединения",container.removeChild(loader),container.appendChild(e)},TIME_OUT):(e=JSON.parse(t.responseText).slice(),container.removeChild(loader));return e};function cpu(e){document.getElementById("#template-server").innerHTML+=element,request().forEach(function(t){var r,n,o;r=t,n=document.querySelector("#template-server").content.querySelector(".server").cloneNode(!0),o=String(r.price/100).replace(/\B(?=(?:\d{3})+(?!\d))/g," "),r.cpu.count*r.cpu.cores==e&&(n.querySelector(".server__info--name").textContent=r.name,r.cpu.count>=2?n.querySelector(".server__info--cpu").textContent=r.cpu.count+" x "+r.cpu.name+", "+r.cpu.cores*r.cpu.count+" ядер ":n.querySelector(".server__info--cpu").textContent=r.cpu.name+", "+r.cpu.cores*r.cpu.count+" ядер ",n.querySelector(".server__info--hdd").textContent=r.disk.count+" x "+r.disk.value+" ГБ "+r.disk.type,n.querySelector(".server__info--ram").textContent=r.ram,n.querySelector(".server__info--price").textContent=o+" ₽/месяц",n.querySelector(".server__info--gpu").textContent=r.gpu,container.appendChild(n))})}function ssd(e){request().forEach(function(t){var r,n,o;r=t,n=document.querySelector("#template-server").content.querySelector(".server").cloneNode(!0),o=String(r.price/100).replace(/\B(?=(?:\d{3})+(?!\d))/g," "),"SSD"==r.disk.type&&r.cpu.count*r.cpu.cores==e&&(n.querySelector(".server__info--name").textContent=r.name,r.cpu.count>=2?n.querySelector(".server__info--cpu").textContent=r.cpu.count+" x "+r.cpu.name+", "+r.cpu.cores*r.cpu.count+" ядер ":n.querySelector(".server__info--cpu").textContent=r.cpu.name+", "+r.cpu.cores*r.cpu.count+" ядер ",n.querySelector(".server__info--hdd").textContent=r.disk.count+" x "+r.disk.value+" ГБ "+r.disk.type,n.querySelector(".server__info--ram").textContent=r.ram,n.querySelector(".server__info--price").textContent=o+" ₽/месяц",n.querySelector(".server__info--gpu").textContent=r.gpu,container.appendChild(n))})}function gpu(e){request().forEach(function(t){var r,n,o;r=t,n=document.querySelector("#template-server").content.querySelector(".server").cloneNode(!0),o=String(r.price/100).replace(/\B(?=(?:\d{3})+(?!\d))/g," "),null!=r.gpu&&r.cpu.count*r.cpu.cores==e&&(n.querySelector(".server__info--name").textContent=r.name,r.cpu.count>=2?n.querySelector(".server__info--cpu").textContent=r.cpu.count+" x "+r.cpu.name+", "+r.cpu.cores*r.cpu.count+" ядер ":n.querySelector(".server__info--cpu").textContent=r.cpu.name+", "+r.cpu.cores*r.cpu.count+" ядер ",n.querySelector(".server__info--hdd").textContent=r.disk.count+" x "+r.disk.value+" ГБ "+r.disk.type,n.querySelector(".server__info--ram").textContent=r.ram,n.querySelector(".server__info--price").textContent=o+" ₽/месяц",n.querySelector(".server__info--gpu").textContent=r.gpu,container.appendChild(n))})}function raid(e){request().forEach(function(t){var r,n,o;r=t,n=document.querySelector("#template-server").content.querySelector(".server").cloneNode(!0),o=String(r.price/100).replace(/\B(?=(?:\d{3})+(?!\d))/g," "),r.disk.count>=2&&r.cpu.count*r.cpu.cores==e&&(n.querySelector(".server__info--name").textContent=r.name,r.cpu.count>=2?n.querySelector(".server__info--cpu").textContent=r.cpu.count+" x "+r.cpu.name+", "+r.cpu.cores*r.cpu.count+" ядер ":n.querySelector(".server__info--cpu").textContent=r.cpu.name+", "+r.cpu.cores*r.cpu.count+" ядер ",n.querySelector(".server__info--hdd").textContent=r.disk.count+" x "+r.disk.value+" ГБ "+r.disk.type,n.querySelector(".server__info--ram").textContent=r.ram,n.querySelector(".server__info--price").textContent=o+" ₽/месяц",n.querySelector(".server__info--gpu").textContent=r.gpu,container.appendChild(n))})}request().forEach(function(e){var t,r,n;t=e,r=document.querySelector("#template-server").content.querySelector(".server").cloneNode(!0),n=String(t.price/100).replace(/\B(?=(?:\d{3})+(?!\d))/g," "),t.cpu.count*t.cpu.cores==6&&(r.querySelector(".server__info--name").textContent=t.name,t.cpu.count>=2?r.querySelector(".server__info--cpu").textContent=t.cpu.count+" x "+t.cpu.name+", "+t.cpu.cores*t.cpu.count+" ядер ":r.querySelector(".server__info--cpu").textContent=t.cpu.name+", "+t.cpu.cores*t.cpu.count+" ядер ",r.querySelector(".server__info--hdd").textContent=t.disk.count+" x "+t.disk.value+" ГБ "+t.disk.type,r.querySelector(".server__info--ram").textContent=t.ram,r.querySelector(".server__info--price").textContent=n+" ₽/месяц",r.querySelector(".server__info--gpu").textContent=t.gpu,container.appendChild(r))});