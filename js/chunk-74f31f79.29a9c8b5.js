(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74f31f79"],{"0b04":function(t,e,a){"use strict";var n=a("ab0f"),r=a.n(n);r.a},"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),s=(a("4b85"),a("2b0e")),o=a("d9f7"),i=a("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(a,n){return a[t+Object(i["G"])(n)]=e(),a}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},v=u("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},h=u("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(v),justify:Object.keys(h),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var n=b[t];if(null!=a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var x=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},v),{},{justify:{type:String,default:null,validator:f}},h),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var a=e.props,r=e.data,s=e.children,i="";for(var c in a)i+=String(a[c]);var l=x.get(i);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var n=a[t],r=y(e,t,n);r&&l.push(r)}));l.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),x.set(i,l)}(),t(a.tag,Object(o["a"])(r,{staticClass:"row",class:l}),s)}})},"4b85":function(t,e,a){},"4ec9":function(t,e,a){"use strict";var n=a("6d61"),r=a("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,a){"use strict";var n=a("9bf2").f,r=a("7c73"),s=a("e2cc"),o=a("0366"),i=a("19aa"),c=a("2266"),l=a("7dd0"),u=a("2626"),d=a("83ab"),v=a("f183").fastKey,f=a("69f3"),h=f.set,p=f.getterFor;t.exports={getConstructor:function(t,e,a,l){var u=t((function(t,n){i(t,u,e),h(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=n&&c(n,t[l],t,a)})),f=p(e),g=function(t,e,a){var n,r,s=f(t),o=m(t,e);return o?o.value=a:(s.last=o={index:r=v(e,!0),key:e,value:a,previous:n=s.last,next:void 0,removed:!1},s.first||(s.first=o),n&&(n.next=o),d?s.size++:t.size++,"F"!==r&&(s.index[r]=o)),t},m=function(t,e){var a,n=f(t),r=v(e);if("F"!==r)return n.index[r];for(a=n.first;a;a=a.next)if(a.key==e)return a};return s(u.prototype,{clear:function(){var t=this,e=f(t),a=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete a[n.index],n=n.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,a=f(e),n=m(e,t);if(n){var r=n.next,s=n.previous;delete a.index[n.index],n.removed=!0,s&&(s.next=r),r&&(r.previous=s),a.first==n&&(a.first=r),a.last==n&&(a.last=s),d?a.size--:e.size--}return!!n},forEach:function(t){var e,a=f(this),n=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),s(u.prototype,a?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&n(u.prototype,"size",{get:function(){return f(this).size}}),u},setStrong:function(t,e,a){var n=e+" Iterator",r=p(e),s=p(n);l(t,e,(function(t,e){h(this,{type:n,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),u(e)}}},"6d61":function(t,e,a){"use strict";var n=a("23e7"),r=a("da84"),s=a("94ca"),o=a("6eeb"),i=a("f183"),c=a("2266"),l=a("19aa"),u=a("861d"),d=a("d039"),v=a("1c7e"),f=a("d44e"),h=a("7156");t.exports=function(t,e,a){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=p?"set":"add",b=r[t],y=b&&b.prototype,x=b,k={},C=function(t){var e=y[t];o(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})};if(s(t,"function"!=typeof b||!(g||y.forEach&&!d((function(){(new b).entries().next()})))))x=a.getConstructor(e,t,p,m),i.REQUIRED=!0;else if(s(t,!0)){var w=new x,_=w[m](g?{}:-0,1)!=w,S=d((function(){w.has(1)})),j=v((function(t){new b(t)})),O=!g&&d((function(){var t=new b,e=5;while(e--)t[m](e,e);return!t.has(-0)}));j||(x=e((function(e,a){l(e,x,t);var n=h(new b,e,x);return void 0!=a&&c(a,n[m],n,p),n})),x.prototype=y,y.constructor=x),(S||O)&&(C("delete"),C("has"),p&&C("get")),(O||_)&&C(m),g&&y.clear&&delete y.clear}return k[t]=x,n({global:!0,forced:x!=b},k),f(x,t),g||a.setStrong(x,t,p),x}},"722a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-bottom-navigation",{attrs:{grow:"",fixed:"",color:"success"}},[a("v-btn",{on:{click:function(e){return t.$router.push("/admin/home")}}},[a("span",[t._v("หน้าหลัก")]),a("v-icon",[t._v("mdi-view-dashboard-outline")])],1),a("v-btn",{on:{click:function(e){return t.$router.push("/admin/userprofile")}}},[a("span",[t._v("เกษตกร")]),a("v-icon",[t._v("mdi-account-group")])],1),a("v-btn",{on:{click:function(e){return t.$router.push("/admin/adminedit")}}},[a("span",[t._v("ผู้ดูแลระบบ")]),a("v-icon",[t._v("mdi-account-cog")])],1),a("v-btn",{on:{click:function(e){return t.$router.push("/admin/report")}}},[a("span",[t._v("รายงาน")]),a("v-icon",[t._v("mdi-clipboard-text")])],1)],1)],1)},r=[],s={data:function(){return{}}},o=s,i=a("2877"),c=a("6544"),l=a.n(c),u=a("b81c"),d=a("8336"),v=a("132d"),f=Object(i["a"])(o,n,r,!1,null,null,null);e["a"]=f.exports;l()(f,{VBottomNavigation:u["a"],VBtn:d["a"],VIcon:v["a"]})},"7f18":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticClass:"bg"},[a("NavigationAdmin",{attrs:{name:"ผู้ดูแลระบบ"}}),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-card",{staticClass:"pa-3 rounded-lg ma-2"},[a("v-img",{staticStyle:{height:"160px"},attrs:{src:"https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}},[a("center",[a("v-avatar",{staticClass:"rounded-lg pt-3 elevation-5",attrs:{size:"120"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"}})],1),a("v-list-item-title",{staticClass:"title body-3 white--text font-weight-light"},[a("h5",[t._v("นายแดง สุขใจ (ผู้ดูแลระบบ)")])])],1)],1)],1)],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-hover",{attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-card",{staticClass:"pa-3 rounded-lg ma-2",attrs:{flat:"",elevation:n?16:2},on:{click:function(e){return t.$router.push("/admin/userprofile")}}},[a("v-row",{staticClass:"pl-3"},[a("v-icon",{staticClass:"icondash info pa-6 rounded-lg",attrs:{dark:"",large:""}},[t._v("mdi-account-multiple")]),a("v-spacer"),a("div",{staticClass:"pr-3 ml-auto text-right",attrs:{"flex-vertical":""}},[a("h3",{staticClass:"font-weight-thin"},[t._v("เกษตกร")]),a("h4",{staticClass:"font-weight-thin"},[t._v("ทั้งหมด")]),a("h3",[t._v("300 คน")])])],1)],1)]}}])})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-hover",{attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-card",{staticClass:"pa-3 rounded-lg ma-2",attrs:{flat:"",elevation:n?16:2},on:{click:function(e){return t.$router.push("/admin/reportsystem")}}},[a("v-row",{staticClass:"pl-3"},[a("v-icon",{staticClass:"icondash indigo pa-6 rounded-lg",attrs:{dark:"",large:""}},[t._v("mdi-account-clock")]),a("v-spacer"),a("div",{staticClass:"pr-3 ml-auto text-right",attrs:{"flex-vertical":""}},[a("h3",{staticClass:"font-weight-thin"},[t._v("สมัครสมาชิกใหม่")]),a("h4",{staticClass:"font-weight-thin"},[t._v("ในเดือนนี้")]),a("h3",[t._v("120 คน")])])],1)],1)]}}])})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-hover",{attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-card",{staticClass:"pa-3 rounded-lg ma-2",attrs:{flat:"",elevation:n?16:2},on:{click:function(e){return t.$router.push("/admin/reportbuffalo")}}},[a("v-row",{staticClass:"pl-3"},[a("v-icon",{staticClass:"icondash green pa-6 rounded-lg",attrs:{dark:"",large:""}},[t._v("mdi-cow")]),a("v-spacer"),a("div",{staticClass:"pr-3 ml-auto text-right",attrs:{"flex-vertical":""}},[a("h3",{staticClass:"font-weight-thin"},[t._v("จำนวนควาย")]),a("h4",{staticClass:"font-weight-thin"},[t._v("ทั้งหมด")]),a("h3",[t._v("500 ตัว")])])],1)],1)]}}])})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-hover",{attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-card",{staticClass:"pa-3 rounded-lg ma-2",attrs:{flat:"",elevation:n?16:2},on:{click:function(e){return t.$router.push("/admin/reportsystem")}}},[a("v-row",{staticClass:"pl-3"},[a("v-icon",{staticClass:"icondash purple pa-6 rounded-lg",attrs:{dark:"",large:""}},[t._v("mdi-home-group")]),a("v-spacer"),a("div",{staticClass:"pr-3 ml-auto text-right",attrs:{"flex-vertical":""}},[a("h3",{staticClass:"font-weight-thin"},[t._v("จำนวนฟาร์ม")]),a("h4",{staticClass:"font-weight-thin"},[t._v("ทั้งหมด")]),a("h3",[t._v("50 แห่ง")])])],1)],1)]}}])})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-hover",{staticClass:"lg4 sm6 xs12",attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-card",{staticClass:"rounded-lg ma-2 pa-4",attrs:{elevation:n?16:2}},[a("h4",{staticClass:"text-center"},[t._v(" จำนวนผู้ใช้งานในแต่ละเดือน ")]),a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"rounded-lg mt-3",attrs:{color:"success",outlined:"",label:"วันที่","prepend-inner-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",r,!1),n))]}}],null,!0),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{color:"success","no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"success"},on:{click:function(e){t.menu=!1}}},[t._v("ยกเลิก")]),a("v-btn",{attrs:{text:"",color:"success"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("ตกลง")])],1)],1),a("column-chart",{attrs:{colors:["#3CB371"],data:t.chartData}}),a("br"),a("center",[a("v-btn",{staticClass:"rounded-lg",attrs:{depressed:"",block:"",dark:"",color:"green"},on:{click:function(e){return t.$router.push("/admin/reportsystem")}}},[t._v("ดูข้อมูลเพิ่มเติม")])],1)],1)]}}])})],1),a("v-flex",{staticClass:"mb-12",attrs:{xs12:"",md6:""}},[a("v-hover",{staticClass:"lg4 sm6 xs12",attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-card",{staticClass:"rounded-lg ma-2 pa-4",attrs:{elevation:n?16:2}},[a("h4",{staticClass:"text-center"},[t._v(" จำนวนกระบือที่อยู่ในระบบทั้งหมด ")]),a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"rounded-lg mt-3",attrs:{color:"success",outlined:"",label:"วันที่","prepend-inner-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",r,!1),n))]}}],null,!0),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{color:"success","no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"success"},on:{click:function(e){t.menu=!1}}},[t._v("ยกเลิก")]),a("v-btn",{attrs:{text:"",color:"success"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("ตกลง")])],1)],1),a("area-chart",{attrs:{colors:["#1E90FF"],data:t.chartData}}),a("center",{staticClass:"mt-6"},[a("v-btn",{staticClass:"rounded-lg",attrs:{depressed:"",block:"",dark:"",color:"green"},on:{click:function(e){return t.$router.push("/admin/reportbuffalo")}}},[t._v("ดูข้อมูลเพิ่มเติม")])],1)],1)]}}])})],1)],1)],1),a("buttomnav")],1)},r=[],s=a("722a"),o={name:"Root",components:{buttomnav:s["a"]},props:{},data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1,modal:!1,menu2:!1,picker:null,labels:["ม.ค.","ก.พ.","ม.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย..","ต.ค.","พ.ย.","ธ.ค."],value:[100,109,93,101,87,108,99],chartData:{"2020-06-20":50,"2020-06-21":40,"2020-06-22":30,"2020-06-23":10,"2020-06-24":70,"2020-06-25":45}}}},i=o,c=(a("0b04"),a("2877")),l=a("6544"),u=a.n(l),d=a("8212"),v=a("8336"),f=a("b0af"),h=a("a523"),p=a("2e4b"),g=a("0e8f"),m=a("ce87"),b=a("132d"),y=a("adda"),x=a("a722"),k=a("5d23"),C=a("e449"),w=a("0fd9"),_=a("2fa4"),S=a("8654"),j=Object(c["a"])(i,n,r,!1,null,"04d32518",null);e["default"]=j.exports;u()(j,{VAvatar:d["a"],VBtn:v["a"],VCard:f["a"],VContainer:h["a"],VDatePicker:p["a"],VFlex:g["a"],VHover:m["a"],VIcon:b["a"],VImg:y["a"],VLayout:x["a"],VListItemTitle:k["b"],VMenu:C["a"],VRow:w["a"],VSpacer:_["a"],VTextField:S["a"]})},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85");var n=a("e8f2"),r=a("d9f7");e["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,s=e.data,o=e.children,i=s.attrs;return i&&(s.attrs={},a=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),t(n.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),o)}})},a722:function(t,e,a){"use strict";a("20f6");var n=a("e8f2");e["a"]=Object(n["a"])("layout")},ab0f:function(t,e,a){},b81c:function(t,e,a){"use strict";a("a9e3"),a("c7cd");var n=a("5530"),r=(a("dd43"),a("3a66")),s=a("604c"),o=s["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return s["a"].options.computed.classes.call(this)}},methods:{genData:s["a"].options.methods.genData}}),i=a("a9ad"),c=a("24b2"),l=a("a452"),u=a("277e"),d=a("7560"),v=a("f2e7"),f=a("58df"),h=a("d9bd");e["a"]=Object(f["a"])(Object(r["a"])("bottom",["height","inputValue"]),i["a"],c["a"],Object(v["b"])("inputValue"),l["a"],u["a"],d["a"]).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return u["a"].options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return Object(n["a"])(Object(n["a"])({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(h["a"])("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(o,this.setTextColor(this.color,e),this.$slots.default)}})},ce87:function(t,e,a){"use strict";var n=a("16b7"),r=a("f2e7"),s=a("58df"),o=a("d9bd");e["a"]=Object(s["a"])(n["a"],r["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o["c"])("v-hover should only contain a single element",this),t)):(Object(o["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},dd43:function(t,e,a){}}]);
//# sourceMappingURL=chunk-74f31f79.29a9c8b5.js.map