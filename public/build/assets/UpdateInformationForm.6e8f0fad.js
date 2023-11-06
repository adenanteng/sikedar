import{T as x,c as h,w as n,o as w,g as i,a,b as s,u as o,n as $}from"./app.0bfba96a.js";import{_ as S}from"./ActionMessage.50e68ceb.js";import{_ as B}from"./FormSection.dbb84e80.js";import{_ as d}from"./InputError.29c1ccd4.js";import{_ as m}from"./InputLabel.adac7908.js";import{_ as U}from"./PrimaryButton.2d50ad0e.js";import{_ as u}from"./TextInput.9bb6d37b.js";import{_ as V}from"./SelectInput.eaf9d9a4.js";import{_ as I}from"./EditorInput.c844f6cb.js";import"./SectionTitle.4d425a76.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./tippy.1f48ccbe.js";import"./DialogModal.9e8b8369.js";import"./DangerButton.a93d1ac3.js";const q={class:"col-span-6 sm:col-span-4"},C={class:"col-span-6"},D={class:"col-span-6 sm:col-span-3"},N={class:"flex"},T={class:"flex"},M=a("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"},"Rp",-1),O={class:"flex"},P=a("span",{class:"flex items-center bg-white text-black border border-gray-300 border-r-0 border-l-0 rounded-3xl rounded-r-none rounded-l-none shadow-sm mt-1 px-3"}," - ",-1),R={class:"col-span-6 sm:col-span-3"},z={class:"col-span-6 sm:col-span-2"},oe={__name:"UpdateInformationForm",props:{project:Object|String,gallery:Object},setup(k){var p,f,_,g,b,y;const t=k,e=x({name:(p=t.project.name)!=null?p:null,desc:(f=t.project.desc)!=null?f:null,budget_from:(_=t.project.budget_from)!=null?_:null,budget_to:(g=t.project.budget_to)!=null?g:null,category_id:(b=t.project.category_id)!=null?b:null,finish_day:(y=t.project.finish_day)!=null?y:null}),j=()=>{t.project.name==null?e.post(route("project.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>c()}):e.put(route("project.update",t.project),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>c()})},c=()=>{};return(v,r)=>(w(),h(B,{onSubmitted:j},{title:n(()=>[i(" Informasi Proyek ")]),description:n(()=>[i(" Tambahkan informasi proyek sesuai kebutuhan pekerjaan. ")]),form:n(()=>[a("div",q,[s(m,{for:"name",value:"Judul"}),s(u,{id:"name",modelValue:o(e).name,"onUpdate:modelValue":r[0]||(r[0]=l=>o(e).name=l),type:"text",class:"mt-1 block w-full",autocomplete:"name",required:""},null,8,["modelValue"]),s(d,{message:o(e).errors.name,class:"mt-2"},null,8,["message"])]),a("div",C,[s(m,{for:"desc",value:"Deskripsi"}),s(I,{modelValue:o(e).desc,"onUpdate:modelValue":r[1]||(r[1]=l=>o(e).desc=l),gallery:t.gallery},null,8,["modelValue","gallery"]),s(d,{message:o(e).errors.desc,class:"mt-2"},null,8,["message"])]),a("div",D,[s(m,{for:"price",value:"Rentang Budget"}),a("div",N,[a("div",T,[M,s(u,{id:"price",modelValue:o(e).budget_from,"onUpdate:modelValue":r[2]||(r[2]=l=>o(e).budget_from=l),type:"number",class:"mt-1 block w-full rounded-l-none rounded-r-none"},null,8,["modelValue"]),s(d,{message:o(e).errors.budget_from,class:"mt-2"},null,8,["message"])]),a("div",O,[P,s(u,{id:"price",modelValue:o(e).budget_to,"onUpdate:modelValue":r[3]||(r[3]=l=>o(e).budget_to=l),type:"number",min:o(e).budget_from,class:"mt-1 block w-full rounded-l-none"},null,8,["modelValue","min"]),s(d,{message:o(e).errors.budget_to,class:"mt-2"},null,8,["message"])])])]),a("div",R,[s(m,{for:"category",value:"Kategori"}),s(V,{id:"category","model-value":o(e).category_id,"onUpdate:modelValue":r[4]||(r[4]=l=>o(e).category_id=l),"model-valueModifiers":{number:!0},option:v.$page.props.selectCategory,class:"mt-1 block w-full",required:""},null,8,["model-value","option"]),s(d,{message:o(e).errors.category_id,class:"mt-2"},null,8,["message"])]),a("div",z,[s(m,{for:"deadline",value:"Deadline"}),s(V,{id:"deadline","model-value":o(e).finish_day,"onUpdate:modelValue":r[5]||(r[5]=l=>o(e).finish_day=l),"model-valueModifiers":{number:!0},option:v.$page.props.selectDay,class:"mt-1 block w-full",required:""},null,8,["model-value","option"]),s(d,{message:o(e).errors.finish_day,class:"mt-2"},null,8,["message"])])]),actions:n(()=>[s(S,{on:o(e).recentlySuccessful,class:"mr-3"},{default:n(()=>[i(" Berhasil disimpan. ")]),_:1},8,["on"]),s(U,{class:$({"opacity-25":o(e).processing}),disabled:o(e).processing},{default:n(()=>[i(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{oe as default};
