!function(){function e(e){var r=localStorage.getItem(e);try{return JSON.parse(r)}catch(e){return console.log(e),r}}var r={formElem:document.querySelector(".js-form")};r.formElem.addEventListener("input",(function(e){var t={};new FormData(r.formElem).forEach((function(e,r){t[r]=e})),a="userData",o=t,localStorage.setItem(a,JSON.stringify(o));var a,o})),r.formElem.addEventListener("submit",(function(r){r.preventDefault();var t=e("userData");localStorage.removeItem("userData"),r.target.reset(),console.log(t)})),function(){var t=e("userData")||{},a=!0,o=!1,n=void 0;try{for(var l,u=Object.keys(t)[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var m=l.value;r.formElem.elements[m].value=t[m]}}catch(e){o=!0,n=e}finally{try{a||null==u.return||u.return()}finally{if(o)throw n}}}()}();
//# sourceMappingURL=03-feedback.020602ac.js.map
