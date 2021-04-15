(this["webpackJsonpepipolicy-docs"]=this["webpackJsonpepipolicy-docs"]||[]).push([[0],{139:function(e){e.exports=JSON.parse('[{"name":"Homepage","url":"","hide-title":true,"no-padding":true,"html-file":"home.html"},{"name":"Introduction","children":[{"name":"Overview","url":"","hide-title":true,"no-padding":true,"html-file":"home.html"},{"name":"State Data","url":"state-data","markdown-file":"state_data.md"},{"name":"Regex Syntax","url":"regex-syntax","markdown-file":"regex_syntax.md"}]},{"name":"Docs","url":"docs","hidden":true,"children":[{"name":"Intervention","url":"intervention","markdown-file":"intervention_overview.md"},{"name":"Facilities","url":"facilities","markdown-file":"facilities.md"},{"name":"Schedule","url":"schedule","markdown-file":"schedule.md"},{"name":"Initialize","url":"initialize","markdown-file":"intialize_simulation.md"},{"name":"Results","url":"results","markdown-file":"results.md"},{"name":"Compare","url":"compare","markdown-file":"compare.md"},{"name":"References","url":"references","markdown-file":"references.md"}]},{"name":"Decision","url":"decision","protected":true,"markdown-file":"decision.md"},{"name":"Private Doc","url":"privatedoc","protected":true,"markdown-file":"privatedoc.pmd"}]')},145:function(e,t,n){},146:function(e,t,n){},148:function(e,t,n){},170:function(e,t){},172:function(e,t){},182:function(e,t){},184:function(e,t){},211:function(e,t){},212:function(e,t){},217:function(e,t){},219:function(e,t){},226:function(e,t){},245:function(e,t){},285:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(48),c=n.n(o),l=n(6),r=n(7),s=n(10),d=n(9),u=n(34),h=(n(145),n(146),n(5)),g=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).model=e.model,i.state={loginBox:!1},i}return Object(r.a)(n,[{key:"renderLoginBox",value:function(){var e=this;return this.model.loginInfo?Object(h.jsx)("div",{className:"login-box",onClick:function(){return e.model.logOut()},children:"Sign out"}):this.state.loginBox?Object(h.jsxs)("div",{className:"login-box",children:[this.state.loginError?Object(h.jsx)("div",{className:"login-error",children:this.state.loginError}):null,Object(h.jsx)("input",{autoFocus:!0,type:"password",onKeyDown:function(t){e.setState({loginError:null}),"Enter"===t.key?e.checkLoginPassword(t.target.value):"Escape"===t.key&&e.setState({loginBox:!1})}})]}):Object(h.jsx)("div",{className:"login-box",onClick:function(){return e.setState({loginBox:!0})},children:"Sign in"})}},{key:"checkLoginPassword",value:function(e){var t=this;this.model.logIn(e).catch((function(e){t.setState({loginError:e})}))}},{key:"renderMenuItem",value:function(e){var t=this;return e.hidden?null:e.children?Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"menu-parent-item",children:e.name}),Object(h.jsx)("div",{className:"menu-children",children:e.children.map((function(e){return t.renderMenuItem(e)}))})]},e.name):!this.model.loginInfo&&e.protected?null:Object(h.jsx)("div",{className:"menu-item"+(e.active?" active":""),onClick:function(){return t.goTo(e)},children:e.name},e.url)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{id:"sidebar",children:[Object(h.jsxs)("h1",{className:"title",onClick:function(){return e.goTo(e.model.pages[0])},children:[Object(h.jsx)("img",{alt:"EpiPolicy",className:"title-logo",src:"logo512.png"})," EpiPolicy"]}),Object(h.jsx)("div",{className:"menu",children:this.model.pages.slice(1).map((function(t){return e.renderMenuItem(t)}))}),this.renderLoginBox()]})}},{key:"goTo",value:function(e){document.title=e.name,window.history.pushState({url:"#"+e.url},e.name,"#"+e.url),this.model.checkPagesActivation()}}]),n}(a.a.Component),m=Object(u.a)(g),v=(n(148),n(49)),f=n.n(v);window.$=f.a,window.jQuery=f.a,n(284);var p=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).model=e.model,i}return Object(r.a)(n,[{key:"render",value:function(){return this.model.activePage&&this.model.activePageContent?Object(h.jsxs)("div",{id:"page-display",className:this.model.activePage["no-padding"]?"no-padding":"",children:[this.model.activePage["hide-title"]?null:Object(h.jsx)("h2",{children:this.model.activePage.name}),Object(h.jsx)("div",{id:"page-content",dangerouslySetInnerHTML:{__html:this.model.activePageContent}})]}):null}},{key:"mathJax",value:function(){window.MathJax.typeset()}},{key:"bootstrapToolTips",value:function(){f()('[data-toggle="tooltip"]').tooltip()}},{key:"componendDidMount",value:function(){this.mathJax(),this.bootstrapToolTips()}},{key:"componentDidUpdate",value:function(){this.mathJax(),this.bootstrapToolTips()}}]),n}(a.a.Component),j=Object(u.a)(p),x=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{id:"app",children:[Object(h.jsx)("div",{id:"sidebar-container",children:Object(h.jsx)(m,{model:this.props.model})}),Object(h.jsx)("div",{id:"main-panel-container",children:Object(h.jsx)(j,{model:this.props.model})})]})}}]),n}(a.a.Component),b=Object(u.a)(x),k=n(76),y=n(2),P=n(139),O=n(50),w=n.n(O),C=n(140),I=n.n(C),A=n(41),S=n.n(A),E=new(function(){function e(){var t=this;Object(l.a)(this,e),this.pages=P,this.activePageContent=null,this.loginInfo=null,Object(y.n)(this,{pages:y.o,checkPagesActivation:y.f,loginInfo:y.o,logIn:y.f,logOut:y.f,activePageContent:y.o,loadActivePage:y.f,setActivePageContent:y.f,activePage:y.g}),this.checkPagesActivation(),window.onpopstate=function(e){t.checkPagesActivation()}}return Object(r.a)(e,[{key:"generateErrorPage",value:function(e){return'<div className="error">'+e+"</div>"}},{key:"latexReplace",value:function(e){return e=(e=(e=e.replace(/<latex>(.*?)<\/latex>/g,(function(e,t){return'<div class="latex">$'+t+"$</div>"}))).replace(/<latex-line>(.*?)<\/latex-line>/g,(function(e,t){return'<div class="latex latex-line>$$'+t+"$$</div>"}))).replace(/<latex-line-left>(.*?)<\/latex-line-left>/g,(function(e,t){return'<div class="latex latex-line latex-line-left">$$'+t+"$$</div>"}))}},{key:"loadMarkdownFilePage",value:function(e){var t=this,n=e.protected?"private-pages/":"pages/";w.a.get(n+e["markdown-file"]).then((function(n){var i=n.data;if(e.protected)if(t.loginInfo)try{i=S.a.AES.decrypt(n.data,t.loginInfo.password).toString(S.a.enc.Utf8),console.log(i)}catch(a){t.setActivePageContent(t.generateErrorPage(a))}else t.setActivePageContent(t.generateErrorPage("Login needed in order to decrypt this file"));t.setActivePageContent(t.latexReplace(I()(i)))})).catch((function(e){t.setActivePageContent(t.generateErrorPage(e))}))}},{key:"loadHTMLFilePage",value:function(e){var t=this;w.a.get("html-pages/"+e["html-file"]).then((function(e){t.setActivePageContent(e.data)})).catch((function(e){t.setActivePageContent(e)}))}},{key:"loadActivePage",value:function(){if(!this.activePage)return null;this.activePage["markdown-file"]?this.loadMarkdownFilePage(this.activePage):this.activePage["html-file"]&&this.loadHTMLFilePage(this.activePage)}},{key:"setActivePageContent",value:function(e){this.activePageContent=e}},{key:"checkPagesActivation",value:function(){var e=window.location.hash.slice(1),t=function(e){var t,i=Object(k.a)(e);try{for(i.s();!(t=i.n()).done;){var a=t.value;n(a)}}catch(o){i.e(o)}finally{i.f()}},n=function(n){n.children&&t(n.children),n.active=e===n.url};t(this.pages),this.setActivePageContent(null),this.loadActivePage()}},{key:"activePage",get:function(){var e=function(e){var n,i=Object(k.a)(e);try{for(i.s();!(n=i.n()).done;){var a=n.value,o=t(a);if(o)return o}}catch(c){i.e(c)}finally{i.f()}},t=function(t){return t.children?e(t.children):t.active?t:void 0};return e(this.pages)}},{key:"logIn",value:function(e){var t=this;return new Promise((function(n,i){w.a.get("private-pages/main.pmd").then((function(a){try{var o=S.a.AES.decrypt(a.data,e).toString(S.a.enc.Utf8);console.log("login check. decrypted:\n"+o),t.loginInfo="salimmo s\xf9, el primo e io secondo,\ntanto ch\u2019i\u2019 vidi de le cose belle\nche porta \u2019l ciel, per un pertugio tondo.\nE quindi uscimmo a riveder le stelle."===o?{password:e}:null,n()}catch(c){i("Login failed")}}))}))}},{key:"logOut",value:function(){this.loginInfo=null}}]),e}()),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),o(e),c(e)}))};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(b,{model:E})}),document.getElementById("root")),T()}},[[285,1,2]]]);
//# sourceMappingURL=main.20cdf87e.chunk.js.map