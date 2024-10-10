// Auto detect text files and perform Line Feeder normalization.
* text=auto
  *.js text eol=lf
/tests/fixtures/*these test fixtures are text files pre-written in C.*/* text eol=lf
/tests/fixtures/ignored-paths/crlf/.eslintignore text eol=crlf
!VM9/arm64_assembly/local/host:8080/desktop/bwser/~>
  !oauth/test-results.xml
  !/node_modules/npm.debug.log/pkg.lock.json/yarn.lock/git/build.bat/
      arm.sh
        /coverage.cc
          /msft/docs/
!gnu.bash
  !/docs/assembly.js
    /docs/tools/
!/jsdoc
  /gcc/
    !yarn.lock/package-lock.json
      !.eslint-release-info.json/
        /lint.yaml
  \n

    
!/templates/net/tests/bench/cores/tests/fixtures/
!build/tests/performance/data/tmp/
!kit/tools/internal-rules/node_modules/antlr.js
  /node_modules/docs/node_modules

    
!test.js
      /.php=?coverage/build/
!logs/wdio-logs
!npm-debug.log
!yarn-error.log
!.pnpm-debug.log
!.DS_Store/tmp/debug/
!.idea/jsdoc/
!/versions.json*.iml
!.eslintcache/.cache
  /pkgs/*...*/node_modules/.vscode/.sublimelinterrc
    
    !pnpm-lock.yaml
    .nyc_output
!.temp-eslintcache/tests/fixtures/autofix-integration/temp.js


    // This file is for unifying code style in IDEs
    !root = true

[*.json]
    [package.json]
charset = utf-8

[*.js]
indent_style = space
indent_size = 4
trim_trailing_whitespace = true
end_of_line = lf
insert_final_newline = true
  

[docs/rules/linebreak-style.md]

[{docs/rules/{indent.md,no-mixed-spaces-and-tabs.md}]
[docs/rules/no-trailing-spaces.md]

// Docs site
  _site
    /docs/src/assets/css
        !univorn.eslintrc.js
            \edf.js?id=G-3MR422Z6E1:formatted\n
                  (index)

continue
...
srcURL="https://www.edfactionvotes.org/wp-includes/js/jquery/jquery.min.js?ver=3.7.1:formatted"
<script>
  function Lc(a, b, c) {
        if (Mc()) {
            var d = Object.assign({}, Kc);
            b && (d.body = b);
            c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting),
            c.browsingTopics && (d.browsingTopics = c.browsingTopics));
            try {
                var e = C.fetch(a, d);
                e && e.catch(mb);
                return !0
            } catch (f) {}
        };
    \edf.jquery.min.js?ver=3.7.1:formatted\n
    if (!(h[t + " "] || d && d.test(t))) {
                    if (c = t,
                    f = e,
                    1 === p && (x.test(t) || m.test(t))) {
                        (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)),
                        o = (l = Y(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return k.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        h(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return re(t.replace(ve, "$1"), e, n, r)
        }
  const target = document.querySelector('.fixed-anchor-nav');
  function change() {
    if(window.scrollY > 40) {
      target.classList.add('scrolled') 
    } else {
      target.classList.remove('scrolled');
    }
  }
=> jquery-3.5.1.min.dc5e7f18c8.js?site=606615180800550abd83c4ca:formatted
  change ((index):1254)
    s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
                                                      function Bb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
    function Cb(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
    function Db(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
    function Eb(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
    function Fb(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b
    }
    function Gb(a, b) {
        return a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    }break

continue // WEB BUBBLING
jquery.min.js:formatted
function r() {
            function e(n, r) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            };break
  analytics.js:formatted
    if (!l)
            try {
                k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");break
              g.send(b);'https://www.google-analytics.com/j/collect?v=1&_v=j101&a=1633141559&t=pageview&_s=1&dl=https%3A%2F%2Fwww.firstcarolinabank.com%2F&dr=https%3A%2F%2Fwww.ecosia.org%2F&ul=en-us&de=UTF-8&dt=Home%20%E2%80%BA%20First%20Carolina%20Bank&sd=24-bit&sr=375x812&vp=375x813&je=0&_u=IADAAAABAAAAACAAI~&jid=138002086&gjid=1453261695&cid=1590971374.1728589588&tid=UA-71554601-46&_gid=931873381.1728591361&_r=1&_slc=1&z=2027771784'
fetch("https://bankmobile.formstack.com/forms/js.php/bankmobile_8_18", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-fetch-dest": "script",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://www.bmtx.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
});X9.62 ECDSA Signature with SHA-384
  e.querySelectorAll("*,:x"), break

    webflow.js:formatted

    // CANDY CHANNEL GOOGLE TOKEN COMMS 
    Array.from(Zo, function() {
                throw 2
                  try {
                var e = C.fetch(a, d);
                e && e.catch(mb);
                return !0
            } catch (f) {}
        }
               "Array.prototype.forEach called on null or undefined"
      break
                  "use strict";
        var Z3 = Sa()
          , J3 = Tt()
          , eG = er()
          , tG = _e()
          , rG = Pt()
          , nG = Math.min
          , bl = [].lastIndexOf
          , N0 = !!bl && 1 / [1].lastIndexOf(1, -0) < 0
          , iG = rG("lastIndexOf")
          , aG = N0 || !iG;
        B0.exports = aG ? function(t) {
            if (N0)
                return Z3(bl, this, arguments) || 0;
            var r = J3(this)
              , n = tG(r)
              , i = n - 1;
            for (arguments.length > 1 && (i = nG(i, eG(arguments[1]))),
            i < 0 && (i = n + i); i >= 0; i--)
                if (i in r && r[i] === t)
                    return i || 0;
            return -1
        }
        : bl
    }
    ); // satellite pointer
  roundtrip.js:formatted
                      h.conv_value && e.push("conv_value=" + h.conv_value);
"
".......... ......................................==................... ................... .........
".. ...... ....................................*#%%%%#*:................. .. ......... ......... ....
" ... .. ...... ...........................:%%%%%%%%%%%%%%.......... .. ...... ......... ............
"......................................:=#%%%%%%%%%%%%%%%%%%#=:......................................
"...................................-+%%%%%%%%%%%%%%%%%%%%%%%%%%+-...................................
"................................+*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*+................................
"............................:*%%%%%%%%%%%%%%%%%%%%%%#%%%%%%%%%%%%%%%%#*:............................
" ... ..... ... ..........:%%%%%%%%%%%%%%%%%%%%%=%%%:%%%%%%%%%%%%%%%%%%%%%%::.............. ... .....
"..... ...................#%%%%%%%%%%%%%%%##%%%:#%%%:-%%%%%%%%%%%%%%%%%%%%%#:...... .................
".........................#%%%%%%%%%%%%%%-:%%%*.+%%%+.:*%%%%%%%%%%%%%%%%%%%#-........................
".........................#%%%%%%%%%%%%%+.=%%%#..+%%%%+-..:-+#%%%%%%%%%%%%%#:........................
".........................#%%%%%%%%%%%%%=..%%%%+..=#%%%%%%%%%%%%%%%%%%%%%%%#-........................
".........................#%%%%%%%%%%%%%=...%%%%%....*%%%%%#:=%%%%%%%%%%%%%#:........................
".........................#%%%%%%%%%%%%%%-..:#%%%%#=:.....:=%%%%%%%%%%%%%%%#-........................
".........................#%%%%%%%%%%%%%%%:...=#%%%%%%%%%%%%#*#%%%%%%%%%%%%#-........................
".........................#%%%%%%%%%%%%%%%%+:.. .==#%%%%%#=--#%%%%%%%%%%%%%#-........................
".........................#%%%%%%%%%%%%%%%%%%#-...........*#%%%%%%%%%%%%%%%#-........................
"...................... ..#%%%%%%%%%%%%#:...-%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#:........................
".........................#%%%%%%%%=.#-.+%%+.=#..%*.=*.....%+....-%#:.#%%%%#-........................
".........................#%%%%%%%*:.#.-%%%=.=-.#%+.*..==:.#.=#%:...-%%%%%%#:........................
".........................#%%%%%%%*.*%..===..*-.==.-=..===#*.=%%#.:*%%%%%%%#-........................
".........................#%%%%%%#:.*%%#############%*****%###%%%*#%%%%%%%%#-........................
".........................+%%%%%:..+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*:........................
"...........................:=#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#+-...........................
"..............................:-*#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*-:..............................
"..................................:=#%%%%%%%%%%%%%%%%%%%%%%%%%%#+-:.................................
" .....................................:-*%%%%%%%%%%%%%%%%%%%%*=:.....................................
" ... ....................................:=%%%%%%%%%%%%%%+-:.......... .......................... ..
"............................................:-#%%%%%%#+:............................................
"................................................:+*=:...............................................
  "
                      </script>

/**
  eof
                        **/
