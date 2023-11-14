import{T as p,d as y,e as l,a as t,g,t as e,c as v,f as n,b as k,n as _,l as x,o as i}from"./app.dd9a0443.js";import{_ as u}from"./Badge.04d30d84.js";import"./moment.5469fc9a.js";const b={class:""},w={class:"font-medium text-gray-900"},B=t("i",{class:"fa-regular fa-umbrella-beach mr-2"},null,-1),j={class:""},P={key:0,class:""},S=t("div",{class:"px-4 py-5 sm:px-6"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Billing Proyek"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Informasi proyek")],-1),C={class:"px-4 py-5 sm:px-6"},N={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},$={class:"sm:col-span-1"},V=t("dt",{class:"text-sm font-medium text-gray-500"},"Proyek",-1),I={class:"mt-1 text-sm text-gray-900"},T={class:"sm:col-span-1"},A=t("dt",{class:"text-sm font-medium text-gray-500"},"Nominal Pembayaran",-1),L={class:"mt-1 text-sm text-gray-900"},M={class:"sm:col-span-1"},O=t("dt",{class:"text-sm font-medium text-gray-500"},"Worker",-1),z={class:"mt-1 text-sm text-gray-900"},D={class:"sm:col-span-1"},E=t("dt",{class:"text-sm font-medium text-gray-500"},"Owner",-1),F={class:"mt-1 text-sm text-gray-900"},R={class:"sm:col-span-1"},W=t("dt",{class:"text-sm font-medium text-gray-500"},"Status Proyek",-1),q={class:"mt-1 text-sm text-gray-900"},G={class:"sm:col-span-1"},H=t("dt",{class:"text-sm font-medium text-gray-500"},"Status Pembayaran",-1),J={class:"mt-1 text-sm text-gray-900"},K={key:0,class:"sm:col-span-1"},Q=t("dt",{class:"text-sm font-medium text-gray-500"},"Bukti transfer",-1),U={class:"mt-1 text-sm text-gray-900"},X=["src"],Y={class:"sm:col-span-2"},Z=t("dt",{class:"text-sm font-medium text-gray-500"},"Aksi",-1),tt={class:"mt-1 text-sm text-gray-900"},st={role:"list",class:"divide-y divide-gray-300 rounded-3xl border border-gray-300"},et={class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},ot=t("div",{class:"flex w-0 flex-1 items-center"},null,-1),it={class:"ml-4 flex-shrink-0"},at=["href"],lt={key:0,class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},nt=t("div",{class:"flex w-0 flex-1 items-center"},null,-1),rt={class:"ml-4 flex-shrink-0"},dt={key:1,class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},ct=t("div",{class:"flex w-0 flex-1 items-center"},null,-1),mt={class:"ml-4 flex-shrink-0"},ft={__name:"BillingList",props:{item:Object},setup(f){const s=f,d=p({project_id:s.item.id,status_id:null}),c=a=>{d.status_id=a,d.post(route("projectBilling.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{},onFinish:()=>{d.reset()}})},r=y(!1);function h(a){return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return(a,o)=>(i(),l("li",null,[t("button",{onClick:o[0]||(o[0]=m=>r.value=!r.value),class:"flex w-full justify-between px-6 py-4"},[t("div",b,[t("p",w,[B,g(" "+e(s.item.name),1)])]),t("div",j,[s.item.media[0]?(i(),v(u,{key:0,name:"Ada foto",class:"text-amber-600 bg-amber-100 mr-5"})):n("",!0),k(u,{name:s.item.billing,class:_(["mr-5",s.item.color])},null,8,["name","class"]),t("i",{class:_(["fa-regular text-gray-900 w-5",r.value?"fa-angle-down":"fa-angle-right"])},null,2)])]),r.value?(i(),l("div",P,[S,t("div",C,[t("dl",N,[t("div",$,[V,t("dd",I,e(s.item.name),1)]),t("div",T,[A,t("dd",L,"Rp "+e(h(s.item.price)),1)]),t("div",M,[O,t("dd",z,e(s.item.worker.name),1)]),t("div",D,[E,t("dd",F,e(s.item.user.name),1)]),t("div",R,[W,t("dd",q,e(s.item.status),1)]),t("div",G,[H,t("dd",J,e(s.item.billing),1)]),s.item.media[0]?(i(),l("div",K,[Q,t("dd",U,[t("img",{src:s.item.media[0].original_url,class:"rounded-3xl max-w-sm"},null,8,X)])])):n("",!0),t("div",Y,[Z,t("dd",tt,[t("ul",st,[t("li",et,[ot,t("div",it,[t("a",{target:"_blank",href:a.route("project.show",s.item),class:"font-medium text-primary-600 hover:text-indigo-500"},"Lihat Proyek",8,at)])]),s.item.status_id==2&&s.item.media[0]?(i(),l("li",lt,[nt,t("div",rt,[t("button",{onClick:o[1]||(o[1]=x(m=>c(3),["prevent"])),class:"font-medium text-primary-600"},"Mulai Proyek")])])):n("",!0),s.item.status_id==4?(i(),l("li",dt,[ct,t("div",mt,[t("button",{onClick:o[2]||(o[2]=x(m=>c(5),["prevent"])),class:"font-medium text-primary-600"},"Tandai sudah dibayar")])])):n("",!0)])])])])])])):n("",!0)]))}};export{ft as default};
