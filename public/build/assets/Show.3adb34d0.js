import{T as S,d as b,c as a,w as n,o as s,b as j,a as e,t as p,e as u,g as c,f as d,F as _,u as g,j as v,h as B,n as f}from"./app.5fe5a492.js";import{h as k}from"./moment.9709ab41.js";import{_ as y}from"./PrimaryButton.9fd7c7a2.js";import{_ as D}from"./AppLayout.087c43d8.js";import{_ as P}from"./PreviousButton.a8cd6be3.js";import I from"./BidList.289e77fa.js";import M from"./ChatSection.6fb9b1f8.js";import N from"./MediaSection.65d116e1.js";import{_ as T}from"./DangerButton.06745cd7.js";import V from"./ProgressSection.9739d554.js";import H from"./SummarySection.afcc70b1.js";import O from"./PaymentModal.d935e107.js";import"./Banner.04ef7bcd.js";import"./DarkmodeToggle.ffa32471.js";import"./helper.e9fc3b37.js";import"./transition.8816b452.js";import"./Badge.7321306b.js";import"./moment.f886bcbf.js";import"./InputError.71a487b6.js";import"./TextInput.287e15df.js";import"./InputLabel.e924d67e.js";import"./TextAreaInput.7e68f5ca.js";import"./ActionSection.dbbaf559.js";import"./SectionTitle.c1799942.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.5ec5cf18.js";import"./SecondaryButton.1b7a125d.js";const z={class:"max-w-7xl mx-auto items-start"},F={class:"flex justify-between gap-3"},R={class:""},A={class:"text-xl font-medium leading-6 text-gray-900"},E={class:"flex items-center gap-2"},L=e("i",{class:"fa-duotone fa-paper-plane mr-2"},null,-1),U=e("i",{class:"fa-duotone fa-check mr-2"},null,-1),W=e("i",{class:"fa-duotone fa-paper-plane mr-2"},null,-1),Y={class:"mt-5 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 border border-gray-300 overflow-hidden rounded-3xl bg-white bg-opacity-50 shadow-lg md:grid-cols-4 md:divide-y-0 md:divide-x"},q={class:"px-4 py-5 sm:p-6"},G=e("dt",{class:"text-base font-normal text-gray-900"},"Status",-1),J={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},K={class:"flex items-baseline text-2xl font-semibold text-primary-600"},Q=e("span",{class:"ml-2 text-sm font-medium text-gray-500"},null,-1),X={class:"px-4 py-5 sm:p-6"},Z=e("dt",{class:"text-base font-normal text-gray-900"},"Deadline",-1),ee={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},te={class:"flex items-baseline text-2xl font-semibold text-primary-600"},se={class:"ml-2 text-sm font-medium text-gray-500"},oe={class:"px-4 py-5 sm:p-6"},re=e("dt",{class:"text-base font-normal text-gray-900"},"Worker",-1),ae={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},ie={class:"flex items-baseline text-2xl font-semibold text-primary-600"},de={key:1},le=e("span",{class:"ml-2 text-sm font-medium text-gray-500"},null,-1),ne={class:"px-4 py-5 sm:p-6"},ce=e("dt",{class:"text-base font-normal text-gray-900"},"Owner",-1),me={class:"mt-1 flex items-baseline justify-between md:block lg:flex"},pe={class:"flex items-baseline text-2xl font-semibold text-primary-600"},ue=e("span",{class:"ml-2 text-sm font-medium text-gray-500"},null,-1),_e={class:"mt-10 text-sm font-medium leading-6 text-gray-900"},fe={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"},ye={role:"list",class:"divide-y divide-gray-300 dark:divide-gray-600"},xe={key:2,class:"my-10"},be={class:"sticky top-0 z-40 backdrop-blur border-b border-gray-200 mb-10"},he={class:"-mb-px flex","aria-label":"Tabs"},qe={__name:"Show",props:{project:Object,chat:Object},setup(w){const t=w,m=S({status_id:null,deadline_date:null}),x=l=>{t.project.status_id==2&&(m.deadline_date=k().add(t.project.finish_day,"days").format()),m.status_id=l,m.patch(route("project.update",t.project),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{m.reset()}})},$=()=>{m.status_id=0,m.patch(route("project.update",t.project),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{m.reset()}})};b(null);function C(l){return k(l).format("DD MMM Y HH:mm")}const i=b(1);return b(!1),(l,o)=>(s(),a(D,{title:"Proyek",name:"Proyek",desc:"lorem ipsum"},{previous:n(()=>[j(P)]),default:n(()=>{var h;return[e("div",z,[e("div",F,[e("div",R,[e("h1",A,p(t.project.name),1)]),e("div",E,[t.project.user_id==l.$page.props.user.id?(s(),u(_,{key:0},[t.project.status_id==0||t.project.status_id==1?(s(),a(T,{key:0,onClick:$},{default:n(()=>[c(" Cancel ")]),_:1})):d("",!0),t.project.status_id==0||t.project.status_id==1?(s(),a(y,{key:1,as:"a",href:l.route("project.edit",t.project)},{default:n(()=>[c(" Ubah Data ")]),_:1},8,["href"])):d("",!0),t.project.status_id==2?(s(),a(y,{key:2,onClick:o[0]||(o[0]=r=>x(3))},{default:n(()=>[L,c(" Mulai Proyek ")]),_:1})):d("",!0),t.project.status_id==3?(s(),a(y,{key:3,onClick:o[1]||(o[1]=r=>x(4))},{default:n(()=>[U,c(" Proyek Selesai ")]),_:1})):d("",!0)],64)):d("",!0),l.$page.props.user.role_id==1?(s(),u(_,{key:1},[t.project.status_id==0?(s(),a(y,{key:0,onClick:o[2]||(o[2]=r=>x(1))},{default:n(()=>[W,c(" Approve ")]),_:1})):d("",!0)],64)):d("",!0)])]),e("div",null,[e("dl",Y,[e("div",q,[G,e("dd",J,[e("div",K,[c(p(t.project.status)+" ",1),Q])])]),e("div",X,[Z,e("dd",ee,[e("div",te,[c(p(t.project.finish_day)+" Hari ",1),e("span",se," / "+p(C((h=t.project)==null?void 0:h.deadline_date)),1)])])]),e("div",oe,[re,e("dd",ae,[e("div",ie,[t.project.worker?(s(),a(g(v),{key:0,href:l.route("user.show",t.project.worker)},{default:n(()=>{var r;return[c(p((r=t.project.worker)==null?void 0:r.name),1)]}),_:1},8,["href"])):(s(),u("span",de," - ")),le])])]),e("div",ne,[ce,e("dd",me,[e("div",pe,[j(g(v),{href:l.route("user.show",t.project.user)},{default:n(()=>{var r;return[c(p((r=t.project.user)==null?void 0:r.name),1)]}),_:1},8,["href"]),ue])])])])]),t.project.status_id==2?(s(),a(O,{key:0,project:t.project},null,8,["project"])):d("",!0),t.project.status_id<=1?(s(),u(_,{key:1},[e("h1",_e,"Total bids "+p(t.project.bid.length),1),e("div",fe,[e("ul",ye,[(s(!0),u(_,null,B(t.project.bid,r=>(s(),a(I,{bid:r},null,8,["bid"]))),256))])])],64)):(s(),u("div",xe,[e("div",be,[e("nav",he,[e("button",{class:f(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",i.value==1?"border-primary-600 text-primary-600":"text-gray-500 border-gray-300"]),onClick:o[3]||(o[3]=r=>i.value=1)}," Ringkasan ",2),e("button",{class:f(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",i.value==2?"border-cyan-600 text-cyan-600":"text-gray-500 border-gray-300 "]),onClick:o[4]||(o[4]=r=>i.value=2)}," Resources ",2),e("button",{class:f(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",i.value==3?"border-green-600 text-green-600":"text-gray-500 border-gray-300 "]),onClick:o[5]||(o[5]=r=>i.value=3)}," Conversation ",2),t.project.status_id!=2?(s(),u("button",{key:0,class:f(["w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm",i.value==4?"border-sky-600 text-sky-600":"text-gray-500 border-gray-300 "]),onClick:o[6]||(o[6]=r=>i.value=4)}," Progress ",2)):d("",!0)])]),i.value==1?(s(),a(H,{key:0,project:t.project},null,8,["project"])):i.value==2?(s(),a(N,{key:1,project:t.project},null,8,["project"])):i.value==3?(s(),a(M,{key:2,project:t.project,chat:t.chat},null,8,["project","chat"])):i.value==4?(s(),a(V,{key:3,project:t.project},null,8,["project"])):d("",!0)]))])]}),_:1}))}};export{qe as default};