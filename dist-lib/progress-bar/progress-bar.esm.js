var e={name:"LvProgressbar",props:{value:{type:Number,default:0},color:{type:String,default:"#607c8a"},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["lv-progressbar lv-component",{"lv-progressbar--determinate":this.determinate,"lv-progressbar--indeterminate":this.indeterminate}]},progressStyle(){return{backgroundColor:this.color,width:this.value+"%",display:"block"}},indeterminateColor(){return{backgroundColor:this.color}},indeterminate(){return"indeterminate"===this.mode},determinate(){return"determinate"===this.mode}}};function t(e,t,r,n,i,a,s,o,l,d){"boolean"!=typeof s&&(l=o,o=s,s=!1);const m="function"==typeof r?r.options:r;let c;if(e&&e.render&&(m.render=e.render,m.staticRenderFns=e.staticRenderFns,m._compiled=!0,i&&(m.functional=!0)),n&&(m._scopeId=n),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},m._ssrRegister=c):t&&(c=s?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),c)if(m.functional){const e=m.render;m.render=function(t,r){return c.call(r),e(t,r)}}else{const e=m.beforeCreate;m.beforeCreate=e?[].concat(e,c):[c]}return r}const r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function n(e){return(e,t)=>function(e,t){const n=r?t.media||"default":e,s=a[n]||(a[n]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);let r=t.source;if(t.map&&(r+="\n/*# sourceURL="+t.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",t.media&&s.element.setAttribute("media",t.media),void 0===i&&(i=document.head||document.getElementsByTagName("head")[0]),i.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(r),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{const e=s.ids.size-1,t=document.createTextNode(r),n=s.element.childNodes;n[e]&&s.element.removeChild(n[e]),n.length?s.element.insertBefore(t,n[e]):s.element.appendChild(t)}}}(e,t)}let i;const a={};const s=t({render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.containerClass,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"}},[e.determinate?r("div",{staticClass:"lv-progressbar__value lv-progressbar__value--animate",style:e.progressStyle}):e._e(),e._v(" "),e.determinate&&e.value&&e.showValue?r("div",{staticClass:"lv-progressbar--determinate__label"},[e._v(e._s(e.value+"%"))]):e._e(),e._v(" "),e.indeterminate?r("div",{staticClass:"lv-progressbar--indeterminate-container"},[r("div",{staticClass:"lv-progressbar__value lv-progressbar__value--animate",style:e.indeterminateColor})]):e._e()])},staticRenderFns:[]},(function(e){e&&e("data-v-2ebbdfc8_0",{source:".lv-progressbar{position:relative;overflow:hidden}.lv-progressbar{height:.25rem}.lv-progressbar{border:0 none;height:1.5rem;background:#dee2e6;border-radius:3px}.lv-progressbar .lv-progressbar-value{border:0 none;margin:0;background:var(--primary-color)}.lv-progressbar .lv-progressbar-label{color:#495057;line-height:1.5rem}.lv-progressbar--determinate .lv-progressbar__value{height:100%;width:0%;position:absolute;display:none;border:0 none}.lv-progressbar--determinate .lv-progressbar__value--animate{transition:width 1s ease-in-out}.lv-progressbar--determinate .lv-progressbar--determinate__label{text-align:center;height:100%;width:100%;position:absolute;font-weight:700}.lv-progressbar--indeterminate{height:.5em}.lv-progressbar--indeterminate .lv-progressbar__value::before{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;-webkit-animation:lv-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;animation:lv-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.lv-progressbar--indeterminate .lv-progressbar__value::after{content:'';position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;-webkit-animation:lv-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation:lv-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}@-webkit-keyframes lv-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes lv-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@-webkit-keyframes lv-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes lv-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}",map:void 0,media:void 0})}),e,undefined,false,undefined,!1,n,void 0,void 0);export default s;
