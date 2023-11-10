import{T as b,d as k,e as o,a as t,t as e,g as n,b as w,n as p,F as c,f as d,l as h,o as a}from"./app.b82d6052.js";import{_ as C}from"./Badge.cc31b979.js";import{m as B}from"./moment.a89d14f3.js";const j={class:""},D={class:"font-medium text-gray-900"},L=t("i",{class:"fa-regular fa-triangle-exclamation text-red-600 mr-2"},null,-1),M={class:"text-gray-500 font-normal"},N={class:""},T={key:0,class:""},V=t("div",{class:"px-4 py-5 sm:px-6"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Informasi Pengaduan"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"},"Lorem ipsum dolor sit amet.")],-1),$={class:"px-4 py-5 sm:px-6"},A={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},I={class:"sm:col-span-1"},K=t("dt",{class:"text-sm font-medium text-gray-500"},"Tanggal",-1),S={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},F={class:"sm:col-span-1"},H=t("dt",{class:"text-sm font-medium text-gray-500"},"Kategori",-1),P={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},z={class:"sm:col-span-1"},E=t("dt",{class:"text-sm font-medium text-gray-500"},"Pelapor",-1),O={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},U={class:"sm:col-span-1"},Y=t("dt",{class:"text-sm font-medium text-gray-500"},"Terdakwa",-1),q={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},G={class:"sm:col-span-2"},J=t("dt",{class:"text-sm font-medium text-gray-500"},"Komentar",-1),Q={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},R={class:"sm:col-span-2"},W=t("dt",{class:"text-sm font-medium text-gray-500"},"Aksi",-1),X={class:"mt-1 text-sm text-gray-900"},Z={role:"list",class:"divide-y divide-gray-300 rounded-3xl border border-gray-300"},tt={class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},st=t("div",{class:"flex w-0 flex-1 items-center"},null,-1),et={class:"ml-4 flex-shrink-0"},ot=["href"],at=["href"],it={class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},mt=t("div",{class:"flex w-0 flex-1 items-center"},null,-1),nt={class:"ml-4 flex-shrink-0 space-x-5"},dt={__name:"ComplaintList",props:{item:Object},setup(y){var u,x,g;const s=y,l=b({id:s.item.id,user_id:(g=(u=s.item.course_comment)==null?void 0:u.user.id)!=null?g:(x=s.item.blog_comment)==null?void 0:x.user.id,status_id:null}),_=i=>{i?l.status_id=!0:l.status_id=!1,l.put(route("complaint.update",s.item),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{l.reset()}})},r=k(!1);function v(i){return B(i).format("DD MMM Y HH:mm")}return(i,m)=>(a(),o("li",null,[t("button",{onClick:m[0]||(m[0]=f=>r.value=!r.value),class:"flex w-full justify-between px-6 py-4"},[t("div",j,[t("p",D,[L,t("span",M,"#"+e(s.item.id),1),n(" "+e(s.item.user.name),1)])]),t("div",N,[w(C,{name:s.item.status,class:p(["mr-5",s.item.color])},null,8,["name","class"]),t("i",{class:p(["fa-regular text-gray-900 w-5",r.value?"fa-angle-down":"fa-angle-right"])},null,2)])]),r.value?(a(),o("div",T,[V,t("div",$,[t("dl",A,[t("div",I,[K,t("dd",S,e(v(s.item.created_at)),1)]),t("div",F,[H,t("dd",P,e(s.item.category),1)]),t("div",z,[E,t("dd",O,e(s.item.user.name),1)]),t("div",U,[Y,t("dd",q,[s.item.course?(a(),o(c,{key:0},[n(e(s.item.course_comment.user.name),1)],64)):s.item.blog?(a(),o(c,{key:1},[n(e(s.item.blog_comment.user.name),1)],64)):d("",!0)])]),t("div",G,[J,t("dd",Q,[s.item.course?(a(),o(c,{key:0},[n(e(s.item.course_comment.content),1)],64)):s.item.blog?(a(),o(c,{key:1},[n(e(s.item.blog_comment.content),1)],64)):d("",!0)])]),t("div",R,[W,t("dd",X,[t("ul",Z,[t("li",tt,[st,t("div",et,[s.item.course?(a(),o("a",{key:0,target:"_blank",href:i.route("landing.course.show",s.item.course),class:"font-medium text-primary-600 hover:text-indigo-500"}," Lihat Kelas ",8,ot)):s.item.blog?(a(),o("a",{key:1,target:"_blank",href:i.route("landing.blog.show",s.item.blog),class:"font-medium text-primary-600 hover:text-indigo-500"}," Lihat Artikel ",8,at)):d("",!0)])]),t("li",it,[mt,t("div",nt,[t("button",{onClick:m[1]||(m[1]=h(f=>_(!1),["prevent"])),class:"font-medium text-green-600"},"Abaikan"),t("button",{onClick:m[2]||(m[2]=h(f=>_(!0),["prevent"])),class:"font-medium text-red-600"},"Blokir User")])])])])])])])])):d("",!0)]))}};export{dt as default};
