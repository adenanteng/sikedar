import{_ as n}from"./AppLayout.76bee16d.js";import c from"./DeleteUserForm.990b1b3f.js";import u from"./LogoutOtherBrowserSessionsForm.0ccd9419.js";import{S as a}from"./SectionBorder.163a0f76.js";import f from"./TwoFactorAuthenticationForm.88f67b27.js";import l from"./UpdatePasswordForm.2a075dd3.js";import $ from"./UpdateProfileInformationForm.b8884a78.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.b82d6052.js";import{_ as g}from"./PreviousButton.e18ddc1e.js";import"./Banner.e1322f35.js";import"./DarkmodeToggle.75454c72.js";import"./helper.e9fc3b37.js";import"./transition.3992d2e2.js";import"./ActionSection.5f02193c.js";import"./SectionTitle.c86b936d.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.ec6e9c31.js";import"./DialogModal.76352e17.js";import"./InputError.1239f392.js";import"./SecondaryButton.c9b72208.js";import"./TextInput.f08dd4c7.js";import"./ActionMessage.d7153aa3.js";import"./PrimaryButton.b57c35fd.js";import"./InputLabel.9e004076.js";import"./FormSection.a2f9332d.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};