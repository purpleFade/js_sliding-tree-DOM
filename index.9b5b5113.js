document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");t.textContent=e.childNodes[0].nodeValue.trim(),e.childNodes[0].nodeValue="",e.insertBefore(t,e.childNodes[0]),e.addEventListener("click",function(t){t.stopPropagation();var n=e.querySelector("ul");n&&(n.style.display="none"===n.style.display?"block":"none")})});//# sourceMappingURL=index.9b5b5113.js.map

//# sourceMappingURL=index.9b5b5113.js.map
