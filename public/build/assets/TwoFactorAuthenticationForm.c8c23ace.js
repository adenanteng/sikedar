import{d as k,J as q,o as a,e as s,a as r,r as H,b as o,w as t,g as n,t as b,W as B,n as y,I as E,T as I,i as Q,k as U,c as v,f as c,u as T,F as D,h as j,K as z,O as V}from"./app.a3d6608a.js";import{_ as G}from"./ActionSection.df7ca2b6.js";import{a as J}from"./DialogModal.9637a5ec.js";import{_ as L}from"./InputError.b8b9b0af.js";import{_ as K}from"./PrimaryButton.f07c652b.js";import{_ as C}from"./SecondaryButton.a0061b06.js";import{_ as M}from"./TextInput.29f01202.js";import{_ as W}from"./DangerButton.7b06e6ab.js";import{_ as X}from"./InputLabel.c78931db.js";import"./SectionTitle.0195b737.js";import"./_plugin-vue_export-helper.cdc0426e.js";const Y={class:"mt-4"},g={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(h,{emit:w}){const l=k(!1),e=q({password:"",error:"",processing:!1}),u=k(null),_=()=>{axios.get(route("password.confirmation")).then(i=>{i.data.confirmed?w("confirmed"):(l.value=!0,setTimeout(()=>u.value.focus(),250))})},p=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,d(),E().then(()=>w("confirmed"))}).catch(i=>{e.processing=!1,e.error=i.response.data.errors.password[0],u.value.focus()})},d=()=>{l.value=!1,e.password="",e.error=""};return(i,m)=>(a(),s("span",null,[r("span",{onClick:_},[H(i.$slots,"default")]),o(J,{show:l.value,onClose:d},{title:t(()=>[n(b(h.title),1)]),content:t(()=>[n(b(h.content)+" ",1),r("div",Y,[o(M,{ref_key:"passwordInput",ref:u,modelValue:e.password,"onUpdate:modelValue":m[0]||(m[0]=A=>e.password=A),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:B(p,["enter"])},null,8,["modelValue","onKeyup"]),o(L,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:t(()=>[o(C,{onClick:d},{default:t(()=>[n(" Cancel ")]),_:1}),o(K,{class:y(["ml-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:p},{default:t(()=>[n(b(h.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},Z={key:0,class:"text-lg font-medium text-gray-900"},ee={key:1,class:"text-lg font-medium text-gray-900"},ae={key:2,class:"text-lg font-medium text-gray-900"},te=r("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[r("p",null," Saat autentikasi dua langkah diaktifkan, Anda akan dimintai token acak yang aman selama autentikasi. Anda dapat mengambil token ini dari aplikasi Google Authenticator ponsel Anda. ")],-1),se={key:3},oe={key:0},ne={class:"mt-4 max-w-xl text-sm text-gray-600"},ie={key:0,class:"font-semibold"},re={key:1},le=["innerHTML"],ue={key:0,class:"mt-4 max-w-xl text-sm text-gray-600"},ce={class:"font-semibold"},de=["innerHTML"],me={key:1,class:"mt-4"},fe={key:1},ke=r("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[r("p",{class:"font-semibold"}," Simpan kode pemulihan ini. Mereka dapat digunakan untuk memulihkan akses ke akun Anda jika perangkat autentikasi dua langkah Anda hilang. ")],-1),pe={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},_e={class:"mt-5"},ve={key:0},ge={key:1},Pe={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(h){const w=h,l=k(!1),e=k(!1),u=k(!1),_=k(null),p=k(null),d=k([]),i=I({code:""}),m=Q(()=>{var f;return!l.value&&((f=z().props.value.user)==null?void 0:f.two_factor_enabled)});U(m,()=>{m.value||(i.reset(),i.clearErrors())});const A=()=>{l.value=!0,V.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([N(),O(),S()]),onFinish:()=>{l.value=!1,e.value=w.requiresConfirmation}})},N=()=>axios.get("/user/two-factor-qr-code").then(f=>{_.value=f.data.svg}),O=()=>axios.get("/user/two-factor-secret-key").then(f=>{p.value=f.data.secretKey}),S=()=>axios.get("/user/two-factor-recovery-codes").then(f=>{d.value=f.data}),F=()=>{i.post("/user/confirmed-two-factor-authentication",{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,_.value=null,p.value=null}})},R=()=>{axios.post("/user/two-factor-recovery-codes").then(()=>S())},P=()=>{u.value=!0,V.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>{u.value=!1,e.value=!1}})};return(f,$)=>(a(),v(G,null,{title:t(()=>[n(" Otentikasi Dua Langkah ")]),description:t(()=>[n(" Tambahkan keamanan tambahan ke akun Anda menggunakan autentikasi dua langkah. ")]),content:t(()=>[m.value&&!e.value?(a(),s("h3",Z," Anda telah mengaktifkan autentikasi dua langkah. ")):m.value&&e.value?(a(),s("h3",ee," Selesaikan pengaktifan autentikasi dua langkah. ")):(a(),s("h3",ae," Anda belum mengaktifkan autentikasi dua langkah. ")),te,m.value?(a(),s("div",se,[_.value?(a(),s("div",oe,[r("div",ne,[e.value?(a(),s("p",ie," Untuk menyelesaikan pengaktifan autentikasi dua langkah, pindai kode QR berikut menggunakan aplikasi autentikator ponsel Anda atau masukkan kunci penyiapan dan berikan kode OTP yang dihasilkan. ")):(a(),s("p",re," Otentikasi dua langkah sekarang diaktifkan. Pindai kode QR berikut menggunakan aplikasi autentikator ponsel Anda atau masukkan kunci penyiapan. "))]),r("div",{class:"mt-4",innerHTML:_.value},null,8,le),p.value?(a(),s("div",ue,[r("p",ce,[n(" Key: "),r("span",{innerHTML:p.value},null,8,de)])])):c("",!0),e.value?(a(),s("div",me,[o(X,{for:"code",value:"Code"}),o(M,{id:"code",modelValue:T(i).code,"onUpdate:modelValue":$[0]||($[0]=x=>T(i).code=x),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:B(F,["enter"])},null,8,["modelValue","onKeyup"]),o(L,{message:T(i).errors.code,class:"mt-2"},null,8,["message"])])):c("",!0)])):c("",!0),d.value.length>0&&!e.value?(a(),s("div",fe,[ke,r("div",pe,[(a(!0),s(D,null,j(d.value,x=>(a(),s("div",{key:x},b(x),1))),128))])])):c("",!0)])):c("",!0),r("div",_e,[m.value?(a(),s("div",ge,[o(g,{onConfirmed:F},{default:t(()=>[e.value?(a(),v(K,{key:0,type:"button",class:y(["mr-3",{"opacity-25":l.value}]),disabled:l.value},{default:t(()=>[n(" Konfirmasi ")]),_:1},8,["class","disabled"])):c("",!0)]),_:1}),o(g,{onConfirmed:R},{default:t(()=>[d.value.length>0&&!e.value?(a(),v(C,{key:0,class:"mr-3"},{default:t(()=>[n(" Regenerasi Kode Pemulihan ")]),_:1})):c("",!0)]),_:1}),o(g,{onConfirmed:S},{default:t(()=>[d.value.length===0&&!e.value?(a(),v(C,{key:0,class:"mr-3"},{default:t(()=>[n(" Tampilkan Kode Pemulihan ")]),_:1})):c("",!0)]),_:1}),o(g,{onConfirmed:P},{default:t(()=>[e.value?(a(),v(C,{key:0,class:y({"opacity-25":u.value}),disabled:u.value},{default:t(()=>[n(" Batal ")]),_:1},8,["class","disabled"])):c("",!0)]),_:1}),o(g,{onConfirmed:P},{default:t(()=>[e.value?c("",!0):(a(),v(W,{key:0,class:y({"opacity-25":u.value}),disabled:u.value},{default:t(()=>[n(" Nonaktifkan ")]),_:1},8,["class","disabled"]))]),_:1})])):(a(),s("div",ve,[o(g,{onConfirmed:A},{default:t(()=>[o(K,{type:"button",class:y({"opacity-25":l.value}),disabled:l.value},{default:t(()=>[n(" Aktifkan ")]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Pe as default};