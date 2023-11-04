import{_ as F}from"./AppLayout.7ddf0f0a.js";import{E as O,d as f,G as L,i as y,x as M,y as T,D as U,H as A,c as W,w as x,o as _,a as s,e as D,h as P,t as c,n as B,f as z,F as j,b as h,u as S}from"./app.c74fed23.js";import{_ as R}from"./MobileMenu.81b9837f.js";import{t as E,u as $,o as m,H as I,g as X,N as K,h as v}from"./DarkmodeToggle.be47bb32.js";import{c as Y,l as k,p as J}from"./transition.431eecf7.js";import"./helper.e9fc3b37.js";var Q=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Q||{});let G=Symbol("DisclosureContext");function C(t){let i=A(G,null);if(i===null){let u=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,C),u}return i}let H=Symbol("DisclosurePanelContext");function Z(){return A(H,null)}let ee=O({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:i,attrs:u}){let r=f(t.defaultOpen?0:1),e=f(null),l=f(null),a={buttonId:f(`headlessui-disclosure-button-${E()}`),panelId:f(`headlessui-disclosure-panel-${E()}`),disclosureState:r,panel:e,button:l,toggleDisclosure(){r.value=$(r.value,{[0]:1,[1]:0})},closeDisclosure(){r.value!==1&&(r.value=1)},close(n){a.closeDisclosure();let d=(()=>n?n instanceof HTMLElement?n:n.value instanceof HTMLElement?m(n):m(a.button):m(a.button))();d==null||d.focus()}};return L(G,a),Y(y(()=>$(r.value,{[0]:k.Open,[1]:k.Closed}))),()=>{let{defaultOpen:n,...d}=t,p={open:r.value===0,close:a.close};return I({theirProps:d,ourProps:{},slot:p,slots:i,attrs:u,name:"Disclosure"})}}}),te=O({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{attrs:i,slots:u,expose:r}){let e=C("DisclosureButton"),l=Z(),a=y(()=>l===null?!1:l.value===e.panelId.value);M(()=>{a.value||t.id!==null&&(e.buttonId.value=t.id)}),T(()=>{a.value||(e.buttonId.value=null)});let n=f(null);r({el:n,$el:n}),a.value||U(()=>{e.button.value=n.value});let d=X(y(()=>({as:t.as,type:i.type})),n);function p(){var o;t.disabled||(a.value?(e.toggleDisclosure(),(o=m(e.button))==null||o.focus()):e.toggleDisclosure())}function g(o){var b;if(!t.disabled)if(a.value)switch(o.key){case v.Space:case v.Enter:o.preventDefault(),o.stopPropagation(),e.toggleDisclosure(),(b=m(e.button))==null||b.focus();break}else switch(o.key){case v.Space:case v.Enter:o.preventDefault(),o.stopPropagation(),e.toggleDisclosure();break}}function w(o){switch(o.key){case v.Space:o.preventDefault();break}}return()=>{var o;let b={open:e.disclosureState.value===0},{id:N,...V}=t,q=a.value?{ref:n,type:d.value,onClick:p,onKeydown:g}:{id:(o=e.buttonId.value)!=null?o:N,ref:n,type:d.value,"aria-expanded":e.disclosureState.value===0,"aria-controls":e.disclosureState.value===0||m(e.panel)?e.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:p,onKeydown:g,onKeyup:w};return I({ourProps:q,theirProps:V,slot:b,attrs:i,slots:u,name:"DisclosureButton"})}}}),se=O({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:i,slots:u,expose:r}){let e=C("DisclosurePanel");M(()=>{t.id!==null&&(e.panelId.value=t.id)}),T(()=>{e.panelId.value=null}),r({el:e.panel,$el:e.panel}),L(H,e.panelId);let l=J(),a=y(()=>l!==null?(l.value&k.Open)===k.Open:e.disclosureState.value===0);return()=>{var n;let d={open:e.disclosureState.value===0,close:e.close},{id:p,...g}=t,w={id:(n=e.panelId.value)!=null?n:p,ref:e.panel};return I({ourProps:w,theirProps:g,slot:d,attrs:i,slots:u,features:K.RenderStrategy|K.Static,visible:a.value,name:"DisclosurePanel"})}}});const le={role:"list",class:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},ae={class:"flex w-full items-center justify-between space-x-6 p-6"},ne={class:"flex-1 truncate"},oe={class:"flex items-center space-x-3"},re={class:"truncate text-sm font-medium text-gray-900"},ie={class:"inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"},ue={class:"mt-1 truncate text-sm text-gray-500"},de={class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},ce={class:"flex w-0 flex-1"},pe=["href"],fe={class:"ml-3"},me={key:0,class:"-ml-px flex w-0 flex-1"},ve=["href"],ge={class:"ml-3"},be={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},xe={class:"divide-y divide-gray-300 dark:divide-gray-600"},_e={class:"text-sm font-medium text-gray-900"},he={class:"ml-6 flex items-center"},ye={class:"text-sm text-gray-500"},Ce={__name:"Index",props:{users:Object,history:Object},setup(t){const i=[{name:"Kontak Admin",title:"Online 08.30 - 22.00",role:"Aktif",icon:"fa-whatsapp text-green-500",btn:"Admin 1",btn2:"Admin 2",link:"https://wa.me/6285156875180",link2:"https://wa.me/6285156875180"},{name:"Grup Whatsapp",title:"Gabung grup whatsapp",role:"Aktif",icon:"fa-whatsapp text-green-500",btn:"Grup Whatsapp",link:"https://wa.me/6285156875180"}],u=[{question:"Mengalami Kendala Transaksi?",answer:"Lorem ipsum dolor sit amet."},{question:"Mengalami Kendala Deposit?",answer:"Lorem ipsum dolor sit amet."}];return(r,e)=>(_(),W(F,{title:"Informasi",name:"Informasi",desc:"Lorem ipsum dolor sit amet"},{default:x(()=>[s("ul",le,[(_(),D(j,null,P(i,l=>s("li",{key:l.email,class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},[s("div",ae,[s("div",ne,[s("div",oe,[s("h3",re,c(l.name),1),s("span",ie,c(l.role),1)]),s("p",ue,c(l.title),1)]),s("i",{class:B(["fa-brands text-3xl flex-shrink-0",l.icon])},null,2)]),s("div",null,[s("div",de,[s("div",ce,[s("a",{href:l.link,target:"_blank",class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"},[s("span",fe,c(l.btn),1)],8,pe)]),l.btn2?(_(),D("div",me,[s("a",{href:l.link2,target:"_blank",class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"},[s("span",ge,c(l.btn2),1)],8,ve)])):z("",!0)])])])),64))]),s("div",be,[s("div",xe,[(_(),D(j,null,P(u,l=>h(S(ee),{as:"div",key:l.question,class:""},{default:x(({open:a})=>[s("dt",null,[h(S(te),{class:"flex w-full items-start justify-between text-left px-6 py-4"},{default:x(()=>[s("span",_e,c(l.question),1),s("span",he,[s("i",{class:B(["fa-regular text-gray-900",a?"fa-minus":"fa-chevron-down"])},null,2)])]),_:2},1024)]),h(S(se),{as:"dd",class:"px-6 pt-0 pb-4"},{default:x(()=>[s("p",ye,c(l.answer),1)]),_:2},1024)]),_:2},1024)),64))])]),h(R)]),_:1}))}};export{Ce as default};