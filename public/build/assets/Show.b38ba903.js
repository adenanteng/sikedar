import{T as S,d as v,c as l,w as n,o as s,b as u,a as t,t as d,e as c,g as i,f,F as k,h as B,n as _}from"./app.5168d267.js";import{h as j}from"./moment.9709ab41.js";import{_ as x}from"./PrimaryButton.23bb6da1.js";import{_ as D}from"./AppLayout.49e56993.js";import{_ as M}from"./PreviousButton.db7176a2.js";import P from"./BidList.00c6ce59.js";import T from"./ChatSection.030229eb.js";import H from"./MediaSection.ece593d5.js";import{_ as I}from"./DangerButton.c57e94b0.js";import"./DarkmodeToggle.18dfa61c.js";import"./helper.e9fc3b37.js";import"./transition.d7f24f35.js";import"./Badge.7208d007.js";import"./moment.ab3d06eb.js";import"./InputError.ff6122db.js";import"./TextInput.8f2691f2.js";const N={class:"max-w-7xl mx-auto items-start"},V={class:"flex justify-between gap-3"},L={class:""},O={class:"text-xl font-medium leading-6 text-gray-900"},z={key:0,class:""},F={key:0,class:"flex gap-2"},R=t("i",{class:"fa-duotone fa-paper-plane mr-2"},null,-1),E=t("i",{class:"fa-duotone fa-check mr-2"},null,-1),U={class:"mt-5 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 border border-gray-300 overflow-hidden rounded-3xl bg-white bg-opacity-50 shadow-lg md:grid-cols-4 md:divide-y-0 md:divide-x"},W={class:"px-4 py-5 sm:p-6"},Y=t("dt",{class:"text-base font-normal text-gray-900"},"Status",-1),q={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},A={class:"flex items-baseline text-2xl font-semibold text-primary-600"},G=t("span",{class:"ml-2 text-sm font-medium text-gray-500"},null,-1),J={class:"px-4 py-5 sm:p-6"},K=t("dt",{class:"text-base font-normal text-gray-900"},"Deadline",-1),Q={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},X={class:"flex items-baseline text-2xl font-semibold text-primary-600"},Z={class:"ml-2 text-sm font-medium text-gray-500"},tt={class:"px-4 py-5 sm:p-6"},et=t("dt",{class:"text-base font-normal text-gray-900"},"Worker",-1),st={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},ot={class:"flex items-baseline text-2xl font-semibold text-primary-600"},rt=t("span",{class:"ml-2 text-sm font-medium text-gray-500"},null,-1),at={class:"px-4 py-5 sm:p-6"},it=t("dt",{class:"text-base font-normal text-gray-900"},"Owner",-1),dt={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},lt={class:"flex items-baseline text-2xl font-semibold text-primary-600"},nt=t("span",{class:"ml-2 text-sm font-medium text-gray-500"},null,-1),ct={class:"mt-10 text-sm font-medium leading-6 text-gray-900"},mt={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},pt={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},_t={key:1,class:"my-10"},ut={class:"sticky top-0 z-40 backdrop-blur border-b border-gray-200 mb-10"},ft={class:"-mb-px flex","aria-label":"Tabs"},xt=["innerHTML"],Ht={__name:"Show",props:{project:Object,chat:Object},setup(w){const e=w,r=S({status_id:null,deadline_date:null}),b=()=>{e.project.status_id==2?(r.status_id=3,r.deadline_date=j().add(e.project.finish_day,"days").format()):e.project.status_id==3&&(r.status_id=4),r.patch(route("project.update",e.project),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{r.reset()}})},$=()=>{r.status_id=0,r.patch(route("project.update",e.project),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{r.reset()}})};v(null);function C(p){return j(p).format("DD MMM Y HH:mm")}const o=v(1);return(p,a)=>(s(),l(D,{title:"Proyek",name:"Proyek",desc:"lorem ipsum"},{previous:n(()=>[u(M)]),default:n(()=>{var y,h,g;return[t("div",N,[t("div",V,[t("div",L,[t("h1",O,d(e.project.name),1)]),e.project.user_id==p.$page.props.user.id?(s(),c("div",z,[e.project.status_id==1?(s(),c("div",F,[u(I,{onClick:$},{default:n(()=>[i(" Batal ")]),_:1}),u(x,{as:"a",href:p.route("project.edit",e.project)},{default:n(()=>[i(" Ubah Data ")]),_:1},8,["href"])])):e.project.status_id==2?(s(),l(x,{key:1,class:"mr-2",onClick:b},{default:n(()=>[R,i(" Mulai Proyek ")]),_:1})):e.project.status_id==3?(s(),l(x,{key:2,class:"mr-2",onClick:b},{default:n(()=>[E,i(" Proyek Selesai ")]),_:1})):f("",!0)])):f("",!0)]),t("div",null,[t("dl",U,[t("div",W,[Y,t("dd",q,[t("div",A,[i(d(e.project.status)+" ",1),G])])]),t("div",J,[K,t("dd",Q,[t("div",X,[i(d(e.project.finish_day)+" Hari ",1),t("span",Z," / "+d(C((y=e.project)==null?void 0:y.deadline_date)),1)])])]),t("div",tt,[et,t("dd",st,[t("div",ot,[i(d((g=(h=e.project.worker)==null?void 0:h.name)!=null?g:"-")+" ",1),rt])])]),t("div",at,[it,t("dd",dt,[t("div",lt,[i(d(e.project.user.name)+" ",1),nt])])])])]),e.project.status_id==1?(s(),c(k,{key:0},[t("h1",ct,"Total bids "+d(e.project.bid.length),1),t("div",mt,[t("ul",pt,[(s(!0),c(k,null,B(e.project.bid,m=>(s(),l(P,{bid:m},null,8,["bid"]))),256))])])],64)):(s(),c("div",_t,[t("div",ut,[t("nav",ft,[t("button",{class:_(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",o.value==1?"border-primary-600 text-primary-600":"text-gray-500 border-gray-300"]),onClick:a[0]||(a[0]=m=>o.value=1)}," Ringkasan ",2),t("button",{class:_(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",o.value==2?"border-cyan-600 text-cyan-600":"text-gray-500 border-gray-300 "]),onClick:a[1]||(a[1]=m=>o.value=2)}," Resources ",2),t("button",{class:_(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",o.value==3?"border-green-600 text-green-600":"text-gray-500 border-gray-300 "]),onClick:a[2]||(a[2]=m=>o.value=3)}," Conversation ",2),t("button",{class:_(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",o.value==4?"border-sky-600 text-sky-600":"text-gray-500 border-gray-300 "]),onClick:a[3]||(a[3]=m=>o.value=4)}," Progress ",2)])]),o.value==1?(s(),c("p",{key:0,class:"prose prose-sm lg:prose-lg xl:prose-2xl",innerHTML:e.project.desc},null,8,xt)):o.value==2?(s(),l(H,{key:1,project:e.project},null,8,["project"])):o.value==3?(s(),l(T,{key:2,project:e.project,chat:e.chat},null,8,["project","chat"])):f("",!0)]))])]}),_:1}))}};export{Ht as default};
