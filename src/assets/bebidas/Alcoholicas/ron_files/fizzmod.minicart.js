!function o(d,s,u){function m(e,r){if(!s[e]){if(!d[e]){var t="function"==typeof require&&require;if(!r&&t)return t(e,!0);if(a)return a(e,!0);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}var n=s[e]={exports:{}};d[e][0].call(n.exports,function(r){return m(d[e][1][r]||r)},n,n.exports,o,d,s,u)}return s[e].exports}for(var a="function"==typeof require&&require,r=0;r<u.length;r++)m(u[r]);return m}({1:[function(r,e,t){"use strict";var i,n,o,d;i=window.jQuery,n=window.Fizzmod,o=window.vtexjs.checkout,window.vtexjs,d={getOrderFormActiveRequest:void 0,orderForm:void 0,orderFormInitialized:!1,events:{VTEX_ORDER_FORM_UPDATED:"orderFormUpdated.vtex",VTEX_REQUEST_BEGIN:"checkoutRequestBegin.vtex",VTEX_REQUEST_END:"checkoutRequestEnd.vtex",INIT:"Fizzmod.Minicart.Initialized",REQUEST_BEGIN:"Fizzmod.Minicart.requestBegin",REQUEST_END:"Fizzmod.Minicart.requestEnd",UPDATED:"Fizzmod.Minicart.Updated"},errors:{undefinedOrderForm:"orderForm is not defined",indexNotDefined:"Index is not defined",indexNotFound:"Index wasn't found in the orderForm",dataNotDefined:"Data is not defined",itemArrayNotDefined:"itemArray is not defined",itemArrayNotAnArray:"itemArray is not an array"},init:function(){var e=this;return this.vtexEvents(),this.getOrderForm().then(function(r){return e.trigger(e.events.INIT,r)}),this},trigger:function(r,e){i(window).trigger(r,e)},error:function(r,e){console.log(this.errors[r]),e&&console.log("Data: "+e)},updateOrderForm:function(r){this.orderFormInitialized=!0,this.orderForm=r,this.trigger(this.events.UPDATED,r)},vtexEvents:function(){var t=this;i(window).on(this.events.VTEX_ORDER_FORM_UPDATED,function(r,e){return t.updateOrderForm(e)}),i(window).on(this.events.VTEX_REQUEST_BEGIN,function(r,e){return t.trigger(t.events.REQUEST_BEGIN,e)}),i(window).on(this.events.VTEX_REQUEST_END,function(r,e){return t.trigger(t.events.REQUEST_END,e)})},getOrderForm:function(){var r=this,e=void 0;return this.getOrderFormActiveRequest?e=this.getOrderFormActiveRequest:(e=o.getOrderForm(),this.getOrderFormActiveRequest=e),this.trigger(this.events.REQUEST_BEGIN),e.done(function(){r.trigger(r.events.REQUEST_END),r.getOrderFormActiveRequest=void 0}),e},getOrderFormId:function(){return this.orderForm?this.orderForm.orderFormId:this.error("undefinedOrderForm")},getItems:function(){return this.orderForm?this.orderForm.items||[]:this.error("undefinedOrderForm")},removeItem:function(r){var e=this.orderForm.items[r];return e.index=r,o.removeItems([e])},removeItemArray:function(r){return r?Array.isArray(r)?o.removeItems(r):this.error("itemArrayNotAnArray"):this.error("itemArrayNotDefined")},updateItem:function(r,e){if(void 0===r)return this.error("indexNotDefined");if(!this.orderForm.items[r])return this.error("indexNotFound");if(!e)return this.error("dataNotDefined");var t={quantity:e.quantity,seller:e.seller,id:e.id,index:e.index};return o.updateItems([t])}},n.Minicart=d},{}]},{},[1]);
//# sourceMappingURL=fizzmod.minicart.js.map