import{d as p,T as n,c as d,w as e,o as i,g as a,a as s,b as m}from"./app.8a68db54.js";import{_ as l}from"./ActionSection.ce18f46f.js";import{_}from"./DangerButton.b44bb205.js";import"./SectionTitle.2397f149.js";import"./_plugin-vue_export-helper.cdc0426e.js";const u=s("div",{class:"max-w-xl text-sm text-gray-600"}," Setelah proyek dihapus, semua sumber daya dan datanya akan dihapus secara permanen. ",-1),f={class:"mt-5"},v={__name:"DeleteForm",props:{project:Object},setup(r){const t=r;p(null);const o=n({id:t.project.id}),c=()=>{o.delete(route("project.destroy",t.project),{preserveScroll:!0})};return(k,x)=>(i(),d(l,null,{title:e(()=>[a(" Hapus Proyek ")]),description:e(()=>[a(" Hapus proyek secara permanen ")]),content:e(()=>[u,s("div",f,[m(_,{class:"",onClick:c},{default:e(()=>[a(" Hapus proyek ")]),_:1})])]),_:1}))}};export{v as default};