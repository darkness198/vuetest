webpackJsonp([16],{183:function(t,e,i){"use strict";e.a={data:function(){return{id:""}},created:function(){this.$store.dispatch("getProductsByUser",this.user)},computed:{fields:{get:function(){return{title:{label:this.t("productsget.mixin.field.first")},description:{label:this.t("productsget.mixin.field.second")},price:{label:this.t("productsget.mixin.field.third")},actions:{label:this.t("productsget.mixin.field.fourth")}}}},products:{get:function(){return this.$store.state.Products.products}},user:{get:function(){return this.$store.state.User.user}},isEditProductVisible:{get:function(){return this.$store.state.Product.product.meta.isEditProductVisible},set:function(t){this.$store.commit("SET_IS_EDIT_PRODUCT_VISIBLE",t)}}}}},283:function(t,e,i){var s=i(8)(i(284),i(288),null,null);t.exports=s.exports},284:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(20),r=i.n(s),n=i(21),o=i.n(n),c=i(183),u=function(){return i.e(8).then(i.bind(null,285))};e.default={mixins:[c.a],components:{ProductPatch:u},methods:{showPatchForm:function(t){this.$set(this,"id",t),this.$store.commit("SET_IS_EDIT_PRODUCT_VISIBLE",!0)},deleteProduct:function(t){var e=this;return o()(r.a.mark(function i(){return r.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.$store.dispatch("deleteProduct",t);case 2:e.$store.dispatch("getProductsByUser",e.user);case 3:case"end":return i.stop()}},i,e)}))()}}}},288:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isEditProductVisible?i("product-patch",{attrs:{id:t.id}}):t._e(),t._v(" "),t.products.length>0?i("b-table",{attrs:{items:t.products,fields:t.fields},scopedSlots:t._u([{key:"price",fn:function(e){return[t._v("\n      $"+t._s(e.item.price)+"\n    ")]}},{key:"actions",fn:function(e){return[i("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(i){t.showPatchForm(e.item.id)}}},[t._v(t._s(t.t("productsget.mixin.button.first"))+"\n      ")]),t._v(" "),i("b-button",{attrs:{size:"sm",variant:"outline-warning"},on:{click:function(i){t.deleteProduct(e.item.id)}}},[t._v(t._s(t.t("productsget.mixin.button.second")))])]}}])}):i("p",[t._v(t._s(t.t("productsget.mixin.p.first")))])],1)},staticRenderFns:[]}}});