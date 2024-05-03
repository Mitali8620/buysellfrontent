"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[5309],{1185:function(t,o,a){a.d(o,{u1:function(){return b}});var e=a(655),n=a(2262),i=a(4578),u=a(2255),s=a(6921),r=a(3616),l=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.aboutId="",o.aboutTitle="",o.aboutDescription="",o.aboutEmail="",o.aboutPhone="",o.aboutWebsite="",o.adsOn="",o.adsClient="",o.adsSlot="",o.analytOn="",o.analytTrackId="",o.facebook="",o.googlePlus="",o.instagram="",o.youtube="",o.pinterest="",o.twitter="",o.privacypolicy="",o.gdpr="",o.uploadPoint="",o.safetyTips="",o.defaultPhoto=new r.Z,o}return(0,e.ZT)(o,t),o.prototype.init=function(t,o,a,e,n,i,u,s,r,l,p,c,d,b,f,h,y,_,v,m,g,w){return this.aboutId=t,this.aboutTitle=o,this.aboutDescription=a,this.aboutEmail=e,this.aboutPhone=n,this.aboutWebsite=i,this.adsOn=u,this.adsClient=s,this.adsSlot=r,this.analytOn=l,this.analytTrackId=p,this.facebook=c,this.googlePlus=d,this.instagram=b,this.youtube=f,this.pinterest=h,this.twitter=y,this.privacypolicy=_,this.gdpr=v,this.uploadPoint=m,this.safetyTips=g,this.defaultPhoto=w,this},o.prototype.getPrimaryKey=function(){return this.aboutId},o.prototype.fromMap=function(t){return(new o).init(t.about_id,t.about_title,t.about_description,t.about_email,t.about_phone,t.about_website,t.ads_on,t.ads_client,t.ads_slot,t.analyt_on,t.analyt_track_id,t.facebook,t.google_plus,t.instagram,t.youtube,t.pinterest,t.twitter,t.privacypolicy,t.GDPR,t.upload_point,t.safety_tips,(new r.Z).fromMap(t.default_photo))},o.prototype.fromMapList=function(t){var o=[];for(var a in t)null!=a&&o.push(this.fromMap(a));return o},o.prototype.toMap=function(t){var o={};return o["about_id"]=t.aboutId,o["about_title"]=t.aboutTitle,o["about_description"]=t.aboutDescription,o["about_email"]=t.aboutEmail,o["about_phone"]=t.aboutPhone,o["about_website"]=t.aboutWebsite,o["ads_on"]=t.adsOn,o["ads_client"]=t.adsClient,o["ads_slot"]=t.adsSlot,o["analyt_on"]=t.analytOn,o["analyt_track_id"]=t.analytTrackId,o["facebook"]=t.facebook,o["google_plus"]=t.googlePlus,o["instagram"]=t.instagram,o["youtube"]=t.youtube,o["pinterest"]=t.pinterest,o["twitter"]=t.twitter,o["privacypolicy"]=t.privacypolicy,o["GDPR"]=t.gdpr,o["upload_point"]=t.uploadPoint,o["safety_tips"]=t.safetyTips,o["default_photo"]=(new r.Z).toMap(t.defaultPhoto),o},o.prototype.toMapList=function(t){for(var o=[],a=0;a<t.length;a++)null!=t[a]&&o.push(this.toMap(t[a]));return o},o}(s.L),p=l,c=a(1597),d=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.aboutus=(0,n.qj)(new c.Z),o.loading=(0,n.qj)({value:!1}),o.limit=30,o.offset=0,o}return(0,e.ZT)(o,t),o.prototype.loadAboutUs=function(){return(0,e.mG)(this,void 0,void 0,(function(){var t;return(0,e.Jh)(this,(function(o){switch(o.label){case 0:return this.loading.value=!0,[4,u.Z.getAboutUsDataList(new p)];case 1:return t=o.sent(),null!=t.data&&t.data.length>0&&(this.aboutus.data=t.data[0]),this.loading.value=!1,[2]}}))}))},o.prototype.resetAboutUs=function(){return(0,e.mG)(this,void 0,void 0,(function(){return(0,e.Jh)(this,(function(t){switch(t.label){case 0:return this.offset=0,this.loading.value=!0,[4,u.Z.getAboutUsDataList(new p)];case 1:return t.sent(),this.loading.value=!1,[2]}}))}))},o}(i.n),b=(Symbol("AboutUsProvider"),function(){return(0,n.qj)(new d)})},2052:function(t,o,a){a.d(o,{Z:function(){return l}});var e=a(6252);function n(t,o,a,n,i,u){var s=(0,e.up)("ps-label");return(0,e.wg)(),(0,e.j4)(s,{class:"lg:text-xl sm:text-lg text-base font-medium",textColor:t.textColor},{default:(0,e.w5)((function(){return[(0,e.WI)(t.$slots,"default")]})),_:3},8,["textColor"])}var i=a(9576),u=(0,e.aZ)({name:"PsLabelTitle",components:{PsLabel:i.Z},props:{textColor:{type:String,default:"text-secondary-500 dark:text-secondaryDark-white"}}}),s=a(3744);const r=(0,s.Z)(u,[["render",n]]);var l=r},4803:function(t,o,a){a.d(o,{Z:function(){return p}});var e=a(6252),n={class:"w-mobile sm:w-median lg:w-large mx-auto"};function i(t,o,a,i,u,s){return(0,e.wg)(),(0,e.iD)("div",n,[(0,e.WI)(t.$slots,"content")])}var u=a(8345),s={name:"PsContentContainer",setup:function(){var t=(0,u.yj)();return{route:t}}},r=a(3744);const l=(0,r.Z)(s,[["render",i]]);var p=l},3646:function(t,o,a){a.r(o),a.d(o,{default:function(){return h}});var e=a(6252),n=a(3577),i={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},u={key:0,class:"mt-4"};function s(t,o,a,s,r,l){var p=(0,e.up)("ps-label-title"),c=(0,e.up)("ps-label"),d=(0,e.up)("ps-content-container");return(0,e.wg)(),(0,e.j4)(d,null,{content:(0,e.w5)((function(){return[(0,e._)("div",i,[(0,e.Wm)(p,null,{default:(0,e.w5)((function(){return[(0,e.Uk)((0,n.zw)(t.$t("safety__safety_tips")),1)]})),_:1}),null!=s.aboutUsProvider.aboutus.data?((0,e.wg)(),(0,e.iD)("p",u,[(0,e.Wm)(c,{innerHTML:s.aboutUsProvider.aboutus.data.safetyTips},null,8,["innerHTML"])])):(0,e.kq)("",!0)])]})),_:1})}var r=a(4803),l=a(2052),p=a(9576),c=a(1185),d={name:"SafetyView",components:{PsContentContainer:r.Z,PsLabelTitle:l.Z,PsLabel:p.Z},setup:function(){var t=(0,c.u1)();return t.loadAboutUs(),{aboutUsProvider:t}}},b=a(3744);const f=(0,b.Z)(d,[["render",s]]);var h=f}}]);
//# sourceMappingURL=Safety-legacy.3f3f10a7.js.map