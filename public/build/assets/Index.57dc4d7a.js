import{d as l,k as d,c as a,w as n,o as r,a as e,e as m,h as p,F as u,b as _,O as b}from"./app.b82d6052.js";import{_ as f}from"./AppLayout.76bee16d.js";import g from"./SubscribeList.5a9b5fe7.js";import"./moment.9709ab41.js";import{_ as h}from"./Pagination.b4c2382b.js";import"./Banner.e1322f35.js";import"./DarkmodeToggle.75454c72.js";import"./helper.e9fc3b37.js";import"./transition.3992d2e2.js";import"./Badge.cc31b979.js";import"./moment.a89d14f3.js";const v=e("div",{class:"flex justify-between gap-3"},[e("div",{class:""}),e("div",{class:""})],-1),x={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},w={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},E={__name:"Index",props:{subscribe:{type:Object,default:()=>({})}},setup(i){const t=i;let o=l("");return d(o,s=>{b.get(route("courseSubscribe.index"),{search:s},{preserveState:!0,replace:!0})}),(s,y)=>(r(),a(f,{title:"Billing Kelas",name:"Billing Kelas",desc:"lorem ipsum"},{default:n(()=>[v,e("div",x,[e("ul",w,[(r(!0),m(u,null,p(t.subscribe.data,c=>(r(),a(g,{item:c},null,8,["item"]))),256))])]),_(h,{pagination:t.subscribe},null,8,["pagination"])]),_:1}))}};export{E as default};