"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[608],{209:function(n,e,t){t.d(e,{IQ:function(){return d},HI:function(){return f},XT:function(){return s},Jh:function(){return p},Hg:function(){return c}});var r=t(861),i=t(757),o=t.n(i),a=t(388),u="8173d9d3786490e263d0e6270314dc35";a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/day",e={api_key:u},n.next=4,(0,a.Z)("/trending/movie/day",{params:e});case 4:if(200===(null===(t=n.sent)||void 0===t?void 0:t.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",t.data.results);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",t={api_key:u,query:e},n.next=4,(0,a.Z)("/search/movie",{params:t});case 4:if(200===(null===(r=n.sent)||void 0===r?void 0:r.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",r.data.results);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e),r={api_key:u},n.next=4,(0,a.Z)(t,{params:r});case 4:if(200===(null===(i=n.sent)||void 0===i?void 0:i.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",i.data);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/credits"),r={api_key:u},n.next=4,(0,a.Z)(t,{params:r});case 4:if(200===(null===(i=n.sent)||void 0===i?void 0:i.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",i.data.cast);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/reviews"),r={api_key:u},n.next=4,(0,a.Z)(t,{params:r});case 4:if(200===(null===(i=n.sent)||void 0===i?void 0:i.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",i.data.results);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},455:function(n,e,t){t.d(e,{O:function(){return x}});var r,i,o,a,u=t(689),c=t(168),s=t(444),f=t(731),d=s.ZP.li(r||(r=(0,c.Z)(["\n  text-align: center;\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.lightBG}),(function(n){return n.theme.borders.main}),(function(n){return n.theme.radii.main})),p=(0,s.ZP)(f.rU)(i||(i=(0,c.Z)(["\n  display: block;\n  padding-bottom: ",";\n  color: inherit;\n  font-weight: ",";\n  text-decoration: none;\n  transition: ",";\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.transitions.color}),(function(n){return n.theme.colors.mainAccent})),h=s.ZP.img(o||(o=(0,c.Z)(["\n  display: block;\n  width: 100%;\n  height: auto;\n  margin-bottom: ",";\n  background-color: ",";\n  object-fit: cover;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.whiteBG})),m=t(656),l=t(184),v=function(n){var e=n.movie,t=e.id,r=e.original_title,i=e.poster_path,o=(0,u.TH)(),a="/movies/".concat(t);return(0,l.jsx)(d,{children:(0,l.jsxs)(p,{to:a,state:o,children:[(0,l.jsx)(h,{src:i?"https://image.tmdb.org/t/p/w342".concat(i):m,alt:r,width:230,height:345}),r]})})},g=s.ZP.ul(a||(a=(0,c.Z)(["\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));\n  margin: ",";\n  padding: ",";\n  list-style: none;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]})),x=function(n){var e=n.moviesData;return(0,l.jsx)(g,{children:e.map((function(n){return(0,l.jsx)(v,{movie:n},n.id)}))})}},177:function(n,e,t){t.d(e,{v:function(){return o}});var r,i=t(168),o=t(444).ZP.p(r||(r=(0,i.Z)(["\n  margin: ",";\n  padding: "," ",";\n  font-size: ",";\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semiBold}))},684:function(n,e,t){t.d(e,{J:function(){return c},V:function(){return u}});var r,i,o=t(168),a=t(444),u=a.ZP.h2(r||(r=(0,o.Z)(["\n  margin: ",";\n  padding: "," ",";\n  font-size: ",";\n  font-weight: ",";\n  text-align: center;\n  text-transform: uppercase;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semiBold})),c=a.ZP.h2(i||(i=(0,o.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"])))},919:function(n,e,t){t.d(e,{W:function(){return a.W},$:function(){return o}});var r,i=t(168),o=t(444).ZP.section(r||(r=(0,i.Z)(["\n  width: 100vw;\n  padding: "," 0;\n"])),(function(n){return n.theme.space[4]})),a=t(659)},608:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,o=t(885),a=t(791),u=t(731),c=t(919),s=t(168),f=t(444),d=f.ZP.form(r||(r=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.space[4]})),p=f.ZP.button(i||(i=(0,s.Z)(["\n  cursor: pointer;\n"]))),h=t(184),m=function(n){var e=n.onSubmit,t=n.searchParams,r=(0,a.useState)((function(){var n=t.get("query");return n||""})),i=(0,o.Z)(r,2),u=i[0],c=i[1];return(0,h.jsxs)(d,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),e(u.trim().toLowerCase())},children:[(0,h.jsx)("input",{type:"text",name:"searchValue",value:u,onChange:function(n){var e=n.target;return c(e.value)}}),(0,h.jsx)(p,{type:"submit",children:"Search"})]})},l=t(684),v=t(455),g=t(177),x=t(209),w=t(793),Z=function(){var n=(0,u.lr)({}),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,a.useState)(null),s=(0,o.Z)(i,2),f=s[0],d=s[1],p=(0,a.useState)("idle"),Z=(0,o.Z)(p,2),b=Z[0],y=Z[1];(0,a.useEffect)((function(){var n=t.get("query");if(!n)return y("idle");y("pending"),(0,x.XT)(n).then((function(n){d(n),y("resolved")})).catch((function(){return y("rejected")}))}),[t]);return(0,h.jsx)(c.$,{children:(0,h.jsxs)(c.W,{children:[(0,h.jsx)(l.J,{children:"Search movies"}),(0,h.jsx)(m,{onSubmit:function(n){r(n?{query:n}:{})},searchParams:t}),"idle"===b&&(0,h.jsx)(g.v,{children:"Let's see some movie"}),"pending"===b&&(0,h.jsx)(w.a,{}),"rejected"===b&&(0,h.jsx)(g.v,{children:"Ooops, something went wrong"}),"resolved"===b&&0===f.length&&(0,h.jsx)(g.v,{children:"There is no movies with that request"}),"resolved"===b&&(0,h.jsx)(v.O,{moviesData:f})]})})}},656:function(n,e,t){n.exports=t.p+"static/media/no-images.4d32df11beecd3fad58d.png"}}]);
//# sourceMappingURL=608.02013b4b.chunk.js.map