import{_ as n}from"./AppLayout.cf87c8e5.js";import c from"./DeleteUserForm.527a1444.js";import u from"./LogoutOtherBrowserSessionsForm.36177d0e.js";import{S as a}from"./SectionBorder.4de2de42.js";import f from"./TwoFactorAuthenticationForm.14dbe066.js";import l from"./UpdatePasswordForm.dc5ac158.js";import $ from"./UpdateProfileInformationForm.dac6c61a.js";import{c as _,w as p,o,b as e,e as t,F as s,f as i}from"./app.87bf308e.js";import{_ as g}from"./PreviousButton.06fbc2b4.js";import"./DarkmodeToggle.5e233903.js";import"./ActionSection.4f6ed495.js";import"./SectionTitle.d5ba94fd.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DangerButton.472c7329.js";import"./DialogModal.257475eb.js";import"./InputError.c844044c.js";import"./SecondaryButton.06b44b90.js";import"./TextInput.5f42d168.js";import"./ActionMessage.26e66072.js";import"./PrimaryButton.721e85db.js";import"./InputLabel.c308e398.js";import"./FormSection.b75286e1.js";const z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(r,d)=>(o(),_(n,{title:r.$page.props.user.name,name:r.$page.props.user.name,desc:r.$page.props.user.email,avatar:r.$page.props.user.profile_photo_url},{previous:p(()=>[e(g)]),default:p(()=>[r.$page.props.jetstream.canUpdateProfileInformation?(o(),t(s,{key:0},[e($,{user:r.$page.props.user},null,8,["user"]),e(a)],64)):i("",!0),r.$page.props.jetstream.canUpdatePassword?(o(),t(s,{key:1},[e(l),e(a)],64)):i("",!0),r.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),t(s,{key:2},[e(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication},null,8,["requires-confirmation"]),e(a)],64)):i("",!0),e(u,{sessions:m.sessions},null,8,["sessions"]),r.$page.props.jetstream.hasAccountDeletionFeatures?(o(),t(s,{key:3},[e(a),e(c)],64)):i("",!0)]),_:1},8,["title","name","desc","avatar"]))}};export{z as default};
