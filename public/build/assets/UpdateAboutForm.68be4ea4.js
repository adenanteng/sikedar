import{T as l,c as p,w as a,o as d,g as e,a as _,b as t,u as o,n as f}from"./app.a3d6608a.js";import{_ as b}from"./ActionMessage.bac89244.js";import{_ as g}from"./FormSection.477131a7.js";import{_ as k}from"./InputError.b8b9b0af.js";import{_ as S}from"./PrimaryButton.f07c652b.js";import{_ as V}from"./EditorInput.0716230f.js";import"./SectionTitle.0195b737.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./tippy.d391727b.js";import"./DialogModal.9637a5ec.js";import"./DangerButton.7b06e6ab.js";const B={class:"col-span-6 sm:col-span-6"},z={__name:"UpdateAboutForm",props:{course:Object|String},setup(m){var n;const r=m,s=l({id:r.course.id,about:(n=r.course.about)!=null?n:null}),c=()=>{s.put(route("course.update",r.course),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{}})};return($,i)=>(d(),p(g,{onSubmitted:c},{title:a(()=>[e(" Tentang ")]),description:a(()=>[e(" Tambahkan informasi tentang kelas sesuai kebutuhan aplikasi. ")]),form:a(()=>[_("div",B,[t(V,{modelValue:o(s).about,"onUpdate:modelValue":i[0]||(i[0]=u=>o(s).about=u)},null,8,["modelValue"]),t(k,{message:o(s).errors.about,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[t(b,{on:o(s).recentlySuccessful,class:"mr-3"},{default:a(()=>[e(" Berhasil disimpan. ")]),_:1},8,["on"]),t(S,{class:f({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:a(()=>[e(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{z as default};