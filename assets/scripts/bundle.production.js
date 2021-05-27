(()=>{"use strict";const e=(e,t,n)=>e.animate(t,n),t=(e,t)=>Object.freeze({transform:"translateY("+e+"px)",opacity:t}),n=e=>Object.freeze({transform:"translateX("+e+")"}),r=document.getElementById("btn-nav"),o=document.getElementById("navigation"),i={duration:1e3,fill:"forwards"},a=[n("-100%"),n("100%")],s=[n("100%"),n("-100%")];let l=!0;r.addEventListener("click",(()=>{l?(r.setAttribute("disabled",!0),e(o,a,i).finished.then((()=>{l=!1,r.removeAttribute("disabled")}))):(r.setAttribute("disabled",!0),e(o,s,i).finished.then((()=>{l=!0,r.removeAttribute("disabled")})))}));const c=e=>document.getElementById(e).content.firstElementChild.cloneNode(!0),d=document.getElementById("contact-form"),u={name:{required:!0,maxLength:50},lastname:{required:!0,maxLength:50},email:{required:!0,email:!0},phone:{phone:!0}};d.addEventListener("submit",(e=>{e.preventDefault();const t=[],n=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,r=e.target.querySelectorAll("input");if(r.forEach(((e,r)=>{e.classList.contains("input-error")&&e.classList.toggle("input-error");const o=e.value.trim().replace(/[.*+?^${}()|[\]\\]/g,""),i=e.name,a=`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()}`,s=u[i];s.required&&""===o?t.push({field:i,errorMessage:`${a} is required`}):!s.email||o.match(n)?s.phone&&o.length>0&&(10!==o.length||"number"!=typeof o)&&t.push({field:i,errorMessage:"Invalid phone"}):t.push({field:i,errorMessage:"Invalid email"})})),t.length>0)return void t.forEach((e=>{const t=document.getElementById(e.field);t.classList.contains("input-error")||t.classList.toggle("input-error")}));const o=c("template-modal"),i=document.getElementById("name").value;o.querySelector("span").innerText=`Thanks ${i||""}! We appreciate your preference. \n As soon as possible we get in contact to you! \nKeep yourself feet!`,document.getElementById("modal")||(document.querySelector("body").prepend(o),o.querySelector(".modal-badge").animate([{transform:"translateY(-100%)"},{transform:"translateY(0)"}],{duration:1e3,fill:"forwards",easing:"ease-in"}));const a=document.getElementById("modal-button"),s=e=>{const t=document.getElementById("modal");o.querySelector(".modal-badge").animate([{transform:"translateY(0)"},{transform:"translateY(-100%)"}],{duration:1e3,fill:"forwards",easing:"ease-out"}).finished.then((()=>{t&&t.remove(),a.removeEventListener("click",s)}))};a.addEventListener("click",s),r.forEach((e=>{e.value=""}))}));const m=document.getElementById("instructor-container");let g={};const p=localStorage.getItem("instructors_gym");p&&0!==p.length?g=JSON.parse(p):(g=[{id:0,name:"Instructor 1",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere diam vel augue cursus dapibus. Curabitur non est nibh. Donec euismod justo id velit ornare fermentum. Vivamus in dolor lorem. ",imageURL:"https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"},{id:1,name:"Instructor 2",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere diam vel augue cursus dapibus. Curabitur non est nibh. Donec euismod justo id velit ornare fermentum. Vivamus in dolor lorem. ",imageURL:"https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"}],localStorage.setItem("instructors_gym",JSON.stringify(g))),g.forEach((e=>{const t=(({id:e,name:t,imageURL:n,info:r})=>{const o=c("template-instructor"),i=o.querySelector(".instructor__image--photo"),a=o.querySelector(".instructor__name");return o.querySelector(".instructor__bio"),o.id=`instructor-${e}`,i.setAttribute("src",n),i.setAttribute("alt",t),i.setAttribute("id",`instructor-image-${e}`),a.innerText=t,o})(e);t.querySelector(`#instructor-image-${e.id}`).addEventListener("click",(t=>{const n=t.target.parentNode.parentNode,r=t.target.id.split("-")[2],o=n.querySelector(".closeInfo"),i=(e=>{const t=c("template-instructor-info");return t.innerText=e,t})(JSON.parse(localStorage.getItem("instructors_gym"))[+r].info);new Promise(((e,t)=>{n.querySelector(".instructor__bio").append(i),e(i)})).then((()=>n.querySelector(`#instructor-image-${e.id}`).animate([{opacity:1},{opacity:.1}],{duration:500,fill:"forwards",easing:"ease-out"}))).then((()=>i.animate([{transform:"translateY(-100%)"},{transform:"translateY(0)"}],{duration:1e3,easing:"ease-out"}))).then((()=>{o.removeAttribute("hidden")}))})),t.querySelector(".closeInfo").addEventListener("click",(t=>{const n=t.target.parentNode,r=t.target.parentNode.parentNode;r.querySelector(".instructor__bio--info").animate([{transform:"translateY(0)",opacity:.9},{transform:"translateY(-100%)",opacity:0}],{duration:1e3}).finished.then((()=>(r.querySelector(".instructor__bio--info").remove(),!0))).then((()=>r.querySelector(`#instructor-image-${e.id}`).animate([{opacity:.1},{opacity:1}],{duration:500,fill:"forwards"}))).then((()=>{n.setAttribute("hidden",!0)}))})),m.append(t)}));const f=document.getElementById("link-list");f.querySelectorAll(".link"),f.addEventListener("click",(e=>{const t=e.originalTarget;if(t.classList.contains("link")){const n=t.innerText.toLowerCase().replace(" ","-");window.location.hash=n,console.log(window.location.hash),e.preventDefault(),r.click()}}));const h=document.getElementById("display-information");let y=0;const b=["DON'T BE STRESSED","DON'T BE SCARED","DO YOU HAVE A GOAL?","LET'S DO IT TOGETHER!"],E=[t(-50,0),t(-25,.5),t(0,1),t(0,1)],v=[t(0,1),t(-25,.5),t(-50,0)];setInterval((()=>{h.innerText=b[y],e(h,E,{duration:3e3,delay:0}).finished.then((()=>e(h,v,{duration:2500,delay:1e3}))),y===b.length-1?y=0:y++}),6500)})();
//# sourceMappingURL=bundle.production.js.map