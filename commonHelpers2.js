import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let e={email:"",message:""};const r=document.querySelector(".feedback-form"),t=document.querySelector(".email"),a=document.querySelector(".message"),o=localStorage.getItem("feedback-form-state");o!==null&&(e=JSON.parse(o),console.log(e),t.value=e.email||"",a.value=e.message||"");function s(){localStorage.removeItem("feedback-form-state"),r.reset(),e={email:"",message:""}}r.addEventListener("submit",m=>{if(m.preventDefault(),t&&a&&t.value.trim()!==""&&a.value.trim()!==""){for(const l of r.elements)(l.tagName==="INPUT"||l.tagName==="TEXTAREA"&&l.name)&&(e[l.name]=l.value.trim());console.log(e),s()}else alert("All form fields must be filled in")});r.addEventListener("input",m=>{m.preventDefault(),m.target===t&&t.value.trim()!==""?(e.email=t.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))):m.target===a&&a.value.trim()!==""&&(e.message=a.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e)))});
//# sourceMappingURL=commonHelpers2.js.map
