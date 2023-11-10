import{T as N,d as M,S as W,o as c,e as d,a as t,n as _,g,t as v,F as h,f as y,b as n,u as s,w as p,h as I,c as F,p as Y,U as z,l as E}from"./app.b82d6052.js";import{m as A}from"./moment.a89d14f3.js";import{_ as G}from"./PrimaryButton.b57c35fd.js";import{_ as D}from"./TextAreaInput.e87cba20.js";import{_ as k}from"./InputError.1239f392.js";import{a as J}from"./DialogModal.76352e17.js";import{_ as H}from"./InputLabel.9e004076.js";import{_ as P}from"./ActionMessage.d7153aa3.js";import{_ as Q}from"./DangerButton.ec6e9c31.js";const X={class:"flex space-x-4 text-sm text-gray-500 ml-10"},Z={class:"flex-none py-0"},ee=["src"],te={class:"font-medium text-sm text-gray-900"},se=t("i",{class:"fa-regular fa-angle-right"},null,-1),oe=["innerHTML"],le={class:"text-xs"},re=["datetime"],ne={class:"flex justify-between items-start gap-5 mt-2"},ie={class:""},ae={key:0,class:""},ce={class:"flex-none flex space-x-5 mr-5"},de={class:"space-x-2"},me={class:"space-x-2"},ue={class:"space-x-2"},_e=t("i",{class:"text-lg fa-regular fa-triangle-exclamation text-red-600"},null,-1),pe=[_e],fe={class:"space-y-5"},ge={class:"flex h-5 items-center"},ve=["id","value"],he={class:"ml-3 text-sm"},xe={class:"mt-10"},be={__name:"CommentChildSection",props:{course_id:Number,project_id:Number,blog_id:Number,comment:Object,child:Object,child_idx:Number,mother:{type:Boolean,default:!1}},setup(T){var $,S,w;const e=T,o=N({id:null,comment:null,course_id:e.course_id,blog_id:e.blog_id,parent_id:e.child.id}),L=()=>{e.course_id!=null?o.post(route("courseComment.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{o.reset(),f.value=!1}}):e.blog_id!=null&&o.post(route("blogComment.store"),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{o.reset(),f.value=!1}})},U=u=>{e.course_id!=null?o.post(route("courseComment.like",u),{preserveScroll:!0,onSuccess:()=>{}}):e.blog_id!=null&&o.post(route("blogComment.like",u),{preserveScroll:!0,onSuccess:()=>{}})},q=u=>{e.course_id!=null?o.post(route("courseComment.dislike",u),{preserveScroll:!0,onSuccess:()=>{}}):e.blog_id!=null&&o.post(route("blogComment.dislike",u),{preserveScroll:!0,onSuccess:()=>{}})},l=N({id:null,course_id:($=e.course_id)!=null?$:null,project_id:(S=e.project_id)!=null?S:null,blog_id:(w=e.blog_id)!=null?w:null,comment_id:e.comment.id,category_id:null,desc:null}),K=()=>{l.post(route("complaint.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{setTimeout(()=>C(),2e3),l.reset()}})},x=M(!1),C=()=>{x.value=!1},f=M(!1);function b(u){return A(u).format("DD MMM Y HH:mm")}return(u,a)=>{const B=W("CommentChildSection",!0);return c(),d(h,null,[t("div",X,[t("div",Z,[t("img",{src:e.child.user.profile_photo_url,alt:"",class:"h-10 w-10 rounded-full bg-gray-100"},null,8,ee)]),t("div",{class:_([(e.child_idx===0,""),"flex-1 pb-3"])},[t("h3",te,[g(v(e.child.user.name)+" ",1),e.child.mother_name&&e.mother?(c(),d(h,{key:0},[se,g(" "+v(e.child.mother_name),1)],64)):y("",!0)]),t("div",{class:"prose prose-sm max-w-none text-gray-500",innerHTML:e.child.content},null,8,oe),t("p",le,[t("time",{datetime:b(e.child.created_at)},v(b(e.child.created_at)),9,re)]),t("div",ne,[t("div",ie,[t("button",{onClick:a[0]||(a[0]=i=>f.value=!f.value),class:"font-medium text-primary-600"},"Balas"),f.value?(c(),d("div",ae,[n(D,{id:"comment",modelValue:s(o).comment,"onUpdate:modelValue":a[1]||(a[1]=i=>s(o).comment=i),class:"mt-1 block w-full",rows:"2",autofocus:"",required:""},null,8,["modelValue"]),n(G,{as:"button",onClick:L,class:_(["mt-3",{"opacity-25":s(o).processing}]),disabled:s(o).processing},{default:p(()=>[g(" Kirim ")]),_:1},8,["class","disabled"]),n(k,{message:s(o).errors.comment,class:"mt-2"},null,8,["message"])])):y("",!0)]),t("div",ce,[t("div",de,[t("button",{type:"button",onClick:a[2]||(a[2]=i=>U(e.child.id))},[t("i",{class:_(["text-lg fa-heart",e.child.has_upvoted?"fa-solid text-red-600":"fa-regular text-primary-600"])},null,2)]),e.child.likes!=0?(c(),d("span",{key:0,class:_(e.child.has_upvoted?"text-red-600":"text-primary-600")},v(e.child.likes),3)):y("",!0)]),t("div",me,[t("button",{type:"button",onClick:a[3]||(a[3]=i=>q(e.child.id))},[t("i",{class:_(["text-lg fa-thumbs-down",e.child.has_downvoted?"fa-solid text-red-600":"fa-regular text-red-600"])},null,2)])]),t("div",ue,[t("button",{type:"button",onClick:a[4]||(a[4]=i=>x.value=!0)},pe)])])])],2)]),(c(!0),d(h,null,I(e.child.child,(i,r)=>(c(),F(B,{course_id:e.course_id,comment:e.comment,child:i,child_idx:r,mother:!0},null,8,["course_id","comment","child","child_idx"]))),256)),n(J,{show:x.value,onClose:C},{title:p(()=>[g(" Silahkan pilih alasan ")]),content:p(()=>[t("fieldset",null,[t("div",fe,[(c(!0),d(h,null,I(u.$page.props.selectComplaint,(i,r)=>(c(),d("div",{key:r,class:"relative flex items-start"},[t("div",ge,[Y(t("input",{id:r,"onUpdate:modelValue":a[5]||(a[5]=m=>s(l).category_id=m),type:"radio",value:r,class:"h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500",required:""},null,8,ve),[[z,s(l).category_id,void 0,{number:!0}]])]),t("div",he,[n(H,{value:i},null,8,["value"])])]))),128))]),n(k,{message:s(l).errors.category_id,class:"mt-2"},null,8,["message"])]),t("div",xe,[n(H,{for:"desc",class:"ml-2",value:"Keterangan"}),n(D,{id:"desc",modelValue:s(l).desc,"onUpdate:modelValue":a[6]||(a[6]=i=>s(l).desc=i),class:"mt-1 block w-full",rows:"2",required:""},null,8,["modelValue"]),n(k,{message:s(l).errors.desc,class:"mt-2"},null,8,["message"])])]),footer:p(()=>[n(P,{on:s(l).recentlySuccessful,class:"mr-3"},{default:p(()=>[g(" Berhasil disimpan. ")]),_:1},8,["on"]),n(Q,{class:_({"opacity-25":s(l).processing}),disabled:s(l).processing,onClick:E(K,["prevent"])},{default:p(()=>[g(" Laporkan ")]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"])],64)}}},ye={class:"flex space-x-4 text-sm text-gray-500"},ke={class:"flex-none py-5"},Ce=["src"],$e={class:"font-medium text-sm text-gray-900"},Se=["innerHTML"],we={class:"text-xs"},Ve=["datetime"],Me={class:"flex justify-between items-start gap-5 mt-2"},Be={class:""},je={key:0,class:""},Ne={class:"flex-none flex space-x-5 mr-5"},Ie={class:"space-x-2"},De={class:"space-x-2"},He={class:"space-x-2"},Te=t("i",{class:"text-lg fa-regular fa-triangle-exclamation text-red-600"},null,-1),Le=[Te],Ue=t("i",{class:"fa-regular fa-angle-down mr-2"},null,-1),qe={class:"space-y-5"},Ke={class:"flex h-5 items-center"},Oe=["id","value"],Re={class:"ml-3 text-sm"},Fe={class:"mt-10"},Xe={__name:"CommentSection",props:{course_id:Number,project_id:Number,blog_id:Number,comment:Object,comment_idx:Number},setup(T){var S,w,u,a,B;const e=T,o=N({id:null,comment:null,course_id:(S=e.course_id)!=null?S:null,blog_id:(w=e.blog_id)!=null?w:null,parent_id:e.comment.id}),L=()=>{e.course_id!=null?o.post(route("courseComment.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{o.reset(),f.value=!1}}):e.blog_id!=null&&o.post(route("blogComment.store"),{errorBag:"updateInformation",preserveScroll:!0,onSuccess:()=>{o.reset(),f.value=!1}})},U=i=>{e.course_id!=null?o.post(route("courseComment.like",i),{preserveScroll:!0,onSuccess:()=>{}}):e.blog_id!=null&&o.post(route("blogComment.like",i),{preserveScroll:!0,onSuccess:()=>{}})},q=i=>{e.course_id!=null?o.post(route("courseComment.dislike",i),{preserveScroll:!0,onSuccess:()=>{}}):e.blog_id!=null&&o.post(route("blogComment.dislike",i),{preserveScroll:!0,onSuccess:()=>{}})},l=N({id:null,course_id:(u=e.course_id)!=null?u:null,project_id:(a=e.project_id)!=null?a:null,blog_id:(B=e.blog_id)!=null?B:null,comment_id:e.comment.id,category_id:null,desc:null}),K=()=>{l.post(route("complaint.store"),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{setTimeout(()=>C(),2e3),l.reset()}})},x=M(!1),C=()=>{x.value=!1},f=M(!1),b=M(!1);function $(i){return A(i).format("DD MMM Y HH:mm")}return(i,r)=>(c(),d(h,null,[t("div",ye,[t("div",ke,[t("img",{src:e.comment.user.profile_photo_url,alt:"",class:"h-10 w-10 rounded-full bg-gray-100"},null,8,Ce)]),t("div",{class:_([e.comment_idx===0?"":"border-t border-gray-300","flex-1 py-3"])},[t("h3",$e,v(e.comment.user.name),1),t("div",{class:"prose prose-sm max-w-none text-gray-500",innerHTML:e.comment.content},null,8,Se),t("p",we,[t("time",{datetime:$(e.comment.created_at)},v($(e.comment.created_at)),9,Ve)]),t("div",Me,[t("div",Be,[t("button",{onClick:r[0]||(r[0]=m=>f.value=!f.value),class:"font-medium text-primary-600"},"Balas"),f.value?(c(),d("div",je,[n(D,{id:"comment",modelValue:s(o).comment,"onUpdate:modelValue":r[1]||(r[1]=m=>s(o).comment=m),class:"mt-1 block w-full",rows:"2",autofocus:"",required:""},null,8,["modelValue"]),n(G,{as:"button",onClick:L,class:_(["mt-3",{"opacity-25":s(o).processing}]),disabled:s(o).processing},{default:p(()=>[g(" Kirim ")]),_:1},8,["class","disabled"]),n(k,{message:s(o).errors.comment,class:"mt-2"},null,8,["message"])])):y("",!0)]),t("div",Ne,[t("div",Ie,[t("button",{type:"button",onClick:r[2]||(r[2]=m=>U(e.comment.id))},[t("i",{class:_(["text-lg fa-heart",e.comment.has_upvoted?"fa-solid text-primary-600":"fa-regular text-primary-600"])},null,2)]),e.comment.likes!=0?(c(),d("span",{key:0,class:_((e.comment.has_upvoted,"text-primary-600"))},v(e.comment.likes),3)):y("",!0)]),t("div",De,[t("button",{type:"button",onClick:r[3]||(r[3]=m=>q(e.comment.id))},[t("i",{class:_(["text-lg fa-thumbs-down",e.comment.has_downvoted?"fa-solid text-red-600":"fa-regular text-red-600"])},null,2)])]),t("div",He,[t("button",{type:"button",onClick:r[4]||(r[4]=m=>x.value=!0)},Le)])])])],2)]),(c(!0),d(h,null,I(e.comment.child,(m,V)=>{var j,O,R;return c(),d(h,null,[b.value?(c(),F(be,{key:0,course_id:(j=e.course_id)!=null?j:null,project_id:(O=e.project_id)!=null?O:null,blog_id:(R=e.blog_id)!=null?R:null,comment:e.comment,child:m,child_idx:V},null,8,["course_id","project_id","blog_id","comment","child","child_idx"])):y("",!0)],64)}),256)),e.comment.child.length&&!b.value?(c(),d("button",{key:0,class:"ml-12 font-medium text-primary-600",onClick:r[5]||(r[5]=m=>b.value=!b.value)},[Ue,g(" "+v(e.comment.child.length)+" balasan ",1)])):y("",!0),n(J,{show:x.value,onClose:C},{title:p(()=>[g(" Silahkan pilih alasan ")]),content:p(()=>[t("fieldset",null,[t("div",qe,[(c(!0),d(h,null,I(i.$page.props.selectComplaint,(m,V)=>(c(),d("div",{key:V,class:"relative flex items-start"},[t("div",Ke,[Y(t("input",{id:V,"onUpdate:modelValue":r[6]||(r[6]=j=>s(l).category_id=j),type:"radio",value:V,class:"h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500",required:""},null,8,Oe),[[z,s(l).category_id,void 0,{number:!0}]])]),t("div",Re,[n(H,{value:m},null,8,["value"])])]))),128))]),n(k,{message:s(l).errors.category_id,class:"mt-2"},null,8,["message"])]),t("div",Fe,[n(H,{for:"desc",class:"ml-2",value:"Keterangan"}),n(D,{id:"desc",modelValue:s(l).desc,"onUpdate:modelValue":r[7]||(r[7]=m=>s(l).desc=m),class:"mt-1 block w-full",rows:"2",required:""},null,8,["modelValue"]),n(k,{message:s(l).errors.desc,class:"mt-2"},null,8,["message"])])]),footer:p(()=>[n(P,{on:s(l).recentlySuccessful,class:"mr-3"},{default:p(()=>[g(" Berhasil disimpan. ")]),_:1},8,["on"]),n(Q,{class:_({"opacity-25":s(l).processing}),disabled:s(l).processing,onClick:E(K,["prevent"])},{default:p(()=>[g(" Laporkan ")]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"])],64))}};export{Xe as _};