(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),o=n("7496"),s=n("f6c4"),r=function(){var t=this,e=t._self._c;return e(o["a"],[e(s["a"],[e("Home")],1)],1)},i=[],l=n("8336"),c=n("62ad"),u=n("a523"),d=n("adda"),m=n("0fd9"),p=function(){var t=this,e=t._self._c;return e(u["a"],[e(m["a"],{staticClass:"text-center"},[e(c["a"],{attrs:{cols:"12",md:"6"}},[e(d["a"],{staticClass:"my-3 text-center",attrs:{src:"https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/c7/22/be/c722be0b-a763-0ec8-7cdc-5690d1091f31/source/512x512bb.jpg",contain:"",height:"200"}})],1),e(c["a"],{staticClass:"mb-4",attrs:{cols:"12",md:"6"}},[e("h1",{staticClass:"display-2 font-weight-bold mb-3 mr-3 ml-3"},[t._v(t._s(this.letterSet))]),e("h1",{staticClass:"display-2 font-weight-bold mb-3 mr-3 ml-3"},[t._v(t._s(this.seconds))]),e(l["a"],{staticClass:"font-weight-bold ma-3",attrs:{color:"primary"},on:{click:function(e){return t.startSession()}}},[t._v(" GO! ")]),e(l["a"],{staticClass:"font-weight-bold ma-3",attrs:{color:"error"},on:{click:function(e){return t.stopSession()}}},[t._v(" STOP ")])],1),e(c["a"],{attrs:{cols:"12",md:"6",justify:"center",align:"center"}},[e("settngs-panel",{attrs:{minSecondsVal:this.minSeconds,maxSecondsVal:this.maxSeconds},on:{changeMinAndMax:function(e){return t.changeMinAndMax(e)}}})],1)],1)],1)},f=[],h=n("ad48"),S=n("a362"),b=n.n(S),x=n("0798"),g=n("b0af"),v=n("99d9"),y=n("169a"),A=n("132d"),C=n("ba0d"),_=n("2fa4"),w=n("8654"),O=function(){var t=this,e=t._self._c;return e(y["a"],{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:a}){return[e(l["a"],t._g(t._b({attrs:{icon:"",color:"grey"}},"v-btn",a,!1),n),[e(A["a"],[t._v("mdi-cog")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(g["a"],{staticClass:"mx-auto my-12",attrs:{"max-width":"374",elevation:"9",outlined:"",shaped:"",light:"",color:"white"}},[e(v["b"],[e(u["a"],{attrs:{fluid:""}},[e(m["a"],[e(c["a"],{attrs:{cols:"12"}},[e(x["a"],{attrs:{type:"error"},model:{value:t.errorAlertVisible,callback:function(e){t.errorAlertVisible=e},expression:"errorAlertVisible"}},[t._v(" Il tempo minimo non può essere maggiore del tempo massimo ")])],1),e(c["a"],{attrs:{cols:"12"}},[e(C["a"],{staticClass:"align-center",attrs:{max:600,label:"Min"},scopedSlots:t._u([{key:"append",fn:function(){return[e(w["a"],{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},model:{value:t.min,callback:function(e){t.min=e},expression:"min"}})]},proxy:!0}]),model:{value:t.min,callback:function(e){t.min=e},expression:"min"}})],1),e(c["a"],{attrs:{cols:"12"}},[e(C["a"],{staticClass:"align-center",attrs:{max:600,label:"Max"},scopedSlots:t._u([{key:"append",fn:function(){return[e(w["a"],{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{type:"number"},model:{value:t.max,callback:function(e){t.max=e},expression:"max"}})]},proxy:!0}]),model:{value:t.max,callback:function(e){t.max=e},expression:"max"}})],1)],1)],1)],1),e(v["a"],[e(_["a"]),e(l["a"],{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Chiudi ")]),e(l["a"],{attrs:{text:""},on:{click:t.save}},[t._v(" Salva ")])],1)],1)],1)},M=[],V=n("2f62");a["a"].use(V["a"]);var k=new V["a"].Store({state:{minSecondsVal:20,maxSecondsVal:300},getters:{minSecondsVal:t=>t.minSecondsVal,maxSecondsVal:t=>t.maxSecondsVal},mutations:{changeMinSeconds(t,e){t.minSecondsVal=e},changeMaxSeconds(t,e){t.maxSecondsVal=e}},actions:{}}),T={mounted(){this.min=k.getters.minSecondsVal,this.max=k.getters.maxSecondsVal},data:()=>({dialog:!1,errorAlertVisible:!1,min:null,max:null}),methods:{save:function(){1==this.checkValidity()&&(this.dialog=!1,this.errorAlertVisible=!1,k.commit("changeMinSeconds",this.min,this.max))},checkValidity:function(){return!(this.min>this.max)||(this.errorAlertVisible=!0,!1)}}},j=T,R=n("2877"),E=Object(R["a"])(j,O,M,!1,null,null,null),I=E.exports,P={name:"HelloWorld",components:{"settngs-panel":I},data:()=>({words:h,seconds:null,letterSet:null,timer:null,audio:null,dialog:!1,minSeconds:20,maxSeconds:300}),methods:{setTimer:function(t=20,e=300){var n=Math.floor(Math.random()*(e-t+1)+t);console.log("Wait for "+n+" seconds"),this.timer=setTimeout(this.timerEvent,1e3*n)},timerEvent:function(){console.log("è scaduto il timer"),this.playSound()},getRandomWord:function(){return this.words[Math.floor(Math.random()*this.words.length)]},startSession:function(){this.letterSet=this.getRandomWord(),this.setTimer(k.getters.minSecondsVal,k.getters.minSecondsVal),this.audio=new Audio(b.a)},stopSession:function(){this.audio.pause(),clearTimeout(this.timer),this.letterSet=""},playSound:function(){this.audio.play()}}},D=P,B=Object(R["a"])(D,p,f,!1,null,null,null),H=B.exports,N={name:"App",components:{Home:H},data:()=>({})},W=N,J=Object(R["a"])(W,r,i,!1,null,null,null),L=J.exports,U=n("f309");a["a"].use(U["a"]);var G=new U["a"]({});console.log(k),a["a"].config.productionTip=!1,new a["a"]({store:k,vuetify:G,render:t=>t(L)}).$mount("#app")},a362:function(t,e,n){t.exports=n.p+"media/alarm.3522242d.mp3"},ad48:function(t){t.exports=JSON.parse('["AR","GRU ","SL ","SAL ","ER ","TRA ","TR ","AS ","AB ","CC ","ME ","MEN ","BAC ","AR ","RA ","RAS ","DU ","STO ","AZ ","ZA ","RUT ","AC ","CA ","ETE ","ET ","BE ","BEL ","DOT ","BO ","TI ","IT ","DRO ","ACA ","BR ","ACC ","DA ","ACC ","AST ","SC ","SCE ","SCI ","MO ","MI ","MA ","MAR ","MON ","DIN ","NID ","DIO ","SCO ","SO ","CH ","CHI ","SI ","FE"]')}});
//# sourceMappingURL=app.16933315.js.map