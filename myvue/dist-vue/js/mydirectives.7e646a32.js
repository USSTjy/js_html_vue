(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mydirectives"],{"045c":function(e,t,r){"use strict";r("2aa7")},"0cb2":function(e,t,r){var n=r("7b0b"),a=Math.floor,c="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,u,l,s){var f=r+e.length,d=u.length,v=o;return void 0!==l&&(l=n(l),v=i),c.call(s,v,(function(n,c){var i;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(f);case"<":i=l[c.slice(1,-1)];break;default:var o=+c;if(0===o)return n;if(o>d){var s=a(o/10);return 0===s?n:s<=d?void 0===u[s-1]?c.charAt(1):u[s-1]+c.charAt(1):n}i=u[o-1]}return void 0===i?"":i}))}},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var c=r.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),c=r("2d00"),i=a("species");e.exports=function(e){return c>=51||!n((function(){var t=[],r=t.constructor={};return r[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2aa7":function(e,t,r){},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),c=r("50c4"),i=r("a691"),o=r("1d80"),u=r("8aa5"),l=r("0cb2"),s=r("14c3"),f=Math.max,d=Math.min,v=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,h=p?"$":"$0";return[function(r,n){var a=o(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!p&&g||"string"===typeof n&&-1===n.indexOf(h)){var o=r(t,e,this,n);if(o.done)return o.value}var x=a(e),E=String(this),b="function"===typeof n;b||(n=String(n));var I=x.global;if(I){var y=x.unicode;x.lastIndex=0}var m=[];while(1){var _=s(x,E);if(null===_)break;if(m.push(_),!I)break;var N=String(_[0]);""===N&&(x.lastIndex=u(E,c(x.lastIndex),y))}for(var R="",A=0,S=0;S<m.length;S++){_=m[S];for(var T=String(_[0]),$=f(d(i(_.index),E.length),0),w=[],P=1;P<_.length;P++)w.push(v(_[P]));var C=_.groups;if(b){var O=[T].concat(w,$,E);void 0!==C&&O.push(C);var U=String(n.apply(void 0,O))}else U=l(T,E,$,w,C,n);$>=A&&(R+=E.slice(A,$)+U,A=$+T.length)}return R+E.slice(A)}]}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),c="["+a+"]",i=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),u=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},"64da":function(e,t,r){"use strict";r.r(t);var n,a,c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v(" directives "),e._l(e.list,(function(t){return r("div",{directives:[{name:"myDirective",rawName:"v-myDirective",value:t.value,expression:"item.value"}],key:t.index,staticClass:"c-acafafs"},[e._v(" "+e._s(t.value)+" ")])})),r("div",[e._v(" 渲染函数render "),r("AnchoredHeading",{attrs:{level:1}},[e._v("hello WORLD!!")])],1)],2)},i=[],o={1:"color-red",0:"color-gray","-1":"color-green"},u={myFocus:{bind:function(e,t){e.classList.add(o[t.value])},unbind:function(e,t){e.classList.remove(o[t.value])}}},l=(r("a15b"),r("d81d"),r("5319"),r("ac1f"),r("a9e3"),{render:function(e){var t=function e(t){return t.map((function(t){return t.children?e(t.children):t.text})).join("")},r=t(this.$slots.default).toLowerCase().replace(/\W+/g,"-").replace(/(^-|-$)/g,"");return console.log("dddd",r),e("h"+this.level,[e("a",{attrs:{name:r,href:"#"+r},style:{color:"red"},class:{foo:!0,bar:!1}},this.$slots.default)])},props:{level:{type:Number,required:!0}}}),s=l,f=r("2877"),d=Object(f["a"])(s,n,a,!1,null,null,null),v=d.exports,p={directives:{myDirective:u.myFocus},components:{AnchoredHeading:v},data:function(){return{num:300,list:[{value:1},{value:0},{value:-1}]}}},g=p,h=(r("045c"),Object(f["a"])(g,c,i,!1,null,"23c08280",null));t["default"]=h.exports},7156:function(e,t,r){var n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var c,i;return a&&"function"==typeof(c=t.constructor)&&c!==r&&n(i=c.prototype)&&i!==r.prototype&&a(e,i),e}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),c=RegExp.prototype.exec,i=String.prototype.replace,o=c,u=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=u||s||l;f&&(o=function(e){var t,r,a,o,f=this,d=l&&f.sticky,v=n.call(f),p=f.source,g=0,h=e;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,g++),r=new RegExp("^(?:"+p+")",v)),s&&(r=new RegExp("^"+p+"$(?!\\s)",v)),u&&(t=f.lastIndex),a=c.call(d?r:f,h),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:u&&a&&(f.lastIndex=f.global?a.index+a[0].length:t),s&&a&&a.length>1&&i.call(a[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),e.exports=o},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a15b:function(e,t,r){"use strict";var n=r("23e7"),a=r("44ad"),c=r("fc6a"),i=r("a640"),o=[].join,u=a!=Object,l=i("join",",");n({target:"Array",proto:!0,forced:u||!l},{join:function(e){return o.call(c(this),void 0===e?",":e)}})},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),c=r("94ca"),i=r("6eeb"),o=r("5135"),u=r("c6b6"),l=r("7156"),s=r("c04e"),f=r("d039"),d=r("7c73"),v=r("241c").f,p=r("06cf").f,g=r("9bf2").f,h=r("58a8").trim,x="Number",E=a[x],b=E.prototype,I=u(d(b))==x,y=function(e){var t,r,n,a,c,i,o,u,l=s(e,!1);if("string"==typeof l&&l.length>2)if(l=h(l),t=l.charCodeAt(0),43===t||45===t){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(c=l.slice(2),i=c.length,o=0;o<i;o++)if(u=c.charCodeAt(o),u<48||u>a)return NaN;return parseInt(c,n)}return+l};if(c(x,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var m,_=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof _&&(I?f((function(){b.valueOf.call(r)})):u(r)!=x)?l(new E(y(t)),r,_):y(t)},N=n?v(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),R=0;N.length>R;R++)o(E,m=N[R])&&!o(_,m)&&g(_,m,p(E,m));_.prototype=b,b.constructor=_,i(a,x,_)}},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),c=r("b622"),i=r("9263"),o=r("9112"),u=c("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=c("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,f){var p=c(e),g=!a((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=g&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!g||!h||"replace"===e&&(!l||!s||d)||"split"===e&&!v){var x=/./[p],E=r(p,""[e],(function(e,t,r,n,a){return t.exec===i?g&&!a?{done:!0,value:x.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=E[0],I=E[1];n(String.prototype,e,b),n(RegExp.prototype,p,2==t?function(e,t){return I.call(e,this,t)}:function(e){return I.call(e,this)})}f&&o(RegExp.prototype[p],"sham",!0)}},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,c=r("1dde"),i=c("map");n({target:"Array",proto:!0,forced:!i},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=mydirectives.7e646a32.js.map