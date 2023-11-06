import{T as k,c as V,w as r,o as b,g as n,a as m,b as s,u as o,n as v}from"./app.0bfba96a.js";import{_ as S}from"./ActionMessage.50e68ceb.js";import{_ as w}from"./FormSection.dbb84e80.js";import{_ as c}from"./InputError.29c1ccd4.js";import{_ as i}from"./InputLabel.adac7908.js";import{_ as $}from"./PrimaryButton.2d50ad0e.js";import{_}from"./TextInput.9bb6d37b.js";import{_ as x}from"./TextAreaInput.ffda2995.js";import"./SectionTitle.4d425a76.js";import"./_plugin-vue_export-helper.cdc0426e.js";const B={class:"col-span-6 sm:col-span-4"},I={class:"col-span-6 sm:col-span-5"},C={class:"col-span-6 sm:col-span-3"},K={__name:"UpdateInformationForm",props:{category:Object|String},setup(g){var d,p,f;const t=g,e=k({name:(d=t.category.name)!=null?d:null,desc:(p=t.category.desc)!=null?p:null,icon:(f=t.category.icon)!=null?f:null}),y=()=>{t.category.name==null?e.post(route("projectCategory.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>u()}):e.put(route("projectCategory.update",t.category),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>u()})},u=()=>{};return(U,a)=>(b(),V(w,{onSubmitted:y},{title:r(()=>[n(" Kategori Proyek ")]),description:r(()=>[n(" Tambahkan informasi kategori proyek sesuai kebutuhan aplikasi. ")]),form:r(()=>[m("div",B,[s(i,{for:"name",value:"Judul"}),s(_,{id:"name",modelValue:o(e).name,"onUpdate:modelValue":a[0]||(a[0]=l=>o(e).name=l),type:"text",class:"mt-1 block w-full",autocomplete:"name",required:""},null,8,["modelValue"]),s(c,{message:o(e).errors.name,class:"mt-2"},null,8,["message"])]),m("div",I,[s(i,{for:"desc",value:"Deskripsi"}),s(x,{id:"desc",modelValue:o(e).desc,"onUpdate:modelValue":a[1]||(a[1]=l=>o(e).desc=l),class:"mt-1 block w-full",rows:"2",required:""},null,8,["modelValue"]),s(c,{message:o(e).errors.desc,class:"mt-2"},null,8,["message"])]),m("div",C,[s(i,{for:"icon",value:"Ikon"}),s(_,{id:"icon",modelValue:o(e).icon,"onUpdate:modelValue":a[2]||(a[2]=l=>o(e).icon=l),type:"text",class:"mt-1 block w-full",autocomplete:"icon",required:""},null,8,["modelValue"]),s(c,{message:o(e).errors.icon,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[s(S,{on:o(e).recentlySuccessful,class:"mr-3"},{default:r(()=>[n(" Berhasil disimpan. ")]),_:1},8,["on"]),s($,{class:v({"opacity-25":o(e).processing}),disabled:o(e).processing},{default:r(()=>[n(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{K as default};
