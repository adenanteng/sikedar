import{d as r,c as u,w as l,o as _,a as e,b as t,g as f}from"./app.52827ccf.js";import{_ as p}from"./AppLayout.c5b88607.js";import{_ as g}from"./PrimaryButton.0a585a1e.js";import{_ as h}from"./TextInput.434d3486.js";import{_ as y}from"./Table.9b9b051c.js";import"./DarkmodeToggle.1cee4b19.js";import"./helper.e9fc3b37.js";const v={class:"flex justify-between gap-3"},w={class:""},b={id:"search"},x={class:""},T={__name:"Index",props:{category:Object|String},setup(i){const s=i,a=r(""),c=["Nama","Keterangan"],n=["name","desc"];return r(""),(m,o)=>(_(),u(p,{title:"Kategori Kelas",name:"Kategori Kelas",desc:"lorem ipsum"},{default:l(()=>[e("div",v,[e("div",w,[e("form",b,[t(h,{name:"query",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=d=>a.value=d),type:"text",class:"block w-full lg:w-96 mb-5 shadow",placeholder:"Cari disini"},null,8,["modelValue"])])]),e("div",x,[t(g,{as:"a",href:m.route("courseCategory.create")},{default:l(()=>[f("Tambah")]),_:1},8,["href"])])]),t(y,{title:c,data:s.category.data,paginate:s.category,columns:n,"filter-key":a.value,routes:"courseCategory",slug:!1,view:!1,edit:!0},null,8,["data","paginate","filter-key"])]),_:1}))}};export{T as default};