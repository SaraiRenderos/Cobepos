(function(){"use strict";var t={extend:function(t,e){if(e=JSON.parse(JSON.stringify(e)),"string"==typeof t)return e;var r,s;for(var r in t)s=t[r],t.hasOwnProperty(r)&&void 0!==s&&(e[r]=s);return e},queue:function(){function t(){var r=e.shift();r&&r(t)}var e=[];return function(r){e.push(r),1==e.length&&t()}}(),setcss:function(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=document.body.style;if(t in e)return t;for(var r,s=i.length,n=t.charAt(0).toUpperCase()+t.slice(1);s--;)if(r=i[s]+n,r in e)return r;return t}function r(r){return r=t(r),n[r]||(n[r]=e(r))}function s(t,e,s){e=r(e),t.style[e]=s}var i=["Webkit","O","Moz","ms"],n={};return function(t,e){var r,i,n=arguments;if(2==n.length)for(r in e)i=e[r],void 0!==i&&e.hasOwnProperty(r)&&s(t,r,i);else s(t,n[1],n[2])}}(),clamp:function(t,e,r){return e>t?e:t>r?r:t},toBarPerc:function(t){return 100*(-1+t)},hasClass:function(e,r){var s="string"==typeof e?e:t.classList(e);return s.indexOf(" "+r+" ")>=0},addClass:function(e,r){var s=t.classList(e),i=s+r;t.hasClass(s,r)||(e.className=i.substring(1))},removeClass:function(e,r){var s,i=t.classList(e);t.hasClass(e,r)&&(s=i.replace(" "+r+" "," "),e.className=s.substring(1,s.length-1))},showEl:function(e){t.setcss(e,{display:"block"})},hideEl:function(e){t.setcss(e,{display:"none"})},classList:function(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")},removeElement:function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}},e=t;!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.Mprogress=e()}("undefined"!=typeof window?window:this,function(){var t={template:1,parent:"body",start:!1,minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800},r="99",s=500,i=1500,n='[role="mpbar"]',o='[role="bufferBar"]',a='[role="dashed"]',u={determinate:'<div class="deter-bar" role="mpbar1"><div class="peg"></div></div><div class="bar-bg"></div>',buffer:'<div class="deter-bar" role="mpbar2"><div class="peg"></div></div><div class="buffer-bg" role="bufferBar"></div><div class="mp-ui-dashed" role="dashed"></div>',indeterminate:'<div class="indeter-bar" role="mpbar3"></div><div class="bar-bg"></div>',query:'<div class="query-bar" role="mpbar4"><div class="peg"></div></div><div class="bar-bg"></div>'},l={},f=function(r){var s=e.extend(r,t),i=s.parent+s.template,n=l[i]||"";return n||(n=new d(s),l[i]=n),"string"==typeof r&&"function"==typeof n[r]?n[r]():s.start&&n.start(),n},d=function(t){this.options=t||{},this.status=null,this.bufferStatus=null};return d.prototype={version:"0.1.0",constructor:d,start:function(){function t(){setTimeout(function(){r.status&&(r._trickle(),t())},r.options.trickleSpeed)}if(this.status||this._isBufferStyle()||this.set(0),this._isIndeterminateStyle()||this._isQueryStyle())return this;var r=this;if(this._isBufferStyle()&&!this.bufferStatus){var i=this._render(),n=i.querySelector(a),o=i.querySelector(this._getCurrSelector());e.hideEl(o),e.hideEl(n),this.setBuffer(0).setBuffer(1),setTimeout(function(){e.showEl(n),e.showEl(o),r.set(0).setBuffer(0)},s)}return this.options.trickle&&t(),this},end:function(t){if(!t&&!this.status)return this;var r=this,n=this.options.speed,o=this._getRenderedId();if(this._isBufferStyle()&&t)return this.set(0).set(1);if(this._isIndeterminateStyle())return!this._isRendered()&&t&&(this.set(0),o=this._getRenderedId(),n=s),e.setcss(o,{transition:"none",opacity:1}),o.offsetWidth,setTimeout(function(){e.setcss(o,{transition:"all "+n+"ms linear",opacity:0}),setTimeout(function(){r._remove()},n)},n),this;if(this._isQueryStyle()){if(this._isRendered()){var a=o.querySelector(this._getCurrSelector());return e.addClass(a,"end"),setTimeout(function(){r._remove()},i),this}if(t)return this.set(0),o=this._getRenderedId(),setTimeout(function(){r._remove()},i),this}return this.inc(.3+.5*Math.random()).set(1)},set:function(t){return t=e.clamp(t,this.options.minimum,1),this.status=1===t?null:t,this._setProgress(this._getCurrSelector(),t),this},setBuffer:function(t){return t=e.clamp(t,this.options.minimum,1),this.bufferStatus=1===t?null:t,this._setProgress(o,t),this},inc:function(t){var e=this.status,r=this.bufferStatus;return e?(e=this._getRandomNum(e,t),this._isBufferStyle()&&(r=this._getRandomNum(r>e?r:e+.1,t),this.setBuffer(r)),this.set(e)):this.start()},_trickle:function(){return this.inc(Math.random()*this.options.trickleRate)},_render:function(t){if(this._isRendered())return this._getRenderedId();var r,s=document.createElement("div"),i=this._getCurrTemplate()||"",n=document.querySelector(this.options.parent);if(s.id=this._getRenderedId(!0),s.className="ui-mprogress",s.innerHTML=i,!this._isIndeterminateStyle()&&!this._isQueryStyle()){t||(r=!this._isStarted());var a=s.querySelector(this._getCurrSelector()),u=r?"-100":e.toBarPerc(this.status||0);if(e.setcss(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),this._isBufferStyle()){var l=s.querySelector(o),f=r?"-100":e.toBarPerc(this.bufferStatus||0);e.setcss(l,{transition:"all 0 linear",transform:"translate3d("+f+"%,0,0)"})}}return n!=document.body&&e.addClass(n,"mprogress-custom-parent"),n.appendChild(s),s},_remove:function(){var t=this._getRenderedId(),r=document.querySelector(this.options.parent);r!=document.body&&e.removeClass(r,"mprogress-custom-parent");var s=this.options.parent+this.options.template;l[s]&&(l[s]=null),t&&(this.status=null,this.bufferStatus=null,e.removeElement(t))},_setProgress:function(t,r){var s=this._render(),i=s.querySelector(t),n=this.options.speed,o=this.options.easing,a=this;return s.offsetWidth,this._isIndeterminateStyle()||this._isQueryStyle()?this:void e.queue(function(t){""===a.options.positionUsing&&(a.options.positionUsing=a._getPositioningCSS()),e.setcss(i,a._barPositionCSS(r,n,o)),1===r?(e.setcss(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout(function(){e.setcss(s,{transition:"all "+n+"ms linear",opacity:0}),setTimeout(function(){a._remove(),t()},n)},n)):setTimeout(t,n)})},_getCurrSelector:function(){var t=this._getCurrTplId();return t!==r?'[role="mpbar'+t+'"]':n},_isStarted:function(){return"number"==typeof this.status},_getRandomNum:function(t,r){return"number"!=typeof r&&(r=(1-t)*e.clamp(Math.random()*t,.1,.95)),t=e.clamp(t+r,0,.994)},_isRendered:function(){return!!this._getRenderedId()},_getRenderedId:function(t){var e=this._getCurrTplId(),r="mprogress"+e;return t?r:document.getElementById(r)},_isBufferStyle:function(){return 2===this._getCurrTplId()},_isIndeterminateStyle:function(){return 3===this._getCurrTplId()},_isQueryStyle:function(){return 4===this._getCurrTplId()},_getCurrTplId:function(){var t=~~this.options.template||1;return"number"==typeof t?t:r},_getCurrTemplate:function(){var t,e=this.options.template||1,r=["determinate","buffer","indeterminate","query"];return"number"==typeof~~e?(t=r[e-1],u[t]||""):"string"==typeof e?template:void 0},_getPositioningCSS:function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"},_barPositionCSS:function(t,r,s){var i;return i="translate3d"===this.options.positionUsing?{transform:"translate3d("+e.toBarPerc(t)+"%,0,0)"}:"translate"===this.options.positionUsing?{transform:"translate("+e.toBarPerc(t)+"%,0)"}:{"margin-left":e.toBarPerc(t)+"%"},i.transition="all "+r+"ms "+s,i}},function(){var t=0,e=0;d.prototype.promise=function(r){if(!r||"resolved"==r.state())return this;var s=this;return 0==e&&s.start(),t++,e++,r.always(function(){e--,0==e?(t=0,s.end()):s.set((t-e)/t)}),this}}(),f})}).call(this);var mprogress=new Mprogress;