"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[90],{9396:function(n,e,t){t.d(e,{Df:function(){return u},Pg:function(){return s},tx:function(){return f},zi:function(){return h},zv:function(){return p}});var r=t(5861),o=t(4687),a=t.n(o),c="https://api.themoviedb.org/",i="ec3ca0e4403710b7fc1497b1dbf32c54",u=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"3/trending/all/day?api_key=").concat(i,"&language=en-US"));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",e.json());case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"3/movie/").concat(e,"?api_key=").concat(i));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",t.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"3/movie/").concat(e,"/credits?api_key=").concat(i));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",t.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"3/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",t.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",t.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2090:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,o,a,c=t(5861),i=t(9439),u=t(4687),s=t.n(u),p=t(2791),f=t(9396),h=t(7689),l=t(1087),d=t(168),w=t(5706),x=w.Z.form(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 400px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=w.Z.button(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),m=w.Z.input(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 18px;\n  border: 2px solid black;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=t(9135),b=t(1686),k=t.n(b),y=t(184);function j(n){var e,t=n.onSubmit,r=(0,l.lr)(),o=(0,i.Z)(r,2),a=o[0],c=o[1],u=null!==(e=a.get("query"))&&void 0!==e?e:"";return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(x,{onSubmit:function(n){(n.preventDefault(),""!==u.trim())?(t(u),n.currentTarget.reset()):k().Notify.warning("Search querry should not be empty!")},children:[(0,y.jsx)(m,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Movies",onChange:function(n){var e=n.target.value;if(""===e)return c({});c({query:e})}}),(0,y.jsx)(v,{type:"submit",children:(0,y.jsx)(g.U41,{})})]})})}function Z(){var n=(0,p.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],o=(0,h.TH)(),a=function(){var n=(0,c.Z)(s().mark((function n(e){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.zi)(e);case 3:t=n.sent,r(t.results),0===t.results.length&&k().Notify.warning("There are no films found"),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j,{onSubmit:function(n){a(n)}}),(0,y.jsx)("ul",{children:t.map((function(n){var e=n.title,t=n.name,r=n.id;return(0,y.jsx)("li",{children:(0,y.jsx)(l.rU,{to:"/movies/".concat(r),state:{from:o},children:t||e})},r)}))})]})}}}]);
//# sourceMappingURL=90.ff4b6b3d.chunk.js.map