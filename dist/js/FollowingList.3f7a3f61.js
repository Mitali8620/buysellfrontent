"use strict";(self["webpackChunkflutter_buy_sell"]=self["webpackChunkflutter_buy_sell"]||[]).push([[6974],{5805:function(e,t,l){l.r(t),l.d(t,{default:function(){return W}});var r=l(6252),s=l(3577),o={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},n={class:"flex flex-col items-start mt-10"},u={class:"mb-4 flex items-center mt-8"},i={class:"flex flex-col pb-16"},a={class:"flex flex-row"},d={class:"w-full"},c={key:0,class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4"},f={key:1,class:"w-full flex justify-center"},m={class:"flex flex-col items-center"};function w(e,t,l,w,_,g){var p=(0,r.up)("ps-label-header-4"),v=(0,r.up)("ps-label"),k=(0,r.up)("ps-route-link"),x=(0,r.up)("ps-icon"),b=(0,r.up)("user-list-horizontal"),P=(0,r.up)("ps-button"),U=(0,r.up)("ps-content-container");return(0,r.wg)(),(0,r.j4)(U,null,{content:(0,r.w5)((function(){return[(0,r._)("div",o,[(0,r._)("div",n,[(0,r.Wm)(p,{class:"mb-4 font-medium"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,s.zw)(e.$t("following_list__following_list")),1)]})),_:1}),(0,r.Wm)(v,{textColor:""},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,s.zw)(e.$t("following_list__text")),1)]})),_:1})]),(0,r._)("div",u,[(0,r.Wm)(k,{to:{name:"profile"}},{default:(0,r.w5)((function(){return[(0,r.Wm)(v,{class:"hover:underline cursor-pointer font-medium"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,s.zw)(w.breadcrumbuserProvider.user.data?w.breadcrumbuserProvider.user.data.userName:""),1)]})),_:1})]})),_:1}),(0,r.Wm)(x,{name:"rightArrow",class:"mx-2"}),(0,r.Wm)(v,{class:"font-light"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,s.zw)(e.$t("following_list__following_list")),1)]})),_:1})]),(0,r._)("div",i,[(0,r._)("div",a,[(0,r._)("div",d,[null!=w.userProvider.userList.data?((0,r.wg)(),(0,r.iD)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.userProvider.userList.data,(function(e){return(0,r.wg)(),(0,r.iD)("div",{class:"w-full col-span-2 lg:col-span-3",key:e.userId},[(0,r.Wm)(k,{to:{name:"other-profile",params:{userId:e.userId}}},{default:(0,r.w5)((function(){return[(0,r.Wm)(b,{user:e},null,8,["user"])]})),_:2},1032,["to"])])})),128))])):0==w.userProvider.loading.value?((0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(v,{textColor:"text-secondary-500 dark:text-secondaryDark-white lg:text-xl sm:text-lg text-base font-medium",class:"mt-10 flex-grow-0 mx-auto"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,s.zw)(e.$t("list__no_result")),1)]})),_:1})])):(0,r.kq)("",!0)])])]),(0,r._)("div",m,[0==w.userProvider.loading.value?((0,r.wg)(),(0,r.j4)(P,{key:0,class:(0,s.C_)(["w-60 mx-auto mt-8",w.userProvider.isNoMoreRecord?"hidden":""]),onClick:w.loadMore},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,s.zw)(e.$t("following_list__load_more")),1)]})),_:1},8,["onClick","class"])):((0,r.wg)(),(0,r.j4)(P,{key:1,class:"w-60 mx-auto mt-8",onClick:w.loadMore,disabled:!0},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,s.zw)(e.$t("following_list__loading")),1)]})),_:1},8,["onClick"]))])])]})),_:1})}var _=l(4803),g=l(6157),p=l(9576),v=l(593),k=l(6037),x=l(8385),b=l(4808),P=l(2365),U=l(9399),h=l(3301),C=l(6948),L={name:"FollowingListView",components:{PsContentContainer:_.Z,PsLabelHeader4:g.Z,UserListHorizontal:P.Z,PsLabel:p.Z,PsButton:v.Z,PsIcon:k.Z,PsRouteLink:x.Z},setup:function(){var e=U.$.psValueHolder,t=(0,b.L)(),l=(0,h.xu)(),r=e.getLoginUserId(),s=(new C.Z).getFollowingUsers();function o(){t.loadUserList(s)}return s.loginUserId=r,t.loadUserList(s),l.getUser(r),{userProvider:t,loadMore:o,breadcrumbuserProvider:l}}},y=l(3744);const z=(0,y.Z)(L,[["render",w]]);var W=z}}]);
//# sourceMappingURL=FollowingList.3f7a3f61.js.map