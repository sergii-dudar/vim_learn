// ==UserScript==
// @name         monkeytype_script
// @namespace    http://tampermonkey.net/
// @version      2024-01-16
// @description  try to take over the world!
// @author       You
// @match        https://monkeytype.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=monkeytype.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  setTimeout(function () {

    document.addEventListener('keydown', function keydownHandler(event) {
      if (event.key === 'Tab') {
        keydownHandler.isTabPressed = true;
      } else if (event.key === 'Enter' && keydownHandler.isTabPressed) {
        keydownHandler.isTabPressed = false;
        incrementIfPassed();
      }
    });

    function incrementIfPassed() {

      let resultElement = document.getElementById("result");
      if (resultElement.className === 'hidden') {
        console.log("Need pass training to increment counter, skipped!");
      } else {
        let counterEl = document.getElementById("custom_counter");
        counterEl.innerText = Number(counterEl.innerText) + 1;
      }
    }

    registerCustomCounter();

    function registerCustomCounter() {
      setTimeout(function () {

        let firstButton = document.getElementById('startTestButton');

        let nextDiv = Array.from(firstButton.parentElement.children)
        .find(value => value.nodeName === 'DIV');

        let counterParent = document.createElement('a');
        counterParent.className = 'textButton';
        counterParent.innerHTML = 'Counter:&nbsp;<b id="custom_counter">0</b>'
        nextDiv.insertAdjacentElement("beforebegin", counterParent)

        console.log("Register counter!");
      }, 500);
    }
  }, 500);

})();