"use strict";var e=require("lightvue/utils/ConnectedOverlayScrollHandler"),t=require("lightvue/utils/ObjectUtils"),i=require("lightvue/utils/DomHandler"),l=require("lightvue/ripple"),s=require("lightvue/input");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),a=n(t),o=n(i),h=n(l);function d(e,t,i,l,s,n,r,a,o,h){"boolean"!=typeof r&&(o=a,a=r,r=!1);const d="function"==typeof i?i.options:i;let u;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),l&&(d._scopeId=l),n?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(n)},d._ssrRegister=u):t&&(u=r?function(e){t.call(this,h(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),u)if(d.functional){const e=d.render;d.render=function(t,i){return u.call(i),e(t,i)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,u):[u]}return i}const u=d({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",class:e.containerClass,on:{click:function(t){return e.onClick(t)}}},[e._ssrNode('<div class="lv-hidden-accessible"><input type="text"'+e._ssrAttr("id",e.inputId)+' readonly="readonly"'+e._ssrAttr("disabled",e.disabled)+e._ssrAttr("tabindex",e.tabindex)+' aria-haspopup="listbox"'+e._ssrAttr("aria-expanded",e.overlayVisible)+e._ssrAttr("aria-labelledby",e.ariaLabelledBy)+"></div> "),i("lv-input",e._b({ref:"mainInput",attrs:{type:"text",disabled:e.disabled,placeholder:e.placeholder,value:e.editableInputValue,"aria-haspopup":"listbox","aria-expanded":e.overlayVisible,editable:e.editable},on:{focus:e.onFocus,blur:e.onBlur,input:e.onEditableInput,keydown:e.onKeyDown}},"lv-input",e.$attrs,!1),[e.editable?e._e():i("span",{class:e.labelClass},[e._t("value",[e._v("\n        "+e._s(e.label)+"\n      ")],{value:e.modelValue,placeholder:e.placeholder})],2),e._v(" "),i("template",{slot:"append"},[e.clearable&&null!=e.modelValue?i("i",{staticClass:"lv-dropdown__clear-icon light-icon-x",on:{click:function(t){return e.onClearClick(t)}}}):e._e(),e._v(" "),i("div",{staticClass:"lv-dropdown__trigger",attrs:{role:"button","aria-haspopup":"listbox","aria-expanded":e.overlayVisible}},[i("span",{class:e.iconRight||"light-icon-chevron-down"})])])],2),e._ssrNode(" "),i("transition",{attrs:{name:"lv-transition__overlay"},on:{enter:e.onOverlayEnter,leave:e.onOverlayLeave}},[e.overlayVisible?i("div",{ref:"overlayRef",staticClass:"lv-dropdown__panel lv-component"},[e.filter?i("div",{staticClass:"lv-dropdown__panel-header"},[i("lv-input",{ref:"filterInput",attrs:{type:"text",autofocus:"",autoComplete:"off","icon-right":"light-icon-search",placeholder:e.filterPlaceholder},on:{keydown:e.onFilterKeyDown,"input-native":e.onFilterChange},model:{value:e.filterValue,callback:function(t){e.filterValue=t},expression:"filterValue"}})],1):e._e(),e._v(" "),i("div",{staticClass:"lv-dropdown__items-wrap",style:{"max-height":e.scrollHeight}},[i("ul",{staticClass:"lv-dropdown__items",attrs:{role:"listbox"}},[e._l(e.visibleOptions,(function(t,l){return i("li",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.getOptionRenderKey(t),class:["lv-dropdown__item",{"--selected":e.isSelected(t),"--disabled":e.isOptionDisabled(t)}],attrs:{"aria-label":e.getOptionLabel(t),role:"option","aria-selected":e.isSelected(t)},on:{click:function(i){return e.onOptionSelect(i,t)}}},[e._t("option",[e._v("\n              "+e._s(e.getOptionLabel(t))+"\n            ")],{option:t,index:l})],2)})),e._v(" "),e.filterValue&&(!e.visibleOptions||e.visibleOptions&&0===e.visibleOptions.length)?i("li",{staticClass:"lv-dropdown__empty-message"},[e._v(e._s(e.emptyFilterMessage))]):e._e()],2)])]):e._e()])],2)},staticRenderFns:[]},undefined,{name:"LvDropdown",inheritAttrs:!1,emits:["update:modelValue","input","before-show","before-hide","show","hide","change","filter"],components:{LvInput:n(s).default},props:{value:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,editable:Boolean,placeholder:String,disabled:Boolean,dataKey:null,clearable:Boolean,inputId:String,tabindex:String,iconRight:String,ariaLabelledBy:null,appendTo:{type:String,default:null},emptyFilterMessage:{type:String,default:"No results found"}},data:()=>({focused:!1,filterValue:null,overlayVisible:!1}),outsideClickListener:null,scrollHandler:null,resizeListener:null,searchTimeout:null,currentSearchChar:null,previousSearchChar:null,searchValue:null,beforeDestroy(){this.onBeforeUnmount()},beforeUnmount(){this.onBeforeUnmount()},methods:{getOptionLabel(e){return this.optionLabel?a.default.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?a.default.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?a.default.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled(e){return!!this.optionDisabled&&a.default.resolveFieldData(e,this.optionDisabled)},getSelectedOption(){let e;if(null!=this.modelValue&&this.options)for(let t of this.options)if(a.default.equals(this.modelValue,this.getOptionValue(t),this.equalityKey)){e=t;break}return e},isSelected(e){return a.default.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},getSelectedOptionIndex(){let e=-1;if(null!=this.modelValue&&this.visibleOptions)for(let t=0;t<this.visibleOptions.length;t++)if(a.default.equals(this.modelValue,this.getOptionValue(this.visibleOptions[t]),this.equalityKey)){e=t;break}return e},show(){this.$emit("before-show"),this.overlayVisible=!0},hide(){this.$emit("before-hide"),this.overlayVisible=!1},onFocus(){this.focused=!0},onBlur(){this.focused=!1},onKeyDown(e){switch(e.which){case 40:this.onDownKey(e);break;case 38:this.onUpKey(e);break;case 32:this.overlayVisible||(this.show(),e.preventDefault());break;case 13:case 27:this.overlayVisible&&(this.hide(),e.preventDefault());break;case 9:this.hide();break;default:this.search(e)}},onFilterKeyDown(e){switch(e.which){case 40:this.onDownKey(e);break;case 38:this.onUpKey(e);break;case 13:case 27:this.overlayVisible=!1,e.preventDefault()}},onDownKey(e){if(this.visibleOptions)if(!this.overlayVisible&&e.altKey)this.show();else{let t=this.findNextOption(this.getSelectedOptionIndex());t&&this.updateModel(e,this.getOptionValue(t))}e.preventDefault()},onUpKey(e){if(this.visibleOptions){let t=this.findPrevOption(this.getSelectedOptionIndex());t&&this.updateModel(e,this.getOptionValue(t))}e.preventDefault()},findNextOption(e){let t=e+1;if(t===this.visibleOptions.length)return null;let i=this.visibleOptions[t];return this.isOptionDisabled(i)?this.findNextOption(t):i},findPrevOption(e){let t=e-1;if(t<0)return null;let i=this.visibleOptions[t];return this.isOptionDisabled(i)?this.findPrevOption(t):i},onClearClick(e){this.updateModel(e,null)},onClick(e){this.disabled||o.default.hasClass(e.target,"lv-dropdown__clear-icon")||"INPUT"===e.target.tagName||this.$refs.overlayRef&&this.$refs.overlayRef.contains(e.target)||(this.overlayVisible?this.hide():this.show(),this.$refs.focusInput.focus(),this.$refs.mainInput&&this.$refs.mainInput.$el.querySelector("input").focus())},onOptionSelect(e,t){let i=this.getOptionValue(t);this.updateModel(e,i),this.$refs.focusInput.focus(),this.$refs.mainInput&&this.$refs.mainInput.$el.querySelector("input").focus(),setTimeout((()=>{this.hide()}),200)},onEditableInput(e){this.$emit("input",e),this.$emit("update:modelValue",e)},onOverlayEnter(){this.$refs.overlayRef.style.zIndex=String(o.default.generateZIndex()),this.appendContainer(),this.alignOverlay(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.filter&&this.$refs.filterInput.$el.querySelector("input").focus(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide")},alignOverlay(){this.appendTo?(o.default.absolutePosition(this.$refs.overlayRef,this.$el),this.$refs.overlayRef.style.minWidth=o.default.getOuterWidth(this.$el)+"px"):o.default.relativePosition(this.$refs.overlayRef,this.$el)},updateModel(e,t){this.$emit("input",t),this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.$refs.overlayRef&&!this.$el.contains(e.target)&&!this.$refs.overlayRef.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new r.default(this.$refs.container,(()=>{this.overlayVisible&&this.hide()}))),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},search(e){if(!this.visibleOptions)return;this.searchTimeout&&clearTimeout(this.searchTimeout);const t=String.fromCharCode(e.keyCode);this.previousSearchChar=this.currentSearchChar,this.currentSearchChar=t,this.previousSearchChar===this.currentSearchChar?this.searchValue=this.currentSearchChar:this.searchValue=this.searchValue?this.searchValue+t:t;let i=this.getSelectedOptionIndex(),l=this.searchOption(++i);l&&this.updateModel(e,this.getOptionValue(l)),this.searchTimeout=setTimeout((()=>{this.searchValue=null}),250)},searchOption(e){let t;return this.searchValue&&(t=this.searchOptionInRange(e,this.visibleOptions.length),t||(t=this.searchOptionInRange(0,e))),t},searchOptionInRange(e,t){for(let i=e;i<t;i++){let e=this.visibleOptions[i];if(this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))return e}return null},appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.$refs.overlayRef):document.getElementById(this.appendTo).appendChild(this.$refs.overlayRef))},restoreAppend(){this.$refs.overlayRef&&this.appendTo&&("body"===this.appendTo?document.body.removeChild(this.$refs.overlayRef):document.getElementById(this.appendTo).removeChild(this.$refs.overlayRef))},onFilterChange(e){this.$emit("filter",{originalEvent:e,value:e.target.value}),this.overlayVisible&&this.alignOverlay()},onBeforeUnmount(){this.restoreAppend(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}},computed:{modelValue(){return this.$attrs.modelValue?this.$attrs.modelValue:this.value},visibleOptions(){return this.filterValue&&this.filterValue.trim().length>0?this.options.filter((e=>this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).indexOf(this.filterValue.toLocaleLowerCase(this.filterLocale))>-1)):this.options},containerClass(){return["lv-dropdown lv-component",{"--disabled":this.disabled,"--clearable":this.clearable&&!this.disabled,"--focused":this.focused,"--filled":this.modelValue}]},labelClass(){return["lv-dropdown__label",{"--as-placeholder":this.label===this.placeholder,"lv-dropdown__label-empty":!this.$slots.value&&("--empty-label"===this.label||0===this.label.length)}]},label(){let e=this.getSelectedOption();return e?this.getOptionLabel(e):this.placeholder||"--empty-label"},editableInputValue(){let e=this.getSelectedOption();return e?this.getOptionLabel(e):this.modelValue},equalityKey(){return this.optionValue?null:this.dataKey}},directives:{ripple:h.default}},undefined,false,"data-v-62a6866d",!1,void 0,void 0,void 0);module.exports=u;
