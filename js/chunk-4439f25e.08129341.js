(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4439f25e"],{"0fd9":function(t,i,e){"use strict";e("99af"),e("4160"),e("caad"),e("13d5"),e("4ec9"),e("b64b"),e("d3b7"),e("ac1f"),e("2532"),e("3ca3"),e("5319"),e("159b"),e("ddb0");var a=e("ade3"),s=e("5530"),c=(e("4b85"),e("2b0e")),o=e("d9f7"),r=e("80d2"),n=["sm","md","lg","xl"],l=["start","end","center"];function d(t,i){return n.reduce((function(e,a){return e[t+Object(r["G"])(a)]=i(),e}),{})}var v=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},u=d("align",(function(){return{type:String,default:null,validator:v}})),g=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},h=d("justify",(function(){return{type:String,default:null,validator:g}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},f=d("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(f)},b={align:"align",justify:"justify",alignContent:"align-content"};function x(t,i,e){var a=b[t];if(null!=e){if(i){var s=i.replace(t,"");a+="-".concat(s)}return a+="-".concat(e),a.toLowerCase()}}var _=new Map;i["a"]=c["a"].extend({name:"v-row",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},u),{},{justify:{type:String,default:null,validator:g}},h),{},{alignContent:{type:String,default:null,validator:p}},f),render:function(t,i){var e=i.props,s=i.data,c=i.children,r="";for(var n in e)r+=String(e[n]);var l=_.get(r);return l||function(){var t,i;for(i in l=[],m)m[i].forEach((function(t){var a=e[t],s=x(i,t,a);s&&l.push(s)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(a["a"])(t,"align-".concat(e.align),e.align),Object(a["a"])(t,"justify-".concat(e.justify),e.justify),Object(a["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),_.set(r,l)}(),t(e.tag,Object(o["a"])(s,{staticClass:"row",class:l}),c)}})},"169a":function(t,i,e){"use strict";e("7db0"),e("caad"),e("45fc"),e("a9e3"),e("2532"),e("498a");var a=e("5530"),s=e("2909"),c=e("ade3"),o=(e("368e"),e("480e")),r=e("4ad4"),n=e("b848"),l=e("75eb"),d=e("e707"),v=e("e4d3"),u=e("21be"),g=e("f2e7"),h=e("a293"),p=e("58df"),f=e("d9bd"),m=e("80d2"),b=Object(p["a"])(r["a"],n["a"],l["a"],d["a"],v["a"],u["a"],g["a"]);i["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(c["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(c["a"])(t,"v-dialog--active",this.isActive),Object(c["a"])(t,"v-dialog--persistent",this.persistent),Object(c["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(c["a"])(t,"v-dialog--scrollable",this.scrollable),Object(c["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(f["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var i=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(i)||this.overlay&&i&&!this.overlay.$el.contains(i))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===m["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var i=t.target;if(i&&![document,this.$refs.content].includes(i)&&!this.$refs.content.contains(i)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(i)}))){var e=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(s["a"])(e).find((function(t){return!t.hasAttribute("disabled")}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(a["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(a["a"])(Object(a["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,i,e){},"64ea":function(t,i,e){},8244:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-bottom-navigation",{attrs:{grow:"",fixed:"",color:"success"}},[e("v-btn",{on:{click:function(i){return t.$router.push("/user/home")}}},[e("span",[t._v("หน้าหลัก")]),e("v-icon",[t._v("mdi-view-dashboard-outline")])],1),e("v-btn",{on:{click:function(i){return t.$router.push("/user/profile")}}},[e("span",[t._v("ข้อมูลส่วนตัว")]),e("v-icon",[t._v("mdi-account-group")])],1),e("v-btn",{on:{click:function(i){return t.$router.push("/user/buffalo")}}},[e("span",[t._v("ข้อมูลควาย")]),e("v-icon",[t._v("mdi-cow")])],1),e("v-btn",{on:{click:function(i){return t.$router.push("/user/report")}}},[e("span",[t._v("รายงาน")]),e("v-icon",[t._v("mdi-clipboard-text")])],1)],1)],1)},s=[],c={data:function(){return{}}},o=c,r=e("2877"),n=e("6544"),l=e.n(n),d=e("b81c"),v=e("8336"),u=e("132d"),g=Object(r["a"])(o,a,s,!1,null,null,null);i["a"]=g.exports;l()(g,{VBottomNavigation:d["a"],VBtn:v["a"],VIcon:u["a"]})},9782:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{},[e("v-container",[e("v-row",{staticClass:"d-flex flex-row "},[e("v-btn",{attrs:{color:"white",depressed:"",fab:"",small:""},on:{click:function(i){return t.$router.go(-1)}}},[e("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")])],1),e("h2",[t._v("ข้อมูลควาย")])],1)],1),e("v-tabs",{staticClass:"pb-12",attrs:{grow:"",color:"green"}},[e("v-tab",[e("v-icon",{attrs:{left:""}},[t._v("mdi-file-document-outline")]),t._v(" พันธุ์ประวัติ ")],1),e("v-tab",[e("v-icon",{attrs:{left:""}},[t._v("mdi-chart-bell-curve-cumulative")]),t._v(" การเจริญเติบโต ")],1),e("v-tab-item",[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("h2",[t._v("รายละเอียดควาย")]),e("br"),e("center",[e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[t._v(" รูปภาพ ")]),e("v-divider",{staticClass:"mx-4"}),e("v-card-text",[e("v-flex",{attrs:{xs12:"",row:"",wrap:""}},[e("v-flex",{staticClass:"pr-2 pb-4",attrs:{xs6:""}},[e("v-card",{staticClass:"rounded-lg"},[e("v-img",{attrs:{src:"https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","aspect-ratio":"1.2"}}),e("v-list",{attrs:{"two-line":""}},[e("center",[e("h3",[t._v("ภาพด้านข้าง")])])],1),e("v-btn",{attrs:{depressed:"",block:"",color:"success"}},[t._v("อัพโหลด")])],1)],1),e("v-flex",{staticClass:"pl-2 pb-2",attrs:{xs6:""}},[e("v-card",{staticClass:"rounded-lg "},[e("v-img",{attrs:{src:"https://images.pexels.com/photos/2261770/pexels-photo-2261770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","aspect-ratio":"1.2"}}),e("v-list",{attrs:{"two-line":""}},[e("center",[e("h3",[t._v("ภาพด้านหลัง")])])],1),e("v-btn",{attrs:{depressed:"",block:"",color:"success"}},[t._v("อัพโหลด")])],1)],1)],1)],1)],1)],1),e("br"),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogcow,callback:function(i){t.dialogcow=i},expression:"dialogcow"}},[e("v-card",[e("v-card-title",[t._v(" ชื่อหรือหมายเลขควาย ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",label:"ชื่อหรือหมายเลขควาย",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogcow=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogcow=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogcow=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("ชื่อหรือหมายเลขควาย")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("ควายไทย")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialognid,callback:function(i){t.dialognid=i},expression:"dialognid"}},[e("v-card",[e("v-card-title",[t._v(" หมายเลขNID ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"หมายเลขNID",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialognid=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialognid=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialognid=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("หมายเลขNID")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("123")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogmicro,callback:function(i){t.dialogmicro=i},expression:"dialogmicro"}},[e("v-card",[e("v-card-title",[t._v(" หมายเลขไมโครชิป ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",label:"หมายเลขไมโครชิป",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogmicro=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogmicro=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogmicro=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("หมายเลขไมโครชิป")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("2222")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogdate,callback:function(i){t.dialogdate=i},expression:"dialogdate"}},[e("v-card",[e("v-card-title",[t._v(" วัน/เดือน/ปีเกิด ")]),e("v-card-text",[e("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on,s=i.attrs;return[e("v-text-field",t._g(t._b({staticClass:"rounded-lg",attrs:{outlined:"",color:"green",label:"วัน/เดือน/ปีเกิด","prepend-inner-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(i){t.date=i},expression:"date"}},"v-text-field",s,!1),a))]}}]),model:{value:t.menu,callback:function(i){t.menu=i},expression:"menu"}},[e("v-date-picker",{ref:"picker",attrs:{readonly:t.dialog1,color:"green",max:(new Date).toISOString().substr(0,10),min:"1950-01-01"},on:{change:t.save1},model:{value:t.date,callback:function(i){t.date=i},expression:"date"}})],1)],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogdate=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogdate=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogdate=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("วัน/เดือน/ปีเกิด")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("20/08/2020 ")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialoggender,callback:function(i){t.dialoggender=i},expression:"dialoggender"}},[e("v-card",[e("v-card-title",[t._v(" เพศ ")]),e("v-card-text",[e("v-select",{attrs:{color:"success",items:t.itemsgender,label:"เพศ"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialoggender=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialoggender=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialoggender=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("เพศ")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("ผู้")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogage,callback:function(i){t.dialogage=i},expression:"dialogage"}},[e("v-card",[e("v-card-title",[t._v(" อายุ ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"อายุ",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogage=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogage=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogage=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("อายุ")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("59")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogcolor,callback:function(i){t.dialogcolor=i},expression:"dialogcolor"}},[e("v-card",[e("v-card-title",[t._v(" สี ")]),e("v-card-text",[e("v-select",{attrs:{color:"success",items:t.itemscolor,label:"สี"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogcolor=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogcolor=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogcolor=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("สี")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("ดำ")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogimport,callback:function(i){t.dialogimport=i},expression:"dialogimport"}},[e("v-card",[e("v-card-title",[t._v(" แหล่งที่มา ")]),e("v-card-text",[e("v-select",{attrs:{color:"success",items:t.itemsimport,label:"แหล่งที่มา"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogimport=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogimport=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogimport=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("แหล่งที่มา")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("พ่อค้าคนกลาง")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogprice,callback:function(i){t.dialogprice=i},expression:"dialogprice"}},[e("v-card",[e("v-card-title",[t._v(" ราคา ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"ราคา",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogprice=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogprice=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogprice=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("ราคา")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("30,000")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogstatus,callback:function(i){t.dialogstatus=i},expression:"dialogstatus"}},[e("v-card",[e("v-card-title",[t._v(" สถานะ ")]),e("v-card-text",[e("v-select",{attrs:{color:"success",items:t.itemsstatus,label:"สถานะ"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogstatus=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogstatus=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogstatus=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("สถานะ")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("ไม่ท้อง")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialognnf,callback:function(i){t.dialognnf=i},expression:"dialognnf"}},[e("v-card",[e("v-card-title",[t._v(" ชื่อหรือหมายเลขพ่อ ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",label:"ชื่อหรือหมายเลขพ่อ",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialognnf=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialognnf=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialognnf=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("ชื่อหรือหมายเลขพ่อ")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("พ่อเปี้ย")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialognidf,callback:function(i){t.dialognidf=i},expression:"dialognidf"}},[e("v-card",[e("v-card-title",[t._v(" หมายเลขNIDพ่อ ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"หมายเลขNIDพ่อ",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialognidf=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialognidf=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialognidf=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("หมายเลขNIDพ่อ")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("1234")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogmicrof,callback:function(i){t.dialogmicrof=i},expression:"dialogmicrof"}},[e("v-card",[e("v-card-title",[t._v(" หมายเลขไมโครซิบพ่อ ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"หมายเลขไมโครซิบพ่อ",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogmicrof=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogmicrof=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogmicrof=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("หมายเลขไมโครซิบพ่อ")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("1234")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialognnm,callback:function(i){t.dialognnm=i},expression:"dialognnm"}},[e("v-card",[e("v-card-title",[t._v(" ชื่อหรือหมายเลขแม่ ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",label:"ชื่อหรือหมายเลขแม่",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialognnm=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialognnm=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialognnm=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("ชื่อหรือหมายเลขแม่")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("แม่เปี้ย")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialognidm,callback:function(i){t.dialognidm=i},expression:"dialognidm"}},[e("v-card",[e("v-card-title",[t._v(" หมายเลขNIDแม่ ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"หมายเลขNIDแม่",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialognidm=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialognidm=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialognidm=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("หมายเลขNIDแม่")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("1234")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogmicrom,callback:function(i){t.dialogmicrom=i},expression:"dialogmicrom"}},[e("v-card",[e("v-card-title",[t._v(" หมายเลขไมโครซิบแม่ ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"หมายเลขไมโครซิบแม่",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogmicrom=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogmicrom=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogmicrom=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("หมายเลขไมโครซิบแม่")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("1234")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogkg,callback:function(i){t.dialogkg=i},expression:"dialogkg"}},[e("v-card",[e("v-card-title",[t._v(" น้ำหนัก(กิโลกรัม) ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"น้ำหนัก(กิโลกรัม)",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogkg=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogkg=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogmicrom=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("น้ำหนัก(กิโลกรัม)")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("200")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogweight,callback:function(i){t.dialogweight=i},expression:"dialogweight"}},[e("v-card",[e("v-card-title",[t._v(" ความกว้างรอบอก(เซนติเมตร) ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"ความกว้างรอบอก(เซนติเมตร)",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogweight=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogweight=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogweight=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("ความกว้างรอบอก(เซนติเมตร)")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("200")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogbodyweight,callback:function(i){t.dialogbodyweight=i},expression:"dialogbodyweight"}},[e("v-card",[e("v-card-title",[t._v(" ความยาวรอบลำตัว(เซนติเมตร) ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"ความยาวรอบลำตัว(เซนติเมตร)",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogbodyweight=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogbodyweight=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogbodyweight=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("ความยาวรอบลำตัว(เซนติเมตร)")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("200")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogheight,callback:function(i){t.dialogheight=i},expression:"dialogheight"}},[e("v-card",[e("v-card-title",[t._v(" ความสูง(เซนติเมตร) ")]),e("v-card-text",[e("v-text-field",{attrs:{color:"success",type:"number",label:"ความสูง(เซนติเมตร)",id:"id"}})],1),e("v-card-actions",[e("v-btn",{staticClass:"rounded-lg",attrs:{color:"error width1",depressed:""},on:{click:function(i){t.dialogheight=!1}}},[t._v(" ยกเลิก ")]),e("v-btn",{staticClass:"rounded-lg",attrs:{color:"success width1",depressed:""},on:{click:function(i){t.dialogheight=!1}}},[t._v(" ตกลง ")])],1)],1)],1),e("v-card",{staticClass:"pa-3",on:{click:function(i){t.dialogheight=!0}}},[e("v-row",[e("h4",{staticClass:"pl-4"},[t._v("ความสูง(เซนติเมตร)")]),e("v-spacer"),e("h4",{staticClass:"pr-4"},[t._v("200")]),e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("br"),e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[t._v(" พันธุ์ประวัติ ")]),e("v-divider",{staticClass:"mx-4"}),e("v-card-text",[e("v-card-title",{staticClass:"black--text white darken-4"},[e("v-icon",{attrs:{large:"",color:"error"},on:{click:function(i){return t.$router.go()}}},[t._v("mdi-file-pdf-outline")]),e("v-divider",{staticClass:"mx-1",attrs:{vertical:"",inset:"",dark:""}}),e("h5",{on:{click:function(i){return t.$router.go()}}},[t._v("ใบพันธุ์ประวัติอ้างอิง")]),e("v-spacer"),e("v-btn",{staticClass:"white--text",attrs:{loading:t.loading3,disabled:t.loading3,color:"indigo",fab:"",small:""},on:{click:function(i){t.loader="loading3"}}},[e("v-icon",[t._v("mdi-cloud-upload")])],1)],1),e("v-card-title",{staticClass:"black--text white darken-4"},[e("v-icon",{attrs:{large:"",color:"error"},on:{click:function(i){return t.$router.go()}}},[t._v("mdi-file-pdf-outline")]),e("v-divider",{staticClass:"mx-1",attrs:{vertical:"",inset:"",dark:""}}),e("h5",{on:{click:function(i){return t.$router.go()}}},[t._v("ใบพันธุ์ประวัติทางการ")]),e("v-spacer"),e("v-btn",{staticClass:"white--text",attrs:{loading:t.loading3,disabled:t.loading3,color:"indigo",fab:"",small:""},on:{click:function(i){t.loader="loading3"}}},[e("v-icon",[t._v("mdi-cloud-upload")])],1)],1)],1)],1),e("br"),e("center",{staticClass:"mb-2"},[e("v-btn",{staticClass:"rounded-lg",attrs:{large:"",disabled:"",color:"success",block:""}},[t._v("บันทึก")])],1)],1)],1)],1),e("v-tab-item",{},[e("v-container",{attrs:{"grid-list-xs":""}},[e("v-btn",{staticClass:"rounded-lg",attrs:{depressed:"",large:"",block:"",color:"green",dark:""},on:{click:function(i){return t.$router.push("/user/buffaloage")}}},[e("h3",[t._v("เพิ่มข้อมูลอายุ")])]),e("v-card",{staticClass:"elevation-5 rounded-lg pa-2 mt-4"},[e("v-card-title",{attrs:{"primary-title":""}},[t._v(" อายุ 240 วัน ")]),e("v-divider",{staticClass:"mx-4"}),e("v-card-text",[t._l(t.desserts1,(function(i){return e("div",{key:i.name},[e("v-text-field",{staticClass:"rounded-lg",attrs:{color:"green",readonly:t.dialog,name:"name",label:i.describe1,id:"id"},model:{value:i.calories1,callback:function(e){t.$set(i,"calories1",e)},expression:"item.calories1"}})],1)})),e("center",[e("v-flex",{attrs:{xs12:"",row:"",wrap:""}},[e("v-flex",{attrs:{xs6:""}},[e("v-btn",{staticClass:"rounded-l-lg width mr-2",attrs:{depressed:"",large:"",dark:"",color:"warning"},on:{click:function(i){t.dialog=!1}}},[e("v-icon",[t._v("mdi-pencil")]),t._v("แก้ไข ")],1)],1),e("v-flex",{attrs:{xs6:""}},[e("v-btn",{staticClass:"rounded-r-lg width ml-2",attrs:{depressed:"",large:"",dark:"",color:"red"}},[e("v-icon",[t._v("mdi-delete")]),t._v("ลบ ")],1)],1)],1)],1)],2)],1),e("v-card",{staticClass:"elevation-5 rounded-lg pa-2 mt-4"},[e("v-card-title",{attrs:{"primary-title":""}},[t._v(" อายุ 400 วัน ")]),e("v-divider",{staticClass:"mx-4"}),e("v-card-text",[t._l(t.desserts1,(function(i){return e("div",{key:i.name},[e("v-text-field",{staticClass:"rounded-lg",attrs:{color:"green",readonly:t.dialog,name:"name",label:i.describe1,id:"id"},model:{value:i.calories1,callback:function(e){t.$set(i,"calories1",e)},expression:"item.calories1"}})],1)})),e("center",[e("v-flex",{attrs:{xs12:"",row:"",wrap:""}},[e("v-flex",{attrs:{xs6:""}},[e("v-btn",{staticClass:"rounded-l-lg width mr-2",attrs:{depressed:"",large:"",dark:"",color:"warning"},on:{click:function(i){t.dialog=!1}}},[e("v-icon",[t._v("mdi-pencil")]),t._v("แก้ไข ")],1)],1),e("v-flex",{attrs:{xs6:""}},[e("v-btn",{staticClass:"rounded-r-lg width ml-2",attrs:{depressed:"",large:"",dark:"",color:"red"}},[e("v-icon",[t._v("mdi-delete")]),t._v("ลบ ")],1)],1)],1)],1)],2)],1),e("v-card",{staticClass:"elevation-5 rounded-lg pa-2 mt-4"},[e("v-card-title",{attrs:{"primary-title":""}},[t._v(" อายุ 600 วัน ")]),e("v-divider",{staticClass:"mx-4"}),e("v-card-text",[t._l(t.desserts1,(function(i){return e("div",{key:i.name},[e("v-text-field",{staticClass:"rounded-lg",attrs:{color:"green",readonly:t.dialog,name:"name",label:i.describe1,id:"id"},model:{value:i.calories1,callback:function(e){t.$set(i,"calories1",e)},expression:"item.calories1"}})],1)})),e("center",[e("v-flex",{attrs:{xs12:"",row:"",wrap:""}},[e("v-flex",{attrs:{xs6:""}},[e("v-btn",{staticClass:"rounded-l-lg width mr-2",attrs:{depressed:"",large:"",dark:"",color:"warning"},on:{click:function(i){t.dialog=!1}}},[e("v-icon",[t._v("mdi-pencil")]),t._v("แก้ไข ")],1)],1),e("v-flex",{attrs:{xs6:""}},[e("v-btn",{staticClass:"rounded-r-lg width ml-2",attrs:{depressed:"",large:"",dark:"",color:"red"}},[e("v-icon",[t._v("mdi-delete")]),t._v("ลบ ")],1)],1)],1)],1)],2)],1)],1)],1)],1),e("buttomnavuser")],1)},s=[],c=(e("96cf"),e("1da1")),o=e("ade3"),r=e("8244"),n={components:{buttomnavuser:r["a"]},data:function(){var t;return t={dialogcow:!1,dialognid:!1,dialogmicro:!1,dialogdate:!1,dialoggender:!1,dialogage:!1,dialogcolor:!1,dialogimport:!1,dialogprice:!1,dialogstatus:!1,dialognnf:!1,dialognidf:!1,dialogmicrof:!1,dialognnm:!1,dialognidm:!1,dialogmicrom:!1,dialogkg:!1,dialogweight:!1,dialogbodyweight:!1,dialogheight:!1,itemsgender:["ผู้","เมีย"],itemscolor:["ดำ","น้ำตาล"],itemsimport:["พ่อค้าคนกลาง","ตลาด","เพาะพันธุ์"],itemsstatus:["ท้อง","ไม่ท้อง"],loader:null,loading:!1,loading2:!1,loading3:!1,loading4:!1,loading5:!1,length:2,onboarding:0,items:["มีชีวิต","ไม่มีชีวิต"],dialog:!0,dialog1:!0,date:null,menu:!1},Object(o["a"])(t,"items",[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]),Object(o["a"])(t,"desserts",[{describe:"หมายเลขบัตรประชาชนเกษตรกร",calories:"3560700337836"},{describe:"ชื่อหรือหมายเลขควาย",calories:"เปีย"},{describe:"หมายเลข NID",calories:" "},{describe:"หมายเลขไมโครชิป",calories:" "},{describe:"อายุ (..ปี..เดือน) ",calories:"4ปี 0เดือน"},{describe:"ราคา",calories:"50000"},{describe:"ชื่อหรือหมายเลขพ่อ",calories:" "},{describe:"หมายเลข NID พ่อ",calories:" "},{describe:"หมายเลขไมโครชิปพ่อ",calories:" "},{describe:"ชื่อหรือหมายเลขแม่",calories:" "},{describe:"หมายเลข NID แม่",calories:" "},{describe:"หมายเลขไมโครชิปแม่",calories:" "},{describe:"น้ำหนัก (กิโลกรัม)",calories:"400"},{describe:"ความกว้างรอบอก (เซนติเมตร)",calories:"224"},{describe:"ความยาวลำตัว (เซนติเมตร)",calories:"128"},{describe:"ความสูง (เซนติเมตร)",calories:"132"}]),Object(o["a"])(t,"desserts1",[{describe1:"น้ำหนัก (กิโลกรัม)",calories1:"97 กิโลกรัม"},{describe1:"ความกว้างรอบอก (เซนติเมตร)",calories1:"56 เซนติเมตร"},{describe1:"ความยาวลำตัว (เซนติเมตร)",calories1:"102 เซนติเมตร"},{describe1:"ความสูง (เซนติเมตร)",calories1:"78 เซนติเมตร"}]),t},watch:{menu:function(t){var i=this;t&&setTimeout((function(){return i.$refs.picker.activePicker="YEAR"}))},loader:function(){var t=this,i=this.loader;this[i]=!this[i],setTimeout((function(){return t[i]=!1}),3e3),this.loader=null}},methods:{load:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function i(){return t.apply(this,arguments)}return i}(),save1:function(t){this.$refs.menu.save(t)},next:function(){this.onboarding=this.onboarding+1===this.length?0:this.onboarding+1},prev:function(){this.onboarding=this.onboarding-1<0?this.length-1:this.onboarding-1}}},l=n,d=(e("ed1c"),e("2877")),v=e("6544"),u=e.n(v),g=e("8336"),h=e("b0af"),p=e("99d9"),f=e("a523"),m=e("2e4b"),b=e("169a"),x=e("ce7e"),_=e("0e8f"),w=e("132d"),C=e("adda"),k=e("8860"),y=e("e449"),j=e("0fd9"),O=e("b974"),$=e("2fa4"),I=e("71a3"),S=e("c671"),V=e("fe57"),A=e("8654"),D=Object(d["a"])(l,a,s,!1,null,null,null);i["default"]=D.exports;u()(D,{VBtn:g["a"],VCard:h["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VContainer:f["a"],VDatePicker:m["a"],VDialog:b["a"],VDivider:x["a"],VFlex:_["a"],VIcon:w["a"],VImg:C["a"],VList:k["a"],VMenu:y["a"],VRow:j["a"],VSelect:O["a"],VSpacer:$["a"],VTab:I["a"],VTabItem:S["a"],VTabs:V["a"],VTextField:A["a"]})},ed1c:function(t,i,e){"use strict";var a=e("64ea"),s=e.n(a);s.a}}]);
//# sourceMappingURL=chunk-4439f25e.08129341.js.map