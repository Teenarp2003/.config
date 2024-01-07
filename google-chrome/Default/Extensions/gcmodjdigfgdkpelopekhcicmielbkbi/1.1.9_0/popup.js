!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}({4:function(e,t,n){e.exports=n(5)},5:function(e,t){!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}({5:function(e,t,n){e.exports=n(6)},6:function(e,t){var n,r=e=>new Promise((function(t,n){chrome.storage.sync.get([e],(function(n){t(n[e])}))})),o=(e,t)=>new Promise((function(n,r){var o={};o[e]=t,chrome.storage.sync.set(o,(function(e){n(o)}))}));n=()=>{!function(e="message"){for(const t of document.getElementsByTagName("*"))t.dataset&&t.dataset[e]&&(t.innerHTML=chrome.i18n.getMessage(t.dataset[e]))}(),async function(){for(const e of document.querySelectorAll(".setting")){const t=e.querySelector("input");t.checked=!0===await r(t.name),e.addEventListener("change",e=>{o(t.name,t.checked)},!1)}}(),document.querySelector(".teaser").href=`https://chrome.google.com/webstore/detail/${chrome.runtime.id}/reviews`},"complete"===document.readyState?n():window.addEventListener("load",n,!1)}})}});

var elements = document.querySelectorAll('[name="rating"]');



var rate = function() {
    var ratting = this.getAttribute("data-ratting");
    console.log(ratting);
    if (ratting == '4' || ratting == '5') chrome.tabs.create({ url: 'https://chrome.google.com/webstore/detail/youtube-adblock-plus/gcmodjdigfgdkpelopekhcicmielbkbi/reviews' });
    else document.getElementById("rate-us").innerHTML = `<div style="
    margin: auto;
    text-align: center;
    padding: 15px 0;
    font-size: 17px;
">Thanks for your feedback</div>`;

};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', rate, false);
}