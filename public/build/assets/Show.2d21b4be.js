import{_ as n}from"./AppLayout.a4b94b2a.js";import c from"./DeleteUserForm.1151f554.js";import u from"./LogoutOtherBrowserSessionsForm.f49714f0.js";import{S as a}from"./SectionBorder.6d62e20d.js";import f from"./TwoFactorAuthenticationForm.dea2057f.js";import l from"./UpdatePasswordForm.0ae555b2.js";import $ from"./UpdateProfileInformationForm.f5725092.js";import{c as _,w as p,o,b as r,e as t,F as s,f as i}from"./app.e16c5092.js";import{_ as g}from"./PreviousButton.0c85bc80.js";import"./DarkmodeToggle.0b623678.js";import"./helper.e9fc3b37.js";import"./transition.9b0e72d1.js";import"./ActionSection.592df2f1.js";import"./SectionTitle.757f75e5.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.5f63432e.js";import"./DialogModal.50cd8bd1.js";import"./InputError.4d5ca991.js";import"./SecondaryButton.6b8aa15d.js";import"./TextInput.879b7d50.js";import"./ActionMessage.410135a4.js";import"./PrimaryButton.66786709.js";import"./InputLabel.61da8b66.js";import"./FormSection.a1016830.js";const H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,d)=>(o(),_(n,{title:e.$page.props.user.name,name:e.$page.props.user.name,desc:e.$page.props.user.email,avatar:e.$page.props.user.profile_photo_url},{previous:p(()=>[r(g)]),default:p(()=>[e.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[r($,{user:e.$page.props.user},null,8,["user"]),r(a)],64)):i("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[r(l),r(a)],64)):i("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[r(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),r(a)],64)):i("",!0),r(u,{sessions:m.sessions},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[r(a),r(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{H as default};
