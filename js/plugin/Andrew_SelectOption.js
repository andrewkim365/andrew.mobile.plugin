﻿/*
Modification Date: 2018-07-03
Coding by Andrew.Kim (E-mail: andrewkim365@qq.com)
*/
/*-----------------------------------------------Andrew_SelectOption-------------------------------------------*/
(function($){
    var defaluts = {
        active: "",
        boxheight:"",
        speed: 1000,
        callback: function() {},
        clickback: function() {}
    };
    $.fn.extend({
        "Andrew_SelectOption": function(options){
            var option = $.extend({
            }, defaluts, options);
            $(this).addClass("ak-SelectOpts");
            return this.each(function(){
                var $this = $(this);
                var _html = [];
                _html.push("<section class=\"" + $this.attr('class') + "\">");
                _html.push("<var>" + $this.find(":selected").text() + "</var>");
                _html.push("<cite class='ak-SelectList'><ul>");
                $this.children("option").each(function () {
                    var opts = $(this);
                    _html.push("<li title='"+opts.text()+"' data-value=\"" + opts.val() + "\">" + opts.text() + "</li>");
                });
                _html.push("</ul>");
                _html.push("</cite>");
                _html.push("</section>");
                var select = $(_html.join(""));
                var select_text = select.find("var");
                var select_list = select.find("cite");
                $this.after(select);
                $('body').append(select_list);
                select_list.find("li").each(function () {
                    var list = $(this);
                    if (list.data("value") == $this.find(":selected").val()) {
                        if ($this.find(":selected").val() > 0) {
                            list.addClass(option.active);
                        }
                    }
                });
                option.callback(select,select_list,$this.find(":selected").val(),select_text.text());
                select.unbind("click");
                select.click(function (andrew) {
                    andrew.preventDefault();
                    $(this).toggleClass("ak-open");
                    select_list.css({
                        "width": $(this).innerWidth(),
                        "height": option.boxheight
                    });
                    if ($(this).offset().top + $(this).innerHeight()+ select_list.innerHeight() > $(window).height()) {
                        select_list.css({
                            "top": "auto",
                            "bottom": $(window).height() - $(this).offset().top,
                            "left": $(this).offset().left
                        });
                    } else {
                        select_list.css({
                            "top": $(this).offset().top + $(this).innerHeight()+1,
                            "bottom": "auto",
                            "left": $(this).offset().left
                        });
                    }
                    select_list.find("li").css({
                        "height": select.outerHeight()+"px",
                        "line-height": select.outerHeight()+"px"
                    });
                    if ($(this).hasClass("ak-open")) {
                        $(".ak-SelectOpts").not(select).removeClass("ak-open");
                        $(".ak-SelectList").not(select_list).hide();
                        select_list.slideDown(option.speed);
                        $("body").unbind("click");
                        setTimeout(function() {
                            $("body").click(function () {
                                $(".ak-SelectList").slideUp(option.speed);
                                $(".ak-SelectOpts").removeClass("ak-open");
                            });
                            $("main").scroll(function() {
                                $(".ak-SelectList").hide();
                                $(".ak-SelectOpts").removeClass("ak-open");
                            });
                        },option.speed);
                    } else {
                        select_list.slideUp(option.speed);
                    }
                });
                select_list.find("li").unbind("click");
                select_list.on("click", "li", function () {
                    var li = $(this);
                    if (li.data("value") > 0) {
                        var val = li.addClass(option.active).siblings("li").removeClass(option.active).end().data("value").toString();
                    } else {
                        var val = li.removeClass(option.active).siblings("li").removeClass(option.active);
                    }
                    select.removeClass("ak-open");
                    select_list.slideUp(option.speed);

                    if (li.data("value") != "0" || li.data("value") != "") {
                        if ($this.attr("data-type") == "router-link") {
                            document.location.href = "#/" + li.data("value");
                        } else if ($this.attr("data-type") == "link") {
                            document.location.href = li.data("value");
                        }
                    }

                    if (val !== $this.val()) {
                        select_text.text(li.text());
                        $this.val(val);
                        $this.attr("data-value",val);
                        $this.find("option[value!='"+val+"']").removeAttr("selected");
                        $this.find("option[value='"+val+"']").attr("selected","selected");
                        $this.change();
                        option.clickback(select,select_list,val,select_text.text());
                    }
                });
            });
        }
    });
}(jQuery));