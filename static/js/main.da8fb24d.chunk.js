(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports=[{id:0,image:"http://images5.fanpop.com/image/photos/31000000/picture-cartoon-characters-31032350-225-225.png",name:"PowderPuff Girl",clicked:"false"},{id:1,image:"https://i.pinimg.com/236x/61/9f/12/619f12020a3ac0ce7e42636bde65d93d--vintage-cartoon-cartoon-characters.jpg",name:"Mighty Mouse",clicked:"false"},{id:2,image:"https://i.pinimg.com/236x/2d/19/67/2d19676f9b30c02867bf2b9df8794a7c--disney-world-vacation-disney-vacations.jpg",name:"Goofy",clicked:"false"},{id:3,image:"https://i.pinimg.com/236x/f3/b3/c8/f3b3c857c8e204ed3557f109ab32945f--jerry-oconnell-cartoon-characters.jpg",name:"Jerry",clicked:"false"},{id:4,image:"http://images6.fanpop.com/image/polls/1549000/1549962_1459067279276_full.png",name:"Pikachu",clicked:"false"},{id:5,image:"https://s-media-cache-ak0.pinimg.com/originals/84/f6/5c/84f65c0a190a74fb52ec877db2832cdd.jpg",name:"Bird",clicked:"false"},{id:6,image:"https://www.wikihow.com/images/thumb/1/1a/User-Completed-Image-Create-Your-Own-Cartoon-Character-2018.09.14-15.13.27.0.png/-crop-225-225-225px-User-Completed-Image-Create-Your-Own-Cartoon-Character-2018.09.14-15.13.27.0.png",name:"Wolf",clicked:"false"},{id:7,image:"https://i.pinimg.com/originals/a5/90/5d/a5905d714026ea486b694e3aca932d13.jpg",name:"PowderPuff Girl 2",clicked:"false"},{id:8,image:"https://www.lockhaven.edu/~dsimanek/pseudo/crunch.jpg",name:"Captain Crunch",clicked:"false"},{id:9,image:"https://www.babygogo.in/wp-content/uploads/2017/04/bugs-bunny.jpg",name:"Bugs Bunny",clicked:"false"}]},37:function(e,a,t){e.exports=t(60)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(21),r=t.n(i),o=(t(43),t(13)),l=t(14),m=t(19),s=t(15),d=t(20),u=(t(44),t(62)),f=t(61),p=t(36),g=(t(45),t(46),t(63));var h=function(e){return c.a.createElement("div",{className:"itemCard"},c.a.createElement(g.a,{onClick:e.score,style:{width:"16rem",cursor:"pointer"}},c.a.createElement(g.a.Img,{"data-id":e.key,variant:"top",src:e.image}),c.a.createElement(g.a.Body,null,c.a.createElement(g.a.Title,null,e.name))))},k=t(10),w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={items:k,score:0,clicked:[]},t.shuffle=function(){for(var e=k.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),t=[k[a],k[e]];k[e]=t[0],k[a]=t[1]}},t.handleScore=function(e){console.log("handleScore() running..."),console.log("handleScore running..."),t.setState({score:!0}),t.state.clicked.includes(e)?(alert("You lost"),t.setState({score:0})):(t.shuffle(),t.setState({score:t.state.clicked.length,clicked:[e].concat(Object(p.a)(t.state.clicked))}))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},k.map(function(a){return c.a.createElement(h,{key:a.id,name:a.name,image:a.image,score:function(){return e.handleScore(a.id)}})}))}}]),a}(n.Component),b=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,{bg:"dark",variant:"dark"},c.a.createElement(u.a.Brand,{href:"#home"},"Clicky Game"),c.a.createElement(f.a,{className:"mr-auto"},c.a.createElement(f.a.Link,{href:"#home"},"Home"),c.a.createElement(f.a.Link,{href:"#features"},"New Game"),c.a.createElement(f.a.Link,null,c.a.createElement("span",null,"Score:")))),c.a.createElement("div",{className:"App"},c.a.createElement(w,null,c.a.createElement(h,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.da8fb24d.chunk.js.map