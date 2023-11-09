import{_ as w}from"./LandingLayout.14f9a7bd.js";import{u as $,S as B,I as C,E as V}from"./tippy.25ef37af.js";import{d as M,T as S,c as g,w as _,o as i,a as t,n as d,g as x,t as m,b as c,u as s,e as u,f as b,F as f,h as T}from"./app.3d0755d6.js";import{h as A}from"./moment.9709ab41.js";import{_ as D}from"./InputError.91000fae.js";import{_ as E}from"./TextAreaInput.17394640.js";import{_ as H}from"./InputLabel.45ae82fe.js";import{_ as I}from"./PrimaryButton.8c5a12ca.js";import{_ as K}from"./CommentSection.68031146.js";import"./helper.e9fc3b37.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Banner.6056804a.js";import"./DarkmodeToggle.cf9637d5.js";import"./moment.158a90ac.js";import"./DialogModal.209936f2.js";import"./ActionMessage.1121bed9.js";import"./DangerButton.a173cace.js";const L={class:"relative overflow-hidden py-16"},N={class:"relative px-6 lg:px-8"},F={class:"mx-auto max-w-prose text-center text-lg mt-20"},j={class:"block text-lg font-semibold text-indigo-600"},q={class:"mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"},z={class:"text-sm leading-8 text-gray-500"},O={class:"prose prose-2xl prose-indigo mx-auto mt-10"},P={class:"max-w-4xl mx-auto border-t border-gray-300 mt-10 pt-10"},U={class:"border-b border-gray-300"},Y={class:"-mb-px flex space-x-8","aria-label":"Tabs"},G={class:"my-5"},J={key:0,class:"mb-10"},Q={class:""},R={key:1,class:"flex items-center"},W={class:"flex-shrink-0"},X=["src"],Z={class:"ml-3"},tt={class:"text-sm font-medium text-gray-900"},et={class:"hover:underline"},ot={class:"flex space-x-1 text-sm text-gray-500"},vt={__name:"BlogShow",props:{blog:Object},setup(n){const e=n,h=$({content:e.blog.content,editorProps:{attributes:{class:"prose prose-sm lg:prose-lg xl:prose-2xl"}},extensions:[B.configure({paragraph:{HTMLAttributes:{class:"text-base text-gray-600"}},Heading:{HTMLAttributes:{class:"text-gray-900"}}}),C.configure({inline:!0,allowBase64:!0,HTMLAttributes:{class:"max-w-5xl mx-auto rounded-3xl"}})],autofocus:!1,editable:!1}),r=M(1),o=S({id:null,comment:null,blog_id:e.blog.id}),v=()=>{console.log(o.comment),o.post(route("blogComment.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{o.reset()}})};function y(p){return A(p).format("DD MMM Y")}return(p,a)=>(i(),g(w,{title:e.blog.name},{default:_(()=>[t("div",L,[t("div",N,[t("div",F,[t("h1",null,[t("span",j,[t("i",{class:d(["fa-regular mr-2",n.blog.category.icon])},null,2),x(m(e.blog.category.name),1)]),t("span",q,m(e.blog.name),1)]),t("p",z,m(y(e.blog.created_at)),1)]),t("div",O,[c(s(V),{editor:s(h)},null,8,["editor"])]),t("div",P,[t("div",U,[t("nav",Y,[t("button",{onClick:a[0]||(a[0]=l=>r.value=1),class:d([r.value==1?"border-primary-500 text-primary-600":"border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Komentar ",2),t("button",{onClick:a[1]||(a[1]=l=>r.value=2),class:d([r.value==2?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"])}," Author ",2)]),t("div",G,[r.value==1?(i(),u(f,{key:0},[p.$page.props.user?(i(),u("div",J,[c(H,{for:"desc",class:"ml-2",value:"Beri Komentar"}),c(E,{id:"comment",modelValue:s(o).comment,"onUpdate:modelValue":a[2]||(a[2]=l=>s(o).comment=l),class:"mt-1 block w-full",rows:"2",required:""},null,8,["modelValue"]),c(I,{as:"button",onClick:v,class:d(["mt-3",{"opacity-25":s(o).processing}]),disabled:s(o).processing},{default:_(()=>[x(" Kirim ")]),_:1},8,["class","disabled"]),c(D,{message:s(o).errors.comment,class:"mt-2"},null,8,["message"])])):b("",!0),t("div",Q,[(i(!0),u(f,null,T(e.blog.comment,(l,k)=>(i(),g(K,{key:l.id,blog_id:e.blog.id,comment:l,comment_idx:k},null,8,["blog_id","comment","comment_idx"]))),128))])],64)):r.value==2?(i(),u("div",R,[t("div",W,[t("img",{class:"h-10 w-10 rounded-full",src:n.blog.user.profile_photo_url,alt:""},null,8,X)]),t("div",Z,[t("div",tt,[t("span",et,m(n.blog.user.name),1)]),t("div",ot,[t("span",null,m(n.blog.user.email),1)])])])):b("",!0)])])])])])]),_:1},8,["title"]))}};export{vt as default};
