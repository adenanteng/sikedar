import{_ as n}from"./AppLayout.b0a0ad0d.js";import c from"./DeleteUserForm.0406a9a6.js";import u from"./LogoutOtherBrowserSessionsForm.45375a33.js";import{S as a}from"./SectionBorder.dac9e881.js";import f from"./TwoFactorAuthenticationForm.e062dd98.js";import l from"./UpdatePasswordForm.30fe6407.js";import $ from"./UpdateProfileInformationForm.bd05dafa.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.0bfba96a.js";import{_ as g}from"./PreviousButton.b86be7a7.js";import"./Banner.8db983ca.js";import"./DarkmodeToggle.cde8ab40.js";import"./helper.e9fc3b37.js";import"./transition.774a5a64.js";import"./ActionSection.7d30fe2b.js";import"./SectionTitle.4d425a76.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.a93d1ac3.js";import"./DialogModal.9e8b8369.js";import"./InputError.29c1ccd4.js";import"./SecondaryButton.9e0e8f17.js";import"./TextInput.9bb6d37b.js";import"./ActionMessage.50e68ceb.js";import"./PrimaryButton.2d50ad0e.js";import"./InputLabel.adac7908.js";import"./FormSection.dbb84e80.js";const J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{J as default};