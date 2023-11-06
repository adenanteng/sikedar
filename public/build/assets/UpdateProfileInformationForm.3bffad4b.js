import{T as N,d as h,c as w,w as i,o as p,g as n,e as C,a as s,b as a,p as _,v as k,M as j,l as g,f as b,u as o,j as E,n as T,O as z}from"./app.a3d6608a.js";import{_ as A}from"./ActionMessage.bac89244.js";import{_ as F}from"./FormSection.477131a7.js";import{_ as d}from"./InputError.b8b9b0af.js";import{_ as f}from"./InputLabel.c78931db.js";import{_ as O}from"./PrimaryButton.f07c652b.js";import{_ as S}from"./SecondaryButton.a0061b06.js";import{_ as y}from"./TextInput.29f01202.js";import"./SectionTitle.0195b737.js";import"./_plugin-vue_export-helper.cdc0426e.js";const D={key:0,class:"col-span-6 sm:col-span-4"},L={class:"mt-2"},M=["src","alt"],R={class:"mt-2"},H={class:"col-span-6 sm:col-span-4"},K={class:"col-span-6 sm:col-span-4"},q={class:"col-span-6 sm:col-span-4"},G={key:0},J={class:"text-sm mt-2"},Q={class:"mt-2 font-medium text-sm text-green-600"},ie={__name:"UpdateProfileInformationForm",props:{user:Object},setup(u){const v=u,e=N({_method:"PUT",name:v.user.name,email:v.user.email,phone:v.user.phone,photo:null}),P=h(null),c=h(null),r=h(null),$=()=>{r.value&&(e.photo=r.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>V()})},x=()=>{P.value=!0},I=()=>{r.value.click()},U=()=>{const l=r.value.files[0];if(!l)return;const t=new FileReader;t.onload=m=>{c.value=m.target.result},t.readAsDataURL(l)},B=()=>{z.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{c.value=null,V()}})},V=()=>{var l;(l=r.value)!=null&&l.value&&(r.value.value=null)};return(l,t)=>(p(),w(F,{onSubmitted:$},{title:i(()=>[n(" Informasi Profil ")]),description:i(()=>[n(" Perbarui informasi profil akun dan alamat email kamu. ")]),form:i(()=>[l.$page.props.jetstream.managesProfilePhotos?(p(),C("div",D,[s("input",{ref_key:"photoInput",ref:r,type:"file",class:"hidden",onChange:U},null,544),a(f,{for:"photo",value:"Photo"}),_(s("div",L,[s("img",{src:u.user.profile_photo_url,alt:u.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,M)],512),[[k,!c.value]]),_(s("div",R,[s("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:j("background-image: url('"+c.value+"');")},null,4)],512),[[k,c.value]]),a(S,{class:"mt-2 mr-2",type:"button",onClick:g(I,["prevent"])},{default:i(()=>[n(" Ubah Avatar ")]),_:1},8,["onClick"]),u.user.profile_photo_path?(p(),w(S,{key:0,type:"button",class:"mt-2",onClick:g(B,["prevent"])},{default:i(()=>[n(" Hapus Avatar ")]),_:1},8,["onClick"])):b("",!0),a(d,{message:o(e).errors.photo,class:"mt-2"},null,8,["message"])])):b("",!0),s("div",H,[a(f,{for:"name",value:"Nama"}),a(y,{id:"name",modelValue:o(e).name,"onUpdate:modelValue":t[0]||(t[0]=m=>o(e).name=m),type:"text",class:"mt-1 block w-full capitalize",autocomplete:"name"},null,8,["modelValue"]),a(d,{message:o(e).errors.name,class:"mt-2"},null,8,["message"])]),s("div",K,[a(f,{for:"phone",value:"Telepon"}),a(y,{id:"phone",modelValue:o(e).phone,"onUpdate:modelValue":t[1]||(t[1]=m=>o(e).phone=m),type:"tel",class:"mt-1 block w-full capitalize"},null,8,["modelValue"]),a(d,{message:o(e).errors.phone,class:"mt-2"},null,8,["message"])]),s("div",q,[a(f,{for:"email",value:"Email"}),a(y,{id:"email",modelValue:o(e).email,"onUpdate:modelValue":t[2]||(t[2]=m=>o(e).email=m),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),a(d,{message:o(e).errors.email,class:"mt-2"},null,8,["message"]),l.$page.props.jetstream.hasEmailVerification&&u.user.email_verified_at===null?(p(),C("div",G,[s("p",J,[n(" Email belum diverifikasi. "),a(o(E),{href:l.route("verification.send"),method:"post",as:"button",class:"underline text-gray-600 hover:text-gray-900",onClick:g(x,["prevent"])},{default:i(()=>[n(" Klik di sini untuk mengirim ulang email verifikasi. ")]),_:1},8,["href","onClick"])]),_(s("div",Q," Tautan verifikasi baru telah dikirim ke alamat email kamu. ",512),[[k,P.value]])])):b("",!0)])]),actions:i(()=>[a(A,{on:o(e).recentlySuccessful,class:"mr-3"},{default:i(()=>[n(" Berhasil disimpan. ")]),_:1},8,["on"]),a(O,{class:T({"opacity-25":o(e).processing}),disabled:o(e).processing},{default:i(()=>[n(" Simpan ")]),_:1},8,["class","disabled"])]),_:1}))}};export{ie as default};