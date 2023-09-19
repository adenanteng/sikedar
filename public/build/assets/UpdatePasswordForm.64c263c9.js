import{d as l,v as y,c as v,w as n,o as k,g as i,a as o,b as e,u as a,n as c}from"./app.db06b18a.js";import{_ as x}from"./ActionMessage.56e47217.js";import{_ as P}from"./FormSection.2bb25889.js";import{_ as m}from"./InputError.29e93e0d.js";import{_ as f}from"./InputLabel.8dc4ce59.js";import{_ as V}from"./PrimaryButton.423be53e.js";import{_ as w}from"./TextInput.b9da93b3.js";import"./SectionTitle.e2266bb0.js";import"./_plugin-vue_export-helper.cdc0426e.js";const h={class:"col-span-6 sm:col-span-4"},$={class:"flex"},B={class:"col-span-6 sm:col-span-4"},C={class:"flex"},S={class:"col-span-6 sm:col-span-4"},U={class:"flex"},G={__name:"UpdatePasswordForm",setup(I){const _=l(null),g=l(null),s=y({current_password:"",password:"",password_confirmation:""}),b=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),_.value.focus()),s.errors.current_password&&(s.reset("current_password"),g.value.focus())}})},d=l(!1),u=l(!1),p=l(!1);return(N,r)=>(k(),v(P,{onSubmitted:b},{title:n(()=>[i(" Ubah Password ")]),description:n(()=>[i(" Pastikan akun kamu menggunakan kata sandi acak yang panjang agar tetap aman. ")]),form:n(()=>[o("div",h,[e(f,{for:"current_password",value:"Password"}),o("div",$,[e(w,{id:"current_password",ref_key:"currentPasswordInput",ref:g,modelValue:a(s).current_password,"onUpdate:modelValue":r[0]||(r[0]=t=>a(s).current_password=t),type:d.value?"text":"password",class:"mt-1 block w-full rounded-r-none",autocomplete:"current-password"},null,8,["modelValue","type"]),o("button",{type:"button",onClick:r[1]||(r[1]=t=>d.value=!d.value),class:"bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"},[o("i",{class:c(["fa-regular",d.value?"fa-eye-slash":"fa-eye"])},null,2)])]),e(m,{message:a(s).errors.current_password,class:"mt-2"},null,8,["message"])]),o("div",B,[e(f,{for:"password",value:"Password Baru"}),o("div",C,[e(w,{id:"password",ref_key:"passwordInput",ref:_,modelValue:a(s).password,"onUpdate:modelValue":r[2]||(r[2]=t=>a(s).password=t),type:u.value?"text":"password",class:"mt-1 block w-full rounded-r-none",autocomplete:"new-password"},null,8,["modelValue","type"]),o("button",{type:"button",onClick:r[3]||(r[3]=t=>u.value=!u.value),class:"bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"},[o("i",{class:c(["fa-regular",u.value?"fa-eye-slash":"fa-eye"])},null,2)])]),e(m,{message:a(s).errors.password,class:"mt-2"},null,8,["message"])]),o("div",S,[e(f,{for:"password_confirmation",value:"Konfirmasi Password Baru"}),o("div",U,[e(w,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":r[4]||(r[4]=t=>a(s).password_confirmation=t),type:p.value?"text":"password",class:"mt-1 block w-full rounded-r-none",autocomplete:"new-password"},null,8,["modelValue","type"]),o("button",{type:"button",onClick:r[5]||(r[5]=t=>p.value=!p.value),class:"bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"},[o("i",{class:c(["fa-regular",p.value?"fa-eye-slash":"fa-eye"])},null,2)])]),e(m,{message:a(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:n(()=>[e(x,{on:a(s).recentlySuccessful,class:"mr-3"},{default:n(()=>[i(" Berhasil disimpan. ")]),_:1},8,["on"]),e(V,{class:c({"opacity-25":a(s).processing}),disabled:a(s).processing},{default:n(()=>[i(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{G as default};
