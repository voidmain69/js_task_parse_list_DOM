function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function r(t){var r=t.getAttribute("data-salary");return r?parseFloat(r.replace(/[$,]/g,"")):0}var e=document.querySelectorAll("li[data-salary]");if(e.length>0){var n,a=((function(r){if(Array.isArray(r))return t(r)})(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort(function(t,e){return r(e)-r(t)}),o=e[0].parentElement;n=document.createDocumentFragment(),a.forEach(function(t){n.appendChild(t)}),o.innerHTML="",o.appendChild(n),a.map(function(t){return{name:t.innerText,position:t.getAttribute("data-position")||"",salary:r(t),age:+t.getAttribute("data-age")||0}})}
//# sourceMappingURL=index.dfdd457c.js.map
