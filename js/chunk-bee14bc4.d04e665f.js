(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bee14bc4"],{"0fd9":function(t,a,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var e=n("ade3"),r=n("5530"),o=(n("4b85"),n("2b0e")),i=n("d9f7"),c=n("80d2"),s=["sm","md","lg","xl"],l=["start","end","center"];function u(t,a){return s.reduce((function(n,e){return n[t+Object(c["G"])(e)]=a(),n}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},v=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},f=u("justify",(function(){return{type:String,default:null,validator:p}})),b=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:b}})),m={align:Object.keys(v),justify:Object.keys(f),alignContent:Object.keys(g)},h={align:"align",justify:"justify",alignContent:"align-content"};function w(t,a,n){var e=h[t];if(null!=n){if(a){var r=a.replace(t,"");e+="-".concat(r)}return e+="-".concat(n),e.toLowerCase()}}var x=new Map;a["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},v),{},{justify:{type:String,default:null,validator:p}},f),{},{alignContent:{type:String,default:null,validator:b}},g),render:function(t,a){var n=a.props,r=a.data,o=a.children,c="";for(var s in n)c+=String(n[s]);var l=x.get(c);return l||function(){var t,a;for(a in l=[],m)m[a].forEach((function(t){var e=n[t],r=w(a,t,e);r&&l.push(r)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(e["a"])(t,"align-".concat(n.align),n.align),Object(e["a"])(t,"justify-".concat(n.justify),n.justify),Object(e["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(c,l)}(),t(n.tag,Object(i["a"])(r,{staticClass:"row",class:l}),o)}})},2825:function(t,a,n){},"2b73":function(t,a,n){"use strict";var e=n("2825"),r=n.n(e);r.a},"722a":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("v-bottom-navigation",{attrs:{grow:"",fixed:"",color:"success"}},[n("v-btn",{on:{click:function(a){return t.$router.push("/admin/home")}}},[n("span",[t._v("หน้าหลัก")]),n("v-icon",[t._v("mdi-view-dashboard-outline")])],1),n("v-btn",{on:{click:function(a){return t.$router.push("/admin/userprofile")}}},[n("span",[t._v("เกษตกร")]),n("v-icon",[t._v("mdi-account-group")])],1),n("v-btn",{on:{click:function(a){return t.$router.push("/admin/adminedit")}}},[n("span",[t._v("ผู้ดูแลระบบ")]),n("v-icon",[t._v("mdi-account-cog")])],1),n("v-btn",{on:{click:function(a){return t.$router.push("/admin/report")}}},[n("span",[t._v("รายงาน")]),n("v-icon",[t._v("mdi-clipboard-text")])],1)],1)],1)},r=[],o={data:function(){return{}}},i=o,c=n("2877"),s=n("6544"),l=n.n(s),u=n("b81c"),d=n("8336"),v=n("132d"),p=Object(c["a"])(i,e,r,!1,null,null,null);a["a"]=p.exports;l()(p,{VBottomNavigation:u["a"],VBtn:d["a"],VIcon:v["a"]})},d083:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"bg"},[n("v-container",[n("v-row",{staticClass:"d-flex flex-row "},[n("v-btn",{attrs:{depressed:"",small:"",fab:""},on:{click:function(a){return t.$router.push("/admin/userprofiledetail")}}},[n("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")])],1),n("h2",[t._v("ข้อมูลควาย")])],1)],1),n("div",[n("v-container",[n("v-container",[n("v-card",{staticClass:"rounded-lg "},[n("div",[n("v-select",{staticClass:"rounded-lg pa-2",attrs:{block:"",large:"",color:"green",items:t.items,label:"มีชีวิต,ไม่มีชีวิต",solo:""}})],1),n("v-radio-group",{staticClass:"pa-2",attrs:{mandatory:!1,row:t.row},model:{value:t.radios,callback:function(a){t.radios=a},expression:"radios"}},[n("v-layout",{class:"d-flex justify-space-around",attrs:{row:"",wrap:""}},[n("v-radio",{attrs:{color:"success",label:"ทั้งหมด",value:"ทั้งหมด"}}),n("v-radio",{attrs:{color:"success",label:"ตัวผู้",value:"ตัวผู้"}}),n("v-radio",{attrs:{color:"success",label:"ตัวเมีย",value:"ตัวเมีย"}})],1),n("center",[n("p",{staticClass:"d-block pa-2 deep-purple accent-4 white--text rounded-lg"},[t._v(t._s(t.radios||"null"))])])],1),n("v-btn",{staticClass:"rounded-lg deep-purple accent-4",attrs:{color:"green",block:"",dark:""},on:{click:function(a){return t.$router.push("/admin/buffaloadd")}}},[n("h3",[t._v("เพิ่มควาย")])])],1)],1),n("v-flex",{attrs:{xs12:"",row:"",wrap:""}},t._l(6,(function(a){return n("v-flex",{attrs:{xs6:""}},[n("v-card",{staticClass:"rounded-lg pa-3 ml-6 mb-4"},[n("div",{staticClass:"d-flex flex-no-wrap mb-2"},[n("v-spacer"),n("v-btn",{attrs:{color:"red",fab:"",depressed:"","x-small":"",dark:""},on:{click:function(a){t.dialog1=!1}}},[n("v-icon",[t._v("mdi-delete")])],1)],1),n("v-img",{attrs:{src:"https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","aspect-ratio":"2"}}),n("h3",{staticClass:"pt-2"},[t._v("ชื่อควาย : พ่อเปี้ย")]),n("h3",{staticClass:"pt-1 font-weight-light"},[t._v("เบอร์หู : 123")]),n("h3",{staticClass:"pt-1 font-weight-light"},[t._v("อายุ : 4ปี")]),n("h3",{staticClass:"pt-1 font-weight-light"},[t._v("เพศ : ผู้")]),n("br"),n("center",[n("v-flex",{attrs:{xs12:"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-btn",{staticClass:"rounded-lg width ",attrs:{depressed:"",dark:"",color:"warning"},on:{click:function(a){return t.$router.push("/admin/buffaloinformation")}}},[n("v-icon",[t._v("mdi-pencil")]),t._v("แก้ไข ")],1)],1)],1)],1)],1)],1)})),1),n("div",{staticClass:"text-center pt-4"},[n("v-pagination",{attrs:{color:"green",length:4,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1),n("br"),n("br"),n("br")],1)],1),n("buttomnav")],1)},r=[],o=n("722a"),i={components:{buttomnav:o["a"]},data:function(){return{items:["มีชีวิต","ไม่มีชีวิต"],dialog1:!0,radios:"ทั้งหมด",row:null,checkbox:!1,checkbox1:!1,checkbox2:!1,radioGroup:1,switch1:!0,page:1}}},c=i,s=(n("2b73"),n("2877")),l=n("6544"),u=n.n(l),d=n("8336"),v=n("b0af"),p=n("a523"),f=n("0e8f"),b=n("132d"),g=n("adda"),m=n("a722"),h=n("891e"),w=n("67b6"),x=n("43a6"),C=n("0fd9"),k=n("b974"),_=n("2fa4"),j=Object(s["a"])(c,e,r,!1,null,null,null);a["default"]=j.exports;u()(j,{VBtn:d["a"],VCard:v["a"],VContainer:p["a"],VFlex:f["a"],VIcon:b["a"],VImg:g["a"],VLayout:m["a"],VPagination:h["a"],VRadio:w["a"],VRadioGroup:x["a"],VRow:C["a"],VSelect:k["a"],VSpacer:_["a"]})}}]);
//# sourceMappingURL=chunk-bee14bc4.d04e665f.js.map