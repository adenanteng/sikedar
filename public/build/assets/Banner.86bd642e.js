import{d as h,i as u,K as d,k as m,o,e as n,n as r,a as s,f as c,t as v,l as w}from"./app.8a68db54.js";const _={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},p={class:"flex items-center justify-between flex-wrap"},g={class:"w-0 flex-1 flex items-center min-w-0"},x={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},f=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),k=[f],b={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},y=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),B=[y],j={class:"ml-3 font-medium text-sm text-white truncate"},C={class:"shrink-0 sm:ml-3"},M=s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),z=[M],S={__name:"Banner",setup(L){const l=h(!0),e=u(()=>{var t;return((t=d().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),a=u(()=>{var t;return((t=d().props.jetstream.flash)==null?void 0:t.banner)||""});return m(a,async()=>{l.value=!0}),(t,i)=>(o(),n("div",null,[l.value&&a.value?(o(),n("div",{key:0,class:r({"bg-green-500":e.value=="success","bg-red-700":e.value=="danger"})},[s("div",_,[s("div",p,[s("div",g,[s("span",{class:r(["flex p-2 rounded-3xl",{"bg-green-600":e.value=="success","bg-red-600":e.value=="danger"}])},[e.value=="success"?(o(),n("svg",x,k)):c("",!0),e.value=="danger"?(o(),n("svg",b,B)):c("",!0)],2),s("p",j,v(a.value),1)]),s("div",C,[s("button",{type:"button",class:r(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-green-600 focus:bg-green-600":e.value=="success","hover:bg-red-600 focus:bg-red-600":e.value=="danger"}]),"aria-label":"Dismiss",onClick:i[0]||(i[0]=w(D=>l.value=!1,["prevent"]))},[(o(),n("svg",{class:r(["h-5 w-5 text-white dark:text-gray-900",{"text-green-600":e.value=="success","text-red-600":e.value=="danger"}]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},z,2))],2)])])])],2)):c("",!0)]))}};export{S as _};