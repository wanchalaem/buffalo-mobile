(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d127654"],{"0fd9":function(t,e,r){"use strict";r("99af"),r("4160"),r("caad"),r("13d5"),r("4ec9"),r("b64b"),r("d3b7"),r("ac1f"),r("2532"),r("3ca3"),r("5319"),r("159b"),r("ddb0");var n=r("ade3"),a=r("5530"),i=(r("4b85"),r("2b0e")),s=r("d9f7"),o=r("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(r,n){return r[t+Object(o["G"])(n)]=e(),r}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:h}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},p=u("alignContent",(function(){return{type:String,default:null,validator:g}})),b={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(p)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,r){var n=m[t];if(null!=r){if(e){var a=e.replace(t,"");n+="-".concat(a)}return n+="-".concat(r),n.toLowerCase()}}var _=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:h}},v),{},{alignContent:{type:String,default:null,validator:g}},p),render:function(t,e){var r=e.props,a=e.data,i=e.children,o="";for(var c in r)o+=String(r[c]);var l=_.get(o);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var n=r[t],a=y(e,t,n);a&&l.push(a)}));l.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n["a"])(t,"align-".concat(r.align),r.align),Object(n["a"])(t,"justify-".concat(r.justify),r.justify),Object(n["a"])(t,"align-content-".concat(r.alignContent),r.alignContent),t)),_.set(o,l)}(),t(r.tag,Object(s["a"])(a,{staticClass:"row",class:l}),i)}})},"23c2":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",{staticClass:"d-flex flex-row "},[r("v-btn",{attrs:{color:"white",depressed:"",small:"",fab:""},on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")])],1),r("h2",[t._v("รูปภาพ")])],1)],1),r("v-container",{attrs:{"grid-list-xs":""}},[r("v-card",{staticClass:"rounded-lg pt-2",attrs:{flat:""}},[r("center",[r("h3",[t._v("ภาพถ่ายบัตรประจำตัวประชาชน")]),r("br"),r("v-img",{staticClass:"rounded-lg ",attrs:{height:"200",width:"",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"}}),r("br"),r("v-btn",{staticClass:"rounded-lg",attrs:{depressed:"",block:"",color:"success"}},[r("v-icon",[t._v("mdi-upload")]),t._v("อัพโหลดบัตรประชาชน ")],1)],1)],1),r("br"),r("v-divider",{attrs:{color:"black"}}),r("v-card",{staticClass:"rounded-lg",attrs:{flat:""}},[r("center",{staticClass:"pt-2"},[r("h3",{staticClass:"pb-2"},[t._v("รูปภาพฟาร์ม")]),r("br"),r("v-img",{staticClass:"rounded-lg elevation-5",attrs:{height:"200",width:"auto",src:"https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}),r("br"),r("v-btn",{staticClass:"rounded-lg",attrs:{depressed:"",block:"",color:"success"}},[r("v-icon",[t._v("mdi-upload")]),t._v("อัพโหลดภาพถ่ายฟาร์ม ")],1)],1)],1)],1)],1)},a=[],i={},s=i,o=r("2877"),c=r("6544"),l=r.n(c),u=r("8336"),d=r("b0af"),f=r("a523"),h=r("ce7e"),v=r("132d"),g=r("adda"),p=r("0fd9"),b=Object(o["a"])(s,n,a,!1,null,null,null);e["default"]=b.exports;l()(b,{VBtn:u["a"],VCard:d["a"],VContainer:f["a"],VDivider:h["a"],VIcon:v["a"],VImg:g["a"],VRow:p["a"]})},"297c":function(t,e,r){"use strict";r("a9e3");var n=r("2b0e"),a=(r("c7cd"),r("5530")),i=r("ade3"),s=(r("6ece"),r("0789")),o=r("a9ad"),c=r("fe6c"),l=r("a452"),u=r("7560"),d=r("80d2"),f=r("58df"),h=Object(f["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),l["a"],u["a"]),v=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(i["a"])(t,this.isReversed?"right":"left",Object(d["g"])(this.normalizedValue,"%")),Object(i["a"])(t,"width",Object(d["g"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(a["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?s["c"]:s["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["s"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=v;e["a"]=n["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"4b85":function(t,e,r){},"4ec9":function(t,e,r){"use strict";var n=r("6d61"),a=r("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"615b":function(t,e,r){},6566:function(t,e,r){"use strict";var n=r("9bf2").f,a=r("7c73"),i=r("e2cc"),s=r("0366"),o=r("19aa"),c=r("2266"),l=r("7dd0"),u=r("2626"),d=r("83ab"),f=r("f183").fastKey,h=r("69f3"),v=h.set,g=h.getterFor;t.exports={getConstructor:function(t,e,r,l){var u=t((function(t,n){o(t,u,e),v(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=n&&c(n,t[l],t,r)})),h=g(e),p=function(t,e,r){var n,a,i=h(t),s=b(t,e);return s?s.value=r:(i.last=s={index:a=f(e,!0),key:e,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=s),n&&(n.next=s),d?i.size++:t.size++,"F"!==a&&(i.index[a]=s)),t},b=function(t,e){var r,n=h(t),a=f(e);if("F"!==a)return n.index[a];for(r=n.first;r;r=r.next)if(r.key==e)return r};return i(u.prototype,{clear:function(){var t=this,e=h(t),r=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,r=h(e),n=b(e,t);if(n){var a=n.next,i=n.previous;delete r.index[n.index],n.removed=!0,i&&(i.next=a),a&&(a.previous=i),r.first==n&&(r.first=a),r.last==n&&(r.last=i),d?r.size--:e.size--}return!!n},forEach:function(t){var e,r=h(this),n=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:r.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),i(u.prototype,r?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),d&&n(u.prototype,"size",{get:function(){return h(this).size}}),u},setStrong:function(t,e,r){var n=e+" Iterator",a=g(e),i=g(n);l(t,e,(function(t,e){v(this,{type:n,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,r=t.last;while(r&&r.removed)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),u(e)}}},"6d61":function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("94ca"),s=r("6eeb"),o=r("f183"),c=r("2266"),l=r("19aa"),u=r("861d"),d=r("d039"),f=r("1c7e"),h=r("d44e"),v=r("7156");t.exports=function(t,e,r){var g=-1!==t.indexOf("Map"),p=-1!==t.indexOf("Weak"),b=g?"set":"add",m=a[t],y=m&&m.prototype,_=m,C={},k=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return p&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(p&&!u(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(i(t,"function"!=typeof m||!(p||y.forEach&&!d((function(){(new m).entries().next()})))))_=r.getConstructor(e,t,g,b),o.REQUIRED=!0;else if(i(t,!0)){var j=new _,x=j[b](p?{}:-0,1)!=j,B=d((function(){j.has(1)})),O=f((function(t){new m(t)})),w=!p&&d((function(){var t=new m,e=5;while(e--)t[b](e,e);return!t.has(-0)}));O||(_=e((function(e,r){l(e,_,t);var n=v(new m,e,_);return void 0!=r&&c(r,n[b],n,g),n})),_.prototype=y,y.constructor=_),(B||w)&&(k("delete"),k("has"),g&&k("get")),(w||x)&&k(b),p&&y.clear&&delete y.clear}return C[t]=_,n({global:!0,forced:_!=m},C),h(_,t),p||r.setStrong(_,t,g),_}},"6ece":function(t,e,r){},a523:function(t,e,r){"use strict";r("99af"),r("4de4"),r("b64b"),r("2ca0"),r("20f6"),r("4b85");var n=r("e8f2"),a=r("d9f7");e["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,i=e.data,s=e.children,o=i.attrs;return o&&(i.attrs={},r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,Object(a["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),s)}})},b0af:function(t,e,r){"use strict";r("0481"),r("4069"),r("a9e3");var n=r("5530"),a=(r("615b"),r("10d2")),i=r("297c"),s=r("1c87"),o=r("58df");e["a"]=Object(o["a"])(i["a"],s["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},e8f2:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("99af"),r("4de4"),r("a15b"),r("b64b"),r("2ca0"),r("498a");var n=r("2b0e");function a(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,a=r.data,i=r.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var s=a.attrs;if(s){a.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,i)}})}}}]);
//# sourceMappingURL=chunk-2d127654.e443633d.js.map