!function(){"use strict";var e={5081:function(e,t,n){var r=n(1255),i=n(1505),a=n(1689),c=n(6861),o=function(){return i.createElement("nav",{className:"header"},i.createElement(c.OL,{to:"/films",activeClassName:"active"},"Films"),i.createElement(c.OL,{to:"/planets?page=1",activeClassName:"active"},"Planets"))},u=n(7115),l=n(5809);function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  background: white;\n  border: 1px solid grey;\n  border-radius: 10px;\n  min-width: 375px;\n  width: 50%;\n  min-height: 500px;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: stretch;\n  box-shadow: 10px 10px 30px grey;\n  padding: 2%;\n  margin: 2%;\n"]);return s=function(){return e},e}var f=l.ZP.div(s()),p=function(){return i.createElement(f,null,i.createElement("h1",null,"Characters"))};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(){var e=b(["\n  position: relative;\n"]);return m=function(){return e},e}function g(){var e=b(["\n  color: red;\n  position: absolute;\n  bottom: -25px;\n  left: 10px;\n"]);return g=function(){return e},e}function h(){var e=b(["\n  padding: 10px;\n  font-size: 1.2em;\n  font-weight: bold;\n  outline: none;\n  border: ",";\n  border-radius: 5px;\n  width: 100%;\n  box-sizing: border-box;\n"]);return h=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v=l.ZP.input(h(),(function(e){return e.hasError?"2px solid red":"1px solid grey"})),y=l.ZP.span(g()),P=l.ZP.div(m()),E=function(e){var t=e.input,n=e.meta,r=e.title,a=e.field,c=n.error&&n.touched;return i.createElement(P,null,i.createElement(v,d({},t,{placeholder:"".concat(r," ").concat(a),hasError:c})),i.createElement(y,null,n.touched&&n.error))};function O(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  outline: none;\n  border-radius: 5px;\n  background-color: ",";\n  color: white;\n  font-size: 1.2em;\n  padding: 10px;\n  font-weight: bold;\n  flex: 1;\n  margin: 0 5px;\n  cursor: pointer;\n"]);return O=function(){return e},e}var j=l.ZP.button(O(),(function(e){return e.green?"#7ef297":"#f2997e"})),F=n(8078),w=n.n(F),x=n(5305);function I(){var e=T(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]);return I=function(){return e},e}function S(){var e=T(["\n  display: flex;\n  flex-direction: column;\n  height: ","px;\n  min-width: 50%;\n  justify-content: space-around;\n  padding: 10px 20%;\n  h1 {\n    margin: 0;\n  }\n"]);return S=function(){return e},e}function T(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var A=l.ZP.form(S(),(function(e){return 120*e.rows})),z=l.ZP.div(I()),k=i.memo((function(e){var t=e.addFunc,n=e.title,r=e.fields,a=r.map((function(e){return i.createElement(x.gN,{key:e,name:e,render:function(t){var r=t.input,a=t.meta;return i.createElement(E,{input:r,meta:a,title:n,field:e})}})}));return i.createElement(x.l0,{onSubmit:t,validate:function(e){var t={};return e.diameter&&isNaN(Number(e.diameter))&&(t.diameter="Should be number"),Object.keys(e).forEach((function(n){e[n].length<3&&(t[n]="Should be at least 3 symbols")})),t},render:function(e){var t=e.handleSubmit,c=e.pristine,o=e.form;return i.createElement(A,{onSubmit:t,rows:r.length},i.createElement("h1",null,"Add ",n,":"),a,i.createElement(z,null,i.createElement(j,{type:"submit",disabled:c,green:!0},"Add"),i.createElement(j,{disabled:c,onClick:o.reset},"Reset")))}})}));k.propTypes={addFunc:w().func.isRequired,title:w().string.isRequired,fields:w().arrayOf(w().string).isRequired};var N=k,R=n.p+"images/Preloader.1aaab8994705db58f2f4fbec807875be.gif";function C(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  height: ","px;\n  margin: auto;\n"]);return C=function(){return e},e}var L=l.ZP.img(C(),(function(e){return e.height})),M=function(e){return i.createElement(L,{src:R,alt:"preloader",height:e.height})};M.defaultProps={height:40};var _=M,D=n(216);function q(e,t,n,r,i,a,c){try{var o=e[a](c),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,i)}function Z(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){q(a,r,i,c,o,"next",e)}function o(e){q(a,r,i,c,o,"throw",e)}c(void 0)}))}}var H=D.create({baseURL:"https://swapi.dev/api/"}),G=function(){var e=Z(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",H.get("films").then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Z(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",D.get(t).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Z(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",H.get("planets/?page="+t).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Z(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",D.get(t).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function W(e,t,n,r,i,a,c){try{var o=e[a](c),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,i)}function $(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){W(a,r,i,c,o,"next",e)}function o(e){W(a,r,i,c,o,"throw",e)}c(void 0)}))}}var Y=function(e,t,n){return function(r){return function(){var i=$(regeneratorRuntime.mark((function i(a){var c;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a(n(!0)),i.next=3,e(r);case 3:c=i.sent,a(t(c.results.map((function(e){return e.title?{title:e.title,url:e.url}:{name:e.name,url:e.url}})),c.count)),a(n(!1));case 6:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}()}},J=function(e,t,n){return function(r,i){return function(){var a=$(regeneratorRuntime.mark((function a(c){var o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(n(r)),a.next=3,e(i);case 3:o=a.sent,c(t(o)),c(n(r));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}};function K(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne={films:[],isFetchingFilms:!1,isFetchingFilmsInfo:[]},re="FILMS/SET_IS_FETCHING",ie="FILMS/TOGGLE_FETCHING_FILM_INFO",ae="FILMS/SET_FILMS",ce="FILMS/DELETE_FILM",oe="FILMS/ADD_FILM",ue="FILMS/ADD_INFO",le=Y(G,(function(e,t){return{type:ae,films:e,count:t}}),(function(e){return{type:re,payload:{isFetchingFilms:e}}})),se=J(U,(function(e){return{type:ue,film:e}}),(function(e){return{type:ie,title:e}}));function fe(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  height: ","px;\n  cursor: pointer;\n"]);return fe=function(){return e},e}var pe=l.ZP.div(fe(),(function(e){return e.height}));pe.defaultProps={height:25};var de=function(e){return i.createElement(pe,{onClick:e.delete},i.createElement("svg",{height:"100%",viewBox:"-40 0 427 427.001",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M232.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0M114.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0"}),i.createElement("path",{d:"M28.398 127.121V373.5c0 14.563 5.34 28.238 14.668 38.05A49.246 49.246 0 0078.796 427H268a49.233 49.233 0 0035.73-15.45c9.329-9.812 14.668-23.487 14.668-38.05V127.121c18.543-4.922 30.559-22.836 28.079-41.863-2.485-19.024-18.692-33.254-37.88-33.258h-51.199V39.5a39.289 39.289 0 00-11.539-28.031A39.288 39.288 0 00217.797 0H129a39.288 39.288 0 00-28.063 11.469A39.289 39.289 0 0089.398 39.5V52H38.2C19.012 52.004 2.805 66.234.32 85.258c-2.48 19.027 9.535 36.941 28.078 41.863zM268 407H78.797c-17.098 0-30.399-14.688-30.399-33.5V128h250v245.5c0 18.813-13.3 33.5-30.398 33.5zM109.398 39.5a19.25 19.25 0 015.676-13.895A19.26 19.26 0 01129 20h88.797a19.26 19.26 0 0113.926 5.605 19.244 19.244 0 015.675 13.895V52h-128zM38.2 72h270.399c9.941 0 18 8.059 18 18s-8.059 18-18 18H38.199c-9.941 0-18-8.059-18-18s8.059-18 18-18zm0 0"}),i.createElement("path",{d:"M173.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0"})))};function me(){var e=be(["\n  display: flex;\n  flex-grow: 3;\n  flex-direction: column;\n  height: 80%;\n  margin-left: 10px;\n  h2 {\n    margin: 5px;\n  }\n  p {\n    margin: 3px;\n  }\n  align-self: flex-start;\n"]);return me=function(){return e},e}function ge(){var e=be(["\n  width: 30%;\n"]);return ge=function(){return e},e}function he(){var e=be(["\n  margin: 15px;\n  border-bottom: 1px solid grey;\n  display: flex;\n  justify-content: stretch;\n  align-items: center;\n  padding: 10px;\n"]);return he=function(){return e},e}function be(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var ve=l.ZP.div(he()),ye=l.ZP.img(ge()),Pe=l.ZP.div(me()),Ee=i.memo((function(e){var t,n,r=e.image,a=e.title,c=e.url,o=e.description,u=e.deleteFunc,l=e.isFetchingItemsInfo,s=e.getInfo;t=s,n=!!c,(0,i.useEffect)((function(){n&&t(a,c)}),[]);var f=l.includes(a),p=Object.keys(o).map((function(e){return i.createElement("p",{key:e},e[0].toUpperCase()+e.slice(1),":"," ",f?i.createElement(_,{height:"15"}):o[e])}));return i.createElement(ve,null,i.createElement(ye,{src:r}),i.createElement(Pe,null,i.createElement("h2",null,a),p),i.createElement(de,{delete:function(){u(a)}}))}));Ee.propTypes={image:w().string,title:w().string.isRequired,url:w().string.isRequired,description:w().object.isRequired,deleteFunc:w().func,isFetchingItemsInfo:w().arrayOf(w().string),getInfo:w().func};var Oe=Ee,je=n.p+"images/1.8d768f31a9502e5744f58ab8ec226a41.jpg",Fe=n.p+"images/2.2175e2585cc53ac80acce2fc3dba9417.jpg",we=n.p+"images/3.d82d401352527974fcc58d9229671b35.jpg",xe=n.p+"images/4.7bcf3f6db48da0752b5e8971114c2570.jpg",Ie=n.p+"images/5.be309f7e7242b7b9dc2f5c557d5cdf9e.jpg",Se=n.p+"images/6.65b4b49d7f2427a5b66436fdbb400128.jpg",Te=n.p+"images/noimg.5b2a69f1939d0824b4f33fa44145cae8.jpg",Ae={"The Phantom Menace":je,"Attack of the Clones":Fe,"Revenge of the Sith":we,"A New Hope":xe,"The Empire Strikes Back":Ie,"Return of the Jedi":Se,noImage:Te},ze=function(e){var t=e.films,n=e.getFilms,r=e.isFetchingFilms,a=e.deleteFilm,c=e.addFilm,o=e.getFilmInfo,u=e.isFetchingFilmsInfo;(0,i.useEffect)((function(){n()}),[]);var l=t.map((function(e){return i.createElement(Oe,{image:Ae[e.title]||Ae.noImage,key:e.title,title:e.title,description:{director:e.director,producer:e.producer,date:e.edited&&new Date(e.edited).toDateString()},url:e.url||null,deleteFunc:a,getInfo:o,isFetchingItemsInfo:u})}));return i.createElement(f,null,r?i.createElement(_,null):i.createElement(i.Fragment,null,t.length>0?i.createElement("h1",null,"Films:"):null,l,i.createElement(N,{addFunc:c,title:"film",fields:["title","director","producer"]})))};ze.propTypes={films:w().arrayOf(w().shape({title:w().string.isRequired,url:w().string,director:w().string,producer:w().string})),isFetchingFilms:w().bool.isRequired,isFetchingFilmsInfo:w().arrayOf(w().string),getFilms:w().func,deleteFilm:w().func,addFilm:w().func,getFilmInfo:w().func};var ke=(0,a.$j)((function(e){return{films:e.filmsPage.films,isFetchingFilms:e.filmsPage.isFetchingFilms,isFetchingFilmsInfo:e.filmsPage.isFetchingFilmsInfo}}),{getFilms:le,deleteFilm:function(e){return{type:ce,title:e}},addFilm:function(e){return{type:oe,film:e}},getFilmInfo:se})(ze);function Ne(e){return function(e){if(Array.isArray(e))return Re(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Re(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){Me(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _e={pageSize:10,planetsTotalCount:null,planets:[],isFetchingPlanets:!1,isFetchingPlanetsInfo:[]},De="PLANETS/SET_IS_FETCHING",qe="PLANETS/TOGGLE_FETCHING_PLANET_INFO",Ze="PLANETS/SET_PLANETS",He="PLANETS/DELETE_PLANET",Ge="PLANETS/ADD_PLANET",Ue="PLANETS/ADD_INFO",Ve=Y(V,(function(e,t){return{type:Ze,planets:e,count:t}}),(function(e){return{type:De,payload:{isFetchingPlanets:e}}})),Be=J(B,(function(e){return{type:Ue,planet:e}}),(function(e){return{type:qe,planetId:e}})),We={Tatooine:n.p+"images/1.4cf5ddf6f7a5a54144587a14727078ee.jpg",Alderaan:n.p+"images/2.ca44aefd9d9f82129d893b2cd6201370.jpg","Yavin IV":n.p+"images/3.f6094b3c0ecd9fd7b327b0f56aec07d9.jpg",Hoth:n.p+"images/4.c294e1c01145a012750137a703f7b710.jpg",Dagobah:n.p+"images/5.1dc5412e2fdfc91c26da802c68a4d474.jpg",Bespin:n.p+"images/6.74036421ad7895e45ade71b9aad598a4.jpg",Endor:n.p+"images/7.875bd92780df53586062c290ad80c516.jpg",Naboo:n.p+"images/8.8f9630e8ff1dd8fb432f3070225c2acd.jpg",Coruscant:n.p+"images/9.9794c5ccf06f8df0ae4f052b886a5fb2.jpg",Kamino:n.p+"images/10.10d3f9033ba81da7f10b6fb873669fcb.jpeg",noImage:Te};function $e(){var e=Je(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n"]);return $e=function(){return e},e}function Ye(){var e=Je(["\n  padding: 5px;\n  width: 18px;\n  text-align: center;\n  margin: 0 10px;\n  font-weight: bold;\n  background-color: #5da4f5;\n  color: white;\n  cursor: pointer;\n  border-radius: 2px;\n  &.selectedPage {\n    color: #dbd75e;\n  }\n"]);return Ye=function(){return e},e}function Je(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Ke=l.ZP.div(Ye()),Qe=l.ZP.div($e()),Xe=i.memo((function(e){for(var t=e.totalCount,n=e.pageSize,r=e.currentPage,a=e.onPageSelect,c=Math.ceil(t/n),o=Math.ceil(c/3),u=Math.ceil(r/3),l=3*u,s=[],f=function(e){s.push(i.createElement(Ke,{className:e===r&&"selectedPage",key:e,onClick:function(){a(e)}},e))},p=3*(u-1)+1;p<=l;p++)f(p);return i.createElement(Qe,null,u>1&&i.createElement(Ke,{onClick:function(){a(3*(u-1))}},"←"),s,u<o&&i.createElement(Ke,{onClick:function(){a(3*u+1)}},"→"))}));Xe.propTypes={totalCount:w().number.isRequired,pageSize:w().number.isRequired,currentPage:w().number.isRequired,onPageSelect:w().func.isRequired};var et=Xe,tt=n(2542),nt=n.n(tt);function rt(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var it=function(e){var t,n=e.planets,r=e.getPlanets,a=e.isFetchingPlanets,c=e.deletePlanet,o=e.addPlanet,u=e.planetsTotalCount,l=e.pageSize,s=e.getPlanetInfo,p=e.isFetchingPlanetsInfo,d=rt(e,["planets","getPlanets","isFetchingPlanets","deletePlanet","addPlanet","planetsTotalCount","pageSize","getPlanetInfo","isFetchingPlanetsInfo"]),m=null===(t=nt().parse(d.location.search,{ignoreQueryPrefix:!0}).page)||void 0===t?void 0:t.toString();m||d.history.push("/planets?page=1"),(0,i.useEffect)((function(){r(m)}),[d.location.search]);var g=n.map((function(e){return i.createElement(Oe,{image:We[e.name]||We.noImage,key:e.name,title:e.name,description:{diameter:e.diameter,climate:e.climate,gravity:e.gravity},url:e.url||null,deleteFunc:c,getInfo:s,isFetchingItemsInfo:p})}));return i.createElement(f,null,a?i.createElement(_,null):i.createElement(i.Fragment,null,n.length>0?i.createElement("h1",null,"Planets:"):null,g,u>l&&i.createElement(et,{currentPage:Number(m),totalCount:u,pageSize:l,onPageSelect:function(e){d.history.push("/planets?page="+e)}}),i.createElement(N,{addFunc:o,title:"planet",fields:["title","diameter","climate","gravity"]})))};it.propTypes={planets:w().arrayOf(w().shape({name:w().string.isRequired,url:w().string,diameter:w().string,climate:w().string,gravity:w().string})),planetsTotalCount:w().number,pageSize:w().number.isRequired,isFetchingPlanets:w().bool.isRequired,isFetchingPlanetsInfo:w().arrayOf(w().string),getPlanets:w().func,deletePlanet:w().func,addPlanet:w().func,getPlanetInfo:w().func};var at=(0,a.$j)((function(e){return{planets:e.planetsPage.planets,planetsTotalCount:e.planetsPage.planetsTotalCount,pageSize:e.planetsPage.pageSize,isFetchingPlanets:e.planetsPage.isFetchingPlanets,isFetchingPlanetsInfo:e.planetsPage.isFetchingPlanetsInfo}}),{getPlanets:Ve,deletePlanet:function(e){return{type:He,name:e}},addPlanet:function(e){return{type:Ge,planet:e}},getPlanetInfo:Be})(it),ct=function(){return i.createElement("div",{className:"main"},i.createElement(u.rs,null,i.createElement(u.AW,{exact:!0,path:"/",render:function(){return i.createElement(u.l_,{to:"/films"})}}),i.createElement(u.AW,{path:"/films",component:ke}),i.createElement(u.AW,{path:"/characters",component:p}),i.createElement(u.AW,{path:"/planets",component:at}),i.createElement(u.l_,{to:"/"})))},ot=n(4752),ut=n(8817),lt=(0,ot.UY)({filmsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return ee(ee({},e),t.payload);case ae:return ee(ee({},e),{},{films:t.films});case ie:var n=e.isFetchingFilmsInfo;return ee(ee({},e),{},{isFetchingFilmsInfo:n.includes(t.title)?n.filter((function(e){return e!==t.title})):n.concat(t.title)});case ce:return ee(ee({},e),{},{films:e.films.filter((function(e){return e.title!==t.title}))});case oe:return ee(ee({},e),{},{films:[].concat(K(e.films),[t.film])});case ue:return ee(ee({},e),{},{films:e.films.map((function(e){return e.title===t.film.title?t.film:e}))});default:return e}},planetsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case De:return Le(Le({},e),t.payload);case Ze:return Le(Le({},e),{},{planets:t.planets,planetsTotalCount:t.count});case qe:var n=e.isFetchingPlanetsInfo;return Le(Le({},e),{},{isFetchingPlanetsInfo:n.includes(t.planetId)?n.filter((function(e){return e!==t.planetId})):n.concat(t.planetId)});case He:return Le(Le({},e),{},{planets:e.planets.filter((function(e){return e.name!==t.name}))});case Ge:return Le(Le({},e),{},{planets:[].concat(Ne(e.planets),[t.planet])});case Ue:return Le(Le({},e),{},{planets:e.planets.map((function(e){return e.name===t.planet.name?t.planet:e}))});default:return e}}}),st=(0,ot.MT)(lt,(0,ot.md)(ut.Z)),ft=function(){return i.createElement(c.UT,null,i.createElement(a.zt,{store:st},i.createElement("div",{className:"layout"},i.createElement(o,null),i.createElement(ct,null))))};(0,r.render)(i.createElement(ft,null),document.getElementById("root"))}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.m=e,n.x=function(){},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.p="",function(){var e={179:0},t=[[111,761],[5081,761]],r=function(){},i=function(i,a){for(var c,o,u=a[0],l=a[1],s=a[2],f=a[3],p=0,d=[];p<u.length;p++)o=u[p],n.o(e,o)&&e[o]&&d.push(e[o][0]),e[o]=0;for(c in l)n.o(l,c)&&(n.m[c]=l[c]);for(s&&s(n),i&&i(a);d.length;)d.shift()();return f&&t.push.apply(t,f),r()},a=self.webpackChunk=self.webpackChunk||[];function c(){for(var r,i=0;i<t.length;i++){for(var a=t[i],c=!0,o=1;o<a.length;o++){var u=a[o];0!==e[u]&&(c=!1)}c&&(t.splice(i--,1),r=n(n.s=a[0]))}return 0===t.length&&(n.x(),n.x=function(){}),r}a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a));var o=n.x;n.x=function(){return n.x=o||function(){},(r=c)()}}(),n.x()}();