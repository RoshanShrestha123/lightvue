var t={name:"Star",props:{fill:{type:Number,default:0},points:{type:Array,default:()=>[]},size:{type:Number,default:50},starId:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#000"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},glow:{type:Number,default:0},glowColor:{type:String,default:null,required:!1}},emits:["star-mouse-move","star-selected"],data:()=>({starPoints:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],grad:"",glowId:""}),computed:{starPointsToString(){return this.starPoints.join(",")},gradId(){return"url(#"+this.grad+")"},starSize(){const t=this.roundedCorners&&this.borderWidth<=0?parseInt(this.size)-parseInt(this.border):this.size;return parseInt(t)+parseInt(this.border)},starFill(){return this.rtl?100-this.fill+"%":this.fill+"%"},border(){return this.roundedCorners&&this.borderWidth<=0?6:this.borderWidth},getBorderColor(){return this.roundedCorners&&this.borderWidth<=0?this.fill<=0?this.inactiveColor:this.activeColor:this.borderColor},maxSize(){return this.starPoints.reduce((function(t,e){return Math.max(t,e)}))},viewBox(){return"0 0 "+this.maxSize+" "+this.maxSize}},created(){this.starPoints=this.points.length?this.points:this.starPoints,this.calculatePoints(),this.grad=this.getRandomId(),this.glowId=this.getRandomId()},methods:{mouseMoving(t){this.$emit("star-mouse-move",{event:t,position:this.getPosition(t),id:this.starId})},getPosition(t){var e=.92*this.size;const r=this.rtl?Math.min(t.offsetX,45):Math.max(t.offsetX,1);var i=Math.round(100/e*r);return Math.min(i,100)},selected(t){this.$emit("star-selected",{id:this.starId,position:this.getPosition(t)})},getRandomId:()=>Math.random().toString(36).substring(7),calculatePoints(){this.starPoints=this.starPoints.map((t=>this.size/this.maxSize*t+1.5*this.border))},parseAlphaColor(t){const e=[{pattern:/^rgba\((\d{1,3}%?\s*,\s*){3}(\d*(?:\.\d+)?)\)$/,getColor:t=>t.replace(/,(?!.*,).*(?=\))|a/g,""),getOpacity:t=>t.match(/\.\d+|[01](?=\))/)[0]},{pattern:/^hsla\(\d+\s*,\s*([\d.]+%\s*,\s*){2}(\d*(?:\.\d+)?)\)$/,getColor:t=>t.replace(/,(?!.*,).*(?=\))|a/g,""),getOpacity:t=>t.match(/\.\d+|[01](?=\))/)[0]},{pattern:/^#([0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/,getColor:t=>5===t.length?t.substring(0,4):t.substring(0,7),getOpacity:t=>5===t.length?(parseInt(t.substring(4,5)+t.substring(4,5),16)/255).toFixed(2):(parseInt(t.substring(7,9),16)/255).toFixed(2)},{pattern:/^transparent$/,getColor:()=>"#fff",getOpacity:()=>"0"}];for(let r=0;r<e.length;r++)if(e[r].pattern.test(t))return{color:e[r].getColor(t),opacity:e[r].getOpacity(t)};return{color:t,opacity:"1"}},getColor(t){return this.parseAlphaColor(t).color},getOpacity(t){return this.parseAlphaColor(t).opacity}}};function e(t,e,r,i,n,s,o,a,l,d){"boolean"!=typeof o&&(l=a,a=o,o=!1);const u="function"==typeof r?r.options:r;let c;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,n&&(u.functional=!0)),i&&(u._scopeId=i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):e&&(c=o?function(t){e.call(this,d(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(u.functional){const t=u.render;u.render=function(e,r){return c.call(r),t(e,r)}}else{const t=u.beforeCreate;u.beforeCreate=t?[].concat(t,c):[c]}return r}const r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function i(t){return(t,e)=>function(t,e){const i=r?e.media||"default":t,o=s[i]||(s[i]={ids:new Set,styles:[]});if(!o.ids.has(t)){o.ids.add(t);let r=e.source;if(e.map&&(r+="\n/*# sourceURL="+e.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),void 0===n&&(n=document.head||document.getElementsByTagName("head")[0]),n.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(r),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{const t=o.ids.size-1,e=document.createTextNode(r),i=o.element.childNodes;i[t]&&o.element.removeChild(i[t]),i.length?o.element.insertBefore(e,i[t]):o.element.appendChild(e)}}}(t,e)}let n;const s={};const o=e({render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["lv-rating",{"--rtl":t.rtl},{"--inline":t.inline}]},[r("div",{staticClass:"lv-rating",on:{mouseleave:t.resetRating}},[t._l(t.maxRating,(function(e){return r("span",{key:e,class:[{"--read-only":t.readOnly},"lv-rating__star"],style:{"margin-right":t.margin+"px"}},[r("star",{attrs:{fill:t.fillLevel[e-1],size:t.starSize,points:t.starPoints,"star-id":e,step:t.step,"active-color":t.activeColor,"inactive-color":t.inactiveColor,"border-color":t.borderColor,"border-width":t.borderWidth,"rounded-corners":t.roundedCorners,rtl:t.rtl,glow:t.glow,"glow-color":t.glowColor},on:{"star-selected":function(e){return t.setRating(e,!0)},"star-mouse-move":t.setRating}})],1)})),t._v(" "),t.showRating?r("span",{class:["lv-rating__value",t.textClass]},[t._v(" "+t._s(t.formattedRating))]):t._e()],2)])},staticRenderFns:[]},undefined,{name:"LvRating",components:{Star:e({render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"lv-rating__star-svg",attrs:{height:t.starSize,width:t.starSize,viewBox:t.viewBox},on:{mousemove:t.mouseMoving,click:t.selected}},[r("linearGradient",{attrs:{id:t.grad,x1:"0",x2:"100%",y1:"0",y2:"0"}},[r("stop",{attrs:{offset:t.starFill,"stop-color":t.rtl?t.getColor(t.inactiveColor):t.getColor(t.activeColor),"stop-opacity":t.rtl?t.getOpacity(t.inactiveColor):t.getOpacity(t.activeColor)}}),t._v(" "),r("stop",{attrs:{offset:t.starFill,"stop-color":t.rtl?t.getColor(t.activeColor):t.getColor(t.inactiveColor),"stop-opacity":t.rtl?t.getOpacity(t.activeColor):t.getOpacity(t.inactiveColor)}})],1),t._v(" "),r("filter",{attrs:{id:t.glowId,height:"130%",width:"130%",filterUnits:"userSpaceOnUse"}},[r("feGaussianBlur",{attrs:{stdDeviation:t.glow,result:"coloredBlur"}}),t._v(" "),r("feMerge",[r("feMergeNode",{attrs:{in:"coloredBlur"}}),t._v(" "),r("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1),t._v(" "),t.glowColor?r("polygon",{directives:[{name:"show",rawName:"v-show",value:t.fill>1,expression:"fill > 1"}],attrs:{points:t.starPointsToString,fill:t.gradId,stroke:t.glowColor,filter:"url(#"+t.glowId+")"}}):t._e(),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.gradId,stroke:t.getBorderColor,"stroke-width":t.border,"stroke-linejoin":t.roundedCorners?"round":"miter"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.gradId}})],1)},staticRenderFns:[]},(function(t){t&&t("data-v-2c391fb4_0",{source:".lv-rating__star-svg{overflow:visible!important}",map:void 0,media:void 0})}),t,undefined,false,undefined,!1,i,void 0,void 0)},props:{increment:{type:Number,default:1},rating:{type:Number,default:0},roundStartRating:{type:Boolean,default:!0},activeColor:{type:String,default:"#38b2ac"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},starPoints:{type:Array,default:()=>[]},starSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},padding:{type:Number,default:0},rtl:{type:Boolean,default:!1},fixedPoints:{type:Number,default:null},glow:{type:Number,default:0},glowColor:{type:String,default:"#39b1ac"},clearable:{type:Boolean,default:!1}},emits:["update:rating","hover:rating"],data:()=>({step:0,fillLevel:[],currentRating:0,selectedRating:0,ratingSelected:!1}),computed:{formattedRating(){return null===this.fixedPoints?this.currentRating:this.currentRating.toFixed(this.fixedPoints)},shouldRound(){return this.ratingSelected||this.roundStartRating},margin(){return this.padding+this.borderWidth}},watch:{rating(t){this.currentRating=t,this.selectedRating=t,this.createStars(this.shouldRound)}},created(){this.step=100*this.increment,this.currentRating=this.rating,this.selectedRating=this.currentRating,this.createStars(this.roundStartRating)},methods:{setRating(t,e){if(!this.readOnly){const r=this.rtl?(100-t.position)/100:t.position/100;this.currentRating=(t.id+r-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,this.createStars(),e?(this.clearable&&this.currentRating===this.selectedRating?this.selectedRating=0:this.selectedRating=this.currentRating,this.$emit("update:rating",this.selectedRating),this.ratingSelected=!0):this.$emit("hover:rating",this.currentRating)}},resetRating(){this.readOnly||(this.currentRating=this.selectedRating,this.createStars(this.shouldRound))},createStars(t=!0){t&&this.round();for(var e=0;e<this.maxRating;e++){let t=0;e<this.currentRating&&(t=this.currentRating-e>1?100:100*(this.currentRating-e)),this.fillLevel[e]=Math.round(t)}},round(){var t=1/this.increment;this.currentRating=Math.min(this.maxRating,Math.ceil(this.currentRating*t)/t)}}},undefined,false,undefined,!1,void 0,void 0,void 0);export default o;
