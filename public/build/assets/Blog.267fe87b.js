import{d as h,k as x,c as g,w as a,o as d,a as e,b as o,g as c,u as l,A as y,e as p,h as w,t as i,j as n,F as k,n as v,O as b}from"./app.dd9a0443.js";import{h as B}from"./moment.9709ab41.js";import{_ as V}from"./LandingLayout.e02db692.js";import{_ as D}from"./Heading.2c1a09b0.js";import{_ as A}from"./TextInput.cb39aa20.js";import{_ as j}from"./Pagination.a3724d37.js";import"./helper.e9fc3b37.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Banner.a110e39d.js";import"./DarkmodeToggle.e80443eb.js";const C={class:"pt-10"},M={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},N={class:"flex justify-between gap-3"},O={class:""},S={class:"mt-8 mb-5 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"},$={class:v(["bg-primary-300 text-primary-900","inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"])},E={class:"text-xl font-semibold text-gray-900"},F={class:"mt-3 text-base text-gray-500"},H={class:"mt-6 flex items-center"},L={class:"flex-shrink-0"},R=["src"],z={class:"ml-3"},I={class:"text-sm font-medium text-gray-900"},K={class:"flex space-x-1 text-sm text-gray-500"},T=["datetime"],ee={__name:"Blog",props:{blog:{type:Object,default:()=>({})}},setup(f){const m=f;let r=h("");x(r,s=>{b.get(route("landing.blog"),{search:s},{preserveState:!0,replace:!0})});function _(s){return B(s).format("DD MMM Y HH:mm")}return(s,u)=>(d(),g(V,{title:"Blog",desc:"Lorem ipsum"},{default:a(()=>[e("div",C,[e("div",M,[o(D,null,{header:a(()=>[c(" Artikel ")]),desc:a(()=>[c(" Artikel SIKEDAR ")]),_:1}),e("div",N,[e("div",O,[o(A,{type:"text",modelValue:l(r),"onUpdate:modelValue":u[0]||(u[0]=t=>y(r)?r.value=t:r=t),placeholder:"Cari disini",class:"block w-full lg:w-96 mb-5 shadow"},null,8,["modelValue"])])]),e("div",S,[(d(!0),p(k,null,w(m.blog.data,t=>(d(),p("div",{key:t.name},[e("div",null,[o(l(n),{href:s.route("landing.blog.show",t),class:"inline-block"},{default:a(()=>[e("span",$,i(t.category.name),1)]),_:2},1032,["href"])]),o(l(n),{href:s.route("landing.blog.show",t),class:"mt-4 block"},{default:a(()=>[e("p",E,i(t.name),1),e("p",F,i(t.desc),1)]),_:2},1032,["href"]),e("div",H,[e("div",L,[o(l(n),{href:s.route("user.show",t.user)},{default:a(()=>[e("img",{class:"h-10 w-10 rounded-full",src:t.user.profile_photo_url,alt:""},null,8,R)]),_:2},1032,["href"])]),e("div",z,[e("p",I,[o(l(n),{href:s.route("user.show",t.user)},{default:a(()=>[c(i(t.user.name),1)]),_:2},1032,["href"])]),e("div",K,[e("time",{datetime:_(t.created_at)},i(_(t.created_at)),9,T)])])])]))),128))]),o(j,{pagination:m.blog},null,8,["pagination"])])])]),_:1}))}};export{ee as default};
