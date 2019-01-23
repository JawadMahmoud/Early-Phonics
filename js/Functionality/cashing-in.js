function Doorway() {
    this.t = function () {
        console.log("Called Doorway.initGame() but the programmer probably wanted a more specific class.")
    }, this.i = function () {
        console.log("Called Doorway.updateOptionsFromForm() but the programmer probably wanted a more specific class.")
    }, this.s = function () {
        this.t(), this.h(), this.o("dwActivity")
    }, this.u = function (t, i) {
        var s = document.getElementById("dwWellDone");
        if (null != this.l && (clearTimeout(this.l), this.l = void 0), 0 !== t)
            if (s.getElementsByClassName("instruction_message")[0].firstChild.data = i, s.classList.remove("hidden_panel"), t < 90) {
                var n = this._.v.m;
                null == n && (n = 5e3), this.l = setTimeout(this.g.bind(this), n)
            } else document.getElementById("dwDarkenedPanel").classList.remove("hidden_panel");
        else this.g()
    }, this.g = function () {
        document.getElementById("dwWellDone").classList.add("hidden_panel"), document.getElementById("dwDarkenedPanel").classList.add("hidden_panel")
    }, this.p = function (t, i) {
        t.classList.remove(i)
    }, this.S = function () {
        var t = this.C.clientWidth;
        this.O = t / 50, this.C.style.fontSize = this.O + "px"
    }, this.D = function () {
        var t = document.getElementsByClassName("doorway_fullscreen_div")[0];
        this.k() ? this.N() : this.A(t)
    }, this.T = function () {
        this.o("dwUserOptions")
    }, this.A = function (t) {
        return t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : void 0
    }, this.R = function (t) {
        return t.requestFullscreen || t.webkitRequestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || void 0
    }, this.N = function () {
        return document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : void 0
    }, this.k = function () {
        return document.fullscreenElement ? document.fullscreenElement : document.webkitFullscreenElement ? document.webkitFullscreenElement : document.mozFullScreenElement ? document.mozFullScreenElement : document.msFullscreenElement ? document.msFullscreenElement : void 0
    }, this.j = function (t) {
        var i = new ElementObject("div");
        return i.M.className = t, this.W.push(i), i
    }, this.debug = function (t, i, s) {
        console.log(i + ": " + t), s && console.log(s)
    }, this.B = function (t, i) {
        for (; null != t && !t.classList.contains(i);) t = t.parentElement;
        return t
    }, this.o = function (t) {
        var i;
        if (this.I == t) return !1;
        for (this.I = t, i = 0; i < this.P.F.length; i++) document.getElementById(this.P.F[i]).classList.add("hidden_panel");
        var s = document.getElementById(t);
        if (!s) throw "Cannot showScreen(" + t + ")";
        s.classList.remove("hidden_panel"), this.U("show_" + t)
        // }, this.U = function(t, i) {
        //     var s = {};
        //     s[this._.H.q] = this.P.v.K, s[this._.H.J] = t, 0 < i && (s[this._.H.G] = i), gtag("event", t, s)
    }, this.L = function (t, i, s) {
        var n, e, h;
        for (h = e = void 0, n = 0; n < document.styleSheets.length; n++) document.styleSheets[n].href.endsWith(t) && (e = document.styleSheets[n]);
        if (e)
            if (null != e.cssRules) {
                for (n = 0; n < e.cssRules.length; n++) e.cssRules[n].name != i && e.cssRules[n].selectorText != i || (h = e.cssRules[n]);
                if (h) {
                    if (s) {
                        var o;
                        try {
                            o = h.findRule(s)
                        } catch (t) {
                            if ("0%" == s) {
                                s = "0";
                                try {
                                    o = h.findRule(s)
                                } catch (t) {
                                    o = void 0
                                }
                            }
                        }
                        if (!o) return void console.warn("Doorway.findKeyFrameStyleRule(" + t + ", " + i + ", " + s + ") not found");
                        h = o
                    }
                    return h
                }
                console.warn("Doorway.findKeyFrameStyleRule(" + t + ", " + i + ") not found")
            } else console.warn("Doorway.findKeyFrameStyleRule(" + t + ", ... ) is null. We were probably denied by CORS security.");
        else console.warn("Doorway.findKeyFrameStyleRule(" + t + ", ... ) not found. We may be denied by CORS security.")
    }, this.V = function () {
        var t = document.getElementById("dwAudioEnabledCheck");
        this.options.X = t.checked;
        document.getElementById("dwAudioImg")
    }, this.Y = function (t, i, s) {
        document.forms[t][i].value = s
    }, this.Z = function (t, i) {
        return document.forms[t][i] instanceof HTMLCollection ? null != this.$[i] ? this.$[i] : 0 : document.forms[t][i].value
    }, this._ = {
        v: {
            tt: "../shared/audio-on.svg",
            it: "../shared/audio-off.svg",
            st: 2,
            nt: "UA-74778308-1",
            m: 5e3
        },
        H: {
            et: "enable_scanning",
            ht: "scan_delay",
            ot: "scan_num_switches",
            X: "enable_audio",
            at: "general",
            ct: "doorway_options",
            q: "event_category",
            J: "event_label",
            G: "event_value",
            dt: "config"
        }
    }, this.W = [], this.rt = "init", this.ut = "to be defined", document.getElementById("dwOptionsButton").addEventListener("click", this.T.bind(this)), this.C = document.getElementById("dwAspectDiv"), this.C ? (window.addEventListener("resize", this.S.bind(this)), this.S("no-event")) : console.log("Can't find dwAspectDiv");
    var t = document.getElementById("dwFullScreenButton");
    null != t && (null == this.R(this.C) ? (t.classList.add("hidden_panel"), t.classList.remove("teacher_button")) : t.addEventListener("click", this.D.bind(this))), document.getElementById("dwAudioEnabledCheck").addEventListener("click", this.V.bind(this)), this.options = {}
}

function Doorway_spinSelect(t, i, s) {
    var n = document.getElementById(t),
        e = n.selectedIndex,
        h = e + i;
    0 <= h && h < n.length && (e = h, n.selectedIndex = h, document.getElementById(s).innerHTML = n.children[h].innerHTML);
    return !1
}

Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function (t, i) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var s = Object(this),
            n = s.length >>> 0;
        if (0 === n) return !1;
        var e, h, o = 0 | i,
            a = Math.max(0 <= o ? o : n - Math.abs(o), 0);
        for (; a < n;) {
            if ((e = s[a]) === (h = t) || "number" == typeof e && "number" == typeof h && isNaN(e) && isNaN(h)) return !0;
            a++
        }
        return !1
    }
}), String.prototype.endsWith || (String.prototype.endsWith = function (t, i) {
    return i < this.length ? i |= 0 : i = this.length, this.substr(i - t.length, t.length) === t
}), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
    value: function (t, i) {
        "use strict";
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        for (var s = Object(t), n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            if (null != e)
                for (var h in e) Object.prototype.hasOwnProperty.call(e, h) && (s[h] = e[h])
        }
        return s
    },
    lt: !0,
    vt: !0
});
var dwMainActivity, ElementObject_nextElementId = 1e3;

function ElementObject(t) {
    this.M = document.createElement(t), this.id = ElementObject_nextElementId, ElementObject_nextElementId++, this.M.id = this.id
}

function PictureCard() {
    this.ft = function (t, i) {
        var s = this._t;
        if (s === (this._t = t)) return s;
        var n, e, h = this,
            o = "animationend",
            a = "flip_something",
            c = function () {
                n.classList.add("hidden_panel"), n.classList.remove("shown_panel"), e.classList.remove("hidden_panel"), e.classList.add("shown_panel"), h.M.classList.remove("flip_obverse_to_face"), h.M.classList.remove("flip_face_to_obverse"), h.M.removeEventListener(o, c)
            };
        return t ? (n = this.M.getElementsByClassName("obverse")[0], e = this.M.getElementsByClassName("face")[0], a = "flip_obverse_to_face") : (n = this.M.getElementsByClassName("face")[0], e = this.M.getElementsByClassName("obverse")[0], a = "flip_face_to_obverse"), i ? (this.M.addEventListener(o, c), this.M.classList.add(a)) : (n.classList.remove("shown_panel"), n.classList.add("hidden_panel"), e.classList.remove("hidden_panel"), e.classList.add("shown_panel")), s
    }, ElementObject.call(this, "div"), this.M.classList.add("picture_card");
    var t = document.createElement("div");
    t.className = "face", this.M.appendChild(t), this.face = t;
    var i = document.createElement("div");
    i.className = "obverse", this.M.appendChild(i), this.wt = i, this.ft(!0, !1), this.gt = !0, this.M.classList.add("in_play")
}

function Scannable(t, i) {
    this.pt = function (t) {
        this.children.includes(t) || this.children.push(t), t.parent = this, t.bt = this.bt
    }, this.removeChild = function (t) {
        var i = this.children.indexOf(t);
        0 <= i && (this.children[i].yt(!1, !1), this.children[i].parent = void 0, this.children[i].bt = void 0, this.children.splice(i, 1))
    }, this.St = function () {
        var t;
        for (this.bt && this.bt.Ct(!0), t = 0; t < this.children.length; t++) this.children[t].parent = void 0, this.children[t].bt = void 0;
        this.children = []
    }, this.yt = function (t, i) {
        var s;
        for (this.M && (t ? this.M.classList.add("scan_highlight") : this.M.classList.remove("scan_highlight")), this.Ot = t, this.Dt = i, s = 0; s < this.children.length; s++) this.children[s].yt(t, !0)
    }, this.kt = function () {
        this.yt(!1, !1), this.Nt = -1
    }, this.At = function () {
        this.bt.Et && ((this.Tt = 0) <= this.Nt && this.children[this.Nt].yt(!1, !1), 1 <= this.children.length ? (this.children[0].yt(!0, !1), this.Nt = 0) : this.Nt = -1)
    }, this.Rt = function () {
        if (this.bt.Et)
            if (0 <= this.Nt && this.children[this.Nt].yt(!1, !1), 0 != this.children.length) {
                var t = this.Nt;
                ++t >= this.children.length && (t = 0, this.Tt++), this.children[t].yt(!0, !1), this.Nt = t, this != this.bt && this.Tt == this.bt.xt._.v.st && this.bt.start()
            } else this.Nt = -1
    }, this.M = t, this.jt = i, this.children = [], this.Mt = void 0, this.Ot = !1, this.Dt = !1, this.parent = void 0, this.bt = void 0, this.Tt = 0
}

function SwitchScanner(t) {
    Scannable.call(this, void 0, void 0), this.Wt = function () {
        null == this.Bt ? (this.At(), this.Bt = this) : this.Bt.Rt()
    }, this.It = function () {
        if (this.Bt && 0 <= this.Bt.Nt) {
            for (var t = this.Bt.children[this.Bt.Nt]; 1 == t.children.length;) t = t.children[0];
            t.jt && (t.jt(), this.Ct(!0)), this.Et && (0 == t.children.length && (t = this), 1 <= t.children.length && (t.yt(!1, !1), (this.Bt = t).At()))
        }
    }, this.Ct = function (t) {
        !t && this.Ft && (window.clearInterval(this.Ft), this.Ft = void 0), this.Bt && (this.yt(!1, !1), this.Bt.Nt = -1), this.Bt = void 0
    }, this.start = function () {
        this.Et = !0, this.Ct(!0), this.Ft && (window.clearInterval(this.Ft), this.Ft = void 0), 1 == this.xt.options.Pt && (this.Ft = window.setInterval(this.Ut.bind(this), this.xt.options.qt))
    }, this.stop = function () {
        this.Ct(!1), this.Et = !1
    }, this.Ut = function () {
        this.Wt.call(this)
    }, this.Ht = function (t) {
        this.Et && 0 != this.xt.options.et && t && "keydown" == t.type && (2 == this.xt.options.Pt && (32 == t.keyCode && (this.Wt(), t.preventDefault()), 13 == t.keyCode && (this.It(), t.preventDefault())), 1 == this.xt.options.Pt && 32 == t.keyCode && (this.It(), t.preventDefault()))
    }, (this.bt = this).xt = t, this.Bt = void 0, this.Ft = void 0, this.Et = !1
}

function CashingIn(t) {
    if (Doorway.call(this), this.t = function () {
        var t, i;
        this.Kt = 1, this.Qt.St(), this.Gt.Jt(), this.Lt = new Scannable(void 0, void 0), this.u(0, "init");
        var s = 2,
            n = 16;
        for (t = 0; t < this.zt.length; t++) this.zt[t].M.parentNode.removeChild(this.zt[t].M), this.zt[t] = void 0;
        for (this.zt = [], t = 0; t < this.P.Vt.length; t++)
            if (this.P.Vt[t].Xt <= this.options.Yt) {
                i = new Coin(this.P.Vt[t].Xt, this), (this.zt[t] = i).M.style.left = s + "em", i.M.style.top = n + "em", i.left = s, i.top = n, i.M.addEventListener("click", this.Zt.bind(this, i));
                var e = new Scannable(i.M, this.Zt.bind(this, i));
                this.Lt.pt(e), n += .5, 15 <= (s += this.P.Vt[t].width + .25) && (s = 2, n += 2.5)
            }
        var h = document.getElementById("dwCheckboxDiv");
        this.$t = new Scannable(h, this.ti.bind(this)), this.ii = []
    }, this.h = function () {
        this.Kt = this.Kt + 1, this.rt = "playing";
        for (var t = this.options.si, i = t / 2, s = this.ni; this.ni == s;) this.ni = Math.ceil(Math.random() * (t - i) + i);
        if (document.getElementById("dwTargetPara").innerHTML = this.ei(this.ni) + " please", this.options.X) {
            var n = document.getElementById("dwWelcomeAudio");
            n && n.play()
        }
        this.Qt.St(), this.Qt.pt(this.Lt), this.Qt.pt(this.$t), this.Qt.pt(this.Gt.hi), this.options.et && this.Qt.start(), this.options.oi ? this.ai.classList.remove("hidden_panel") : this.ai.classList.add("hidden_panel"), this.ci = {}, this.ci.di = 0;
        var e = document.getElementById("dwTargetBubbleDiv");
        e.classList.add("drift_down"), e.addEventListener("animationend", this.p.bind(this, e, "drift_down"));
        var h = 0;
        this.k() && (h = 1);
        var o = 0;
        this.options.X && (o = 1), gtag("event", "startQuestion", {
            appName: "cashing-in",
            Kt: this.Kt,
            ri: o,
            fullScreen: h
        }), gtag("event", "withScan_" + this.options.et), gtag("event", "withBigCoin_" + this.options.Yt), gtag("event", "withNumSwitch_" + this.options.Pt), gtag("event", "withAudio_" + this.options.X), gtag("event", "withNumQuestions_" + this.options.ui)
    }, this.li = function (t) {
        this.u(0, "broccoli"), this.Gt.mi() == this.ni && (document.getElementById("dwCheckboxDiv").classList.remove("hidden_panel"), document.getElementById("dwWellDoneNextButton").classList.add("hidden_panel"), this.Qt.St(), this.Kt <= this.options.ui ? (this.Gt.Jt(), this.h()) : (this.vi(), this.o("dwScoresheet")))
    }, this.fi = function (t) {
        var i = document.getElementById("dwUserOptions");
        this.i(i), this.t(), this.h(), this.o("dwActivity")
    }, this.Zt = function (t, i) {
        if (gtag("event", "clickTemplateCoin", {
            appName: "cashing-in",
            _i: t.Xt
        }), i && i.preventDefault(), "playing" == this.rt) {
            var s = this.Gt.wi();
            if (null != s) {
                var n = t.duplicate(this);
                n.left = this.Gt.gi[s][0], n.top = this.Gt.gi[s][1], n.M.classList.add("fly_to_hand");
                var e = t.left - n.left,
                    h = t.top - n.top;
                if (this.pi && (this.pi.style.transform = "translateX(" + e + "em) translateY(" + h + "em) rotate(0deg)"), n.M.addEventListener("animationend", function (t) {
                    t.target.classList.remove("fly_to_hand")
                }), this.Gt.bi(n, s), document.getElementById("dwRunningTotalPara").innerHTML = this.ei(this.Gt.mi()), n.M.addEventListener("click", this.yi.bind(this, s)), this.options.X) {
                    var o = document.getElementById("dwCoinIn");
                    o && o.play()
                }
            }
            this.u(0, "broccoli"), document.getElementById("dwCheckboxDiv").classList.remove("hidden_panel")
        }
    }, this.yi = function (t, i) {
        gtag("event", "removeHandCoin", {
            appName: "cashing-in"
        });
        var s = this.Gt.Si[t],
            n = this.Gt.Si[t].M;
        if (s.M.classList.add("fly_out_of_hand"), s.M.addEventListener("animationend", this.Ci.bind(this, n)), this.Gt.Oi(t), document.getElementById("dwRunningTotalPara").innerHTML = this.ei(this.Gt.mi()), this.options.X) {
            var e = document.getElementById("dwCoinOut");
            e && e.play()
        }
        this.u(0, "broccoli"), document.getElementById("dwCheckboxDiv").classList.remove("hidden_panel")
    }, this.Ci = function (t) {
        t.parentNode.removeChild(t)
    }, this.ti = function (t) {
        var i;
        for (t && t.preventDefault(), this.ci.ni = this.ni, this.ci.Di = this.Gt.mi(), this.ci.Vt = [], this.ci.di += 1, i = 0; i < this.Gt.Si.length; i++) {
            var s = this.Gt.Si[i];
            s && this.ci.Vt.push(s.Xt)
        }
        if (this.ki && (clearTimeout(this.ki), this.ki = void 0), this.Gt.mi() == this.ni) {
            if (gtag("event", "correctAnswer", {
                appName: "cashing-in",
                ni: this.ni
            }), this.u(100, this.P.Ai.Ni), document.getElementById("dwCheckboxDiv").classList.add("hidden_panel"), document.getElementById("dwWellDoneNextButton").classList.remove("hidden_panel"), this.Qt.St(), this.Ei = new Scannable(this.Ti, this.li.bind(this)), this.Qt.pt(this.Ei), this.options.X) (n = document.getElementById("dwCorrect")) && n.play();
            this.ci.Ri = !0
        } else {
            gtag("event", "wrongAnswer", {
                appName: "cashing-in",
                ni: this.ni,
                xi: this.Gt.mi()
            }), this.u(-10, this.P.Ai.ji), document.getElementById("dwCheckboxDiv").classList.add("hidden_panel");
            var n, e = document.getElementById("dwCheckboxDiv").classList;
            if (this.ki = setTimeout(e.remove.bind(e, "hidden_panel"), 2 * this.P.v.m), this.options.X) (n = document.getElementById("dwIncorrect")) && n.play();
            this.ci.Ri = !1
        }
        this.Gt.mi() == this.ni && this.ii.push(this.ci)
    }, this.ei = function (t) {
        var i = "£" + (t / 100).toFixed(2);
        return t < 100 && (i = t + "p"), i
    }, this.i = function (t) {
        var i = document.getElementById("radio-questions-5");
        this.options.ui = 10, i.checked && (this.options.ui = 5), this.options.et = document.getElementById("radio-scanning-on").checked, this.options.qt = document.getElementById("scan_delay_sel").value;
        var s = document.getElementById("radio-switches-2");
        this.options.Pt = 1, s.checked && (this.options.Pt = 2), this.options.si = 1e3, this.options.Yt = 200, document.getElementById("radio-coins-10").checked && (this.options.Yt = 10), document.getElementById("radio-coins-20").checked && (this.options.Yt = 20), document.getElementById("radio-coins-50").checked && (this.options.Yt = 50), document.getElementById("radio-coins-100").checked && (this.options.Yt = 100), document.getElementById("radio-coins-200").checked && (this.options.Yt = 200), this.options.si = this.P.Mi[this.options.Yt], this.Wi(), this.Bi(), this.options.et || this.Qt.stop(), gtag("event", "submitOptions", {
            Ii: this.options.Yt,
            appName: this.P.v.K,
            Fi: this.options.et,
            Pi: this.options.Pt,
            Ui: this.options.X,
            qi: this.options.ui
        })
    }, this.Wi = function () {
        this.V(), this.ai = document.getElementById("dwRunningTotalDiv"), this.options.oi = document.getElementById("radio-running-total-on").checked
    }, this.vi = function () {
        var t, i = "<p>Mode: ";
        this.options.oi ? i += "Learning (running total shown)</p>" : i += "Assessment (running total hidden)</p>", document.getElementById("dwScoreSheetMode").innerHTML = i;
        var s = 0,
            n = '<table class="score_sheet"><tr> <th class="score_sheet_star"> <th class="score_sheet_results">Amount requested <th class="score_sheet_results">Tries <th class="score_sheet_star"> ';
        for (t = 0; t < this.ii.length; t++) {
            var e = this.ii[t];
            e.Ri || "Wrong";
            var h = ' <tr> <td class="score_sheet_star"><img src="../shared/scoresheet-star.svg"><td class="score_sheet_results">' + this.ei(e.ni) + '<td class="score_sheet_results">' + e.di + '<td class="score_sheet_star"><img src="../shared/scoresheet-star.svg">';
            s += e.di, n += h
        }
        n += " </table>";
        var o = "<p>Total: " + this.options.ui + " Questions, ";
        o += s + " Tries</p>", document.getElementById("dwScoreSheetTotal").innerHTML = o, document.getElementById("dwScoreSheetResults").innerHTML = n, document.getElementById("dwScoreSheetNextButton").classList.remove("hidden_panel")
    }, this.Bi = function () {
        if (null != window.localStorage) {
            var t = window.localStorage.getItem(this._.H.ct),
                i = {};
            null != t && (i = JSON.parse(t)), null == i && (i = {});
            var s = {};
            s[this.P.H.Yt] = this.options.Yt, s[this.P.H.oi] = this.options.oi, s[this.P.H.ui] = this.options.ui;
            var n = i[this._.H.at];
            null == n && (n = {}), n[this._.H.et] = this.options.et, n[this._.H.ht] = this.options.qt, n[this._.H.ot] = this.options.Pt, n[this._.H.X] = this.options.X, i[this._.H.at] = n, i[this.P.H.Hi] = s, window.localStorage.setItem(this._.H.ct, JSON.stringify(i))
        }
    }, this.Ki = function () {
        if (null != window.localStorage) {
            var t = window.localStorage.getItem(this._.H.ct),
                i = {};
            null != t && (i = JSON.parse(t)), null == i && (i = {});
            var s = i[this.P.H.Hi];
            null != s && (this.options.Yt = s[this.P.H.Yt], this.Y("options_form", "biggest_coin", this.options.Yt), this.options.oi = s[this.P.H.oi], this.Y("options_form", "running_total", this.options.oi), this.options.ui = s[this.P.H.ui], this.Y("options_form", "num_questions", this.options.ui));
            var n = i[this._.H.at];
            null != n && (this.options.et = n[this._.H.et], this.Y("options_form", "enable_scanning", this.options.et), this.options.qt = n[this._.H.ht], this.Y("options_form", "scan_delay", this.options.qt), Doorway_spinSelect("scan_delay_sel", 0, "scan_delay_display"), this.options.Pt = n[this._.H.ot], this.Y("options_form", "num_switches", this.options.Pt), document.getElementById("dwAudioEnabledCheck").checked = n[this._.H.X], this.V())
        }
    }, this.P = {
        Ai: {
            Qi: "Good",
            Ni: "Well Done !",
            ji: "Try again",
            Ji: "Find the pairs",
            Gi: "Enter"
        },
        v: {
            Li: "../pictures/",
            zi: "../pictures/",
            m: 2e3,
            K: "cashing-in"
        },
        Mi: {
            10: 10,
            20: 50,
            50: 100,
            100: 200,
            200: 500
        },
        Vt: [{
            Vi: "coin-gbp-1.svg",
            Xt: 1,
            width: 3
        }, {
            Vi: "coin-gbp-2.svg",
            Xt: 2,
            width: 4
        }, {
            Vi: "coin-gbp-5.svg",
            Xt: 5,
            width: 3
        }, {
            Vi: "coin-gbp-10.svg",
            Xt: 10,
            width: 4
        }, {
            Vi: "coin-gbp-20.svg",
            Xt: 20,
            width: 3.5
        }, {
            Vi: "coin-gbp-50.svg",
            Xt: 50,
            width: 4.5
        }, {
            Vi: "coin-gbp-100.svg",
            Xt: 100,
            width: 4
        }, {
            Vi: "coin-gbp-200.svg",
            Xt: 200,
            width: 4.5
        }],
        F: ["dwWelcomeScreen", "dwUserOptions", "dwActivity", "dwScoresheet"],
        H: {
            Hi: "cashing_in",
            Yt: "biggest_coin",
            oi: "running_total",
            ui: "num_questions"
        }
    }, this.Gt = new Hand(this), this.Qt = new SwitchScanner(this), this.zt = [], null == t) throw "Cashing In needs a div to run inside DOM";
    if (this.ut = document.getElementById(t), null == this.ut) throw "Can't find activity div by id " + t + " in DOM";
    if (this.Xi = document.getElementById("dwMainActivityArea"), this.Yi = document.getElementById("dwNavigationHeader"), null == this.Yi) throw "Can't find dwNavigationHeader in DOM";
    this.Zi = document.getElementById("dwWelcomeScreen"), this.Ti = document.getElementById("dwWellDoneNextButton"), this.$i = document.getElementById("dwScoreSheetNextButton"), this.ts = document.getElementById("dwUserOptions"), this.ss = document.getElementById("dwTargetPara"), this.ns = this.Zi.getElementsByClassName("main_button")[0], this.Zi.addEventListener("click", this.o.bind(this, "dwUserOptions")), this.Ti.addEventListener("click", this.li.bind(this)), this.$i.addEventListener("click", this.s.bind(this));
    var i = document.getElementById("dwSubmitUserOptions");
    null != i && i.addEventListener("click", this.fi.bind(this)), this.es = void 0, document.getElementById("dwCheckboxDiv").addEventListener("click", this.ti.bind(this)), document.addEventListener("keydown", this.Qt.Ht.bind(this.Qt)), document.getElementById("dwAudioEnabledCheck").checked = !0, this.Ki(), this.pi = this.L("cashing-in.css", "anim_fly_to_hand", "0%"), document.getElementById("dwButtonToOptions").innerHTML = this.P.Ai.Gi, this.o("dwWelcomeScreen")
}

function CashingIn_makeStaticCashingIn() {
    try {
        return dwMainActivity = new CashingIn("dwActivity")
    } catch (t) {
        gtag("event", "error", {
            description: t.toString(),
            appName: "cashing-in"
        }), console.error(t.toString()), document.getElementById("dwButtonToOptions").innerHTML = "Error!"
    }
}

function Coin(t, i) {
    var s;
    ElementObject.call(this, "div"), this.duplicate = function (t) {
        var i = new Coin(this.Xt, t);
        return i.M.style.left = this.M.style.left, i.M.style.top = this.M.style.top, t.Xi.appendChild(i.M), i.M.style.width = this.M.width, i
    };
    var n = 0;
    for (n = 0; n < i.P.Vt.length; n++) i.P.Vt[n].Xt == t && (s = i.P.Vt[n]);
    this.M.classList.add("coin");
    var e = document.createElement("img"),
        h = i.P.v.Li + s.Vi;
    e.src = h, this.M.appendChild(e), i.Xi.appendChild(this.M), this.Xt = t, this.M.style.width = s.width + "em", this.M.style.height = this.M.style.width, this.state = "???"
}

function Hand(t) {
    this.gi = [
        [31, 16],
        [35.7, 16],
        [31, 11.5],
        [35.7, 11.5],
        [40.4, 11.5],
        [32, 7],
        [36.7, 7],
        [41.4, 7],
        [34.2, 3],
        [38.9, 3]
    ], this.Si = [], this.hs = t, this.os = this.gi.length, this.hi = new Scannable(void 0, void 0), this.bi = function (t, i) {
        null == this.Si[i] ? ((this.Si[i] = t).M.style.left = this.gi[i][0] + "em", t.M.style.top = this.gi[i][1] + "em", t.M.style.position = "absolute", this.as()) : console.log("ERROR, slotNum is already filled.")
    }, this.cs = function (t) {
        if (0 <= t && t < this.gi.length) return this.gi[t];
        console.log("ERROR, slotNum is not within coinSlots range.")
    }, this.mi = function () {
        var t, i = 0;
        for (t = 0; t < this.Si.length; t++) null != this.Si[t] && (i += this.Si[t].Xt);
        return i
    }, this.as = function () {
        var t;
        for (this.hi.St(), t = this.gi.length - 1; 0 <= t; t--)
            if (null != this.Si[t]) {
                var i = new Scannable(this.Si[t].M, this.hs.yi.bind(this.hs, t));
                this.hi.pt(i)
            }
    }, this.Oi = function (t) {
        null != this.Si[t] ? (this.Si[t] = void 0, this.as()) : console.log("ERROR, filledCoinSlots[slotNum] is empty.")
    }, this.Jt = function () {
        var t;
        for (t = 0; t < this.Si.length; t++) null != this.Si[t] && (this.Si[t].M.parentNode.removeChild(this.Si[t].M), this.Si[t] = void 0);
        document.getElementById("dwRunningTotalPara").innerHTML = "", this.hi.St()
    }, this.wi = function () {
        var t, i = void 0;
        for (t = 0; t < this.gi.length; t++)
            if (null == this.Si[t] && null == i) {
                i = t;
                break
            }
        return i
    }
}