(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8d82146"],{"0057":function(t,e,n){},"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var a=n("ade3"),i=n("5530"),o=(n("4b85"),n("2b0e")),r=n("d9f7"),s=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,a){return n[t+Object(s["G"])(a)]=e(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},v=u("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},f=u("justify",(function(){return{type:String,default:null,validator:h}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:p}})),b={align:Object.keys(v),justify:Object.keys(f),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var a=m[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var y=new Map;e["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},v),{},{justify:{type:String,default:null,validator:h}},f),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,i=e.data,o=e.children,s="";for(var c in n)s+=String(n[c]);var l=y.get(s);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var a=n[t],i=x(e,t,a);i&&l.push(i)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),y.set(s,l)}(),t(n.tag,Object(r["a"])(i,{staticClass:"row",class:l}),o)}})},"2e1a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("v-container",[n("v-row",{staticClass:"d-flex flex-row "},[n("v-btn",{attrs:{depressed:"",fab:"",small:""},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")])],1),n("h2",[t._v("รายงานเชิงแผนที่")])],1)],1),n("v-container",[n("v-select",{staticClass:"rounded-lg mt-2 mb-2",attrs:{solo:"",outlined:"",color:"success",items:t.province,label:"กรุณาเลือกจังหวัด","hide-details":""}}),n("v-select",{staticClass:"rounded-lg mb-2",attrs:{solo:"",outlined:"",color:"success",items:t.district,label:"กรุณาเลือกอำเภอ","hide-details":""}}),n("v-select",{staticClass:"rounded-lg mb-2",attrs:{solo:"",outlined:"",color:"success",items:t.place,label:"กรุณาเลือกตำบล","hide-details":""}})],1),n("v-container",{staticClass:"mb-15"},[n("v-card",{staticClass:"rounded-lg elevation-5",attrs:{flat:"",height:"300px",width:"400px",img:"https://cdn.vuetifyjs.com/images/toolbar/map.jpg"}})],1),n("buttomnav")],1)},i=[],o=(n("96cf"),n("1da1")),r=n("722a"),s={name:"Root",components:{buttomnav:r["a"]},props:{},data:function(){return{province:[{text:"พะเยา"},{text:"เชียงราย"},{text:"แพร่"},{text:"น่าน"}],district:[{text:"พะเยา"},{text:"เชียงราย"},{text:"แพร่"},{text:"น่าน"}],place:[{text:"ปัว"},{text:"แงง"},{text:"สถาน"},{text:"ศิลาแลง"},{text:"ศิลาเพชร"},{text:"อวน"},{text:"ไชยวัฒนา"},{text:"เจดีย์ชัย"},{text:"ภูคา"},{text:"สกาด"},{text:"ป่ากลาง"},{text:"\tวรนคร"}],farm:[{text:"เชียงกลาง"},{text:"ท่าวังผา"},{text:"ทุ่งช้าง"},{text:"นาน้อย"},{text:"บ่อเกลือ"},{text:"นาน้อย"},{text:"บ้านหลวง"},{text:"ปัว"},{text:"ภูเพียง"},{text:"แม่จริม"},{text:"เมืองน่าน"},{text:"เวียงสา"},{text:"สองแคว"},{text:"สันติสุข"}]}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,n){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n();case 1:case"end":return t.stop()}}),t)})))()},computed:{},methods:{load:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},c=s,l=(n("7ac7"),n("2877")),u=n("6544"),d=n.n(u),v=n("8336"),h=n("b0af"),f=n("a523"),p=n("132d"),g=n("0fd9"),b=n("b974"),m=Object(l["a"])(c,a,i,!1,null,"b1a46312",null);e["default"]=m.exports;d()(m,{VBtn:v["a"],VCard:h["a"],VContainer:f["a"],VIcon:p["a"],VRow:g["a"],VSelect:b["a"]})},"615b":function(t,e,n){},"722a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-bottom-navigation",{attrs:{grow:"",fixed:"",color:"success"}},[n("v-btn",{on:{click:function(e){return t.$router.push("/admin/home")}}},[n("span",[t._v("หน้าหลัก")]),n("v-icon",[t._v("mdi-view-dashboard-outline")])],1),n("v-btn",{on:{click:function(e){return t.$router.push("/admin/userprofile")}}},[n("span",[t._v("เกษตกร")]),n("v-icon",[t._v("mdi-account-group")])],1),n("v-btn",{on:{click:function(e){return t.$router.push("/admin/adminedit")}}},[n("span",[t._v("ผู้ดูแลระบบ")]),n("v-icon",[t._v("mdi-account-cog")])],1),n("v-btn",{on:{click:function(e){return t.$router.push("/admin/report")}}},[n("span",[t._v("รายงาน")]),n("v-icon",[t._v("mdi-clipboard-text")])],1)],1)],1)},i=[],o={data:function(){return{}}},r=o,s=n("2877"),c=n("6544"),l=n.n(c),u=n("b81c"),d=n("8336"),v=n("132d"),h=Object(s["a"])(r,a,i,!1,null,null,null);e["a"]=h.exports;l()(h,{VBottomNavigation:u["a"],VBtn:d["a"],VIcon:v["a"]})},"7ac7":function(t,e,n){"use strict";var a=n("0057"),i=n.n(a);i.a},b0af:function(t,e,n){"use strict";n("0481"),n("4069"),n("a9e3");var a=n("5530"),i=(n("615b"),n("10d2")),o=n("297c"),r=n("1c87"),s=n("58df");e["a"]=Object(s["a"])(o["a"],r["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},b81c:function(t,e,n){"use strict";n("a9e3"),n("c7cd");var a=n("5530"),i=(n("dd43"),n("3a66")),o=n("604c"),r=o["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o["a"].options.computed.classes.call(this)}},methods:{genData:o["a"].options.methods.genData}}),s=n("a9ad"),c=n("24b2"),l=n("a452"),u=n("277e"),d=n("7560"),v=n("f2e7"),h=n("58df"),f=n("d9bd");e["a"]=Object(h["a"])(Object(i["a"])("bottom",["height","inputValue"]),s["a"],c["a"],Object(v["b"])("inputValue"),l["a"],u["a"],d["a"]).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return u["a"].options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return Object(a["a"])(Object(a["a"])({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(f["a"])("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(r,this.setTextColor(this.color,e),this.$slots.default)}})},dd43:function(t,e,n){}}]);
//# sourceMappingURL=chunk-b8d82146.86a0e168.js.map