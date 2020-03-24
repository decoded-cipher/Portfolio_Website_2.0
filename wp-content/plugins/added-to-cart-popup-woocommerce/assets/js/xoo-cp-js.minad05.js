jQuery(document).ready(function(o){var t;function a(t,a){o(document.body).trigger("adding_to_cart",[t,a]),o.ajax({url:xoo_cp_localize.wc_ajax_url.toString().replace("%%endpoint%%","xoo_cp_add_to_cart"),type:"POST",data:o.param(a),success:function(a){o(".xoo-cp-adding",t).remove(),a.fragments?(o(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,t]),t.append('<span class="xoo-cp-icon-check xoo-cp-added"></span>')):a.error?function(t,a){o(".xoo-cp-notice").html(a).attr("class","xoo-cp-notice").addClass("xoo-cp-nt-"+t),o(".xoo-cp-notice-box").fadeIn("fast"),clearTimeout(e);var e=setTimeout(function(){o(".xoo-cp-notice-box").fadeOut("slow")},3e3)}("error",a.error):console.log(a),xoo_cp_localize.reset_cart&&function(t){o(".xoo-cp-added",t).remove();var a=t.parents("form.cart").find(".qty");a.length>0&&a.val(a.attr("min")||1),o(".added_to_cart").remove()}(t)}})}function e(t,a){o(".xoo-cp-outer").show(),o.ajax({url:xoo_cp_localize.wc_ajax_url.toString().replace("%%endpoint%%","xoo_cp_update_cart"),type:"POST",data:{cart_key:t,new_qty:a},success:function(t){if(t.fragments){var a=t.fragments,e=t.cart_hash;if(o.each(t.fragments,function(t,a){o(t).replaceWith(a),o(t).stop(!0).css("opacity","1").unblock()}),wc_cart_fragments_params){var c=wc_cart_fragments_params.ajax_url.toString()+"-wc_cart_hash";sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(a)),localStorage.setItem(c,e),sessionStorage.setItem(c,e)}o(document.body).trigger("wc_fragments_loaded")}else console.log(t);o(".xoo-cp-outer").hide()}})}o(document.body).on("added_to_cart",function(){o(".xoo-cp-opac").show(),o(".xoo-cp-modal").addClass("xoo-cp-active")}),o(document).on("click",".xoo-cp-close , .xoo-cp-modal",function(t){o.each(t.target.classList,function(t,a){"xoo-cp-close"!=a&&"xoo-cp-modal"!=a||(o(".xoo-cp-opac").hide(),o(".xoo-cp-modal").removeClass("xoo-cp-active"),o(".xoo-cp-atcn , .xoo-cp-content").html(""))})}),o(document).on("submit","form.cart",function(t){t.preventDefault();var e=o(this),c=e.find('button[type="submit"]');o(".xoo-cp-added",c).remove(),c.append('<span class="xoo-cp-icon-spinner xoo-cp-adding" aria-hidden="true"></span>');var r=e.serializeArray();c.attr("name")&&"add-to-cart"==c.attr("name")&&c.attr("value")&&r.push({name:"add-to-cart",value:c.attr("value")}),r.push({name:"action",value:"xoo_cp_add_to_cart"}),a(c,r)}),o(document).on("focusin",".xoo-cp-qty",function(){t=o(this).val()}),o(document).on("change",".xoo-cp-qty",function(a){var c=o(this),r=parseFloat(o(this).val()),n=parseFloat(o(this).attr("step")),s=parseFloat(o(this).attr("min")),i=parseFloat(o(this).attr("max")),p=!1;if(0!==r){if(isNaN(r)||r<0)p=!0;else if(r>i&&i>0)alert("Maximum Quantity: "+i),p=!0;else if(r<s)p=!0;else if(r%n!=0)alert("Quantity can only be purchased in multiple of "+n),p=!0;else{e(o(this).parents("tr").data("xoo_cp_key"),r)}!0===p&&o(this).val(t)}else c.parents(".xoo-cp-pdetails").find(".xoo-cp-remove-pd").trigger("click")}),o(document).on("click",".xcp-chng",function(){var t=o(this),a=t.siblings(".xoo-cp-qty");a.trigger("focusin");var c=parseFloat(a.val()),r=parseFloat(a.attr("step")),n=parseFloat(a.attr("min")),s=parseFloat(a.attr("max"));if(t.hasClass("xcp-plus")){if((i=c+r)>s&&s>0)return void alert("Maximum Quantity: "+s)}else if(t.hasClass("xcp-minus")){var i;if(0===(i=c-r))return void t.parents(".xoo-cp-pdetails").find(".xoo-cp-remove .xcp-icon").trigger("click");if(i<n)return;if(c<0)return void alert("Invalid")}e(o(this).parents("tr").data("xoo_cp_key"),i)}),o(document).on("click",".xoo-cp-remove-pd",function(t){t.preventDefault(),e(o(this).parents("tr").data("xoo_cp_key"),0)})});