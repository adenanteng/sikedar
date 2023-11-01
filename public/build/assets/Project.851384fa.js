import{x as F,O as H,d as v,T as z,c as k,w as a,o as r,a as e,b as l,g as o,t,e as c,h as x,n as g,F as f,u as i,j as m,f as j}from"./app.4147f647.js";import{h as E}from"./moment.9709ab41.js";import{_ as O}from"./LandingLayout.0b275d52.js";import{_ as S}from"./PrimaryButton.7c5cb0ed.js";import{_ as q}from"./Heading.0c093754.js";import{_ as I}from"./Badge.7958d42b.js";import{_ as R}from"./InputLabel.e12eb11c.js";import{a as U}from"./DialogModal.1b743ca9.js";import{_ as Y}from"./InputError.f23438b2.js";import{_ as A}from"./TextAreaInput.af1e8e3d.js";import"./helper.e9fc3b37.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DarkmodeToggle.86fcfb79.js";const G={class:"pt-10"},J={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:items-start"},K={class:"relative mx-auto grid lg:grid-cols-6 gap-10"},Q={class:"lg:col-span-2"},W={class:"mt-3 bg-white bg-opacity-50 border border-gray-300 rounded-3xl shadow-lg"},X={class:"px-3 py-5 grid gap-3"},Z={class:"font-semibold text-gray-900 ml-2"},ee=["onClick"],se={key:0,class:"px-4 py-0 grid items-center justify-center sm:px-6"},te={class:"my-3"},oe={class:"text-sm text-gray-500"},ae={class:"font-medium"},re={class:"font-medium"},le={class:"font-medium"},ne={class:"flex-1 flex justify-between sm:hidden"},ce={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-center"},ie={class:"relative z-0 inline-flex -space-x-px","aria-label":"Pagination"},de=["innerHTML"],_e={class:"lg:col-span-4 py-3"},ue={key:0,class:""},me=["innerHTML"],pe={class:"mt-1 mb-5 text-primary-500 font-semibold"},ge=["innerHTML"],fe={class:"mt-10 py-10 px-10 bg-gray-200 bg-opacity-50 rounded-3xl border border-gray-300"},he={class:"grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2"},xe={class:"block text-xl font-bold text-gray-900"},ye=e("span",{class:"mt-1 block text-sm text-gray-600"},[e("span",{class:"font-medium text-gray-900"},"Published Budget")],-1),be={class:"block text-xl font-bold text-gray-900"},ve=e("span",{class:"mt-1 block text-sm text-gray-600"},[e("span",{class:"font-medium text-gray-900"},"Published Date")],-1),ke={class:"block text-xl font-bold text-gray-900"},je=e("span",{class:"mt-1 block text-sm text-gray-600"},[e("span",{class:"font-medium text-gray-900"},"Project Status")],-1),we={class:"block text-xl font-bold text-gray-900"},Me=e("span",{class:"mt-1 block text-sm text-gray-600"},[e("span",{class:"font-medium text-gray-900"},"Bid Count")],-1),$e={class:"mt-10 grid gap-10"},Ce={key:0,class:""},Le=e("i",{class:"fa-duotone fa-paper-plane mr-2"},null,-1),Pe={key:1},Te={class:"space-y-8 sm:space-y-12"},Be={role:"list",class:"mx-auto gap-x-4 gap-y-4 flex"},He={class:"space-y-4"},Se=["src"],Ve={class:"space-y-2"},De={class:"text-center text-xs font-medium lg:text-sm"},Ne={class:"mt-10 pt-10 border-t border-gray-300 flex justify-between items-start gap-10"},Fe={class:"flex items-center flex-none"},ze={class:"flex-shrink-0"},Ee=["src"],Oe={class:"ml-3"},qe={class:"text-sm font-medium text-gray-900"},Ie={class:"flex space-x-1 text-sm text-gray-500"},Re=["datetime"],Ue={class:"grid grid-cols-6 justify-between gap-5"},Ye={class:"col-span-6 sm:col-span-6"},rs={__name:"Project",props:{project:void 0},setup(V){const n=V;F(()=>{H.reload({only:["project"]})});function D(_){return _.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}function y(_){return E(_).format("DD MMM Y HH:mm")}const b=v(0);v(1);const d=z({project_id:null,desc:null,price:null}),N=()=>{console.log(d.desc),d.project_id=h,d.post(route("projectBid.store",n.project),{errorBag:"storeInformation",preserveScroll:!0,onSuccess:()=>{w(),console.log("2")},onError:()=>{console.log("3")},onFinish:()=>{console.log("5"),H.reload({only:["project"]})}})},h=v(null),w=()=>{h.value=null,d.reset()};return(_,M)=>(r(),k(O,{title:"Course",desc:"Lorem ipsum"},{default:a(()=>{var $,C,L,P,T,B;return[e("div",G,[e("div",J,[l(q,null,{header:a(()=>[o(" Proyek ")]),desc:a(()=>[o(" Lorem ipsum dolor sit amet ")]),_:1}),e("div",K,[e("div",Q,[e("div",W,[e("div",X,[e("h3",Z,t((C=($=n.project)==null?void 0:$.data.length)!=null?C:"0")+" Proyek Terbuka ",1),(r(!0),c(f,null,x((L=n.project)==null?void 0:L.data,(s,u)=>(r(),c("button",{key:s.id,onClick:p=>b.value=u},[e("div",{class:g(["rounded-3xl py-3 px-5 text-left",b.value==u?"bg-gray-900 text-white":"bg-gray-200 text-gray-900"])},t(s.name),3)],8,ee))),128)),n.project?(r(),c("div",se,[e("div",te,[e("p",oe,[o(" Menampilkan "+t(" ")+" "),e("span",ae,t(n.project.from),1),o(" "+t(" ")+" sampai "+t(" ")+" "),e("span",re,t(n.project.to),1),o(" "+t(" ")+" dari "+t(" ")+" "),e("span",le,t(n.project.total),1),o(" "+t(" ")+" hasil ")])]),e("div",ne,[l(i(m),{href:(P=n.project.prev_page_url)!=null?P:"",class:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"},{default:a(()=>[o(" Previous ")]),_:1},8,["href"]),l(i(m),{href:(T=n.project.next_page_url)!=null?T:"",class:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"},{default:a(()=>[o(" Next ")]),_:1},8,["href"])]),e("div",ce,[e("nav",ie,[(r(!0),c(f,null,x(n.project.links,s=>{var u;return r(),k(i(m),{href:(u=s.url)!=null?u:"",class:g(["relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full shadow-lg",s.active?"z-10 bg-primary-50 border-primary-500 text-primary-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 "])},{default:a(()=>[e("span",{innerHTML:s.label},null,8,de)]),_:2},1032,["href","class"])}),256))])])])):j("",!0)])])]),e("div",_e,[(r(!0),c(f,null,x((B=n.project)==null?void 0:B.data,(s,u)=>(r(),c(f,null,[b.value==u?(r(),c("div",ue,[l(I,{name:s.status,class:g(s.color)},null,8,["name","class"]),e("h3",{class:"mt-1 text-gray-900 font-semibold text-2xl",innerHTML:s.name},null,8,me),e("p",pe,[e("i",{class:g(["fa-regular mr-1",s.category.icon])},null,2),o(" "+t(s.category.name),1)]),e("p",{class:"prose prose-sm lg:prose-lg xl:prose-2xl",innerHTML:s.desc},null,8,ge),e("div",fe,[e("div",he,[e("p",null,[e("span",xe,"Rp "+t(D(s.budget_from)),1),ye]),e("p",null,[e("span",be,t(y(s.created_at)),1),ve]),e("p",null,[e("span",ke,t(s.status),1),je]),e("p",null,[e("span",we,t(s.bid.length),1),Me])])]),e("div",$e,[_.$page.props.user?(r(),c("div",Ce,[s.status_id==1?(r(),k(S,{key:0,onClick:p=>h.value=s.id},{default:a(()=>[Le,o(" Place new bid ")]),_:2},1032,["onClick"])):j("",!0)])):(r(),c("div",Pe,[e("p",null,[o("Silakan "),l(i(m),{class:"text-primary-600 font-semibold underline",href:_.route("login")},{default:a(()=>[o("login")]),_:1},8,["href"]),o(" untuk buat bid")])])),e("div",Te,[e("ul",Be,[(r(!0),c(f,null,x(s.bid,p=>(r(),c("li",{key:p.id},[e("div",He,[e("img",{class:"mx-auto h-10 w-10 rounded-full lg:h-16 lg:w-16",src:p.user.profile_photo_url,alt:""},null,8,Se),e("div",Ve,[e("div",De,[e("h3",null,t(p.user.name),1)])])])]))),128))])])]),e("div",Ne,[e("div",Fe,[e("div",ze,[l(i(m),{href:_.route("user.show",s.user)},{default:a(()=>[e("img",{class:"h-10 w-10 rounded-full",src:s.user.profile_photo_url,alt:""},null,8,Ee)]),_:2},1032,["href"])]),e("div",Oe,[e("p",qe,[l(i(m),{href:_.route("user.show",s.user)},{default:a(()=>[o(t(s.user.name),1)]),_:2},1032,["href"])]),e("div",Ie,[e("time",{datetime:y(s.created_at)},t(y(s.created_at)),9,Re)])])])])])):j("",!0)],64))),256))])])])]),l(U,{show:h.value!=null,onClose:w},{title:a(()=>[o(" Lorem ipsum dolor sit amet ")]),content:a(()=>[e("div",Ue,[e("div",Ye,[l(R,{for:"desc",value:"Deskripsi"}),l(A,{id:"desc",modelValue:i(d).desc,"onUpdate:modelValue":M[0]||(M[0]=s=>i(d).desc=s),class:"mt-1 block w-full",rows:"4",placeholder:"Masukkan deskripsi singkat tentang kemampuan kamu dan portofolio disini",required:""},null,8,["modelValue"]),l(Y,{message:i(d).errors.desc,class:"mt-2"},null,8,["message"])])])]),footer:a(()=>[l(S,{class:g(["ml-3",{"opacity-25":i(d).processing}]),disabled:i(d).processing,onClick:N},{default:a(()=>[o(" Simpan ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]}),_:1}))}};export{rs as default};