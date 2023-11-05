import{o as k,e as $,a as e,T as I,d as p,c as P,w as s,t as c,b as t,u as r,g as o,n as y,p as T,v as F,M as A,l as L}from"./app.8a68db54.js";import"./helper.e9fc3b37.js";import{_ as x}from"./PrimaryButton.d2153405.js";/* empty css                 */import"./moment.9709ab41.js";import{_ as N}from"./CourseLayout.51748b8a.js";import{a as w}from"./DialogModal.988adade.js";import{_ as z}from"./InputLabel.e4568345.js";import{_ as D}from"./InputError.e6515c15.js";import{_ as E}from"./SecondaryButton.98ac52e3.js";import"./Banner.86bd642e.js";import"./DarkmodeToggle.934f6f82.js";import"./PreviousButton.39e4aeb8.js";import"./transition.752cda3c.js";function f(v,a){return k(),$("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])}const V={class:""},J=e("div",{class:"relative overflow-hidden pt-32 pb-96 lg:pt-10"},[e("div",{class:"relative mx-auto max-w-7xl px-6 text-center lg:px-8"},[e("div",{class:"mx-auto max-w-2xl lg:max-w-4xl"},[e("h2",{class:"text-lg font-semibold leading-8 text-primary-600"},"#kamubelumbayar"),e("p",{class:"mt-2 text-4xl font-bold tracking-tight text-gray-900"},"Lorem ipsum dolor"),e("p",{class:"mt-6 text-lg leading-8 text-gray-600"},"Langkah yang tepat untuk berinvestasi kepada ilmu pengetahuan yang baru di bidang IT.")])])],-1),O={class:"flow-root pb-32 lg:pb-40"},U={class:"relative -mt-80"},q={class:"relative z-10 mx-auto max-w-7xl px-6 lg:px-8"},G={class:"mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-1 lg:gap-8"},H={class:"flex flex-col rounded-3xl bg-white bg-opacity-50 shadow-xl border border-gray-300"},K={class:"p-8 sm:p-10"},Q={class:"text-lg font-semibold leading-8 tracking-tight text-primary-600"},W={class:"mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900"},X={class:"mt-6 text-base leading-7 text-gray-600"},Y={class:"flex flex-1 flex-col p-2"},Z={class:"flex flex-1 flex-col justify-between rounded-3xl bg-gray-100 p-6 sm:p-8"},ee={role:"list",class:"space-y-6"},se={class:"flex items-start"},te={class:"flex-shrink-0"},oe=e("p",{class:"ml-3 text-sm leading-6 text-gray-600"},"Sekali bayar saja",-1),ae={class:"flex items-start"},ie={class:"flex-shrink-0"},le=e("p",{class:"ml-3 text-sm leading-6 text-gray-600"},"Akses kelas selamanya",-1),re={class:"flex items-start"},ne={class:"flex-shrink-0"},ce=e("p",{class:"ml-3 text-sm leading-6 text-gray-600"},"Materi belajar terbaru",-1),de={class:"mt-8"},me={class:"relative mx-auto mt-8 max-w-7xl px-6 lg:px-8"},ue={class:"mx-auto max-w-md lg:max-w-4xl"},_e={class:"flex flex-col gap-6 rounded-3xl p-8 border border-gray-300 sm:p-10 lg:flex-row lg:items-center lg:gap-8"},pe={class:"lg:min-w-0 lg:flex-1"},ge=e("h3",{class:"text-lg font-semibold leading-8 tracking-tight text-primary-600"},"Sudah bayar?",-1),he={class:"mt-2 text-base leading-7 text-gray-600"},xe={class:"font-semibold text-gray-900"},fe=e("span",{"aria-hidden":"true"},"\u2192",-1),ve=e("div",{class:"flex justify-center p-5 mb-5 border-b border-gray-300"},[e("img",{src:"/img/vendor/PERMATA.svg",class:"w-52"})],-1),be={class:"grid grid-cols-2 justify-between gap-2"},ye=e("div",{class:""}," Jumlah Transfer ",-1),we={class:"text-right font-medium"},ke=e("div",{class:""}," Berita Transfer ",-1),je={class:"text-right font-medium"},Ce=e("div",{class:""}," Nomor Rekening ",-1),Se=e("div",{class:"text-right font-medium"}," 0808080808 ",-1),Be=e("div",{class:""}," Nama Rekening ",-1),Me=e("div",{class:"text-right font-medium"}," Sikedar Tech ",-1),Re=e("div",{class:"bg-amber-50 border border-gray-300 rounded-3xl p-2 mt-2"}," Mohon untuk transfer sesuai dengan jumlah yang tertera. ",-1),$e={class:"flex justify-between items-center"},Ie=e("div",{class:"flex justify-center p-5 mb-5 border-b border-gray-300"},[e("img",{src:"/img/vendor/PERMATA.svg",class:"w-52"})],-1),Pe={class:"grid grid-cols-6 justify-between gap-5"},Te={class:"col-span-6 sm:col-span-4"},Fe={class:"mt-2"},Qe={__name:"Join",props:{course:Object},setup(v){const a=v,i=I({course_id:a.course.id,photo:null}),j=()=>{n.value&&(i.photo=n.value.files[0]),i.post(route("courseSubscribe.store",a.course),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{g(),R()},onFinish:()=>{i.reset(),d.value=null}})},u=p(!1),_=p(!1),d=p(null),n=p(null),C=()=>{u.value=!0},S=()=>{_.value=!0},g=()=>{u.value=!1,_.value=!1,d.value=null,i.reset()},B=()=>{n.value.click()},M=()=>{const l=n.value.files[0];if(!l)return;const m=new FileReader;m.onload=b=>{d.value=b.target.result},m.readAsDataURL(l)},R=()=>{var l;(l=n.value)!=null&&l.value&&(n.value.value=null)};function h(l){return l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}return(l,m)=>(k(),P(N,{title:a.course.name},{default:s(()=>[e("div",V,[J,e("div",O,[e("div",U,[e("div",q,[e("div",G,[e("div",H,[e("div",K,[e("h3",Q,c(a.course.name),1),e("div",W," Rp "+c(h(a.course.price))+" ",1),e("p",X,c(a.course.desc),1)]),e("div",Y,[e("div",Z,[e("ul",ee,[e("li",se,[e("div",te,[t(r(f),{class:"h-6 w-6 text-primary-600","aria-hidden":"true"})]),oe]),e("li",ae,[e("div",ie,[t(r(f),{class:"h-6 w-6 text-primary-600","aria-hidden":"true"})]),le]),e("li",re,[e("div",ne,[t(r(f),{class:"h-6 w-6 text-primary-600","aria-hidden":"true"})]),ce])]),e("div",de,[t(x,{class:"w-full justify-center",onClick:C},{default:s(()=>[o(" Mulai Belajar ")]),_:1})])])])])])])]),e("div",me,[e("div",ue,[e("div",_e,[e("div",pe,[ge,e("div",he,[o("Lorem ipsum dolor sit amet "),e("span",xe,"Rp "+c(h(a.course.price)),1),o(".")])]),e("div",null,[e("button",{class:"inline-block rounded-3xl bg-primary-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-primary-700 hover:bg-primary-100",onClick:S},[o(" Isi form bukti pembayaran "),fe])])])])])])]),t(w,{show:u.value,onClose:g},{title:s(()=>[o(" Lorem ipsum dolor sit amet ")]),content:s(()=>[ve,e("div",be,[ye,e("div",we," Rp "+c(h(a.course.price)),1),ke,e("div",je,c(l.$page.props.user.name),1),Ce,Se,Be,Me]),Re]),footer:s(()=>[e("div",$e,[o(" Sudah bayar? "),t(x,{class:y(["ml-3",{"opacity-25":r(i).processing}]),disabled:r(i).processing,onClick:m[0]||(m[0]=b=>{u.value=!1,_.value=!0})},{default:s(()=>[o(" Isi form bukti pembayaran ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"]),t(w,{show:_.value,onClose:g},{title:s(()=>[o(" Lorem ipsum dolor sit amet ")]),content:s(()=>[Ie,e("div",Pe,[e("div",Te,[e("input",{ref_key:"photoInput",ref:n,type:"file",class:"hidden",onChange:M},null,544),t(z,{for:"photo",value:"Foto"}),T(e("div",Fe,[e("span",{class:"block rounded-3xl w-40 h-40 bg-cover bg-no-repeat bg-center",style:A("background-image: url('"+d.value+"');")},null,4)],512),[[F,d.value]]),t(E,{class:"mt-2 mr-2",type:"button",onClick:L(B,["prevent"])},{default:s(()=>[o(" Foto bukti transfer ")]),_:1},8,["onClick"]),t(D,{message:r(i).errors.photo,class:"mt-2"},null,8,["message"])])])]),footer:s(()=>[t(x,{class:y(["ml-3",{"opacity-25":r(i).processing}]),disabled:r(i).processing,onClick:j},{default:s(()=>[o(" Simpan ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1},8,["title"]))}};export{Qe as default};