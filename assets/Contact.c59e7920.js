import{d,Q as l}from"./QBtn.dab8dde4.js";import{Q as _}from"./QPage.a6509828.js";import{k as h,_ as m,r as g,F as v,G as b,I as p,M as e,J as i,N as r,L as w,W as y,X as x}from"./index.a0b7bf51.js";import"./QSpinner.7276d598.js";import"./render.91f2700a.js";const a=[];function f(t){a[a.length-1](t)}function C(t){h.is.desktop===!0&&(a.push(t),a.length===1&&document.body.addEventListener("focusin",f))}function S(t){const o=a.indexOf(t);o>-1&&(a.splice(o,1),a.length===0&&document.body.removeEventListener("focusin",f))}function k(t){const o=document.createElement("textarea");o.value=t,o.contentEditable="true",o.style.position="fixed";const c=()=>{};C(c),document.body.appendChild(o),o.focus(),o.select();const n=document.execCommand("copy");return o.remove(),S(c),n}function X(t){return navigator.clipboard!==void 0?navigator.clipboard.writeText(t):new Promise((o,c)=>{const n=k(t);n?o(!0):c(n)})}const s=t=>(y("data-v-6f7cf4cb"),t=t(),x(),t),I=s(()=>e("h4",null,"Contact",-1)),N=s(()=>e("h6",null,"GSLR Agencements",-1)),E={class:"address q-gutter-md column"},q={style:{display:"inline-block","white-space":"nowrap"}},A={class:"q-pa-xs q-gutter-sm"},L={style:{display:"inline-block","white-space":"nowrap"}},Q=s(()=>e("a",{href:"tel:+41"},"+41\u202FXXXXXXXXX",-1)),B={style:{display:"inline-block","white-space":"nowrap"}},F=s(()=>e("a",{href:"mailto:info@desfees.fr"},"contact@gslr.ch",-1)),V=s(()=>e("h6",null,"Horaires d\u2019ouverture :",-1)),D=s(()=>e("p",null,"Du lundi au vendredi",-1)),G=s(()=>e("p",null,"De 7h30 \xE0 12h00 et de 13h15 \xE0 17h30",-1)),P=s(()=>e("h4",{class:"q-py-lg text-uppercase text-weight-light"},"Carte",-1)),T=s(()=>e("div",{class:"map-container"},[e("iframe",{class:"responsive-iframe",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43544.58800501132!2d6.907282905737782!3d46.990432859422086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e09ee39924c6d%3A0x9c3e1f46415c66f3!2s2000%20Neuch%C3%A2tel%2C%20Suisse!5e0!3m2!1sfr!2sfr!4v1683550315281!5m2!1sfr!2sfr",width:"100%",height:"70%",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1)),H={__name:"Contact",setup(t){let o=g(!1);function c(n){X(n).then(()=>{console.log("copi\xE9 !"),o.value=!0}).catch(()=>{console.log("fail !")})}return(n,u)=>(v(),b(_,{class:"wrapper q-pa-md"},{default:p(()=>[I,N,e("address",E,[e("div",q,[i(d,{name:"location_city"}),r(" 2000 Neuch\xE2tel, SUISSE "),e("div",A,[i(l,{rounded:"",unelevated:"",class:"bg-brand text-white",icon:w(o)?"assignment_turned_in":"content_copy",onClick:u[0]||(u[0]=M=>c("2000 Neuch\xE2tel, SUISSE"))},{default:p(()=>[r("\u202FCopier")]),_:1},8,["icon"]),i(l,{rounded:"",unelevated:"",class:"bg-brand text-white",icon:"directions",href:"https://goo.gl/maps/LDFn9N6ciP9rVptH7",target:"_blank"},{default:p(()=>[r("\u202FGoogle Maps")]),_:1})])]),e("div",L,[i(d,{name:"phone"}),r("\u202F "),Q,e("div",null,[i(l,{rounded:"",unelevated:"",label:"Appeler",class:"bg-brand text-white",href:"tel:+41",icon:"call"})])]),e("div",B,[i(d,{name:"email"}),r(" \u202F "),F])]),V,D,G,P,T]),_:1}))}};var W=m(H,[["__scopeId","data-v-6f7cf4cb"]]);export{W as default};
