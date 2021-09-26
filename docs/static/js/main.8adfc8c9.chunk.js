(this["webpackJsonpepipolicy-docs"]=this["webpackJsonpepipolicy-docs"]||[]).push([[0],{145:function(e){e.exports=JSON.parse('[{"name":"Homepage","url":"","hide-title":true,"hide-sidebar":true,"hide-sidebar-toggle":true,"hide-page-navbar":true,"center-page":true,"show-header":true,"html-file":"home.html"},{"name":"Docs & Tutorials","url":"docs_and_tutorials","html-file":"docs_and_tutorials.html","hidden":true},{"name":"Get Started","url":"get_started","markdown-file":"get_started.md"},{"name":"Concepts","url":"concepts","markdown-file":"concepts.md","collapse":false,"children":[{"name":"Compartmental Models","url":"compartmental_models","markdown-file":"compartmental_models.md"},{"name":"Splitting Probability in Compartmental Model","url":"probability_rate","markdown-file":"probability_rate.md"},{"name":"A Simple Epidemic Model","url":"sir_model","markdown-file":"sir_model.md"},{"name":"State Data","url":"state_data","markdown-file":"state_data.md"},{"name":"Regex Syntax","url":"regex_syntax","markdown-file":"regex_syntax.md"}]},{"name":"Basic Tutorials","url":"basic_tutorials","markdown-file":"basic_tutorials.md","collapse":false,"children":[{"name":"Create Your First Scenario","url":"create_your_first_scenario","markdown-file":"create_your_first_scenario.md"},{"name":"Intro to Sub-population Groups","url":"intro_to_group","markdown-file":"intro_to_group.md"},{"name":"Intro to Locale Facilities","url":"intro_to_facility","markdown-file":"intro_to_facility.md"},{"name":"Intro to Population Mobility","url":"intro_to_static_mobility","markdown-file":"intro_to_static_mobility.md"},{"name":"Intro to Dynamic Mobility","url":"intro_to_dynamic_mobility","markdown-file":"intro_to_dynamic_mobility.md"}]},{"name":"Advanced Tutorials","url":"advanced_tutorials","markdown-file":"advanced_tutorials.md","collapse":false,"children":[{"name":"Vaccination","url":"vaccination","markdown-file":"vaccination.md"},{"name":"Hospitalization","url":"hospitalization","markdown-file":"hospitalization.md"},{"name":"Mask and border closure","url":"mask_border","markdown-file":"mask_border.md"}]},{"name":"Case Studies","url":"case_studies","markdown-file":"case_studies.md","collapse":false,"children":[{"name":"Effect of Opening Schools during COVID-19","url":"effect_of_opening_schools_during_covid19","markdown-file":"alberto_2.md"}]},{"name":"Advanced Features","url":"advanced_features","markdown-file":"advanced_features.md","collapse":false,"children":[{"name":"PyEpiPolicy","url":"pyepipolicy","html-file":"pyepipolicy.html"},{"name":"Tags","url":"tags","markdown-file":"tags.md"},{"name":"References","url":"references","markdown-file":"references.md"},{"name":"JSON Editor","url":"json_editor","markdown-file":"jsoneditor.md"},{"name":"Import/Export","url":"import_export","markdown-file":"importexport.md"},{"name":"Locale Autocomplete","url":"locale_autocomplete","markdown-file":"localeautocomplete.md"}]},{"name":"FAQs","url":"faqs","markdown-file":"faqs.md","collapse":false,"children":[]},{"name":"Docs","url":"docs","hidden":true,"children":[{"name":"Intervention","url":"intervention","markdown-file":"intervention_overview.md"},{"name":"Facilities","url":"facilities","markdown-file":"facilities.md"},{"name":"Schedule","url":"schedule","markdown-file":"schedule.md"},{"name":"Initialize","url":"initialize","markdown-file":"intialize_simulation.md"},{"name":"Results","url":"results","markdown-file":"results.md"},{"name":"Compare","url":"compare","markdown-file":"compare.md"}]},{"name":"Decision","url":"decision","protected":true,"markdown-file":"decision.pmd"},{"name":"Temporal difference learning","url":"td","protected":true,"markdown-file":"td.pmd"},{"name":"Private Doc","url":"privatedoc","protected":true,"markdown-file":"privatedoc.pmd"}]')},150:function(e,t,a){},151:function(e,t,a){},364:function(e,t,a){},382:function(e,t,a){},387:function(e,t){},389:function(e,t){},399:function(e,t){},401:function(e,t){},428:function(e,t){},429:function(e,t){},434:function(e,t){},436:function(e,t){},443:function(e,t){},462:function(e,t){},502:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(52),o=a.n(r),l=a(41),s=a(6),c=a(7),d=a(9),u=a(8),m=a(19),h=(a(150),a(151),a(0)),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).model=e.model,n.state={loginBox:!1},n}return Object(c.a)(a,[{key:"renderLoginBox",value:function(){var e=this;return this.model.loginInfo?Object(h.jsx)("div",{className:"login-box",onClick:function(){return e.model.logOut()},children:"Sign out"}):this.state.loginBox?Object(h.jsxs)("div",{className:"login-box",children:[this.state.loginError?Object(h.jsx)("div",{className:"login-error",children:this.state.loginError}):null,Object(h.jsx)("input",{autoFocus:!0,type:"password",onKeyDown:function(t){e.setState({loginError:null}),"Enter"===t.key?e.checkLoginPassword(t.target.value):"Escape"===t.key&&e.setState({loginBox:!1})}})]}):Object(h.jsx)("div",{className:"login-box",onClick:function(){return e.setState({loginBox:!0})},children:"Sign in"})}},{key:"checkLoginPassword",value:function(e){var t=this;this.model.logIn(e).catch((function(e){t.setState({loginError:e})}))}},{key:"renderMenuItem",value:function(e){var t=this;return e.hidden?null:e.children?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"menu-parent-item-container",children:[Object(h.jsx)("div",{className:"menu-parent-item"+(e.url?" clickable":""),onClick:function(){return t.goTo(e)},children:e.name}),Object(h.jsx)("div",{className:"hide-show-menu-parent-item",onClick:function(){return t.toggleParentItem(e)},children:Object(h.jsx)("i",{className:"fa"+(e.collapse?" fa-caret-left":" fa-caret-down")})})]}),Object(h.jsx)("div",{className:"menu-children"+(e.collapse?" menu-children-hide":""),children:e.children.map((function(e){return t.renderMenuItem(e)}))})]},e.url||e.name):!this.model.loginInfo&&e.protected?null:Object(h.jsx)("div",{className:"menu-item"+(e.active?" active":""),onClick:function(){return t.goTo(e)},children:e.name},e.url||e.name)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{id:"sidebar",children:[Object(h.jsxs)("h1",{className:"title",onClick:function(){return e.goTo(e.model.pages[0])},children:[Object(h.jsx)("img",{alt:"EpiPolicy",className:"title-logo",src:"logo512.png"})," EpiPolicy"]}),Object(h.jsx)("div",{className:"menu",children:this.model.pages.slice(1).map((function(t){return e.renderMenuItem(t)}))}),this.renderLoginBox()]})}},{key:"goTo",value:function(e){void 0!==e.url&&(document.title=e.name,window.history.pushState({url:"/"+e.url},e.name,"/"+e.url),this.model.checkPagesActivation())}},{key:"toggleParentItem",value:function(e){this.model.toggleParentItem(e)}}]),a}(i.a.Component),v=Object(m.a)(g),f=(a(153),a(53)),p=a.n(f),b=a(43),j=a.n(b),O=(a(364),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).model=e.model,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.model.pageNavActiveHeader;return Object(h.jsx)("div",{id:"page-navbar-container",children:Object(h.jsx)("nav",{id:"page-navbar",className:"navbar navbar-light bg-light flex-column align-items-stretch p-3",children:Object(h.jsx)("nav",{className:"nav nav-pills flex-column",children:this.props.model.activePageHeaders.map((function(t,a){return Object(h.jsx)("a",{className:"nav-link"+(!e&&0===a||e===t.id?" active":"")+" "+t.tagname,href:"#"+t.id,children:t.caption},t.id)}))})})})}}]),a}(i.a.Component)),x=Object(m.a)(O),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).model=e.model,n}return Object(c.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"footer",className:this.props.model.activePage["center-page"]?"center-page":"",children:Object(h.jsxs)("div",{id:"logos",children:[Object(h.jsx)("div",{className:"logo-container",children:Object(h.jsx)("a",{href:"https://huda-lab.github.io/",children:Object(h.jsx)("img",{id:"hudalab_logo",alt:"huda lab",src:"assets/logos/hudalab_logo.png"})})}),Object(h.jsx)("div",{className:"logo-container",children:Object(h.jsx)("a",{href:"https://sites.nyuad.nyu.edu/cities/",children:Object(h.jsx)("img",{id:"cities_logo",alt:"cities",src:"assets/logos/cities_logo.png"})})}),Object(h.jsx)("div",{className:"logo-container",children:Object(h.jsx)("a",{href:"https://nyuad.nyu.edu/en/research/faculty-labs-and-projects/human-data-interaction-lab.html",children:Object(h.jsx)("img",{id:"nyuad_logo",alt:"nyuad",src:"assets/logos/nyuad_logo.png"})})}),Object(h.jsx)("div",{className:"logo-container",children:Object(h.jsx)("a",{href:"https://nyu.edu/",children:Object(h.jsx)("img",{id:"nyu_logo",alt:"nyu",src:"assets/logos/nyu_logo.png"})})})]})})}}]),a}(i.a.Component),k=Object(m.a)(y),_=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).model=e.model,n.state={collapse:!0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("nav",{id:"header",className:"navbar navbar-expand-sm navbar-light"+(this.props.model.activePage["center-page"]?" center-page":""),children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:Object(h.jsxs)("h1",{className:"title",children:[Object(h.jsx)("img",{alt:"EpiPolicy",className:"title-logo",src:"logo512.png"})," EpiPolicy"]})}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button",onClick:function(){return e.setState({collapse:!e.state.collapse})},children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"navbar-collapse"+(this.state.collapse?" collapse":""),children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-item active",children:Object(h.jsx)("a",{className:"nav-link",href:"get_started",children:"Get Started"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"docs_and_tutorials",children:"Docs & Tutorials"})})]})})]})}}]),a}(i.a.Component),P=Object(m.a)(_);window.$=p.a,window.jQuery=p.a;var w=a(501);window.bootstrap=w;var N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).model=e.model,n.pageDisplayRef=i.a.createRef(),n}return Object(c.a)(a,[{key:"render",value:function(){return this.model.activePage&&this.model.activePageContent?Object(h.jsxs)("div",{id:"page-display",ref:this.pageDisplayRef,children:[this.props.model.activePage["show-header"]&&Object(h.jsx)(P,{model:this.props.model}),this.model.activePage["hide-title"]?null:Object(h.jsx)("h1",{className:"page-title",children:this.model.activePage.name}),Object(h.jsx)("div",{id:"page-content",className:this.props.model.activePage["center-page"]?"center-page":"",dangerouslySetInnerHTML:{__html:this.model.activePageContent}}),Object(h.jsx)(k,{model:this.model}),!this.model.activePage["hide-page-navbar"]&&Object(h.jsx)(x,{model:this.model})]}):null}},{key:"mathJax",value:function(){window.MathJax.typeset()}},{key:"bootstrapToolTips",value:function(){p()('[data-toggle="tooltip"]').tooltip()}},{key:"componentDidUpdate",value:function(){this.mathJax(),this.bootstrapToolTips(),document.querySelectorAll("#page-content pre code").forEach((function(e){j.a.highlightElement(e)}));var e=[];document.querySelectorAll("h2, h3, h4, h5").forEach((function(t){e.push({id:t.id,caption:t.innerText,tagname:t.tagName})})),this.model.setActivePageHeaders(e);var t=document.getElementById(this.props.model.activePageVisibleHeader);t&&t.scrollIntoView({behavior:"smooth"})}}]),a}(i.a.Component),S=Object(m.a)(N),C=a(21),A=a.n(C),I=a(81),H=(a(382),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getAvailableServers=function(){var e=n.uist_manager_api+"/available_servers";A.a.get(e).then((function(e){var t=e.data.servers;n.setState({available_servers:t})})).catch((function(t){console.log("URL Failed",e,t)})).finally((function(){setTimeout((function(){n.getAvailableServers()}),1e3)}))},n.findServer=function(){n.state.name.length<1&&alert("Invalid name!");var e=n.uist_manager_api+"/find_server/"+encodeURIComponent(n.state.name);A.a.get(e).then((function(e){var t=e.data.server;n.setState({server:t})})).catch((function(t){console.log("URL Failed",e,t)}))},n.getAssignedServer=function(){var e=n.uist_manager_api+"/get_assigned_server/";A.a.get(e).then((function(e){var t=e.data.server;n.setState({server:t})})).catch((function(t){console.log("URL Failed",e,t)})).finally((function(){setTimeout((function(){n.getAssignedServer()}),1e3)}))},n.markServerAsFree=function(e){var t=n.uist_manager_api+"/free_server/"+encodeURIComponent(e);A.a.get(t).catch((function(e){console.log("URL Failed",t,e)}))},n.state={available_servers:[],name:"",server:null},n.uist_manager_api="http://".concat(I.api.uist_manager.host,":").concat(I.api.uist_manager.port),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getAvailableServers(),this.getAssignedServer()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"uist-container",children:[Object(h.jsx)("div",{className:"title",children:"EpiPolicy Demo @ UIST '21"}),this.state.available_servers.length<1?Object(h.jsx)("div",{className:"message",children:"No servers available"}):Object(h.jsxs)("div",{className:"server-container",children:[Object(h.jsxs)("div",{className:"message",children:[this.state.available_servers.length," servers available"]}),this.state.server?Object(h.jsxs)("div",{className:"server-info",children:[Object(h.jsx)("div",{className:"server-info-title",children:"the following server has been assigned to you"}),Object(h.jsxs)("div",{className:"server-info-item",children:[Object(h.jsx)("span",{children:"URL:"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:this.state.server[1],children:this.state.server[1]})})]}),Object(h.jsxs)("div",{className:"server-info-item",children:[Object(h.jsx)("span",{children:"username:"}),Object(h.jsx)("p",{children:this.state.server[2]})]}),Object(h.jsxs)("div",{className:"server-info-item",children:[Object(h.jsx)("span",{children:"password:"}),Object(h.jsx)("p",{children:this.state.server[3]})]}),Object(h.jsx)("input",{type:"button",value:"Vacate Server",onClick:function(){e.markServerAsFree(e.state.server[1])}})]}):Object(h.jsxs)("div",{className:"user-info",children:[Object(h.jsx)("input",{type:"text",placeholder:"Name",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}}),Object(h.jsx)("input",{type:"button",value:"Find a Server",onClick:function(){e.findServer()}})]})]})]})}}]),a}(n.Component)),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).mainPanelContainerRef=i.a.createRef(),n}return Object(c.a)(a,[{key:"updateVisibleHeader",value:function(){var e=null,t=[],a=null;if(0===this.mainPanelContainerRef.current.scrollTop)e=this.mainPanelContainerRef.current.querySelector("h2, h3, h4, h5, h6");else{this.mainPanelContainerRef.current.querySelectorAll("h2, h3, h4, h5, h6").forEach((function(e){var n=e.getBoundingClientRect();n.bottom<=window.innerHeight&&n.bottom>0&&(t.length>0&&(t[t.length-1].height-=window.innerHeight-n.top),t.push({id:e.id,height:window.innerHeight-n.bottom})),(null===a||n.top<window.innerHeight)&&(a=e)}));var n,i=Object(l.a)(t);try{for(i.s();!(n=i.n()).done;){var r=n.value;(null==e||e.height<r.height)&&(e=r)}}catch(o){i.e(o)}finally{i.f()}null===e&&(e=a)}this.props.model.setPageNavActiveHeader(e?e.id:null)}},{key:"render",value:function(){var e=this;return"uist"===window.location.pathname.slice(1)?Object(h.jsx)(H,{}):Object(h.jsxs)("div",{id:"app",className:this.props.model.activePage["hide-sidebar"]?"hide-sidebar":"",children:[Object(h.jsx)("div",{id:"menu-toggle",onClick:function(){return e.props.model.toggleSidebar()},className:this.props.model.activePage["hide-sidebar-toggle"]?"hide-sidebar-toggle":"",children:Object(h.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"})}),Object(h.jsx)("div",{id:"sidebar-container",children:Object(h.jsx)(v,{model:this.props.model})}),Object(h.jsx)("div",{id:"main-panel-container",ref:this.mainPanelContainerRef,onScroll:function(t){return e.updateVisibleHeader()},children:Object(h.jsx)(S,{model:this.props.model,onPageContentChanged:function(){return e.updateVisibleHeader()}})})]})}}]),a}(i.a.Component),T=Object(m.a)(E),R=a(2),L=a(145),F=a(54),M=a.n(F),D=a(44),V=a.n(D);M.a.setOptions({renderer:new M.a.Renderer,highlight:function(e,t){var a=j.a.getLanguage(t)?t:"plaintext";return j.a.highlight(e,{language:a}).value},pedantic:!1,gfm:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1});var B=new(function(){function e(){var t=this;Object(s.a)(this,e),this.pages=L,this.activePageContent=null,this.activePageHeaders=[],this.loginInfo=null,this.activePageVisibleHeader=null,this.pageNavActiveHeader=null,Object(R.n)(this,{pages:R.o,checkPagesActivation:R.f,loginInfo:R.o,logIn:R.f,logOut:R.f,activePageContent:R.o,activePageHeaders:R.o,loadActivePage:R.f,setActivePageContent:R.f,setActivePageHeaders:R.f,setActivePageVisibleHeader:R.f,activePageVisibleHeader:R.o,pageNavActiveHeader:R.o,toggleSidebar:R.f,toggleParentItem:R.f,activePage:R.g}),this.checkPagesActivation(),window.onpopstate=function(e){t.checkPagesActivation()}}return Object(c.a)(e,[{key:"generateErrorPage",value:function(e){return'<div className="error">'+e+"</div>"}},{key:"latexReplace",value:function(e){return e=e.replace(/<tex>(.+?)<\/tex>/g,(function(e,t){return'<span class="tex">$'+t+"$</span>"}))}},{key:"markdownToHTML",value:function(e){return e=M()(e),e=this.latexReplace(e)}},{key:"loadMarkdownFilePage",value:function(e){var t=this,a=e.protected?"private-pages/":"pages/";A.a.get(a+e["markdown-file"]).then((function(a){var n=a.data;if(e.protected)if(t.loginInfo)try{n=V.a.AES.decrypt(a.data,t.loginInfo.password).toString(V.a.enc.Utf8),console.log(n)}catch(i){t.setActivePageContent(t.generateErrorPage(i))}else t.setActivePageContent(t.generateErrorPage("Login needed in order to decrypt this file"));t.setActivePageContent(t.markdownToHTML(n))})).catch((function(e){t.setActivePageContent(t.generateErrorPage(e))}))}},{key:"loadHTMLFilePage",value:function(e){var t=this;A.a.get("html-pages/"+e["html-file"]).then((function(e){t.setActivePageContent(e.data)})).catch((function(e){t.setActivePageContent(e)}))}},{key:"loadActivePage",value:function(){if(!this.activePage)return null;this.activePage["markdown-file"]?this.loadMarkdownFilePage(this.activePage):this.activePage["html-file"]&&this.loadHTMLFilePage(this.activePage)}},{key:"setActivePageContent",value:function(e){this.activePageContent=e}},{key:"setActivePageHeaders",value:function(e){this.activePageHeaders=e}},{key:"setActivePageVisibleHeader",value:function(e){this.activePageVisibleHeader=e}},{key:"setPageNavActiveHeader",value:function(e){this.pageNavActiveHeader=e}},{key:"toggleSidebar",value:function(){this.activePage["hide-sidebar"]=!this.activePage["hide-sidebar"]}},{key:"toggleParentItem",value:function(e){e.collapse=!e.collapse}},{key:"checkPagesActivation",value:function(){var e=window.location.pathname.slice(1),t=window.location.hash?window.location.hash.slice(1):void 0;t&&(this.setActivePageVisibleHeader(t),this.setPageNavActiveHeader(t));var a=function(e){var t,a=Object(l.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;n(i)}}catch(r){a.e(r)}finally{a.f()}},n=function(t){t.children&&a(t.children),t.active=e===t.url};a(this.pages),this.setActivePageContent(null),this.loadActivePage()}},{key:"activePage",get:function(){var e=function(e){var a,n=Object(l.a)(e);try{for(n.s();!(a=n.n()).done;){var i=a.value,r=t(i);if(r)return r}}catch(o){n.e(o)}finally{n.f()}},t=function(t){return t.active?t:t.children?e(t.children):void 0};return e(this.pages)}},{key:"logIn",value:function(e){var t=this;return new Promise((function(a,n){A.a.get("private-pages/main.pmd").then((function(i){try{var r=V.a.AES.decrypt(i.data,e).toString(V.a.enc.Utf8);console.log("login check. decrypted:\n"+r),t.loginInfo="salimmo s\xf9, el primo e io secondo,\ntanto ch\u2019i\u2019 vidi de le cose belle\nche porta \u2019l ciel, per un pertugio tondo.\nE quindi uscimmo a riveder le stelle."===r?{password:e}:null,a()}catch(o){n("Login failed")}}))}))}},{key:"logOut",value:function(){this.loginInfo=null}}]),e}()),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,505)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(T,{model:B})}),document.getElementById("root")),U()},81:function(e){e.exports=JSON.parse('{"api":{"uist_manager":{"host":"35.223.189.141","port":8123}}}')}},[[502,1,2]]]);
//# sourceMappingURL=main.8adfc8c9.chunk.js.map