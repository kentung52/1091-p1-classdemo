(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,n){},14:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var m=n(3),l=n(4),s=n(6),c=n(5),u=function(e){var a=e.name,n=e.email,t=e.image;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"".concat(t),style:{width:"200px",height:"200px"},alt:"robots"}),r.a.createElement("h2",null,a),r.a.createElement("p",null,n))},g=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,a){return r.a.createElement(u,{key:a,id:e.id,image:e.image,name:e.name,email:e.email})})))},h=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search rebots",onChange:a}))},d=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"}},e.children)},p=(n(14),function(e){Object(s.a)(n,e);var a=Object(c.a)(n);function n(){var e;return Object(m.a)(this,n),(e=a.call(this)).componentDidMount=function(){fetch("/data/robots.json").then((function(e){return e.json()})).then((function(a){console.log("users",a),e.setState({robots:a})}))},e.onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={robots:[],searchField:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement(h,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(g,{robots:a})))}}]),n}(t.Component));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(p,{robots:[{id:1,image:"./img/a.png",name:"Monster Game",username:"Bret",email:"\u7c21\u6613\u6253\u602a\u904a\u6232"},{id:2,image:"./img/2.JPG",name:"\u8a08\u7b97\u6a5f",username:"Antonette",email:"\u80fd\u52a0\u6e1b\u4e58\u9664\u7684\u7db2\u8def\u8a08\u7b97\u6a5f"},{id:3,image:"./img/3.png",name:"\u8a18\u5e33\u5de5\u5177",username:"Samantha",email:""},{id:4,image:"./img/4.png",name:"\u7d71\u8a08\u5716\u8868",username:"Karianne",email:"\u81ea\u884c\u63a7\u5236\u5716\u5f62\u9577\u5ea6\u7df4\u7fd2"},{id:5,image:"./img/newdata.JPG",name:"\u65b0\u589e\u8cc7\u6599",username:"Kamren",email:"\u65b0\u589e\u4e00\u7b46\u4f7f\u7528\u8005\u8f38\u5165\u7684\u8cc7\u6599\u4e26\u5132\u5b58"},{id:6,image:"./img/5.png",name:"\u65b0\u589e\u6b04\u4f4d",username:"Leopoldo_Corkery",email:""},{id:7,image:"./img/6.png",name:"\u67e5\u8a62\u5668",username:"Elwyn.Skiles",email:""},{id:8,image:"./img/MINISHOP.png",name:"MiniShop",username:"Maxime_Nienow",email:"\u53ef\u4f7f\u7528\u7684\u5546\u5e97"},{id:9,image:"./img/MusicPlayer.JPG",name:"MusicPlayer",username:"Delphine",email:""},{id:10,image:"./img/VideoPlayer.JPG",name:"VideoPlayer",username:"Moriah.Stanton",email:""}]}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.c9227c8f.chunk.js.map