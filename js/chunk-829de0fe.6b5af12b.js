(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-829de0fe"],{"30fc":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",{staticClass:"bg"},[r("v-container",[r("v-btn",{attrs:{fab:"",small:""},on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")])],1),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10",sm:"8",md:"4"}},[r("div",{staticClass:"text-center"},[r("h2",{staticClass:"fcw"},[t._v("เปลี่ยนรหัสผ่าน")])]),r("br"),r("div",{attrs:{color:"white"}},[r("hr"),r("br")]),r("v-card",{staticClass:"pa-5 mt-4"},[r("v-text-field",{attrs:{name:"name",color:"green",type:"number",label:"เลขบัตรประชาชน",id:"id"}}),r("v-text-field",{attrs:{name:"name",color:"green",type:"number",label:"เบอร์โทรศัพท์",id:"id"}}),r("br"),r("v-btn",{staticClass:"width rounded-lg",attrs:{medium:"",dark:"",large:"",color:"green"},on:{click:function(e){return t.$router.push("/")}}},[t._v("ยืนยัน")])],1)],1)],1)],1)],1)},a=[],s=(r("96cf"),r("1da1")),i={name:"Root",components:{},props:{},data:function(){return{txt:"Hello World"}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,r){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r();case 1:case"end":return t.stop()}}),t)})))()},computed:{},methods:{load:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},o=i,c=(r("e2af"),r("2877")),l=r("6544"),u=r.n(l),d=r("8336"),f=r("b0af"),h=r("62ad"),v=r("a523"),m=r("132d"),p=r("f6c4"),b=r("0fd9"),g=r("8654"),w=Object(c["a"])(o,n,a,!1,null,"2945b2be",null);e["default"]=w.exports;u()(w,{VBtn:d["a"],VCard:f["a"],VCol:h["a"],VContainer:v["a"],VIcon:m["a"],VMain:p["a"],VRow:b["a"],VTextField:g["a"]})},"49d7":function(t,e,r){},"615b":function(t,e,r){},b0af:function(t,e,r){"use strict";r("0481"),r("4069"),r("a9e3");var n=r("5530"),a=(r("615b"),r("10d2")),s=r("297c"),i=r("1c87"),o=r("58df");e["a"]=Object(o["a"])(s["a"],i["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},i["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},e2af:function(t,e,r){"use strict";var n=r("49d7"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-829de0fe.6b5af12b.js.map