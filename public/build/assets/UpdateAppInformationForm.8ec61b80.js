import{d as w,v as U,c as $,w as r,o as k,g as m,a as o,b as s,D as V,E as y,e as C,f as N,L as P,B as z,u as t,n as D}from"./app.db06b18a.js";import{_ as F}from"./ActionMessage.56e47217.js";import{_ as L}from"./FormSection.2bb25889.js";import{_ as d}from"./InputError.29e93e0d.js";import{_ as p}from"./InputLabel.8dc4ce59.js";import{_ as j}from"./PrimaryButton.423be53e.js";import{_ as A}from"./SecondaryButton.72ebe50f.js";import{_ as f}from"./TextInput.b9da93b3.js";import"./SectionTitle.e2266bb0.js";import"./_plugin-vue_export-helper.cdc0426e.js";const E={class:"col-span-6 sm:col-span-4"},M={class:"mt-2"},R=["src","alt"],q={class:"mt-2"},K={class:"col-span-6 sm:col-span-4"},O={class:"col-span-6"},T={class:"col-span-3"},G={class:"flex"},H=o("span",{class:"flex items-center bg-white text-black border border-gray-300 border-l-0 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"},[o("i",{class:"fa-regular fa-percent"})],-1),ae={__name:"UpdateAppInformationForm",props:{setting:Object},setup(_){var g,v,h,b;const i=_,u=w(null),l=w(null),e=U({id:(g=i.setting.id)!=null?g:null,name:(v=i.setting.name)!=null?v:null,desc:(h=i.setting.desc)!=null?h:null,photo:null,fees:(b=i.setting.fees)!=null?b:null}),x=()=>{l.value&&(e.photo=l.value.files[0]),e.post(route("setting.store"),{errorBag:"storeSettingInformation",preserveScroll:!0,onSuccess:()=>B()})},S=()=>{l.value.click()},I=()=>{const c=l.value.files[0];if(!c)return;const a=new FileReader;a.onload=n=>{u.value=n.target.result},a.readAsDataURL(c)},B=()=>{var c;(c=l.value)!=null&&c.value&&(l.value.value=null)};return(c,a)=>(k(),$(L,{onSubmitted:x},{title:r(()=>[m(" Informasi Umum ")]),description:r(()=>[m(" Informasi umum tentang aplikasi ")]),form:r(()=>[o("div",E,[o("input",{ref_key:"photoInput",ref:l,type:"file",class:"hidden",onChange:I},null,544),s(p,{for:"photo",value:"Photo"}),V(o("div",M,[i.setting.media!=null?(k(),C("img",{key:0,src:i.setting.media[0].original_url,alt:_.setting.name,class:"rounded-full h-20 w-20 object-cover"},null,8,R)):N("",!0)],512),[[y,!u.value]]),V(o("div",q,[o("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:P("background-image: url('"+u.value+"');")},null,4)],512),[[y,u.value]]),s(A,{class:"mt-2 mr-2",type:"button",onClick:z(S,["prevent"])},{default:r(()=>[m(" Ubah Logo ")]),_:1},8,["onClick"]),s(d,{message:t(e).errors.photo,class:"mt-2"},null,8,["message"])]),o("div",K,[s(p,{for:"name",value:"Nama"}),s(f,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":a[0]||(a[0]=n=>t(e).name=n),type:"text",class:"mt-1 block w-full capitalize",autocomplete:"name",required:""},null,8,["modelValue"]),s(d,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),o("div",O,[s(p,{for:"desc",value:"Slogan"}),s(f,{id:"desc",modelValue:t(e).desc,"onUpdate:modelValue":a[1]||(a[1]=n=>t(e).desc=n),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),s(d,{message:t(e).errors.desc,class:"mt-2"},null,8,["message"])]),o("div",T,[s(p,{for:"fees",value:"Margin Keuntungan"}),o("div",G,[s(f,{id:"fees",modelValue:t(e).fees,"onUpdate:modelValue":a[2]||(a[2]=n=>t(e).fees=n),type:"number",class:"mt-1 block w-full rounded-r-none"},null,8,["modelValue"]),H]),s(d,{message:t(e).errors.fees,class:"mt-2"},null,8,["message"])])]),actions:r(()=>[s(F,{on:t(e).recentlySuccessful,class:"mr-3"},{default:r(()=>[m(" Berhasil disimpan. ")]),_:1},8,["on"]),s(j,{class:D({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:r(()=>[m(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{ae as default};
