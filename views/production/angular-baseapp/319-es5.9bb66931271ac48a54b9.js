!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(self.webpackChunkangular_baseapp=self.webpackChunkangular_baseapp||[]).push([[319],{1319:function(e,r,o){"use strict";o.r(r),o.d(r,{UserModule:function(){return k}});var i,s=o(1116),a=o(274),c=o(2750),u=o(5614),h=o(2589),p=function(){var e=function(){function e(n,r,o){t(this,e),this._router=n,this._spinner=r,this._dataShare=o}return n(e,[{key:"canActivate",value:function(t,e){return this._spinner.show(),!!this._dataShare.loggedInUserDetails||(this._spinner.hide(),this._router.navigate(["/home/login"]),!1)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.LFG(a.F0),u.LFG(h.t2),u.LFG(c._))},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac}),e}(),l=o(2309),f=o(5416),d=o(3559),g=o(2501),_=o.n(g),b=o(4399),w=function(){var e=function(){function e(n,r,o,i,s){t(this,e),this._router=n,this._spinner=r,this._apiConfig=o,this._dataShare=i,this._httpClient=s,this._destroy$=new d.xQ}return n(e,[{key:"ngOnInit",value:function(){this._spinner.hide()}},{key:"login",value:function(){var t=this;this._spinner.show(),this._httpClient.postRequest(this._apiConfig.API.login,{username:"",password:""}).pipe((0,f.R)(this._destroy$)).subscribe(function(e){"Success"===e.status?(localStorage.setItem("access-token",e.response_body.accessToken),t.getLoggedInUserDetails()):(_().fire({title:"Oops",text:e.response_body.message,icon:"error"}),t._router.navigate(["/login"]))})}},{key:"getLoggedInUserDetails",value:function(){var t=this;this._httpClient.getRequest(this._apiConfig.API.loggedInUser).pipe((0,f.R)(this._destroy$)).subscribe(function(e){"Success"===e.status?(t._dataShare.loggedInUserDetails=e.response_body.data,t._router.navigate(["/home/provide-route"])):_().fire({title:"Oops",text:e.response_body.message,icon:"error"})})}},{key:"ngOnDestroy",value:function(){this._destroy$.next(),this._destroy$.unsubscribe()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(a.F0),u.Y36(h.t2),u.Y36(b.w),u.Y36(c._),u.Y36(l.r))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-login"]],decls:2,vars:0,consts:[[1,"h-full","flex","justify-center","items-center"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0),u._uU(1,"Hello! World..."),u.qZA())},styles:[".btn[_ngcontent-%COMP%]{border-radius:.375rem;border-width:1px;border-color:transparent;--tw-bg-opacity:1;background-color:rgba(248,113,113,var(--tw-bg-opacity));padding:.5rem 1rem;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));--tw-shadow:0 1px 2px 0 rgba(0,0,0,0.05);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}"]}),e}(),v=[{path:"login",component:w},{path:"dashboard",component:w,canActivate:[p]},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}],y=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[a.Bz.forChild(v)],a.Bz]}),e}(),m=o(4887),k=((i=function e(){t(this,e)}).\u0275fac=function(t){return new(t||i)},i.\u0275mod=u.oAB({type:i}),i.\u0275inj=u.cJS({imports:[[s.ez,y,m.m]]}),i)}}])}();