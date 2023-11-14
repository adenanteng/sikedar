import{_ as p}from"./AppLayout.3abfd74c.js";import{c as x,w as h,o,b as c,a as s,e as l,f as g,t as r,g as y,h as a,n as d,u as _,F as i}from"./app.dd9a0443.js";import{_ as v}from"./PrimaryButton.9a54faf8.js";import{_ as k}from"./PreviousButton.4ea4b1b6.js";import"./moment.5469fc9a.js";import{r as u}from"./StarIcon.6eb99c2a.js";import"./Banner.a110e39d.js";import"./DarkmodeToggle.e80443eb.js";import"./helper.e9fc3b37.js";import"./transition.ea500b82.js";const b={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},w={class:"py-4 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"},B={class:"tracking-tight flex gap-5 items-center"},N={class:""},$=["src","alt"],L={class:""},T={class:"block text-xl font-bold text-gray-900 sm:text-2xl capitalize"},H={class:"block font-medium text-gray-600"},M={class:"mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"},V={class:"mt-10"},j={class:"lg:grid lg:grid-cols-2 mt-10"},C={class:""},S=s("h2",{class:"text-xl font-bold tracking-tight text-gray-900"},"Review Worker",-1),z={class:"mt-3 flex items-center"},D={class:"flex items-center"},F={class:"ml-2 text-sm text-gray-900"},O={class:"mt-10"},P={class:"flow-root"},R={class:""},E={class:"flex items-center"},U=["src","alt"],W={class:"ml-4"},q={class:"text-sm font-bold text-gray-900"},A={class:"mt-1 flex items-center"},G=["innerHTML"],I={class:""},J=s("h2",{class:"text-xl font-bold tracking-tight text-gray-900"},"Review Owner",-1),K={class:"mt-3 flex items-center"},Q={class:"flex items-center"},X={class:"ml-2 text-sm text-gray-900"},Y={class:"mt-10"},Z={class:"flow-root"},ss={class:""},es={class:"flex items-center"},ts=["src","alt"],os={class:"ml-4"},ls={class:"text-sm font-bold text-gray-900"},rs={class:"mt-1 flex items-center"},as=["innerHTML"],is=s("div",{class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"},[s("ul",{role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"})],-1),ys={__name:"Show",props:{users:Object|String},setup(f){const t=f;return(m,ns)=>(o(),x(p,{title:"Pengguna",name:"Pengguna",desc:"lorem ipsum"},{previous:h(()=>[c(k)]),default:h(()=>[s("div",b,[s("div",w,[s("div",B,[s("div",N,[t.users.profile_photo_url?(o(),l("img",{key:0,class:"mx-auto h-20 w-20 object-cover rounded-full",src:t.users.profile_photo_url,alt:t.users.name},null,8,$)):g("",!0)]),s("div",L,[s("span",T,r(t.users.name),1),s("span",H,r(t.users.role),1)])]),s("div",M,[m.$page.props.user.role_id==1?(o(),x(v,{key:0,as:"a",href:m.route("user.edit",t.users)},{default:h(()=>[y(" Ubah Data ")]),_:1},8,["href"])):g("",!0)])])]),s("div",V,[s("div",j,[s("div",C,[S,s("div",z,[s("div",null,[s("div",D,[(o(),l(i,null,a([0,1,2,3,4],e=>c(_(u),{key:e,class:d([Number(t.users.review_worker_average)>e?"text-yellow-400":"text-gray-300","flex-shrink-0 h-5 w-5"]),"aria-hidden":"true"},null,8,["class"])),64))])]),s("p",F,"Based on "+r(t.users.worker.length)+" reviews",1)]),s("div",O,[s("div",P,[s("div",R,[(o(!0),l(i,null,a(t.users.worker,e=>(o(),l("div",{key:e.id,class:"py-5"},[s("div",E,[s("img",{src:e.user.profile_photo_url,alt:`${e.user.name}.`,class:"h-12 w-12 rounded-full"},null,8,U),s("div",W,[s("h4",q,r(e.user.name),1),s("div",A,[(o(),l(i,null,a([0,1,2,3,4],n=>c(_(u),{key:n,class:d([e.rating>n?"text-yellow-400":"text-gray-300","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))])])]),s("div",{class:"mt-4 space-y-6 text-sm text-gray-600",innerHTML:e.desc},null,8,G)]))),128))])])])]),s("div",I,[J,s("div",K,[s("div",null,[s("div",Q,[(o(),l(i,null,a([0,1,2,3,4],e=>c(_(u),{key:e,class:d([Number(t.users.review_owner_average)>e?"text-yellow-400":"text-gray-300","flex-shrink-0 h-5 w-5"]),"aria-hidden":"true"},null,8,["class"])),64))])]),s("p",X,"Based on "+r(t.users.owner.length)+" reviews",1)]),s("div",Y,[s("div",Z,[s("div",ss,[(o(!0),l(i,null,a(t.users.owner,e=>(o(),l("div",{key:e.id,class:"py-5"},[s("div",es,[s("img",{src:e.user.profile_photo_url,alt:`${e.user.name}.`,class:"h-12 w-12 rounded-full"},null,8,ts),s("div",os,[s("h4",ls,r(e.user.name),1),s("div",rs,[(o(),l(i,null,a([0,1,2,3,4],n=>c(_(u),{key:n,class:d([e.rating>n?"text-yellow-400":"text-gray-300","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64))])])]),s("div",{class:"mt-4 space-y-6 text-sm text-gray-600",innerHTML:e.desc},null,8,as)]))),128))])])])])])]),is]),_:1}))}};export{ys as default};
