import{d as h,k as g,c as x,w as r,o as l,a as e,b as t,u as i,A as b,e as d,g as c,f as v,h as y,n as w,t as m,j as p,F as k,O as V}from"./app.8a68db54.js";import{_ as $}from"./AppLayout.320254eb.js";import{_ as j}from"./PrimaryButton.d2153405.js";import{_ as C}from"./TextInput.404daac5.js";import"./moment.f1bb7e28.js";import{_ as B}from"./MobileMenu.933470ab.js";import{_ as N}from"./Pagination.1cd8d6ac.js";import{_ as O}from"./Badge.d867f917.js";import"./Banner.86bd642e.js";import"./DarkmodeToggle.934f6f82.js";import"./helper.e9fc3b37.js";import"./transition.752cda3c.js";const F={class:"flex justify-between gap-3"},K={class:""},S={key:0,class:""},T={class:"mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},z={class:"bg-white bg-opacity-50 h-full border border-gray-300 rounded-3xl shadow-lg"},A={class:"h-52 w-full overflow-hidden rounded-t-3xl relative"},D=["src","alt"],E={class:"absolute inset-0"},I={class:"flex justify-end p-3"},L={class:"py-3 px-5 items-end"},R={class:"text-lg font-semibold text-gray-900"},U={class:"mt-1 text-sm text-gray-500"},q={class:"mt-10"},G={class:"text-sm text-gray-900"},te={__name:"Index",props:{course:{type:Object,default:()=>({})}},setup(f){const n=f;let o=h("");return g(o,a=>{V.get(route("course.index"),{search:a},{preserveState:!0,replace:!0})}),(a,u)=>(l(),x($,{title:"Kelas",name:"Kelas",desc:"lorem ipsum"},{default:r(()=>[e("div",F,[e("div",K,[t(C,{type:"text",modelValue:i(o),"onUpdate:modelValue":u[0]||(u[0]=s=>b(o)?o.value=s:o=s),placeholder:"Cari disini",class:"block w-full lg:w-96 mb-5 shadow"},null,8,["modelValue"])]),a.$page.props.user.role_id!=3?(l(),d("div",S,[t(j,{as:"a",href:a.route("course.create")},{default:r(()=>[c("Tambah")]),_:1},8,["href"])])):v("",!0)]),e("div",T,[(l(!0),d(k,null,y(n.course.data,s=>(l(),d("div",{key:s.id},[t(i(p),{href:a.$page.props.user.role_id!==3?a.route("course.show",s):a.route("landing.course.show",s)},{default:r(()=>{var _;return[e("div",z,[e("div",A,[e("img",{src:(_=s.media[0])==null?void 0:_.original_url,alt:s.name,class:"rounded-t-3xl h-full w-full object-cover object-center"},null,8,D),e("div",E,[e("div",I,[t(O,{name:s.status,class:w(s.color)},null,8,["name","class"])])])]),e("div",L,[e("h3",R,m(s.name),1),e("p",U,m(s.desc),1)])])]}),_:2},1032,["href"])]))),128))]),t(N,{pagination:n.course},null,8,["pagination"]),e("div",q,[e("p",G,[c("Cari kelas baru untukmu "),t(i(p),{class:"font-semibold text-primary-600 underline",href:a.route("landing.course")},{default:r(()=>[c("disini")]),_:1},8,["href"])])]),t(B)]),_:1}))}};export{te as default};
