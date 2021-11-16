! function(o) {
    function e(e) {
        for (var n, r, s = e[0], c = e[1], l = e[2], u = 0, f = []; u < s.length; u++) r = s[u], a[r] && f.push(a[r][0]), a[r] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (o[n] = c[n]);
        for (d && d(e); f.length;) f.shift()();
        return i.push.apply(i, l || []), t()
    }

    function t() {
        for (var o, e = 0; e < i.length; e++) {
            for (var t = i[e], n = !0, s = 1; s < t.length; s++) {
                var c = t[s];
                0 !== a[c] && (n = !1)
            }
            n && (i.splice(e--, 1), o = r(r.s = t[0]))
        }
        return o
    }
    var n = {},
        a = {
            2: 0
        },
        i = [];

    function r(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }
    r.m = o, r.c = n, r.d = function(o, e, t) {
        r.o(o, e) || Object.defineProperty(o, e, {
            enumerable: !0,
            get: t
        })
    }, r.r = function(o) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(o, "__esModule", {
            value: !0
        })
    }, r.t = function(o, e) {
        if (1 & e && (o = r(o)), 8 & e) return o;
        if (4 & e && "object" == typeof o && o && o.__esModule) return o;
        var t = Object.create(null);
        if (r.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: o
            }), 2 & e && "string" != typeof o)
            for (var n in o) r.d(t, n, function(e) {
                return o[e]
            }.bind(null, n));
        return t
    }, r.n = function(o) {
        var e = o && o.__esModule ? function() {
            return o.default
        } : function() {
            return o
        };
        return r.d(e, "a", e), e
    }, r.o = function(o, e) {
        return Object.prototype.hasOwnProperty.call(o, e)
    }, r.p = "";
    var s = window.shopifySlateJsonp = window.shopifySlateJsonp || [],
        c = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var l = 0; l < s.length; l++) e(s[l]);
    var d = c;
    i.push([17, 0]), t()
}({
    17: function(o, e, t) {
        "use strict";
        t(18), t(19), t(20), t(21), t(1), t(22), t(24), t(25), t(29), t(30);
        var n = t(31),
            a = t(32),
            i = t(33);
        (0, a.focusHash)(), (0, a.bindInPageLinks)(), (0, n.initDocReady)(), (0, i.cookiesEnabled)() && (document.documentElement.className = document.documentElement.className.replace("supports-no-cookies", "supports-cookies"))
    },
    24: function(o, e, t) {},
    31: function(o, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.initDocReady = function() {
          

                        
        //Set 2 global variables
        var scrollTopPosition = 0;
        var lastKnownScrollTopPosition = 0; 


        $(window).scroll(function () {
            scrollTopPosition = $(document).scrollTop();
        });   
          
          
            $(document).ready(function() {
           
              	
              
       			//when we clicking on 'show full version' we are changing viewport and define local variable into the localstorage
               $("#setvar").click(function(){
                  localStorage.setItem('localVar', 'exist');
                  $('meta[name="viewport"]').prop('content', 'width=1024');

                  //imitate toggling effect
                  $(this).hide();
                  $('#removevar').show();
              });

              // when we go to other pages there is checking 'if the local variable exist' - if exist then window automatically switched to full version
              if (localStorage.getItem('localVar') === 'exist') {
                $('meta[name="viewport"]').prop('content', 'width=1024');
                $('#setvar').hide();
                $('#removevar').show();
              }

              // when we click on 'Back to mobile version' we are removing local variable from localstorage and restore default viewport
               $("#removevar").click(function(){
                  localStorage.removeItem('localVar', 'exist');
                  $('meta[name="viewport"]').prop('content', 'width=device-width');
                  $(this).hide();
                  $('#setvar').show();
               });  



            })
        }
    }
});