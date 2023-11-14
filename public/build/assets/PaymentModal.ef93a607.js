import{T as C,d as u,e as P,a as e,g as i,b as r,w as o,F as $,o as F,t as h,n as v,u as n,p as B,v as M,M as N,l as R}from"./app.c66173a4.js";import{a as g}from"./DialogModal.e71578ca.js";import{_ as T}from"./InputLabel.9b9d421d.js";import{_ as A}from"./SecondaryButton.415c187e.js";import{_ as b}from"./PrimaryButton.a2108093.js";import{_ as I}from"./InputError.6f56a6d9.js";import"./moment.7a7b8ba5.js";const V={class:"rounded-3xl bg-yellow-50 p-4 mt-10"},L={class:"flex"},D=e("div",{class:"flex-shrink-0"},[e("i",{class:"fa-regular fa-exclamation-triangle text-yellow-700"})],-1),E={class:"ml-3 w-full"},z=e("h3",{class:"text-sm font-medium text-yellow-800"},"Attention needed",-1),J={class:"mt-2 text-sm text-yellow-700 flex justify-between w-full"},O=e("p",null,"Silahkan lakukan pembayaran terlebih dahulu untuk memulai proyek.",-1),U=e("i",{class:"fa-regular fa-arrow-right ml-1"},null,-1),q=e("div",{class:"flex justify-center p-5 mb-5 border-b border-gray-300"},[e("img",{src:"/img/vendor/PERMATA.svg",class:"w-52"})],-1),G={class:"grid grid-cols-2 justify-between gap-2"},H=e("div",{class:""}," Jumlah Transfer ",-1),K={class:"text-right font-medium"},Q=e("div",{class:""}," Berita Transfer ",-1),W={class:"text-right font-medium"},X=e("div",{class:""}," Nomor Rekening ",-1),Y=e("div",{class:"text-right font-medium"}," 0808080808 ",-1),Z=e("div",{class:""}," Nama Rekening ",-1),ee=e("div",{class:"text-right font-medium"}," Sikedar Tech ",-1),se=e("div",{class:"bg-amber-50 border border-gray-300 rounded-3xl p-2 mt-2"}," Mohon untuk transfer sesuai dengan jumlah yang tertera. ",-1),te={class:"flex justify-between items-center"},oe=e("div",{class:"flex justify-center p-5 mb-5 border-b border-gray-300"},[e("img",{src:"/img/vendor/PERMATA.svg",class:"w-52"})],-1),ae={class:"grid grid-cols-6 justify-between gap-5"},le={class:"col-span-6 sm:col-span-4"},ie={class:"mt-2"},fe={__name:"PaymentModal",props:{project:Object,modelValue:String|Number},emits:["update:modelValue"],setup(w){const p=w,s=C({project_id:p.project.id,photo:null,status_id:2}),y=()=>{a.value&&(s.photo=a.value.files[0]),s.post(route("projectBilling.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{_(),j()},onFinish:()=>{s.reset()}})},c=u(!1),m=u(!1),d=u(null),a=u(null),_=()=>{c.value=!1,m.value=!1,d.value=null,s.reset()},k=()=>{a.value.click()},x=()=>{const t=a.value.files[0];if(!t)return;const l=new FileReader;l.onload=f=>{d.value=f.target.result},l.readAsDataURL(t)},j=()=>{var t;(t=a.value)!=null&&t.value&&(a.value.value=null)};function S(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}return(t,l)=>(F(),P($,null,[e("div",V,[e("div",L,[D,e("div",E,[z,e("div",J,[O,e("button",{onClick:l[0]||(l[0]=f=>c.value=!0),class:"font-medium text-yellow-900"},[i(" Link Pembayaran "),U])])])])]),r(g,{show:c.value,onClose:_},{title:o(()=>[i(" Lorem ipsum dolor sit amet ")]),content:o(()=>[q,e("div",G,[H,e("div",K," Rp "+h(S(p.project.price)),1),Q,e("div",W,h(t.$page.props.user.name),1),X,Y,Z,ee]),se]),footer:o(()=>[e("div",te,[i(" Sudah bayar? "),r(b,{class:v(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:l[1]||(l[1]=f=>{c.value=!1,m.value=!0})},{default:o(()=>[i(" Isi form bukti pembayaran ")]),_:1},8,["class","disabled"])])]),_:1},8,["show"]),r(g,{show:m.value,onClose:_},{title:o(()=>[i(" Lorem ipsum dolor sit amet ")]),content:o(()=>[oe,e("div",ae,[e("div",le,[e("input",{ref_key:"photoInput",ref:a,type:"file",class:"hidden",onChange:x},null,544),r(T,{for:"photo",value:"Foto"}),B(e("div",ie,[e("span",{class:"block rounded-3xl w-40 h-40 bg-cover bg-no-repeat bg-center",style:N("background-image: url('"+d.value+"');")},null,4)],512),[[M,d.value]]),r(A,{class:"mt-2 mr-2",type:"button",onClick:R(k,["prevent"])},{default:o(()=>[i(" Foto bukti transfer ")]),_:1},8,["onClick"]),r(I,{message:n(s).errors.photo,class:"mt-2"},null,8,["message"])])])]),footer:o(()=>[r(b,{class:v(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:y},{default:o(()=>[i(" Simpan ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])],64))}};export{fe as default};