import{d as u,k as p,c as h,w as l,o as i,a as e,b as o,u as n,A as x,g,e as _,h as y,n as v,t as r,j as b,F as w,O as k}from"./app.4147f647.js";import{_ as C}from"./AppLayout.1527b290.js";import{_ as V}from"./PrimaryButton.7c5cb0ed.js";import{_ as j}from"./TextInput.d2e3527b.js";import{_ as B}from"./Pagination.017c73b0.js";import{h as D}from"./moment.9709ab41.js";import"./DarkmodeToggle.86fcfb79.js";import"./helper.e9fc3b37.js";import"./transition.39517c06.js";const K={class:"flex justify-between gap-3"},M={class:""},N={class:""},O={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},$={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},z={class:"pl-4 sm:pl-6"},F={class:"px-4 py-4 sm:px-6 grow"},H={class:"flex items-center justify-between"},S={class:"font-medium truncate capitalize text-gray-900"},T={class:"ml-2 flex-shrink-0 flex"},A={class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-900"},E={class:"flex justify-between"},I={class:"flex"},L={class:"flex items-center text-sm text-gray-600"},R={class:"flex items-center text-sm text-gray-600"},Z={__name:"Index",props:{category:{type:Object,default:()=>({})}},setup(f){const d=f;let a=u("");p(a,t=>{k.get(route("courseCategory.index"),{search:t},{preserveState:!0,replace:!0})});function m(t){return D(t).format("DD MMM Y HH:mm")}return(t,c)=>(i(),h(C,{title:"Kategori Kelas",name:"Kategori Kelas",desc:"lorem ipsum"},{default:l(()=>[e("div",K,[e("div",M,[o(j,{type:"text",modelValue:n(a),"onUpdate:modelValue":c[0]||(c[0]=s=>x(a)?a.value=s:a=s),placeholder:"Cari disini",class:"block w-full lg:w-96 mb-5 shadow"},null,8,["modelValue"])]),e("div",N,[o(V,{as:"a",href:t.route("courseCategory.create")},{default:l(()=>[g("Tambah")]),_:1},8,["href"])])]),e("div",O,[e("ul",$,[(i(!0),_(w,null,y(d.category.data,s=>(i(),_("li",{key:s.id},[o(n(b),{"preserve-scroll":"",href:t.route("courseCategory.edit",s),class:"flex items-center hover:bg-primary-50"},{default:l(()=>[e("div",z,[e("i",{class:v(["fa-duotone text-primary-600 text-2xl",s.icon])},null,2)]),e("div",F,[e("div",H,[e("p",S,r(s.name),1),e("div",T,[e("p",A,r(s.status),1)])]),e("div",E,[e("div",I,[e("p",L,r(s.desc),1)]),e("div",R,r(m(s.updated_at)),1)])])]),_:2},1032,["href"])]))),128))])]),o(B,{pagination:d.category},null,8,["pagination"])]),_:1}))}};export{Z as default};
