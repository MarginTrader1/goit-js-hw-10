function t(t){return t&&t.__esModule?t.default:t}new(t(function(){function t(){return Math.random().toString(36).substring(2,10)}function e(t,e){function s(t,s){return s&&t&&t.classList&&t.classList.contains(s)||s&&t&&t.dataset&&t.dataset.id&&t.dataset.id===e?t:null}function i(t,e){return t&&t!==document?s(t,e)?t:i(t.parentNode,e):null}return s(t,e)||i(t,e)}function s(t,e=50,s=!1){let i;return function(...n){const a=self,l=()=>{i=null,s||t.apply(a,n)},o=s&&!i;clearTimeout(i),i=setTimeout(l,e),o&&t.apply(a,n)}}function i(t,e){return JSON.stringify(t)===JSON.stringify(e)}function n(t){const e=t.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,(t=>"-"+t.toLowerCase()));return t[0]===t[0].toUpperCase()?e.substring(1):e}class a{constructor(e){this.id="",this.style="",this.class=[],this.isMultiple=!1,this.isOpen=!1,this.isFullOpen=!1,this.intervalMove=null,e||(e={}),this.id="ss-"+t(),this.style=e.style||"",this.class=e.class||[],this.disabled=void 0!==e.disabled&&e.disabled,this.alwaysOpen=void 0!==e.alwaysOpen&&e.alwaysOpen,this.showSearch=void 0===e.showSearch||e.showSearch,this.searchPlaceholder=e.searchPlaceholder||"Search",this.searchText=e.searchText||"No Results",this.searchingText=e.searchingText||"Searching...",this.searchHighlight=void 0!==e.searchHighlight&&e.searchHighlight,this.closeOnSelect=void 0===e.closeOnSelect||e.closeOnSelect,this.contentLocation=e.contentLocation||document.body,this.contentPosition=e.contentPosition||"absolute",this.openPosition=e.openPosition||"auto",this.placeholderText=void 0!==e.placeholderText?e.placeholderText:"Select Value",this.allowDeselect=void 0!==e.allowDeselect&&e.allowDeselect,this.hideSelected=void 0!==e.hideSelected&&e.hideSelected,this.showOptionTooltips=void 0!==e.showOptionTooltips&&e.showOptionTooltips,this.minSelected=e.minSelected||0,this.maxSelected=e.maxSelected||1e3,this.timeoutDelay=e.timeoutDelay||200,this.maxValuesShown=e.maxValuesShown||20,this.maxValuesMessage=e.maxValuesMessage||"{number} selected"}}class l{constructor(e){if(this.id=e.id&&""!==e.id?e.id:t(),this.label=e.label||"",this.selectAll=void 0!==e.selectAll&&e.selectAll,this.closable=e.closable||"off",this.options=[],e.options)for(const t of e.options)this.options.push(new o(t))}}class o{constructor(e){this.id=e.id&&""!==e.id?e.id:t(),this.value=void 0===e.value?e.text:e.value,this.text=e.text||"",this.html=e.html||"",this.selected=void 0!==e.selected&&e.selected,this.display=void 0===e.display||e.display,this.disabled=void 0!==e.disabled&&e.disabled,this.mandatory=void 0!==e.mandatory&&e.mandatory,this.placeholder=void 0!==e.placeholder&&e.placeholder,this.class=e.class||"",this.style=e.style||"",this.data=e.data||{}}}class c{validateDataArray(t){if(!Array.isArray(t))return new Error("Data must be an array");for(let e of t){if(!(e instanceof l||"label"in e))return e instanceof o||"text"in e?this.validateOption(e):new Error("Data object must be a valid optgroup or option");if(!("label"in e))return new Error("Optgroup must have a label");if("options"in e&&e.options)for(let t of e.options)return this.validateOption(t)}return null}validateOption(t){return"text"in t?null:new Error("Option must have a text")}partialToFullData(t){let e=[];return t.forEach((t=>{if(t instanceof l||"label"in t){let s=[];"options"in t&&t.options&&t.options.forEach((t=>{s.push(new o(t))})),s.length>0&&e.push(new l(t))}(t instanceof o||"text"in t)&&e.push(new o(t))})),e}setData(t){this.data=this.partialToFullData(t),"single"===this.selectType&&this.setSelectedBy("value",this.getSelected())}getData(){return this.filter(null,!0)}getDataOptions(){return this.filter(null,!1)}addOption(t){this.setData(this.getData().concat(new o(t)))}setSelectedBy(t,e){let s=null,i=!1;for(let n of this.data){if(n instanceof l)for(let a of n.options)s||(s=a),a.selected=!i&&e.includes(a[t]),a.selected&&"single"===this.selectType&&(i=!0);n instanceof o&&(s||(s=n),n.selected=!i&&e.includes(n[t]),n.selected&&"single"===this.selectType&&(i=!0))}"single"===this.selectType&&s&&!i&&(s.selected=!0)}getSelected(){let t=this.getSelectedOptions(),e=[];return t.forEach((t=>{e.push(t.value)})),e}getSelectedOptions(){return this.filter((t=>t.selected),!1)}getSelectedIDs(){let t=this.getSelectedOptions(),e=[];return t.forEach((t=>{e.push(t.id)})),e}getOptgroupByID(t){for(let e of this.data)if(e instanceof l&&e.id===t)return e;return null}getOptionByID(t){let e=this.filter((e=>e.id===t),!1);return e.length?e[0]:null}search(t,e){return""===(t=t.trim())?this.getData():this.filter((s=>e(s,t)),!0)}filter(t,e){const s=[];return this.data.forEach((i=>{if(i instanceof l){let n=[];if(i.options.forEach((i=>{t&&!t(i)||(e?n.push(new o(i)):s.push(new o(i)))})),n.length>0){let t=new l(i);t.options=n,s.push(t)}}i instanceof o&&(t&&!t(i)||s.push(new o(i)))})),s}getSelectType(){return this.selectType}constructor(t,e){this.selectType="single",this.data=[],this.selectType=t,this.setData(e)}}class h{enable(){this.main.main.classList.remove(this.classes.disabled),this.content.search.input.disabled=!1}disable(){this.main.main.classList.add(this.classes.disabled),this.content.search.input.disabled=!0}open(){this.main.arrow.path.setAttribute("d",this.classes.arrowOpen),this.main.main.classList.add("up"===this.settings.openPosition?this.classes.openAbove:this.classes.openBelow),this.main.main.setAttribute("aria-expanded","true"),this.moveContent();const t=this.store.getSelectedOptions();if(t.length){const e=t[t.length-1].id,s=this.content.list.querySelector('[data-id="'+e+'"]');s&&this.ensureElementInView(this.content.list,s)}}close(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.remove(this.classes.openBelow),this.main.main.setAttribute("aria-expanded","false"),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.main.arrow.path.setAttribute("d",this.classes.arrowClose)}updateClassStyles(){if(this.main.main.className="",this.main.main.removeAttribute("style"),this.content.main.className="",this.content.main.removeAttribute("style"),this.main.main.classList.add(this.classes.main),this.content.main.classList.add(this.classes.content),""!==this.settings.style&&(this.main.main.style.cssText=this.settings.style,this.content.main.style.cssText=this.settings.style),this.settings.class.length)for(const t of this.settings.class)""!==t.trim()&&(this.main.main.classList.add(t.trim()),this.content.main.classList.add(t.trim()));"relative"===this.settings.contentPosition&&this.content.main.classList.add("ss-"+this.settings.contentPosition)}updateAriaAttributes(){this.main.main.role="combobox",this.main.main.setAttribute("aria-haspopup","listbox"),this.main.main.setAttribute("aria-controls",this.content.main.id),this.main.main.setAttribute("aria-expanded","false"),this.content.main.setAttribute("role","listbox")}mainDiv(){var t;const e=document.createElement("div");e.dataset.id=this.settings.id,e.id=this.settings.id,e.tabIndex=0,e.onkeydown=t=>{switch(t.key){case"ArrowUp":case"ArrowDown":return this.callbacks.open(),"ArrowDown"===t.key?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Enter":case" ":this.callbacks.open();const e=this.content.list.querySelector("."+this.classes.highlighted);return e&&e.click(),!1;case"Escape":return this.callbacks.close(),!1}},e.onclick=t=>{this.settings.disabled||(this.settings.isOpen?this.callbacks.close():this.callbacks.open())};const s=document.createElement("div");s.classList.add(this.classes.values),e.appendChild(s);const i=document.createElement("div");i.classList.add(this.classes.deselect);const n=null===(t=this.store)||void 0===t?void 0:t.getSelectedOptions();!this.settings.allowDeselect||this.settings.isMultiple&&n&&n.length<=0?i.classList.add(this.classes.hide):i.classList.remove(this.classes.hide),i.onclick=t=>{if(t.stopPropagation(),this.settings.disabled)return;let e=!0;const s=this.store.getSelectedOptions(),i=[];this.callbacks.beforeChange&&(e=!0===this.callbacks.beforeChange(i,s)),e&&(this.settings.isMultiple?(this.callbacks.setSelected([],!1),this.updateDeselectAll()):this.callbacks.setSelected([""],!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(i))};const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("viewBox","0 0 100 100");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d",this.classes.deselectPath),a.appendChild(l),i.appendChild(a),e.appendChild(i);const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.classList.add(this.classes.arrow),o.setAttribute("viewBox","0 0 100 100");const c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("d",this.classes.arrowClose),this.settings.alwaysOpen&&o.classList.add(this.classes.hide),o.appendChild(c),e.appendChild(o),{main:e,values:s,deselect:{main:i,svg:a,path:l},arrow:{main:o,path:c}}}mainFocus(t){"click"!==t&&this.main.main.focus({preventScroll:!0})}placeholder(){const t=this.store.filter((t=>t.placeholder),!1);let e=this.settings.placeholderText;t.length&&(""!==t[0].html?e=t[0].html:""!==t[0].text&&(e=t[0].text));const s=document.createElement("div");return s.classList.add(this.classes.placeholder),s.innerHTML=e,s}renderValues(){this.settings.isMultiple?this.renderMultipleValues():this.renderSingleValue()}renderSingleValue(){const t=this.store.filter((t=>t.selected&&!t.placeholder),!1),e=t.length>0?t[0]:null;if(e){const t=document.createElement("div");t.classList.add(this.classes.single),e.html?t.innerHTML=e.html:t.innerText=e.text,this.main.values.innerHTML=t.outerHTML}else this.main.values.innerHTML=this.placeholder().outerHTML;this.settings.allowDeselect&&t.length?this.main.deselect.main.classList.remove(this.classes.hide):this.main.deselect.main.classList.add(this.classes.hide)}renderMultipleValues(){let t=this.main.values.childNodes,e=this.store.filter((t=>t.selected&&t.display),!1);if(0===e.length)return void(this.main.values.innerHTML=this.placeholder().outerHTML);{const t=this.main.values.querySelector("."+this.classes.placeholder);t&&t.remove()}if(e.length>this.settings.maxValuesShown){const t=document.createElement("div");return t.classList.add(this.classes.max),t.textContent=this.settings.maxValuesMessage.replace("{number}",e.length.toString()),void(this.main.values.innerHTML=t.outerHTML)}{const t=this.main.values.querySelector("."+this.classes.max);t&&t.remove()}let s=[];for(let i=0;i<t.length;i++){const n=t[i],a=n.getAttribute("data-id");a&&(e.filter((t=>t.id===a),!1).length||s.push(n))}for(const t of s)t.classList.add(this.classes.valueOut),setTimeout((()=>{this.main.values.hasChildNodes()&&this.main.values.contains(t)&&this.main.values.removeChild(t)}),100);t=this.main.values.childNodes;for(let s=0;s<e.length;s++){let i=!0;for(let n=0;n<t.length;n++)e[s].id===String(t[n].dataset.id)&&(i=!1);i&&(0===t.length?this.main.values.appendChild(this.multipleValue(e[s])):0===s?this.main.values.insertBefore(this.multipleValue(e[s]),t[s]):t[s-1].insertAdjacentElement("afterend",this.multipleValue(e[s])))}this.updateDeselectAll()}multipleValue(t){const e=document.createElement("div");e.classList.add(this.classes.value),e.dataset.id=t.id;const s=document.createElement("div");if(s.classList.add(this.classes.valueText),s.innerText=t.text,e.appendChild(s),!t.mandatory){const s=document.createElement("div");s.classList.add(this.classes.valueDelete),s.onclick=e=>{if(e.preventDefault(),e.stopPropagation(),this.settings.disabled)return;let s=!0;const i=this.store.getSelectedOptions(),n=i.filter((e=>e.selected&&e.id!==t.id),!0);if(!(this.settings.minSelected&&n.length<this.settings.minSelected)&&(this.callbacks.beforeChange&&(s=!0===this.callbacks.beforeChange(n,i)),s)){let t=[];for(const e of n){if(e instanceof l)for(const s of e.options)t.push(s.value);e instanceof o&&t.push(e.value)}this.callbacks.setSelected(t,!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(n),this.updateDeselectAll()}};const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 100 100");const n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d",this.classes.optionDelete),i.appendChild(n),s.appendChild(i),e.appendChild(s)}return e}contentDiv(){const t=document.createElement("div");t.dataset.id=this.settings.id,t.id=this.settings.id;const e=this.searchDiv();t.appendChild(e.main);const s=this.listDiv();return t.appendChild(s),{main:t,search:e,list:s}}moveContent(){"relative"!==this.settings.contentPosition&&"down"!==this.settings.openPosition?"up"!==this.settings.openPosition?"up"===this.putContent()?this.moveContentAbove():this.moveContentBelow():this.moveContentAbove():this.moveContentBelow()}searchDiv(){const t=document.createElement("div"),e=document.createElement("input"),i=document.createElement("div");t.classList.add(this.classes.search);const n={main:t,input:e};if(this.settings.showSearch||(t.classList.add(this.classes.hide),e.readOnly=!0),e.type="search",e.placeholder=this.settings.searchPlaceholder,e.tabIndex=-1,e.setAttribute("aria-label",this.settings.searchPlaceholder),e.setAttribute("autocapitalize","off"),e.setAttribute("autocomplete","off"),e.setAttribute("autocorrect","off"),e.oninput=s((t=>{this.callbacks.search(t.target.value)}),100),e.onkeydown=t=>{switch(t.key){case"ArrowUp":case"ArrowDown":return"ArrowDown"===t.key?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Escape":return this.callbacks.close(),!1;case"Enter":case" ":if(this.callbacks.addable&&t.ctrlKey)return i.click(),!1;{const t=this.content.list.querySelector("."+this.classes.highlighted);if(t)return t.click(),!1}return!0}},t.appendChild(e),this.callbacks.addable){i.classList.add(this.classes.addable);const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 100 100");const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",this.classes.addablePath),e.appendChild(s),i.appendChild(e),i.onclick=t=>{if(t.preventDefault(),t.stopPropagation(),!this.callbacks.addable)return;const e=this.content.search.input.value.trim();if(""===e)return void this.content.search.input.focus();const s=t=>{let e=new o(t);if(this.callbacks.addOption(e),this.settings.isMultiple){let t=this.store.getSelected();t.push(e.value),this.callbacks.setSelected(t,!0)}else this.callbacks.setSelected([e.value],!0);this.callbacks.search(""),this.settings.closeOnSelect&&setTimeout((()=>{this.callbacks.close()}),100)},i=this.callbacks.addable(e);!1!==i&&null!=i&&(i instanceof Promise?i.then((t=>{s("string"==typeof t?{text:t,value:t}:t)})):s("string"==typeof i?{text:i,value:i}:i))},t.appendChild(i),n.addable={main:i,svg:e,path:s}}return n}searchFocus(){this.content.search.input.focus()}getOptions(t=!1,e=!1,s=!1){let i="."+this.classes.option;return t&&(i+=":not(."+this.classes.placeholder+")"),e&&(i+=":not(."+this.classes.disabled+")"),s&&(i+=":not(."+this.classes.hide+")"),Array.from(this.content.list.querySelectorAll(i))}highlight(t){const e=this.getOptions(!0,!0,!0);if(0!==e.length)if(1!==e.length||e[0].classList.contains(this.classes.highlighted)){for(let s=0;s<e.length;s++)if(e[s].classList.contains(this.classes.highlighted)){const i=e[s];i.classList.remove(this.classes.highlighted);const n=i.parentElement;if(n&&n.classList.contains(this.classes.open)){const t=n.querySelector("."+this.classes.optgroupLabel);t&&t.click()}let a=e["down"===t?s+1<e.length?s+1:0:s-1>=0?s-1:e.length-1];a.classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,a);const l=a.parentElement;if(l&&l.classList.contains(this.classes.close)){const t=l.querySelector("."+this.classes.optgroupLabel);t&&t.click()}return}e["down"===t?0:e.length-1].classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,e["down"===t?0:e.length-1])}else e[0].classList.add(this.classes.highlighted)}listDiv(){const t=document.createElement("div");return t.classList.add(this.classes.list),t}renderError(t){this.content.list.innerHTML="";const e=document.createElement("div");e.classList.add(this.classes.error),e.textContent=t,this.content.list.appendChild(e)}renderSearching(){this.content.list.innerHTML="";const t=document.createElement("div");t.classList.add(this.classes.searching),t.textContent=this.settings.searchingText,this.content.list.appendChild(t)}renderOptions(t){if(this.content.list.innerHTML="",0===t.length){const t=document.createElement("div");return t.classList.add(this.classes.search),t.innerHTML=this.settings.searchText,void this.content.list.appendChild(t)}for(const e of t){if(e instanceof l){const t=document.createElement("div");t.classList.add(this.classes.optgroup);const s=document.createElement("div");s.classList.add(this.classes.optgroupLabel),t.appendChild(s);const i=document.createElement("div");i.classList.add(this.classes.optgroupLabelText),i.textContent=e.label,s.appendChild(i);const n=document.createElement("div");if(n.classList.add(this.classes.optgroupActions),s.appendChild(n),this.settings.isMultiple&&e.selectAll){const t=document.createElement("div");t.classList.add(this.classes.optgroupSelectAll);let s=!0;for(const t of e.options)if(!t.selected){s=!1;break}s&&t.classList.add(this.classes.selected);const i=document.createElement("span");i.textContent="Select All",t.appendChild(i);const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("viewBox","0 0 100 100"),t.appendChild(a);const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d",this.classes.optgroupSelectAllBox),a.appendChild(l);const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d",this.classes.optgroupSelectAllCheck),a.appendChild(o),t.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation();const i=this.store.getSelected();if(s){const t=i.filter((t=>{for(const s of e.options)if(t===s.value)return!1;return!0}));this.callbacks.setSelected(t,!0)}else{const t=i.concat(e.options.map((t=>t.value)));this.callbacks.setSelected(t,!0)}})),n.appendChild(t)}if("off"!==e.closable){const i=document.createElement("div");i.classList.add(this.classes.optgroupClosable);const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("viewBox","0 0 100 100"),a.classList.add(this.classes.arrow),i.appendChild(a);const l=document.createElementNS("http://www.w3.org/2000/svg","path");a.appendChild(l),e.options.some((t=>t.selected))||""!==this.content.search.input.value.trim()?(i.classList.add(this.classes.open),l.setAttribute("d",this.classes.arrowOpen)):"open"===e.closable?(t.classList.add(this.classes.open),l.setAttribute("d",this.classes.arrowOpen)):"close"===e.closable&&(t.classList.add(this.classes.close),l.setAttribute("d",this.classes.arrowClose)),s.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),t.classList.contains(this.classes.close)?(t.classList.remove(this.classes.close),t.classList.add(this.classes.open),l.setAttribute("d",this.classes.arrowOpen)):(t.classList.remove(this.classes.open),t.classList.add(this.classes.close),l.setAttribute("d",this.classes.arrowClose))})),n.appendChild(i)}t.appendChild(s);for(const s of e.options)t.appendChild(this.option(s));this.content.list.appendChild(t)}e instanceof o&&this.content.list.appendChild(this.option(e))}}option(t){if(t.placeholder){const t=document.createElement("div");return t.classList.add(this.classes.option),t.classList.add(this.classes.hide),t}const e=document.createElement("div");return e.dataset.id=t.id,e.id=t.id,e.classList.add(this.classes.option),e.setAttribute("role","option"),t.class&&t.class.split(" ").forEach((t=>{e.classList.add(t)})),t.style&&(e.style.cssText=t.style),this.settings.searchHighlight&&""!==this.content.search.input.value.trim()?e.innerHTML=this.highlightText(""!==t.html?t.html:t.text,this.content.search.input.value,this.classes.searchHighlighter):""!==t.html?e.innerHTML=t.html:e.textContent=t.text,this.settings.showOptionTooltips&&e.textContent&&e.setAttribute("title",e.textContent),t.display||e.classList.add(this.classes.hide),t.disabled&&e.classList.add(this.classes.disabled),t.selected&&this.settings.hideSelected&&e.classList.add(this.classes.hide),t.selected?(e.classList.add(this.classes.selected),e.setAttribute("aria-selected","true"),this.main.main.setAttribute("aria-activedescendant",e.id)):(e.classList.remove(this.classes.selected),e.setAttribute("aria-selected","false")),e.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation();const s=this.store.getSelected(),i=e.currentTarget,n=String(i.dataset.id);if(t.disabled||t.selected&&!this.settings.allowDeselect)return;if(this.settings.isMultiple&&this.settings.maxSelected<=s.length&&!t.selected||this.settings.isMultiple&&this.settings.minSelected>=s.length&&t.selected)return;let a=!1;const l=this.store.getSelectedOptions();let o=[];this.settings.isMultiple&&(o=t.selected?l.filter((t=>t.id!==n)):l.concat(t)),this.settings.isMultiple||(o=t.selected?[]:[t]),this.callbacks.beforeChange||(a=!0),this.callbacks.beforeChange&&(a=!1!==this.callbacks.beforeChange(o,l)),a&&(this.store.getOptionByID(n)||this.callbacks.addOption(t),this.callbacks.setSelected(o.map((t=>t.value)),!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(o))})),e}destroy(){this.main.main.remove(),this.content.main.remove()}highlightText(t,e,s){let i=t;const n=new RegExp("("+e.trim()+")(?![^<]*>[^<>]*</)","i");if(!t.match(n))return t;const a=t.match(n).index,l=a+t.match(n)[0].toString().length,o=t.substring(a,l);return i=i.replace(n,`<mark class="${s}">${o}</mark>`),i}moveContentAbove(){const t=this.main.main.offsetHeight,e=this.content.main.offsetHeight;this.main.main.classList.remove(this.classes.openBelow),this.main.main.classList.add(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.content.main.classList.add(this.classes.openAbove);const s=this.main.main.getBoundingClientRect();this.content.main.style.margin="-"+(t+e-1)+"px 0px 0px 0px",this.content.main.style.top=s.top+s.height+window.scrollY+"px",this.content.main.style.left=s.left+window.scrollX+"px",this.content.main.style.width=s.width+"px"}moveContentBelow(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.add(this.classes.openBelow),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.add(this.classes.openBelow);const t=this.main.main.getBoundingClientRect();this.content.main.style.margin="-1px 0px 0px 0px","relative"!==this.settings.contentPosition&&(this.content.main.style.top=t.top+t.height+window.scrollY+"px",this.content.main.style.left=t.left+window.scrollX+"px",this.content.main.style.width=t.width+"px")}ensureElementInView(t,e){const s=t.scrollTop+t.offsetTop,i=s+t.clientHeight,n=e.offsetTop,a=n+e.clientHeight;n<s?t.scrollTop-=s-n:a>i&&(t.scrollTop+=a-i)}putContent(){const t=this.main.main.offsetHeight,e=this.main.main.getBoundingClientRect(),s=this.content.main.offsetHeight;return window.innerHeight-(e.top+t)<=s&&e.top>s?"up":"down"}updateDeselectAll(){if(!this.store||!this.settings)return;const t=this.store.getSelectedOptions(),e=t&&t.length>0,s=this.settings.isMultiple,i=this.settings.allowDeselect,n=this.main.deselect.main,a=this.classes.hide;!i||s&&!e?n.classList.add(a):n.classList.remove(a)}constructor(t,e,s){this.classes={main:"ss-main",placeholder:"ss-placeholder",values:"ss-values",single:"ss-single",max:"ss-max",value:"ss-value",valueText:"ss-value-text",valueDelete:"ss-value-delete",valueOut:"ss-value-out",deselect:"ss-deselect",deselectPath:"M10,10 L90,90 M10,90 L90,10",arrow:"ss-arrow",arrowClose:"M10,30 L50,70 L90,30",arrowOpen:"M10,70 L50,30 L90,70",content:"ss-content",openAbove:"ss-open-above",openBelow:"ss-open-below",search:"ss-search",searchHighlighter:"ss-search-highlight",searching:"ss-searching",addable:"ss-addable",addablePath:"M50,10 L50,90 M10,50 L90,50",list:"ss-list",optgroup:"ss-optgroup",optgroupLabel:"ss-optgroup-label",optgroupLabelText:"ss-optgroup-label-text",optgroupActions:"ss-optgroup-actions",optgroupSelectAll:"ss-selectall",optgroupSelectAllBox:"M60,10 L10,10 L10,90 L90,90 L90,50",optgroupSelectAllCheck:"M30,45 L50,70 L90,10",optgroupClosable:"ss-closable",option:"ss-option",optionDelete:"M10,10 L90,90 M10,90 L90,10",highlighted:"ss-highlighted",open:"ss-open",close:"ss-close",selected:"ss-selected",error:"ss-error",disabled:"ss-disabled",hide:"ss-hide"},this.store=e,this.settings=t,this.callbacks=s,this.main=this.mainDiv(),this.content=this.contentDiv(),this.updateClassStyles(),this.updateAriaAttributes(),this.settings.contentLocation.appendChild(this.content.main)}}class r{enable(){this.select.disabled=!1}disable(){this.select.disabled=!0}hideUI(){this.select.tabIndex=-1,this.select.style.display="none",this.select.setAttribute("aria-hidden","true")}showUI(){this.select.removeAttribute("tabindex"),this.select.style.display="",this.select.removeAttribute("aria-hidden")}changeListen(t){this.listen=t,t&&this.observer&&this.observer.observe(this.select,{subtree:!0,childList:!0,attributes:!0}),t||this.observer&&this.observer.disconnect()}valueChange(t){return this.listen&&this.onValueChange&&this.onValueChange(this.getSelectedValues()),!0}observeCall(t){if(!this.listen)return;let e=!1,s=!1,i=!1;for(const n of t)n.target===this.select&&("disabled"===n.attributeName&&(s=!0),"class"===n.attributeName&&(e=!0)),"OPTGROUP"!==n.target.nodeName&&"OPTION"!==n.target.nodeName||(i=!0);e&&this.onClassChange&&this.onClassChange(this.select.className.split(" ")),s&&this.onDisabledChange&&(this.changeListen(!1),this.onDisabledChange(this.select.disabled),this.changeListen(!0)),i&&this.onOptionsChange&&(this.changeListen(!1),this.onOptionsChange(this.getData()),this.changeListen(!0))}getData(){let t=[];const e=this.select.childNodes;for(const s of e)"OPTGROUP"===s.nodeName&&t.push(this.getDataFromOptgroup(s)),"OPTION"===s.nodeName&&t.push(this.getDataFromOption(s));return t}getDataFromOptgroup(t){let e={id:t.id,label:t.label,selectAll:!!t.dataset&&"true"===t.dataset.selectall,closable:t.dataset?t.dataset.closable:"off",options:[]};const s=t.childNodes;for(const t of s)"OPTION"===t.nodeName&&e.options.push(this.getDataFromOption(t));return e}getDataFromOption(t){return{id:t.id,value:t.value,text:t.text,html:t.dataset&&t.dataset.html?t.dataset.html:"",selected:t.selected,display:"none"!==t.style.display,disabled:t.disabled,mandatory:!!t.dataset&&"true"===t.dataset.mandatory,placeholder:"true"===t.dataset.placeholder,class:t.className,style:t.style.cssText,data:t.dataset}}getSelectedValues(){let t=[];const e=this.select.childNodes;for(const s of e){if("OPTGROUP"===s.nodeName){const e=s.childNodes;for(const s of e)if("OPTION"===s.nodeName){const e=s;e.selected&&t.push(e.value)}}if("OPTION"===s.nodeName){const e=s;e.selected&&t.push(e.value)}}return t}setSelected(t){this.changeListen(!1);const e=this.select.childNodes;for(const s of e){if("OPTGROUP"===s.nodeName){const e=s.childNodes;for(const s of e)if("OPTION"===s.nodeName){const e=s;e.selected=t.includes(e.value)}}if("OPTION"===s.nodeName){const e=s;e.selected=t.includes(e.value)}}this.changeListen(!0)}updateSelect(t,e,s){this.changeListen(!1),t&&(this.select.dataset.id=t),e&&(this.select.style.cssText=e),s&&(this.select.className="",s.forEach((t=>{""!==t.trim()&&this.select.classList.add(t.trim())}))),this.changeListen(!0)}updateOptions(t){this.changeListen(!1),this.select.innerHTML="";for(const e of t)e instanceof l&&this.select.appendChild(this.createOptgroup(e)),e instanceof o&&this.select.appendChild(this.createOption(e));this.select.dispatchEvent(new Event("change")),this.changeListen(!0)}createOptgroup(t){const e=document.createElement("optgroup");if(e.id=t.id,e.label=t.label,t.selectAll&&(e.dataset.selectAll="true"),"off"!==t.closable&&(e.dataset.closable=t.closable),t.options)for(const s of t.options)e.appendChild(this.createOption(s));return e}createOption(t){const e=document.createElement("option");return e.id=t.id,e.value=t.value,e.innerHTML=t.text,""!==t.html&&e.setAttribute("data-html",t.html),t.selected&&(e.selected=t.selected),t.disabled&&(e.disabled=!0),!1===t.display&&(e.style.display="none"),t.placeholder&&e.setAttribute("data-placeholder","true"),t.mandatory&&e.setAttribute("data-mandatory","true"),t.class&&t.class.split(" ").forEach((t=>{e.classList.add(t)})),t.data&&"object"==typeof t.data&&Object.keys(t.data).forEach((s=>{e.setAttribute("data-"+n(s),t.data[s])})),e}destroy(){this.changeListen(!1),this.select.removeEventListener("change",this.valueChange.bind(this)),this.observer&&(this.observer.disconnect(),this.observer=null),delete this.select.dataset.id,this.showUI()}constructor(t){this.listen=!1,this.observer=null,this.select=t,this.select.addEventListener("change",this.valueChange.bind(this),{passive:!0}),this.observer=new MutationObserver(this.observeCall.bind(this)),this.changeListen(!0)}}class d{enable(){this.settings.disabled=!1,this.select.enable(),this.render.enable()}disable(){this.settings.disabled=!0,this.select.disable(),this.render.disable()}getData(){return this.store.getData()}setData(t){const e=this.store.getSelected(),s=this.store.validateDataArray(t);if(s)return void(this.events.error&&this.events.error(s));this.store.setData(t);const n=this.store.getData();this.select.updateOptions(n),this.render.renderValues(),this.render.renderOptions(n),this.events.afterChange&&!i(e,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}getSelected(){return this.store.getSelected()}setSelected(t,e=!0){const s=this.store.getSelected();this.store.setSelectedBy("value",Array.isArray(t)?t:[t]);const n=this.store.getData();this.select.updateOptions(n),this.render.renderValues(),""!==this.render.content.search.input.value?this.search(this.render.content.search.input.value):this.render.renderOptions(n),e&&this.events.afterChange&&!i(s,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}addOption(t){const e=this.store.getSelected();this.store.getDataOptions().some((e=>{var s;return e.value===(null!==(s=t.value)&&void 0!==s?s:t.text)}))||this.store.addOption(t);const s=this.store.getData();this.select.updateOptions(s),this.render.renderValues(),this.render.renderOptions(s),this.events.afterChange&&!i(e,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}open(){this.settings.disabled||this.settings.isOpen||(this.events.beforeOpen&&this.events.beforeOpen(),this.render.open(),this.settings.showSearch&&this.render.searchFocus(),this.settings.isOpen=!0,setTimeout((()=>{this.events.afterOpen&&this.events.afterOpen(),this.settings.isOpen&&(this.settings.isFullOpen=!0)}),this.settings.timeoutDelay),"absolute"===this.settings.contentPosition&&(this.settings.intervalMove&&clearInterval(this.settings.intervalMove),this.settings.intervalMove=setInterval(this.render.moveContent.bind(this.render),500)))}close(t=null){this.settings.isOpen&&!this.settings.alwaysOpen&&(this.events.beforeClose&&this.events.beforeClose(),this.render.close(),""!==this.render.content.search.input.value&&this.search(""),this.render.mainFocus(t),this.settings.isOpen=!1,this.settings.isFullOpen=!1,setTimeout((()=>{this.events.afterClose&&this.events.afterClose()}),this.settings.timeoutDelay),this.settings.intervalMove&&clearInterval(this.settings.intervalMove))}search(t){if(this.render.content.search.input.value!==t&&(this.render.content.search.input.value=t),!this.events.search)return void this.render.renderOptions(""===t?this.store.getData():this.store.search(t,this.events.searchFilter));this.render.renderSearching();const e=this.events.search(t,this.store.getSelectedOptions());e instanceof Promise?e.then((t=>{this.render.renderOptions(this.store.partialToFullData(t))})).catch((t=>{this.render.renderError("string"==typeof t?t:t.message)})):Array.isArray(e)?this.render.renderOptions(this.store.partialToFullData(e)):this.render.renderError("Search event must return a promise or an array of data")}destroy(){document.removeEventListener("click",this.documentClick),window.removeEventListener("resize",this.windowResize,!1),"auto"===this.settings.openPosition&&window.removeEventListener("scroll",this.windowScroll,!1),document.removeEventListener("visibilitychange",this.windowVisibilityChange),this.store.setData([]),this.render.destroy(),this.select.destroy()}constructor(t){var i;if(this.events={search:void 0,searchFilter:(t,e)=>-1!==t.text.toLowerCase().indexOf(e.toLowerCase()),addable:void 0,beforeChange:void 0,afterChange:void 0,beforeOpen:void 0,afterOpen:void 0,beforeClose:void 0,afterClose:void 0},this.windowResize=s((()=>{(this.settings.isOpen||this.settings.isFullOpen)&&this.render.moveContent()})),this.windowScroll=s((()=>{(this.settings.isOpen||this.settings.isFullOpen)&&this.render.moveContent()})),this.documentClick=t=>{this.settings.isOpen&&t.target&&!e(t.target,this.settings.id)&&this.close(t.type)},this.windowVisibilityChange=()=>{document.hidden&&this.close()},this.selectEl="string"==typeof t.select?document.querySelector(t.select):t.select,!this.selectEl)return void(t.events&&t.events.error&&t.events.error(new Error("Could not find select element")));if("SELECT"!==this.selectEl.tagName)return void(t.events&&t.events.error&&t.events.error(new Error("Element isnt of type select")));this.selectEl.dataset.ssid&&this.destroy(),this.settings=new a(t.settings);const n=["afterChange","beforeOpen","afterOpen","beforeClose","afterClose"];for(const e in t.events)t.events.hasOwnProperty(e)&&(-1!==n.indexOf(e)?this.events[e]=s(t.events[e],100):this.events[e]=t.events[e]);this.settings.disabled=(null===(i=t.settings)||void 0===i?void 0:i.disabled)?t.settings.disabled:this.selectEl.disabled,this.settings.isMultiple=this.selectEl.multiple,this.settings.style=this.selectEl.style.cssText,this.settings.class=this.selectEl.className.split(" "),this.select=new r(this.selectEl),this.select.updateSelect(this.settings.id,this.settings.style,this.settings.class),this.select.hideUI(),this.select.onValueChange=t=>{this.setSelected(t)},this.select.onClassChange=t=>{this.settings.class=t,this.render.updateClassStyles()},this.select.onDisabledChange=t=>{t?this.disable():this.enable()},this.select.onOptionsChange=t=>{this.setData(t)},this.store=new c(this.settings.isMultiple?"multiple":"single",t.data?t.data:this.select.getData()),t.data&&this.select.updateOptions(this.store.getData());const l={open:this.open.bind(this),close:this.close.bind(this),addable:this.events.addable?this.events.addable:void 0,setSelected:this.setSelected.bind(this),addOption:this.addOption.bind(this),search:this.search.bind(this),beforeChange:this.events.beforeChange,afterChange:this.events.afterChange};this.render=new h(this.settings,this.store,l),this.render.renderValues(),this.render.renderOptions(this.store.getData());const o=this.selectEl.getAttribute("aria-label"),d=this.selectEl.getAttribute("aria-labelledby");o?this.render.main.main.setAttribute("aria-label",o):d&&this.render.main.main.setAttribute("aria-labelledby",d),this.selectEl.parentNode&&this.selectEl.parentNode.insertBefore(this.render.main.main,this.selectEl.nextSibling),document.addEventListener("click",this.documentClick),window.addEventListener("resize",this.windowResize,!1),"auto"===this.settings.openPosition&&window.addEventListener("scroll",this.windowScroll,!1),document.addEventListener("visibilitychange",this.windowVisibilityChange),this.settings.disabled&&this.disable(),this.settings.alwaysOpen&&this.open(),this.selectEl.slim=this}}return d}()))({select:"#selectElement"});const e=document.querySelector(".breed-select"),s=document.querySelector(".cat-info");function i(t){fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_sEDFMHRNSodHCaL7awGvLr0m2GM2ft2fhMh0p4uHuGLReqOu194EfLuWmNYD9tGw&limit=1&breed_ids=${t}`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((t=>function(t){const e=t.map((t=>`\n      <img src="${t.url}" width="500">              \n      `)),i=t.flatMap((t=>t.breeds)).map((t=>`\n      <h2>${t.name}</h2>\n      <p>${t.description}/p>              \n      `));s.innerHTML=e+i}(t))).catch((t=>{}))}document.addEventListener("DOMContentLoaded",(()=>{fetch("https://api.thecatapi.com/v1/breeds").then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((t=>function(t){const s=t.map((t=>`\n      <option value="${t.id}">${t.name}</option>\n      `)).join("");e.innerHTML=s}(t))).catch((t=>{}))})),e.addEventListener("change",(function(t){i(t.target.value)}));
//# sourceMappingURL=index.aac9ddb8.js.map
