import{v as i,d,e as c,b as o,u as a,w as r,F as u,o as p,X as f,a as e,n as _,g as w,B as b}from"./app.db06b18a.js";import{_ as g}from"./AuthenticationCard.d994df61.js";import{_ as v}from"./AuthenticationCardLogo.8a012d4a.js";import{_ as x}from"./InputError.29e93e0d.js";import{_ as k}from"./InputLabel.8dc4ce59.js";import{_ as V}from"./PrimaryButton.423be53e.js";import{_ as $}from"./TextInput.b9da93b3.js";const h=e("div",{class:"mb-4 text-sm text-gray-600"}," Masukkan password ",-1),y=["onSubmit"],B={class:"flex justify-end mt-4"},z={__name:"ConfirmPassword",setup(C){const s=i({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(F,m)=>(p(),c(u,null,[o(a(f),{title:"Secure Area"}),o(g,null,{logo:r(()=>[o(v)]),default:r(()=>[h,e("form",{onSubmit:b(n,["prevent"])},[e("div",null,[o(k,{for:"password",value:"Password"}),o($,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(s).password,"onUpdate:modelValue":m[0]||(m[0]=l=>a(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(x,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",B,[o(V,{class:_(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[w(" Konfirmasi ")]),_:1},8,["class","disabled"])])],40,y)]),_:1})],64))}};export{z as default};
