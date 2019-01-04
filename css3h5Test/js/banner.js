! function(t, e) {
	"undefined" != typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Utils = e.call(t) }(this, function() {
		function t(t, e, n) {
			t.style["Webkit" + e.charAt(0).toUpperCase() + e.substring(1)] = n, 
			t.style["Moz" + e.charAt(0).toUpperCase() + e.substring(1)] = n, 
			t.style["ms" + e.charAt(0).toUpperCase() + e.substring(1)] = n, 
			t.style["O" + e.charAt(0).toUpperCase() + e.substring(1)] = n, 
			t.style[e] = n 
		}
	
		function e(t, e) { return parseInt(Math.random() * (e - t) + t) }
	
		function n(t, e) { 
			if(t.length)
				for(var i = 0; i < t.length; i++) n(t[i], e);
			else
				for(var i in e) t.style[i] = e[i]
		}

		function i(t) { return "[object Array]" === Object.prototype.toString.apply(t) }
	
		function r(t) { return "[object String]" === Object.prototype.toString.apply(t) }
	
		function a(t) { 
			var e = typeof t;
			return "function" === e || "object" === e && !!t
		} 
		return {
			setStyle3: t, 
			rnd: e, 
			setStyle: n, 
			isArray: i, 
			isString: r, 
			isObject: a 
		}
	}), 
	! function(t, e) { 
		"undefined" != typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Effect = e.call(t) }(this, function() { 
			"use strict"; 
			var t = {}; 
			return t.browser_test = function() { 
				IE6 = -1 != window.navigator.userAgent.search(/MSIE 6/),
				IE7 = -1 != window.navigator.userAgent.search(/MSIE 7/),
				IE8 = -1 != window.navigator.userAgent.search(/MSIE 8/), 
				IE9 = -1 != window.navigator.userAgent.search(/MSIE 9/), 
				IE10 = -1 != window.navigator.userAgent.search(/MSIE 10/) 
			},
			t.flex = function(e, n, i, r, a, s, o) {
				function l() { 
					e.__flex_v += (100 - d) / s,
					e.__flex_v *= o, 
					Math.abs(e.__flex_v) > f && (e.__flex_v = e.__flex_v > 0 ? f : -f), 
					d += e.__flex_v; for(var t in n) c[t] = (i[t] - n[t]) * d / 100 + n[t];
					r && r.call(e, c), 
					Math.abs(e.__flex_v) < 1 && Math.abs(100 - d) < 1 && (clearInterval(e.timer), 
					a && a.call(e, i), e.__flex_v = 0) 
				}
				if(t.browser_test.IE6)
					return r && r.call(e, i), void(a && a.call(e, i)); 
				var f = 16;
		s || (s = 6), o || (o = .75); var c = {},
			d = 0;
		e.__flex_v || (e.__flex_v = 0), e.__last_timer || (e.__last_timer = 0); var p = (new Date).getTime();
		p - e.__last_timer > 20 && (l(), e.__last_timer = p), clearInterval(e.timer), e.timer = setInterval(l, 20) }, t.buffer = function(e, n, i, r, a, s) {
		function o() { c = Math.ceil((100 - f) / s), f += c; for(var t in n) l[t] = (i[t] - n[t]) * f / 100 + n[t];
			r && r.call(e, l), Math.abs(c) < 1 && Math.abs(100 - f) < 1 && (clearInterval(e.timer), a && a.call(e, i)) } if(t.browser_test.IE6) return r && r.call(e, i), void(a && a.call(e, i));
		s || (s = 6); var l = {},
			f = 0,
			c = 0;
		e.__last_timer || (e.__last_timer = 0); var d = (new Date).getTime();
		d - e.__last_timer > 20 && (o(), e.__last_timer = d), clearInterval(e.timer), e.timer = setInterval(o, 20) }, t.linear = function(e, n, i, r, a, s) {
		function o() { f += c; for(var t in n) l[t] = (i[t] - n[t]) * f / 100 + n[t];
			r && r.call(e, l), Math.abs(100 - f) < 1 && (clearInterval(e.timer), a && a.call(e, i)) } if(t.browser_test.IE6) return r && r.call(e, i), void(a && a.call(e, i));
		s || (s = 50); var l = {},
			f = 0,
			c = 0;
		e.__last_timer || (e.__last_timer = 0); var d = (new Date).getTime();
		d - e.__last_timer > 20 && (o(), e.__last_timer = d), clearInterval(e.timer), e.timer = setInterval(o, 20), c = 100 / s }, t }), ! function(t, e) { "undefined" != typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Banner = e.call(t) }(this, function() { "use strict";

	function Banner(t) { this.options = $.extend(defaults, t || {}), W = this.options.width, H = this.options.height, this.banner = $(this.options.banner), this.index = this.options.index || 0, this.total = this.options.images.length || 0, this.ready = !1, this.init() } var defaults = { banner: null, index: 0, autoplay: 8e3, width: 1200, height: 300, images: [], preloadImages: !0, pagination: "", paginationClick: !0, prevButton: "", nextButton: "", onInit: $.noop, onClick: $.noop, onBannerChange: $.noop, Effects: [] },
		W = 0,
		H = 0; return Banner.prototype = { EFFECTS: ["boomEffect", "turnEffect", "pageEffect", "skewEffect", "cubeEffect"], defaultEffect: "boomEffect", init: function() { this.initDom(), this.initEvents(), this.preloadImages(), this.setBannerEffect(this.options.Effects), this.autoPlay(), this.options.onInit(), this.ready = !0 }, initDom: function() { if(this.options.pagination) { for(var t = $(this.options.pagination), e = "", n = 0; n < this.total; n++) 0 != n ? e += '<a class="js_nav" href="javascript:;"></a>' : e = '<a class="js_nav current" href="javascript:;"></a>';
				t.html(e) } }, initEvents: function() { var t = this; if(this.options.nextButton) { var e = $(this.options.nextButton);
				e && e.on("click", function() { t.bannerChange(t.getNextIndex(!0), "next") }) } if(this.options.prevButton) { var n = $(this.options.prevButton);
				n && n.on("click", function() { t.bannerChange(t.getNextIndex(!1), "prev") }) } if(this.options.paginationClick && this.options.pagination) { var i = $(this.options.pagination);
				i.on("click", function(e) { var n = $(e.target).index();
					t.bannerChange(n, "navi"), $(this).addClass("current").siblings("a").removeClass("current") }) } $(this.options.banner).on("click", function(e) { t.options.onClick(e, t.index) }) }, bannerChange: function(index, type) { this.ready && (clearInterval(this.autoplayTimer), $(this.options.pagination).find("a").removeClass("current").eq(index).addClass("current"), eval("this." + this.getBannerEffect(type) + "( " + index + ")"), this.banner.attr("href", this.options.images[index].link), this.onBannerChange(), this.autoPlay()) }, autoPlay: function() { var t = this;
			this.options.autoplay && !isNaN(this.options.autoplay) && (this.autoplayTimer = setInterval(function() { var e = t.getNextIndex(!0);
				t.bannerChange(e, "next") }, this.options.autoplay)) }, onBannerChange: function(t) { this.options.onBannerChange(t) }, getNextIndex: function(t) { var e = 0; return e = t ? this.index == this.total - 1 ? 0 : (this.index + 1) % this.total : 0 == this.index ? this.total - 1 : (this.index - 1) % this.total }, getBannerUrl: function(t) { return "url(" + this.getBannerSrc(t) + ") " }, getBannerSrc: function(t) { return this.options.images[t].url || "" }, preloadImages: function() { if(this.options.preloadImages)
				for(var t = 0; t < this.options.images.length; t++)(new Image).src = this.options.images[t].url }, getBannerEffect: function(t) { if(t && this.effect[t]) { for(var e, n = 0; n < this.EFFECTS.length; n++) this.effect[t] == this.EFFECTS[n] && (e = !0); if(e) return this.effect[t]; throw new Error("effect " + this.effect[t] + " not support.") } return this.defaultEffect }, setBannerEffect: function(t) { return Utils.isString(t) ? this.effect = { prev: t, next: t, navi: t } : void(this.effect = $.extend({ prev: this.defaultEffect, next: this.defaultEffect, navi: this.defaultEffect }, t)) }, boomEffect: function(t) { var e = this; if(this.ready) { this.ready = !1; var n = 4,
					i = 7,
					r = W / 2,
					a = H / 2;
				this.banner[0].innerHTML = "", this.banner[0].style.background = this.getBannerUrl(t) + " center no-repeat"; for(var s = [], o = n * i, l = 0; n > l; l++)
					for(var f = 0, c = 0; i > f; f++, c++) { s[l] = { left: W * f / i, top: H * l / n }; var d = document.createElement("div");
						Utils.setStyle(d, { position: "absolute", background: e.getBannerUrl(e.index) + -s[l].left + "px " + -s[l].top + "px no-repeat", width: Math.ceil(W / i) + "px", height: Math.ceil(H / n) + "px", left: s[l].left + "px", top: s[l].top + "px" }), e.banner[0].appendChild(d); var p = (s[l].left + W / (2 * i) - r) * Utils.rnd(2, 3) + r - W / (2 * i),
							h = (s[l].top + H / (2 * n) - a) * Utils.rnd(2, 3) + a - H / (2 * n);
						setTimeout(function(n, i, r) { return function() { Effect.buffer(n, { left: n.offsetLeft, top: n.offsetTop, opacity: 100, x: 0, y: 0, z: 0, scale: 1, a: 0 }, { left: i, top: r, opacity: 0, x: Utils.rnd(-180, 180), y: Utils.rnd(-180, 180), z: Utils.rnd(-180, 180), scale: Utils.rnd(1.5, 3), a: 1 }, function(t) { this.style.left = t.left + "px", this.style.top = t.top + "px", this.style.opacity = t.opacity / 100, Utils.setStyle3(n, "transform", "perspective(500px) rotateX(" + t.x + "deg) rotateY(" + t.y + "deg) rotateZ(" + t.z + "deg) scale(" + t.scale + ")") }, function() { setTimeout(function() { 0 == --o && (e.ready = !0, e.index = t), e.banner[0].removeChild(n) }, 200) }, 10) } }(d, p, h), Utils.rnd(0, 200)) } } }, turnEffect: function(t) { var e = this; if(this.ready) { this.ready = !1; var n = 3,
					i = 6,
					r = n * i,
					a = Math.ceil(W / i),
					s = Math.ceil(H / n);
				e.banner[0].style.background = "none", e.banner[0].innerHTML = ""; for(var o = 0; i > o; o++)
					for(var l = 0; n > l; l++) { var f = document.createElement("div"),
							c = Math.ceil(H * l / n),
							d = Math.ceil(W * o / i);
						Utils.setStyle(f, { position: "absolute", background: e.getBannerUrl(e.index) + -d + "px " + -c + "px no-repeat", left: d + "px", top: c + "px", width: a + "px", height: s + "px" }),
							function(n, i, a) { n.ch = !1, setTimeout(function() { Effect.linear(n, { y: 0 }, { y: 180 }, function(r) { r.y > 90 && !n.ch && (n.ch = !0, n.style.background = e.getBannerUrl(t) + -i + "px " + -a + "px no-repeat"), r.y > 90 ? Utils.setStyle3(n, "transform", "perspective(500px) rotateY(" + r.y + "deg) scale(-1,1)") : Utils.setStyle3(n, "transform", "perspective(500px) rotateY(" + r.y + "deg)") }, function() { 0 == --r && (e.ready = !0, e.index = t) }, 22) }, 200 * (o + l)) }(f, d, c), e.banner[0].appendChild(f) } } }, pageEffect: function(t) { var e = this; if(this.ready) { this.ready = !1, this.banner[0].innerHTML = "", this.banner[0].style.background = this.getBannerUrl(t) + " center no-repeat"; var n = document.createElement("div");
				Utils.setStyle(n, { position: "absolute", background: this.getBannerUrl(t) + " right no-repeat", zIndex: 3, left: "50%", top: 0, width: "50%", height: "100%", overflow: "hidden" }), Utils.setStyle3(n, "transform", "perspective(1000px) rotateY(0deg)"), Utils.setStyle3(n, "transformOrigin", "left"), this.banner[0].appendChild(n); var i = document.createElement("div");
				Utils.setStyle(i, { position: "absolute", left: 0, top: 0, width: "50%", height: "100%", zIndex: 2, background: this.getBannerUrl(this.index) + " left no-repeat" }), this.banner[0].appendChild(i); var r = document.createElement("div");
				Utils.setStyle(r, { position: "absolute", right: 0, top: 0, width: "50%", height: "100%", zIndex: 2, background: "rgba(0,0,0,1)" }), this.banner[0].appendChild(r), n.ch = !1, Effect.buffer(n, { y: 0, opacity: 1 }, { y: -180, opacity: 0 }, function(i) { if(i.y < -90 && !n.ch) { n.ch = !0, n.innerHTML = "<img />"; var a = n.getElementsByTagName("img")[0];
						a.src = e.getBannerSrc(t), Utils.setStyle3(a, "transform", "scaleX(-1)"), Utils.setStyle(a, { position: "absolute", right: 0, top: 0, width: "200%", height: "100%" }), Utils.setStyle3(n, "transformOrigin", "left") } i.y < -90 ? Utils.setStyle3(n, "transform", "perspective(1000px) scale(-1,1) rotateY(" + (180 - i.y) + "deg)") : Utils.setStyle3(n, "transform", "perspective(1000px) rotateY(" + i.y + "deg)"), r.style.background = "rgba(0,0,0," + i.opacity + ")" }, function() { e.ready = !0, e.index = t }, 14) } }, skewEffect: function(t) { var e = this; if(this.ready) { this.ready = !1; var n = 6,
					i = n,
					r = Math.ceil(W / n);
				e.banner[0].style.background = "none", e.banner[0].innerHTML = ""; for(var a = 0; n > a; a++) { var s = document.createElement("div");
					Utils.setStyle(s, { width: r + "px", height: "100%", position: "absolute", left: W * a / n + "px", top: 0 }), Utils.setStyle3(s, "transformStyle", "preserve-3d"), Utils.setStyle3(s, "transform", "perspective(1000px) rotateX(0deg)"),
						function(r, a) { r.style.zIndex = n / 2 - Math.abs(a - n / 2), setTimeout(function() { Effect.buffer(r, { a: 0, x: 0 }, { a: 100, x: -90 }, function(t) { Utils.setStyle3(r, "transform", "perspective(1000px) rotateY(" + 3 * (a - n / 2) * (50 - Math.abs(t.a - 50)) / 50 + "deg) rotateX(" + t.x + "deg)") }, function() { 0 == --i && (e.ready = !0), e.index = t }, 8) }, 130 * (a + 1)) }(s, a), s.innerHTML = "<div></div><div></div><div></div><div></div>"; var o = s.getElementsByTagName("div")[0],
						l = s.getElementsByTagName("div")[1],
						f = s.getElementsByTagName("div")[2],
						c = s.getElementsByTagName("div")[3];
					Utils.setStyle([o, l, f, c], { width: "100%", height: "100%", position: "absolute", left: 0, top: 0 }), Utils.setStyle(o, { background: e.getBannerUrl(t) + -W * a / n + "px 0px no-repeat" }), Utils.setStyle3(o, "transform", "scale3d(0.870,0.870,0.870) rotateX(90deg) translateZ(" + H / 2 + "px)"), Utils.setStyle(l, { background: e.getBannerUrl(e.index) + -W * a / n + "px 0px no-repeat" }), Utils.setStyle3(l, "transform", "scale3d(0.870,0.870,0.870) rotateX(0deg) translateZ(" + H / 2 + "px)"), Utils.setStyle(f, { background: "#666" }), Utils.setStyle3(f, "transform", "scale3d(0.870,0.870,0.870) rotateX(0deg) translateZ(-" + H / 2 + "px)"), Utils.setStyle(c, { background: "#666" }), Utils.setStyle3(c, "transform", "scale3d(0.870,0.870,0.870) rotateX(90deg) translateZ(-" + H / 2 + "px)"), e.banner[0].appendChild(s) } } }, cubeEffect: function(t) { var e = this; if(this.ready) { this.ready = !1, e.banner[0].innerHTML = "", e.banner[0].style.background = "none", Utils.setStyle3(e.banner[0], "transformStyle", "preserve-3d"), Utils.setStyle3(e.banner[0], "transform", "perspective(" + W / 2 + ") rotateY(0deg)"); var n = document.createElement("div"),
					i = document.createElement("div");
				Utils.setStyle([n, i], { position: "absolute", width: "100%", height: "100%", left: 0, top: 0 }), Utils.setStyle3(n, "transform", "scale3d(0.5, 0.5, 0.5) rotate3d(0, 1, 0, 0deg) translate3d(0, 0," + W / 2 + "px)"), Utils.setStyle3(i, "transform", "scale3d(0.5, 0.5, 0.5) rotate3d(0, 1, 0, 90deg) translate3d(0, 0," + W / 2 + "px)"), e.banner[0].appendChild(i), e.banner[0].appendChild(n), n.style.background = e.getBannerUrl(e.index) + " center no-repeat", i.style.background = e.getBannerUrl(t) + " center no-repeat", setTimeout(function() { Effect.flex(e.banner[0], { y: 0 }, { y: -90 }, function(t) { Utils.setStyle3(e.banner[0], "transform", "perspective(" + W / 2 + ") rotateY(" + t.y + "deg)") }, function() { Utils.setStyle3(e.banner[0], "transition", "none"), Utils.setStyle3(e.banner[0], "transformStyle", "flat"), Utils.setStyle3(e.banner[0], "transform", "none"), e.banner[0].innerHTML = "", e.banner[0].style.background = e.getBannerUrl(t) + " center no-repeat", e.index = t, e.ready = !0 }, 10, .6) }, 0) } } }, Banner });