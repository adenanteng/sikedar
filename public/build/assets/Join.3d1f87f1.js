import{o as k,e as R,a as e,T as I,d as p,c as P,w as t,t as c,b as o,u as r,g as a,n as y,p as T,v as F,M as A,l as L}from"./app.b82d6052.js";import"./helper.e9fc3b37.js";import{_ as x}from"./PrimaryButton.b57c35fd.js";/* empty css                 */import"./moment.9709ab41.js";import{_ as N}from"./CourseLayout.5f6d49ab.js";import{a as w}from"./DialogModal.76352e17.js";import{_ as z}from"./InputLabel.9e004076.js";import{_ as D}from"./InputError.1239f392.js";import{_ as E}from"./SecondaryButton.c9b72208.js";import"./Banner.e1322f35.js";import"./DarkmodeToggle.75454c72.js";import"./PreviousButton.e18ddc1e.js";import"./transition.3992d2e2.js";function f(v,l){return k(),R("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])}const V={class:""},J=e("div",{class:"relative overflow-hidden pt-32 pb-96 lg:pt-10"},[e("div",{class:"relative mx-auto max-w-7xl px-6 text-center lg:px-8"},[e("div",{class:"mx-auto max-w-2xl lg:max-w-4xl"},[e("h2",{class:"text-lg font-semibold leading-8 text-primary-600"},"#kamubelumbayar"),e("p",{class:"mt-2 text-4xl font-bold tracking-tight text-gray-900"},"Lorem ipsum dolor"),e("p",{class:"mt-6 text-lg leading-8 text-gray-600"},"Langkah yang tepat untuk berinvestasi kepada ilmu pengetahuan yang baru di bidang IT.")])])],-1),K={class:"flow-root pb-32 lg:pb-40"},O={class:"relative -mt-80"},U={class:"relative z-10 mx-auto max-w-7xl px-6 lg:px-8"},q={class:"mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-1 lg:gap-8"},G={class:"flex flex-col rounded-3xl bg-white bg-opacity-50 shadow-xl border border-gray-300"},H={class:"p-8 sm:p-10"},Q={class:"text-lg font-semibold leading-8 tracking-tight text-primary-600"},W={class:"mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900"},X={class:"mt-6 text-base leading-7 text-gray-600"},Y={class:"flex flex-1 flex-col p-2"},Z={class:"flex flex-1 flex-col justify-between rounded-3xl bg-gray-100 p-6 sm:p-8"},ee={role:"list",class:"space-y-6"},se={class:"flex items-start"},te={class:"flex-shrink-0"},oe=e("p",{class:"ml-3 text-sm leading-6 text-gray-600"},"Sekali bayar saja",-1),ae={class:"flex items-start"},ie={class:"flex-shrink-0"},le=e("p",{class:"ml-3 text-sm leading-6 text-gray-600"},"Akses kelas selamanya",-1),re={class:"flex items-start"},ne={class:"flex-shrink-0"},ce=e("p",{class:"ml-3 text-sm leading-6 text-gray-600"},"Materi belajar terbaru",-1),de={class:"mt-8"},me=e("p",{class:"mt-1 text-sm text-gray-600"},"* Kelas hanya untuk peserta",-1),ue={class:"relative mx-auto mt-8 max-w-7xl px-6 lg:px-8"},_e={class:"mx-auto max-w-md lg:max-w-4xl"},pe={class:"flex flex-col gap-6 rounded-3xl p-8 border border-gray-300 sm:p-10 lg:flex-row lg:items-center lg:gap-8"},ge={class:"lg:min-w-0 lg:flex-1"},he=e("h3",{class:"text-lg font-semibold leading-8 tracking-tight text-primary-600"},"Sudah bayar?",-1),xe={class:"mt-2 text-base leading-7 text-gray-600"},fe={class:"font-semibold text-gray-900"},ve=["disabled"],be=e("span",{"aria-hidden":"true"},"\u2192",-1),ye=e("div",{class:"flex justify-center p-5 mb-5 border-b border-gray-300"},[e("img",{src:"/img/vendor/PERMATA.svg",class:"w-52"})],-1),we={class:"grid grid-cols-2 justify-between gap-2"},ke=e("div",{class:""}," Jumlah Transfer ",-1),je={class:"text-right font-medium"},Ce=e("div",{class:""}," Berita Transfer ",-1),Se={class:"text-right font-medium"},$e=e("div",{class:""}," Nomor Rekening ",-1),Be=e("div",{class:"text-right font-medium"}," 0808080808 ",-1),Me=e("div",{class:""}," Nama Rekening ",-1),Re=e("div",{class:"text-right font-medium"}," Sikedar Tech ",-1),Ie=e("div",{class:"bg-amber-50 border border-gray-300 rounded-3xl p-2 mt-2"}," Mohon untuk transfer sesuai dengan jumlah yang tertera. ",-1),Pe={class:"flex justify-between items-center"},Te=e("div",{class:"flex justify-center p-5 mb-5 border-b border-gray-300"},[e("img",{src:"/img/vendor/PERMATA.svg",class:"w-52"})],-1),Fe={class:"grid grid-cols-6 justify-between gap-5"},Ae={class:"col-span-6 sm:col-span-4"},Le={class:"mt-2"},Xe={__name:"Join",props:{course:Object},setup(v){const l=v,i=I({course_id:l.course.id,photo:null}),j=()=>{n.value&&(i.photo=n.value.files[0]),i.post(route("courseSubscribe.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{g(),M()},onFinish:()=>{i.reset(),d.value=null}})},u=p(!1),_=p(!1),d=p(null),n=p(null),C=()=>{u.value=!0},S=()=>{_.value=!0},g=()=>{u.value=!1,_.value=!1,d.value=null,i.reset()},$=()=>{n.value.click()},B=()=>{const s=n.value.files[0];if(!s)return;const m=new FileReader;m.onload=b=>{d.value=b.target.result},m.readAsDataURL(s)},M=()=>{var s;(s=n.value)!=null&&s.value&&(n.value.value=null)};function h(s){return s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}return(s,m)=>(k(),P(N,{title:l.course.name},{default:t(()=>[e("div",V,[J,e("div",K,[e("div",O,[e("div",U,[e("div",q,[e("div",G,[e("div",H,[e("h3",Q,c(l.course.name),1),e("div",W," Rp "+c(h(l.course.price))+" ",1),e("p",X,c(l.course.desc),1)]),e("div",Y,[e("div",Z,[e("ul",ee,[e("li",se,[e("div",te,[o(r(f),{class:"h-6 w-6 text-primary-600","aria-hidden":"true"})]),oe]),e("li",ae,[e("div",ie,[o(r(f),{class:"h-6 w-6 text-primary-600","aria-hidden":"true"})]),le]),e("li",re,[e("div",ne,[o(r(f),{class:"h-6 w-6 text-primary-600","aria-hidden":"true"})]),ce])]),e("div",de,[o(x,{disabled:s.$page.props.user.role_id==2,class:"w-full justify-center",onClick:C},{default:t(()=>[a(" Mulai Belajar ")]),_:1},8,["disabled"]),me])])])])])])]),e("div",ue,[e("div",_e,[e("div",pe,[e("div",ge,[he,e("div",xe,[a("Lorem ipsum dolor sit amet "),e("span",fe,"Rp "+c(h(l.course.price)),1),a(".")])]),e("div",null,[e("button",{class:"inline-block rounded-3xl bg-primary-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-primary-700 disabled:opacity-25",onClick:S,disabled:s.$page.props.user.role_id==2},[a(" Isi form bukti pembayaran "),be],8,ve)])])])])])]),o(w,{show:u.value,onClose:g},{title:t(()=>[a(" Lorem ipsum dolor sit amet ")]),content:t(()=>[ye,e("div",we,[ke,e("div",je," Rp "+c(h(l.course.price)),1),Ce,e("div",Se,c(s.$page.props.user.name),1),$e,Be,Me,Re]),Ie]),footer:t(()=>[e("div",Pe,[a(" Sudah bayar? "),o(x,{class:y(["ml-3",{"opacity-25":r(i).processing}]),disabled:r(i).processing,onClick:m[0]||(m[0]=b=>{u.value=!1,_.value=!0})},{default:t(()=>[a(" Isi form bukti pembayaran ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"]),o(w,{show:_.value,onClose:g},{title:t(()=>[a(" Lorem ipsum dolor sit amet ")]),content:t(()=>[Te,e("div",Fe,[e("div",Ae,[e("input",{ref_key:"photoInput",ref:n,type:"file",class:"hidden",onChange:B},null,544),o(z,{for:"photo",value:"Foto"}),T(e("div",Le,[e("span",{class:"block rounded-3xl w-40 h-40 bg-cover bg-no-repeat bg-center",style:A("background-image: url('"+d.value+"');")},null,4)],512),[[F,d.value]]),o(E,{class:"mt-2 mr-2",type:"button",onClick:L($,["prevent"])},{default:t(()=>[a(" Foto bukti transfer ")]),_:1},8,["onClick"]),o(D,{message:r(i).errors.photo,class:"mt-2"},null,8,["message"])])])]),footer:t(()=>[o(x,{class:y(["ml-3",{"opacity-25":r(i).processing}]),disabled:r(i).processing,onClick:j},{default:t(()=>[a(" Simpan ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1},8,["title"]))}};export{Xe as default};