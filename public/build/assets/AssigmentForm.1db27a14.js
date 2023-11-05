import{T as M,d as h,e as m,a as e,b as s,u as o,F as I,h as $,l as _,w as p,n as B,o as f,t as j,g as v,O as D}from"./app.8a68db54.js";import{_ as d}from"./InputError.e6515c15.js";import{_ as c}from"./InputLabel.e4568345.js";import{_ as x}from"./TextInput.404daac5.js";import{_ as F}from"./EditorInput.125b7497.js";import{_ as N}from"./DangerButton.b44bb205.js";import{_ as U}from"./ActionMessage.812dea95.js";import{_ as A}from"./PrimaryButton.d2153405.js";import"./tippy.3e73d701.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.988adade.js";const L={class:"bg-white bg-opacity-50 border border-gray-300 rounded-3xl shadow-lg p-5"},O={class:""},P={class:""},T={class:""},R={class:""},q={class:"grid md:grid-cols-3 lg:grid-cols-4 gap-5"},z={class:"relative py-3 px-2 flex flex-col items-center justify-center border border-gray-300 rounded-3xl shadow-xl"},E=e("i",{class:"fa-duotone fa-file text-gray-400 text-5xl"},null,-1),H={class:"text-center mt-2"},J={class:"block text-sm font-medium text-gray-900"},G=["href","download"],K=["onClick"],Q={class:""},W={class:"block h-full"},X=["onClick"],Y=e("i",{class:"fa-duotone fa-file text-gray-400 text-5xl"},null,-1),Z=e("span",{class:"mt-2 block text-sm font-medium text-gray-900"},"Tambah Media",-1),ee=e("p",{class:"text-gray-500 text-xs font-semibold"}," * any extension ",-1),te=[Y,Z,ee],se={class:"grid grid-cols-2 pt-5 mt-5 border-t border-gray-300"},oe={class:"flex justify-start"},le=e("i",{class:"fa-duotone fa-trash"},null,-1),ae=e("span",{class:"ml-2 hidden group-hover:block"},"Hapus",-1),ne={class:"flex items-center justify-end"},be={__name:"AssigmentForm",props:{item:Object,course_id:Number},setup(b){const n=b,t=M({id:n.item.id,course_id:n.course_id,type_id:2,name:n.item.name,content:n.item.content,link:n.item.link,media:null}),y=()=>{t.put(route("courseItem.update",n.item),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{}})},k=()=>{t.delete(route("courseItem.destroy",n.item),{preserveScroll:!0,onSuccess:()=>{}})},w=()=>{r.value&&(t.media=r.value.files[0]),t.post(route("courseItem.addMedia"),{errorBag:"storeMedia",preserveScroll:!0,onSuccess:()=>{u.value=null,g(),t.reset()}})},C=(i,a)=>{D.delete(route("courseItem.deleteMedia",a),{preserveScroll:!0,onSuccess:()=>{u.value=null,g()}})},u=h(null),r=h(null),V=()=>{r.value.click()},S=()=>{const i=r.value.files[0];if(!i)return;const a=new FileReader;a.onload=l=>{u.value=l.target.result},a.readAsDataURL(i),w()},g=()=>{var i;(i=r.value)!=null&&i.value&&(r.value.value=null)};return(i,a)=>(f(),m("div",L,[e("div",O,[s(c,{value:"Judul"}),s(x,{modelValue:o(t).name,"onUpdate:modelValue":a[0]||(a[0]=l=>o(t).name=l),type:"text",class:"mt-1 block w-full",autocomplete:"name",required:""},null,8,["modelValue"]),s(d,{message:o(t).errors.name,class:"mt-2"},null,8,["message"])]),e("div",P,[s(c,{class:"mb-1 mt-5",value:"Deskripsi"}),s(F,{modelValue:o(t).content,"onUpdate:modelValue":a[1]||(a[1]=l=>o(t).content=l)},null,8,["modelValue"]),s(d,{message:o(t).errors.content,class:"mt-2"},null,8,["message"])]),e("div",T,[s(c,{class:"mb-1 mt-5",value:"Link"}),s(x,{modelValue:o(t).link,"onUpdate:modelValue":a[2]||(a[2]=l=>o(t).link=l),type:"text",class:"mt-1 block w-full",placeholder:"http://"},null,8,["modelValue"]),s(d,{message:o(t).errors.link,class:"mt-2"},null,8,["message"])]),e("div",R,[s(c,{class:"mb-1 mt-5",value:"Attachment"}),e("div",q,[(f(!0),m(I,null,$(n.item.media,(l,re)=>(f(),m("div",z,[E,e("div",H,[e("p",J,j(l.file_name),1),e("a",{type:"button",href:l.original_url,download:l.file_name,class:"text-primary-600 text-xs font-semibold"}," Download ",8,G),e("button",{class:"text-red-600 text-xs font-semibold",onClick:_(ie=>C(n.item.id,l.id),["prevent"])}," Delete ",8,K)])]))),256)),e("div",Q,[e("input",{ref_key:"mediaInput",ref:r,type:"file",class:"hidden",onChange:S},null,544),e("div",W,[e("button",{onClick:_(V,["prevent"]),type:"button",class:"relative py-3 px-2 flex flex-col justify-center items-center w-full h-full text-center border-2 border-gray-400 border-dashed focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"},te,8,X)]),s(d,{message:o(t).errors.media,class:"mt-2"},null,8,["message"])])])]),e("div",se,[e("div",oe,[s(N,{onClick:k,type:"button",class:"group"},{default:p(()=>[le,ae]),_:1})]),e("div",ne,[s(U,{on:o(t).recentlySuccessful,class:"mr-3"},{default:p(()=>[v(" Berhasil disimpan. ")]),_:1},8,["on"]),s(A,{onClick:_(y,["prevent"]),class:B({"opacity-25":o(t).processing}),disabled:o(t).processing},{default:p(()=>[v(" Simpan ")]),_:1},8,["onClick","class","disabled"])])])]))}};export{be as default};
