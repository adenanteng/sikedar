import{d as l,T as n,c as d,w as e,o as i,g as a,a as s,b as m}from"./app.a3d6608a.js";import{_ as p}from"./ActionSection.df7ca2b6.js";import{_}from"./DangerButton.7b06e6ab.js";import"./SectionTitle.0195b737.js";import"./_plugin-vue_export-helper.cdc0426e.js";const u=s("div",{class:"max-w-xl text-sm text-gray-600"}," Setelah blog dihapus, semua sumber daya dan datanya akan dihapus secara permanen. ",-1),b={class:"mt-5"},w={__name:"DeleteForm",props:{blog:Object},setup(o){const t=o;l(null);const r=n({id:t.blog.id}),c=()=>{r.delete(route("blog.destroy",t.blog),{preserveScroll:!0})};return(g,f)=>(i(),d(p,null,{title:e(()=>[a(" Hapus blog ")]),description:e(()=>[a(" Hapus blog secara permanen ")]),content:e(()=>[u,s("div",b,[m(_,{class:"",onClick:c},{default:e(()=>[a(" Hapus blog ")]),_:1})])]),_:1}))}};export{w as default};
