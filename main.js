window.pubbidgeartag = function () {
    function b(t, e, n, o, j) {
        const w = document.createElement("div");
        w.setAttribute("id", e.id + "-1");

        const i = document.createElement("iframe");
        i.setAttribute("frameborder", "0");
        i.setAttribute("id", `iframe_${t}`);
        i.setAttribute("name", `iframe_${t}`);
        i.setAttribute("allowfullscreen", "true");
        i.setAttribute("margin", "auto");
        i.setAttribute("width", "100%");
        i.setAttribute("onload", 'javascript:(function(o){let i_n = 0;let i_t = setInterval(function (){if (o.contentWindow != null && o.contentWindow.document != null){o.style.height=o.contentWindow.document.body.scrollHeight+"px";o.style.width=o.contentWindow.document.body.scrollWidth+"px";clearInterval(i_t);}if (i_n===50){clearInterval(i_t);}i_n++;},100);}(this));');
        if (o === 1) {
			i.setAttribute("height", "auto");
		} else {
			i.setAttribute("height", o || "0");	
		}        
        i.setAttribute("scrolling", "no");
        w.appendChild(i);
        let dClose = document.getElementById(`close-${e.id}-close`);
        if (dClose) {
            w.appendChild(dClose);
        }
        e.appendChild(w);
		if (j.data.cssOutPartner) {			
			const c = document.createElement("style");
			c.innerText = j.data.cssOutPartner;
			w.appendChild(c);
		}
		
        const a = i.contentWindow ? i.contentWindow : i.contentDocument.document ? i.contentDocument.document : i.contentDocument;
        a.document.open();
        a.document.write(n);
        a.document.close();
        if (a.document.body && !a.document.body.isContentEditable) {
            a.document.body.contentEditable = true;
            a.document.body.contentEditable = false;
            a.document.body.style.padding = 0;
            a.document.body.style.margin = 0;
            a.document.body.style.overflow = "hidden"
        }
        
    }


    function g(e) {
        if (e.nodeType !== 1) {
            return e.cloneNode(true)
        }
        const n = document.createElement(e.tagName);
        for (let t = 0; t < e.attributes.length; t++) {
            n.setAttribute(e.attributes[t].nodeName, e.attributes[t].nodeValue)
        }
        const {childNodes: o} = e;
        for (let t = 0; t < o.length; t++) {
            const i = o[t];
            n.appendChild(g(i))
        }
        return n
    }



    async function h(zoneid, wu) {
        try {
            const k = new Date().getTime();
            const s = await fetch(`https://platform.bidgear.com/async-v2.json?zoneid=${zoneid}&wu=${wu}`);
            const d = await s.json();
			//console.log(d);
            if (s.status !== 200) {
                console.log(d.message)
            }
			//console.log("return 200");
            return d
        } catch (t) {
            console.log(t)
        }
    }


    async function e(n) {
        if (!n) return console.log("Tag not found");
        const o = document.getElementById(n.id);
        if (!o) return console.log(`div ${n.id || ""} not found`);
        if (y.indexOf(n.id) !== -1) {
            return console.error(`Div element ${n.id} is already associated with another slot`)
        }
        y.push(n.id); /* end 4.1 */
		const i = await h(n.zoneid, n.wu); /* call 4.2 */
        if (!(i && i.data)) { 
		console.log("bg check data");
		return;
		}
        const {width: t, height: l} = i.data.size;
		
        o.style.position = "relative";
        o.style.margin = "auto";
        o.style.clear = "both";
        //o.style.width = t ? t === 0 ? "fit-content" : `${t}px` : "fit-content";
		if (t > 2) {
			o.style.width = `${t}px`;
		} 		
		//if (l === 1) {
			//o.style.width = "auto";			
		//	o.style.height = "auto";
		//}
        const a = i.data;
        
        /* call 4.4 */
        //update refresh
		x(i.data.useIframe, n.id, o, i.data.htmlCode, l, a, i, n)		
		
		if(i.data.auRefresh) {
			let refreshIframe = i.data.refreshIframe || 1;
			setInterval(function () {
				x(refreshIframe, n.id, o, i.data.htmlCode, l, a, i, n)
			}, i.data.timeWait*1000);
		}
    }
	
	function p(a, o) {
		if (a.htmlCodeAddon && a.htmlCodeAddon.length > 0)
            {
                            
                for (let i=0; i < a.htmlCodeAddon.length; i++)
                {
                    //console.log("js ghep code is");
                    const e = document.createElement("div");
				//console.log(i.data.htmlCode);
                    
                    let subJS = a.htmlCodeAddon[i];
                    subJS = subJS.replaceAll("\\","");
                    //console.log(subJS);
                    e.innerHTML = subJS;
                    e.childNodes.forEach( t => {
                        o.appendChild(g(t))
                    })
                    //document.getElementById(n.id).appendChild(e);
                }
                

            }
	}
	
	function x(useIframe, id, o, htmlCode, height, a, i, n) {
        //console.log("11111111111111111");
        if(o) {
            o.innerHTML = "";
        }
        if (a && a.stickyAd && a.stickyAd.showStickyAd) {


            const c = document.createElement("style");
            const r = i.data.stickyAd.xPercent || 0;
            let e = `${i.data.stickyAd.yPercent || 0}%`;
            if (a.stickyAd.showClose) {
                const s = "5px";
                o.style.marginTop = "20px";
                const d = document.createElement("div");
                d.id = `close-${n.id}-close`;
                d.className = `close-${n.id}-close`;
                d.style.position = "absolute";
                if (i.data.stickyAd.yPercent == 0) {
                    d.style.bottom = `-${s}`;
                } else {
                    d.style.top = `-${s}`;
                }
                d.style.right = "-28px";
                d.style.cursor = "pointer";
                d.innerHTML = '<img style="width: 28px !important; height: 28px !important" alt="Ads by Bidgear" src="https://bidgear.com/images/close-icon.png"/>';
                d.onclick = () => {
                    o.remove()
                };
                // let t;
                // t = setTimeout(() => {
                //     o.appendChild(d);
                //     clearTimeout(t)
                // }, 0); 
                o.appendChild(d);
                e = i.data.stickyAd.yPercent > 80 ? `calc(${e} - ${s})` : e
            }
            //c.innerText = `#${n.id} { position: fixed !important; top: ${e} !important; left: ${r}% !important; transform: translate(-${r}%, -${i.data.stickyAd.yPercent || 0}%) !important; z-index: 2147483647}`;
            c.innerText = `#${n.id} { position: fixed !important; top: ${e}; left: ${r}%; transform: translate(-${r}%, -${i.data.stickyAd.yPercent || 0}%); z-index: 2147483647} `;
            if (useIframe) {
                c.innerText = `#${n.id}-1 { position: fixed !important; top: ${e}; left: ${r}%; transform: translate(-${r}%, -${i.data.stickyAd.yPercent || 0}%); z-index: 2147483647} ` + i.data.cssOutPartner;
            }
            o.appendChild(c)
        }/* end 4.3 */
		if (useIframe) {
            //console.log("use iframe");
            b(id, o, htmlCode, height, i);
            p(a, o);
			
        } else {
                //console.log("no iframe");		
                //console.log("html code is");		
				const e = document.createElement("div");
				//console.log(i.data.htmlCode);
                //console.log(htmlCode);
				e.innerHTML = htmlCode;
				e.childNodes.forEach( t => {
					o.appendChild(g(t))
				})
				p(a, o);
            /* end 4.5 */
        }
	}
// End update refresh
    
    let y;
    if (window.pubbidgeartag) {
        y = window.pubbidgeartag.divIds || []
    } else {
        y = []
    }

    if (Array.isArray(window.pubbidgeartag)) {
        for (let t = 0; t < window.pubbidgeartag.length; t++) {
            const n = window.pubbidgeartag[t];
            if (n.zoneid && n.id) {
                e(n)
            }
        }
    }

    return {push: e, divIds: y}
}();