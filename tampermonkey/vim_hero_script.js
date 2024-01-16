// ==UserScript==
// @name         vim_hero_script
// @namespace    http://tampermonkey.net/
// @version      2024-01-11
// @description  try to take over the world!
// @author       You
// @match        https://www.vim-hero.com/lessons/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vim-hero.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  setTimeout(function () {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'r') {
        incrementIfPassed();
      }
    });

    function incrementIfPassed() {
      if (!document.getElementsByClassName('prism-code').length) {
        let counterEl = document.getElementById("custom_counter");
        counterEl.innerText = Number(counterEl.innerText) + 1;
      } else {
        console.log("Need pass training to increment counter, skipped!");
      }
    }

    registerCustomCounterElListeners(
        Array.from(document.querySelectorAll(".menu li a")));

    registerCustomCounter();

    function registerCustomCounterElListeners(els) {
      els.forEach(el => {
        el.addEventListener('click', registerCustomCounter);
      });
    }

    function registerCustomCounter() {
      setTimeout(function () {
        registerCustomCounterElListeners(
            Array.from(document.querySelectorAll(".justify-between a")));

        document.querySelector("button.badge").addEventListener('click',
            function () {
              incrementIfPassed();
            });

        let tabsContainers = document.getElementsByClassName(
            "bg-neutral-focus");
        if (tabsContainers.length) {
          let tabsContainer = tabsContainers[0];
          tabsContainer.innerHTML += '<a class="tab">Counter:&nbsp;<b id="custom_counter">0</b></a>';
        }
        console.log("Register counter!");
      }, 500);
    }
  }, 500);

})();