"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[662],{184:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"bg-black bg-opacity-40 bottom-0 fixed flex items-center justify-center left-0 right-0 top-0 z-10"},[i("div",{staticClass:"bg-modal flex flex-col items-center max-w-screen-sm mx-10 my-10 px-10 py-7 rounded-lg w-full"},["success"===t.icon?i("img",{staticClass:"h-14 mb-6 w-14",attrs:{src:s(54398)}}):t._e(),t.title?i("div",{staticClass:"font-bold mb-4 text-xl"},[t._v(t._s(t.title))]):t._e(),t.message?i("div",{staticClass:"leading-5 mb-6 opacity-60 text-base text-center text-dark-message"},[t._v(" "+t._s(t.message)+" ")]):t._e(),i("primary-button",{staticClass:"mt-2",attrs:{title:t.action},on:{click:t.runActionAndClose}})],1)])])},n=[],a=s(90108),o={name:"AlertDialog",components:{PrimaryButton:a.Z},props:{icon:{default:"",type:String}},data(){return{action:"",callback:null,message:"",showing:!1,title:""}},methods:{async runActionAndClose(){this.callback&&await this.callback(),this.showing=!1},show(t,e,s,i){this.title=t,this.message=e,this.showing=!0,this.action=s||this.$t("general.dismiss"),this.callback=i}}},l=o,r=s(1001),c=(0,r.Z)(l,i,n,!1,null,"3caef756",null),d=c.exports},67379:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"active:brightness-75 flex flex-row h-14 items-center px-4 py-2",on:{click:function(e){t.to?t.$router.push(t.to):t.$emit("click")}}},[s("div",{staticClass:"mr-4 w-4"},[t.icon?s("img",{staticClass:"me-4 text-2xl text-primary-100",attrs:{src:t.icon}}):t._e()]),s("div",[s("div",[t._v(t._s(t.title))]),t.subtitle?s("div",{staticClass:"text-xs",class:t.subtitleClass},[t._v(t._s(t.subtitle))]):t._e()]),s("div",{attrs:{ckass:"flex-grow"}}),t.loading?s("i",{staticClass:"animate-spin icon-spinner"}):t.appendIcon?s("i",{staticClass:"se-4 text-2xl text-primary-100",class:t.appendIcon}):t._e()])},n=[],a={name:"ListItem",components:{},props:{appendIcon:{default:"",type:String},icon:{default:"",type:String},loading:{type:Boolean},subtitle:{default:"",type:String},subtitleClass:{default:"",type:String},title:{default:"",type:String},to:{default:"",type:String}}},o=a,l=s(1001),r=(0,l.Z)(o,i,n,!1,null,null,null),c=r.exports},55662:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex flex-col h-full"},[i("top-bar",{attrs:{title:t.$t("fio.fio")}}),i("div",{staticClass:"px-11 py-8"},[i("list-item",{attrs:{icon:s(18202),loading:t.fio.loading,title:t.$t("general.fioHandle")},on:{click:t.goToFioSettings}}),i("list-item",{attrs:{icon:s(25312),title:t.$t("general.fioDomains"),to:"/settings/fio/domains"}}),i("alert-dialog",{ref:"errorDialog"})],1)],1)},n=[],a=(s(57658),s(61346)),o=s(184),l=s(67379),r=s(38423),c=s(17731),d={name:"FioSettingsView",components:{AlertDialog:o.Z,ListItem:l.Z,TopBar:r.Z},data(){return{fio:{error:!1,handle:null,loading:!1}}},computed:{publicKey(){const{accountsByCoinType:t}=this.$store.getters;return t[a.Dc.FIO]}},mounted(){this.fetchFioHandle()},methods:{async fetchFioHandle(){this.fio.loading=!0;try{const t=await c.Z.getFioHandles(this.publicKey);t.fio_addresses?.length&&(this.fio.handle=t.fio_addresses.find((t=>t.fio_address.endsWith("@opera")))?.fio_address,this.fio.handle||(this.fio.handle=t.fio_addresses[0]?.fio_address))}catch(t){404!==t.response.status&&(this.fio.error=!0)}finally{this.fio.loading=!1}},goToFioSettings(){if(this.fio.loading)return;if(this.fio.error)return void this.$refs.errorDialog.show(this.$t("errors.generic.oops"),this.$t("errors.generic.somethingWentWrong"));const{handle:t}=this.fio;t?this.$router.push({path:"/settings/fio/connect",query:{handle:t}}):this.$router.push({path:"/settings/fio/register",query:{hasOperaDomain:"false"}})}}},f=d,u=s(1001),h=(0,u.Z)(f,i,n,!1,null,null,null),g=h.exports},25312:function(t,e,s){t.exports=s.p+"img/fio_domain.e23444b3.svg"},18202:function(t,e,s){t.exports=s.p+"img/fio_handle.556d7a37.svg"},54398:function(t,e,s){t.exports=s.p+"img/success.5827329e.svg"}}]);