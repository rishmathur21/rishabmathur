(this.webpackJsonprishabmathur=this.webpackJsonprishabmathur||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(13),a(2)),o=a(3),s=a(5),u=a(4),m=a(1),h=a.n(m),d=(a(14),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name;console.log(this.props.data)}return r.a.createElement("div",null,r.a.createElement("header",{id:"home"},r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,e)," ",r.a.createElement("h3",null," Developer | Musician | Random Project Doer"),r.a.createElement("hr",null))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#journal"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component)),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#journal"},"Journal")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")))))}}]),a}(n.Component),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={siteData:{}},n}return Object(o.a)(a,[{key:"setSize",value:function(){h()("header").css({height:h()(window).height()}),h()(window).on("resize",(function(){h()("header").css({height:h()(window).height()}),h()("body").css({width:h()(window).width()})}))}},{key:"getSiteData",value:function(){h.a.ajax({url:"/rishabmathur/siteData.json",dataType:"json",cache:!1,success:function(e){this.setState({siteData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getSiteData(),this.setSize()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(d,{data:this.state.siteData.main}))}}]),a}(n.Component);c.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.af65d30d.chunk.js.map