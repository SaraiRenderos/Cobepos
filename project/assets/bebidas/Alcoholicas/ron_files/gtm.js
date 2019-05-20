
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"160",
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"transactionProducts"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"transactionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionAffiliation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"transactionTotal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionShipping"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=void 0;if(\"undefined\"!==typeof ",["escape",["macro",0],8,16],"){var b=[];for(var a=0;a\u003C",["escape",["macro",0],8,16],".length;a++)b.push({brand:",["escape",["macro",0],8,16],"[a].brand,category:",["escape",["macro",0],8,16],"[a].categoryTree[0]+\"\/\"+",["escape",["macro",0],8,16],"[a].categoryTree[",["escape",["macro",0],8,16],"[a].categoryTree.length-1],id:",["escape",["macro",0],8,16],"[a].id,name:",["escape",["macro",0],8,16],"[a].name,price:",["escape",["macro",0],8,16],"[a].sellingPrice,quantity:",["escape",["macro",0],8,16],"[a].quantity,dimension2:",["escape",["macro",0],8,16],"[a].seller});\n0\u003Cb.length\u0026\u0026(c={ecommerce:{purchase:{actionField:{id:",["escape",["macro",1],8,16],",affiliation:",["escape",["macro",2],8,16],",revenue:",["escape",["macro",3],8,16],",shipping:",["escape",["macro",4],8,16],",dimension3:getCookie(\"store-name\")},products:b}}})}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[];try{for(i=0;i\u003CdataLayer.length;i++)if(dataLayer[i].hasOwnProperty(\"orderFormProducts\")){console.log(\"Se encontro el orderFormProducts en la posicion \"+i+\" del datalayer\");for(var c=dataLayer[i].orderFormProducts,a=0;a\u003Cc.length;a++)b[a]=c[a].id;dataLayer.push({ecomm_prodid:b})}}catch(d){console.log(\"Ocurrio un error en la macro de tag manager remarketing dinamico\")}return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"productId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productPriceTo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productBrandName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productDepartmentName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productCategoryName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],",b=",["escape",["macro",8],8,16],",c=",["escape",["macro",9],8,16],",d=",["escape",["macro",10],8,16],",e=",["escape",["macro",11],8,16],",f=",["escape",["macro",12],8,16],";return a={ecommerce:{detail:{products:[{name:a,id:b,price:c,brand:d,category:e+\"\/\"+f}]}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[];if(\"object\"===typeof ",["escape",["macro",0],8,16],"\u0026\u00260\u003C",["escape",["macro",0],8,16],".length)for(var a=0;a\u003C",["escape",["macro",0],8,16],".length;a++)b.push(",["escape",["macro",0],8,16],"[a].id);return b})();"]
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 1\u003C=",["escape",["macro",15],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 3\u003C=",["escape",["macro",15],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 2\u003C=",["escape",["macro",15],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"skuStocks"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return JSON.stringify(",["escape",["macro",19],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageDepartment"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"Supermercado\"==",["escape",["macro",21],8,16],")return\"foods\";if(\"Supermercado\"!=",["escape",["macro",21],8,16],"\u0026\u0026null!=",["escape",["macro",21],8,16],")return\"nonfoods\"})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-37956913-31"
    },{
      "function":"__c",
      "vtp_value":"UA-37956913-4"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[{name:\"foods\",id:",["escape",["macro",23],8,16],"},{name:\"nonfoods\",id:",["escape",["macro",24],8,16],"}];return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"transactions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",26],8,16],"){var a=",["escape",["macro",26],8,16],";if(",["escape",["macro",27],8,16],"){var b=",["escape",["macro",27],8,16],".split(\"|\");if(-1\u003Cb.indexOf(a))return\"blockTransaction\"}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",26],8,16],")return function(){var a=",["escape",["macro",26],8,16],";if(",["escape",["macro",27],8,16],"){var b=",["escape",["macro",27],8,16],".split(\"|\");-1==b.indexOf(a)\u0026\u0026(b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=\"transactions\\x3d\"+b.join(\"|\")+\"; \"+a)}else b=[],b.push(a),a=new Date,a.setTime(a.getTime()+15552E6),a=\"expires\\x3d\"+a.toUTCString(),document.cookie=\"transactions\\x3d\"+b.join(\"|\")+\"; \"+a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productToAddECData"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",30],8,16],".ecommerce.add.products[0].name})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\".product-content .product-info .product-prices__wrapper .product-prices__price--price-per-unit\").text();return a=a.split(\" a \")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\".product-info .info-wrapper .prod-controls .product-quantity .product-quantity__input\").val();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){productNewsletterCheck=$(\"#opt-in-newsletter\").is(\":checked\")?{event:\"checkoutOption\",productClickECData:{ecommerce:{checkout_option:{actionField:{step:\"3\",option:\"Quiero recibir el newsletter con promociones.\"}}}}}:{event:\"checkoutOption\",productClickECData:{ecommerce:{checkout_option:{actionField:{step:\"3\",option:\"No quiero recibir el newsletter con promociones\"}}}}};dataLayer.push(productNewsletterCheck);return productNewsletterCheck})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productsViewECData"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",35],8,16],";a={impressions:a.ecommerce.impressions.products};return{ecommerce:a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"transactionLog"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],";if(a)return function(){a=a.toString();var c=[a];if(",["escape",["macro",38],8,16],")if(c=",["escape",["macro",38],8,16],".split(\"|\"),-1==c.indexOf(a))c.push(a);else return;var b=new Date;b.setTime(b.getTime()+15552E6);b=\"expires\\x3d\"+b.toUTCString();document.cookie=\"transactionLog\\x3d\"+c.join(\"|\")+\"; \"+b+\"; path\\x3d\/\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1;try{if(",["escape",["macro",38],8,16],"){var b=",["escape",["macro",38],8,16],".split(\"|\");-1==b.indexOf(",["escape",["macro",37],8,16],".toString())\u0026\u0026(a=!0)}else a=!0}catch(c){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,c){var b={};b.id=a.id;b.price=a.price;b.quantity=a.quantity?a.quantity:0;if(\"simple\"==c||\"todo\"==c||null==c)b.brand=a.brand.slice(0,99),b.name=a.name.slice(0,99);else if(\"todo\"==c||null==c)b.category=a.category;return b}})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-37956913-55",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-tab"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__e"
    },{
      "function":"__c",
      "vtp_value":"0.9.14"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(null==",["escape",["macro",51],8,16],")return\"\";var b=",["escape",["macro",51],8,16],".replace(\"data_ready_for_\",\"\").replace(\"purchase_ready_for_\",\"\"),c=\"\";b=\"_goop_\"+b+\"\\x3d\";for(var e=document.cookie.split(\";\"),d=0;d\u003Ce.length;d++){for(var a=e[d];\" \"==a.charAt(0);)a=a.substring(1);0==a.indexOf(b)\u0026\u0026(c=a.substring(b.length,a.length))}return c.startsWith(\"{\")?JSON.parse(c).value:c}catch(f){try{",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] 'Goop - 04 - Data Ready For' Error: \"+f)}catch(g){}}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",53],
      "vtp_map":["list",["map","key","saltinas|mindshare","value","826333590"],["map","key","nescafe|mindshare","value","826333590"],["map","key","samsung|blacksip","value","845858795"],["map","key","jj|j3","value","823342670"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":["template","goopBrands.",["macro",51],".remarketing"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",53],
      "vtp_map":["list",["map","key","saltinas|mindshare","value","UA-37956913-48"],["map","key","nescafe|mindshare","value","UA-37956913-48"],["map","key","samsung|blacksip","value","UA-37956913-39"],["map","key","jj|j3","value","UA-37956913-52"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":["template","goopBrands.",["macro",51],".ecommerce"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",53],
      "vtp_map":["list",["map","key","saltinas|mindhsare","value","wZCVCMKssHoQlrODigM"],["map","key","nescafe|mindshare","value","wZCVCMKssHoQlrODigM"],["map","key","samsung|blacksip","value","0PD4CPWrxHMQ64-rkwM"],["map","key","jj|j3","value","WqXjCL2d2IUBEM7szIgD"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":["template","goopBrands.",["macro",51],".ecommerce.ecommerce.purchase.actionField.revenue"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":["template","goopBrands.",["macro",51],".ecommerce.ecommerce.purchase.actionField.id"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-107982627-19",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"productListPriceFrom"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"orderFormTotal"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__r"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"environment"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";for(i=0;i\u003Ca.length;i++)if(",["escape",["macro",68],8,16],"==a[i].name)return a[i].id})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sellerId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],",b=",["escape",["macro",8],8,16],",c=",["escape",["macro",9],8,16],",d=",["escape",["macro",10],8,16],",e=",["escape",["macro",11],8,16],",f=",["escape",["macro",12],8,16],",g=",["escape",["macro",33],8,16],",h=",["escape",["macro",70],8,16],",k=",["escape",["macro",32],8,16],";return a={ecommerce:{add:{products:[{name:a,id:b,price:c,brand:d,category:e+\"\/\"+f,quantity:g,dimension1:k,dimension2:h}]}}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"origen"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"consulta"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accion"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"etiqueta"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Nombre"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productClickECData"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productResumeECData"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoImpressionsECData"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productDetailECData"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productRemoveData"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-107982627-26",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d={};try{var a=",["escape",["macro",84],8,16],",f=",["escape",["macro",41],8,16],",e=[],b=\"todo\";20\u003Ca.length\u0026\u0026(b=\"simple\");40\u003Ca.length\u0026\u0026(b=\"completa\");70\u003Ca.length\u0026\u0026(a=[]);for(var c=0;c\u003Ca.length;c++)e.push(f(a[c],b));a=",["escape",["macro",85],8,16],";d={ecommerce:{currencyCode:\"COP\",purchase:{actionField:{id:a.id,affiliation:a.affiliation,revenue:a.revenue,tax:a.tax,shipping:a.shipping,coupon:a.coupon},products:e}}}}catch(g){}return d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoClickECData"
    },{
      "function":"__c",
      "vtp_value":"www.tiendasjumbo.co"
    },{
      "function":"__c",
      "vtp_value":"30"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_goop",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"|"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return document.cookie.split(\";\").filter(function(a){return 0===a.trim().indexOf(\"_goop_\")}).map(function(a){a=a.trim().split(\"\\x3d\")[1];return a.startsWith(\"{\")?JSON.parse(a):{value:a,creation:0}}).filter(function(a,b,c){var d=a.value.split(",["escape",["macro",91],8,16],")[0];b=c.filter(function(a){a=a.value.split(",["escape",["macro",91],8,16],")[0];return d==a}).sort(function(a,b){return b.creation-a.creation})[0];return a.creation==b.creation}).map(function(a){return a.value})}catch(a){try{",["escape",["macro",16],8,16],"\u0026\u0026\nconsole.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] 'Goop - 02 - Cookies' Error: \"+a)}catch(b){}}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productClickECData"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",98],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","email","value","2"],["map","key","profile","value","3"],["map","key","shipping","value","4"],["map","key","payment","value","5"],["map","key","orderPlaced","value","6"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=void 0;if(\"0\"!=",["escape",["macro",99],8,16],"){var f=[];if(\"undefined\"!==typeof summary\u0026\u0026\"undefined\"!==typeof summary.items){for(var a=0;a\u003Csummary.items.length;a++){var b=summary.items[a].productCategoryIds.split(\"\/\").splice(1,summary.items[a].productCategoryIds.split(\"\/\").length-2);f.push({brand:summary.items[a].additionalInfo.brandName,category:summary.items[a].productCategories[b[0]]+\"\/\"+summary.items[a].productCategories[b[b.length-1]],id:summary.items[a].id,name:summary.items[a].name,\nprice:summary.items[a].sellingPrice\/100,quantity:summary.items[a].quantity})}if(0\u003Cf.length)if(3==",["escape",["macro",99],8,16],")c={ecommerce:{checkout:{actionField:{step:",["escape",["macro",99],8,16],",option:\"Quiero recibir el newsletter con promociones.\"},products:f}}};else if(4==",["escape",["macro",99],8,16],"){b=vtexjs.checkout.orderForm.items;var g=[\"1\"],h=[\"cencosud\",\"jumbocolombia\"];c=b.some(function(a){return g.includes(a.seller)});a=b.some(function(a){return h.includes(a.seller)});b=b.some(function(a){return!g.includes(a.seller)\u0026\u0026\n!h.includes(a.seller)});if(!c||a||b)c||!a||b?c||a||!b?c\u0026\u0026a\u0026\u0026!b?d=\"Jumbo al Auto, Env\\u00edo a domicilio\":c\u0026\u0026!a\u0026\u0026b?d=\"Entrega agendada, Env\\u00edo a domicilio\":!c\u0026\u0026a\u0026\u0026b?d=\"Env\\u00edo a domicilio, Env\\u00edo a domicilio\":c\u0026\u0026a\u0026\u0026b\u0026\u0026(d=\"Entrega agendada, Env\\u00edo a domicilio, Env\\u00edo a domicilio\"):d=\"Env\\u00edo a domicilio\":d=\"Env\\u00edo a domicilio\";else var d=\"Entrega agendada\";c={ecommerce:{checkout:{actionField:{step:",["escape",["macro",99],8,16],",option:d},products:f}}}}else if(5==",["escape",["macro",99],8,16],"){b=\nvtexjs.checkout.orderForm.items;g=[\"1\"];h=[\"cencosud\",\"jumbocolombia\"];c=b.some(function(a){return g.includes(a.seller)});a=b.some(function(a){return h.includes(a.seller)});b=b.some(function(a){return!g.includes(a.seller)\u0026\u0026!h.includes(a.seller)});if(!c||a||b)c||!a||b?c||a||!b?c\u0026\u0026a\u0026\u0026!b?e=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\":c\u0026\u0026!a\u0026\u0026b?e=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\":!c\u0026\u0026a\u0026\u0026b?e=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\":c\u0026\u0026a\u0026\u0026b\u0026\u0026(e=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\"):e=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\":\ne=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\";else var e=\"Pago contra entrega\";c={ecommerce:{checkout:{actionField:{step:",["escape",["macro",99],8,16],",option:e},products:f}}}}else c={ecommerce:{checkout:{actionField:{stepi:",["escape",["macro",99],8,16],"},products:f}}}}else if(\"undefined\"!==typeof ",["escape",["macro",0],8,16],"){for(a=0;a\u003C",["escape",["macro",0],8,16],".length;a++)f.push({brand:",["escape",["macro",0],8,16],"[a].brand,category:",["escape",["macro",0],8,16],"[a].categoryTree[0]+\"\/\"+",["escape",["macro",0],8,16],"[a].categoryTree[",["escape",["macro",0],8,16],"[a].categoryTree.length-\n1],id:",["escape",["macro",0],8,16],"[a].id,name:",["escape",["macro",0],8,16],"[a].name,price:",["escape",["macro",0],8,16],"[a].sellingPrice,quantity:",["escape",["macro",0],8,16],"[a].quantity});0\u003Cf.length\u0026\u0026(3==",["escape",["macro",99],8,16],"?c={ecommerce:{checkout:{actionField:{step:",["escape",["macro",99],8,16],",option:\"Quiero recibir el newsletter con promociones.\"},products:f}}}:4==",["escape",["macro",99],8,16],"?(b=vtexjs.checkout.orderForm.items,g=[\"1\"],h=[\"cencosud\",\"jumbocolombia\"],c=b.some(function(a){return g.includes(a.seller)}),a=b.some(function(a){return h.includes(a.seller)}),\nb=b.some(function(a){return!g.includes(a.seller)\u0026\u0026!h.includes(a.seller)}),!c||a||b?c||!a||b?c||a||!b?c\u0026\u0026a\u0026\u0026!b?d=\"Jumbo al Auto, Env\\u00edo a domicilio\":c\u0026\u0026!a\u0026\u0026b?d=\"Entrega agendada, Env\\u00edo a domicilio\":!c\u0026\u0026a\u0026\u0026b?d=\"Env\\u00edo a domicilio, Env\\u00edo a domicilio\":c\u0026\u0026a\u0026\u0026b\u0026\u0026(d=\"Entrega agendada, Env\\u00edo a domicilio, Env\\u00edo a domicilio\"):d=\"Env\\u00edo a domicilio\":d=\"Env\\u00edo a domicilio\":d=\"Entrega agendada\",c={ecommerce:{checkout:{actionField:{step:",["escape",["macro",99],8,16],",option:d},products:f}}}):\n5==",["escape",["macro",99],8,16],"?(b=vtexjs.checkout.orderForm.items,g=[\"1\"],h=[\"cencosud\",\"jumbocolombia\"],c=b.some(function(a){return g.includes(a.seller)}),a=b.some(function(a){return h.includes(a.seller)}),b=b.some(function(a){return!g.includes(a.seller)\u0026\u0026!h.includes(a.seller)}),!c||a||b?c||!a||b?c||a||!b?c\u0026\u0026a\u0026\u0026!b?e=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\":c\u0026\u0026!a\u0026\u0026b?e=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\":!c\u0026\u0026a\u0026\u0026b?e=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\":c\u0026\u0026a\u0026\u0026b\u0026\u0026(e=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\"):\ne=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\":e=\"Tarjeta de cr\\u00e9dito\/Tarjeta Cencosud\":e=\"Pago contra entrega\",c={ecommerce:{checkout:{actionField:{step:",["escape",["macro",99],8,16],",option:e},products:f}}}):c={ecommerce:{checkout:{actionField:{stepi:",["escape",["macro",99],8,16],"},products:f}}})}}return c})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-37956913-4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"visitorContactInfo.0"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"orderFormProducts"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productImpressionsECData"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productToRemoveECData"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoClickECData"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoImpressionsECData"
    },{
      "function":"__f"
    },{
      "function":"__k",
      "vtp_name":"_utmz"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-37956913-31",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategoryAjaxSus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventActionAjaxSus"
    },{
      "function":"__c",
      "vtp_value":"Removing special chars such as ®"
    },{
      "function":"__c",
      "vtp_value":"UA-37956913-55"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"envsess"
    },{
      "function":"__j",
      "vtp_name":"GA_Environment"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_customUrlSource":["macro",126],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "setup_tags":["list",["tag",94,1]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar script=document.createElement(\"script\");script.setAttribute(\"data-module\",\"vtex\");script.setAttribute(\"data-apikey\",\"tiendasjumbofood\");script.setAttribute(\"data-initialize\",\"false\");script.setAttribute(\"async\",\"async\");script.setAttribute(\"defer\",\"defer\");script.src=\"\/\/static.chaordicsystems.com\/static\/loader.js\";document.getElementsByTagName(\"head\")[0].appendChild(script);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":103
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"321840911355375\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=321840911355375\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__cl",
      "tag_id":8
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"376780",
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Mi Carrito",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Boton Home",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Click Tab",
      "vtp_eventLabel":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Buscar Por Lista",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":87
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Registro",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Suscritos NewsLetter",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":89
    },{
      "function":"__sp",
      "vtp_dataLayerVariable":["macro",55],
      "vtp_conversionId":["macro",54],
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",56],
      "tag_id":98
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_functionName":"_goop_ga",
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",58],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","page","value",["macro",49]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",57],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":99
    },{
      "function":"__awct",
      "vtp_conversionValue":["macro",60],
      "vtp_orderId":["macro",61],
      "vtp_conversionId":["macro",54],
      "vtp_conversionLabel":["macro",59],
      "vtp_url":["macro",56],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":100
    },{
      "function":"__ua",
      "setup_tags":["list",["tag",100,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":107
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"762323",
      "tag_id":120
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Out of Stock",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":["macro",20],
      "vtp_eventLabel":["macro",49],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",3],
      "vtp_orderId":["macro",1],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"961658159",
      "vtp_currencyCode":"COP",
      "vtp_conversionLabel":"fBJQCJ6w1VcQr_rGygM",
      "vtp_url":["macro",56],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":124
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",1],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value","home"]],
      "vtp_conversionId":"961658159",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",56],
      "tag_id":134
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value","category"]],
      "vtp_conversionId":"961658159",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",56],
      "tag_id":135
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_totalvalue","value",["macro",64]],["map","key","ecomm_prodid","value",["macro",8]],["map","key","ecomm_pagetype","value","product"]],
      "vtp_conversionId":"961658159",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",56],
      "tag_id":136
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_totalvalue","value",["macro",3]],["map","key","ecomm_prodid","value",["macro",14]],["map","key","ecomm_pagetype","value","purchase"]],
      "vtp_conversionId":"961658159",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",56],
      "tag_id":137
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_totalvalue","value",["macro",65]],["map","key","ecomm_prodid","value",["macro",6]],["map","key","ecomm_pagetype","value","cart"]],
      "vtp_conversionId":"961658159",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",56],
      "tag_id":138
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value","searchresults"]],
      "vtp_conversionId":"961658159",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",56],
      "tag_id":139
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"961658159",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",56],
      "tag_id":140
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Repeat Order",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Click",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":142
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",12]],["map","key","u4","value",["macro",11]],["map","key","u3","value",["macro",9]],["map","key","u5","value",["macro",7]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"conve0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"conve0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8113043",
      "vtp_ordinalStandard":["macro",67],
      "vtp_url":["macro",56],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":143
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"conve000",
      "vtp_useImageTag":false,
      "vtp_activityTag":"conve0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8113043",
      "vtp_ordinalStandard":["macro",67],
      "vtp_url":["macro",56],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":["macro",66],
      "vtp_eventLabel":["macro",49],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",13],
      "vtp_eventCategory":"Enhanced Product Detail",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"detail",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",69],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":148
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",71],
      "vtp_eventCategory":"Enhanced Add To Cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"add",
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",69],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":149
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1",
      "vtp_conversionLabel":"1",
      "vtp_url":["macro",56],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":150
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"chatbot",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Chat iniciado",
      "vtp_eventLabel":["macro",49],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":151
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"chatbot",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"transferidoChatHumano",
      "vtp_eventLabel":["macro",49],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":152
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"chatbot",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"despliegueOfertas",
      "vtp_eventLabel":["macro",72],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":153
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"chatbot",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"addToCart",
      "vtp_eventLabel":["macro",73],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":154
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"chatbot",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"consultaProducto",
      "vtp_eventLabel":["macro",74],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"chatbot",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":["macro",75],
      "vtp_eventLabel":["macro",76],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":156
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",12]],["map","key","u4","value",["macro",11]],["map","key","u5","value",["macro",7]],["map","key","u3","value",["macro",9]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"jumbo0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"addto0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8113043",
      "vtp_ordinalStandard":["macro",67],
      "vtp_url":["macro",56],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":160
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",77]],["map","fieldName","title","value",["macro",77]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":172
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",36],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Product",
      "vtp_eventLabel":"Impression",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":179
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",78],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Product",
      "vtp_eventLabel":"Click",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":180
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",78],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"AddToCart",
      "vtp_eventLabel":"Add",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":181
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",79],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Checkout",
      "vtp_eventLabel":"Step",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":182
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Checkout",
      "vtp_eventLabel":"Option",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":183
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",80],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Promo",
      "vtp_eventLabel":"Impression",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":184
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",81],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Detail",
      "vtp_eventLabel":"Producto",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":185
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",82],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",83],
      "vtp_eventAction":"RemoveFromCart",
      "vtp_eventLabel":"remove",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":186
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Checkout",
      "vtp_eventLabel":"Step",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":187
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",86],
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",39]]],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Purchase",
      "vtp_eventLabel":"compra",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",87],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",46],
      "vtp_eventAction":"Promo",
      "vtp_eventLabel":"Click",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":190
    },{
      "function":"__cl",
      "tag_id":191
    },{
      "function":"__cl",
      "tag_id":192
    },{
      "function":"__cl",
      "tag_id":193
    },{
      "function":"__cl",
      "tag_id":194
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2592664_70",
      "tag_id":195
    },{
      "function":"__cl",
      "tag_id":196
    },{
      "function":"__cl",
      "tag_id":197
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2592664_121",
      "tag_id":198
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2592664_182",
      "tag_id":199
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".category-banner-slider .adaptive-image",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"75",
      "vtp_onScreenDuration":"2000",
      "vtp_uniqueTriggerId":"2592664_197",
      "tag_id":200
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003EjQuery(document).ready(function(){setTimeout(function(){\"Pago en Tienda\"==jQuery(\".payment-subtitle\").text()\u0026\u0026(jQuery(\".orderplaced-processing\").remove(),orderSequence=jQuery(\"#order-id\").text().replace(\"v\",\"\").replace(\"jmcl-01\",\"\"),console.log(\"Pago en tienda no.:\"+orderSequence),jQuery(\".orderplaced-alert-text\").append(\"\\x3cdiv class\\x3d'store-payment-information'\\x3eTu pedido estar\\u00e1 disponible para pago la l\\u00ednea de cajas de nuestras tiendas Jumbo a nivel nacional o en Metro Express Calle 93 en 5 minutos.\\x3cbr \/\\x3e\\x26nbsp;\\x3cbr \/\\x3ePresentando el c\\u00f3digo de recaudo No. 360 y el n\\u00famero de pedido (\"+\norderSequence+\"), podr\\u00e1s pagar tu pedido en la l\\u00ednea de cajas Jumbo y recibir tu compra en la direcci\\u00f3n que especificaste. Recibir\\u00e1s un correo electr\\u00f3nico con una copia de estas instrucciones y la informaci\\u00f3n de tu pedido.\\x3cbr \/\\x3e\\x26nbsp;\\x3cbr \/\\x3eRecuerda que tienes hasta el cierre de las tiendas el d\\u00eda de ma\\u00f1ana para hacer el pago de tu pedido, despu\\u00e9s de este plazo, tu pedido ser\\u00e1 cancelado.\\x3c\/div\\x3e\"))},1E3)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":41
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003Evar mclics_adv_id=\"206218174\",mclics_sku=",["escape",["macro",1],8,16],",mclics_price=",["escape",["macro",3],8,16],";document.write(unescape(\"%3Cscript src\\x3d'\"+(\"https:\"==document.location.protocol?\"https:\/\/secure.mlstatic.com\/mclics\/\":\"http:\/\/mclics1.mlstatic.com\/\")+\"clickcounter\/assets\/js\/conversion.js' type\\x3d'text\/javascript'%3E%3C\/script%3E\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E$(document).ready(function(){$(\".vtex-call-center-operator\").length\u0026\u0026($(\"body\").addClass(\"call-center\"),$(\".pg-ivr-otras-tarjetas\").trigger(\"click\"))});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Clink rel=\"stylesheet\" type=\"text\/css\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/select2\/4.0.2\/css\/select2.min.css\"\u003E\n\u003Cscript src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/select2\/4.0.2\/js\/select2.min.js\" type=\"text\/javascript\" charset=\"utf-8\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/javascript\" src=\"\/files\/fizzmod.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/files\/checkout.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:\"",["escape",["macro",3],7],"\",currency:\"COP\",content_ids:",["escape",["macro",14],8,16],",content_type:\"product\",order_id:",["escape",["macro",1],8,16],"});\u003C\/script\u003E "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_name:",["escape",["macro",7],8,16],",content_category:",["escape",["macro",12],8,16],",content_ids:[",["escape",["macro",8],8,16],"],content_type:\"product\",value:",["escape",["macro",9],8,16],",currency:\"COP\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:",["escape",["macro",7],8,16],",content_ids:[",["escape",["macro",8],8,16],"],content_type:\"product\",value:",["escape",["macro",9],8,16],",currency:\"COP\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddPaymentInfo\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cmeta name=\"google-site-verification\" content=\"vuOLCe2OkUv-dx4rlKb3XoNSKSZWAyjuuSWOwB6xwIc\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof addOneUnitFromCartListener){var addOneUnitFromCartListener={listener:function(){console.log(\"--- Definiendo el listener addOneUnitFromCartListener\");$(\".cart\").on(\"click\",\".item-quantity-change-increment\",function(b){console.log(\"--- Dentro del listener addOneUnitFromCartListener\");b=$(b.target).parent().parent().parent().find(\".product-name a\").first().text();var e=1;if(\"undefined\"!==typeof b\u0026\u0026\"undefined\"!==typeof summary\u0026\u0026\"undefined\"!==typeof summary.items)for(var d=!1,a=\n0;a\u003Csummary.items.length\u0026\u0026!d;a++)if(summary.items[a].name==b){d=!0;var c=summary.items[a].productCategoryIds.split(\"\/\").splice(1,summary.items[a].productCategoryIds.split(\"\/\").length-2);dataLayer.push({event:\"addToCart\",productToAddECData:{ecommerce:{currencyCode:\"COP\",add:{products:[{brand:summary.items[a].additionalInfo.brandName,category:summary.items[a].productCategories[c[0]]+\"\/\"+summary.items[a].productCategories[c[c.length-1]],id:summary.items[a].id,name:summary.items[a].name,price:summary.items[a].sellingPrice\/\n100,quantity:e}]}}}})}})}};addOneUnitFromCartListener.listener()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof removeProductFromCartListener){var removeProductFromCartListener={listener:function(){console.log(\"--- Definiendo el listener removeProductFromCartListener\");$(document).on(\"click\",\".item-link-remove\",function(b){console.log(\"--- Dentro del listener removeProductFromCartListener\");b=$(b.target).parent().parent().parent().find(\".product-name a\").first().text();if(\"undefined\"!==typeof b\u0026\u0026\"undefined\"!==typeof summary\u0026\u0026\"undefined\"!==typeof summary.items)for(var d=!1,a=0;a\u003Csummary.items.length\u0026\u0026\n!d;a++)if(summary.items[a].name==b){d=!0;var c=summary.items[a].productCategoryIds.split(\"\/\").splice(1,summary.items[a].productCategoryIds.split(\"\/\").length-2);dataLayer.push({event:\"removeFromCart\",productToRemoveECData:{ecommerce:{currencyCode:\"COP\",add:{products:[{brand:summary.items[a].additionalInfo.brandName,category:summary.items[a].productCategories[c[0]]+\"\/\"+summary.items[a].productCategories[c[c.length-1]],id:summary.items[a].id,name:summary.items[a].name,price:summary.items[a].sellingPrice\/\n100,quantity:summary.items[a].quantity}]}}}})}})}};removeProductFromCartListener.listener()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof removeOneUnitFromCartListener){var removeOneUnitFromCartListener={listener:function(){console.log(\"--- Definiendo el listener removeOneUnitFromCartListener\");$(\".cart\").on(\"click\",\".item-quantity-change-decrement\",function(b){console.log(\"--- Dentro del listener removeOneUnitFromCartListener\");b=$(b.target).parent().parent().parent().find(\".product-name a\").first().text();var e=1;if(\"undefined\"!==typeof b\u0026\u0026\"undefined\"!==typeof summary\u0026\u0026\"undefined\"!==typeof summary.items)for(var d=\n!1,a=0;a\u003Csummary.items.length\u0026\u0026!d;a++)if(summary.items[a].name==b){d=!0;var c=summary.items[a].productCategoryIds.split(\"\/\").splice(1,summary.items[a].productCategoryIds.split(\"\/\").length-2);dataLayer.push({event:\"removeFromCart\",productToRemoveECData:{ecommerce:{currencyCode:\"COP\",add:{products:[{brand:summary.items[a].additionalInfo.brandName,category:summary.items[a].productCategories[c[0]]+\"\/\"+summary.items[a].productCategories[c[c.length-1]],id:summary.items[a].id,name:summary.items[a].name,\nprice:summary.items[a].sellingPrice\/100,quantity:e}]}}}})}})}};removeOneUnitFromCartListener.listener()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof addOneUnitFromCartListener){var addOneUnitFromCartListener={listener:function(){console.log(\"--- Definiendo el listener addOneUnitFromCartListener\");$(\".add-to-cart\").on(\"click\",function(b){console.log(\"--- Dentro del listener addOneUnitFromCartListener\");b=$(b.target).parent().parent().find(\".product-item__info a\").first().text();var e=1;if(\"undefined\"!==typeof b\u0026\u0026\"undefined\"!==typeof summary\u0026\u0026\"undefined\"!==typeof summary.items)for(var d=!1,a=0;a\u003Csummary.items.length\u0026\u0026!d;a++)if(summary.items[a].name==\nb){d=!0;var c=summary.items[a].productCategoryIds.split(\"\/\").splice(1,summary.items[a].productCategoryIds.split(\"\/\").length-2);dataLayer.push({event:\"addToCart\",productToAddECData:{ecommerce:{currencyCode:\"COP\",add:{products:[{brand:summary.items[a].additionalInfo.brandName,category:summary.items[a].productCategories[c[0]]+\"\/\"+summary.items[a].productCategories[c[c.length-1]],id:summary.items[a].id,name:summary.items[a].name,price:summary.items[a].sellingPrice\/100,quantity:e}]}}}})}})}};addOneUnitFromCartListener.listener()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a(document).ajaxSuccess(function(a,c,b){-1!=b.url.indexOf(\"dataentities\/CL\/documents\/\")\u0026\u0026-1==b.url.indexOf(\"fields\\x3disNewsletterOptIn\")\u0026\u0026dataLayer.push({event:\"ajaxSuscritos\"})})})(jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":88
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{var jboProducts=[],otherBrandsFromTitle=[];jboProducts.push({name:dataLayer.find(function(a){return\"productName\"in a}).productName,id:dataLayer.find(function(a){return\"productId\"in a}).productId,price:dataLayer.find(function(a){return\"productPriceTo\"in a}).productPriceTo,brand:dataLayer.find(function(a){return\"productBrandName\"in a}).productBrandName.toLowerCase(),category:dataLayer.find(function(a){return\"productCategoryName\"in a}).productCategoryName});otherBrandsFromTitle=[];dataLayer.push({ecommerce:{detail:{products:jboProducts}}})}catch(a){console.log(\"Error: \"+\na)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction GoopCookie(a){this.brand=a;this.encodedBrand=this.brand.replace(\/[^\\w]\/gi,\"\").toLowerCase();this.name=\"_goop_\"+this.encodedBrand;this.DOMAIN=",["escape",["macro",88],8,16],";this.DAYS=parseInt(",["escape",["macro",89],8,16],");this.version=",["escape",["macro",52],8,16],";",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brand+\"] '00.' GoopCookie Init\");this.now=function(){return(new Date).getTime()};this.expiresIn=function(b){var a=new Date;a.setDate(a.getDate()+b);return a.toGMTString()};this.save=\nfunction(){var a=this.name+'\\x3d{\"value\":\"'+this.brand+'\",  \"creation\":'+this.now()+\"}; expires\\x3d\"+this.expiresIn(this.DAYS)+\"; path\\x3d\/\";\"NA\"!=this.DOMAIN\u0026\u0026(a+=\"; domain\\x3d\"+this.DOMAIN);document.cookie=a;",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brand+\"] '00.' Cookie set: \"+a)}}\ntry{",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '00.'\");var goopBrand=",["escape",["macro",90],8,16],";goopBrand\u0026\u00260\u003CgoopBrand.length\u0026\u0026(",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+goopBrand+\"] '00.' Found utm_goop Param\"),(new GoopCookie(goopBrand)).save());",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '00.' Triggering event: 'goop_cookie_ready'\");dataLayer.push({event:\"goop_cookie_ready\"})}catch(a){try{",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+\n",["escape",["macro",52],8,16],"+\"] '00.' Error: \"+a)}catch(b){}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '01. 01.'\");var goopProducts=[],otherBrandsFromTitle=[],JJ=\"carefree desitin johnsons johnson's johnson\\u00b4sbaby lagarde listerine lubriderm neutrogena ob reach stayfree sundown\".split(\" \"),goopSiteProduct=dataLayer.find(function(a){return\"ecommerce\"in a}).ecommerce.detail.products[0],_websiteBrand=goopSiteProduct.brand.toLowerCase().replace(\/[ \u0026]\/g,\"\"),_goop_other_brand=0\u003C=JJ.indexOf(_websiteBrand)?\"jj\":null;goopProducts.push({name:unescape(goopSiteProduct.name),\nid:goopSiteProduct.id,price:goopSiteProduct.price,brand:_websiteBrand,category:goopSiteProduct.category,otherBrands:null!=_goop_other_brand?[_goop_other_brand]:[]});otherBrandsFromTitle=[\"Intel\"];for(var i=0;i\u003CgoopProducts.length;i++){var goopProduct=goopProducts[i];goopProduct.otherBrands=goopProduct.otherBrands||[];for(var goopProductTitle=goopProduct.name.toLowerCase(),j=0;j\u003CotherBrandsFromTitle.length;j++){var otherBrandFromTitle=otherBrandsFromTitle[j];goopProductTitle.split(\/ |\\u00ae\/).some(function(a){return a==\notherBrandFromTitle.toLowerCase()})\u0026\u0026goopProduct.otherBrands.push(otherBrandFromTitle)}}dataLayer.push({goopEcommerce:{detail:{products:goopProducts}}});var goopData=dataLayer.filter(function(a){return\"goopEcommerce\"in a}).reverse()[0];goopData.goopEcommerce.detail.products[0]?(",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '01. 01.' Triggering event: 'goop_product_page_ready'\"),dataLayer.push({event:\"goop_product_page_ready\"})):",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\n\"] '01. 01.' Invalid datalayer object: dataLayer.goopEcommerce.detail.products[0] not found\")}catch(a){try{",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '01. 01.' Error: \"+a)}catch(b){}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '01. 02.'\");var goopProducts=[],otherBrandsFromTitle=[],JJ=\"carefree desitin johnsons johnson's johnson\\u00b4sbaby lagarde listerine lubriderm neutrogena ob reach stayfree sundown\".split(\" \"),_websiteBrand,_goop_other_brand,goopSiteProducts=dataLayer.find(function(a){return\"ecommerce\"in a}).ecommerce.checkout.products;for(i=0;i\u003CgoopSiteProducts.length;i++)_websiteBrand=goopSiteProducts[i].brand.toLowerCase().replace(\/[ \u0026]\/g,\n\"\"),_goop_other_brand=0\u003C=JJ.indexOf(_websiteBrand)?\"jj\":null,goopProducts.push({name:unescape(goopSiteProducts[i].name),id:goopSiteProducts[i].id,price:goopSiteProducts[i].price,brand:_websiteBrand,category:goopSiteProducts[i].category,quantity:goopSiteProducts[i].quantity,otherBrands:null!=_goop_other_brand?[_goop_other_brand]:[]});otherBrandsFromTitle=[\"Intel\"];for(var i=0;i\u003CgoopProducts.length;i++){var goopProduct=goopProducts[i];goopProduct.otherBrands=goopProduct.otherBrands||[];for(var goopProductTitle=\ngoopProduct.name.toLowerCase(),j=0;j\u003CotherBrandsFromTitle.length;j++){var otherBrandFromTitle=otherBrandsFromTitle[j];goopProductTitle.split(\/ |\\u00ae\/).some(function(a){return a==otherBrandFromTitle.toLowerCase()})\u0026\u0026goopProduct.otherBrands.push(otherBrandFromTitle)}}dataLayer.push({goopEcommerce:{checkout:{products:goopProducts}}});var goopData=dataLayer.filter(function(a){return\"goopEcommerce\"in a}).reverse()[0];goopData.goopEcommerce.checkout.products?(",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+\n",["escape",["macro",52],8,16],"+\"] '01. 02.' Triggering event: 'goop_cart_page_ready'\"),dataLayer.push({event:\"goop_cart_page_ready\"})):",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '01. 02.' Invalid datalayer object: dataLayer.goopEcommerce.checkout.products not found\")}catch(a){try{",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '01. 02.' Error: \"+a)}catch(b){}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '01. 03.'\");var goopOrderId=0,goopProducts=[],otherBrandsFromTitle=[],JJ=\"carefree desitin johnsons johnson's johnson\\u00b4sbaby lagarde listerine lubriderm neutrogena ob reach stayfree sundown\".split(\" \"),_websiteBrand,_goop_other_brand;goopOrderId=dataLayer.find(function(a){return\"ecommerce\"in a}).ecommerce.purchase.actionField.id;goopOrderRevenue=dataLayer.find(function(a){return\"ecommerce\"in a}).ecommerce.purchase.actionField.revenue;\nvar goopSiteProducts=dataLayer.find(function(a){return\"ecommerce\"in a}).ecommerce.purchase.products;for(i=0;i\u003CgoopSiteProducts.length;i++)_websiteBrand=goopSiteProducts[i].brand.toLowerCase().replace(\/[ \u0026]\/g,\"\"),_goop_other_brand=0\u003C=JJ.indexOf(_websiteBrand)?\"jj\":null,goopProducts.push({name:unescape(goopSiteProducts[i].name),id:goopSiteProducts[i].id,price:goopSiteProducts[i].price,brand:_websiteBrand,category:goopSiteProducts[i].category,quantity:goopSiteProducts[i].quantity,otherBrands:null!=_goop_other_brand?\n[_goop_other_brand]:[]});otherBrandsFromTitle=[\"Intel\"];for(var i=0;i\u003CgoopProducts.length;i++){var goopProduct=goopProducts[i];goopProduct.otherBrands=goopProduct.otherBrands||[];for(var goopProductTitle=goopProduct.name.toLowerCase(),j=0;j\u003CotherBrandsFromTitle.length;j++){var otherBrandFromTitle=otherBrandsFromTitle[j];goopProductTitle.split(\/ |\\u00ae\/).some(function(a){return a==otherBrandFromTitle.toLowerCase()})\u0026\u0026goopProduct.otherBrands.push(otherBrandFromTitle)}}dataLayer.push({goopEcommerce:{purchase:{actionField:{id:goopOrderId},\nproducts:goopProducts}}});var goopData=dataLayer.filter(function(a){return\"goopEcommerce\"in a}).reverse()[0];0\u003CgoopData.goopEcommerce.purchase.products.length?(",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '01. 03.' Triggering event: 'goop_purchase_page_ready'\"),dataLayer.push({event:\"goop_purchase_page_ready\"})):",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '01. 03.' Invalid datalayer object: dataLayer.goopEcommerce.purchase.products not found or empty\")}catch(a){try{",["escape",["macro",16],8,16],"\u0026\u0026\nconsole.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '01. 03.' Error: \"+a)}catch(b){}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction GoopProduct(c){this.brandSector=c;this.event=\"data_ready_for_\"+this.brandSector.replace(\/[^\\w]\/gi,\"\").toLowerCase();this.brand=this.brandSector.split(",["escape",["macro",91],8,16],")[0];this.version=",["escape",["macro",52],8,16],";",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 01.' GoopProduct Init\");this.getBrandProducts=function(){var b=[],a=dataLayer.filter(function(a){return\"goopEcommerce\"in a}).reverse()[0];if(a.goopEcommerce.detail\u0026\u0026a.goopEcommerce.detail.products\u0026\u0026\n0\u003Ca.goopEcommerce.detail.products.length){a=a.goopEcommerce.detail.products;var c=this;(a[0].brand\u0026\u0026a[0].brand==this.brand||a[0].otherBrands\u0026\u0026a[0].otherBrands.some(function(a){return a==c.brand}))\u0026\u0026b.push(a[0]);0\u003Cb.length?",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 01.' Goop product found: \"+JSON.stringify(b.map(function(a){return a.name}))):",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 01.' Not a Goop product\")}else ",["escape",["macro",16],8,16],"\u0026\u0026\nconsole.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 01.' Error: Incorrect dataLayer structure. See https:\/\/developers.google.com\/tag-manager\/enhanced-ecommerce#details for more details\");return b};this.buildBrandObject=function(){var b=this.getBrandProducts();return 0\u003Cb.length?{ecommerce:{ecommerce:{detail:{products:b}}},remarketing:{ecomm_prodid:b[0].id,ecomm_pagetype:\"product\",ecomm_totalvalue:b[0].price},brandSector:this.brandSector}:null}}\nfunction goopEventTmpl(c){return{event:c,eventCallback:function(){try{var b=dataLayer.filter(function(a){return a.goopBrands}).reverse()[0].goopBrands;",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+b[c].brandSector+\"] '03. ' Tags Fired. Check Google Tag Assistant!\")}catch(a){}}}}\ntry{",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 01.'\");var goopBrands={},goopCookies=",["escape",["macro",92],8,16],";if(0\u003CgoopCookies.length){for(var i=0;i\u003CgoopCookies.length;i++){var goopBrand=goopCookies[i],goopProduct=new GoopProduct(goopBrand),goopBrandObject=goopProduct.buildBrandObject();null!=goopBrandObject\u0026\u0026(goopBrands[goopProduct.event]=goopBrandObject)}if(0\u003CObject.keys(goopBrands).length){dataLayer.push({goopBrands:goopBrands});",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+\n",["escape",["macro",52],8,16],"+\"] '02. 01.' goopBrands pushed to dataLayer\");for(var goopEvent in goopBrands)",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 01.' Triggering event: '\"+goopEvent+\"'\"),dataLayer.push(goopEventTmpl(goopEvent))}}else ",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 01.' No Goop cookies found\")}catch(c){try{",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 01.' Error: \"+c)}catch(b){}};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":95
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction GoopCart(d){this.brandSector=d;this.event=\"data_ready_for_\"+this.brandSector.replace(\/[^\\w]\/gi,\"\").toLowerCase();this.brand=this.brandSector.split(",["escape",["macro",91],8,16],")[0];this.version=",["escape",["macro",52],8,16],";",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 02.' GoopCart Init\");this.getBrandProducts=function(){var b=[],a=dataLayer.filter(function(a){return\"goopEcommerce\"in a}).reverse()[0];if(a.goopEcommerce.checkout\u0026\u0026a.goopEcommerce.checkout.products)if(0\u003C\na.goopEcommerce.checkout.products.length){a=a.goopEcommerce.checkout.products;for(var d=this,c=0;c\u003Ca.length;c++)(a[c].brand\u0026\u0026a[c].brand==this.brand||a[c].otherBrands\u0026\u0026a[c].otherBrands.some(function(a){return a==d.brand}))\u0026\u0026b.push(a[c]);0\u003Cb.length?",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 02.' Goop products found: \"+JSON.stringify(b.map(function(a){return a.name}))):",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\n\"] '02. 02.' No Goop products were found\")}else ",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 02.' No products found in this cart\");else ",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 02.' Error: Incorrect dataLayer structure. See https:\/\/developers.google.com\/tag-manager\/enhanced-ecommerce#add for more details\");return b};this.buildBrandObject=function(){var b=this.getBrandProducts();if(0\u003Cb.length){for(var a=\n[],d=0,c=0;c\u003Cb.length;c++)a.push(b[c].id),d+=b[c].price*(b[c].quantity?b[c].quantity:1);return{ecommerce:{ecommerce:{checkout:{products:b}}},remarketing:{ecomm_prodid:a,ecomm_pagetype:\"cart\",ecomm_totalvalue:d},brandSector:this.brandSector}}return null}}\nfunction goopEventTmpl(d){return{event:d,eventCallback:function(){try{var b=dataLayer.filter(function(a){return a.goopBrands}).reverse()[0].goopBrands;",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+b[d].brandSector+\"] '03. ' Tags Fired. Check Google Tag Assistant!\")}catch(a){}}}}\ntry{",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 02.'\");var goopBrands={},goopCookies=",["escape",["macro",92],8,16],";if(0\u003CgoopCookies.length){for(var i=0;i\u003CgoopCookies.length;i++){var goopBrand=goopCookies[i],goopCart=new GoopCart(goopBrand),goopBrandObject=goopCart.buildBrandObject();null!=goopBrandObject\u0026\u0026(goopBrands[goopCart.event]=goopBrandObject)}if(0\u003CObject.keys(goopBrands).length){dataLayer.push({goopBrands:goopBrands});",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\n\"] '02. 02.' goopBrands pushed to dataLayer\");for(var goopEvent in goopBrands)",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 02.' Triggering event '\"+goopEvent+\"'\"),dataLayer.push(goopEventTmpl(goopEvent))}}else ",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 02.' No Goop cookies found\")}catch(d){try{",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 02.'  Error: \"+d)}catch(b){}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction GoopPurchase(d){this.brandSector=d;this.event=\"purchase_ready_for_\"+this.brandSector.replace(\/[^\\w]\/gi,\"\").toLowerCase();this.brand=this.brandSector.split(",["escape",["macro",91],8,16],")[0];this.version=",["escape",["macro",52],8,16],";",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 03.' GoopPurchase Init\");this.getBrandProducts=function(){var c=[],a=dataLayer.filter(function(a){return\"goopEcommerce\"in a}).reverse()[0];if(a.goopEcommerce.purchase\u0026\u0026a.goopEcommerce.purchase.products\u0026\u0026\n0\u003Ca.goopEcommerce.purchase.products.length){a=a.goopEcommerce.purchase.products;for(var d=this,b=0;b\u003Ca.length;b++)(a[b].brand\u0026\u0026a[b].brand==this.brand||a[b].otherBrands\u0026\u0026a[b].otherBrands.some(function(a){return a==d.brand}))\u0026\u0026c.push(a[b]);0\u003Cc.length?",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 03.' Goop products found: \"+JSON.stringify(c.map(function(a){return a.name}))):",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\n\"] '02. 03.' No Goop products were found\")}else ",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+this.brandSector+\"] '02. 03.' Error: Incorrect dataLayer structure. See https:\/\/developers.google.com\/tag-manager\/enhanced-ecommerce#purchases for more details\");return c};this.buildBrandObject=function(){var c=this.getBrandProducts();if(0\u003Cc.length){for(var a=[],d=0,b=0;b\u003Cc.length;b++)a.push(c[b].id),d+=c[b].price*(c[b].quantity?c[b].quantity:1);b=dataLayer.filter(function(a){return\"goopEcommerce\"in\na}).reverse()[0];return{ecommerce:{ecommerce:{purchase:{actionField:{id:b.goopEcommerce.purchase.actionField.id,revenue:d},products:c}}},remarketing:{ecomm_prodid:a,ecomm_pagetype:\"purchase\",ecomm_totalvalue:d},brandSector:this.brandSector}}return null}}\nfunction goopEventTmpl(d){return{event:d,eventCallback:function(){try{var c=dataLayer.filter(function(a){return a.goopBrands}).reverse()[0].goopBrands;",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\" \"+c[d].brandSector+\"] '03. ' Tags Fired. Check Google Tag Assistant!\")}catch(a){}}}}\ntry{",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 03.'\");var goopBrands={},goopCookies=",["escape",["macro",92],8,16],";if(0\u003CgoopCookies.length){for(var i=0;i\u003CgoopCookies.length;i++){var goopBrand=goopCookies[i],goopPurchase=new GoopPurchase(goopBrand),goopBrandObject=goopPurchase.buildBrandObject();null!=goopBrandObject\u0026\u0026(goopBrands[goopPurchase.event]=goopBrandObject)}if(0\u003CObject.keys(goopBrands).length){dataLayer.push({goopBrands:goopBrands});",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+\n",["escape",["macro",52],8,16],"+\"] '02. 03.' goopBrands pushed to dataLayer\");for(var goopEvent in goopBrands)",["escape",["macro",18],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 03.'  Triggering event '\"+goopEvent+\"\"),dataLayer.push(goopEventTmpl(goopEvent))}}else ",["escape",["macro",17],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 03.' No Goop cookies found\")}catch(d){try{",["escape",["macro",16],8,16],"\u0026\u0026console.log(\"[GOOP \"+",["escape",["macro",52],8,16],"+\"] '02. 03.'  Error: \"+d)}catch(c){}};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":97
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"101155100343004\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=101155100343004\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/4693226.fls.doubleclick.net\/activityi;src\\x3d4693226;type\\x3d;cat\\x3d;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/4693226.fls.doubleclick.net\/activityi;src=4693226;type=;cat=;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Elocation.href=\"https:\/\/www.tiendasjumbo.co\/\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":106
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\");var gaAccounts=",["escape",["macro",25],8,16],",gaID=\"\";for(i=0;i\u003CgaAccounts.length;i++)",["escape",["macro",68],8,16],"==gaAccounts[i].name\u0026\u0026(gaID=gaAccounts[i].id);var productsData=",["escape",["macro",94],8,16],";\nif(\"foods\"==",["escape",["macro",68],8,16],"||\"nonfoods\"==",["escape",["macro",68],8,16],"){ga(\"create\",gaID,\"auto\");ga(\"require\",\"ec\");for(i=0;i\u003CproductsData.length;i++)ga(\"ec:addProduct\",productsData[i]);ga(\"ec:setAction\",\"purchase\",",["escape",["macro",95],8,16],");ga(\"send\",\"pageview\");console.log(",["escape",["macro",68],8,16],")};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edocument.cookie=\"environment\\x3d\"+",["escape",["macro",22],8,16],"+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\");var gaAccounts=",["escape",["macro",25],8,16],";for(i=0;i\u003CgaAccounts.length;i++)",["escape",["macro",68],8,16],"==gaAccounts[i].name\u0026\u0026(ga(\"create\",gaAccounts[i].id,\"auto\"),ga(\"send\",\"pageview\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E$(document).ready(function(){var c,a;$(\"div.category-banner-slider\").hasClass(\"empty\")||$(\".slider\").find(\"a\").each(function(b){$(this).parent().hasClass(\"bx-clone\")||$(this).hasClass(\"bx-clone\")||(a=0==b||b==a?b+1:b,c=$(this).find(\"img\").attr(\"src\"),$(this).attr(\"data-src\",c),$(this).attr(\"data-position\",\"Vtr\"+a),$(this).attr(\"data-mobile\",\"Vtr\"+a))})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":129
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",91,2]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction registerRemoveProductFromCartInNavBar(){$(\".cart-container\").on(\"click\",\".cartSkuRemove\",function(a){console.log(\"---- Se dio click al remover el producto\");var b=$(a.target).parent().parent().parent().find(\".cartSkuName\").first().text();a=$(a.target).parent().parent().parent().find(\".vtexsc-skuQtt\").first().text();void 0!==b\u0026\u0026void 0!==a\u0026\u0026(b=ECStorage.getAllObjects()[b],void 0!==b\u0026\u0026(console.log(\"Producto a retirar del carro: Qty: \"+a),console.log(b),dataLayer.push({event:\"removeFromCart\",\nproductToRemoveECData:{ecommerce:{currencyCode:\"COP\",remove:{products:[b]}}}}),ECStorage.deleteObject(b)))})}\nfunction registerAddToCartInProductPage(){$(\".product-add-to-cart\").on(\"click\",function(a,b){try{if(void 0!=dataLayer[1].productId){var c={brand:dataLayer[1].productBrandName,category:dataLayer[1].productDepartmentName+\"\/\"+dataLayer[1].productCategoryName,id:dataLayer[1].productId,name:dataLayer[1].productName,price:parseInt(dataLayer[1].productPriceTo)};ECImpressions.addToCart(c)}}catch(d){console.log(d)}})}\nfunction registerAddToCartInProductPage2(){try{var a={brand:dataLayer[1].productBrandName,category:dataLayer[1].productDepartmentName+\"\/\"+dataLayer[1].productCategoryName,id:dataLayer[1].productId,name:dataLayer[1].productName,price:parseInt(dataLayer[1].productPriceTo)};ECImpressions.addToCart(a)}catch(b){console.log(b)}}\nvar ECImpressions={impressionsBatchSize:20,impressions:[],currentImpressions:[],impressionsSentToGTM:0,push:function(a){a.position=ECImpressions.impressions.length+1;var b=window.location.pathname;void 0!=window.location.search\u0026\u0026null!=window.location.search\u0026\u0026\"\"!=window.location.search\u0026\u0026(b+=window.location.search);a.list=b;ECImpressions.impressions.push(a);ECImpressions.currentImpressions.push(a);0==ECImpressions.impressions.length%ECImpressions.impressionsBatchSize\u0026\u0026(dataLayer.push({productImpressionsECData:void 0}),\ndataLayer.push({event:\"enhancedEcommerceImpressions\",productImpressionsECData:{ecommerce:{impressions:ECImpressions.currentImpressions}}}),ECImpressions.impressionsSentToGTM++,ECImpressions.currentImpressions=[])},sendPendingImpressions:function(){0\u003CECImpressions.currentImpressions.length\u0026\u0026(dataLayer.push({productImpressionsECData:void 0}),dataLayer.push({event:\"enhancedEcommerceImpressions\",productImpressionsECData:{ecommerce:{impressions:ECImpressions.currentImpressions}}}),ECImpressions.impressionsSentToGTM++,\nECImpressions.currentImpressions=[])},fixProductName:function(a){return fixedName=a.replace(\/\u0026quot;\/g,'\"'),fixedName},fixBrand:function(a){return fixedBrand=$(a).html(),fixedBrand.toUpperCase()},fixPrice:function(a){return a=a.replace(\",00\",\"\"),a=a.replace(\"$\",\"\"),a=a.replace(\/\\.\/g,\"\"),intPrice=parseInt(a),0==intPrice\u0026\u0026(intPrice=void 0),intPrice},fixCategory:function(a,b){return a+\"\/\"+b},productClick:function(a){console.log(\"Se dio click al producto:\"+a);var b=window.location.pathname;void 0!=window.location.search\u0026\u0026\nnull!=window.location.search\u0026\u0026\"\"!=window.location.search\u0026\u0026(b+=window.location.search);productClickECEvent={event:\"productClick\",productClickECData:{ecommerce:{click:{actionField:{list:b},products:[a]}}}};dataLayer.push(productClickECEvent)},getProductName:function(a){return $(\"#\"+a).text()},addToCart:function(a){a.quantity=1;delete a.position;delete a.list;dataLayer.push({event:\"addToCart\",productToAddECData:{ecommerce:{currencyCode:\"COP\",add:{products:[a]}}}});try{ECStorage.saveObject(a)}catch(b){console.log(b)}}},\nECPromoImpressions={impressionsBatchSize:20,impressions:[],currentImpressions:[],impressionsSentToGTM:0,push:function(a){ECPromoImpressions.impressions.push(a);ECPromoImpressions.currentImpressions.push(a);0==ECPromoImpressions.impressions.length%ECPromoImpressions.impressionsBatchSize\u0026\u0026(dataLayer.push({event:\"enhancedEcommercePromoImpressions\",promoImpressionsECData:{ecommerce:{promoView:{promotions:ECPromoImpressions.currentImpressions}}}}),ECPromoImpressions.impressionsSentToGTM++,ECPromoImpressions.currentImpressions=\n[])},promoClick:function(a){a={event:\"promotionClick\",promoClickECData:{ecommerce:{promoClick:{promotions:[a]}}}};dataLayer.push(a)},sendPendingImpressions:function(){0\u003CECPromoImpressions.currentImpressions.length\u0026\u0026(dataLayer.push({promoImpressionsECData:void 0}),dataLayer.push({event:\"enhancedEcommercePromoImpressions\",promoImpressionsECData:{ecommerce:{promoView:{promotions:ECPromoImpressions.currentImpressions}}}}),ECPromoImpressions.impressionsSentToGTM++,ECPromoImpressions.currentImpressions=\n[])}},ECStorage={name:\"ec_ga_products\",saveObject:function(a){var b=ECStorage.getAllObjects();(b=b||{})[a.name]=a;localStorage.setItem(ECStorage.name,JSON.stringify(b))},deleteObject:function(a){var b=ECStorage.getAllObjects();delete (b=b||{})[a.name];localStorage.setItem(ECStorage.name,JSON.stringify(b))},getAllObjects:function(){return JSON.parse(localStorage.getItem(ECStorage.name))||{}}};\n$(document).ready(function(){registerRemoveProductFromCartInNavBar();registerAddToCartInProductPage();ECImpressions.sendPendingImpressions();$(\"[data-position]\").each(function(){var a=$(this).attr(\"data-position\");if(a.length){var b=\"\",c=\"\";$(this).find(\"img\").length?(b=$(this).find(\"img\").attr(\"data-src\")?$(this).find(\"img\").attr(\"data-src\").split(\"\/\"):$(this).find(\"img\").attr(\"src\").split(\"\/\"),b=b[b.length-1].replace(\".jpg\",\"\")):(b=$(this).attr(\"data-src\")?$(this).attr(\"data-src\").split(\"\/\"):$(this).css(\"background-image\").split(\"\/\"),\nb=b[b.length-1].replace(\/^url|[\\(\\)\"]\/g,\"\").replace(\".jpg\",\"\"));c={id:b,name:b,creative:b,position:a};ECPromoImpressions.push(c);$(this).on(\"click\",function(){ECPromoImpressions.promoClick(c)})}});ECPromoImpressions.sendPendingImpressions()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_name:",["escape",["macro",96],8,16],".ecommerce.click.products[0].name,content_category:",["escape",["macro",96],8,16],".ecommerce.click.products[0].category,content_ids:[",["escape",["macro",96],8,16],".ecommerce.click.products[0].id],content_type:\"product\",value:",["escape",["macro",96],8,16],".ecommerce.click.products[0].price,currency:\"COP\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){try{var a=document.createElement(\"div\");a.setAttribute(\"chaordic\",\"top\");var b=document.getElementsByClassName(\"cart-products-items\")[0];b.parentNode.insertBefore(a,b.nextSibling)}catch(c){console.warn(\"Chaordic \\x3cdiv\\x3e cannot be added.\")}},3E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=$(\".cconf-alert .fl .db.dark-green span\").html().replace(\"con \\u00e9xito\",\"satisfactoriamente\");$(\".cconf-alert .fl .db.dark-green span\").text(a)},500);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":147
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _imMktOptions=_imMktOptions||{_setType:\"Adq\",_setDomain:\"www.beneficiosjumbo.co\",_amount:",["escape",["macro",3],8,16],"};(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"api.icommarketing.com\/js\/icomMkt_tracking.js?time\\x3d\"+Number(new Date);var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\t\u003Cdiv style=\"display:inline;\"\u003E  \n\t\t\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/api.icommarketing.com\/pixel.aspx?opt=Adq\u0026amp;domain=www.beneficiosjumbo.co\u0026amp;amount=",["escape",["macro",3],12],"\"\u003E\n\t\u003C\/div\u003E\n\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":161
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{Fizzmod.Utils.getSKU(skuJson.skus[0].sku).done(function(b){if(b.length){var c=b[0].items[0],d=c.ean;c=c.ean;b=b[0].brand;var e=\"6859\",f=\"f5\",g=document.getElementsByTagName(\"head\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/media.flixfacts.com\/js\/loader.js\";a.setAttribute(\"data-flix-distributor\",e);a.setAttribute(\"data-flix-language\",f);a.setAttribute(\"data-flix-brand\",b);a.setAttribute(\"data-flix-ean\",c);a.setAttribute(\"data-flix-mpn\",d);a.setAttribute(\"data-flix-button\",\n\"flix-minisite\");a.setAttribute(\"data-flix-inpage\",\"flix-inpage\");a.setAttribute(\"data-flix-fallback-language\",\"\");a.setAttribute(\"data-flix-price\",\"\");g.appendChild(a);$(\".content-description .loader\").hide()}})}catch(b){console.warn(\"Flix Media product not found\")};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":162
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a._WPN=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/d12zyq17vm1xwx.cloudfront.net\/v2\/wpn.min.js\",\"wpn\");wpn(\"initialize\",2070,\"notifications-icommkt.com\",\"track-icommkt.com:8081\");wpn(\"checkSubscription\");wpn(\"pageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar loader=document.querySelectorAll(\".content \\x3e .loader\")[0],collectionRow=document.getElementsByClassName(\"n6colunas\");console.log(\"si se esta rende\");loader.style.display=\"block\";if(collectionRow[0].children[1].children)for(var lists=collectionRow[0].children[1].children,i=0;i\u003Clists.length;i++)0==i%2\u0026\u0026(lists[i].className+=\" col-6 col-sm-6 col-md-4 col-lg-4 box-white\");\nsetTimeout(function(){loader.style.display=\"none\";document.getElementsByClassName(\"product-shelf-wrapper\")[0].style.opacity=1},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__opt",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-P37H9TW",
      "vtp_gaSettings":["macro",46],
      "tag_id":118
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",44],
      "arg1":"\/carrito"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"search-autocomplete-input"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"MI CARRITO"
    },{
      "function":"_re",
      "arg0":["macro",48],
      "arg1":"1|2"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"BUSCAR POR LISTA"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"\/"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",50],
      "arg1":"(^$|((^|,)2592664_70($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"ajaxSuscritos"
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"data_ready_for_.*"
    },{
      "function":"_sw",
      "arg0":["macro",54],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"purchase_ready_for_.*"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"undefined"
    },{
      "function":"_sw",
      "arg0":["macro",57],
      "arg1":"undefined"
    },{
      "function":"_sw",
      "arg0":["macro",59],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"productView"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"orderPlaced"
    },{
      "function":"_cn",
      "arg0":["macro",62],
      "arg1":"AppJumbo"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"homeView"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"categoryView"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"departmentView"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"^\/$|\\\/checkout|\\\/cart|\\\/checkout\\\/\\#\\\/email|\\\/checkout\\\/\\#\\\/cart|\\\/checkout\\\/#\\\/orderform|\\\/checkout\\\/\\#\\\/profile|\\\/checkout\\\/\\#\\\/shipping|\\\/checkout\\\/\\#\\\/payment|\\\/checkout\\\/orderPlaced"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"^\/cart$"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"internalSiteSearchView"
    },{
      "function":"_cn",
      "arg0":["macro",66],
      "arg1":"order-details__repeat-order"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"banner-bottom-mobile|googleplay-btn|appstore-btn"
    },{
      "function":"_re",
      "arg0":["macro",50],
      "arg1":"(^$|((^|,)2592664_182($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"foods|nonfoods"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",50],
      "arg1":"(^$|((^|,)2592664_197($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"chatIniciado"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"transferidoChatHumano"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"OfertasChatbot"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"addToCartChat"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"ConsultaProductoChatbot"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"chatbotAction"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"PageviewVirtual"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"productImpression"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"productClick"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"checkoutOption"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"PromoImpressions"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"detail"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"removeFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"email"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"shipping"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"profile"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"payment"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"pageLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"promotionClick"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":".checkout\\\/orderPlaced\\\/."
    },{
      "function":"_cn",
      "arg0":["macro",42],
      "arg1":"checkout"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"\\\/p$"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"cartLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"cart"
    },{
      "function":"_cn",
      "arg0":["macro",44],
      "arg1":"\/cart"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/checkout\/"
    },{
      "function":"_ew",
      "arg0":["macro",49],
      "arg1":"\/cart"
    },{
      "function":"_ew",
      "arg0":["macro",49],
      "arg1":"\/p"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/orderPlaced\/"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"goop_product_page_ready"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"goop_cart_page_ready"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"goop_purchase_page_ready"
    },{
      "function":"_cn",
      "arg0":["macro",44],
      "arg1":"\/especiales\/mastercard\/uefa"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/carrito"
    },{
      "function":"_eq",
      "arg0":["macro",93],
      "arg1":"mercado.tiendasjumbo.co"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"\\\/checkout|\\\/cart|\\\/checkout\\\/\\#\\\/email|\\\/checkout\\\/\\#\\\/cart|\\\/checkout\\\/#\\\/orderform|\\\/checkout\\\/\\#\\\/profile|\\\/checkout\\\/\\#\\\/shipping|\\\/checkout\\\/\\#\\\/payment|\\\/checkout\\\/orderPlaced"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":".checkout\\\/orderPlaced\\\/"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"^\/$|\\\/cart|\\\/checkout\\\/|\\\/checkout\\\/\\#\\\/email|\\\/checkout\\\/\\#\\\/profile|\\\/checkout\\\/\\#\\\/shipping|\\\/checkout\\\/\\#\\\/payment|\\\/checkout\\\/orderPlaced|\\\/p$"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"\\\/$"
    },{
      "function":"_eq",
      "arg0":["macro",44],
      "arg1":"\/asus"
    }],
  "rules":[
    [["if",0,1],["add",2,24,26]],
    [["if",1],["unless",2],["add",3]],
    [["if",3,4],["add",4]],
    [["if",4,5],["add",5]],
    [["if",4,6],["add",6]],
    [["if",4,7],["add",7]],
    [["if",8,9,10],["add",8]],
    [["if",11],["add",9]],
    [["if",13],["unless",12],["add",10]],
    [["if",15],["unless",14],["add",10]],
    [["if",13],["unless",16],["add",11]],
    [["if",15],["unless",17],["add",11]],
    [["if",15],["unless",14,18],["add",12]],
    [["if",1],["add",13,14,1,89,90,51,52,53,54,55,56,57,58,59,60,78,97,98]],
    [["if",19],["add",15,67,77,20]],
    [["if",20],["add",16,88,21,27,62,65,95]],
    [["if",20,21],["add",17]],
    [["if",22],["add",18,71]],
    [["if",23],["add",19,19]],
    [["if",24],["add",19]],
    [["if",1,26],["add",22]],
    [["if",27],["add",23,70]],
    [["if",4,28],["add",25]],
    [["if",9,29,30],["add",28]],
    [["if",19,31],["add",29]],
    [["if",32],["add",30,38,42]],
    [["if",33,34],["add",31]],
    [["if",35],["add",32]],
    [["if",36],["add",33]],
    [["if",37],["add",34]],
    [["if",38],["add",35]],
    [["if",39],["add",36]],
    [["if",40],["add",37]],
    [["if",41],["add",39]],
    [["if",42],["add",40]],
    [["if",43],["add",41]],
    [["if",44],["add",43]],
    [["if",45],["add",44]],
    [["if",46],["add",45]],
    [["if",47],["add",46]],
    [["if",48],["add",47]],
    [["if",49],["add",48]],
    [["if",50],["add",48]],
    [["if",51],["add",48]],
    [["if",52],["add",48,68]],
    [["if",53,54],["add",49]],
    [["if",55],["add",50]],
    [["if",1,56],["add",61]],
    [["if",1,57],["add",63,64]],
    [["if",32,58],["add",66]],
    [["if",59],["add",69]],
    [["if",60],["add",72,73,74]],
    [["if",61,62],["add",75,76,91,92,94]],
    [["if",62,65],["unless",63,64],["add",79]],
    [["if",52,63],["add",80]],
    [["if",20,66],["add",81]],
    [["if",67],["add",82]],
    [["if",68],["add",83]],
    [["if",69],["add",84]],
    [["if",62,70],["add",85,86]],
    [["if",1],["unless",71],["add",0]],
    [["if",1,72],["add",87]],
    [["if",32,76],["add",93]],
    [["if",1,74],["add",96],["block",90]],
    [["if",1,77],["add",99]],
    [["if",1,25],["block",19]],
    [["if",1,73],["block",89]],
    [["if",62,75],["block",91,92]]]
},
"runtime":[
[],[]
]



};
var aa,ca=this||self,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ia=function(a){return"function"==typeof a},ja=function(a){return"string"==typeof a},ka=function(a){return"number"==typeof a&&!isNaN(a)},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},na=function(a,b){if(a&&la(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ka(a)||
!ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(la(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ba=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ca=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Da=function(a){if(null==a)return String(a);var b=Ca.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ea=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Fa=function(a){if(!a||"object"!=Da(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ea(a,"constructor")&&!Ea(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ea(a,b)},Ga=function(a,b){var c=b||("array"==Da(a)?[]:{}),d;for(d in a)if(Ea(a,d)){var e=a[d];"array"==Da(e)?("array"!=Da(c[d])&&(c[d]=[]),c[d]=Ga(e,c[d])):Fa(e)?(Fa(c[d])||(c[d]={}),c[d]=Ga(e,c[d])):c[d]=e}return c};var Ha={},Ia=function(a,b){Ha[a]=Ha[a]||[];Ha[a][b]=!0};var f=window,u=document,Ja=navigator,Ka=u.currentScript&&u.currentScript.src,La=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ma=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Na=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ma(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Oa=function(){if(Ka){var a=Ka.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Qa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ma(c,b);void 0!==a&&(c.src=a);return c},Ra=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Sa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ta=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Va=function(a){var b=
u.getElementById(a);if(b&&Ua(b,"id")!=a){Ia("TAGGING",1);for(var c=1;c<document.all[a].length;c++)if(Ua(document.all[a][c],"id")==a)return document.all[a][c]}return b},Ua=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;
for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a=/:[0-9]+$/,ab=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},db=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=bb(a.protocol)||bb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace($a,"").toLowerCase());var g=b,h,k=bb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=cb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace($a,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
ma(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=ab(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},bb=function(a){return a?a.replace(":","").toLowerCase():""},cb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},eb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace($a,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var fb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},ib=function(a,b,c,d){var e=gb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=hb(e,function(g){return g.zb},b);if(1===e.length)return e[0].id;e=hb(e,function(g){return g.Sa},c);return e[0]?e[0].id:void 0}};
function jb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=fb(b,e).indexOf(c)}
var mb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=kb(),x=0;x<v.length;++x){var y="none"!=v[x]?v[x]:void 0;if(!lb(y,t)&&jb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!lb(p,t)&&jb(m,a,l)}return k};function hb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function gb(a,b){for(var c=[],d=fb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),zb:1*k[0]||1,Sa:1*k[1]||1}))}}return c}
var nb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,pb=/(^|\.)doubleclick\.net$/i,lb=function(a,b){return pb.test(document.location.hostname)||"/"===b&&nb.test(a)},kb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var qb=[],rb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},sb=function(a){return rb[a]},tb=/[\x00\x22\x26\x27\x3c\x3e]/g;var xb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,yb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},zb=function(a){return yb[a]};qb[7]=function(a){return String(a).replace(xb,zb)};
qb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(xb,zb)+"'"}};var Gb=/['()]/g,Hb=function(a){return"%"+a.charCodeAt(0).toString(16)};qb[12]=function(a){var b=
encodeURIComponent(String(a));Gb.lastIndex=0;return Gb.test(b)?b.replace(Gb,Hb):b};var Ib=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Jb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Kb=function(a){return Jb[a]};qb[16]=function(a){return a};var Mb=[],Nb=[],Ob=[],Pb=[],Qb=[],Rb={},Sb,Tb,Ub,Vb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Wb=function(a){var b=a["function"];if(!b)throw Error("Error: No function name given for function call.");var c=!!Rb[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?Rb[b](d):(void 0)(b,d)},Yb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Xb(a[e],b,c));return d},
Zb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Rb[b];return c?c.priorityOverride||0:0},Xb=function(a,b,c){if(la(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Xb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Mb[g];if(!h||b.qc(h))return;c[g]=!0;try{var k=Yb(h,b,c);k.vtp_gtmEventId=b.id;d=Wb(k);Ub&&(d=Ub.kf(d,k))}catch(x){b.Ld&&b.Ld(x,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[Xb(a[l],b,c)]=Xb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Xb(a[n],b,c);Tb&&(m=m||p===Tb.ob);d.push(p)}return Tb&&m?Tb.pf(d):d.join("");case "escape":d=Xb(a[1],b,c);if(Tb&&la(a[1])&&"macro"===a[1][0]&&Tb.Qf(a))return Tb.Zf(d);d=String(d);for(var t=2;t<a.length;t++)qb[a[t]]&&(d=qb[a[t]](d));return d;case "tag":var q=a[1];if(!Pb[q])throw Error("Unable to resolve tag reference "+q+".");return d={xd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=$b(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},$b=function(a,b,c){try{return Sb(Yb(a,b,c))}catch(d){JSON.stringify(a)}return null};var ac=function(){var a=function(b){return{toString:function(){return b}}};return{Vc:a("convert_case_to"),Wc:a("convert_false_to"),Xc:a("convert_null_to"),Yc:a("convert_true_to"),Zc:a("convert_undefined_to"),qa:a("function"),Be:a("instance_name"),Ce:a("live_only"),De:a("malware_disabled"),Dg:a("original_vendor_template_id"),Ee:a("once_per_event"),nd:a("once_per_load"),od:a("setup_tags"),Fe:a("tag_id"),pd:a("teardown_tags")}}();var bc=null,ec=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];bc=cc(a);for(var e=0;e<Nb.length;e++){var g=Nb[e],h=dc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Pb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},dc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=bc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=bc(e[g]);if(null===h)return null;
if(h)return!1}return!0},cc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=$b(Ob[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var fc,gc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Ve&&(l["fix_"+m]=!0),l.yd=l.yd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,D:q.D,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,x,y,w,A){var B=y||w||A||g.test(x)&&x||null,C=document.createElement("div");C.innerHTML=B;r[x]=C.textContent||C.innerText||B});return{tagName:q[1],D:r,Xa:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.yd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Jd=function(){return this[this.length-1]};v.xc=function(C){var D=this.Jd();return D&&D.tagName&&D.tagName.toUpperCase()===C.toUpperCase()};v.jf=
function(C){for(var D=0,H;H=this[D];D++)if(H.tagName===C)return!0;return!1};var x=function(C){C&&"startTag"===C.type&&(C.Xa=q.test(C.tagName)||C.Xa);return C},y=t,w=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(C){var D=C.tagName;"TR"===D.toUpperCase()&&v.xc("TABLE")?(k="<TBODY>"+k,B()):l.Lg&&r.test(D)&&v.jf(D)?v.xc(D)?w():(k="</"+C.tagName+">"+k,B()):C.Xa||v.push(C)},endTag:function(C){v.Jd()?l.yf&&!v.xc(C.tagName)?w():v.pop():l.yf&&(y(),B())}},B=function(){var C=k,D=x(y());k=C;if(D&&
A[D.type])A[D.type](D)};t=function(){B();return x(y())}}();return{append:function(q){k+=q},fg:t,Rg:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},Sg:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Yg="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Ug=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Zg=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.D){var t=m.D[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Xa?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Kg=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.$e=a.$e||!b[h]&&h;fc=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Le:a,Me:a,Ne:a,Oe:a,We:a,Xe:function(p){return p},done:a,error:function(p){throw p;},jg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var x="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(x);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(x,
v):q.removeAttribute(x)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,Ya:v.defaultView||v.parentWindow,wa:v,Eb:fc("",{Ve:!0}),cc:[q],Fc:"",Gc:v.createElement(q.nodeName),Va:[],ka:[]});p(this.Gc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.ka,arguments);for(var q;!this.yb&&this.ka.length;)q=this.ka.shift(),"function"===typeof q?this.df(q):this.Rc(q)};t.prototype.df=function(q){var r={type:"function",value:q.name||q.toString()};this.Cc(r);q.call(this.Ya,this.wa);this.Pd(r)};
t.prototype.Rc=function(q){this.Eb.append(q);for(var r,v=[],x,y;(r=this.Eb.fg())&&!(x=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.Ag(v);x&&this.Ef(r);y&&this.Ff(r)};t.prototype.Ag=function(q){var r=this.af(q);r.rd&&(r.nc=this.Fc+r.rd,this.Fc+=r.dg,this.Gc.innerHTML=r.nc,this.xg())};t.prototype.af=function(q){var r=this.cc.length,v=[],x=[],y=[];c(q,function(w){v.push(w.text);if(w.D){if(!/^noscript$/i.test(w.tagName)){var A=
r++;x.push(w.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==w.D.id&&"ps-style"!==w.D.id&&y.push("atomicTag"===w.type?"":"<"+w.tagName+" data-ps-proxyof="+A+(w.Xa?" />":">"))}}else x.push(w.text),y.push("endTag"===w.type?w.text:"")});return{$g:q,raw:v.join(""),rd:x.join(""),dg:y.join("")}};t.prototype.xg=function(){for(var q,r=[this.Gc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.cc[p(q,"id")]=q,p(q,"id",null));var x=q.parentNode&&p(q.parentNode,"proxyof");
x&&this.cc[x].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Ef=function(q){var r=this.Eb.clear();r&&this.ka.unshift(r);q.src=q.D.src||q.D.Eg;q.src&&this.Va.length?this.yb=q:this.Cc(q);var v=this;this.zg(q,function(){v.Pd(q)})};t.prototype.Ff=function(q){var r=this.Eb.clear();r&&this.ka.unshift(r);q.type=q.D.type||q.D.Fg||"text/css";this.Bg(q);r&&this.write()};t.prototype.Bg=function(q){var r=this.cf(q);this.Of(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.wa.createTextNode(q.content)))};t.prototype.cf=function(q){var r=this.wa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.D,function(v,x){r.setAttribute(v,x)});return r};t.prototype.Of=function(q){this.Rc('<span id="ps-style"/>');var r=this.wa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Cc=function(q){q.Vf=this.ka;this.ka=[];this.Va.unshift(q)};t.prototype.Pd=function(q){q!==this.Va[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Va.shift(),this.write.apply(this,q.Vf),!this.Va.length&&this.yb&&(this.Cc(this.yb),this.yb=null))};t.prototype.zg=function(q,r){var v=this.bf(q),x=this.pg(v),y=this.options.Le;q.src&&(v.src=q.src,this.ng(v,x?y:function(){r();y()}));try{this.Nf(v),q.src&&!x||r()}catch(w){this.options.error(w),r()}};t.prototype.bf=function(q){var r=this.wa.createElement(q.tagName);d(q.D,function(v,x){r.setAttribute(v,x)});q.content&&(r.text=q.content);return r};t.prototype.Nf=function(q){this.Rc('<span id="ps-script"/>');
var r=this.wa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.ng=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var x=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();x(y);r()}})};t.prototype.pg=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.jg&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var x=r.shift(),y;x&&(y=x[x.length-1],y.Me(),x.stream=t.apply(null,x),y.Ne())}function t(x,y,w){function A(H){H=w.Xe(H);v.write(H);w.Oe(H)}v=new n(x,w);v.id=q++;v.name=w.name||v.id;var B=x.ownerDocument,C={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(h(arguments).join(""))},writeln:function(){return A(h(arguments).join("")+"\n")}});var D=v.Ya.onerror||a;v.Ya.onerror=function(H,S,T){w.error({Og:H+
" - "+S+":"+T});D.apply(v.Ya,arguments)};v.write(y,function(){e(B,C);v.Ya.onerror=D;w.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(x,y,w){"function"===typeof w&&(w={done:w});w=g(w,k);x=/^#/.test(x)?l.document.getElementById(x.substr(1)):x.Mg?x[0]:x;var A=[x,y,w];x.Yf={cancel:function(){A.stream?A.stream.abort():A[1]=a}};w.We(A);r.push(A);v||p();return x.Yf},{streams:{},Qg:r,Gg:n})}();gc=l.postscribe}})();var vc={},wc=null,xc=Math.random();vc.m="GTM-M6LSKN";vc.sb="521";var yc="www.googletagmanager.com/gtm.js";var zc=yc,Ac=null,Bc=null,Cc=null,Dc="//www.googletagmanager.com/a?id="+vc.m+"&cv=160",Ec={},Fc={},Gc=function(){var a=wc.sequence||0;wc.sequence=a+1;return a};var E=function(a,b,c,d){return(2===Hc()||d||"http:"!=f.location.protocol?a:b)+c},Hc=function(){var a=Oa(),b;if(1===a)a:{var c=zc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Ic=!1;
var Mc=function(){return"&tc="+Pb.filter(function(a){return a}).length},Vc=function(){Nc&&(f.clearTimeout(Nc),Nc=void 0);void 0===Oc||Pc[Oc]&&!Qc||(Rc[Oc]||Sc.Sf()||0>=Tc--?(Ia("GTM",1),Rc[Oc]=!0):(Sc.hg(),Ra(Uc()),Pc[Oc]=!0,Qc=""))},Uc=function(){var a=Oc;if(void 0===a)return"";for(var b,c=[],d=Ha.GTM||[],e=0;e<d.length;e++)d[e]&&(c[Math.floor(e/6)]^=1<<e%6);for(var g=0;g<c.length;g++)c[g]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g]||0);b=c.join("");return[Wc,Pc[a]?
"":"&es=1",Xc[a],b?"&u="+b:"",Mc(),Qc,"&z=0"].join("")},Yc=function(){return[Dc,"&v=3&t=t","&pid="+oa(),"&rv="+vc.sb].join("")},Zc="0.005000">Math.random(),Wc=Yc(),$c=function(){Wc=Yc()},Pc={},Qc="",Oc=void 0,Xc={},Rc={},Nc=void 0,Sc=function(a,b){var c=0,d=0;return{Sf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},hg:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Tc=1E3,ad=function(a,b){if(Zc&&!Rc[a]&&Oc!==a){Vc();Oc=a;Qc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):
"*";Xc[a]="&e="+c+"&eid="+a;Nc||(Nc=f.setTimeout(Vc,500))}},bd=function(a,b,c){if(Zc&&!Rc[a]&&b){a!==Oc&&(Vc(),Oc=a);var d=c+String(b[ac.qa]||"").replace(/_/g,"");Qc=Qc?Qc+"."+d:"&tr="+d;Nc||(Nc=f.setTimeout(Vc,500));2022<=Uc().length&&Vc()}};var cd={},dd=new pa,ed={},fd={},jd={name:"dataLayer",set:function(a,b){Ga(gd(a,b),ed);hd()},get:function(a){return id(a,2)},reset:function(){dd=new pa;ed={};hd()}},id=function(a,b){if(2!=b){var c=dd.get(a);if(Zc){var d=kd(a);c!==d&&Ia("GTM",5)}return c}return kd(a)},kd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:md(d)},md=function(a){for(var b=ed,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var pd=function(a,b){fd.hasOwnProperty(a)||(dd.set(a,b),Ga(gd(a,b),ed),hd())},gd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},hd=function(a){ra(fd,function(b,c){dd.set(b,c);Ga(gd(b,void 0),ed);Ga(gd(b,c),ed);a&&delete fd[b]})},qd=function(a,b,c){cd[a]=cd[a]||{};var d=1!==c?kd(b):dd.get(b);"array"===Da(d)||"object"===Da(d)?cd[a][b]=Ga(d):cd[a][b]=d},rd=function(a,b){if(cd[a])return cd[a][b]};var sd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),td={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ud={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},vd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var xd=function(a){var b=id("gtm.whitelist");b&&Ia("GTM",9);var c=b&&Ba(ua(b),td),d=id("gtm.blacklist");d||(d=id("tagTypeBlacklist"))&&Ia("GTM",3);
d?Ia("GTM",8):d=[];wd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ma(ua(d),"google")&&Ia("GTM",2);var e=d&&Ba(ua(d),ud),g={};return function(h){var k=h&&h[ac.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Fc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ma(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
ma(c,l[p])){Ia("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=ma(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&Ia("GTM",10);t=r}}var v=!m||t;v||!(0<=ma(l,"sandboxedScript"))||c&&-1!==ma(c,"sandboxedScript")||(v=qa(e,vd));return g[k]=v}},wd=function(){return sd.test(f.location&&f.location.hostname)};var yd={kf:function(a,b){b[ac.Vc]&&"string"===typeof a&&(a=1==b[ac.Vc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ac.Xc)&&null===a&&(a=b[ac.Xc]);b.hasOwnProperty(ac.Zc)&&void 0===a&&(a=b[ac.Zc]);b.hasOwnProperty(ac.Yc)&&!0===a&&(a=b[ac.Yc]);b.hasOwnProperty(ac.Wc)&&!1===a&&(a=b[ac.Wc]);return a}};var zd={active:!0,isWhitelisted:function(){return!0}},Ad=function(a){var b=wc.zones;!b&&a&&(b=wc.zones=a());return b};var Bd=!1,Cd=0,Dd=[];function Ed(a){if(!Bd){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Bd=!0;for(var e=0;e<Dd.length;e++)z(Dd[e])}Dd.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function Fd(){if(!Bd&&140>Cd){Cd++;try{u.documentElement.doScroll("left"),Ed()}catch(a){f.setTimeout(Fd,50)}}}var Gd=function(a){Bd?a():Dd.push(a)};var Hd={};function Id(a){for(var b=Hd[a]||[],c=0;c<b.length;c++)b[c]();Hd[a]={push:function(d){d(vc.m)}}}var Ld=function(a,b,c){ia(b)&&Jd(a,b);c&&f.setTimeout(function(){return Id(a)},Number(c));return Kd(a)},Jd=function(a,b){Hd[a]=Hd[a]||[];Hd[a].push(ya(function(){return z(function(){return b(vc.m)})}))};function Kd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Id(a)})},Te:function(){d=!0;b>=c&&Id(a)}}};var Md=function(){function a(d){return!ka(d)||0>d?0:d}if(!wc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ka(jd.get("gtm.start"))?jd.get("gtm.start"):0;wc._li={cst:a(c-b),cbt:a(Bc-b)}}};var Qd=!1,Rd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Sd=!1;
var Td=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||Ia("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Md();return f[b]},Ud=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Rd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Wd=function(){},Vd=function(){return f.GoogleAnalyticsObject||"ga"},Xd=!1;var de=function(a){};function ce(a,b){a.containerId=vc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ee(a,b,c,d){var e=Pb[a],g=fe(a,b,c,d);if(!g)return null;var h=Xb(e[ac.od],c,[]);if(h&&h.length){var k=h[0];g=ee(k.index,{I:g,O:1===k.xd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function fe(a,b,c,d){function e(){if(g[ac.De])k();else{var x=Yb(g,c,[]),y=!1;x.vtp_gtmOnSuccess=function(){if(!y){y=!0;bd(c.id,Pb[a],"5");h()}};x.vtp_gtmOnFailure=function(){if(!y){y=!0;bd(c.id,Pb[a],"6");k()}};x.vtp_gtmTagId=g.tag_id;x.vtp_gtmEventId=c.id;bd(c.id,g,"1");try{Wb(x)}catch(w){de(w);bd(c.id,g,"7");y||(y=!0,k())}}}var g=Pb[a],h=b.I,k=b.O,l=b.terminate;if(c.qc(g))return null;var m=Xb(g[ac.pd],c,[]);if(m&&m.length){var n=m[0],p=ee(n.index,{I:h,O:k,terminate:l},c,d);if(!p)return null;h=
p;k=2===n.xd?l:p}if(g[ac.nd]||g[ac.Ee]){var t=g[ac.nd]?Qb:c.rg,q=h,r=k;if(!t[a]){e=ya(e);var v=ge(a,t,e);h=v.I;k=v.O}return function(){t[a](q,r)}}return e}function ge(a,b,c){var d=[],e=[];b[a]=he(d,e,c);return{I:function(){b[a]=ie;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=je;for(var g=0;g<e.length;g++)e[g]()}}}function he(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ie(a){a()}function je(a,b){b()};var me=function(a,b){for(var c=[],d=0;d<Pb.length;d++)if(a.Ra[d]){var e=Pb[d];var g=b.add();try{var h=ee(d,{I:g,O:g,terminate:g},a,d);h?c.push({Zd:d,b:Zb(e),xf:h}):(ke(d,a),g())}catch(l){g()}}b.Te();c.sort(le);for(var k=0;k<c.length;k++)c[k].xf();return 0<c.length};function le(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Zd,k=b.Zd;g=h>k?1:h<k?-1:0}return g}
function ke(a,b){if(!Zc)return;var c=function(d){var e=b.qc(Pb[d])?"3":"4",g=Xb(Pb[d][ac.od],b,[]);g&&g.length&&c(g[0].index);bd(b.id,Pb[d],e);var h=Xb(Pb[d][ac.pd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ne=!1,oe=function(a,b,c,d,e){if("gtm.js"==b){if(ne)return!1;ne=!0}ad(a,b);var g=Ld(a,d,e);qd(a,"event");qd(a,"ecommerce",1);qd(a,"gtm");var h={id:a,name:b,qc:xd(c),Ra:[],rg:[],Ld:function(p){Ia("GTM",6);de(p)}};h.Ra=ec(h);var k=me(h,g);"gtm.js"!==b&&"gtm.sync"!==b||Wd();if(!k)return k;for(var l={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,
__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},m=0;m<h.Ra.length;m++)if(h.Ra[m]){var n=Pb[m];if(n&&!l[n[ac.qa]])return!0}return!1};var F={Pb:"event_callback",Rb:"event_timeout"};var qe={};var re=/[A-Z]+/,se=/\s/,te=function(a){if(ja(a)&&(a=va(a),!se.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(re.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}},we=function(a){for(var b={},c=0;c<a.length;++c){var d=te(a[c]);d&&(b[d.id]=d)}ve(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function ve(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.da[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var xe=null,ye={},ze={},Ae,Be=function(a,b){var c={event:a};b&&(c.eventModel=Ga(b),b[F.Pb]&&(c.eventCallback=b[F.Pb]),b[F.Rb]&&(c.eventTimeout=b[F.Rb]));return c};
var Ge={config:function(a){},event:function(a){var b=a[1];if(ja(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Fa(a[2]))return;c=a[2]}var d=Be(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];qe[b]||(qe[b]=[]);qe[b].push(c)}},set:function(a){var b;2==a.length&&Fa(a[1])?b=Ga(a[1]):3==a.length&&ja(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ga(b),b.event="gtag.set",b._clear=!0,b}},He={policy:!0};var Ie=function(){var a=!1;return a};var Oe=function(a){if(Ne(a))return a;this.wg=a};Oe.prototype.Df=function(){return this.wg};var Ne=function(a){return!a||"object"!==Da(a)||Fa(a)?!1:"getUntrustedUpdateValue"in a};Oe.prototype.getUntrustedUpdateValue=Oe.prototype.Df;var Pe=!1,Qe=[];function Re(){if(!Pe){Pe=!0;for(var a=0;a<Qe.length;a++)z(Qe[a])}}var Se=function(a){Pe?z(a):Qe.push(a)};var Te=[],Ue=!1,Ve=function(a){return f["dataLayer"].push(a)},Xe=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&pd(g,void 0),pd(g,h))});if(!Ac){Ac=a["gtm.start"];}var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Gc(),a["gtm.uniqueEventId"]=d,pd("gtm.uniqueEventId",d));Cc=c;var e=We(a);Cc=null;return e};
function We(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=wc.zones;d=e?e.checkState(vc.m,c):zd;return d.active?oe(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Ye=function(){for(var a=!1;!Ue&&0<Te.length;){Ue=!0;delete ed.eventModel;hd();var b=Te.shift();if(null!=b){var c=Ne(b);if(c){var d=b;b=Ne(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=id(h,1);if(la(k)||Fa(k))k=Ga(k);fd[h]=k}}try{if(ia(b))try{b.call(jd)}catch(v){}else if(la(b)){var l=b;if(ja(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=id(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ja(b[0])){var r=Ge[b[0]];if(r&&(!c||!He[b[0]])){b=r(b);break a}}b=void 0}if(!b){Ue=!1;continue}}a=Xe(b)||a}}finally{c&&hd(!0)}}Ue=!1}
return!a},Ze=function(){var a=Ye();try{var b=vc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},$e=function(){var a=La("dataLayer",[]),b=La("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Gd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Se(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var d;
if(0<wc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Oe(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Te.push.apply(Te,d);if(300<this.length)for(Ia("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Ye()&&h};Te.push.apply(Te,a.slice(0));z(Ze)};var bf=function(a){return af?u.querySelectorAll(a):null},cf=function(a,b){if(!af)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},df=!1;if(u.querySelectorAll)try{var ef=u.querySelectorAll(":root");ef&&1==ef.length&&ef[0]==u.documentElement&&(df=!0)}catch(a){}var af=df;var ff;var Cf={};Cf.ob=new String("undefined");
var Df=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Cf.ob?b:a[d]);return c.join("")}};Df.prototype.toString=function(){return this.resolve("undefined")};Df.prototype.valueOf=Df.prototype.toString;Cf.Ge=Df;Cf.ac={};Cf.pf=function(a){return new Df(a)};var Ef={};Cf.ig=function(a,b){var c=Gc();Ef[c]=[a,b];return c};Cf.ud=function(a){var b=a?0:1;return function(c){var d=Ef[c];if(d&&"function"===typeof d[b])d[b]();Ef[c]=void 0}};Cf.Qf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Cf.Zf=function(a){if(a===Cf.ob)return a;var b=Gc();Cf.ac[b]=a;return'google_tag_manager["'+vc.m+'"].macro('+b+")"};Cf.Tf=function(a,b,c){a instanceof Cf.Ge&&(a=a.resolve(Cf.ig(b,c)),b=fa);return{nc:a,I:b}};var Ff=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ua(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},Gf=function(a){wc.hasOwnProperty("autoEventsSettings")||(wc.autoEventsSettings={});var b=wc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
Hf=function(a,b,c){Gf(a)[b]=c},If=function(a,b,c,d){var e=Gf(a),g=xa(e,b,d);e[b]=c(g)},Jf=function(a,b,c){var d=Gf(a);return xa(d,b,c)};var Kf=function(){for(var a=Ja.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Nf=function(a,b,c,d){var e=Lf(b);return ib(a,e,Mf(c),d)},Lf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Mf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Of(a,b){var c=""+Lf(a),d=Mf(b);1<d&&(c+="-"+d);return c};var Pf=["1"],Qf={},Uf=function(a,b,c,d){var e=Rf(a);Qf[e]||Sf(e,b,c)||(Tf(e,Kf(),b,c,d),Sf(e,b,c))};function Tf(a,b,c,d,e){var g;g=["1",Of(d,c),b].join(".");mb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function Sf(a,b,c){var d=Nf(a,b,c,Pf);d&&(Qf[a]=d);return d}function Rf(a){return(a||"_gcl")+"_au"};var Vf=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Nc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Nc]||(g[a[h].Nc]=[]),g[a[h].Nc].push({timestamp:k[1],Af:k[2]}))}return g};function Wf(){for(var a=Xf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Yf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Xf,Zf,$f=function(a){Xf=Xf||Yf();Zf=Zf||Wf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Xf[l],Xf[m],Xf[n],Xf[p])}return b.join("")},ag=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Zf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Xf=Xf||Yf();Zf=Zf||
Wf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var bg;function cg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var dg=function(){var a=La("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var eg=/(.*?)\*(.*?)\*(.*)/,fg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,gg=/^(?:www\.|m\.|amp\.)+/,hg=/([^?#]+)(\?[^#]*)?(#.*)?/,ig=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,kg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push($f(String(d))))}var e=b.join("*");return["1",jg(e),e].join("*")},jg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=bg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}bg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^bg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},mg=function(){return function(a){var b=eb(f.location.href),c=b.search.replace("?",""),d=ab(c,"_gl",!0)||"";a.query=lg(d)||{};var e=db(b,"fragment").match(ig);a.fragment=lg(e&&e[3]||
"")||{}}},lg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=eg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===jg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=ag(t[q+1]);return p}}}}catch(r){}};
function ng(a,b,c){function d(m){var n=m,p=ig.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=hg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function og(a,b,c){for(var d={},e={},g=dg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&cg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=kg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=ng(l,a.action);Za.test(v)&&(a.action=v)}}}else pg(l,a,!1)}if(!c&&Aa(e)){var x=kg(e);pg(x,a,!0)}}function pg(a,b,c){if(b.href){var d=ng(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var qg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||og(e,e.hostname,!1)}}catch(h){}},rg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=db(eb(b.action),"host");og(b,c,!0)}}catch(d){}},sg=function(a,b,c,d){var e=dg();e.init||(Sa(u,"mousedown",qg),Sa(u,"keyup",qg),Sa(u,"submit",rg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};dg().decorators.push(g)},tg=function(){var a=u.location.hostname,b=fg.exec(u.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(gg,"")===e.replace(gg,"")},ug=function(a,b){return!1===a?!1:a||b||tg()};var vg={};var wg=/^\w+$/,xg=/^[\w-]+$/,yg=/^~?[\w-]+$/,zg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Ag(a){return a&&"string"==typeof a&&a.match(wg)?a:"_gcl"}var Cg=function(){var a=eb(f.location.href),b=db(a,"query",!1,void 0,"gclid"),c=db(a,"query",!1,void 0,"gclsrc"),d=db(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||ab(e,"gclid",void 0);c=c||ab(e,"gclsrc",void 0)}return Bg(b,c,d)};
function Bg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(xg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==vg.gtm_3pds?0:vg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Dg(a,b,c){function d(p,t){var q=Eg(p,e);q&&mb(q,t,h,g,l,!0)}b=b||{};var e=Ag(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Md?7776E3:b.Md;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.bh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Eg=function(a,b){var c=zg[a];if(void 0!==c)return b+c},Fg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Gg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Hg=function(a,b,c,d,e){if(la(b)){var g=Ag(e);sg(function(){for(var h={},k=0;k<a.length;++k){var l=Eg(a[k],g);if(l){var m=fb(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Ig=function(a){return a.filter(function(b){return yg.test(b)})},Jg=function(a){for(var b=["aw","dc"],c=Ag(a&&a.prefix),d={},e=0;e<b.length;e++)zg[b[e]]&&(d[b[e]]=zg[b[e]]);ra(d,function(g,h){var k=fb(c+h,u.cookie);if(k.length){var l=k[0],m=Fg(l),n={};n[g]=[Gg(l)];Dg(n,a,m)}})};var Kg=/^\d+\.fls\.doubleclick\.net$/;function Lg(a){var b=eb(f.location.href),c=db(b,"host",!1);if(c&&c.match(Kg)){var d=db(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Mg(a,b){if("aw"==a||"dc"==a){var c=Lg("gcl"+a);if(c)return c.split(".")}var d=Ag(b);if("_gcl"==d){var e;e=Cg()[a]||[];if(0<e.length)return e}var g=Eg(a,d),h;if(g){var k=[];if(u.cookie){var l=fb(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Gg(l[m]);n&&-1===ma(k,n)&&k.push(n)}h=Ig(k)}else h=k}else h=k}else h=[];return h}
var Ng=function(){var a=Lg("gac");if(a)return decodeURIComponent(a);var b=Vf(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Af);g=Ig(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Og=function(a,b,c,d,e){Uf(b,c,d,e);var g=Qf[Rf(b)],h=Cg().dc||[],k=!1;if(g&&0<h.length){var l=wc.joined_au=wc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ja.sendBeacon&&Ja.sendBeacon(t)||Ra(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Rf(b),r=Qf[q];r&&Tf(q,r,c,d,e)}};var Pg;if(3===vc.sb.length)Pg="g";else{var Qg="G";Pg=Qg}
var Rg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Pg},Sg=function(a){var b=vc.m.split("-"),c=b[0].toUpperCase(),d=Rg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===vc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+vc.sb+
e};
var Tg=function(a){return!(void 0===a||null===a||0===(a+"").length)},Ug=function(a,b){var c;if(2===b.L)return a("ord",oa(1E11,1E13)),!0;if(3===b.L)return a("ord","1"),a("num",oa(1E11,1E13)),!0;if(4===b.L)return Tg(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.L)c="1";else if(6===b.L)c=b.Hc;else return!1;Tg(c)&&a("qty",c);Tg(b.vb)&&a("cost",b.vb);Tg(b.transactionId)&&a("ord",b.transactionId);return!0},Vg=encodeURIComponent,Wg=function(a,b){function c(n,p,t){g.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:Vg(p)))}var d=a.jc,e=a.protocol;e+=a.Fb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Vg(d)+(";type="+Vg(a.mc))+(";cat="+Vg(a.Ma));var g=a.rf||{};ra(g,function(n,p){e+=";"+Vg(n)+"="+Vg(p+"")});if(Ug(c,a)){Tg(a.Kb)&&c("u",a.Kb);Tg(a.Jb)&&c("tran",a.Jb);c("gtm",Sg());!1===a.Pe&&c("npa","1");if(a.ic){var h=Mg("dc",a.va);h&&h.length&&c("gcldc",h.join("."));var k=Mg("aw",a.va);k&&k.length&&c("gclaw",k.join("."));var l=Ng();l&&c("gac",l);Uf(a.va,void 0,a.lf,a.nf);
var m=Qf[Rf(a.va)];m&&c("auiddc",m)}Tg(a.Dc)&&c("prd",a.Dc,!0);ra(a.Qc,function(n,p){c(n,p)});e+=b||"";Tg(a.Db)&&c("~oref",a.Db);a.Fb?Qa(e+"?",a.I):Ra(e+"?",a.I,a.O)}else z(a.O)};var Zg=!!f.MutationObserver,$g=void 0,ah=function(a){if(!$g){var b=function(){var c=u.body;if(c)if(Zg)(new MutationObserver(function(){for(var e=0;e<$g.length;e++)z($g[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Sa(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<$g.length;e++)z($g[e])}))})}};$g=[];u.body?b():z(b)}$g.push(a)};
var ih=function(){var a=u.body,b=u.documentElement||a&&a.parentElement,c,d;if(u.compatMode&&"BackCompat"!==u.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Ia("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},jh=function(a){var b=ih(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},kh=function(a){if(u.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!f.getComputedStyle)return!0;var c=f.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=f.getComputedStyle(d,null))}return!1};var lh=[],mh=!(!f.IntersectionObserver||!f.IntersectionObserverEntry),nh=function(a,b,c){for(var d=new f.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<lh.length;g++)if(!lh[g])return lh[g]=d,g;return lh.push(d)-1},oh=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:wa()};z(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=jh(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},ph=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(mh){var e=!1;z(function(){e||oh(a,b,c)()});return nh(function(g){e=!0;for(var h={Ca:0};h.Ca<g.length;h={Ca:h.Ca},h.Ca++)z(function(k){return function(){return a(g[k.Ca])}}(h))},b,c)}return f.setInterval(oh(a,b,c),1E3)},qh=function(a){mh?0<=a&&a<lh.length&&lh[a]&&(lh[a].disconnect(),lh[a]=void 0):f.clearInterval(a)};var sh=f.clearTimeout,th=f.setTimeout,G=function(a,b,c){if(Ie()){b&&z(b)}else return Na(a,b,c)},uh=function(){return new Date},vh=function(){return f.location.href},wh=function(a){return db(eb(a),"fragment")},xh=function(a){return cb(eb(a))},yh=function(a,b){return id(a,b||2)},zh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ve(a)},Ah=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||
c&&!f[a])&&(f[a]=b);return f[a]},Bh=function(a,b,c){return fb(a,b,void 0===c?!0:!!c)},Ch=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Md:d},g=Cg();Dg(g,e);Jg(e)},Dh=function(a,b,c,d,e){var g=mg(),h=dg();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&(za(k,l.query),za(k,l.fragment));for(var m=Ag(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==zg[p]){var t=Eg(p,m),q=k[t];if(q){var r=Math.min(Fg(q),wa()),v;b:{for(var x=r,y=fb(t,u.cookie),
w=0;w<y.length;++w)if(Fg(y[w])>x){v=!0;break b}v=!1}v||mb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var A={prefix:b,path:c,domain:d};Dg(Bg(k.gclid,k.gclsrc),A);},Eh=function(a,b,c,d,e){Hg(a,b,c,d,e);},Fh=function(a,b){if(Ie()){b&&z(b)}else Qa(a,b)},Gh=function(a){return!!Jf(a,
"init",!1)},Hh=function(a){Hf(a,"init",!0)},Ih=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":zc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});G(E("https://","http://",d))};
var Kh=Cf.Tf;var Lh=new pa,Mh=function(a,b){function c(h){var k=eb(h),l=db(k,"protocol"),m=db(k,"host",!0),n=db(k,"port"),p=db(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Nh=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(Nh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=ma(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Lh.get(q);r||(r=new RegExp(c,t),Lh.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Mh(b,c)}return!1};var Ph=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Qh={},Rh=encodeURI,M=encodeURIComponent,Sh=Ra;var Th=function(a,b){if(!a)return!1;var c=db(eb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Uh=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Qh.Rf=function(){var a=!1;return a};var Di=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Ei=function(){this.c=1;this.e=[];this.p=null};function Fi(a){var b=wc,c=b.gss=b.gss||{};return c[a]=c[a]||new Ei}var Gi=function(a,b){Fi(a).p=b},Hi=function(a){var b=Fi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var Ji=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var Yi=window,Zi=document,$i=function(a){var b=Yi._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Yi["ga-disable-"+a])return!0;try{var c=Yi.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=fb("AMP_TOKEN",Zi.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Zi.getElementById("__gaOptOutExtension")?!0:!1};var gj=function(a,b,c){fj(a);var d=Math.floor(wa()/1E3);Fi(a).e.push(new Di(b,d,c,void 0));Hi(a)},hj=function(a,b,c){fj(a);var d=Math.floor(wa()/1E3);Fi(a).e.push(new Di(b,d,c,!0))},fj=function(a){if(1===Fi(a).c){Fi(a).c=2;var b=encodeURIComponent(a);Na(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},jj=function(a,b){},ij=function(a,b){};var V={a:{}};

V.a.jsm=["customScripts"],function(){(function(a){V.__jsm=a;V.__jsm.g="jsm";V.__jsm.h=!0;V.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
V.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Wg(b,c)}(function(b){V.__flc=b;V.__flc.g="flc";V.__flc.h=!0;V.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Uh(b.vtp_customVariable||[],"key","value")||{},e={Ma:b.vtp_activityTag,ic:c,va:b.vtp_conversionCookiePrefix||void 0,vb:void 0,L:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,jc:b.vtp_advertiserId,mc:b.vtp_groupTag,O:b.vtp_gtmOnFailure,I:b.vtp_gtmOnSuccess,Db:b.vtp_useImageTag?
void 0:b.vtp_url,protocol:"",Hc:void 0,Fb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Jb:b.vtp_transactionVariable,transactionId:void 0,Kb:b.vtp_userVariable,Qc:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){G("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,K("google_attr").build([Uh(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
V.a.sp=["google"],function(){(function(a){V.__sp=a;V.__sp.g="sp";V.__sp.h=!0;V.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Md();G("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=K("google_trackConversion");if(ia(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Uh(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Sg()})||b()}else b()},b)})}();V.a.c=["google"],function(){(function(a){V.__c=a;V.__c.g="c";V.__c.h=!0;V.__c.b=0})(function(a){return a.vtp_value})}();

V.a.e=["google"],function(){(function(a){V.__e=a;V.__e.g="e";V.__e.h=!0;V.__e.b=0})(function(a){return String(rd(a.vtp_gtmEventId,"event"))})}();V.a.f=["google"],function(){(function(a){V.__f=a;V.__f.g="f";V.__f.h=!0;V.__f.b=0})(function(a){var b=yh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?db(eb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):xh(String(b)):String(b)})}();
V.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Ff(c,"gtm.click");zh(d)}}(function(b){V.__cl=b;V.__cl.g="cl";V.__cl.h=!0;V.__cl.b=0})(function(b){if(!Gh("cl")){var c=K("document");Sa(c,"click",a,!0);Hh("cl")}z(b.vtp_gtmOnSuccess)})}();
V.a.j=["google"],function(){(function(a){V.__j=a;V.__j.g="j";V.__j.h=!0;V.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=K(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();V.a.k=["google"],function(){(function(a){V.__k=a;V.__k.g="k";V.__k.h=!0;V.__k.b=0})(function(a){return Bh(a.vtp_name,yh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
V.a.r=["google"],function(){(function(a){V.__r=a;V.__r.g="r";V.__r.h=!0;V.__r.b=0})(function(a){return oa(a.vtp_min,a.vtp_max)})}();
V.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){V.__u=b;V.__u.g="u";V.__u.h=!0;V.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:yh("gtm.url",1))||vh();var d=b[a("vtp_component")];if(!d||"URL"==d)return xh(String(c));var e=eb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?la(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=db(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=db(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
V.a.v=["google"],function(){(function(a){V.__v=a;V.__v.g="v";V.__v.h=!0;V.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=yh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
V.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={};if(c.vtp_gaSettings){var l=c.vtp_gaSettings;Ga(Uh(l.vtp_fieldsToSet,"fieldName","value"),e);Ga(Uh(l.vtp_contentGroup,"index","group"),g);Ga(Uh(l.vtp_dimension,"index","dimension"),h);Ga(Uh(l.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Ga(l);c=Ga(c,m)}Ga(Uh(c.vtp_fieldsToSet,"fieldName","value"),e);Ga(Uh(c.vtp_contentGroup,
"index","group"),g);Ga(Uh(c.vtp_dimension,"index","dimension"),h);Ga(Uh(c.vtp_metric,"index","metric"),k);var n=Td(c.vtp_functionName);if(ia(n)){var p="",t="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(t=c.vtp_trackerName,p=t+"."):(t="gtm"+Gc(),p=t+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},r={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(L){var O=[].slice.call(arguments,0);O[0]=p+O[0];n.apply(window,O)},x=function(L,O){return void 0===O?O:L(O)},y=function(L,O){if(O)for(var ba in O)O.hasOwnProperty(ba)&&v("set",L+ba,O[ba])},w=function(){
var L=function(Ab,ob,pc){if(!Fa(ob))return!1;for(var qc=xa(Object(ob),pc,[]),ue=0;qc&&ue<qc.length;ue++)v(Ab,qc[ue]);return!!qc&&0<qc.length},O;if(c.vtp_useEcommerceDataLayer){var ba=!1;ba||(O=yh("ecommerce",1))}else c.vtp_ecommerceMacroData&&(O=c.vtp_ecommerceMacroData.ecommerce);if(!Fa(O))return;O=Object(O);var Y=xa(e,"currencyCode",O.currencyCode);
void 0!==Y&&v("set","&cu",Y);L("ec:addImpression",O,"impressions");if(L("ec:addPromo",O[O.promoClick?"promoClick":"promoView"],"promotions")&&O.promoClick){v("ec:setAction","promo_click",O.promoClick.actionField);return}for(var Z="detail checkout checkout_option click add remove purchase refund".split(" "),ha=0;ha<Z.length;ha++){var Pa=O[Z[ha]];if(Pa){L("ec:addProduct",Pa,"products");v("ec:setAction",Z[ha],Pa.actionField);break}}},
A=function(L,O,ba){var Y=0;if(L)for(var Z in L)if(L.hasOwnProperty(Z)&&(ba&&q[Z]||!ba&&void 0===q[Z])){var ha=r[Z]?ta(L[Z]):L[Z];"anonymizeIp"!=Z||ha||(ha=void 0);O[Z]=ha;Y++}return Y},B={name:t};A(e,B,!0);n("create",c.vtp_trackingId||d.trackingId,B);v("set","&gtm",Sg(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(L,O){void 0!==c[O]&&v("set",L,c[O])})("nonInteraction","vtp_nonInteraction");y("contentGroup",g);y("dimension",h);y("metric",k);var C={};A(e,C,!1)&&v("set",
C);var D;c.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var L=e&&e.hitCallback;ia(L)&&L();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());var H={hitType:"event",
eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:x(String,c.vtp_eventLabel||d.label),eventValue:x(sa,c.vtp_eventValue||d.value)};A(D,H,!1);v("send",H);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==
c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var R="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:R})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var U="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:U})}D?
v("send","pageview",D):v("send","pageview");}if(!a){var X=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(X="internal/"+X);a=!0;G(E("https:","http:","//www.google-analytics.com/"+X,e&&e.forceSSL),function(){var L=
Rd();L&&L.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else z(c.vtp_gtmOnFailure)};V.__ua=b;V.__ua.g="ua";V.__ua.h=!0;V.__ua.b=0}();




V.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;Ga(Uh(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=Ga(e);c=Ga(c,g)||{}}Ga(Uh(c.vtp_fieldsToSet,"fieldName","value"),d);var h=Td(c.vtp_functionName);if(ia(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Gc(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},p=function(y,w,A){var B=0,C;for(C in y)if(y.hasOwnProperty(C)&&
(A&&m[C]||!A&&void 0===m[C])){var D=n[C]?ta(y[C]):y[C];"anonymizeIp"!==C||D||(D=void 0);w[C]=D;B++}return B},t={name:l};p(d,t,!0);var q={"&gtm":Sg(!0)};p(d,q,!1);var r=encodeURI(E("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,t);h(k+"set",q);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,G(r,function(){return Rd().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=K("dataLayer"),x=v&&v.hide;x&&x.end&&(x[c.vtp_optimizeContainerId]=!0)}else z(c.vtp_gtmOnFailure)};V.__opt=b;V.__opt.g="opt";V.__opt.h=!0;V.__opt.b=0}();V.a.hjtc=["nonGoogleScripts"],function(){(function(a){V.__hjtc=a;V.__hjtc.g="hjtc";V.__hjtc.h=!0;V.__hjtc.b=0})(function(a){var b=a.vtp_hotjar_site_id;Ah("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});Ah("_hjSettings",{hjid:b,hjsv:5});G("//static.hotjar.com/c/hotjar-"+M(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
V.a.aev=["google"],function(){function a(l,m){var n=!1,p;n||(p=yh("gtm."+m,1));return p}function b(l,m,n){var p=a(l,k[m]);return void 0!==p?p:n}function c(l,m){if(!l)return!1;var n=d(vh());la(m)||(m=String(m||"").replace(/\s+/g,"").split(","));for(var p=[n],t=0;t<m.length;t++)if(m[t]instanceof RegExp){if(m[t].test(l))return!1}else{var q=m[t];if(0!=q.length){if(0<=
d(l).indexOf(q))return!1;p.push(d(q))}}return!Th(l,p)}function d(l){e.test(l)||(l="http://"+l);return db(eb(l),"HOST",!0)}var e=/^https?:\/\//i,g={},h=[],k={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(l){V.__aev=l;V.__aev.g=
"aev";V.__aev.h=!0;V.__aev.b=0})(function(l){var m=l.vtp_gtmEventId,n=l.vtp_defaultValue,p=l.vtp_varType;switch(p){case "TAG_NAME":var t=a(m,"element");return t&&t.tagName||n;case "TEXT":var q;if(ja(g[m]))q=g[m];else{var r=a(m,"element");if(r&&(q=Wa(r),g[m]=q,h.push(m),25<h.length)){var v=h.shift();delete g[v]}}return q||n;case "URL":var x;a:{var y=String(a(m,"elementUrl")||n||""),w=eb(y),A=String(l.vtp_component||"URL");switch(A){case "URL":x=y;break a;case "IS_OUTBOUND":x=c(y,l.vtp_affiliatedDomains);
break a;default:x=db(w,A,l.vtp_stripWww,l.vtp_defaultPages,l.vtp_queryKey)}}return x;case "ATTRIBUTE":var B;if(void 0===l.vtp_attribute)B=b(m,p,n);else{var C=l.vtp_attribute,D=a(m,"element");B=D&&Ua(D,C)||n||""}return B;default:return b(m,p,n)}})}();
V.a.gas=["google"],function(){(function(a){V.__gas=a;V.__gas.g="gas";V.__gas.h=!0;V.__gas.b=0})(function(a){var b=Ga(a),c=b;c[ac.qa]=null;c[ac.Be]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

V.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=K("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Md();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Sg()},m=function(p){return function(t,q,r){var v="DATA_LAYER"==p?yh(r):k[q];v&&(l[t]=v)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(p){return{value:p.price,quantity:p.quantity,item_id:p.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;b.push(l);a||(a=!0,G("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};V.__awct=h;V.__awct.g="awct";V.__awct.h=!0;V.__awct.b=0}();

V.a.smm=["google"],function(){(function(a){V.__smm=a;V.__smm.g="smm";V.__smm.h=!0;V.__smm.b=0})(function(a){var b=a.vtp_input,c=Uh(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



V.a.paused=[],function(){(function(a){V.__paused=a;V.__paused.g="paused";V.__paused.h=!0;V.__paused.b=0})(function(a){z(a.vtp_gtmOnFailure)})}();

V.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ma(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var b=function(d,e,g){Gd(function(){var h,k=wc;k.postscribe||(k.postscribe=gc);h=k.postscribe;var l={done:e},m=u.createElement("div");m.style.display="none";m.style.visibility="hidden";u.body.appendChild(m);try{h(m,d,l)}catch(n){z(g)}})};var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Kh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.nc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Xa(h),k,e)()}else th(function(){c(d)},
200)};V.__html=c;V.__html.g="html";V.__html.h=!0;V.__html.b=0}();


V.a.lcl=[],function(){function a(){var c=K("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Ya(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Jf("lcl",k?"nv.mwt":"mwt",0),m;m=k?Jf("lcl","nv.ids",[]):Jf("lcl","ids",[]);if(m.length){var n=Ff(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=K((h.target||"_self").substring(1)),t=!0;if(zh(n,function(){t&&p&&(p.location.href=h.href)},l))t=
!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else zh(n,function(){},l||2E3);return!0}}};Sa(c,"click",e,!1);Sa(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=d.href.indexOf("#"),h=d.target;if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var k=xh(d.href),l=xh(e.location);return k!==l}return!0}(function(c){V.__lcl=c;V.__lcl.g="lcl";V.__lcl.h=!0;V.__lcl.b=0})(function(c){var d=void 0===c.vtp_waitForTags?
!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};If("lcl","mwt",k,0);e||If("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};If("lcl","ids",l,[]);e||If("lcl","nv.ids",l,[]);Gh("lcl")||(a(),Hh("lcl"));z(c.vtp_gtmOnSuccess)})}();
V.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(yh("gtm.start"))||0;return uh().getTime()-g}function c(g,h,k,l){function m(){if(!kh(g.target)){h.has(e.rb)||h.set(e.rb,""+b());h.has(e.$b)||h.set(e.$b,""+b());var p=0;h.has(e.tb)&&(p=Number(h.get(e.tb)));p+=100;h.set(e.tb,""+p);if(p>=k){var t=Ff(g.target,"gtm.elementVisibility",[h.uid]),q=jh(g.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.$b));
t["gtm.visibleLastTime"]=Number(h.get(e.rb));zh(t);l()}}}if(!h.has(e.Ka)&&(0==k&&m(),!h.has(e.ra))){var n=K("self").setInterval(m,100);h.set(e.Ka,n)}}function d(g){g.has(e.Ka)&&(K("self").clearInterval(Number(g.get(e.Ka))),g.remove(e.Ka))}var e={Ka:"polling-id-",$b:"first-on-screen-",rb:"recent-on-screen-",tb:"total-visible-time-",ra:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){V.__evl=g;V.__evl.g="evl";V.__evl.h=!0;V.__evl.b=0})(function(g){function h(){var y=!1,w=null;if("CSS"===l){try{w=bf(m)}catch(H){}y=!!w&&v.length!=w.length}else if("ID"===l){var A=Va(m);A&&(w=[A],y=1!=v.length||v[0]!==A)}w||(w=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var C=new a(v[B],q);d(C)}v=
[];for(var D=0;D<w.length;D++)v.push(w[D]);0<=x&&qh(x);0<v.length&&(x=ph(k,v,[t]))}}function k(y){var w=new a(y.target,q);y.intersectionRatio>=t?w.has(e.ra)||c(y,w,p,"ONCE"===r?function(){for(var A=0;A<v.length;A++){var B=new a(v[A],q);B.set(e.ra,"1");d(B)}qh(x);if(n&&$g)for(var C=0;C<$g.length;C++)$g[C]===h&&$g.splice(C,1)}:function(){w.set(e.ra,"1");d(w)}):(d(w),"MANY_PER_ELEMENT"===r&&w.has(e.ra)&&(w.remove(e.ra),w.remove(e.tb)),w.remove(e.rb))}var l=g.vtp_selectorType,m;"ID"===l?m=String(g.vtp_elementId):
"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,p=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,t=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],x=-1;h();n&&ah(h);z(g.vtp_gtmOnSuccess)})}();

var kj={};kj.macro=function(a){if(Cf.ac.hasOwnProperty(a))return Cf.ac[a]},kj.onHtmlSuccess=Cf.ud(!0),kj.onHtmlFailure=Cf.ud(!1);kj.dataLayer=jd;kj.callback=function(a){Ec.hasOwnProperty(a)&&ia(Ec[a])&&Ec[a]();delete Ec[a]};kj.Ye=function(){wc[vc.m]=kj;za(Fc,V.a);Tb=Tb||Cf;Ub=yd};
kj.Mf=function(){wc=f.google_tag_manager=f.google_tag_manager||{};if(wc[vc.m]){var a=wc.zones;a&&a.unregisterChild(vc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Mb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Pb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Ob.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Nb.push(p)}Rb=V;Sb=Nh;kj.Ye();$e();Bd=!1;Cd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Ed();else{Sa(u,"DOMContentLoaded",Ed);Sa(u,"readystatechange",Ed);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&Fd()}Sa(f,"load",Ed)}Pe=!1;"complete"===u.readyState?Re():
Sa(f,"load",Re);a:{if(!Zc)break a;f.setInterval($c,864E5);}
Bc=(new Date).getTime();}};(0,kj.Mf)();

})()
