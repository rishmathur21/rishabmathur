(this.webpackJsonprishabmathur=this.webpackJsonprishabmathur||[]).push([[0],{32:function(e,a,t){e.exports=t(54)},37:function(e,a,t){},38:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),i=(t(37),t(1)),o=t(2),s=t(4),m=t(3),u=t(5),d=t.n(u),h=(t(38),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name;console.log(this.props.data)}return r.a.createElement("div",null,r.a.createElement("header",{id:"home"},r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,e)," ",r.a.createElement("h3",null," Developer | Musician | Random Project Doer"),r.a.createElement("hr",null))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#journal"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component)),f=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#journal"},"Journal")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")))))}}]),t}(n.Component),b=t(19),p=t.n(b),E=function(e){var a=e.direction,t=e.className;return"right"===a?r.a.createElement("div",{className:t}," ",r.a.createElement("i",{className:"fa  fa-arrow-right","aria-hidden":"true"})," "):"left"===a?r.a.createElement("div",{className:t}," ",r.a.createElement("i",{className:"fa  fa-arrow-left","aria-hidden":"true"})," "):void 0},v=E({direction:"left",className:"arrow-prev"}),g=E({direction:"right",className:"arrow-next"}),w=function(e){var a=e.item;return r.a.createElement("div",{className:"menu-item journal-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:a.url,target:"_blank"},r.a.createElement("img",{className:"menu-image",alt:a.title,src:"/rishabmathur/images/"+a.image}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"journal-item-meta"},r.a.createElement("h5",null,a.title),r.a.createElement("p",null,a.category," "))))))},k=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.map((function(e){return r.a.createElement(w,{item:e,key:e.title})}));return r.a.createElement("div",{className:"portfolio-wrapper"},r.a.createElement(p.a,{hideArrows:!0,hideSingleArrow:!0,data:e,arrowLeft:v,arrowRight:g,alignCenter:!1,wheel:!1,dragging:!1,clickWhenDrag:!1,itemClassActive:""}))}}]),t}(n.Component),N=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.writing,a=this.props.data.other;return r.a.createElement("section",{id:"journal"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null," on my mind"),r.a.createElement(k,{data:e}),r.a.createElement("br",null)," ",r.a.createElement("h1",null," random stuff"),r.a.createElement("div",null,r.a.createElement(k,{data:a}))))}}]),t}(n.Component),j=t(13),y=(t(49),t(27)),O=t.n(y),D=t(28),S=t.n(D),x=t(26),R=t.n(x),C=t(25),A=t.n(C),T=t(20),H=t.n(T),I=t(15),z=t.n(I),J=t(29),M=t.n(J),V=t(30),_=t.n(V),B=function(e){return e.map((function(e){return function(e){var a,t,n,l=function(){switch(e.type){case"born":return r.a.createElement(H.a,null);case"move":return r.a.createElement(A.a,null);case"education":return r.a.createElement(R.a,null);case"travel":return r.a.createElement(O.a,null);case"work":return r.a.createElement(S.a,null);case"bike":return r.a.createElement(M.a,null);default:return r.a.createElement(_.a,null)}};switch(e.type){case"born":a={background:"#dbc91f",color:"#fff"},t={background:"#dbc91f",color:"#fff"},n={borderRight:"7px solid #dbc91f"};break;case"move":a={background:"#34dbeb",color:"#fff"},t={background:"#34dbeb",color:"#fff"},n={borderRight:"7px solid #34dbeb"};break;case"education":a={background:"#db676b",color:"#fff"},t={background:"#db676b",color:"#fff"},n={borderRight:"7px solid #db676b"};break;case"travel":a={background:"#ba78c4",color:"#fff"},t={background:"#ba78c4",color:"#fff"},n={borderRight:"7px solid #ba78c4"};break;case"work":a={background:"#86d173",color:"#fff"},t={background:"#86d173",color:"#fff"},n={borderRight:"7px solid #86d173"};break;default:a={background:"#e6bc5c",color:"#fff"},t={background:"#e6bc5c",color:"#fff"},n={borderRight:"7px solid #e6bc5c"}}return r.a.createElement(j.VerticalTimelineElement,{iconStyle:t,contentStyle:a,contentArrowStyle:n,date:e.date,key:e.event,icon:r.a.createElement(l,null)},r.a.createElement("h3",{className:"vertical-timeline-element-title"},e.event),r.a.createElement("h4",{className:"vertical-timeline-element-location"}," ",r.a.createElement(z.a,null),e.location," "),r.a.createElement("div",{className:"vertical-timeline-element-description"},e.description))}(e)}))},L=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return this.props.data&&(this.timelineItems=B(this.props.data),console.log(this.timelineItems)),r.a.createElement(j.VerticalTimeline,null,this.timelineItems,r.a.createElement(j.VerticalTimelineElement,null,r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Tomorrow"),r.a.createElement("h4",{className:"vertical-timeline-element-location"}," ",r.a.createElement(z.a,null),"Unknown"),r.a.createElement("div",{className:"vertical-timeline-element-description"},"Hopefully doing something cool")))}}]),t}(n.Component),P=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="/rishabmathur/images/"+this.props.data.image,a=this.props.data.bio,t=this.props.data.timeline}return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"center-from-top"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"four columns "},r.a.createElement("div",{className:"bio"},r.a.createElement("img",{className:"profile-pic",src:e,alt:"Rishab Mathur"}),r.a.createElement("h1",null," Hi I'm Rishab "),r.a.createElement("p",null," ",a," "))),r.a.createElement("div",{className:"eight columns main-col"},r.a.createElement("div",{className:"timeline_container"},r.a.createElement(L,{data:t}))))))}}]),t}(n.Component),U=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={siteData:{}},n}return Object(o.a)(t,[{key:"setSize",value:function(){d()("header").css({height:d()(window).height()}),d()(window).on("resize",(function(){d()("header").css({height:d()(window).height()}),d()("body").css({width:d()(window).width()})}))}},{key:"smoothScroll",value:function(){d()(".smoothscroll").on("click",(function(e){e.preventDefault();var a=this.hash,t=d()(a);d()("html, body").stop().animate({scrollTop:t.offset().top},800,"swing",(function(){window.location.hash=a}))}))}},{key:"getSiteData",value:function(){d.a.ajax({url:"/rishabmathur/siteData.json",dataType:"json",cache:!1,success:function(e){this.setState({siteData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getSiteData(),this.setSize(),this.smoothScroll()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(h,{data:this.state.siteData.main}),r.a.createElement(N,{data:this.state.siteData.journal}),r.a.createElement(P,{data:this.state.siteData.about}))}}]),t}(n.Component);c.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4a106dde.chunk.js.map