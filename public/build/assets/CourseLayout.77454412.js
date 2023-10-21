import{d as x,l as C,i as y,o as d,e as c,c as b,u as a,Z as w,a as e,b as s,w as o,g as i,t as u,m as k,n as g,r as z,p as S,O as N}from"./app.e16c5092.js";import{_ as O,a as $,b as P,c as p,d as M}from"./DarkmodeToggle.0b623678.js";import{_ as A}from"./PreviousButton.0c85bc80.js";import{M as L,S as V,h as j,A as D,W as I,j as J,y as K}from"./transition.9b0e72d1.js";const T={class:"sticky top-0 z-50"},W={class:"min-h-screen bg-gray-100 bg-glass bg-fixed"},E={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"},Z={class:"relative flex items-center justify-between lg:justify-between"},q={class:"py-5 flex-shrink-0 lg:static flex items-center"},F={class:"lg:ml-4 flex items-center lg:py-5 lg:pr-0.5"},G={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},H=["src","alt"],Q={key:1,class:"inline-flex rounded-3xl"},R={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},U=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),X=e("div",{class:"border-t border-gray-100"},null,-1),Y=["onSubmit"],ee={class:"lg:hidden"},te={class:"rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"},se={class:"pt-3 pb-2"},oe={class:"flex items-center justify-between px-4"},ae={class:"-mr-2"},le={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ie=e("div",{class:"mt-3 px-2 space-y-1"},null,-1),ne={class:"pt-4 pb-2"},re={class:"flex items-center px-5"},de={class:"flex-shrink-0"},ce=["src","alt"],ue={class:"ml-3 min-w-0 flex-1"},pe={class:"text-base font-medium text-gray-800 truncate capitalize"},ge={class:"text-sm font-medium text-gray-500 truncate"},me={class:"mt-3 px-2 space-y-1"},fe=["onSubmit"],he={class:""},_e={class:"relative max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-0"},ve={class:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl mt-10"},xe=e("div",{class:"py-10 block lg:hidden"},null,-1),ye={class:"border-t border-gray-300 py-5 text-sm text-gray-500 text-center sm:text-left hidden lg:block"},be={class:"block sm:inline capitalize"},we=e("span",{class:"block sm:inline"},"All rights reserved.",-1),je={__name:"CourseLayout",props:{title:String,darkMode:Boolean,greeting:String,name:String,desc:String,avatar:String},setup(m){var h;const l=x((h=JSON.parse(localStorage.getItem("darkmode")))!=null?h:!1);C(l,t=>{console.log(`darkmode is ${t}`),localStorage.setItem("darkmode",JSON.stringify(t))});const n=x(!1);y(()=>!!S().action),y(()=>!!S().previous);const f=()=>{N.post(route("logout"))};return(t,r)=>{var _;return d(),c("div",{class:g(["transition duration-1000",l.value?"nightwind dark":"nightwind"])},[t.$page.props.appSetting?(d(),b(a(w),{key:0,title:m.title+" - "+t.$page.props.appSetting.name},null,8,["title"])):(d(),b(a(w),{key:1,title:m.title},null,8,["title"])),e("div",T,[s(O)]),e("div",W,[s(a(K),{as:"header",class:""},{default:o(({open:B})=>[e("div",E,[e("div",Z,[e("div",q,[s(A)]),e("div",F,[s($,{darkMode:l.value,onClick:r[0]||(r[0]=v=>l.value=!l.value)},null,8,["darkMode"]),s(a(L),{as:"div",class:"ml-4 relative flex-shrink-0"},{default:o(()=>[s(P,{align:"right",width:"48"},{trigger:o(()=>[t.$page.props.jetstream.managesProfilePhotos?(d(),c("button",G,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,H)])):(d(),c("span",Q,[e("button",R,[i(u(t.$page.props.user.name)+" ",1),U])]))]),content:o(()=>[s(p,{href:t.route("landing.welcome")},{default:o(()=>[i(" Beranda ")]),_:1},8,["href"]),s(p,{href:t.route("dashboard")},{default:o(()=>[i(" Dasbor ")]),_:1},8,["href"]),s(p,{href:t.route("profile.show")},{default:o(()=>[i(" Profil ")]),_:1},8,["href"]),X,e("form",{onSubmit:k(f,["prevent"])},[s(p,{as:"button"},{default:o(()=>[i(" Keluar ")]),_:1})],40,Y)]),_:1})]),_:1})])])]),s(a(V),{as:"template",show:B},{default:o(()=>[e("div",ee,[s(a(j),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-150 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>[s(a(D),{class:"z-20 fixed inset-0 bg-black bg-opacity-50"})]),_:1}),s(a(j),{as:"template",enter:"duration-150 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-150 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:o(()=>[s(a(I),{focus:"",class:"z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"},{default:o(()=>[e("div",te,[e("div",se,[e("div",oe,[e("div",null,[s($,{darkMode:l.value,onClick:r[1]||(r[1]=v=>l.value=!l.value)},null,8,["darkMode"])]),e("div",ae,[s(a(J),{class:"bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"},{default:o(()=>[e("button",{class:"inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:r[2]||(r[2]=v=>n.value=!n.value)},[(d(),c("svg",le,[e("path",{class:g({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])]),_:1})])]),ie]),e("div",ne,[e("div",re,[e("div",de,[e("img",{class:"h-12 w-12 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,ce)]),e("div",ue,[e("div",pe,u(t.$page.props.user.name),1),e("div",ge,u(t.$page.props.user.email),1)])]),e("div",me,[s(M,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:o(()=>[i(" Profil ")]),_:1},8,["href","active"]),e("form",{method:"POST",onSubmit:k(f,["prevent"])},[s(M,{as:"button"},{default:o(()=>[i(" Keluar ")]),_:1})],40,fe)])])])]),_:1})]),_:1})])]),_:2},1032,["show"])]),_:1}),e("main",he,[e("div",_e,[z(t.$slots,"default")])]),e("footer",null,[e("div",ve,[xe,e("div",ye,[e("span",be,"\xA9 2023 "+u((_=t.$page.props.appSetting)==null?void 0:_.name)+". ",1),we])])])])],2)}}};export{je as _};