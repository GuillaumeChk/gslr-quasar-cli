import{Q as i,d}from"./QBtn.0b76b355.js";import{Q as _}from"./QPage.7544a06e.js";import{x as h,a0 as m,r as g,K as v,L as b,M as u,U as e,N as r,Y as l,O as x,a1 as w,a2 as y}from"./index.aca35714.js";import"./QSpinner.cbd0ab65.js";import"./render.488f76ca.js";const a=[];function p(t){a[a.length-1](t)}function C(t){h.is.desktop===!0&&(a.push(t),a.length===1&&document.body.addEventListener("focusin",p))}function S(t){const o=a.indexOf(t);o>-1&&(a.splice(o,1),a.length===0&&document.body.removeEventListener("focusin",p))}function X(t){const o=document.createElement("textarea");o.value=t,o.contentEditable="true",o.style.position="fixed";const c=()=>{};C(c),document.body.appendChild(o),o.focus(),o.select();const s=document.execCommand("copy");return o.remove(),S(c),s}function N(t){return navigator.clipboard!==void 0?navigator.clipboard.writeText(t):new Promise((o,c)=>{const s=X(t);s?o(!0):c(s)})}const n=t=>(w("data-v-2c7fe5f1"),t=t(),y(),t),E=n(()=>e("h4",null,"Contact",-1)),I=n(()=>e("h6",null,"GSLR Agencements",-1)),k={class:"address"},A=n(()=>e("br",null,null,-1)),L={class:"q-pa-xs q-gutter-sm"},Q=n(()=>e("a",{href:"mailto:info@desfees.fr"},"contact@gslr.ch",-1)),B=n(()=>e("br",null,null,-1)),T=n(()=>e("a",{href:"tel:+41"},"+41\u202FXXXXXXXXX",-1)),V=n(()=>e("br",null,null,-1)),q=n(()=>e("h6",null,"Horaires d\u2019ouverture :",-1)),D=n(()=>e("p",null,"Du lundi au vendredi",-1)),F=n(()=>e("p",null,"De 7h30 \xE0 12h00 et de 13h15 \xE0 17h30",-1)),M=n(()=>e("h4",{class:"q-py-lg text-uppercase text-weight-light"},"Carte",-1)),P=n(()=>e("div",{class:"map-container"},[e("iframe",{class:"responsive-iframe",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43544.58800501132!2d6.907282905737782!3d46.990432859422086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e09ee39924c6d%3A0x9c3e1f46415c66f3!2s2000%20Neuch%C3%A2tel%2C%20Suisse!5e0!3m2!1sfr!2sfr!4v1683550315281!5m2!1sfr!2sfr",width:"100%",height:"70%",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1)),U={__name:"Contact",setup(t){let o=g(!1);function c(s){N(s).then(()=>{console.log("copi\xE9 !"),o.value=!0}).catch(()=>{console.log("fail !")})}return(s,f)=>(v(),b(_,null,{default:u(()=>[E,I,e("p",null,[e("address",k,[r(i,{name:"location_city"}),l(" 2000 Neuch\xE2tel, SUISSE "),A,e("div",L,[r(d,{rounded:"",unelevated:"",class:"bg-brand text-white",icon:x(o)?"assignment_turned_in":"content_copy",onClick:f[0]||(f[0]=G=>c("2000 Neuch\xE2tel, SUISSE"))},{default:u(()=>[l("\u202FCopier")]),_:1},8,["icon"]),r(d,{rounded:"",unelevated:"",class:"bg-brand text-white",icon:"directions",href:"https://goo.gl/maps/LDFn9N6ciP9rVptH7",target:"_blank"},{default:u(()=>[l("\u202FGoogle Maps")]),_:1})]),r(i,{name:"email"}),l("\u202FE-Mail : "),Q,B,r(i,{name:"phone"}),l("\u202FT\xE9l\xE9phone : "),T,V,r(d,{rounded:"",unelevated:"",label:"Appeler",class:"bg-brand text-white",href:"tel:+41",icon:"call"})])]),q,D,F,M,P]),_:1}))}};var Y=m(U,[["__scopeId","data-v-2c7fe5f1"]]);export{Y as default};