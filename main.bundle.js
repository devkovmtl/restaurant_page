/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHTMLElement": () => (/* binding */ createHTMLElement)
/* harmony export */ });
function createHTMLElement(elementType, id, classes, content) {
  var el = document.createElement(elementType);
  if (id) el.id = id;

  if (classes) {
    for (var i = 0; i < classes.length; i++) {
      el.classList.add(classes[i]);
    }
  }

  if (content) el.innerText = content;
  return el;
}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");


var content = document.querySelector('#content');

var createNavLink = function createNavLink(page) {
  var li = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('li', null, ['nav-link'], null);
  var a = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('a', null, null, page); // a.setAttribute('href', page === 'home' ? '/' : `/${page}.html`)

  li.appendChild(a);
  return li;
};

var createNavbar = function createNavbar() {
  var navBar = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['navbar'], null);
  var ul = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('ul', null, ['nav'], null);
  var h2 = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('h2', null, ['nav-brand'], 'Stella Restaurant');
  ul.appendChild(h2);
  var span = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('span', null, ['flex'], null);
  ul.appendChild(span);
  var liHome = createNavLink('home');
  ul.appendChild(liHome);
  var liMenu = createNavLink('menu');
  ul.appendChild(liMenu);
  var liContact = createNavLink('contact');
  ul.appendChild(liContact);
  return navBar.appendChild(ul);
};

var createHome = function createHome() {
  var home = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['home'], null);
  var shadow = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['backdrop-shadow'], null);
  var card = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['card'], null);
  var h1 = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('h1', null, ['restaurant-name'], 'Stella Restaurant');
  card.appendChild(h1);
  var p = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('p', null, ['content'], 'Discover new flavor, new taste.');
  card.appendChild(p);
  var a = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('a', null, ['btn'], 'Check our menu');
  a.addEventListener('click', menu); // a.setAttribute('href', '/menu.html')

  card.appendChild(a);
  shadow.appendChild(card);
  home.appendChild(shadow);
  return home;
};

var createCardMenu = function createCardMenu(imgSrc, alt, content) {
  var div = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['card'], null);
  var img = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('img', null, null, null); // img.setAttribute('src', imgSrc)
  // img.setAttribute('alt', alt)

  div.appendChild(img);
  var p = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('p', null, null, content);
  div.appendChild(p);
  return div;
};

var createMenu = function createMenu() {
  var menu = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['menu'], null);
  var shaddow = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['backdrop-shadow', 'bs-menu'], null);
  var h3Title = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('h3', null, ['menu-title'], 'Menu');
  shaddow.appendChild(h3Title);
  var menuContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['menu-container'], null);
  var cardMenu = createCardMenu('./images/pizza.jpg', 'Pizza', 'Pizza $12');
  menuContainer.appendChild(cardMenu);
  cardMenu = createCardMenu('./images/pizza.jpg', 'Pizza', 'Pizza $12');
  menuContainer.appendChild(cardMenu);
  cardMenu = createCardMenu('./images/pizza.jpg', 'Pizza', 'Pizza $12');
  menuContainer.appendChild(cardMenu);
  shaddow.appendChild(menuContainer);
  menu.appendChild(shaddow);
  return menu;
};

var createContact = function createContact() {
  var contact = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['contact'], null);
  var shaddow = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['backdrop-shadow', 'bs-menu'], null);
  var h3Title = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('h3', null, ['contact-title'], 'Contact Us');
  shaddow.appendChild(h3Title);
  var contactContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['contact-container'], null);
  var i = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('i', null, ['fas', 'fas-phone']);
  var p = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('p', null, null, "123 456 7890");
  contactContainer.appendChild(p);
  i = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('i', null, ['fas', 'fas-home']);
  p = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('p', null, null, "Montr\xE9al, QC H3H 1A1");
  contactContainer.appendChild(p);
  var mapRouter = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['mapouter'], null);
  var gmapCanvas = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', null, ['gmap_canvas'], null);
  var iFrame = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('iframe', 'gmap_canvas', null, null);
  iFrame.setAttribute('src', 'https://maps.google.com/maps?q=Montr%C3%A9al,%20QC%20H3H%201A1&t=&z=11&ie=UTF8&iwloc=&output=embed');
  iFrame.setAttribute('frameborder', '0');
  iFrame.setAttribute('scrolling', 'no');
  iFrame.setAttribute('marginheight', '0');
  iFrame.setAttribute('marginwidth', '0');
  gmapCanvas.appendChild(iFrame);
  mapRouter.appendChild(gmapCanvas);
  contactContainer.appendChild(mapRouter);
  shaddow.appendChild(contactContainer);
  contact.appendChild(shaddow);
  return contact;
};

function home() {
  content.innerHTML = '';
  var navBar = createNavbar();
  var home = createHome();
  content.appendChild(navBar);
  content.appendChild(home);
}

function menu() {
  content.innerHTML = '';
  var navBar = createNavbar();
  var menu = createMenu();
  content.appendChild(navBar);
  content.appendChild(menu);
}

function contact() {
  content.innerHTML = '';
  var navBar = createNavbar();
  var contact = createContact();
  content.appendChild(navBar);
  content.appendChild(contact);
}

home();
document.addEventListener('click', function (e) {
  e.preventDefault();
  var target = e.target.innerText;
  console.log(target);

  if (target === 'home') {
    home();
  }

  if (target === 'menu') {
    menu();
  }

  if (target === 'contact') {
    contact();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UixHQUFvQixFQUFwQjtBQUNBLE1BQU1oQyxNQUFNLEdBQUdELFlBQVksRUFBM0I7QUFDQSxNQUFNMkIsT0FBTyxHQUFHRCxhQUFhLEVBQTdCO0FBQ0F6QyxFQUFBQSxPQUFPLENBQUNjLFdBQVIsQ0FBb0JFLE1BQXBCO0FBQ0FoQixFQUFBQSxPQUFPLENBQUNjLFdBQVIsQ0FBb0I0QixPQUFwQjtBQUNEOztBQUVEbEIsSUFBSTtBQUVKdEIsUUFBUSxDQUFDMkIsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ29CLENBQUQsRUFBTztBQUN4Q0EsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixDQUFDLENBQUNFLE1BQUYsQ0FBUzNDLFNBQXhCO0FBRUE0QyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjs7QUFDQSxNQUFJQSxNQUFNLEtBQUssTUFBZixFQUF1QjtBQUNyQjNCLElBQUFBLElBQUk7QUFDTDs7QUFDRCxNQUFJMkIsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDckJyQixJQUFBQSxJQUFJO0FBQ0w7O0FBRUQsTUFBSXFCLE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3hCVCxJQUFBQSxPQUFPO0FBQ1I7QUFDRixDQWZELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmNzcz9lYWZhIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSFRNTEVsZW1lbnQoZWxlbWVudFR5cGUsIGlkLCBjbGFzc2VzLCBjb250ZW50KSB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKVxyXG4gIGlmIChpZCkgZWwuaWQgPSBpZFxyXG4gIGlmIChjbGFzc2VzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoY29udGVudCkgZWwuaW5uZXJUZXh0ID0gY29udGVudFxyXG4gIHJldHVybiBlbFxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSFRNTEVsZW1lbnQgfSBmcm9tICcuL2hlbHBlcnMnXHJcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJ1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuXHJcbmNvbnN0IGNyZWF0ZU5hdkxpbmsgPSAocGFnZSkgPT4ge1xyXG4gIGNvbnN0IGxpID0gY3JlYXRlSFRNTEVsZW1lbnQoJ2xpJywgbnVsbCwgWyduYXYtbGluayddLCBudWxsKVxyXG4gIGNvbnN0IGEgPSBjcmVhdGVIVE1MRWxlbWVudCgnYScsIG51bGwsIG51bGwsIHBhZ2UpXHJcbiAgLy8gYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBwYWdlID09PSAnaG9tZScgPyAnLycgOiBgLyR7cGFnZX0uaHRtbGApXHJcbiAgbGkuYXBwZW5kQ2hpbGQoYSlcclxuICByZXR1cm4gbGlcclxufVxyXG5cclxuY29uc3QgY3JlYXRlTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdkJhciA9IGNyZWF0ZUhUTUxFbGVtZW50KCdkaXYnLCBudWxsLCBbJ25hdmJhciddLCBudWxsKVxyXG4gIGNvbnN0IHVsID0gY3JlYXRlSFRNTEVsZW1lbnQoJ3VsJywgbnVsbCwgWyduYXYnXSwgbnVsbClcclxuXHJcbiAgY29uc3QgaDIgPSBjcmVhdGVIVE1MRWxlbWVudCgnaDInLCBudWxsLCBbJ25hdi1icmFuZCddLCAnU3RlbGxhIFJlc3RhdXJhbnQnKVxyXG4gIHVsLmFwcGVuZENoaWxkKGgyKVxyXG4gIGNvbnN0IHNwYW4gPSBjcmVhdGVIVE1MRWxlbWVudCgnc3BhbicsIG51bGwsIFsnZmxleCddLCBudWxsKVxyXG4gIHVsLmFwcGVuZENoaWxkKHNwYW4pXHJcbiAgY29uc3QgbGlIb21lID0gY3JlYXRlTmF2TGluaygnaG9tZScpXHJcbiAgdWwuYXBwZW5kQ2hpbGQobGlIb21lKVxyXG4gIGNvbnN0IGxpTWVudSA9IGNyZWF0ZU5hdkxpbmsoJ21lbnUnKVxyXG4gIHVsLmFwcGVuZENoaWxkKGxpTWVudSlcclxuICBjb25zdCBsaUNvbnRhY3QgPSBjcmVhdGVOYXZMaW5rKCdjb250YWN0JylcclxuICB1bC5hcHBlbmRDaGlsZChsaUNvbnRhY3QpXHJcbiAgcmV0dXJuIG5hdkJhci5hcHBlbmRDaGlsZCh1bClcclxufVxyXG5cclxuY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBob21lID0gY3JlYXRlSFRNTEVsZW1lbnQoJ2RpdicsIG51bGwsIFsnaG9tZSddLCBudWxsKVxyXG4gIGNvbnN0IHNoYWRvdyA9IGNyZWF0ZUhUTUxFbGVtZW50KCdkaXYnLCBudWxsLCBbJ2JhY2tkcm9wLXNoYWRvdyddLCBudWxsKVxyXG4gIGNvbnN0IGNhcmQgPSBjcmVhdGVIVE1MRWxlbWVudCgnZGl2JywgbnVsbCwgWydjYXJkJ10sIG51bGwpXHJcbiAgY29uc3QgaDEgPSBjcmVhdGVIVE1MRWxlbWVudChcclxuICAgICdoMScsXHJcbiAgICBudWxsLFxyXG4gICAgWydyZXN0YXVyYW50LW5hbWUnXSxcclxuICAgICdTdGVsbGEgUmVzdGF1cmFudCdcclxuICApXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChoMSlcclxuICBjb25zdCBwID0gY3JlYXRlSFRNTEVsZW1lbnQoXHJcbiAgICAncCcsXHJcbiAgICBudWxsLFxyXG4gICAgWydjb250ZW50J10sXHJcbiAgICAnRGlzY292ZXIgbmV3IGZsYXZvciwgbmV3IHRhc3RlLidcclxuICApXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChwKVxyXG4gIGNvbnN0IGEgPSBjcmVhdGVIVE1MRWxlbWVudCgnYScsIG51bGwsIFsnYnRuJ10sICdDaGVjayBvdXIgbWVudScpXHJcbiAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnUpXHJcbiAgLy8gYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnL21lbnUuaHRtbCcpXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChhKVxyXG4gIHNoYWRvdy5hcHBlbmRDaGlsZChjYXJkKVxyXG4gIGhvbWUuYXBwZW5kQ2hpbGQoc2hhZG93KVxyXG4gIHJldHVybiBob21lXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmRNZW51ID0gKGltZ1NyYywgYWx0LCBjb250ZW50KSA9PiB7XHJcbiAgY29uc3QgZGl2ID0gY3JlYXRlSFRNTEVsZW1lbnQoJ2RpdicsIG51bGwsIFsnY2FyZCddLCBudWxsKVxyXG5cclxuICBjb25zdCBpbWcgPSBjcmVhdGVIVE1MRWxlbWVudCgnaW1nJywgbnVsbCwgbnVsbCwgbnVsbClcclxuICAvLyBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTcmMpXHJcbiAgLy8gaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KVxyXG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpXHJcblxyXG4gIGNvbnN0IHAgPSBjcmVhdGVIVE1MRWxlbWVudCgncCcsIG51bGwsIG51bGwsIGNvbnRlbnQpXHJcbiAgZGl2LmFwcGVuZENoaWxkKHApXHJcblxyXG4gIHJldHVybiBkaXZcclxufVxyXG5cclxuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBtZW51ID0gY3JlYXRlSFRNTEVsZW1lbnQoJ2RpdicsIG51bGwsIFsnbWVudSddLCBudWxsKVxyXG4gIGNvbnN0IHNoYWRkb3cgPSBjcmVhdGVIVE1MRWxlbWVudChcclxuICAgICdkaXYnLFxyXG4gICAgbnVsbCxcclxuICAgIFsnYmFja2Ryb3Atc2hhZG93JywgJ2JzLW1lbnUnXSxcclxuICAgIG51bGxcclxuICApXHJcbiAgY29uc3QgaDNUaXRsZSA9IGNyZWF0ZUhUTUxFbGVtZW50KCdoMycsIG51bGwsIFsnbWVudS10aXRsZSddLCAnTWVudScpXHJcbiAgc2hhZGRvdy5hcHBlbmRDaGlsZChoM1RpdGxlKVxyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVIVE1MRWxlbWVudCgnZGl2JywgbnVsbCwgWydtZW51LWNvbnRhaW5lciddLCBudWxsKVxyXG5cclxuICBsZXQgY2FyZE1lbnUgPSBjcmVhdGVDYXJkTWVudSgnLi9pbWFnZXMvcGl6emEuanBnJywgJ1BpenphJywgJ1BpenphICQxMicpXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkTWVudSlcclxuXHJcbiAgY2FyZE1lbnUgPSBjcmVhdGVDYXJkTWVudSgnLi9pbWFnZXMvcGl6emEuanBnJywgJ1BpenphJywgJ1BpenphICQxMicpXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkTWVudSlcclxuXHJcbiAgY2FyZE1lbnUgPSBjcmVhdGVDYXJkTWVudSgnLi9pbWFnZXMvcGl6emEuanBnJywgJ1BpenphJywgJ1BpenphICQxMicpXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkTWVudSlcclxuXHJcbiAgc2hhZGRvdy5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKVxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoc2hhZGRvdylcclxuICByZXR1cm4gbWVudVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVIVE1MRWxlbWVudCgnZGl2JywgbnVsbCwgWydjb250YWN0J10sIG51bGwpXHJcbiAgY29uc3Qgc2hhZGRvdyA9IGNyZWF0ZUhUTUxFbGVtZW50KFxyXG4gICAgJ2RpdicsXHJcbiAgICBudWxsLFxyXG4gICAgWydiYWNrZHJvcC1zaGFkb3cnLCAnYnMtbWVudSddLFxyXG4gICAgbnVsbFxyXG4gIClcclxuICBjb25zdCBoM1RpdGxlID0gY3JlYXRlSFRNTEVsZW1lbnQoJ2gzJywgbnVsbCwgWydjb250YWN0LXRpdGxlJ10sICdDb250YWN0IFVzJylcclxuICBzaGFkZG93LmFwcGVuZENoaWxkKGgzVGl0bGUpXHJcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGNyZWF0ZUhUTUxFbGVtZW50KFxyXG4gICAgJ2RpdicsXHJcbiAgICBudWxsLFxyXG4gICAgWydjb250YWN0LWNvbnRhaW5lciddLFxyXG4gICAgbnVsbFxyXG4gIClcclxuXHJcbiAgbGV0IGkgPSBjcmVhdGVIVE1MRWxlbWVudCgnaScsIG51bGwsIFsnZmFzJywgJ2Zhcy1waG9uZSddKVxyXG4gIGxldCBwID0gY3JlYXRlSFRNTEVsZW1lbnQoJ3AnLCBudWxsLCBudWxsLCBgMTIzIDQ1NiA3ODkwYClcclxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHApXHJcbiAgaSA9IGNyZWF0ZUhUTUxFbGVtZW50KCdpJywgbnVsbCwgWydmYXMnLCAnZmFzLWhvbWUnXSlcclxuICBwID0gY3JlYXRlSFRNTEVsZW1lbnQoJ3AnLCBudWxsLCBudWxsLCBgTW9udHLDqWFsLCBRQyBIM0ggMUExYClcclxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHApXHJcblxyXG4gIGNvbnN0IG1hcFJvdXRlciA9IGNyZWF0ZUhUTUxFbGVtZW50KCdkaXYnLCBudWxsLCBbJ21hcG91dGVyJ10sIG51bGwpXHJcbiAgY29uc3QgZ21hcENhbnZhcyA9IGNyZWF0ZUhUTUxFbGVtZW50KCdkaXYnLCBudWxsLCBbJ2dtYXBfY2FudmFzJ10sIG51bGwpXHJcbiAgY29uc3QgaUZyYW1lID0gY3JlYXRlSFRNTEVsZW1lbnQoJ2lmcmFtZScsICdnbWFwX2NhbnZhcycsIG51bGwsIG51bGwpXHJcbiAgaUZyYW1lLnNldEF0dHJpYnV0ZShcclxuICAgICdzcmMnLFxyXG4gICAgJ2h0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/cT1Nb250ciVDMyVBOWFsLCUyMFFDJTIwSDNIJTIwMUExJnQ9Jno9MTEmaWU9VVRGOCZpd2xvYz0mb3V0cHV0PWVtYmVkJ1xyXG4gIClcclxuICBpRnJhbWUuc2V0QXR0cmlidXRlKCdmcmFtZWJvcmRlcicsICcwJylcclxuICBpRnJhbWUuc2V0QXR0cmlidXRlKCdzY3JvbGxpbmcnLCAnbm8nKVxyXG4gIGlGcmFtZS5zZXRBdHRyaWJ1dGUoJ21hcmdpbmhlaWdodCcsICcwJylcclxuICBpRnJhbWUuc2V0QXR0cmlidXRlKCdtYXJnaW53aWR0aCcsICcwJylcclxuICBnbWFwQ2FudmFzLmFwcGVuZENoaWxkKGlGcmFtZSlcclxuICBtYXBSb3V0ZXIuYXBwZW5kQ2hpbGQoZ21hcENhbnZhcylcclxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1hcFJvdXRlcilcclxuXHJcbiAgc2hhZGRvdy5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKVxyXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoc2hhZGRvdylcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RcclxufVxyXG5cclxuZnVuY3Rpb24gaG9tZSgpIHtcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbiAgY29uc3QgbmF2QmFyID0gY3JlYXRlTmF2YmFyKClcclxuICBjb25zdCBob21lID0gY3JlYXRlSG9tZSgpXHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKVxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSlcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudSgpIHtcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbiAgY29uc3QgbmF2QmFyID0gY3JlYXRlTmF2YmFyKClcclxuICBjb25zdCBtZW51ID0gY3JlYXRlTWVudSgpXHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKVxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSlcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFjdCgpIHtcclxuICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcbiAgY29uc3QgbmF2QmFyID0gY3JlYXRlTmF2YmFyKClcclxuICBjb25zdCBjb250YWN0ID0gY3JlYXRlQ29udGFjdCgpXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KVxyXG59XHJcblxyXG5ob21lKClcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5pbm5lclRleHRcclxuXHJcbiAgY29uc29sZS5sb2codGFyZ2V0KVxyXG4gIGlmICh0YXJnZXQgPT09ICdob21lJykge1xyXG4gICAgaG9tZSgpXHJcbiAgfVxyXG4gIGlmICh0YXJnZXQgPT09ICdtZW51Jykge1xyXG4gICAgbWVudSgpXHJcbiAgfVxyXG5cclxuICBpZiAodGFyZ2V0ID09PSAnY29udGFjdCcpIHtcclxuICAgIGNvbnRhY3QoKVxyXG4gIH1cclxufSlcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUhUTUxFbGVtZW50IiwiZWxlbWVudFR5cGUiLCJpZCIsImNsYXNzZXMiLCJjb250ZW50IiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZU5hdkxpbmsiLCJwYWdlIiwibGkiLCJhIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVOYXZiYXIiLCJuYXZCYXIiLCJ1bCIsImgyIiwic3BhbiIsImxpSG9tZSIsImxpTWVudSIsImxpQ29udGFjdCIsImNyZWF0ZUhvbWUiLCJob21lIiwic2hhZG93IiwiY2FyZCIsImgxIiwicCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZW51IiwiY3JlYXRlQ2FyZE1lbnUiLCJpbWdTcmMiLCJhbHQiLCJkaXYiLCJpbWciLCJjcmVhdGVNZW51Iiwic2hhZGRvdyIsImgzVGl0bGUiLCJtZW51Q29udGFpbmVyIiwiY2FyZE1lbnUiLCJjcmVhdGVDb250YWN0IiwiY29udGFjdCIsImNvbnRhY3RDb250YWluZXIiLCJtYXBSb3V0ZXIiLCJnbWFwQ2FudmFzIiwiaUZyYW1lIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=