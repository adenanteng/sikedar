import"./moment.451bfd57.js";import{e as d,a as t,t as e,o as n}from"./app.0bfba96a.js";const i={class:"overflow-hidden bg-white bg-opacity-50 shadow-lg rounded-3xl border border-gray-300"},l=t("div",{class:"px-4 py-5 sm:px-6"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Ringkasan"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Personal details and application.")],-1),m={class:"border-t border-gray-200 px-4 py-5 sm:px-6"},_={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},p={class:"sm:col-span-2"},x=t("dt",{class:"text-sm font-medium text-gray-500"},"Proyek",-1),g={class:"mt-1 text-sm text-gray-900"},h={class:"sm:col-span-1"},y=t("dt",{class:"text-sm font-medium text-gray-500"},"Owner",-1),u={class:"mt-1 text-sm text-gray-900"},f={class:"sm:col-span-1"},v=t("dt",{class:"text-sm font-medium text-gray-500"},"Worker",-1),b={class:"mt-1 text-sm text-gray-900"},j={class:"sm:col-span-1"},k=t("dt",{class:"text-sm font-medium text-gray-500"},"Harga",-1),w={class:"mt-1 text-sm text-gray-900"},B={class:"sm:col-span-2"},S=t("dt",{class:"text-sm font-medium text-gray-500"},"Keterangan",-1),H=["innerHTML"],M={__name:"SummarySection",props:{project:Object},setup(a){const s=a;function c(o){return(o/1).toFixed(0).replace(".","").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return(o,r)=>(n(),d("div",i,[l,t("div",m,[t("dl",_,[t("div",p,[x,t("dd",g,e(s.project.name),1)]),t("div",h,[y,t("dd",u,e(s.project.user.name),1)]),t("div",f,[v,t("dd",b,e(s.project.worker.name),1)]),t("div",j,[k,t("dd",w,"Rp "+e(c(s.project.price)),1)]),t("div",B,[S,t("dd",{class:"mt-1 text-sm text-gray-900 prose prose-sm lg:prose-lg xl:prose-2xl",innerHTML:s.project.desc},null,8,H)])])])]))}};export{M as default};
