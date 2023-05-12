import{u as kt,a as Tt,v as Et,c as Ae,g as Bt,b as zt,Q as ye,d as oe}from"./QBtn.dab8dde4.js";import{Q as We}from"./QImg.35cebf30.js";import{c as V,h as K,a as at,b as $t,d as Ie,e as Pt}from"./render.91f2700a.js";import{c as v,h as _,r as L,i as rt,o as U,a as N,n as ze,b as Y,g as H,l as O,e as D,w as x,d as $e,f as ue,j as Mt,s as Pe,H as Fe,k as M,m as Vt,p as Ot,P as Ht,q as Rt,t as le,u as be,v as Ne,x as ge,y as Ee,z as we,A as Dt,B as st,C as Qt,D as ie,E as At,_ as Wt,F as qe,G as Xe,I as $,J as k,K as je,L as Ue,M as P,N as xe,O as It,Q as Ft,R as Nt,S as Xt,T as jt,U as Ut,V as Yt,W as Kt,X as Gt}from"./index.a0b7bf51.js";import"./QSpinner.7276d598.js";var Jt=V({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:o.value,role:"toolbar"},K(n.default))}});function Zt(){const e=L(!rt.value);return e.value===!1&&U(()=>{e.value=!0}),e}const ut=typeof ResizeObserver!="undefined",Ye=ut===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Be=V({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let o=null,i,t={width:-1,height:-1};function l(d){d===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(o!==null&&(clearTimeout(o),o=null),i){const{offsetWidth:d,offsetHeight:c}=i;(d!==t.width||c!==t.height)&&(t={width:d,height:c},n("resize",t))}}const{proxy:f}=H();if(ut===!0){let d;const c=a=>{i=f.$el.parentNode,i?(d=new ResizeObserver(l),d.observe(i),u()):a!==!0&&Y(()=>{c(!0)})};return U(()=>{c()}),N(()=>{o!==null&&clearTimeout(o),d!==void 0&&(d.disconnect!==void 0?d.disconnect():i&&d.unobserve(i))}),ze}else{let a=function(){o!==null&&(clearTimeout(o),o=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",l,O.passive),c=void 0)},w=function(){a(),i&&i.contentDocument&&(c=i.contentDocument.defaultView,c.addEventListener("resize",l,O.passive),u())};const d=Zt();let c;return U(()=>{Y(()=>{i=f.$el,i&&w()})}),N(a),f.trigger=l,()=>{if(d.value===!0)return _("object",{style:Ye.style,tabindex:-1,type:"text/html",data:Ye.url,"aria-hidden":"true",onLoad:w})}}}}),en=V({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=H(),t=$e(ue,D);if(t===D)return console.error("QHeader needs to be child of QLayout"),D;const l=L(parseInt(e.heightHint,10)),u=L(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return u.value===!0?l.value:0;const s=l.value-t.scroll.value.position;return s>0?s:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&u.value!==!0),a=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const s=t.rows.value.top,p={};return s[0]==="l"&&t.left.space===!0&&(p[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(p[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(s,p){t.update("header",s,p)}function h(s,p){s.value!==p&&(s.value=p)}function T({height:s}){h(l,s),m("size",s)}function C(s){a.value===!0&&h(u,!0),o("focusin",s)}x(()=>e.modelValue,s=>{m("space",s),h(u,!0),t.animate()}),x(d,s=>{m("offset",s)}),x(()=>e.reveal,s=>{s===!1&&h(u,e.modelValue)}),x(u,s=>{t.animate(),o("reveal",s)}),x(t.scroll,s=>{e.reveal===!0&&h(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",l.value),m("space",e.modelValue),m("offset",d.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const s=at(n.default,[]);return e.elevated===!0&&s.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(_(Be,{debounce:0,onResize:T})),_("header",{class:w.value,style:q.value,onFocusin:C},s)}}}),Ke=V({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const o=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>_("div",{class:o.value},K(n.default))}}),tn=V({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const o=v(()=>parseInt(e.lines,10)),i=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>_("div",{style:t.value,class:i.value},K(n.default))}});const Me={dark:{type:Boolean,default:null}};function Ve(e,n){return v(()=>e.dark===null?n.dark.isActive:e.dark)}var nn=V({name:"QItem",props:{...Me,...kt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=H(),t=Ve(e,i),{hasLink:l,linkAttrs:u,linkClass:f,linkTag:d,navigateOnClick:c}=Tt(),a=L(null),w=L(null),q=v(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=v(()=>{if(e.insetLevel===void 0)return null;const p=i.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function C(p){m.value===!0&&(w.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),c(p))}function g(p){if(m.value===!0&&Mt(p,13)===!0){Pe(p),p.qKeyEvent=!0;const y=new MouseEvent("click",p);y.qKeyEvent=!0,a.value.dispatchEvent(y)}o("keyup",p)}function s(){const p=at(n.default,[]);return m.value===!0&&p.unshift(_("div",{class:"q-focus-helper",tabindex:-1,ref:w})),p}return()=>{const p={ref:a,class:h.value,style:T.value,role:"listitem",onClick:C,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,u.value)):q.value===!0&&(p["aria-disabled"]="true"),_(d.value,p,s())}}}),on=V({name:"QList",props:{...Me,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const o=H(),i=Ve(e,o.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>_(e.tag,{class:t.value},K(n.default))}});function ln(e,n,o){let i;function t(){i!==void 0&&(Fe.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>o.value===!0,handler:n},Fe.add(i)}}}const an={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},rn=["beforeShow","show","beforeHide","hide"];function sn({showing:e,canShow:n,hideOnRouteChange:o,handleShow:i,handleHide:t,processOnMount:l}){const u=H(),{props:f,emit:d,proxy:c}=u;let a;function w(s){e.value===!0?h(s):q(s)}function q(s){if(f.disable===!0||s!==void 0&&s.qAnchorHandled===!0||n!==void 0&&n(s)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!0),a=s,Y(()=>{a===s&&(a=void 0)})),(f.modelValue===null||p===!1)&&m(s)}function m(s){e.value!==!0&&(e.value=!0,d("beforeShow",s),i!==void 0?i(s):d("show",s))}function h(s){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!1),a=s,Y(()=>{a===s&&(a=void 0)})),(f.modelValue===null||p===!1)&&T(s)}function T(s){e.value!==!1&&(e.value=!1,d("beforeHide",s),t!==void 0?t(s):d("hide",s))}function C(s){f.disable===!0&&s===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):s===!0!==e.value&&(s===!0?m:T)(a)}x(()=>f.modelValue,C),o!==void 0&&Et(u)===!0&&x(()=>c.$route.fullPath,()=>{o.value===!0&&e.value===!0&&h()}),l===!0&&U(()=>{C(f.modelValue)});const g={show:q,hide:h,toggle:w};return Object.assign(c,g),g}const un=[null,document,document.body,document.scrollingElement,document.documentElement];function cn(e,n){let o=Bt(n);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return un.includes(o)?window:o}function ct(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function dt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ae;function _e(){if(ae!==void 0)return ae;const e=document.createElement("p"),n=document.createElement("div");Ae(e,{width:"100%",height:"200px"}),Ae(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const o=e.offsetWidth;n.style.overflow="scroll";let i=e.offsetWidth;return o===i&&(i=n.clientWidth),n.remove(),ae=o-i,ae}function dn(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let Z=0,Ce,Le,ee,Se=!1,Ge,Je,Ze,F=null;function fn(e){vn(e)&&Pe(e)}function vn(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=Vt(e),o=e.shiftKey&&!e.deltaX,i=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=o||i?e.deltaY:e.deltaX;for(let l=0;l<n.length;l++){const u=n[l];if(dn(u,i))return i?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function et(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function re(e){Se!==!0&&(Se=!0,requestAnimationFrame(()=>{Se=!1;const{height:n}=e.target,{clientHeight:o,scrollTop:i}=document.scrollingElement;(ee===void 0||n!==window.innerHeight)&&(ee=o-n,document.scrollingElement.scrollTop=i),i>ee&&(document.scrollingElement.scrollTop-=Math.ceil((i-ee)/8))}))}function tt(e){const n=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(n);Ce=dt(window),Le=ct(window),Ge=n.style.left,Je=n.style.top,Ze=window.location.href,n.style.left=`-${Ce}px`,n.style.top=`-${Le}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,M.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",re,O.passiveCapture),window.visualViewport.addEventListener("scroll",re,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",et,O.passiveCapture))}M.is.desktop===!0&&M.is.mac===!0&&window[`${e}EventListener`]("wheel",fn,O.notPassive),e==="remove"&&(M.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",re,O.passiveCapture),window.visualViewport.removeEventListener("scroll",re,O.passiveCapture)):window.removeEventListener("scroll",et,O.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=Ge,n.style.top=Je,window.location.href===Ze&&window.scrollTo(Ce,Le),ee=void 0)}function mn(e){let n="add";if(e===!0){if(Z++,F!==null){clearTimeout(F),F=null;return}if(Z>1)return}else{if(Z===0||(Z--,Z>0))return;if(n="remove",M.is.ios===!0&&M.is.nativeMobile===!0){F!==null&&clearTimeout(F),F=setTimeout(()=>{tt(n),F=null},100);return}}tt(n)}function hn(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,mn(n))}}}function pn(){let e=null;const n=H();function o(){e!==null&&(clearTimeout(e),e=null)}return Ot(o),N(o),{removeTimeout:o,registerTimeout(i,t){o(),zt(n)===!1&&(e=setTimeout(i,t))}}}const Oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},yn=Object.keys(Oe);Oe.all=!0;function nt(e){const n={};for(const o of yn)e[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?Oe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const bn=["INPUT","TEXTAREA"];function ot(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&bn.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function gn(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ht.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ke(e,n,o){const i=Ee(e);let t,l=i.left-n.event.x,u=i.top-n.event.y,f=Math.abs(l),d=Math.abs(u);const c=n.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=u<0?"up":"down":c.up===!0&&u<0?(t="up",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&u>0?(t="down",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",f<d&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down"))):c.right===!0&&l>0&&(t="right",f<d&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down")));let a=!1;if(t===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,a=!0,t==="left"||t==="right"?(i.left-=l,f=0,l=0):(i.top-=u,d=0,u=0)}return{synthetic:a,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:i,direction:t,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:f,y:d},offset:{x:l,y:u},delta:{x:i.left-n.event.lastX,y:i.top-n.event.lastY}}}}let wn=0;var Te=$t({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&M.has.touch!==!0)return;function i(l,u){o.mouse===!0&&u===!0?Pe(l):(o.stop===!0&&ge(l),o.prevent===!0&&Ne(l))}const t={uid:"qvtp_"+wn++,handler:n,modifiers:o,direction:nt(o),noop:ze,mouseStart(l){ot(l,t)&&Rt(l)&&(le(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(ot(l,t)){const u=l.target;le(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,u){if(M.is.firefox===!0&&be(e,!0),t.lastEvt=l,u===!0||o.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Ne(c),l.cancelBubble===!0&&ge(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}ge(l)}const{left:f,top:d}=Ee(l);t.event={x:f,y:d,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(l){if(t.event===void 0)return;const u=Ee(l),f=u.left-t.event.x,d=u.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=l;const c=t.event.mouse===!0,a=()=>{i(l,c);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),gn(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{T(),h()},50):T()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(l,t.event.mouse);const{payload:m,synthetic:h}=ke(l,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(l);return}const w=Math.abs(f),q=Math.abs(d);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&d<0||t.direction.down===!0&&w<q&&d>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,u){if(t.event!==void 0){if(we(t,"temp"),M.is.firefox===!0&&be(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ke(l===void 0?t.lastEvt:l,t).payload);const{payload:f}=ke(l===void 0?t.lastEvt:l,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const l=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";le(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}M.has.touch===!0&&le(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=nt(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),we(n,"main"),we(n,"temp"),M.is.firefox===!0&&be(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function se(e,n,o){return o<=n?n:Math.min(o,Math.max(n,e))}const lt=150;var qn=V({name:"QDrawer",inheritAttrs:!1,props:{...an,...Me,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...rn,"onLayout","miniState"],setup(e,{slots:n,emit:o,attrs:i}){const t=H(),{proxy:{$q:l}}=t,u=Ve(e,l),{preventBodyScroll:f}=hn(),{registerTimeout:d,removeTimeout:c}=pn(),a=$e(ue,D);if(a===D)return console.error("QDrawer needs to be child of QLayout"),D;let w,q=null,m;const h=L(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),T=v(()=>e.mini===!0&&h.value!==!0),C=v(()=>T.value===!0?e.miniWidth:e.width),g=L(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),s=v(()=>e.persistent!==!0&&(h.value===!0||vt.value===!0));function p(r,b){if(W(),r!==!1&&a.animate(),z(0),h.value===!0){const E=a.instances[te.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),Q(1),a.isContainer.value!==!0&&f(!0)}else Q(0),r!==!1&&me(!1);d(()=>{r!==!1&&me(!0),b!==!0&&o("show",r)},lt)}function y(r,b){G(),r!==!1&&a.animate(),Q(0),z(X.value*C.value),he(),b!==!0?d(()=>{o("hide",r)},lt):c()}const{show:S,hide:B}=sn({showing:g,hideOnRouteChange:s,handleShow:p,handleHide:y}),{addToHistory:W,removeFromHistory:G}=ln(g,B,s),I={belowBreakpoint:h,hide:B},R=v(()=>e.side==="right"),X=v(()=>(l.lang.rtl===!0?-1:1)*(R.value===!0?1:-1)),He=L(0),j=L(!1),ce=L(!1),Re=L(C.value*X.value),te=v(()=>R.value===!0?"left":"right"),de=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:C.value:0),fe=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(R.value?"R":"L")>-1||l.platform.is.ios===!0&&a.isContainer.value===!0),J=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),vt=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),mt=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&j.value===!1?" hidden":"")),ht=v(()=>({backgroundColor:`rgba(0,0,0,${He.value*.4})`})),De=v(()=>R.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),pt=v(()=>R.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),yt=v(()=>{const r={};return a.header.space===!0&&De.value===!1&&(fe.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&pt.value===!1&&(fe.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),bt=v(()=>{const r={width:`${C.value}px`,transform:`translateX(${Re.value}px)`};return h.value===!0?r:Object.assign(r,yt.value)}),gt=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),wt=v(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(fe.value===!0||J.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(De.value===!0?" q-drawer--top-padding":""))),qt=v(()=>{const r=l.lang.rtl===!0?e.side:te.value;return[[Te,Lt,void 0,{[r]:!0,mouse:!0}]]}),xt=v(()=>{const r=l.lang.rtl===!0?te.value:e.side;return[[Te,Qe,void 0,{[r]:!0,mouse:!0}]]}),_t=v(()=>{const r=l.lang.rtl===!0?te.value:e.side;return[[Te,Qe,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){St(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}x(h,r=>{r===!0?(w=g.value,g.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(z(0),Q(0),he()):S(!1))}),x(()=>e.side,(r,b)=>{a.instances[b]===I&&(a.instances[b]=void 0,a[b].space=!1,a[b].offset=0),a.instances[r]=I,a[r].size=C.value,a[r].space=J.value,a[r].offset=de.value}),x(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),x(()=>e.behavior+e.breakpoint,ve),x(a.isContainer,r=>{g.value===!0&&f(r!==!0),r===!0&&ve()}),x(a.scrollbarWidth,()=>{z(g.value===!0?0:void 0)}),x(de,r=>{A("offset",r)}),x(J,r=>{o("onLayout",r),A("space",r)}),x(R,()=>{z()}),x(C,r=>{z(),pe(e.miniToOverlay,r)}),x(()=>e.miniToOverlay,r=>{pe(r,C.value)}),x(()=>l.lang.rtl,()=>{z()}),x(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ct(),a.animate())}),x(T,r=>{o("miniState",r)});function z(r){r===void 0?Y(()=>{r=g.value===!0?0:C.value,z(X.value*r)}):(a.isContainer.value===!0&&R.value===!0&&(h.value===!0||Math.abs(r)===C.value)&&(r+=X.value*a.scrollbarWidth.value),Re.value=r)}function Q(r){He.value=r}function me(r){const b=r===!0?"remove":a.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function Ct(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,q=setTimeout(()=>{q=null,ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Lt(r){if(g.value!==!1)return;const b=C.value,E=se(r.distance.x,0,b);if(r.isFinal===!0){E>=Math.min(75,b)===!0?S():(a.animate(),Q(0),z(X.value*b)),j.value=!1;return}z((l.lang.rtl===!0?R.value!==!0:R.value)?Math.max(b-E,0):Math.min(0,E-b)),Q(se(E/b,0,1)),r.isFirst===!0&&(j.value=!0)}function Qe(r){if(g.value!==!0)return;const b=C.value,E=r.direction===e.side,ne=(l.lang.rtl===!0?E!==!0:E)?se(r.distance.x,0,b):0;if(r.isFinal===!0){Math.abs(ne)<Math.min(75,b)===!0?(a.animate(),Q(1),z(0)):B(),j.value=!1;return}z(X.value*ne),Q(se(1-ne/b,0,1)),r.isFirst===!0&&(j.value=!0)}function he(){f(!1),me(!0)}function A(r,b){a.update(e.side,r,b)}function St(r,b){r.value!==b&&(r.value=b)}function pe(r,b){A("size",r===!0?e.miniWidth:b)}return a.instances[e.side]=I,pe(e.miniToOverlay,C.value),A("space",J.value),A("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),U(()=>{o("onLayout",J.value),o("miniState",T.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?p:y)(!1,!0)};if(a.totalWidth.value!==0){Y(r);return}m=x(a.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?S(!1):r()})}),N(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&he(),a.instances[e.side]===I&&(a.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(Dt(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),qt.value)),r.push(Ie("div",{ref:"backdrop",class:mt.value,style:ht.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>_t.value)));const b=T.value===!0&&n.mini!==void 0,E=[_("div",{...i,key:""+b,class:[gt.value,i.class]},b===!0?n.mini():K(n.default))];return e.elevated===!0&&g.value===!0&&E.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ie("aside",{ref:"content",class:wt.value,style:bt.value},E,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>xt.value)),_("div",{class:"q-drawer-container"},r)}}}),xn=V({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:o}}=H(),i=$e(ue,D);if(i===D)return console.error("QPageContainer needs to be child of QLayout"),D;st(Qt,!0);const t=v(()=>{const l={};return i.header.space===!0&&(l.paddingTop=`${i.header.size}px`),i.right.space===!0&&(l[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(l.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(l[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),l});return()=>_("div",{class:"q-page-container",style:t.value},K(n.default))}});const{passive:it}=O,_n=["both","horizontal","vertical"];var Cn=V({name:"QScrollObserver",props:{axis:{type:String,validator:e=>_n.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,l;x(()=>e.scrollTarget,()=>{d(),f()});function u(){i!==null&&i();const w=Math.max(0,ct(t)),q=dt(t),m={top:w-o.position.top,left:q-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:w,left:q},o.directionChanged=o.direction!==h,o.delta=m,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),n("scroll",{...o})}function f(){t=cn(l,e.scrollTarget),t.addEventListener("scroll",c,it),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,it),t=void 0)}function c(w){if(w===!0||e.debounce===0||e.debounce==="0")u();else if(i===null){const[q,m]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];i=()=>{m(q),i=null}}}const{proxy:a}=H();return x(()=>a.$q.lang.rtl,u),U(()=>{l=a.$el.parentNode,f()}),N(()=>{i!==null&&i(),d()}),Object.assign(a,{trigger:c,getPosition:()=>o}),ze}}),Ln=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=H(),t=L(null),l=L(i.screen.height),u=L(e.container===!0?0:i.screen.width),f=L({position:0,direction:"down",inflectionPoint:0}),d=L(0),c=L(rt.value===!0?0:_e()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),q=v(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=v(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(y){if(e.container===!0||document.qScrollPrevented!==!0){const S={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};f.value=S,e.onScroll!==void 0&&o("scroll",S)}}function T(y){const{height:S,width:B}=y;let W=!1;l.value!==S&&(W=!0,l.value=S,e.onScrollHeight!==void 0&&o("scrollHeight",S),g()),u.value!==B&&(W=!0,u.value=B),W===!0&&e.onResize!==void 0&&o("resize",y)}function C({height:y}){d.value!==y&&(d.value=y,g())}function g(){if(e.container===!0){const y=l.value>d.value?_e():0;c.value!==y&&(c.value=y)}}let s=null;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>u.value+c.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:f,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,S,B){p[y][S]=B}};if(st(ue,p),_e()>0){let B=function(){y=null,S.classList.remove("hide-scrollbar")},W=function(){if(y===null){if(S.scrollHeight>i.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(B,300)},G=function(I){y!==null&&I==="remove"&&(clearTimeout(y),B()),window[`${I}EventListener`]("resize",W)},y=null;const S=document.body;x(()=>e.container!==!0?"add":"remove",G),e.container!==!0&&G("add"),At(()=>{G("remove")})}return()=>{const y=Pt(n.default,[_(Cn,{onScroll:h}),_(Be,{onResize:T})]),S=_("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:t},[_(Be,{onResize:C}),_("div",{class:"absolute-full",style:q.value},[_("div",{class:"scroll",style:m.value},[S])])]):S}}});const ft=e=>(Kt("data-v-9f9150ac"),e=e(),Gt(),e),Sn={class:"lt-sm q-pa-xs q-pa-md row inline"},kn=ft(()=>P("div",{class:"lt-sm",style:{width:"50px"}},null,-1)),Tn={class:"gt-xs row items-center"},En={class:"q-py-md q-pl-md row inline"},Bn=ft(()=>P("div",{class:"gt-xs q-px-sm"},[P("div",{style:{"font-size":"1.7em","font-weight":"500","letter-spacing":"0","font-family":"'Inconsolata'"},class:"gt-xs column inline"}," GSLR Agencements "),P("div",{class:"gt-md q-pl-xl column inline text-uppercase text-weight-light",style:{"font-size":"1em"}}," Menuiserie\u202F\u202F\u202F\u202F\u2014\u202F\u202F\u202F\u202FPose de cuisine\u202F\u202F\u202F\u202F\u2014\u202F\u202F\u202F\u202FSur mesure ")],-1)),zn={class:"gt-xs column q-gutter-y-sm justify-evenly"},$n={style:{display:"inline-block","white-space":"nowrap","font-size":"14px"}},Pn={style:{display:"inline-block","white-space":"nowrap","font-size":"14px"}},Mn={class:"row justify-center"},Vn={__name:"MainLayout",setup(e){L("unique");let n=Xt();const o=[{title:"Entreprise",icon:"apartment",to:"/"},{title:"Prestations",icon:"design_services",to:"/prestations"},{title:"Actualit\xE9s",icon:"newspaper",to:"/actualites"},{title:"Contact",icon:"contact_page",to:"contact"}],i=L(!1);function t(){i.value=!i.value}let l=L(!1);x(()=>n.name,()=>{l.value=n.name==="entreprise"},{immediate:!0}),window.onscroll=function(){l.value&&u()};function u(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(document.getElementById("navbar").classList.add("navbar-solid"),document.getElementById("navbar").classList.remove("navbar-transparent"),document.getElementById("toolbar").classList.remove("gradient")):(document.getElementById("navbar").classList.add("navbar-transparent"),document.getElementById("navbar").classList.remove("navbar-solid"),document.getElementById("toolbar").classList.add("gradient"))}return(f,d)=>{const c=jt("router-view");return qe(),Xe(Ln,{view:"lHh Lpr lFf"},{default:$(()=>[k(en,{id:"navbar",class:je(Ue(n).name==="entreprise"?"navbar-transparent":"navbar-solid"),"height-hint":"98"},{default:$(()=>[k(Jt,{id:"toolbar",class:je(["justify-between q-pa-md",Ue(n).name==="entreprise"?"gradient":""])},{default:$(()=>[k(ye,{flat:"",dense:"",round:"",class:"lt-sm q-mx-sm",icon:"menu","aria-label":"Menu",onClick:t}),P("div",Sn,[k(We,{style:{"max-width":"150px","min-width":"100px"},src:"GSLR_3_b.svg",fit:"contain"})]),kn,P("div",Tn,[k(ye,{flat:"",dense:"",round:"",class:"q-mx-sm",icon:"menu","aria-label":"Menu",onClick:t}),P("div",En,[k(We,{style:{"max-width":"150px","min-width":"100px"},src:"GSLR_3_b.svg",fit:"contain"})])]),Bn,P("div",zn,[P("div",$n,[k(oe,{name:"phone"}),xe("\u202F\u202F+41 00\u202F000\u202F00\u202F00 ")]),P("div",Pn,[k(oe,{name:"mail"}),xe("\u202F\u202Fcontact@gslr.ch ")])])]),_:1},8,["class"])]),_:1},8,["class"]),k(qn,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=a=>i.value=a),elevated:"",overlay:"",class:"col items-center"},{default:$(()=>[P("div",Mn,[k(ye,{flat:"",rounded:"",size:"xl",class:"q-ma-lg text-brand",onClick:t},{default:$(()=>[k(oe,{name:"close",size:"lg",class:"textSize"})]),_:1})]),k(on,{class:"q-gutter-y-sm text-brand q-pl-xl"},{default:$(()=>[(qe(),It(Nt,null,Ft(o,a=>k(nn,{clickable:"",tag:"to",key:a.to,to:a.to,active:!1,class:"items-center"},{default:$(()=>[a.icon?(qe(),Xe(Ke,{key:0,avatar:""},{default:$(()=>[k(oe,{name:a.icon},null,8,["name"])]),_:2},1024)):Ut("",!0),k(Ke,null,{default:$(()=>[k(tn,null,{default:$(()=>[xe(Yt(a.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),64))]),_:1})]),_:1},8,["modelValue"]),k(xn,null,{default:$(()=>[k(c)]),_:1})]),_:1})}}};var Wn=Wt(Vn,[["__scopeId","data-v-9f9150ac"]]);export{Wn as default};
