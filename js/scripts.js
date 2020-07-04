(function (a) {
    a(document).ready(function () {
        a(window).load(function () {
            a("#st-container").removeClass("disable-scrolling");
            a("#loading-animation").fadeOut();
            a("#preloader").delay(350).fadeOut(800);
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = !0;
            b.src = "https://apis.google.com/js/platform.js";
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(b, d);
            equalheight(".same-height");
        });
        1500 < a(window).width() && a(".effect-wrapper").addClass("col-lg-3");
        768 > a(window).width() && (a(".animated").removeClass("animated").removeClass("hiding"), a(".stat span").removeClass("timer"), a(".timeslot-label").addClass("stick-label"));
        512 > a(window).height() && a("#bottom-navlinks").removeClass("bottom-navlinks").addClass("bottom-navlinks-small");
        100 <= a(window).scrollTop() && (a("#top-header").addClass("after-scroll"), a("#logo-header .logo").removeClass("logo-light").addClass("logo-dark"));
        a(window).scroll(function () {
            var b = a(this).scrollTop(),
                d = a("#top-header"),
                c = a("#logo-header .logo"),
                e = a(".right-nav-button"),
                f = d.height() + a(".track-header").height();
            100 <= b ? (d.addClass("after-scroll"), c.removeClass("logo-light").addClass("logo-dark")) : (d.removeClass("after-scroll"), c.removeClass("logo-dark").addClass("logo-light"));
            b >= a(".top-section").height() && 767 < a(window).width() ? e.removeClass("right-nav-button-hidden") : b < a(".top-section").height() && 767 < a(window).width() && e.addClass("right-nav-button-hidden");
            a(".slot").each(function () {
                var d = a(this).offset().top - b,
                    e = f + a(this).find(".slot-title").height();
                d <= e && 0 <= d && a(".track-header.sticky").find(".slot-detail").html(a(this).data("slotDetail"));
            });
        });
        a(window).resize(function () {
            1500 < a(window).width() ? a(".effect-wrapper").addClass("col-lg-3") : a(".effect-wrapper").removeClass("col-lg-3");
            768 > a(window).width()
                ? (a(".same-height").css("height", "100%"), a(".timeslot-label").addClass("stick-label"))
                : (a(".timeslot-label").removeClass("stick-label"), c.hasClass("st-menu-open") && (c.removeClass("st-menu-open"), a("body").css("overflow", "auto")), equalheight(".same-height"));
            512 > a(window).height()
                ? (a(".st-menu").addClass("scrollable"), a("#bottom-navlinks").removeClass("bottom-navlinks").addClass("bottom-navlinks-small"))
                : (a(".st-menu").removeClass("scrollable"), a("#bottom-navlinks").removeClass("bottom-navlinks-small").addClass("bottom-navlinks"));
        });
        a(function () {
            a("a[href*=#]:not([href=#])").click(function () {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var b = a(this.hash),
                        b = b.length ? b : a("[name=" + this.hash.slice(1) + "]");
                    if (b.length) return a("html,body").animate({ scrollTop: b.offset().top }, 1e3), !1;
                }
            });
        });
        a(function () {
            a("a[href=#]").click(function () {
                event.preventDefault();
            });
        });
        a(function () {
            -1 < window.location.href.indexOf("schedule") && window.location.hash && a(window.location.hash).click();
        });
        a(function () {
            var b, d, c, e, f;
            f = a(".appear-animation");
            c = 0;
            for (e = f.length; c < e; c++) (d = f[c]), (b = d.offsetLeft + d.offsetTop), (b /= 1e3), a(d).css("transition-delay", "" + 0.47 * b + "s"), a(d).css("transition-duration", "0.2s");
        });
        a(".appear-animation-trigger").appear(function () {
            setTimeout(function () {
                a(".appear-animation-trigger").parent("div").find(".appear-animation").addClass("visible");
            }, 1e3);
        });
        a(".animated").appear(
            function () {
                var b = a(this),
                    d = b.data("animation"),
                    c = b.data("delay");
                c
                    ? setTimeout(function () {
                        b.addClass(d + " visible");
                        b.removeClass("hiding");
                        b.hasClass("counter") && b.find(".timer").countTo();
                    }, c)
                    : (b.addClass(d + " visible"), b.removeClass("hiding"), b.hasClass("counter") && b.find(".timer").countTo());
            },
            { accY: -150 }
        );
        equalheight = function (b) {
            var d = 0,
                c = 0,
                e = [],
                f;
            a(b).each(function () {
                f = a(this);
                a(f).height("auto");
                topPostion = f.position().top;
                if (c != topPostion) {
                    for (currentDiv = 0; currentDiv < e.length; currentDiv++) e[currentDiv].height(d);
                    e.length = 0;
                    c = topPostion;
                    d = f.height();
                    e.push(f);
                } else e.push(f), (d = d < f.height() ? f.height() : d);
                for (currentDiv = 0; currentDiv < e.length; currentDiv++) e[currentDiv].height(d);
            });
        };
        var c = a(".st-container");
        a("#menu-trigger").click(function (a) {
            a.stopPropagation();
            c.toggleClass("st-menu-open");
        });
        a(".st-pusher").click(function () {
            c.hasClass("st-menu-open") && c.removeClass("st-menu-open");
        });
        a(".track-header").each(function () {
            for (var b = a(this).closest(".schedule-table").find(".slot").first(), d; void 0 === d;) (d = b.data("slotDetail")), (b = b.next());
            a(this).find(".slot-detail").html(d);
        });
        a("#post-section .post-body p").each(function () {
            if (a(this).find(".feature-image").length) {
                var b = a(this).find(".feature-image").prop("src");
                a("#top-section")
                    .css("background-image", "url(" + b + ")")
                    .addClass("enable-overlay");
            }
        });
        a(".slider").each(function () {
            a(this).find(".slider-item").first().addClass("slider-current-item").removeClass("hidden");
            1 < a(this).find(".slider-item").length && a(this).closest(".speaker-item").find(".slider-next-item").removeClass("hidden");
        });
        a(".slider-next-item").click(function () {
            var b = a(this).closest("div"),
                d = b.find(".slider-current-item").next();
            d.length
                ? (d.addClass("slider-current-item").removeClass("hidden"), b.find(".slider-current-item").first().removeClass("slider-current-item").addClass("hidden"))
                : (b.find(".slider-item").first().addClass("slider-current-item").removeClass("hidden"), b.find(".slider-current-item").last().removeClass("slider-current-item").addClass("hidden"));
        });
        a(".modal").on("hidden.bs.modal", function () {
            var b = a(this).find("iframe");
            b.attr("src", b.attr("src"));
        });
        a(".slot").click(function () {
            location.hash = a(this).attr("id");
        });
        if ("undefined" !== typeof twitterFeedUrl) {
            var h = function () {
                var b = a("#tweets").find(".tweet"),
                    d = 0;
                a(b.get(0)).removeClass("hidden");
                setInterval(function () {
                    var c = ++d % b.length;
                    a(b.get(c - 1)).addClass("hidden");
                    a(b.get(c)).removeClass("hidden");
                }, 5e3);
            };
            a.getJSON(twitterFeedUrl, function (b) {
                a.each(b, function (b, c) {
                    var e;
                    e = c.text.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, '<a href="$1" target="_blank">$1</a>');
                    e = e.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                    e = e.replace(/#(\S*)/g, '<a href="https://twitter.com/search?q=%23$1" target="_blank">#$1</a>');
                    e = e.replace(/\B@([\w-]+)/gm, '<a href="https://twitter.com/$1" target="_blank">@$1</a>');
                    e =
                        '<div class="tweet animated fadeInUp hidden"><p class="tweet-text">' +
                        e +
                        '</p><p class="tweet-meta">by <a href="https://twitter.com/' +
                        c.user.screen_name +
                        '" target="_blank">@' +
                        c.user.screen_name +
                        "</a></p></div>";
                    a("#tweets").append(e);
                });
                h();
            });
        }
    });
    "undefined" !== typeof staticGoogleMaps &&
        a("#canvas-map")
            .addClass("image-section")
            .css(
                "background-image",
                "url(https://maps.googleapis.com/maps/api/staticmap?zoom=17&center=" +
                mobileCenterMapCoordinates +
                "&size=" +
                a(window).width() +
                "x700&scale=2&language=en&markers=icon:" +
                icon +
                "|" +
                eventPlaceCoordinates +
                "&maptype=roadmap&style=visibility:on|lightness:40|gamma:1.1|weight:0.9&style=element:labels|visibility:off&style=feature:water|hue:0x0066ff&style=feature:road|visibility:on&style=feature:road|element:labels|saturation:-30)"
            );
    if ("undefined" !== typeof googleMaps) {
        var c,
            q,
            n,
            r,
            p,
            h,
            l = [],
            x = new google.maps.DirectionsService();
        google.maps.event.addDomListener(window, "load", function () {
            function m(k, f) {
                x.route({ origin: k, destination: eventPlace, travelMode: google.maps.TravelMode[f] }, function (d, e) {
                    if (e == google.maps.DirectionsStatus.OK) {
                        c.setMapTypeId("zoomed");
                        n.setMap(c);
                        n.setDirections(d);
                        var g = d.routes[0].legs[0];
                        b(g.start_location);
                        b(g.end_location);
                        a("#distance").text(g.distance.text);
                        a("#estimateTime").text(g.duration.text);
                        a("#mode-select").val(f);
                        a("#mode").removeClass("hidden");
                        g = a("#mode-icon use").attr("xlink:href");
                        g = g.substring(0, g.indexOf("#") + 1) + "icon-" + f.toLowerCase();
                        a("#mode-icon use").attr("xlink:href", g);
                    } else e != google.maps.DirectionsStatus.OK && "DRIVING" != f ? m(k, "DRIVING") : ((g = p.getPath()), g.push(k), g.push(eventPlace), b(k), b(eventPlace), (g = new google.maps.LatLngBounds()), g.extend(k), g.extend(eventPlace), c.fitBounds(g), p.setMap(c), (g = Math.round(google.maps.geometry.spherical.computeDistanceBetween(k, eventPlace) / 1e3)), a("#distance").text(g + " km"), a("#estimateTime").text(""), a("#find-flight").removeClass("hidden"), a("#mode").addClass("hidden"));
                });
                d();
                a("#find-way").addClass("location-active");
                e(k);
                a("#find-way h3").removeClass("fadeInUp").addClass("fadeOutDown");
            }
            function u() {
                navigator.geolocation &&
                    navigator.geolocation.getCurrentPosition(function (a) {
                        h = new google.maps.LatLng(a.coords.latitude, a.coords.longitude);
                        m(h, "TRANSIT");
                    });
            }
            function b(a) {
                a = new google.maps.Marker({ position: a, map: c, icon: icon });
                l.push(a);
            }
            function d() {
                for (var a = 0; a < l.length; a++) l[a].setMap(null);
                l = [];
            }
            function v(a) {
                var b = c.getZoom(),
                    d = Math.abs(a - b),
                    e = a > b ? 1 : -1;
                for (a = 0; a < d; a++)
                    setTimeout(function () {
                        b += e;
                        c.setZoom(b);
                    }, 50 * (a + 1));
            }
            function e(b) {
                r.geocode({ latLng: b }, function (b, c) {
                    c == google.maps.GeocoderStatus.OK &&
                        b[1] &&
                        a.each(b[1].address_components, function (b, c) {
                            if ("locality" == c.types[0]) return a("#result-name").text(c.long_name), !1;
                        });
                });
            }
            n = new google.maps.DirectionsRenderer({ suppressMarkers: !0 });
            r = new google.maps.Geocoder();
            p = new google.maps.Polyline({
                strokeColor: "#03a9f4",
                strokeOpacity: 1,
                strokeWeight: 2,
            });
            var f = {
                zoom: 17,
                minZoom: 2,
                scrollwheel: !1,
                panControl: !1,
                draggable: !0,
                zoomControl: !1,
                zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_TOP },
                scaleControl: !1,
                mapTypeControl: !1,
                streetViewControl: !1,
                center: centerMap,
                mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, "custom_style"] },
                mapTypeId: "custom_style",
            };
            768 > a(window).width() && (f.center = mobileCenterMap);
            "logistics" == googleMaps && ((f.zoom = 5), (f.zoomControl = !0));
            c = new google.maps.Map(document.getElementById("canvas-map"), f);
            var t = new google.maps.Marker({ position: eventPlace, animation: google.maps.Animation.DROP, icon: icon, map: c });
            l.push(t);
            var f = new google.maps.StyledMapType(
                [
                    { stylers: [{ lightness: 40 }, { visibility: "on" }, { gamma: 0.9 }, { weight: 0.4 }] },
                    { elementType: "labels", stylers: [{ visibility: "on" }] },
                    { featureType: "water", stylers: [{ color: "#5dc7ff" }] },
                    { featureType: "road", stylers: [{ visibility: "off" }] },
                ],
                { name: "Default Style" }
            ),
                w = new google.maps.StyledMapType(
                    [
                        { stylers: [{ lightness: 40 }, { visibility: "on" }, { gamma: 1.1 }, { weight: 0.9 }] },
                        { elementType: "labels", stylers: [{ visibility: "off" }] },
                        { featureType: "water", stylers: [{ color: "#5dc7ff" }] },
                        { featureType: "road", stylers: [{ visibility: "on" }] },
                        { featureType: "road", elementType: "labels", stylers: [{ saturation: -30 }] },
                    ],
                    { name: "Zoomed Style" }
                );
            c.mapTypes.set("default", f);
            c.mapTypes.set("zoomed", w);
            "logistics" === googleMaps
                ? (c.setMapTypeId("default"),
                    (f = document.getElementById("location-input")),
                    (q = new google.maps.places.Autocomplete(f)),
                    google.maps.event.addListener(q, "place_changed", function () {
                        t.setVisible(!1);
                        var a = q.getPlace();
                        if ("undefined" != a.geometry && a.geometry) {
                            var b = "";
                            a.address_components &&
                                (b = [
                                    (a.address_components[0] && a.address_components[0].short_name) || "",
                                    (a.address_components[1] && a.address_components[1].short_name) || "",
                                    (a.address_components[2] && a.address_components[2].short_name) || "",
                                ].join(" "));
                            r.geocode({ address: b }, function (a, b) {
                                b == google.maps.GeocoderStatus.OK ? ((h = a[0].geometry.location), m(h, "TRANSIT")) : alert("Geocode was not successful for the following reason: " + b);
                            });
                        }
                    }))
                : c.setMapTypeId("zoomed");
            a("#mode-select").change(function () {
                var b = a(this).val();
                m(h, b);
            });
            a("#direction-locate").click(u);
            a("#direction-cancel").click(function () {
                a("#find-way").removeClass("location-active");
                a("#location-input").val("");
                a("#find-flight").addClass("hidden");
                d();
                n.setMap(null);
                p.setMap(null);
                c.setMapTypeId("default");
                c.panTo(eventPlace);
                768 > a(window).width() ? c.setCenter(mobileCenterMap) : c.setCenter(centerMap);
                b(eventPlace);
                v(5);
                a("#find-way h3").removeClass("fadeOutDown").addClass("fadeInUp");
            });
            "undefined" !== typeof autoDirectionEnabled && 1 == autoDirectionEnabled && u();
        });
    }

    // session-search
    $(document).ready(function () {
        /*
          define variables to generate filter selects:
           * containerClass = the html class of the text to be listed as options in
             the filter "needle" list
           * filterID = the haystack-field name to search with list.js (often same
             as containerClass)
           * filterLabel = how to name the filter in its pulldown
        */
        filterList = [
            {
                containerClass: 'name-only',
                filterID: 'presenters',
                filterLabel: 'Presenter',
            },
            {
                containerClass: 'type',
                filterID: 'type',
                filterLabel: 'Session Type',
            },
        ];

        /*
            foreach filter in filterList, create a filter pulldown and place it in the 
            table #filter div
          */
        filterList.forEach(function (f) {
            var arr = [];
            $('.' + f.containerClass).each(function () {
                var speakerName = $(this).text();
                if (!arr.includes(speakerName)) {
                    arr.push(speakerName);
                }
            });
            arr.sort();
            console.log(arr);

            $('#filters').append(
                '<label class="sr-only" aria-label="filter-' +
                f.filterID +
                '">Select Sessions By ' +
                f.filterLabel +
                '</label>' +
                '<select aria-labelledby="filter-' +
                f.filterID +
                '" class="form-control col-md-3" id="' +
                f.filterID +
                '"><option value="">---Select by ' +
                f.filterLabel +
                '---</option></select>'
            );
            arr.forEach((element) => {
                $('#' + f.filterID).append('<option>' + element + '</option>');
            });

            /*
              now that the filter pulldown is built, bind it to the filter action onChange
            */

            $('#' + f.filterID).change(function (event) {
                let thisFilter = $(this).attr('id');
                $('#filters select').each(function (index) {
                    if ($(this).attr('id') != thisFilter) {
                        /* foreach filter other than the active one, reset it if previously used */
                        $(this).val('');
                    }
                });
                let filterTerm = $(this).val();
                console.log('Selected ' + f.filterID + ':', filterTerm);
                listObj.filter(function (item) {
                    if (item.values()[f.filterID].includes(filterTerm)) {
                        return true;
                    } else {
                        return false;
                    }
                });
            });
        });
    }); /* end session-search */

    /* posters-modal in session-search */
    $(document).ready(function () {
        $('#poster-modals .modal').each(function () {
            let link = $(this).find('.poster-link').data('link');
            $(this)
                .find('.poster-title')
                .after('<a href="' + link + '" class="btn btn-info">Link to Q&A</a>');
            // .after('<a href="' + link + '" class="btn btn-primary>Link to Q&A</a>');
        });
    }); /* end posters-modal in session-search */
})(jQuery);
