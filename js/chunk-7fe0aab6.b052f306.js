(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fe0aab6"],{"0e8f":function(t,e,a){"use strict";a("20f6");var i=a("e8f2");e["a"]=Object(i["a"])("flex")},"17b3":function(t,e,a){},"2ad9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("NavigationAdmin",{attrs:{name:"ผู้ดูแลระบบ"}}),a("v-container",{attrs:{"grid-list-xs":""}},[a("v-container",[a("v-card",{staticClass:"rounded-lg"},[a("v-text-field",{staticClass:"widths rounded-lg pa-3",attrs:{color:"success",clearable:"",flat:"","hide-details":"","append-icon":"mdi-magnify",label:"ค้นหา",outlined:"","single-line":""}}),a("v-btn",{staticClass:"rounded-lg",attrs:{color:"green",large:"",block:"",dark:""},on:{click:function(e){return t.$router.push("/admin/addadmin")}}},[a("v-icon",[t._v("mdi-plus")]),a("h3",[t._v("เพิ่มผู้ดูแลระบบ")])],1)],1)],1),a("v-flex",{attrs:{xs12:"",row:"",wrap:""}},t._l(6,(function(e){return a("v-flex",{attrs:{xs6:""}},[a("v-card",{staticClass:"rounded-lg pa-3 ml-6 mb-4"},[a("div",{staticClass:"d-flex flex-no-wrap mb-2"},[a("v-spacer"),a("v-btn",{attrs:{color:"red",fab:"",depressed:"","x-small":"",dark:""},on:{click:function(e){t.dialog1=!1}}},[a("v-icon",[t._v("mdi-delete")])],1)],1),a("v-img",{attrs:{src:"https://cdn-th.tunwalai.net/files/member/139588/1601081451-member.jpg","aspect-ratio":"2"}}),a("h3",{staticClass:"pt-1 font-weight-regular text--primary"},[t._v("ชื่อ-นามสกุล : นายแดง แดงแดง ")]),a("h3",{staticClass:"pt-1 font-weight-light text--secondary"},[t._v("ชื่อผู้ใช้งาน : dang1234 ")]),a("h3",{staticClass:"pt-1 font-weight-light text--secondary"},[t._v("อีเมล : dang@gmail.com ")]),a("br"),a("center",[a("v-btn",{staticClass:"rounded-lg width",attrs:{color:"warning",block:""},on:{click:function(e){return t.$router.push("/admin/editadmin")}}},[a("v-icon",[t._v("mdi-pencil")]),t._v("แก้ไข")],1),a("v-divider",{staticClass:"pa-1"}),a("v-btn",{staticClass:"rounded-lg width",attrs:{color:"black",dark:"",block:""},on:{click:function(e){return t.$router.push("/admin/resetpasswordadmin")}}},[a("v-icon",[t._v("mdi-lock")]),t._v("เปลี่ยนรหัสผ่าน")],1)],1)],1)],1)})),1),a("div",{staticClass:"text-center pt-4"},[a("v-pagination",{attrs:{color:"green",length:4,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("br"),a("br")],1),a("buttomnav")],1)},n=[],r=(a("96cf"),a("1da1")),s=a("722a"),o={name:"checkUser",components:{buttomnav:s["a"]},props:{},data:function(){return{page:1,dialog:!1,value:[423,446,675,510,590,610,760]}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,a){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a();case 1:case"end":return t.stop()}}),t)})))()},computed:{},methods:{load:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},c=o,l=(a("82ac"),a("2877")),u=a("6544"),d=a.n(u),h=a("8336"),v=a("b0af"),p=a("a523"),g=a("ce7e"),f=a("0e8f"),m=a("132d"),b=a("adda"),y=a("891e"),x=a("2fa4"),k=a("8654"),w=Object(l["a"])(c,i,n,!1,null,"56a4764e",null);e["default"]=w.exports;d()(w,{VBtn:h["a"],VCard:v["a"],VContainer:p["a"],VDivider:g["a"],VFlex:f["a"],VIcon:m["a"],VImg:b["a"],VPagination:y["a"],VSpacer:x["a"],VTextField:k["a"]})},"4b85":function(t,e,a){},"615b":function(t,e,a){},"722a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-bottom-navigation",{attrs:{grow:"",fixed:"",color:"success"}},[a("v-btn",{on:{click:function(e){return t.$router.push("/admin/home")}}},[a("span",[t._v("หน้าหลัก")]),a("v-icon",[t._v("mdi-view-dashboard-outline")])],1),a("v-btn",{on:{click:function(e){return t.$router.push("/admin/userprofile")}}},[a("span",[t._v("เกษตกร")]),a("v-icon",[t._v("mdi-account-group")])],1),a("v-btn",{on:{click:function(e){return t.$router.push("/admin/adminedit")}}},[a("span",[t._v("ผู้ดูแลระบบ")]),a("v-icon",[t._v("mdi-account-cog")])],1),a("v-btn",{on:{click:function(e){return t.$router.push("/admin/report")}}},[a("span",[t._v("รายงาน")]),a("v-icon",[t._v("mdi-clipboard-text")])],1)],1)],1)},n=[],r={data:function(){return{}}},s=r,o=a("2877"),c=a("6544"),l=a.n(c),u=a("b81c"),d=a("8336"),h=a("132d"),v=Object(o["a"])(s,i,n,!1,null,null,null);e["a"]=v.exports;l()(v,{VBottomNavigation:u["a"],VBtn:d["a"],VIcon:h["a"]})},"82ac":function(t,e,a){"use strict";var i=a("8c6d"),n=a.n(i);n.a},"891e":function(t,e,a){"use strict";a("99af"),a("d81d"),a("a9e3"),a("d3b7"),a("25f0");var i=a("2909"),n=a("5530"),r=(a("17b3"),a("9d26")),s=a("dc22"),o=a("a9ad"),c=a("de2c"),l=a("7560"),u=a("58df");e["a"]=Object(u["a"])(o["a"],Object(c["a"])({onVisible:["init"]}),l["a"]).extend({name:"v-pagination",directives:{Resize:s["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,n=Math.floor(e/2),r=this.length-n+1+a;if(this.value>n&&this.value<r){var s=this.value-n+2,o=this.value+n-2-a;return[1,"..."].concat(Object(i["a"])(this.range(s,o)),["...",this.length])}if(this.value===n){var c=this.value+n-1-a;return[].concat(Object(i["a"])(this.range(1,c)),["...",this.length])}if(this.value===r){var l=this.value-n+1;return[1,"..."].concat(Object(i["a"])(this.range(l,this.length)))}return[].concat(Object(i["a"])(this.range(1,n)),["..."],Object(i["a"])(this.range(r,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var i=t;i<=e;i++)a.push(i);return a},genIcon:function(t,e,a,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{type:"button","aria-label":n},on:a?{}:{click:i}},[t(r["a"],[e])])])},genItem:function(t,e){var a=this,i=e===this.value&&(this.color||"primary"),n=e===this.value,r=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(r,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,i){return t("li",{key:i},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},"8c6d":function(t,e,a){},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85");var i=a("e8f2"),n=a("d9f7");e["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,r=e.data,s=e.children,o=r.attrs;return o&&(r.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),t(i.tag,Object(n["a"])(r,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),s)}})},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var i=a("5530"),n=(a("615b"),a("10d2")),r=a("297c"),s=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(r["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},b81c:function(t,e,a){"use strict";a("a9e3"),a("c7cd");var i=a("5530"),n=(a("dd43"),a("3a66")),r=a("604c"),s=r["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r["a"].options.computed.classes.call(this)}},methods:{genData:r["a"].options.methods.genData}}),o=a("a9ad"),c=a("24b2"),l=a("a452"),u=a("277e"),d=a("7560"),h=a("f2e7"),v=a("58df"),p=a("d9bd");e["a"]=Object(v["a"])(Object(n["a"])("bottom",["height","inputValue"]),o["a"],c["a"],Object(h["b"])("inputValue"),l["a"],u["a"],d["a"]).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return u["a"].options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return Object(i["a"])(Object(i["a"])({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(p["a"])("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(s,this.setTextColor(this.color,e),this.$slots.default)}})},dd43:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7fe0aab6.b052f306.js.map