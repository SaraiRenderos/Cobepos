!function(){function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){return i(t[a][1][e]||e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}return e}()({1:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};window.Fizzmod=function(e,t,n){function i(){}t.dataLayer||(t.dataLayer=[]);var o=function(){function e(e,t,n){for(var s in a)if(a.hasOwnProperty(s)&&s in n){var u=null,c=null;if(c=0===a[s].indexOf(".")?(u=a[s].substr(1,a[s].length))in n?n[u]:null:a[s]){if(c in o)for(var l=o[c].length;l--;)o[c][l].call(null,c,n),o[c].splice(l,1);if(c in i)for(var f=i[c].length;f--;)i[c][f].call(null,c,n);r[c]=n}}}function n(){}var r={},i={},o={},a={event:".event",pageCategory:"page",categoryId:"category"};if(t.dataLayer instanceof Array){for(var s=0,u=t.dataLayer.length;s<u;s++)for(var c in a)if(a.hasOwnProperty(c)&&c in t.dataLayer[s])if(0===a[c].indexOf(".")){var l=a[c].substr(1,a[c].length);r[t.dataLayer[s][l]]=t.dataLayer[s]}else r[a[c]]=t.dataLayer[s];t.dataLayer.push=function(){var t=this.push;return function(){for(var n=0,r=this.length,i=arguments.length;n<i;n++,r++)e(0,0,arguments[n]);return t.apply(this,arguments)}.bind(this)}.bind(t.dataLayer)()}return n.prototype={on:function(){for(var e=Array.prototype.shift.call(arguments).split(" "),t=Array.prototype.slice.call(arguments),n=0,o=e.length;n<o;n++){e[n]in i||(i[e[n]]=[]),i[e[n]]=i[e[n]].concat(t);if(e[n]in r)for(var a=t.length;a--;)t[a].call(null,e[n],r[e[n]])}return this},once:function(){for(var e=Array.prototype.shift.call(arguments).split(" "),t=Array.prototype.slice.call(arguments),n=0,i=e.length;n<i;n++)if(e[n]in r)for(var a=t.length;a--;)t[a].call(null,e[n],r[e[n]]);else e[n]in o||(o[e[n]]=[]),o[e[n]]=o[e[n]].concat(t);return this}},new n}();i.prototype.TagManager=o,Object.keys||(Object.keys=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){for(var n=t||0,r=this.length;n<r;n++)if(this[n]===e)return n;return-1}),RegExp.escape=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};var a={},s=!!("ontouchstart"in t||navigator.msMaxTouchPoints),u={SEARCH:"/api/catalog_system/pub/products/search/"},c={},l={currency:null,getServerTime:function(t){return e.ajax({url:"/no-cache/HoraAtualServidor.aspx",success:function(e){var n=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],r=e.match(/([0-9]+):([0-5][0-9]):([0-5][0-9])/)[0],i=parseInt(e.match(/[a-z]{3} ([0-9]{1,2})/)[1]),o=n.indexOf(e.match(/[a-z]{3}/)[0])+1,a=parseInt(e.match(/[0-9]{4}/)[0]);i<10&&(i="0"+i),o<10&&(o="0"+o),"function"==typeof t&&t.call(null,new Date(a+"/"+o+"/"+i+" "+r))}})},getOrder:function(t){return e.ajax({type:"GET",url:"/api/checkout/pub/orders/"+t})},getOriginalImage:function(e){return"string"==typeof e?e.replace(/(ids\/[0-9]+)-([0-9-]+)\//,"$1/"):e},getResizedImage:function(e,t,n){return void 0===t||void 0===n||"string"!=typeof e?e:(e=e.replace(/(?:ids\/[0-9]+)-([0-9]+)-([0-9]+)\//,function(e,r,i){return e.replace("-"+r+"-"+i,"-"+t+"-"+n)})).replace(/(ids\/[0-9]+)\//,"$1-"+t+"-"+n+"/")},isValidPrice:function(e,t,n,r){return t=t||",",n=n||".",r="number"!=typeof r?2:r,new RegExp("^[0-9]{1,3}(?:\\"+t+"(?:(?:[0-9]{3}(?:"+t+"|))+))?(?:\\"+n+"[0-9]{0,"+r+"})?$").test(e.toString())},getProduct:function(t){return"products"in c||(c.products={}),void 0!==c.products[t]&&void 0!==c.products[t].done?c.products[t]:e.Deferred(function(){var n=this;if(void 0!==c.products[t])return n.resolve(c.products[t]);c.products[t]=n,e.ajax({url:u.SEARCH+"?fq=productId:"+t,dataType:"json",success:function(e){c.products[t]=e,n.resolve(e)},error:function(){c.products[t]=void 0,n.reject()}})}).promise()},getSKU:function(t){return"skus"in c||(c.skus={}),void 0!==c.skus[t]&&void 0!==c.skus[t].done?c.skus[t]:e.Deferred(function(){var n=this;if(void 0!==c.skus[t])return n.resolve(c.skus[t]);c.skus[t]=n,e.ajax({url:u.SEARCH+"?fq=skuId:"+t,dataType:"json",success:function(e){c.skus[t]=e,n.resolve(e)},error:function(){c.skus[t]=void 0,n.reject()}})}).promise()},getCountryFile:function(t){return e.Deferred(function(){var n=this;void 0===t&&(t="ARG"),e.ajax({url:"https://io.vtex.com.br/?prefix=front.shipping-data",type:"get",dataType:"xml",success:function(r){var i=!1;e(r).find("Contents Key").each(function(){this.innerHTML.match("front.shipping-data/[0-9.]+/script/rule/Country"+t+".js$")&&(i=this.innerHTML)}),i?n.resolve("https://io.vtex.com.br/"+i):n.reject()},error:function(){n.reject()}})}).promise()},addSKU:function(t,n,i,o,a){var s="";if(n=n||1,i=i||1,"object"==(void 0===t?"undefined":r(t))){for(var u in t)s+="sku="+u+"&qty="+t[u]+"&seller="+i+"&";s=s.substring(0,s.length-1)}else s="sku="+t+"&qty=1&seller="+i;return e.ajax({url:(a||"")+"/checkout/cart/add?"+s+"&redirect=false&sc="+n+l.serialize(o,!0)})},removeSKU:function(t){return t=t instanceof Array?t:[t],t=t.map(function(e){return 0|e}),e.Deferred(function(){var e=this;vtexjs.checkout.getOrderForm().then(function(n){for(var r=[],i=0,o=n.items.length;i<o;i++)~t.indexOf(0|n.items[i].id)&&(n.items[i].index=i,r.push(n.items[i]));return vtexjs.checkout.removeItems(r).done(function(t){e.resolve(t)})})}).promise()},emptyCart:function(){return e.Deferred(function(){var e=this;vtexjs.checkout.getOrderForm().done(function(t){return t.items.length?vtexjs.checkout.removeAllItems(t.items).done(function(t){e.resolve(t)}):e.resolve(t)}).fail(function(){e.reject()})}).promise()},checkLogin:function(){return e.Deferred(function(){var t=this;e.ajax({type:"GET",url:"/no-cache/profileSystem/getProfile",data:{},success:function(e){void 0!==e.IsUserDefined&&e.IsUserDefined?t.resolve(e):t.reject(e)},error:function(){t.reject()}})}).promise()},getCategories:function(t,n){return e.Deferred(function(){var r=this;e.ajax({type:"GET",url:"/api/catalog_system/pub/category/tree/"+(t||50),dataType:"json",headers:{accept:"application/json",contentType:"application/json; charset=utf-8"},success:function(e){void 0!==n?r.resolve(l.objectSearch(e,{id:n})):r.resolve(e)},error:function(){r.reject()}})}).promise()},getSearchTotalItems:function(t){var n=e.Deferred();return e.ajax({url:"/api/catalog_system/pub/products/search/"+(t||"?")+"&_from=0&_to=0",type:"GET",success:function(e,t,r){n.resolve(r.getResponseHeader("resources").split("/").pop())},error:function(){n.reject()}}),n.promise()},addAnimation:function(e,t){Object.keys(a).length||(document.addEventListener("animationstart",function(e){if(e.animationName in a)for(var t=0,n=a[e.animationName].length;t<n;t++)a[e.animationName][t].call(null,e)}),document.addEventListener("webkitAnimationStart",function(e){if(e.animationName in a)for(var t=0,n=a[e.animationName].length;t<n;t++)a[e.animationName][t].call(null,e)}),document.addEventListener("MSAnimationStart",function(e){if(e.animationName in a)for(var t=0,n=a[e.animationName].length;t<n;t++)a[e.animationName][t].call(null,e)}),document.addEventListener("oAnimationStart",function(e){if(e.animationName in a)for(var t=0,n=a[e.animationName].length;t<n;t++)a[e.animationName][t].call(null,e)}),document.addEventListener("mozAnimationStart",function(e){if(e.animationName in a)for(var t=0,n=a[e.animationName].length;t<n;t++)a[e.animationName][t].call(null,e)})),a[e]instanceof Array||(a[e]=[]),a[e].push(t)},setCookie:function(e,t,n,i){var o="";if(t="object"==(void 0===t?"undefined":r(t))?JSON.stringify(t):t,!isNaN(n)){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),o="expires="+a.toGMTString()+";"}document.cookie=i?e+"="+t+";domain=.tiendasjumbo.co;"+o+"path=/":e+"="+t+";domain=."+location.host+";"+o+"path=/"},getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1);if(0===i.indexOf(t)){var o=i.substring(t.length,i.length);return l.isJSON(o)?JSON.parse(o):o}}return""},deleteCookie:function(e){this.setCookie(e,"",-1)},isEmail:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},isURL:function(e){return/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)},isJSON:function(e){try{return JSON.parse(e),!0}catch(e){return!1}},isRUT:function(e){if(e.indexOf("-")>-1&&(e=e.replace(/\./g,"").toUpperCase(),2==(e=e.split("-")).length)){var t=e[0],n=e[1];if(n.length<3&&n.match(/[0-9kK]/g)){for(var r=0,i=2,o=t.length-1;o>=0;o--)r+=t[o]*i,i=7==i?2:i+1;var a=11-(r-11*parseInt(r/11));return!(a.toString().length>2)&&(a=11==a?0:10==a?"K":a)==n}}return!1},isRUC:function(e){if(null===e.match(/[^0-9]+/g)&&11==e.length){var t=e.substr(0,2);if("10"!=t&&"15"!=t&&"17"!=t&&"20"!=t)return!1;var n,r,i=0,o=5;for(r=0;r<4;r++)n=e[r],i+=parseInt(n)*o,o--;for(o=7,r=4;r<10;r++)n=e[r],i+=parseInt(n)*o,o--;var a=11-(i-11*parseInt(i/11));return(10==a?0:11==a?1:a)==e[10]}return!1},isRFC:function(e){return/[A-Z\{\¡\!\"\#\$\&\%\/\(\)\=]{3,4} ?([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]) ?[A-z0-9]{3}/i.test(e)},arrayUnique:function(e){return e.filter(function(e,t,n){return n.indexOf(e)===t})},objectSearch:function(e,t){var n,r,i,o;for(n in t)t.hasOwnProperty(n)&&(r=n,i=t[n]);for(n in e)if(n==r){if(e[n]==i)return e}else if(e[n]instanceof Object&&e.hasOwnProperty(n)&&(o=l.objectSearch(e[n],t)))return o;return!1},serialize:function(e,t){if("object"!==(void 0===e?"undefined":r(e)))return"";var n=[];for(var i in e)e.hasOwnProperty(i)&&n.push(encodeURIComponent(i)+"="+encodeURIComponent(e[i]));return(t?"&":"")+n.join("&")},unserialize:function(e){var t={};0===e.indexOf("?")&&(e=e.substr(1));for(var n=e.split("&"),r=0;r<n.length;r++){var i=n[r].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]||"")}return t},implode:function(e,t){if(e instanceof Array)return e.join(t||",");if("object"===(void 0===e?"undefined":r(e))){var n=[];for(var i in e)n.push(e[i]);return n.join(t||",")}return""},formatPrice:function(e,t,n,r,i){i=this.currency?this.currency:"string"==typeof i?i:"";var o="\\d(?=(\\d{3})+"+((r="number"!=typeof r?2:r)>0?"\\D":"$")+")";return e=(1*e).toFixed(Math.max(0,~~r)),i+e.replace(".",n||",").replace(new RegExp(o,"g"),"$&"+(t||"."))},setCurrency:function(e){this.currency=e},formatDate:function(e){if("object"==(void 0===e?"undefined":r(e))){var t=e.getMinutes(),n=e.getHours(),i=e.getDate(),o=e.getMonth()+1,a=e.getFullYear(),s=e.getSeconds();return o=o>9?o:"0"+o,i=i>9?i:"0"+i,n=n>9?n:"0"+n,t=t>9?t:"0"+t,s=s>9?s:"0"+s,i+"/"+o+"/"+a+" "+n+":"+t+":"+s}return null},strReplace:function(e,t,n){var r;if(e instanceof Array)for(var i=0;i<e.length;i++)e[i]=e[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),r=new RegExp(e[i],"g"),n=n.replace(r,t instanceof Array?t[i]:t);else e=e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),r=new RegExp(e,"g"),n=n.replace(r,t instanceof Array?t[0]:t);return n},stripHost:function(e){return e.toString().replace(/https?:\/\/.*?\//i,"/")},addHttp:function(e){return/^(?:f|ht)tps?:\/\//i.test(e)||(e="http://"+e),e},sanitizeString:function(e,t){return t="string"==typeof t?t:"-",e=e.toLowerCase(),e=e.replace(/[\[\]\(\)\-\{\}\^\,\.]/g,""),e=e.replace(/[àáâãäåª]/g,"a"),e=e.replace(/[éèëê]/g,"e"),e=e.replace(/[íìïî]/g,"i"),e=e.replace(/[óòöô]/g,"o"),e=e.replace(/[úùüû]/g,"u"),e=e.replace(/[ñ]/g,"n"),e=e.replace(/[ç]/g,"c"),e=e.replace(/ /g,t)},capitalize:function(e){return e.replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},getWindowHeight:function(){return t.innerHeight?t.innerHeight:e(t).height()},getWindowWidth:function(){return e(t).width()},getLocationOrigin:function(){return t.location.origin?t.location.origin:t.location.protocol+"//"+t.location.hostname+(t.location.port?":"+t.location.port:"")},detectIE:function(){var e=t.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return parseInt(e.substring(n+5,e.indexOf(".",n)),10);if(e.indexOf("Trident/")>0){var r=e.indexOf("rv:");return parseInt(e.substring(r+3,e.indexOf(".",r)),10)}var i=e.indexOf("Edge/");return i>0&&parseInt(e.substring(i+5,e.indexOf(".",i)),10)},isTouchDevice:function(){return s},length:function(e){return void 0!==e.length?e.length:"object"==(void 0===e?"undefined":r(e))?Object.keys(e).length:0},delay:function(){for(var e=Array.prototype.shift.call(arguments),t=Array.prototype.slice.call(arguments),n=0,r=e.length;n<r;n++)setTimeout(function(){for(var e=t.length;e--;)t[e].call(null)},e[n])},googleMapLoaded:function(){return"undefined"!=typeof google&&void 0!==google.maps},buildQueryString:function(t,n,i){var o=(i=(i=i||location.search).split("?"))[0]||"",a={},s=(i[1]||"").split("&");if(""==s[0]&&s.pop(),e.each(s,function(){var e=this.split("=");if("fq"==e[0]){var t=e[1].split(":");void 0===a.fq&&(a.fq={}),a.fq[t[0]]=t[1]||""}else a[e[0]]=e[1]||""}),"object"==(void 0===t?"undefined":r(t))&&"object"==(void 0===n?"undefined":r(n)))e.each(t,function(e,r){if("fq"==t[e]){var i=n[e].split(":");void 0===a[t[e]]&&(a[t[e]]={}),a[t[e]][i[0]]=i[1]||void 0}a[t[e]]=n[e]||void 0});else if("fq"==t){var u=n.split(":");void 0===a[t]&&(a[t]={}),a[t][u[0]]=u[1]||void 0}else a[t]=n||void 0;var c="?",l=!0;return e.each(a,function(t,n){void 0!==n&&("fq"==t?e.each(n,function(e,n){l?l=!l:c+="&",c+=t+"="+e+":"+n}):(l?l=!l:c+="&",c+=t+"="+n))}),"?"==c&&(c=""),o+c}};i.prototype.Utils=l;var f,p={custom:{}},d={resize:[],resizeStop:[],hashChange:[],custom:{}},h=function(e,t,n){null!==e&&void 0!==e&&(e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n)};h(t,"resize",function(e){for(var t=0,n=d.resize.length;t<n;t++)d.resize[t].call(null,e);d.resizeStop.length&&(f=setTimeout(function(){for(var t=0,n=d.resizeStop.length;t<n;t++)d.resizeStop[t].call(null,e)},100))}),h(t,"hashchange",function(e){for(var t=0,n=d.hashChange.length;t<n;t++)d.hashChange[t].call(null,e)});var v={on:function(){if(arguments.length>2&&h(arguments[0],arguments[1],arguments[2]),2==arguments.length){var e=arguments[0],t=arguments[1];"string"==typeof e&&"function"==typeof t&&(e in d.custom||(d.custom[e]=[]),d.custom[e].push(t))}return this},once:function(){if(2==arguments.length){var e=arguments[0],t=arguments[1];"string"==typeof e&&"function"==typeof t&&(e in p.custom||(p.custom[e]=[]),p.custom[e].push(t))}},trigger:function(e){if(!(arguments.length<1)){var t,n;if(Array.prototype.shift.call(arguments),e in d.custom)for(t=0,n=d.custom[e].length;t<n;t++)d.custom[e][t].apply(null,arguments);if(e in p.custom)for(t=p.custom[e].length;t--;)p.custom[e][t].apply(null,arguments),p.custom[e].splice(t,1)}},resize:function(e){return d.resize.push(e),this},resizeStop:function(e){return d.resizeStop.push(e),this},hashChange:function(e){return d.hashChange.push(e),this}};i.prototype.Events=v,i.prototype.Checkout=function(){function n(){}function r(t){if(~a.indexOf(t)){var n=t+"Step",r=a.join("Step ");r.replace(n,""),e("body").removeClass(r).addClass(n)}}function i(e,t,n,i){var o;if(r(e),t&u.ON&&e in c)for(o=c[e].length;o--;)c[e][o].call(null,e,n);if(t&u.ONCE&&e in l)for(o=l[e].length;o--;)l[e][o].call(null,e,n),l[e].splice(o,1)}var a=["cart","email","profile","shipping","payment"],s=["orderPlaced","cartLoaded"],u={ON:1,ONCE:2},c={cart:[],email:[],profile:[],shipping:[],payment:[],cartLoaded:[],orderPlaced:[],itemsUpdated:[]},l={cart:[],email:[],profile:[],shipping:[],payment:[],cartLoaded:[],orderPlaced:[],itemsUpdated:[]};return r(t.location.hash.replace(/[^A-Z]/gi,"")),n.prototype={once:function(){for(var e=Array.prototype.shift.call(arguments).split(" "),n=Array.prototype.slice.call(arguments),i=t.location.hash.toLowerCase(),a=0,u=e.length;a<u;a++)if(~s.indexOf(e[a]))o.once.apply(null,[e[a]].concat(Array.prototype.slice.call(arguments)));else if(~i.indexOf(e[a])){r(e[a]);for(var c=0,f=n.length;c<f;c++)n[c].call(null,e[a])}else e[a]in l&&(l[e[a]]=l[e[a]].concat(n));return this},on:function(){for(var e=Array.prototype.shift.call(arguments).split(" "),n=Array.prototype.slice.call(arguments),i=t.location.hash.toLowerCase(),a=0,u=e.length;a<u;a++)if(e[a]in c)if(~s.indexOf(e[a]))o.on.apply(null,[e[a]].concat(Array.prototype.slice.call(arguments)));else if(c[e[a]]=c[e[a]].concat(n),~i.indexOf(e[a])){r(e[a]);for(var l=n.length;l--;)n[l].call(null,e[a])}return this},onCheckout:function(){if(t.location.href.match(/\/checkout/))for(var e=Array.prototype.slice.call(arguments),n=e.length;n--;)e[n].call(null,"checkout");return this},onOrderPlacedView:function(){if(t.location.href.match(/\/checkout\/orderPlaced/))for(var e=Array.prototype.slice.call(arguments),n=e.length;n--;)e[n].call(null,"orderPlacedView");return this},onOrderPlaced:function(){return this.on.apply(null,["orderPlaced"].concat(Array.prototype.slice.call(arguments)))},onCart:function(e){return this.on.apply(null,["cart"].concat(Array.prototype.slice.call(arguments)))},onEmail:function(e){return this.on.apply(null,["email"].concat(Array.prototype.slice.call(arguments)))},onProfile:function(e){return this.on.apply(null,["profile"].concat(Array.prototype.slice.call(arguments)))},onShipping:function(e){return this.on.apply(null,["shipping"].concat(Array.prototype.slice.call(arguments)))},onPayment:function(e){return this.on.apply(null,["payment"].concat(Array.prototype.slice.call(arguments)))},onCartLoaded:function(e){return this.on.apply(null,["cartLoaded"].concat(Array.prototype.slice.call(arguments)))},onItemsUpdated:function(e){return this.on.apply(null,["itemsUpdated"].concat(Array.prototype.slice.call(arguments)))},isReady:!1,isReadyExclusive:{profile:!1,shipping:!1,payment:!1},ready:function(n,r){var i=this;if(void 0===n&&(n=function(){}),i.isReady)n();else switch(r=r||""){case"profile":i.isReadyExclusive.profile?n():e(document).ready(function(){var t=e.Deferred();e("#client-profile-data").one("componentValidated.vtex",t.resolve),e.when(t).then(function(){i.isReadyExclusive.profile=!0,i.isReadyExclusive.shipping&&i.isReadyExclusive.payment&&!i.isReady&&(i.isReady=!0),n()})});break;case"shipping":i.isReadyExclusive.shipping?n():e(document).ready(function(){var t=e.Deferred();e("#shipping-data").one("componentValidated.vtex",t.resolve),e.when(t).then(function(){i.isReadyExclusive.shipping=!0,i.isReadyExclusive.profile&&i.isReadyExclusive.payment&&!i.isReady&&(i.isReady=!0),n()})});break;case"payment":i.isReadyExclusive.payment?n():e(document).ready(function(){if(t.paymentData)i.isReadyExclusive.payment=!0,i.isReadyExclusive.profile&&i.isReadyExclusive.shipping&&!i.isReady&&(i.isReady=!0),n();else{var r=e.Deferred();e("#payment-data").one("componentValidated.vtex",r.resolve),e.when(r).then(function(){i.isReadyExclusive.payment=!0,i.isReadyExclusive.profile&&i.isReadyExclusive.shipping&&!i.isReady&&(i.isReady=!0),n()})}});break;default:e(document).ready(function(){var t=[e.Deferred(),e.Deferred(),e.Deferred()],r=t[0],o=t[1],a=t[2];e("#client-profile-data").one("componentValidated.vtex",r.resolve),e("#shipping-data").one("componentValidated.vtex",o.resolve),e("#payment-data").one("componentValidated.vtex",a.resolve),e.when(r,o,a).then(function(){i.isReady=!0,i.isReadyExclusive.profile=!0,i.isReadyExclusive.shipping=!0,i.isReadyExclusive.payment=!0,n()})})}}},v.hashChange(function(){var e=t.location.hash.toLowerCase();console.log("HashChange: "+e);for(var n=["cart","email","profile","shipping","payment"],r=0,o=n.length;r<o;r++){var a=n[r];~e.indexOf(a)&&i(a,u.ON|u.ONCE)}}),e(document).ajaxSuccess(function(t,n,r){try{if(r.url.match(vtexjs.checkout._getUpdateItemURL())&&void 0!==n.responseText){var o=e.parseJSON(n.responseText);i("itemsUpdated",u.ON|u.ONCE,o)}}catch(e){}}),new n}();var y=function(){var n=0;return function(r,i,o){return e.Deferred(function(){var e=this,o=o||"callback",a="_jsonp_"+n++;r.match(/\?/)?r+="&"+o+"="+a:r+="?"+o+"="+a;var s=document.createElement("script");s.type="text/javascript",s.src=r,t[a]=function(n){i.call(t,n),e.resolve(n),document.getElementsByTagName("head")[0].removeChild(s),s=null,delete t[a]},document.getElementsByTagName("head")[0].appendChild(s)}).promise()}}();i.prototype.JSONP=y;var m=function(t,n){function i(){var i=this,o={parseResult:function(e,t){return null!==t&&"JSON"==t.toUpperCase()&&l.isJSON(e)?JSON.parse(e):e}};this.methods={GET:"GET",PATCH:"PATCH",POST:"POST",PUT:"PUT",DELETE:"DELETE"},this._call=function(a,s,u){return u=u||{},e.Deferred(function(){var e,c=this;if(u.crossDomain&&t.XDomainRequest?t.XDomainRequest&&(e=new XDomainRequest):e=new XMLHttpRequest,!e)throw"XMLHttpRequest not supported";var f="string"==typeof a?a.toUpperCase():i.methods.GET,p=u.data?l.serialize(u.data):"";if("string"==typeof u.dataType&&"JSONP"==u.dataType.toUpperCase())return y(s,u.jsonp);switch(e.open(f,s+(f==i.methods.GET?"?"+p:"")),f){case i.methods.POST:e.setRequestHeader("Content-type","application/x-www-form-urlencoded")}if("object"==r(u.headers))for(var d in u.headers)e.setRequestHeader(d,u.headers[d]);e.onload=function(){if(200==e.status||t.XDomainRequest){var r=o.parseResult(e.responseText,u.dataType||null);u.success!==n&&u.success.call(null,r),c.resolve(r)}else u.error!==n&&u.error.call(null,e),c.reject(e)},e.onerror=function(){u.error!==n&&u.error.call(null,e),c.reject(e)},"function"==typeof u.beforeSend&&u.beforeSend.call(null,e),e.send(p)}).promise()}}return i.prototype={get:function(e,t,n,r){var i={data:t,success:n,dataType:r};return this._call(this.methods.GET,e,i)},post:function(e,t,n,r){var i={data:t,success:n,dataType:r};return this._call(this.methods.POST,e,i)}},new i}(t);return i.prototype.ajax=function(e){return m._call(e.type,e.url,e)},i.prototype.Ajax=m,i.prototype.MasterData=function(e,t,n){function i(){var t=this,i=null,o="CL";this.OP_INSERT="insert",this.OP_UPDATE="update",this.ERR_INVALID_USER="User doesn't exist",this.ERR_INVALID_PARTNER="Partner doesn't exist",this.ERR_INVALID_EMAIL="Invalid email";var a={types:{DOCUMENTS:"documents",SEARCH:"search",SCHEMAS:"schemas",FACET:"search/facet",ATTACHMENT:"documents"},_getURL:function(e,t,r){if(e=e!==n?e:o,null===i)throw"storeName is not set, Fizzmod.MasterData.setStore(storeName) must be called";return l.strReplace(["{storeName}","{entity}","{type}"],[i,e,t],"/{storeName}/dataentities/{entity}/{type}/")+(r!==n&&null!==r?r:"")},_getAttachmentURL:function(e,t,r){if(e=e!==n?e:o,null===i)throw"storeName is not set, Fizzmod.MasterData.setStore(storeName) must be called";return l.strReplace(["{storeName}","{entity}","{field}"],[i,e,r],"//api.vtexcrm.com.br/{storeName}/dataentities/{entity}/documents/{id}/{field}/attachments")+(t!==n&&null!==t?t:"")},_call:function(t,n,r,i,o,a){return e.ajax({url:this._getURL(i,o,n),type:t,accept:"application/vnd.vtex.ds.v10+json",contentType:"application/json; charset=utf-8",beforeSend:function(e){for(var t in a)e.setRequestHeader(t,a[t])},crossDomain:!0,data:"GET"!==t&&null!==r?JSON.stringify(r):r})},_upload:function(t,n,r,i){return e.ajax({url:this._getAttachmentURL(r,t,i),type:"POST",data:n,processData:!1,contentType:!1,accept:"application/vnd.vtex.ds.v10+json",enctype:"multipart/form-data"})}},s=function(e,n){var r=e,i=n;this.isOK=function(){return!0},this.isInsert=function(){return i==t.OP_INSERT},this.isUpdate=function(){return i==t.OP_UPDATE},this.getResults=function(){return r}},u=function(t){var i=null,o=null;if("object"==(void 0===t?"undefined":r(t)))for(var a in t)t.hasOwnProperty(a)&&"function"!=typeof t[a]&&("responseText"==a&&(i=e.parseJSON(t[a])),"string"==typeof a&&"message"==a.toLowerCase()?o=t[a]:this[a]=t[a]);else"string"==typeof t&&(o=t);this.isOK=function(){return!1},this.getResponse=function(){return i},this.getMessage=function(){return null!==o?o:null!==i&&i.Message!==n?i.Message:null}};this._resultOK=function(e){return e!==n&&e.length&&e[0].id!==n},this._parseResult=function(e,t){return new s(e,t)},this._parseError=function(e){return new u(e)},this._get=function(e,t,n){var r=["email","id"],i={_fields:(t=t instanceof Array?l.arrayUnique(t.concat(["id"])):r).join(",")};return a._call("GET",e,i,n,a.types.DOCUMENTS)},this._exists=function(t,r){return e.Deferred(function(){var e=this;return a._call("GET",t,{_fields:"id"},r,a.types.DOCUMENTS).done(function(t){t!==n&&t.id!==n?e.resolve(t):e.reject(!1)}).fail(function(t){e.reject(t)})}).promise()},this._insert=function(t,n){return e.Deferred(function(){var r=this;return a._call("POST",null,t,n,a.types.DOCUMENTS).done(function(n){r.resolve(e.extend(t,n))}).fail(function(e){r.reject(e)})}).promise()},this._upload=function(t,n){return e.Deferred(function(){var r=this;return a._call("POST",null,t,n,a.types.DOCUMENTS).done(function(n){r.resolve(e.extend(t,n))}).fail(function(e){r.reject(e)})}).promise()},this._fullUpdate=function(e,t,n){return a._call("PUT",e,t,n,a.types.DOCUMENTS)},this._partialUpdate=function(t,n,r){return e.Deferred(function(){var e=this;return a._call("PATCH",t,n,r,a.types.DOCUMENTS).done(function(t){e.resolve(n)}).fail(function(t){e.reject(t)})}).promise()},this._search=function(e,t,n,r,i){r=r||49;var o={"REST-Range":"resources="+(i=i||0)+"-"+(r+i)};return e._fields=t.join(","),a._call("GET",null,e,n,a.types.SEARCH,o)},this._getByEmail=function(e,t){return this._search({email:e},["email","id"],t,1,0)},this.setStore=function(e){return i=e,this},this.setEntity=function(e){return o=e,this}}return i.prototype={newsletter:function(t,r,i){var o=this,a={isNewsletterOptIn:r===n||r};return e.Deferred(function(){var n=this;if(!l.isEmail(t))return n.reject(o._parseError(o.ERR_INVALID_EMAIL));o._getByEmail(t,i).done(function(r){return o._resultOK(r)?o._partialUpdate(r[0].id,a,i).done(function(e){n.resolve(o._parseResult(e,o.OP_UPDATE))}).fail(function(e){n.reject(o._parseResult(e))}):o._insert(e.extend({email:t},a),i).done(function(e){n.resolve(o._parseResult(e,o.OP_INSERT))}).fail(function(e){n.reject(o._parseResult(e))})}).fail(function(e){n.reject(o._parseError(e))})}).promise()},getUser:function(t,n,r){var i=this;return e.Deferred(function(){var e=this;if(!l.isEmail(t))return e.reject(i._parseError(i.ERR_INVALID_EMAIL));i._getByEmail(t,r).done(function(t){if(i._resultOK(t))return i._get(t[0].id,n,r).done(function(t){e.resolve(i._parseResult(t))}).fail(function(t){e.reject(i._parseResult(t))});e.reject(i._parseError(i.ERR_INVALID_USER))}).fail(function(t){e.reject(i._parseError(t))})}).promise()},updateUser:function(t,n,r){var i=this;return e.Deferred(function(){var e=this;return l.isEmail(t)?i._getByEmail(t,r).done(function(t){if(i._resultOK(t))return i._partialUpdate(t[0].id,n,r).done(function(t){e.resolve(i._parseResult(t))}).fail(function(t){e.reject(t)});e.reject(i._parseError(i.ERR_INVALID_USER))}).fail(function(t){e.reject(i._parseError(t))}):e.reject(i._parseError(i.ERR_INVALID_EMAIL))}).promise()},insertUpdateUser:function(t,n,r){var i=this;return e.Deferred(function(){var o=this;return l.isEmail(t)?i._getByEmail(t,r).done(function(a){return i._resultOK(a)?i._partialUpdate(a[0].id,n,r).done(function(e){o.resolve(i._parseResult(e,i.OP_UPDATE))}).fail(function(e){o.reject(i._parseError(e))}):i._insert(e.extend({email:t},n),r).done(function(e){o.resolve(i._parseResult(e,i.OP_INSERT))}).fail(function(e){o.reject(i._parseError(e))})}).fail(function(e){o.reject(i._parseError(e))}):o.reject(i._parseError(i.ERR_INVALID_EMAIL))}).promise()},insert:function(t,n){var r=this;return e.Deferred(function(){var e=this;return r._insert(t,n).done(function(t){e.resolve(r._parseResult(t))}).fail(function(t){e.reject(r._parseError(t))})}).promise()},insertUpdate:function(t,n,r){var i=this;return e.Deferred(function(){var e=this;return i._partialUpdate(t,n,r).done(function(t){e.resolve(i._parseResult(t))}).fail(function(t){e.reject(i._parseError(t))})}).promise()},search:function(t,n,r,i,o){var a=this;return e.Deferred(function(){var e=this;return a._search(t,n,r,i,o).done(function(t){e.resolve(a._parseResult(t))}).fail(function(t){e.reject(a._parseError(t))})}).promise()},get:function(t,n,r){var i=this;return e.Deferred(function(){var e=this;return i._get(t,n,r).done(function(t){e.resolve(i._parseResult(t))}).fail(function(t){e.reject(i._parseError(t))})}).promise()},uploadFile:function(e){e.files}},new i}(jQuery),new i}(jQuery,window),"undefined"!=typeof dataLayer&&dataLayer.push({event:"fizzmodLoaded"})},{}]},{},[1]);
//# sourceMappingURL=fizzmod.js.map
