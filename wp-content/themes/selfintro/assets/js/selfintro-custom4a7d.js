var AplCss, targetSection, tar, classname;
! function($) {
    "use strict";
    jQuery(".menu-menu-header-container>li>a[href*=#]").on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = jQuery(this.hash);
            if ((e = e.length && e || jQuery("[name=" + this.hash.slice(1) + "]")).length) {
                var t = e.offset().top;
                return $("html,body").animate({
                    scrollTop: t
                }, 1400), !1
            }
        }
    }), jQuery('.menu-menu-header-container> ul> li a[href*="#"]').on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = jQuery(this.hash);
            if ((e = e.length ? e : jQuery("[name=" + this.hash.slice(1) + "]")).length) return jQuery("html, body").animate({
                scrollTop: e.offset().top
            }, 1400), !1
        }
    }), jQuery(window).on("load", function() {
        jQuery("#status").fadeOut(), jQuery("#preloader").delay(200).fadeOut("slow")
    }), jQuery(document).ready(function($) {
        var $this = $(window),
            window_height = window.innerHeight;
        $(".prt_home_wrapper , .self_layout_second").css("height", window_height), $(".prt_loadmore").slice(0, 3).show(), $("#loadMore").on("click", function(e) {
            e.preventDefault(), $(".prt_loadmore:hidden").slice(0, 5).slideDown(), 0 == $(".prt_loadmore:hidden").length && $("#load").fadeOut("slow")
        }), $(".prt_couter_wrapper").appear(function() {
            $(".timer").countTo()  
        }), $(".prt_profile_slider .owl-carousel").owlCarousel({
            loop: !0,
            margin: 10,
            rtl: !0,
            nav: !1,
            dots: !0,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1e3: {
                    items: 3
                }
            }
        });
        /*var circle1 = Circles.create({
                class: "circle",
                value: 10,
                radius: 100,
                maxValue: 100,
                number: 10,
                text: "10%",
                width: 8,
                colors: ["#202020", "#00c8ff"],
                duration: 900
            }),
            circle2 = Circles.create({
                id: "circles-2",
                value: 80,
                radius: 100,
                maxValue: 100,
                number: 80,
                text: "80%",
                width: 8,
                colors: ["#202020", "#ff8511"],
                duration: 900
            }),
            circle3 = Circles.create({
                id: "circles-3",
                value: 75,
                radius: 100,
                maxValue: 100,
                number: 75,
                text: "75%",
                width: 8,
                colors: ["#202020", "#f26525"],
                duration: 900
            }),
            circle4 = Circles.create({
                id: "circles-4",
                value: 70,
                radius: 100,
                maxValue: 100,
                number: 70,
                text: "70%",
                width: 8,
                colors: ["#202020", "#1d8bbe"],
                duration: 900
            }),*/
            AplCss, targetSection, tar;
        $(".prt_client_slider .owl-carousel").owlCarousel({
            loop: !0,
            margin: 10,
            rtl: !0,
            autoplay: !0,
            nav: !1,
            dots: !1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1e3: {
                    items: 5
                }
            }
        }), $(".popup-gallery").magnificPopup({
            delegate: "a.imageopen",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-img-mobile",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(e) {
                    return e.el.attr("title") + "<small></small>"
                }
            }
        }),
        
        /*$("a.popup-youtube").magnificPopup({
            disableOn: 0,
            src: video,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }),
        */
        $('.popup-youtube').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function (url) { return url },
                    src: '%id%'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: function (url) { return url },
                    src: '%id%'
                }
            }
        }
    });
        
        
        $("div.prt_img_click").on("click", function() {
            if (!$(this).hasClass("active")) {
                $("div.prt_services_slider_imgs img").removeClass("active");
                var e = $("div.prt_services_slider_imgs .img_" + $(this).attr("id")),
                    t = e[0].outerHTML;
                e.remove(), $("div.prt_services_slider_imgs").prepend(t), $("div.prt_services_slider_imgs img:first").addClass("active"), $("div.prt_services_slider_box .prt_img_click").removeClass("active"), $(this).addClass("active")
            }
        });
        var timing = 500;
        $("div.prt_menu_wrapper a").on("click", function(e) {
            e.preventDefault(), tar = $(this).attr("href").split("#")[1], targetSection = $(".prt_" + tar + "_wrapper"), "about" == tar ? AplCss = {
                top: 0
            } : "contact" == tar ? AplCss = {
                left: 0
            } : "services" == tar ? AplCss = {
                bottom: 0,
                top: 0
            } : "portfolio" == tar && (AplCss = {
                right: 0
            }), targetSection.css("display", "block"), targetSection.animate(AplCss, timing)
        }), $("i.prt_close").on("click", function() {
            count += 1, hide_section(), $("i.prt_close").addClass("prt_close_back")
        });
        var count = 0;

        function hide_section() {
            "about" == tar ? AplCss = {
                display: "none",
                top: "-100%"
            } : "contact" == tar ? AplCss = {
                display: "none",
                left: "100%"
            } : "services" == tar ? AplCss = {
                display: "none",
                bottom: "0",
                top: "100%"
            } : "portfolio" == tar && (AplCss = {
                display: "none",
                right: "100%"
            }), setTimeout(function() {
                targetSection.css("display", "none")
            }, timing), targetSection.animate(AplCss, timing)
        }

        function checkRequire(formId, targetResp) {
            targetResp.html("");
            var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,
                image = /\.(jpe?g|gif|png|PNG|JPE?G)$/,
                mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/,
                facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/,
                twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/,
                google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/,
                check = 0;
            $("#er_msg").remove();
            var target = $("object" == typeof formId ? formId : "#" + formId);
            return target.find("input , textarea , select").each(function() {
                if ($(this).hasClass("require")) {
                    if ("" == $(this).val().trim()) return check = 1, $(this).focus(), targetResp.html("You missed out some fields."), $(this).addClass("error"), !1;
                    $(this).removeClass("error")
                }
                if ("" != $(this).val().trim()) {
                    var valid = $(this).attr("data-valid");
                    if (void 0 !== valid) {
                        if (!eval(valid).test($(this).val().trim())) return $(this).addClass("error"), $(this).focus(), check = 1, targetResp.html($(this).attr("data-error")), !1;
                        $(this).removeClass("error")
                    }
                }
            }), check
        }
        $(".prt_menu_wrapper a").on("click", function() {
            2 == (count += 1) && $("i.prt_close").removeClass("prt_close_back"), count = 0
        }), $("img#prt_close_tab").on("click", function() {
            hide_section()
        }), $(".submitForm").on("click", function() {
            var e = $(this),
                t = e.closest("form"),
                r = t.find(".response");
            if (0 == checkRequire(t, r)) {
                var o = new FormData(t[0]);
                o.append("form_type", e.attr("form-type")), $.ajax({
                    method: "post",
                    url: "ajax.php",
                    data: o,
                    cache: !1,
                    contentType: !1,
                    processData: !1
                }).done(function(e) {
                    1 == e ? (t.find("input").val(""), t.find("textarea").val(""), r.html('<p style="color:green;">Mail has been sent successfully.</p>')) : r.html('<p style="color:red;">Something went wrong please try again latter.</p>')
                })
            }
        }), $(window).scroll(function() {
            var e = $(window).scrollTop() + 1;
            $(window).width() > 767 && e > 100 ? $(".cv_header").addClass("menu_fixed animated fadeInDown") : $(".cv_header").removeClass("menu_fixed animated fadeInDown")
        }), $(".navbar-toggle").on("click", function() {
            $(".cv_menu").toggleClass("resp")
        }), $(window).width() < 991 && $(".self_toggle_btn , .self_header ul li a").on("click", function() {
            $(".self_header").toggleClass("show")
        })
    }), jQuery("#style-switcher .bottom a.settings").on("click", function(e) {
        e.preventDefault(), "-180px" === jQuery("#style-switcher").css("left") ? jQuery("#style-switcher").animate({
            left: "0px"
        }) : jQuery("#style-switcher").animate({
            left: "-180px"
        })
    }), jQuery(".switch-color-out").on("mousedown", function(e) {
        jQuery("#style-switcher").animate({
            left: "-180px"
        })
    }), jQuery(".cv_colorchange").on("click", function() {
        var e = jQuery("input[name=selfintro_template_url]").val() + "/assets/css/colors/" + jQuery(this).attr("id") + ".css";
        jQuery("#slefintro-theme-change-css").attr("href", e)
    }), jQuery(".switcher_second_layout #style-switcher_second .bottom a.settings").on("click", function(e) {
        e.preventDefault(), "-180px" === jQuery(".switcher_second_layout #style-switcher_second").css("right") ? jQuery(".switcher_second_layout #style-switcher_second").animate({
            right: "0px"
        }) : jQuery(".switcher_second_layout #style-switcher_second").animate({
            right: "-180px"
        })
    }), jQuery(".self_layout_second").on("mousedown", function(e) {
        jQuery(".switcher_second_layout #style-switcher_second").animate({
            right: "-180px"
        })
    }), jQuery(".prt_btn").on("click", function() {
        jQuery(".prt_loader").show();
        var e = jQuery(".ajx_auto_incriment").val(),
            t = +jQuery(".ajx_prot_number").val() + (jQuery(".ajx_prot_showmore").val() * e);
        e++, jQuery(".ajx_auto_incriment").val(e);
        var r = "click_value=" + t;
        r += "&action=selfintro_load_portfolio", jQuery.ajax({
            type: "post",
            url: jQuery("#ajaxurl").val(),
            data: r,
            success: function(e) {
                jQuery("#ajax_portplio_shortcode").html(e), jQuery(".prt_loader").hide(), jQuery(".popup-gallery").magnificPopup({
                    delegate: "a.imageopen",
                    type: "image",
                    tLoading: "Loading image #%curr%...",
                    mainClass: "mfp-img-mobile",
                    gallery: {
                        enabled: !0,
                        navigateByImgClick: !0,
                        preload: [0, 1]
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                        titleSrc: function(e) {
                            return e.el.attr("title") + "<small></small>"
                        }
                    }
                }),
                
                 jQuery('.popup-youtube').magnificPopup({
                    type: 'iframe',
                    iframe: {
                        patterns: {
                            youtube: {
                                index: 'youtube.com/',
                                id: function (url) { return url },
                                src: '%id%'
                            },
                            vimeo: {
                                index: 'vimeo.com/',
                                id: function (url) { return url },
                                src: '%id%'
                            }
                        }
                    }
                });
            }
        })
    }), jQuery(".product_load").on("click", function() {
        jQuery(".prt_loader").show();
        var e = jQuery(".ajx_auto_incriment").val(),
            t = +jQuery(".ajx_prot_number").val() + +(jQuery(".ajx_prot_showmore").val() * e);
        e++, jQuery(".ajx_auto_incriment").val(e);
        var r = "click_value=" + t;
        r += "&action=selfintro_product_load", jQuery.ajax({
            type: "post",
            url: jQuery("#ajaxurl").val(),
            data: r,
            success: function(e) {
                jQuery("#ajax_product_shortcode").html(e), jQuery(".prt_loader").hide()
            }
        })
    }), jQuery("#back-top a").on("click", function() {
        return jQuery("body,html").animate({
            scrollTop: 0
        }, 800), !1
    }), jQuery(".menu-menu-header-container ul li a").on("click", function(e) {
        jQuery(".menu-menu-header-container ul li ").removeClass("current_page_item"), jQuery(this).parent().addClass("current_page_item")
    }), jQuery(window).scroll(function() {
        var e = jQuery(window).scrollTop(),
            t = jQuery(".menu-menu-header-container ul li");
        e >= 0 ? jQuery("[data-scroll]").each(function(r) {
            jQuery(this).position().top <= e + 100 && (t.removeClass("current_page_item"), t.eq(r).addClass("current_page_item"))
        }) : (t.removeClass("current_page_item"), jQuery(".menu-menu-header-container ul li:first").addClass("current_page_item"))
    }), jQuery("#back-top").hide(), jQuery(window).scroll(function() {
        jQuery(this).scrollTop() > 100 ? jQuery("#back-top").fadeIn() : jQuery("#back-top").fadeOut()
    }), jQuery("#back-top").on("click", function() {
        return jQuery("html,body").animate({
            scrollTop: 0
        }, 600), !1
    }), jQuery(".related.products .owl-carousel").owlCarousel({
        delay: 9e3,
        loop: !0,
        margin: 10,
        nav: !1,
        dots: !0,
        autoplay: !0,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1e3: {
                items: 4
            }
        }
    }), jQuery(".self_service_slider .owl-carousel").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !1,
        margin: 15,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    }), jQuery(".self_woocommerce_product .owl-carousel").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !0,
        dots: !1,
        navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1e3: {
                items: 4
            }
        }
    }), jQuery(".slef_service_btn").on("click", function() {
        jQuery(".self_service_detail").addClass("open")
    }), jQuery(".self_service_close").on("click", function() {
        jQuery(".self_service_detail").removeClass("open")
    }), jQuery(".popup-with-form").magnificPopup({
        type: "inline",
        preloader: !1,
        focus: "#name",
        callbacks: {
            beforeOpen: function() {
                jQuery(window).width() < 700 ? this.st.focus = !1 : this.st.focus = "#name"
            }
        }
    }), jQuery(".self_service_detail").addClass("animated zoomIn"), jQuery(".flex-control-thumbs li img").on("click", function() {
        var e = jQuery(this).attr("src");
        jQuery(".sl_product_img_target").attr("src", e)
    })
	
}();
var timing = 400;
jQuery("div.self_header ul li a").on("click", function(e) {
    e.preventDefault(), tar = jQuery(this).attr("href").split("#")[1], classname = jQuery(this).attr("class"), targetSection = jQuery(".self_page_sections.section_" + tar + "_part"), "home" == tar ? (jQuery(".section_home_part").addClass(classname), jQuery(".section_home_part").removeClass("home_active"), jQuery(".section_contact_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_services_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_portfolio_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_shop_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_about_part").removeClass("prt_right prt_left prt_top prt_bottom")) : "about" == tar ? (jQuery(".section_about_part").addClass(classname), jQuery(".section_home_part").removeClass("home_active"), jQuery(".section_contact_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_services_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_portfolio_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_shop_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_home_part").removeClass("prt_right prt_left prt_top prt_bottom")) : "contact" == tar ? (jQuery(".section_contact_part").addClass(classname), jQuery(".section_home_part").removeClass("home_active"), jQuery(".section_home_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_services_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_portfolio_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_shop_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_about_part").removeClass("prt_right prt_left prt_top prt_bottom")) : "services" == tar ? (jQuery(".section_services_part").addClass(classname), jQuery(".section_home_part").removeClass("home_active"), jQuery(".section_home_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_contact_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_portfolio_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_shop_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_about_part").removeClass("prt_right prt_left prt_top prt_bottom")) : "portfolio" == tar ? (jQuery(".section_portfolio_part").addClass(classname), jQuery(".section_home_part").removeClass("home_active"), jQuery(".section_home_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_contact_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_services_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_shop_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_about_part").removeClass("prt_right prt_left prt_top prt_bottom")) : "shop" == tar && (jQuery(".section_shop_part").addClass(classname), jQuery(".section_home_part").removeClass("home_active"), jQuery(".section_home_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_contact_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_services_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_portfolio_part").removeClass("prt_right prt_left prt_top prt_bottom"), jQuery(".section_about_part").removeClass("prt_right prt_left prt_top prt_bottom")), targetSection.animate(AplCss, timing)
}), jQuery("div.self_header ul").on("click", "li", function() {
    jQuery("div.self_header ul li.active").removeClass("active"), jQuery(this).addClass("active")
}), jQuery(".header_tabs li a.header_top").on("click", function() {
    jQuery(".self_layout_second").addClass("header_top"), jQuery(".self_layout_second").removeClass("header_bottom")
}), jQuery(".header_tabs li a.header_bottom").on("click", function() {
    jQuery(".self_layout_second").addClass("header_bottom"), jQuery(".self_layout_second").removeClass("header_top")
}), jQuery(".header_tabs li a.header_left").on("click", function() {
    jQuery(".self_layout_second").removeClass("header_top , header_bottom")
});
   jQuery('.typed_strings').each(function () {
		var strings = jQuery('.write').attr('data-strings');
		jQuery(".write").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		});
	});
	//About Section
	jQuery('.typed_strings_about').each(function () {
		var strings = jQuery('.write_about').attr('data-strings-about');
		jQuery(".write_about").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		});
	});
	//Education Section
	jQuery('.typed_strings_education').each(function () {
		var strings = jQuery('.write_education').attr('data-strings-education');
		jQuery(".write_education").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		});
	});
	//Experience Section
	jQuery('.typed_strings_experience').each(function () {
		var strings = jQuery('.write_experience').attr('data-strings-experience');
		jQuery(".write_experience").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		});
	});
	//Portfolio Section
	jQuery('.typed_strings_portfolio').each(function () {
		var strings = jQuery('.write_portfolio').attr('data-strings-portfolio');
		jQuery(".write_portfolio").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		}); 
	});
	//Product Section 
	jQuery('.typed_strings_product').each(function () {
		var strings = jQuery('.write_product').attr('data-strings-product');
		jQuery(".write_product").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		}); 
	});
	//Blog Section
	jQuery('.typed_strings_blog').each(function () {
		var strings = jQuery('.write_blog').attr('data-strings-blog');
		jQuery(".write_blog").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		});   
	});
	//Services Section
	jQuery('.typed_strings_services').each(function () {
		var strings = jQuery('.write_services').attr('data-strings-services');
		jQuery(".write_services").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		});   
	});
	//Skills Section
	jQuery('.typed_strings_skills').each(function () {
		var strings = jQuery('.write_skills').attr('data-strings-skills');
		jQuery(".write_skills").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		});   
	});
	
	//Strength Section
	jQuery('.typed_strings_strength').each(function () {
		var strings = jQuery('.write_strength').attr('data-strings-strength');
		jQuery(".write_strength").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		});   
	}); 
	
	//Contact Section
	jQuery('.typed_strings_contact').each(function () {
		var strings = jQuery('.write_contact').attr('data-strings-contact');
		jQuery(".write_contact").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true 
		});   
	});
	 
	//Clients Section
	jQuery('.typed_strings_clients').each(function () {
		var strings = jQuery('.write_clients').attr('data-strings-clients');
		jQuery(".write_clients").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true  
		});   
	}); 
	//Profiles Section
	jQuery('.typed_strings_profiles').each(function () {
		var strings = jQuery('.write_profiles').attr('data-strings-profiles');
		jQuery(".write_profiles").typed({
			strings: [strings],
			typeSpeed: 80,
			backSpeed: 80,
			typeSpeed: 1,
			loop:true  
		});   
	}); 
	
	jQuery(".service_poup").on("click", function() {
        jQuery("#serv_popup").modal('show');
        var title = jQuery(this).attr('data-title');
        var desc =  jQuery(this).attr('data-desc');
        jQuery('#exp_title').html(title);
        jQuery('#exp_desc').html(desc);
        jQuery("#serv_popup").appendTo("body");
    });