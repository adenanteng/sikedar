import{d as g,k as v,c as B,w as a,o as c,a as e,n as x,g as u,t as l,b as r,e as m,u as o,A as S,F as V,h as M,j as d,f as C,O as $}from"./app.0bfba96a.js";import{_ as D}from"./AppLayout.b0a0ad0d.js";import{_ as I}from"./PrimaryButton.2d50ad0e.js";import{_ as P}from"./TextInput.9bb6d37b.js";import{m as z}from"./moment.451bfd57.js";import{_ as N}from"./Badge.41cc64df.js";import{_ as F}from"./MobileMenu.0abb1700.js";import{_ as H}from"./Pagination.0ff7a668.js";import"./Banner.8db983ca.js";import"./DarkmodeToggle.cde8ab40.js";import"./helper.e9fc3b37.js";import"./transition.774a5a64.js";const J=e("div",{class:"col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"},[e("div",null,[e("div",{class:"-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"},[e("div",{class:"flex w-0 flex-1"},[e("div",{class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"},[e("div",{class:"ml-3"},[e("div",{class:"text-xs text-gray-500"},"Saldo Masuk"),e("div",{class:"text-sm font-medium text-gray-700"},"0")])])]),e("div",{class:"-ml-px flex w-0 flex-1"},[e("div",{class:"relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"},[e("div",{class:"ml-3"},[e("div",{class:"text-xs text-gray-500"},"Riwayat Saldo"),e("div",{class:"text-sm font-medium text-gray-700"},"0")])])])])])],-1),R={class:"sticky top-0 z-40 backdrop-blur border-b border-gray-200"},T={class:"-mb-px flex","aria-label":"Tabs"},U={key:0,class:""},A={class:"flex justify-between gap-3"},E={class:""},L=e("div",{class:""},null,-1),Y={class:"mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},q={class:"text-xl font-semibold text-gray-900"},G={class:"mt-6 flex items-center"},K={class:"flex-shrink-0"},Q=["src"],W={class:"ml-3"},X={class:"text-sm font-medium text-gray-900"},Z={class:"flex space-x-1 text-sm text-gray-500"},ee=["datetime"],te={class:"mt-10"},se={class:"text-sm text-gray-900"},re={key:1,class:""},ae={class:"flex justify-between gap-3"},oe={class:""},le={class:""},de={class:"mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},ie={class:"text-xl font-semibold text-gray-900"},ne={class:"mt-6 flex items-center"},ce={class:"flex-shrink-0"},ue=["src"],me={class:"ml-3"},fe={class:"text-sm font-medium text-gray-900"},pe={class:"flex space-x-1 text-sm text-gray-500"},_e=["datetime"],Ce={__name:"Index",props:{project:{type:Object,default:()=>({})},projectMe:{type:Object,default:()=>({})}},setup(O){var y;const f=O;let p=g("");v(p,s=>{$.get(route("project.index"),{search:s},{preserveState:!0})});let _=g("");v(_,s=>{$.get(route("project.index"),{searchMe:s},{preserveState:!0,replace:!0})});function h(s){return z(s).format("DD MMM Y HH:mm")}const n=g((y=JSON.parse(localStorage.getItem("tabProject")))!=null?y:1);return v(n,s=>{console.log(`tab is ${s}`),localStorage.setItem("tabProject",JSON.stringify(s))}),(s,i)=>(c(),B(D,{title:"Proyek",name:"Proyek",desc:"lorem ipsum"},{default:a(()=>{var b,w,j,k;return[J,e("div",R,[e("nav",T,[e("button",{class:x(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",n.value==1?"border-primary-600 text-primary-600":"text-gray-500 border-gray-300"]),onClick:i[0]||(i[0]=t=>n.value=1)},[u(l(s.$page.props.user.role_id==1?"Semua Project":"Project for me")+" ",1),r(N,{class:"ml-1 bg-primary-600 text-white",name:(w=(b=f.project)==null?void 0:b.data.length)!=null?w:0},null,8,["name"])],2),e("button",{class:x(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",n.value==2?"border-green-600 text-green-600":"text-gray-500 border-gray-300 "]),onClick:i[1]||(i[1]=t=>n.value=2)},[u(" Project by me "),r(N,{class:"ml-1 bg-green-600 text-white",name:(k=(j=f.projectMe)==null?void 0:j.data.length)!=null?k:0},null,8,["name"])],2)])]),n.value==1?(c(),m("div",U,[e("div",A,[e("div",E,[r(P,{type:"text",modelValue:o(p),"onUpdate:modelValue":i[2]||(i[2]=t=>S(p)?p.value=t:p=t),placeholder:"Cari disini",class:"block w-full lg:w-96 mb-5 shadow"},null,8,["modelValue"])]),L]),e("div",Y,[(c(!0),m(V,null,M(f.project.data,t=>(c(),m("div",{key:t.name},[e("div",null,[r(o(d),{href:s.route("project.show",t),class:"inline-block"},{default:a(()=>[e("span",{class:x(["inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",t.color])},l(t.status),3)]),_:2},1032,["href"])]),r(o(d),{href:s.route("project.show",t),class:"mt-4 block"},{default:a(()=>[e("p",q,l(t.name),1)]),_:2},1032,["href"]),e("div",G,[e("div",K,[r(o(d),{href:s.route("user.show",t.user)},{default:a(()=>[e("img",{class:"h-10 w-10 rounded-full",src:t.user.profile_photo_url,alt:""},null,8,Q)]),_:2},1032,["href"])]),e("div",W,[e("p",X,[r(o(d),{href:s.route("user.show",t.user)},{default:a(()=>[u(l(t.user.name),1)]),_:2},1032,["href"])]),e("div",Z,[e("time",{datetime:h(t.created_at)},l(h(t.created_at)),9,ee)])])])]))),128))]),r(H,{pagination:f.project},null,8,["pagination"]),e("div",te,[e("p",se,[u("Cari proyek baru untukmu "),r(o(d),{class:"font-semibold text-primary-600 underline",href:s.route("landing.project")},{default:a(()=>[u("disini")]),_:1},8,["href"])])])])):C("",!0),n.value==2?(c(),m("div",re,[e("div",ae,[e("div",oe,[r(P,{type:"text",modelValue:o(_),"onUpdate:modelValue":i[3]||(i[3]=t=>S(_)?_.value=t:_=t),placeholder:"Cari disini",class:"block w-full lg:w-96 mb-5 shadow"},null,8,["modelValue"])]),e("div",le,[r(I,{as:"a",href:s.route("project.create")},{default:a(()=>[u("Tambah")]),_:1},8,["href"])])]),e("div",de,[(c(!0),m(V,null,M(f.projectMe.data,t=>(c(),m("div",{key:t.name},[e("div",null,[r(o(d),{href:s.route("project.show",t),class:"inline-block"},{default:a(()=>[e("span",{class:x(["inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium",t.color])},l(t.status),3)]),_:2},1032,["href"])]),r(o(d),{href:s.route("project.show",t),class:"mt-4 block"},{default:a(()=>[e("p",ie,l(t.name),1)]),_:2},1032,["href"]),e("div",ne,[e("div",ce,[r(o(d),{href:s.route("user.show",t.user)},{default:a(()=>[e("img",{class:"h-10 w-10 rounded-full",src:t.user.profile_photo_url,alt:""},null,8,ue)]),_:2},1032,["href"])]),e("div",me,[e("p",fe,[r(o(d),{href:s.route("user.show",t.user)},{default:a(()=>[u(l(t.user.name),1)]),_:2},1032,["href"])]),e("div",pe,[e("time",{datetime:h(t.created_at)},l(h(t.created_at)),9,_e)])])])]))),128))])])):C("",!0),r(F)]}),_:1}))}};export{Ce as default};
