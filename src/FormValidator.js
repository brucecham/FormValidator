define(function(c,h,a){var e="BChamFormValidator";var j=['input:not([type]),input[type="color"],input[type="date"],input[type="datetime"],input[type="datetime-local"],input[type="email"],input[type="file"],input[type="hidden"],input[type="month"],input[type="number"],input[type="password"],input[type="range"],input[type="search"],input[type="tel"],input[type="text"],input[type="time"],input[type="url"],input[type="week"],textarea',"select",'input[type="checkbox"],input[type="radio"]'],i=j.join(",");var f={onSubmit:true,onBlur:true,onChange:false,onKeyup:false,onInput:true,wrapper:"div.control-group",success:{},fail:{},rules:{}};var d={required:function(l,k){return k!==null&&$.trim(k).length>0},minlength:function(p,n,o,l){var m=$.trim(n.toString()).length,k=m>=o;if(!l.required){k=k&&m!==0}return k},maxlength:function(l,k,m){return $.trim(k.toString()).length<=m},minvalue:function(m,l,k){return parseFloat(l)>=parseFloat(k)},maxvalue:function(m,k,l){return parseFloat(k)<=parseFloat(l)},regex:function(m,l,k){return k.test(l)},email:function(m,l){var k=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;return k.test($.trim(l))},url:function(m,l){var k=/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;return k.test(l)},equals:function(m,k,l){return k===l},ip:function(m,l){var k=/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i;return k.test($.trim(l))},phone:function(m,l){var k=/^(1[^012][0-9]{9})$/i;return k.test($.trim(l))},alpha:function(m,l){var k=/^[a-z]*$/i;return k.test(l)},alpha_numeric:function(m,l){var k=/^[a-z0-9]*$/i;return k.test(l)},alpha_dash:function(m,l){var k=/^[a-z0-9_\-]*$/i;return k.test(l)},digit:function(m,l){var k=/^\d*$/;return k.test(l)},numeric:function(n,m,k){var k=k||null;var l=/^([\+\-]?[0-9]+(\.[0-9]+)?)?$/;if(l.test(m)){if(k==null||m.toString().match(/\./)==null){return true}else{return m.toString().split(".")[1].length<=parseInt(k)}}else{return false}},matches:function(o,n,p,l){var m=$.trim(n).length,k=n===this.fields.filter('[data-id="'+p+'"]').val();if(!l.required){k=k&&m!==0}return k}};var g={required:"输入值不能为空",minlength:"输入值不能少于 :value 个字符",maxlength:"输入值不能超过 :value 个字符",minvalue:"最小值不能超过value",maxvalue:"最大值不能超过value",regex:"请输入正确的值",email:"请输入正确的邮箱格式,如:brucecham@outlook.com",url:"请输入正确的url地址,如:http://www.github.com",equals:"输入值必须等于 :value",ip:"请输入正确的ip地址格式,如:10.1.1.1",phone:"请输入正确的电话号码,如:18688888888",alpha:"输入值只能是a-z之间的小写字母",alpha_numeric:"输入值只能是a-z或0-9",alpha_dash:"输入值只能是a-z,0-9或下划线(_)和(-)",digit:"该项只能输入整数",numeric:"该项只能输入数字",matches:"请再次输入相同的值"};function b(k,l){var n=this;this.form=k;this.options=$.extend({},f,l);this.inputs=this.options.inputs;for(var m=0;m<this.inputs.length;m++){this.inputs[m]="[name="+this.inputs[m]+"]"}this.inputs=this.inputs.toString();this.methods=$.extend({},d);this.fields=k.find(i);this.allowed_rules=[];this.errors={};n._novalidate_old=n.form.attr("novalidate");try{n.form.attr("novalidate","novalidate")}catch(o){}}$.extend(b.prototype,{validate:function(){var k=this;k.fields.filter(k.inputs).each(function(){var l=$(this);l.trigger([e,"validate"].join(":"),[k]);if(k.errors[l.data("id")]){k.renderError.call(k,$(this))}else{k.clearError.call(k,$(this))}})},validateField:function(q,k){var r=$(this),l={},o=r.data("id"),s=null;if(r.is(":disabled")||r.hasClass("disabled")){return}delete k.errors[o];if(r.is('[type="checkbox"], [type="radio"]')){s=r.is(":checked")?r.val():null}else{s=r.val()}var t=k.options.rules[o],p=true;if(t){t=t.split("|");$.each(t,function(w,u){if($.inArray(u,k.allowed_rules)!==-1){l[u]=null}else{var v=u.split(":");if(v.length===2){if($.inArray(v[0],k.allowed_rules)!==-1){l[v[0]]=v[1]}}}});$.each(l,function(v,u){if(k.methods[v].call(k,o,s,u,l)!==true){k.errors[o]=k.format.call(k,o,v,u);p=false;return false}else{delete k.errors[o]}});if(p){var n=k.options.success[o];if(n){n.call(k,r)}}else{var m=k.options.fail[o];if(m){m.call(k,r)}}}$(k).trigger([e,"validate"].join(":"),[r,function(u){k.errors[r.data("id")]=u}])},format:function(l,m,n){var k;if(typeof this.options.messages[l]!=="undefined"&&typeof this.options.messages[l][m]!=="undefined"){k=this.options.messages[l][m]}else{k=g[m]}if($.type(n)!=="undefined"&&n!==null){if($.type(n)==="boolean"||$.type(n)==="string"||$.type(n)==="number"){n={value:n}}$.each(n,function(p,o){k=k.replace(new RegExp(":"+p,"ig"),o)})}return k},clearError:function(l){l=$(l);var k=l.closest("div.controls").children("div.help-block");if(this.options.wrapper!==null){l.closest(this.options.wrapper).removeClass("control-group-error")}k.html("")},renderError:function(l){l=$(l);var k=l.closest("div.controls").children("div.help-block");if(this.options.wrapper!==null){l.closest(this.options.wrapper).addClass("control-group-error")}if(k.length===0){k=$("<div/>",{"class":"help-block"});l.closest("div.controls").children(":last").after(k)}k.html(this.errors[l.data("id")])},clearErrors:function(){},renderErrors:function(){},extendRules:function(k){$.extend(this.methods,k)},parseDom:function(){var k=this;k.fields.each(function(){var l=$(this),m="";if(!l.data("id")){if(l.attr("name")){m=l.attr("name")}else{m=l.attr("id")}l.attr("data-id",m);l.data("id",m)}})},result:function(){var k=this;if(!$.isEmptyObject(k.errors)){return false}k.validate();if(!$.isEmptyObject(k.errors)){return false}else{return true}},launched:function(){var o=this,q=o.options.onSubmit,l=o.options.onBlur,k=o.options.onChange,m=o.options.onKeyup,p=o.options.onInput;o.parseDom();$.each(o.methods,function(s,r){o.allowed_rules.push(s)});o.fields.each(function(){$(this).on([e,"validate"].join(":"),o.validateField)});if(l||k||m||p){var n=[];if(l){n.push("blur")}if(k){n.push("change")}if(m){n.push("keyup")}if(p){n.push("input")}o.fields.filter(j[0]).each(function(){var r=$(this);r.on([n.join(" ")].join("."),function(){r.trigger([e,"validate"].join(":"),[o]);if(o.errors[r.data("id")]){o.renderError.call(o,this)}else{o.clearError.call(o,this)}})})}if(q){o.on("afterValidate",function(s,r){r.find('button[type="submit"]').addClass("disabled");r.find('button[type="submit"]').attr("disabled",true);r.find('button[type="submit"]').text("正在提交，请稍候")});o.form.on(["submit"].join("."),function(r){if(!$.isEmptyObject(o.errors)){return false}o.validate();if(!$.isEmptyObject(o.errors)){return false}else{if(typeof o.options.extendValidator!=="undefined"){if(o.options.extendValidator.call(this)){$(o).trigger([e,"afterValidate"].join(":"),[o.form])}else{return false}}else{$(o).trigger([e,"afterValidate"].join(":"),[o.form])}}})}},destory:function(){},on:function(k,m){var l=this;switch(k){case"validate":$(l).on([e,k].join("."),function(p,o,q){if(!l.errors[o.data("id")]){var n=m(p,o,q);if(n){delete l.errors[o.data("id")]}}});break;case"afterValidate":$(l).on([e,k].join("."),function(o,n){m(o,n)});break}}});a.exports=function(l,k){if(typeof l==="string"){l=$(l)}return new b(l,k)};a.exports.methods=d;a.exports.messages=g});