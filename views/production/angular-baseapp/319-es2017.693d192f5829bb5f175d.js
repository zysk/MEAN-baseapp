(self.webpackChunkangular_baseapp=self.webpackChunkangular_baseapp||[]).push([[319],{1319:function(t,e,r){"use strict";r.r(e),r.d(e,{UserModule:function(){return b}});var s=r(1116),o=r(274),n=r(2750),a=r(5614),i=r(2589);let c=(()=>{class t{constructor(t,e,r){this._router=t,this._spinner=e,this._dataShare=r}canActivate(t,e){return this._spinner.show(),!!this._dataShare.loggedInUserDetails||(this._spinner.hide(),this._router.navigate(["/home/login"]),!1)}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(o.F0),a.LFG(i.t2),a.LFG(n._))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),t})();var h=r(2309),p=r(5416),l=r(3559),u=r(2501),g=r.n(u),d=r(4399);let _=(()=>{class t{constructor(t,e,r,s,o){this._router=t,this._dataShare=e,this._spinner=r,this._apiConfig=s,this._httpClient=o,this._destroy$=new l.xQ}ngOnInit(){}login(){this._spinner.show(),this._httpClient.postRequest(this._apiConfig.API.login,{username:"",password:""}).pipe((0,p.R)(this._destroy$)).subscribe(t=>{"success"===t.status?(localStorage.setItem("access-token",t.accessToken),this.getLoggedInUserDetails()):(g().fire({title:"Oops",text:t.message,icon:"error"}),this._router.navigate(["/login"]))})}getLoggedInUserDetails(){this._httpClient.getRequest(this._apiConfig.API.loggedInUser).pipe((0,p.R)(this._destroy$)).subscribe(t=>{"success"===t.status?(this._dataShare.loggedInUserDetails=t.data,this._router.navigate(["/home/provide-route"])):g().fire({title:"Oops",text:t.message,icon:"error"})})}ngOnDestroy(){this._destroy$.next(),this._destroy$.complete()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(o.F0),a.Y36(n._),a.Y36(i.t2),a.Y36(d.w),a.Y36(h.r))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-login"]],decls:2,vars:0,consts:[[1,"h-full","flex","justify-center","items-center"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a._uU(1,"Hello! World..."),a.qZA())},styles:[".btn[_ngcontent-%COMP%]{border-radius:.375rem;border-width:1px;border-color:transparent;--tw-bg-opacity:1;background-color:rgba(248,113,113,var(--tw-bg-opacity));padding:.5rem 1rem;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));--tw-shadow:0 1px 2px 0 rgba(0,0,0,0.05);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}"]}),t})();const f=[{path:"login",component:_},{path:"dashboard",component:_,canActivate:[c]},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.Bz.forChild(f)],o.Bz]}),t})();var m=r(4887);let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.ez,w,m.m]]}),t})()}}]);