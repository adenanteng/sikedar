import{d as i,T as f,c as k,w as e,o as h,g as a,a as u,b as o,u as t,W as w,n as y}from"./app.e16c5092.js";import{_ as g}from"./ActionSection.592df2f1.js";import{_ as p}from"./DangerButton.5f63432e.js";import{a as v}from"./DialogModal.50cd8bd1.js";import{_ as x}from"./InputError.4d5ca991.js";import{_ as b}from"./SecondaryButton.6b8aa15d.js";import{_ as C}from"./TextInput.879b7d50.js";import"./SectionTitle.757f75e5.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V=u("div",{class:"max-w-xl text-sm text-gray-600"}," Setelah akun kamu dihapus, semua sumber daya dan datanya akan dihapus secara permanen. ",-1),$={class:"mt-5"},A={class:"mt-4"},z={__name:"DeleteUserForm",setup(U){const n=i(!1),r=i(null),s=f({password:""}),d=()=>{n.value=!0,setTimeout(()=>r.value.focus(),250)},c=()=>{s.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>r.value.focus(),onFinish:()=>s.reset()})},l=()=>{n.value=!1,s.reset()};return(B,m)=>(h(),k(g,null,{title:e(()=>[a(" Hapus Akun ")]),description:e(()=>[a(" Menghapus akun secara permanen. ")]),content:e(()=>[V,u("div",$,[o(p,{onClick:d},{default:e(()=>[a(" Hapus Akun ")]),_:1})]),o(v,{show:n.value,onClose:l},{title:e(()=>[a(" Hapus Akun ")]),content:e(()=>[a(" Apakah kamu yakin ingin menghapus akun? Setelah akun kamu dihapus, semua sumber daya dan datanya akan dihapus secara permanen. "),u("div",A,[o(C,{ref_key:"passwordInput",ref:r,modelValue:t(s).password,"onUpdate:modelValue":m[0]||(m[0]=_=>t(s).password=_),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:w(c,["enter"])},null,8,["modelValue","onKeyup"]),o(x,{message:t(s).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[o(b,{onClick:l},{default:e(()=>[a(" Batal ")]),_:1}),o(p,{class:y(["ml-3",{"opacity-25":t(s).processing}]),disabled:t(s).processing,onClick:c},{default:e(()=>[a(" Hapus Akun ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{z as default};