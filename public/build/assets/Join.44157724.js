import{o as C,e as P,a as e,T,d as p,c as F,w as o,t as d,b as s,u as a,g as l,n as y,q as A,v as L,M as N,m as V}from"./app.216e3750.js";import"./helper.e9fc3b37.js";import{_ as x}from"./PrimaryButton.2b53a473.js";/* empty css                 */import"./moment.9709ab41.js";import{_ as z}from"./CourseLayout.91d731dc.js";import{a as w}from"./DialogModal.39139a46.js";import{_ as k}from"./InputLabel.729c8a01.js";import{_ as D}from"./TextInput.3205d8e4.js";import{_ as j}from"./InputError.a20616d0.js";import{_ as E}from"./SecondaryButton.de11a123.js";import"./DarkmodeToggle.fee80feb.js";import"./PreviousButton.d518860b.js";import"./transition.119eb7ae.js";function v(b,i){return C(),P("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])}const q={class:""},J=e("div",{class:"relative overflow-hidden pt-32 pb-96 lg:pt-10"},[e("div",{class:"relative mx-auto max-w-7xl px-6 text-center lg:px-8"},[e("div",{class:"mx-auto max-w-2xl lg:max-w-4xl"},[e("h2",{class:"text-lg font-semibold leading-8 text-primary-600"},"#kamubelumbayar"),e("p",{class:"mt-2 text-4xl font-bold tracking-tight text-gray-900"},"Lorem ipsum dolor"),e("p",{class:"mt-6 text-lg leading-8 text-gray-600"},"Langkah yang tepat untuk berinvestasi kepada ilmu pengetahuan yang baru di bidang IT.")])])],-1),U={class:"flow-root pb-32 lg:pb-40"},K={class:"relative -mt-80"},O={class:"relative z-10 mx-auto max-w-7xl px-6 lg:px-8"},G={class:"mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-1 lg:gap-8"},H={class:"flex flex-col rounded-3xl bg-white bg-opacity-50 shadow-xl border border-gray-300"},Q={class:"p-8 sm:p-10"},W={class:"text-lg font-semibold leading-8 tracking-tight text-primary-600"},X={class:"mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900"},Y={class:"mt-6 text-base leading-7 text-gray-600"},Z={class:"flex flex-1 flex-col p-2"},ee={class:"flex flex-1 flex-col justify-between rounded-3xl bg-gray-100 p-6 sm:p-8"},se={role:"list",class:"space-y-6"},te={class:"flex items-start"},oe={class:"flex-shrink-0"},ae=e("p",{class:"ml-3 text-sm leading-6 text-gray-600"},"Sekali bayar saja",-1),le={class:"flex items-start"},ie={class:"flex-shrink-0"},re=e("p",{class:"ml-3 text-sm leading-6 text-gray-600"},"Akses kelas selamanya",-1),ne={class:"flex items-start"},ce={class:"flex-shrink-0"},de=e("p",{class:"ml-3 text-sm leading-6 text-gray-600"},"Materi belajar terbaru",-1),me={class:"mt-8"},ue={class:"relative mx-auto mt-8 max-w-7xl px-6 lg:px-8"},_e={class:"mx-auto max-w-md lg:max-w-4xl"},pe={class:"flex flex-col gap-6 rounded-3xl p-8 border border-gray-300 sm:p-10 lg:flex-row lg:items-center lg:gap-8"},ge={class:"lg:min-w-0 lg:flex-1"},he=e("h3",{class:"text-lg font-semibold leading-8 tracking-tight text-primary-600"},"Sudah bayar?",-1),fe={class:"mt-2 text-base leading-7 text-gray-600"},xe={class:"font-semibold text-gray-900"},ve=e("span",{"aria-hidden":"true"},"\u2192",-1),be=e("div",{class:"flex justify-center p-5 mb-5 border-b border-gray-300"},[e("img",{src:"/img/vendor/PERMATA.svg",class:"w-52"})],-1),ye={class:"grid grid-cols-2 justify-between gap-2"},we=e("div",{class:""}," Jumlah Transfer ",-1),ke={class:"text-right font-medium"},je=e("div",{class:""}," Berita Transfer ",-1),Ce={class:"text-right font-medium"},Se=e("div",{class:""}," Nomor Rekening ",-1),Be=e("div",{class:"text-right font-medium"}," 0808080808 ",-1),$e=e("div",{class:""}," Nama Rekening ",-1),Me=e("div",{class:"text-right font-medium"}," Sikedar Tech ",-1),Re=e("div",{class:"bg-amber-50 border border-gray-300 rounded-3xl p-2 mt-2"}," Mohon untuk transfer sesuai dengan jumlah yang tertera. ",-1),Ie={class:"flex justify-between items-center"},Pe=e("div",{class:"flex justify-center p-5 mb-5 border-b border-gray-300"},[e("img",{src:"/img/vendor/PERMATA.svg",class:"w-52"})],-1),Te={class:"grid grid-cols-6 justify-between gap-5"},Fe={class:"col-span-6 sm:col-span-4"},Ae={class:"mt-2"},Le={class:"col-span-6 sm:col-span-6"},Xe={__name:"Join",props:{course:Object},setup(b){const i=b,t=T({course_id:i.course.id,desc:null,photo:null}),S=()=>{n.value&&(t.photo=n.value.files[0]),t.post(route("course.subscribe",i.course),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{h(),I()},onFinish:()=>t.reset()})},m=p(!1),u=p(!1),g=p(null),n=p(null),B=()=>{m.value=!0},$=()=>{u.value=!0},h=()=>{m.value=!1,u.value=!1,t.reset()},M=()=>{n.value.click()},R=()=>{const r=n.value.files[0];if(!r)return;const c=new FileReader;c.onload=_=>{g.value=_.target.result},c.readAsDataURL(r)},I=()=>{var r;(r=n.value)!=null&&r.value&&(n.value.value=null)};function f(r){return r.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}return(r,c)=>(C(),F(z,{title:i.course.name},{default:o(()=>[e("div",q,[J,e("div",U,[e("div",K,[e("div",O,[e("div",G,[e("div",H,[e("div",Q,[e("h3",W,d(i.course.name),1),e("div",X," Rp "+d(f(i.course.price))+" ",1),e("p",Y,d(i.course.desc),1)]),e("div",Z,[e("div",ee,[e("ul",se,[e("li",te,[e("div",oe,[s(a(v),{class:"h-6 w-6 text-primary-600","aria-hidden":"true"})]),ae]),e("li",le,[e("div",ie,[s(a(v),{class:"h-6 w-6 text-primary-600","aria-hidden":"true"})]),re]),e("li",ne,[e("div",ce,[s(a(v),{class:"h-6 w-6 text-primary-600","aria-hidden":"true"})]),de])]),e("div",me,[s(x,{class:"w-full justify-center",onClick:B},{default:o(()=>[l(" Mulai Belajar ")]),_:1})])])])])])])]),e("div",ue,[e("div",_e,[e("div",pe,[e("div",ge,[he,e("div",fe,[l("Lorem ipsum dolor sit amet "),e("span",xe,"Rp "+d(f(i.course.price)),1),l(".")])]),e("div",null,[e("button",{class:"inline-block rounded-3xl bg-primary-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-primary-700 hover:bg-primary-100",onClick:$},[l(" Isi form bukti pembayaran "),ve])])])])])])]),s(w,{show:m.value,onClose:h},{title:o(()=>[l(" Lorem ipsum dolor sit amet ")]),content:o(()=>[be,e("div",ye,[we,e("div",ke," Rp "+d(f(i.course.price)),1),je,e("div",Ce,d(r.$page.props.user.name),1),Se,Be,$e,Me]),Re]),footer:o(()=>[e("div",Ie,[l(" Sudah bayar? "),s(x,{class:y(["ml-3",{"opacity-25":a(t).processing}]),disabled:a(t).processing,onClick:c[0]||(c[0]=_=>{m.value=!1,u.value=!0})},{default:o(()=>[l(" Isi form bukti pembayaran ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"]),s(w,{show:u.value,onClose:h},{title:o(()=>[l(" Lorem ipsum dolor sit amet ")]),content:o(()=>[Pe,e("div",Te,[e("div",Fe,[e("input",{ref_key:"photoInput",ref:n,type:"file",class:"hidden",onChange:R},null,544),s(k,{for:"photo",value:"Foto"}),A(e("div",Ae,[e("span",{class:"block rounded-3xl w-40 h-40 bg-cover bg-no-repeat bg-center",style:N("background-image: url('"+g.value+"');")},null,4)],512),[[L,g.value]]),s(E,{class:"mt-2 mr-2",type:"button",onClick:V(M,["prevent"])},{default:o(()=>[l(" Foto bukti transfer ")]),_:1},8,["onClick"]),s(j,{message:a(t).errors.photo,class:"mt-2"},null,8,["message"])]),e("div",Le,[s(k,{for:"name",value:"Keterangan"}),s(D,{id:"name",modelValue:a(t).desc,"onUpdate:modelValue":c[1]||(c[1]=_=>a(t).desc=_),type:"text",class:"mt-1 block w-full",autocomplete:"name",required:""},null,8,["modelValue"]),s(j,{message:a(t).errors.desc,class:"mt-2"},null,8,["message"])])])]),footer:o(()=>[s(x,{class:y(["ml-3",{"opacity-25":a(t).processing}]),disabled:a(t).processing,onClick:S},{default:o(()=>[l(" Simpan ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1},8,["title"]))}};export{Xe as default};
