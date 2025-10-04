
(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "undefined";
              window.beaePageSetting.pageTitle = "undefined"; 
              window.beaePageSetting.pageType = "undefined";

          let js_QI3MA6OT = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-z4iw9s8esection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-z4iw9s8e',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-z4iw9s8e');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-z4iw9s8e: ', ex)
      };
    

      try {
        let argid = 'beae-nzcivdi5button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nzcivdi5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nzcivdi5');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nzcivdi5: ', ex)
      };
    

      try {
        let argid = 'beae-v4y9mf2vsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-v4y9mf2v',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-v4y9mf2v');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-v4y9mf2v: ', ex)
      };
    

      try {
        let argid = 'beae-sonwyyrosection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sonwyyro',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sonwyyro');
        args.el = args.els[0];
        ((g) => { window.BeaeSlider&&!g.noRunJs&&window.BeaeSlider(g) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sonwyyro: ', ex)
      };
    

      try {
        let argid = 'beae-xz0kompyblock-discount-codeloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xz0kompy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xz0kompy');
        args.el = args.els[0];
        ((f) => { if(f.mode.value!="live")return;const _=f.el.querySelector(".beae-content-discount");_.addEventListener("click",()=>{if(_.classList.contains("copied"))return;const b=_.querySelector(".beae-discount--code");window.navigator.clipboard.writeText(b.innerText),_.classList.add("copied"),setTimeout(()=>{_.classList.add("leave"),setTimeout(()=>{_.classList.remove("leave"),_.classList.remove("copied")},200)},1e3)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xz0kompy: ', ex)
      };
    

      try {
        let argid = 'beae-xz0kompyblock-discount-codeloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xz0kompy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xz0kompy');
        args.el = args.els[1];
        ((f) => { if(f.mode.value!="live")return;const _=f.el.querySelector(".beae-content-discount");_.addEventListener("click",()=>{if(_.classList.contains("copied"))return;const b=_.querySelector(".beae-discount--code");window.navigator.clipboard.writeText(b.innerText),_.classList.add("copied"),setTimeout(()=>{_.classList.add("leave"),setTimeout(()=>{_.classList.remove("leave"),_.classList.remove("copied")},200)},1e3)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xz0kompy: ', ex)
      };
    

      try {
        let argid = 'beae-xz0kompyblock-discount-codeloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xz0kompy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xz0kompy');
        args.el = args.els[2];
        ((f) => { if(f.mode.value!="live")return;const _=f.el.querySelector(".beae-content-discount");_.addEventListener("click",()=>{if(_.classList.contains("copied"))return;const b=_.querySelector(".beae-discount--code");window.navigator.clipboard.writeText(b.innerText),_.classList.add("copied"),setTimeout(()=>{_.classList.add("leave"),setTimeout(()=>{_.classList.remove("leave"),_.classList.remove("copied")},200)},1e3)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xz0kompy: ', ex)
      };
    

      try {
        let argid = 'beae-xz0kompyblock-discount-codeloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xz0kompy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xz0kompy');
        args.el = args.els[3];
        ((f) => { if(f.mode.value!="live")return;const _=f.el.querySelector(".beae-content-discount");_.addEventListener("click",()=>{if(_.classList.contains("copied"))return;const b=_.querySelector(".beae-discount--code");window.navigator.clipboard.writeText(b.innerText),_.classList.add("copied"),setTimeout(()=>{_.classList.add("leave"),setTimeout(()=>{_.classList.remove("leave"),_.classList.remove("copied")},200)},1e3)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xz0kompy: ', ex)
      };
    

      try {
        let argid = 'beae-26b28n0usection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-26b28n0u',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-26b28n0u');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-26b28n0u: ', ex)
      };
    

      try {
        let argid = 'beae-qphn1ef8section-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qphn1ef8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qphn1ef8');
        args.el = args.els[0];
        ((a) => { var l;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(l=a.el.querySelector(".beae-money-format"))==null?void 0:l.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((f,_)=>{a.mode.value=="live"&&!o&&(_===0?(f.classList.add("nav-active"),t[_]&&(t[_].style.display="block",t[_].setAttribute("data-active","true"))):(f.classList.remove("nav-active"),t[_]&&(t[_].style.display="none",t[_].setAttribute("data-active","false"))));let b=!1;f.addEventListener("click",()=>{if(b)return;b=!0,n.forEach(w=>{w.classList.remove("nav-active")}),f.classList.add("nav-active");const g=f.getAttribute("data-handle"),u=a.el.querySelectorAll(".viewall-link");u&&u.forEach(w=>{w.setAttribute("href",`/collections/${g}`)});const v=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${g}"]`),m=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),m){m.setAttribute("data-active","false");const w=s(m);setTimeout(()=>{m.style.display="none",v&&(v.style.display="block"),setTimeout(()=>{v&&v.setAttribute("data-active","true"),b=!1},50)},w)}else v&&(v.style.display="block"),setTimeout(()=>{v&&v.setAttribute("data-active","true"),b=!1},50)})});function s(f){const b=window.getComputedStyle(f).getPropertyValue("transition-duration");let g=parseFloat(b)*1e3;return b.includes("s")?g=parseFloat(b)*1e3:g=parseFloat(b),g||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&p(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function p(f){if(a.mode.value!="live")return;const _=a.el.querySelectorAll(".beae-slider-items");if(_&&_.length){_.forEach(g=>{const u=a.el.querySelector(".beae-promotion > *");if(!u)return;const v=u.cloneNode(!0),m=g.children;f>=m.length?g.appendChild(v):g.insertBefore(v,m[f])});const b=a.el.querySelector(".beae-promotion");b&&b.remove()}}const c=a.el.querySelectorAll(".beae-product-form-next");c&&c.length&&a.el.querySelector(".beae-x-quick-add")&&c.forEach(f=>{f.tagName!=="DIV"&&d(f)});function d(f){const _=f.querySelector(".beae-quick-add-mb-quick-view");_&&(_.onclick=()=>{var B,k;const $=f.getAttribute("data-handle");if($&&(window!=null&&window.BeaePopupLibrary)){const x=window==null?void 0:window.createLoading(_);let M=(k=(B=window==null?void 0:window.BEAE_HELPER)==null?void 0:B.routes)==null?void 0:k.root_url;window==null||window.BeaePopupLibrary.lightbox({url:(M!=="/"?M:"")+"/products/"+$+"?view=beae-quickview-default"}).then(V=>{var L,T;x.remove(),window==null||window.handleEventFormProductCard(V),(T=(L=window==null?void 0:window.Shopify)==null?void 0:L.PaymentButton)==null||T.init()})}});const b=f.getAttribute("data-product_id");if(b&&b.indexOf("encode")>-1)return;const g=f.querySelector('script[data-id="Product-json-'+b+'"]')||f.querySelector("#Product-json-"+b),u=JSON.parse(g!=null&&g.innerHTML?g==null?void 0:g.innerHTML:"{}"),v=u.variants||[],m=u.selected_or_first_available_variant,w=f.querySelector(".beae-x-quick-add"),h=f.closest("section.beae-section");let y=JSON.parse(JSON.stringify(m?m.options:[]));const C=f.querySelector(".beae-quick-add-content");let S=!0;if(w){let $=function(I,A,q){y[A]=q,f.querySelectorAll('.beae-quick-add-variant:not([data-option-name="'+I+'"])').forEach(Y=>{Y.querySelectorAll(".beae-quick-add-item").forEach(Q=>{const X=Q.getAttribute("data-value"),ne=parseInt(Q.getAttribute("data-option-position")-1);let te=JSON.parse(JSON.stringify(y));te[ne]=X;let le=v.find(ce=>ce.options.every((ue,xe)=>ue===te[xe]));le&&(le.available?Q.classList.remove("beae-quick-add-item-disable"):Q.classList.add("beae-quick-add-item-disable"))})});let W=v.find(Y=>Y.options.every((K,Q)=>K===y[Q]));W&&(B(W),W.available?(F.classList.remove("beae-sold-out"),C.innerHTML=z):(F.classList.add("beae-sold-out"),C.innerHTML=H))},B=function(I){if(I){x(I),M(I),T(I),N(I),V(I),k(I),f.setAttribute("data-variant-id",I.id);const A=f.querySelector('input[type="hidden"][name="id"]');A&&A.setAttribute("value",I.id)}},k=function(I){I&&(S||(w.querySelectorAll(".beae-quick-add-variant-images-list").forEach(A=>{const q=parseInt(A.getAttribute("data-option-name").split("_")[1]);let D=[];U(I,q).forEach(W=>{D.push(`
                            <span>
                                <img src="${W.featured_image?W.featured_image.src:"//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif"}" alt="${W.title}" height="120" width="120" loading="lazy"
                                />
                            </span>
                        `)}),A.querySelectorAll(".beae-quick-add-variant-item-image").forEach((W,Y)=>{W.innerHTML=D[Y]})}),S=!0))},x=function(I){let A=u==null?void 0:u.featured_image;if(A=I.featured_image,A){const D=f.querySelector(".beae-image-primary img");if(D){D.removeAttribute("srcset");var q=new Image;q.onload=function(){D.src=this.src},D.src=typeof A=="string"?A:A.src}}},M=function(I){if(!window.BeaeMoneyFormat)return;const A=f.querySelector(".beae-product-single__price"),q=f.querySelector(".beae-product-single__price--regular");if(A){let D=window.BeaeFormatMoney(I.price);D&&typeof D=="string"&&(D=D.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"));const W=A.querySelector(".beae-price-normal"),Y=A.querySelector(".beae-price-from");if(Y||W){if(Y){let K=A.getAttribute("data-from-text");K||(K="From {price}"),Y.innerHTML=K&&K.replace(new RegExp("{\\s*?price\\s*?}","g"),D)}W&&(W.innerHTML=D)}else A.innerHTML=D}if(q)if(I.compare_at_price){let D=window.BeaeFormatMoney(I.compare_at_price);D&&typeof D=="string"&&(D=D.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),q.innerHTML=D,A&&A.setAttribute("data-sale",!0)}else q.innerHTML="";L(I)},V=function(I){var W,Y,K,Q;const A=parseFloat((Y=(W=I.price)==null?void 0:W.toString())==null?void 0:Y.replace(",","")),q=parseFloat((Q=(K=I.compare_at_price)==null?void 0:K.toString())==null?void 0:Q.replace(",","")),D=f.querySelectorAll(".beae-product-badged");D&&D.forEach(X=>{if(!X)return;const ne=X.getAttribute("type"),te=X.getAttribute("data-sale")||"",le=X.getAttribute("data-sold-out");let ce="";if(ne=="percent")ce=Math.floor((q-A)*100/q);else if(ne=="dollar"){const fe=window.BeaeFormatDecimal(I.compare_at_price)-window.BeaeFormatDecimal(I.price);ce=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(fe))}else if(ne=="none"){X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML="";return}const ue=I.inventory_quantity,xe=I.inventory_policy;if(ue>0||ue<1&&xe=="continue"||!I.inventory_management){const fe=parseFloat(I.price),we=parseFloat(I.compare_at_price);if(we&&we>fe){X.classList.remove("beae-sale-sold-out","beae-sale-hidden"),X.classList.add("beae-product-single__price--sale");let ye=te.replace(new RegExp("{\\s*?sale\\s*?}","g"),ce);ye&&(ye=ye.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),X.innerHTML=ye}else X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML=""}else X.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),X.classList.add("beae-sale-sold-out"),X.innerHTML=le})},L=function(I){var W,Y,K,Q;const A=parseFloat((Y=(W=I.price)==null?void 0:W.toString())==null?void 0:Y.replace(",","")),q=parseFloat((Q=(K=I.compare_at_price)==null?void 0:K.toString())==null?void 0:Q.replace(",","")),D=f.querySelectorAll(".beae-product-single__price--badged");D&&D.forEach(X=>{if(!X)return;const ne=X.getAttribute("type"),te=X.getAttribute("data-sale")||"",le=X.getAttribute("data-sold-out");let ce="";if(ne=="percent")ce=Math.floor((q-A)*100/q);else if(ne=="dollar"){const fe=window.BeaeFormatDecimal(I.compare_at_price)-window.BeaeFormatDecimal(I.price);ce=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(fe))}else if(ne=="none"){X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML="";return}const ue=I.inventory_quantity,xe=I.inventory_policy;if(ue>0||ue<1&&xe=="continue"||!I.inventory_management){const fe=parseFloat(I.price),we=parseFloat(I.compare_at_price);if(we&&we>fe){X.classList.remove("beae-sale-sold-out","beae-sale-hidden"),X.classList.add("beae-product-single__price--sale");let ye=te.replace(new RegExp("{\\s*?sale\\s*?}","g"),ce);ye&&(ye=ye.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),X.innerHTML=ye}else X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML=""}else X.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),X.classList.add("beae-sale-sold-out"),X.innerHTML=le})},T=function(I){if(F){const q=F.querySelector(".beae-quick-add-text-content");if(I.available){if(F&&(F.removeAttribute("disabled"),q))if(v.length>1){q.innerHTML=F.getAttribute("data-choose-options-text");const D=document.createElement("a");for(let K=0;K<F.attributes.length;K++){let Q=F.attributes[K];D.setAttribute(Q.name,Q.value)}D.innerHTML=F.innerHTML;const Y=F.closest("form.beae-product-form-next").getAttribute("data-handle");D.href="/products/"+Y,F.parentNode.replaceChild(D,F)}else q.innerHTML=F.getAttribute("data-quick-add-text")}else F&&(F.setAttribute("disabled","disabled"),q&&(q.innerHTML=F.getAttribute("data-sold-out-text")))}const A=f.querySelector(".shopify-payment-button__button");A&&(I.inventory_quantity>0?A.removeAttribute("disabled"):a.mode.value=="live"&&A.setAttribute("disabled","disabled"))},N=function(I){const A=f.querySelector(".beae-x-inventory");if(!A||!I)return;const q=A.children[0],D=A.getAttribute("data-in-stock-text"),W=A.getAttribute("data-out-stock-text");A.getAttribute("data-inventory-text");const Y=A.getAttribute("data-pre-order-text"),K=A.getAttribute("data-very-low-stock-text"),Q=A.getAttribute("data-low-stock-text"),X=A.getAttribute("data-incoming-date-text"),ne=A.getAttribute("data-low-number")??20,te=A.getAttribute("data-very-low-number")??5,le=A.getAttribute("data-show-next-incoming-date"),ce=A.getAttribute("data-max-number")??60,ue=A.querySelector(".beae-inventory-label"),xe=A.querySelector(".beae-inventory-process-body");let fe=I.inventory_quantity;f.querySelector(".beae-x-swatch-color")||w||(fe=u.variants.reduce((ke,J)=>ke+(J.inventory_quantity||0),0));function ye(ke){return ke?ke.replace("{quantity}",fe).replace("{next_incoming_date}",I.next_incoming_date):""}!q||!ue||(I.available?I.inventory_policy==="continue"&&fe<1?(ue.innerHTML=ye(Y),q.classList="",q.classList.add("beae-inventory-pre-order")):fe<=te?(ue.innerHTML=ye(K),q.classList="",q.classList.add("beae-inventory-very-low")):fe<=ne?(ue.innerHTML=ye(Q),q.classList="",q.classList.add("beae-inventory-low")):(ue.innerHTML=ye(D),q.classList="",q.classList.add("beae-inventory-in-stock")):I.next_incoming_date&&le?(ue.innerHTML=ye(X),q.classList="",q.classList.add("beae-incoming-transfer")):(ue.innerHTML=ye(W),q.classList="",q.classList.add("beae-inventory-out-stock")),xe&&(fe<=ce?xe.style.width=fe/ce*100+"%":xe.style.width="100%"))},E=function(){let I={};O.forEach(Q=>{const X=Q.querySelector(".beae-quick-add-input");X&&(I[X.getAttribute("name")]=X.value)});const A=new FormData(f);for(var[q,D]of A)q.includes("beae_option")&&(I[q]||(I[q]=D));I=Object.values(I);let W=w.getAttribute("data-type");W||(W="with_button");function Y(){return O.length==0?v[0]:I.length<O.length||Z.size<O.length&&W=="without_button"?null:v.find(Q=>Q.options.every(X=>[...I].includes(X)))}const K=f.querySelector('[name="id"]');if(K){const Q=Y();(Q||O.length==0)&&(Q&&(K.value=Q.id),j&&Q.available&&(f.dispatchEvent(new CustomEvent("addCartOptionSuccess")),j.click(),P()))}},P=function(){O.forEach(I=>{let A=I.querySelector('.beae-quick-add-input[data-exclude="false"]');window.outerWidth<768&&(A=I.querySelector(".beae-quick-add-input"));const q=I.querySelectorAll(".beae-quick-add-item");A&&(A.value=null),q.forEach(D=>{var Y;const W=((Y=D.parentElement)==null?void 0:Y.children)??[];for(let K=0;K<W.length;K++)W[K].classList.remove("beae-quick-add-item-active")})})};const H=w.getAttribute("data-sold-out-text"),z=w.getAttribute("data-add-to-cart-text"),j=f.querySelector(".beae-quick-add-action");w.classList.contains("beae-sold-out")&&(C.innerHTML=H);const O=f.querySelectorAll(".beae-quick-add-variant"),R=f.querySelectorAll(".beae-dropdown-toggle"),F=f.querySelector(".beae-quick-add--submit");let G=!1;const Z=new Set;R.length>0&&(R.forEach(I=>{I.addEventListener("click",function(){const A=this.getAttribute("data-option-name"),q=w.querySelector(`ul.beae-quick-add-variant[data-option-name="${A}"]`);if(q){const D=q.classList.contains("active");w.querySelectorAll(".beae-quick-add-variant").forEach(W=>{W.classList.remove("active")}),D?G=!1:(q.classList.add("active"),G=!0)}})}),document.addEventListener("click",function(I){G&&!w.contains(I.target)&&(w.querySelectorAll(".beae-quick-add-variant").forEach(A=>{A.classList.remove("active")}),G=!1)})),O.forEach(I=>{const A=I.querySelector(".beae-quick-add-input");I.querySelectorAll(".beae-quick-add-item").forEach(D=>{const W=D.getAttribute("data-value"),Y=parseInt(D.getAttribute("data-option-position")-1),K=w.getAttribute("data-type");D.addEventListener("mouseenter",function(){$(I.getAttribute("data-option-name"),Y,W)}),D.addEventListener("click",function(){Z.add(Y),D.classList.contains("beae-quick-add-variant-item-image")?S=!0:S=!1;const Q=I.querySelector(".beae-quick-add-item-active");if(Q.classList.remove("beae-quick-add-item-active"),Q.removeAttribute("data-selected"),D.classList.add("beae-quick-add-item-active"),D.setAttribute("data-selected","true"),A.value=W,$(I.getAttribute("data-option-name"),Y,W),w&&K!="with_button"&&E(),R.length>0){const X=D.closest("ul.beae-quick-add-variant");X.classList.toggle("active");const ne=X.getAttribute("data-option-name"),te=w.querySelector(`.beae-dropdown-toggle[data-option-name="${ne}"] span`);te.innerText=D.innerText}})}),I.addEventListener("mouseleave",function(){const D=I.querySelector(".beae-quick-add-item-active");if(D){const W=parseInt(D.getAttribute("data-option-position")-1),Y=D.getAttribute("data-value");$(I.getAttribute("data-option-name"),W,Y)}})}),f.addEventListener("BeaeSelectedSwatch",function(I){let A=I.detail.swatchWrp;if(A){const q=A.querySelector(".beae-swatch-color-input");q&&$(q.getAttribute("data-option-name"),parseInt(I.detail.position)-1,I.detail.value)}});let U=function(I,A){if(!I)return[];let q=I.options.filter((D,W)=>W!=A);return u.variants.filter(D=>q.every(W=>D.options.includes(W)))??[]};if(h.offsetWidth<768){let I=function(){if(window.BeaePopupLibrary&&(w||A)){let q=document.createElement("div"),W=w.parentElement.cloneNode(!0);W.classList.add("beae-popup-quick-add"),W.setAttribute("form-id",f.getAttribute("id")),q.innerHTML=W.outerHTML;let Y="";h&&(Y=h.getAttribute("data-sectionid")),window.BeaePopupLibrary.createPopup(q,{layout:"center",layoutMobile:"bottom",width:"auto",sectionId:Y,customJs:function(K){if(K){let Q=K.querySelector(".beae-popup-quick-add");if(Q){let X=document.getElementById(Q.getAttribute("form-id"));const ne=X.getAttribute("data-product_id"),te=X.querySelector('script[data-id="Product-json-'+ne+'"]')||X.querySelector("#Product-json-"+ne),le=JSON.parse(te!=null&&te.innerHTML?te==null?void 0:te.innerHTML:"{}"),ce=Q.querySelector(".beae-quick-add--submit"),ue=le.variants||[],xe=le.selected_or_first_available_variant;let fe=JSON.parse(JSON.stringify(xe.options));if(X){let we=function(J,ee,oe){fe[ee]=oe,Q.querySelectorAll('.beae-quick-add-variant:not([data-option-name="'+J+'"])').forEach(se=>{se.querySelectorAll(".beae-quick-add-item").forEach(re=>{const be=re.getAttribute("data-value"),he=parseInt(re.getAttribute("data-option-position")-1);if(he>0){let me=JSON.parse(JSON.stringify(fe));me[he]=be;let ve=v.find(Se=>Se.options.every(($e,pe)=>$e===me[pe]));ve&&(ve.available?re.classList.remove("beae-quick-add-item-disable"):re.classList.add("beae-quick-add-item-disable"))}})});let ae=ue.find(se=>se.options.every((de,re)=>de===fe[re]));ae&&(ae.available?(ce.classList.remove("beae-sold-out"),ke.innerHTML=z):(ce.classList.add("beae-sold-out"),ke.innerHTML=H))};const ye=Q.querySelectorAll(".beae-quick-add-variant"),ke=Q.querySelector(".beae-quick-add-content");ye.forEach(J=>{const ee=J.querySelector(".beae-quick-add-input"),oe=X.querySelector('[name="'+ee.getAttribute("name")+'"]');J.querySelectorAll(".beae-quick-add-item").forEach(ae=>{const se=ae.getAttribute("data-value"),de=parseInt(ae.getAttribute("data-option-position")-1);ae.addEventListener("click",function(){var be;const re=((be=ae.parentElement)==null?void 0:be.children)??[];for(let he=0;he<re.length;he++)re[he].classList.remove("beae-quick-add-item-active");ae.classList.add("beae-quick-add-item-active"),oe.value=se,we(J.getAttribute("data-option-name"),de,se)})})}),ke&&ke.addEventListener("click",function(){X.dispatchEvent(new Event("addCart"))}),X.addEventListener("addCartOptionSuccess",function(){PopupLibrary.closePopup()})}}}}})}};const A=f.querySelector(".beae-quick-add-mb");A&&A.addEventListener("click",function(){I()})}else C&&C.addEventListener("click",function(){j&&E()});f.addEventListener("addCart",function(I){E()})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qphn1ef8: ', ex)
      };
    

      try {
        let argid = 'beae-qphn1ef8section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qphn1ef8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qphn1ef8');
        args.el = args.els[0];
        ((g) => { window.BeaeSlider&&!g.noRunJs&&window.BeaeSlider(g) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qphn1ef8: ', ex)
      };
    

      try {
        let argid = 'beae-lx76sk81block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-lx76sk81',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-lx76sk81');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-lx76sk81: ', ex)
      };
    

      try {
        let argid = 'beae-gkydf43vsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gkydf43v',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gkydf43v');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gkydf43v: ', ex)
      };
    

      try {
        let argid = 'beae-ilvtyss8block-countdown',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ilvtyss8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ilvtyss8');
        args.el = args.els[0];
        ((w) => { w.mode.value=="builder"&&window.BeaeRunCountdown&&window.BeaeRunCountdown(w) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ilvtyss8: ', ex)
      };
    

      try {
        let argid = 'beae-o2died7nbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-o2died7n',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-o2died7n');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-o2died7n: ', ex)
      };
    

      try {
        let argid = 'beae-0v8twjemsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0v8twjem',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0v8twjem');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0v8twjem: ', ex)
      };
    

      try {
        let argid = 'beae-zqlzex4osection-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zqlzex4o',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zqlzex4o');
        args.el = args.els[0];
        ((a) => { var l;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(l=a.el.querySelector(".beae-money-format"))==null?void 0:l.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((f,_)=>{a.mode.value=="live"&&!o&&(_===0?(f.classList.add("nav-active"),t[_]&&(t[_].style.display="block",t[_].setAttribute("data-active","true"))):(f.classList.remove("nav-active"),t[_]&&(t[_].style.display="none",t[_].setAttribute("data-active","false"))));let b=!1;f.addEventListener("click",()=>{if(b)return;b=!0,n.forEach(w=>{w.classList.remove("nav-active")}),f.classList.add("nav-active");const g=f.getAttribute("data-handle"),u=a.el.querySelectorAll(".viewall-link");u&&u.forEach(w=>{w.setAttribute("href",`/collections/${g}`)});const v=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${g}"]`),m=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),m){m.setAttribute("data-active","false");const w=s(m);setTimeout(()=>{m.style.display="none",v&&(v.style.display="block"),setTimeout(()=>{v&&v.setAttribute("data-active","true"),b=!1},50)},w)}else v&&(v.style.display="block"),setTimeout(()=>{v&&v.setAttribute("data-active","true"),b=!1},50)})});function s(f){const b=window.getComputedStyle(f).getPropertyValue("transition-duration");let g=parseFloat(b)*1e3;return b.includes("s")?g=parseFloat(b)*1e3:g=parseFloat(b),g||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&p(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function p(f){if(a.mode.value!="live")return;const _=a.el.querySelectorAll(".beae-slider-items");if(_&&_.length){_.forEach(g=>{const u=a.el.querySelector(".beae-promotion > *");if(!u)return;const v=u.cloneNode(!0),m=g.children;f>=m.length?g.appendChild(v):g.insertBefore(v,m[f])});const b=a.el.querySelector(".beae-promotion");b&&b.remove()}}const c=a.el.querySelectorAll(".beae-product-form-next");c&&c.length&&a.el.querySelector(".beae-x-quick-add")&&c.forEach(f=>{f.tagName!=="DIV"&&d(f)});function d(f){const _=f.querySelector(".beae-quick-add-mb-quick-view");_&&(_.onclick=()=>{var B,k;const $=f.getAttribute("data-handle");if($&&(window!=null&&window.BeaePopupLibrary)){const x=window==null?void 0:window.createLoading(_);let M=(k=(B=window==null?void 0:window.BEAE_HELPER)==null?void 0:B.routes)==null?void 0:k.root_url;window==null||window.BeaePopupLibrary.lightbox({url:(M!=="/"?M:"")+"/products/"+$+"?view=beae-quickview-default"}).then(V=>{var L,T;x.remove(),window==null||window.handleEventFormProductCard(V),(T=(L=window==null?void 0:window.Shopify)==null?void 0:L.PaymentButton)==null||T.init()})}});const b=f.getAttribute("data-product_id");if(b&&b.indexOf("encode")>-1)return;const g=f.querySelector('script[data-id="Product-json-'+b+'"]')||f.querySelector("#Product-json-"+b),u=JSON.parse(g!=null&&g.innerHTML?g==null?void 0:g.innerHTML:"{}"),v=u.variants||[],m=u.selected_or_first_available_variant,w=f.querySelector(".beae-x-quick-add"),h=f.closest("section.beae-section");let y=JSON.parse(JSON.stringify(m?m.options:[]));const C=f.querySelector(".beae-quick-add-content");let S=!0;if(w){let $=function(I,A,q){y[A]=q,f.querySelectorAll('.beae-quick-add-variant:not([data-option-name="'+I+'"])').forEach(Y=>{Y.querySelectorAll(".beae-quick-add-item").forEach(Q=>{const X=Q.getAttribute("data-value"),ne=parseInt(Q.getAttribute("data-option-position")-1);let te=JSON.parse(JSON.stringify(y));te[ne]=X;let le=v.find(ce=>ce.options.every((ue,xe)=>ue===te[xe]));le&&(le.available?Q.classList.remove("beae-quick-add-item-disable"):Q.classList.add("beae-quick-add-item-disable"))})});let W=v.find(Y=>Y.options.every((K,Q)=>K===y[Q]));W&&(B(W),W.available?(F.classList.remove("beae-sold-out"),C.innerHTML=z):(F.classList.add("beae-sold-out"),C.innerHTML=H))},B=function(I){if(I){x(I),M(I),T(I),N(I),V(I),k(I),f.setAttribute("data-variant-id",I.id);const A=f.querySelector('input[type="hidden"][name="id"]');A&&A.setAttribute("value",I.id)}},k=function(I){I&&(S||(w.querySelectorAll(".beae-quick-add-variant-images-list").forEach(A=>{const q=parseInt(A.getAttribute("data-option-name").split("_")[1]);let D=[];U(I,q).forEach(W=>{D.push(`
                            <span>
                                <img src="${W.featured_image?W.featured_image.src:"//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif"}" alt="${W.title}" height="120" width="120" loading="lazy"
                                />
                            </span>
                        `)}),A.querySelectorAll(".beae-quick-add-variant-item-image").forEach((W,Y)=>{W.innerHTML=D[Y]})}),S=!0))},x=function(I){let A=u==null?void 0:u.featured_image;if(A=I.featured_image,A){const D=f.querySelector(".beae-image-primary img");if(D){D.removeAttribute("srcset");var q=new Image;q.onload=function(){D.src=this.src},D.src=typeof A=="string"?A:A.src}}},M=function(I){if(!window.BeaeMoneyFormat)return;const A=f.querySelector(".beae-product-single__price"),q=f.querySelector(".beae-product-single__price--regular");if(A){let D=window.BeaeFormatMoney(I.price);D&&typeof D=="string"&&(D=D.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"));const W=A.querySelector(".beae-price-normal"),Y=A.querySelector(".beae-price-from");if(Y||W){if(Y){let K=A.getAttribute("data-from-text");K||(K="From {price}"),Y.innerHTML=K&&K.replace(new RegExp("{\\s*?price\\s*?}","g"),D)}W&&(W.innerHTML=D)}else A.innerHTML=D}if(q)if(I.compare_at_price){let D=window.BeaeFormatMoney(I.compare_at_price);D&&typeof D=="string"&&(D=D.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),q.innerHTML=D,A&&A.setAttribute("data-sale",!0)}else q.innerHTML="";L(I)},V=function(I){var W,Y,K,Q;const A=parseFloat((Y=(W=I.price)==null?void 0:W.toString())==null?void 0:Y.replace(",","")),q=parseFloat((Q=(K=I.compare_at_price)==null?void 0:K.toString())==null?void 0:Q.replace(",","")),D=f.querySelectorAll(".beae-product-badged");D&&D.forEach(X=>{if(!X)return;const ne=X.getAttribute("type"),te=X.getAttribute("data-sale")||"",le=X.getAttribute("data-sold-out");let ce="";if(ne=="percent")ce=Math.floor((q-A)*100/q);else if(ne=="dollar"){const fe=window.BeaeFormatDecimal(I.compare_at_price)-window.BeaeFormatDecimal(I.price);ce=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(fe))}else if(ne=="none"){X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML="";return}const ue=I.inventory_quantity,xe=I.inventory_policy;if(ue>0||ue<1&&xe=="continue"||!I.inventory_management){const fe=parseFloat(I.price),we=parseFloat(I.compare_at_price);if(we&&we>fe){X.classList.remove("beae-sale-sold-out","beae-sale-hidden"),X.classList.add("beae-product-single__price--sale");let ye=te.replace(new RegExp("{\\s*?sale\\s*?}","g"),ce);ye&&(ye=ye.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),X.innerHTML=ye}else X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML=""}else X.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),X.classList.add("beae-sale-sold-out"),X.innerHTML=le})},L=function(I){var W,Y,K,Q;const A=parseFloat((Y=(W=I.price)==null?void 0:W.toString())==null?void 0:Y.replace(",","")),q=parseFloat((Q=(K=I.compare_at_price)==null?void 0:K.toString())==null?void 0:Q.replace(",","")),D=f.querySelectorAll(".beae-product-single__price--badged");D&&D.forEach(X=>{if(!X)return;const ne=X.getAttribute("type"),te=X.getAttribute("data-sale")||"",le=X.getAttribute("data-sold-out");let ce="";if(ne=="percent")ce=Math.floor((q-A)*100/q);else if(ne=="dollar"){const fe=window.BeaeFormatDecimal(I.compare_at_price)-window.BeaeFormatDecimal(I.price);ce=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(fe))}else if(ne=="none"){X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML="";return}const ue=I.inventory_quantity,xe=I.inventory_policy;if(ue>0||ue<1&&xe=="continue"||!I.inventory_management){const fe=parseFloat(I.price),we=parseFloat(I.compare_at_price);if(we&&we>fe){X.classList.remove("beae-sale-sold-out","beae-sale-hidden"),X.classList.add("beae-product-single__price--sale");let ye=te.replace(new RegExp("{\\s*?sale\\s*?}","g"),ce);ye&&(ye=ye.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),X.innerHTML=ye}else X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML=""}else X.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),X.classList.add("beae-sale-sold-out"),X.innerHTML=le})},T=function(I){if(F){const q=F.querySelector(".beae-quick-add-text-content");if(I.available){if(F&&(F.removeAttribute("disabled"),q))if(v.length>1){q.innerHTML=F.getAttribute("data-choose-options-text");const D=document.createElement("a");for(let K=0;K<F.attributes.length;K++){let Q=F.attributes[K];D.setAttribute(Q.name,Q.value)}D.innerHTML=F.innerHTML;const Y=F.closest("form.beae-product-form-next").getAttribute("data-handle");D.href="/products/"+Y,F.parentNode.replaceChild(D,F)}else q.innerHTML=F.getAttribute("data-quick-add-text")}else F&&(F.setAttribute("disabled","disabled"),q&&(q.innerHTML=F.getAttribute("data-sold-out-text")))}const A=f.querySelector(".shopify-payment-button__button");A&&(I.inventory_quantity>0?A.removeAttribute("disabled"):a.mode.value=="live"&&A.setAttribute("disabled","disabled"))},N=function(I){const A=f.querySelector(".beae-x-inventory");if(!A||!I)return;const q=A.children[0],D=A.getAttribute("data-in-stock-text"),W=A.getAttribute("data-out-stock-text");A.getAttribute("data-inventory-text");const Y=A.getAttribute("data-pre-order-text"),K=A.getAttribute("data-very-low-stock-text"),Q=A.getAttribute("data-low-stock-text"),X=A.getAttribute("data-incoming-date-text"),ne=A.getAttribute("data-low-number")??20,te=A.getAttribute("data-very-low-number")??5,le=A.getAttribute("data-show-next-incoming-date"),ce=A.getAttribute("data-max-number")??60,ue=A.querySelector(".beae-inventory-label"),xe=A.querySelector(".beae-inventory-process-body");let fe=I.inventory_quantity;f.querySelector(".beae-x-swatch-color")||w||(fe=u.variants.reduce((ke,J)=>ke+(J.inventory_quantity||0),0));function ye(ke){return ke?ke.replace("{quantity}",fe).replace("{next_incoming_date}",I.next_incoming_date):""}!q||!ue||(I.available?I.inventory_policy==="continue"&&fe<1?(ue.innerHTML=ye(Y),q.classList="",q.classList.add("beae-inventory-pre-order")):fe<=te?(ue.innerHTML=ye(K),q.classList="",q.classList.add("beae-inventory-very-low")):fe<=ne?(ue.innerHTML=ye(Q),q.classList="",q.classList.add("beae-inventory-low")):(ue.innerHTML=ye(D),q.classList="",q.classList.add("beae-inventory-in-stock")):I.next_incoming_date&&le?(ue.innerHTML=ye(X),q.classList="",q.classList.add("beae-incoming-transfer")):(ue.innerHTML=ye(W),q.classList="",q.classList.add("beae-inventory-out-stock")),xe&&(fe<=ce?xe.style.width=fe/ce*100+"%":xe.style.width="100%"))},E=function(){let I={};O.forEach(Q=>{const X=Q.querySelector(".beae-quick-add-input");X&&(I[X.getAttribute("name")]=X.value)});const A=new FormData(f);for(var[q,D]of A)q.includes("beae_option")&&(I[q]||(I[q]=D));I=Object.values(I);let W=w.getAttribute("data-type");W||(W="with_button");function Y(){return O.length==0?v[0]:I.length<O.length||Z.size<O.length&&W=="without_button"?null:v.find(Q=>Q.options.every(X=>[...I].includes(X)))}const K=f.querySelector('[name="id"]');if(K){const Q=Y();(Q||O.length==0)&&(Q&&(K.value=Q.id),j&&Q.available&&(f.dispatchEvent(new CustomEvent("addCartOptionSuccess")),j.click(),P()))}},P=function(){O.forEach(I=>{let A=I.querySelector('.beae-quick-add-input[data-exclude="false"]');window.outerWidth<768&&(A=I.querySelector(".beae-quick-add-input"));const q=I.querySelectorAll(".beae-quick-add-item");A&&(A.value=null),q.forEach(D=>{var Y;const W=((Y=D.parentElement)==null?void 0:Y.children)??[];for(let K=0;K<W.length;K++)W[K].classList.remove("beae-quick-add-item-active")})})};const H=w.getAttribute("data-sold-out-text"),z=w.getAttribute("data-add-to-cart-text"),j=f.querySelector(".beae-quick-add-action");w.classList.contains("beae-sold-out")&&(C.innerHTML=H);const O=f.querySelectorAll(".beae-quick-add-variant"),R=f.querySelectorAll(".beae-dropdown-toggle"),F=f.querySelector(".beae-quick-add--submit");let G=!1;const Z=new Set;R.length>0&&(R.forEach(I=>{I.addEventListener("click",function(){const A=this.getAttribute("data-option-name"),q=w.querySelector(`ul.beae-quick-add-variant[data-option-name="${A}"]`);if(q){const D=q.classList.contains("active");w.querySelectorAll(".beae-quick-add-variant").forEach(W=>{W.classList.remove("active")}),D?G=!1:(q.classList.add("active"),G=!0)}})}),document.addEventListener("click",function(I){G&&!w.contains(I.target)&&(w.querySelectorAll(".beae-quick-add-variant").forEach(A=>{A.classList.remove("active")}),G=!1)})),O.forEach(I=>{const A=I.querySelector(".beae-quick-add-input");I.querySelectorAll(".beae-quick-add-item").forEach(D=>{const W=D.getAttribute("data-value"),Y=parseInt(D.getAttribute("data-option-position")-1),K=w.getAttribute("data-type");D.addEventListener("mouseenter",function(){$(I.getAttribute("data-option-name"),Y,W)}),D.addEventListener("click",function(){Z.add(Y),D.classList.contains("beae-quick-add-variant-item-image")?S=!0:S=!1;const Q=I.querySelector(".beae-quick-add-item-active");if(Q.classList.remove("beae-quick-add-item-active"),Q.removeAttribute("data-selected"),D.classList.add("beae-quick-add-item-active"),D.setAttribute("data-selected","true"),A.value=W,$(I.getAttribute("data-option-name"),Y,W),w&&K!="with_button"&&E(),R.length>0){const X=D.closest("ul.beae-quick-add-variant");X.classList.toggle("active");const ne=X.getAttribute("data-option-name"),te=w.querySelector(`.beae-dropdown-toggle[data-option-name="${ne}"] span`);te.innerText=D.innerText}})}),I.addEventListener("mouseleave",function(){const D=I.querySelector(".beae-quick-add-item-active");if(D){const W=parseInt(D.getAttribute("data-option-position")-1),Y=D.getAttribute("data-value");$(I.getAttribute("data-option-name"),W,Y)}})}),f.addEventListener("BeaeSelectedSwatch",function(I){let A=I.detail.swatchWrp;if(A){const q=A.querySelector(".beae-swatch-color-input");q&&$(q.getAttribute("data-option-name"),parseInt(I.detail.position)-1,I.detail.value)}});let U=function(I,A){if(!I)return[];let q=I.options.filter((D,W)=>W!=A);return u.variants.filter(D=>q.every(W=>D.options.includes(W)))??[]};if(h.offsetWidth<768){let I=function(){if(window.BeaePopupLibrary&&(w||A)){let q=document.createElement("div"),W=w.parentElement.cloneNode(!0);W.classList.add("beae-popup-quick-add"),W.setAttribute("form-id",f.getAttribute("id")),q.innerHTML=W.outerHTML;let Y="";h&&(Y=h.getAttribute("data-sectionid")),window.BeaePopupLibrary.createPopup(q,{layout:"center",layoutMobile:"bottom",width:"auto",sectionId:Y,customJs:function(K){if(K){let Q=K.querySelector(".beae-popup-quick-add");if(Q){let X=document.getElementById(Q.getAttribute("form-id"));const ne=X.getAttribute("data-product_id"),te=X.querySelector('script[data-id="Product-json-'+ne+'"]')||X.querySelector("#Product-json-"+ne),le=JSON.parse(te!=null&&te.innerHTML?te==null?void 0:te.innerHTML:"{}"),ce=Q.querySelector(".beae-quick-add--submit"),ue=le.variants||[],xe=le.selected_or_first_available_variant;let fe=JSON.parse(JSON.stringify(xe.options));if(X){let we=function(J,ee,oe){fe[ee]=oe,Q.querySelectorAll('.beae-quick-add-variant:not([data-option-name="'+J+'"])').forEach(se=>{se.querySelectorAll(".beae-quick-add-item").forEach(re=>{const be=re.getAttribute("data-value"),he=parseInt(re.getAttribute("data-option-position")-1);if(he>0){let me=JSON.parse(JSON.stringify(fe));me[he]=be;let ve=v.find(Se=>Se.options.every(($e,pe)=>$e===me[pe]));ve&&(ve.available?re.classList.remove("beae-quick-add-item-disable"):re.classList.add("beae-quick-add-item-disable"))}})});let ae=ue.find(se=>se.options.every((de,re)=>de===fe[re]));ae&&(ae.available?(ce.classList.remove("beae-sold-out"),ke.innerHTML=z):(ce.classList.add("beae-sold-out"),ke.innerHTML=H))};const ye=Q.querySelectorAll(".beae-quick-add-variant"),ke=Q.querySelector(".beae-quick-add-content");ye.forEach(J=>{const ee=J.querySelector(".beae-quick-add-input"),oe=X.querySelector('[name="'+ee.getAttribute("name")+'"]');J.querySelectorAll(".beae-quick-add-item").forEach(ae=>{const se=ae.getAttribute("data-value"),de=parseInt(ae.getAttribute("data-option-position")-1);ae.addEventListener("click",function(){var be;const re=((be=ae.parentElement)==null?void 0:be.children)??[];for(let he=0;he<re.length;he++)re[he].classList.remove("beae-quick-add-item-active");ae.classList.add("beae-quick-add-item-active"),oe.value=se,we(J.getAttribute("data-option-name"),de,se)})})}),ke&&ke.addEventListener("click",function(){X.dispatchEvent(new Event("addCart"))}),X.addEventListener("addCartOptionSuccess",function(){PopupLibrary.closePopup()})}}}}})}};const A=f.querySelector(".beae-quick-add-mb");A&&A.addEventListener("click",function(){I()})}else C&&C.addEventListener("click",function(){j&&E()});f.addEventListener("addCart",function(I){E()})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zqlzex4o: ', ex)
      };
    

      try {
        let argid = 'beae-zqlzex4osection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zqlzex4o',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zqlzex4o');
        args.el = args.els[0];
        ((g) => { window.BeaeSlider&&!g.noRunJs&&window.BeaeSlider(g) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zqlzex4o: ', ex)
      };
    

      try {
        let argid = 'beae-xlc9sbbublock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xlc9sbbu',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xlc9sbbu');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xlc9sbbu: ', ex)
      };
    

      try {
        let argid = 'beae-gp3uhv4isection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gp3uhv4i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gp3uhv4i');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gp3uhv4i: ', ex)
      };
    

      try {
        let argid = 'beae-mfwkighksection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-mfwkighk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-mfwkighk');
        args.el = args.els[0];
        ((g) => { window.BeaeSlider&&!g.noRunJs&&window.BeaeSlider(g) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-mfwkighk: ', ex)
      };
    

      try {
        let argid = 'beae-hpdwwnx1block-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hpdwwnx1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hpdwwnx1');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hpdwwnx1: ', ex)
      };
    

      try {
        let argid = 'beae-hpdwwnx1block-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hpdwwnx1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hpdwwnx1');
        args.el = args.els[1];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hpdwwnx1: ', ex)
      };
    

      try {
        let argid = 'beae-hpdwwnx1block-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hpdwwnx1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hpdwwnx1');
        args.el = args.els[2];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hpdwwnx1: ', ex)
      };
    

      try {
        let argid = 'beae-hpdwwnx1block-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hpdwwnx1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hpdwwnx1');
        args.el = args.els[3];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hpdwwnx1: ', ex)
      };
    

      try {
        let argid = 'beae-hpdwwnx1block-imageloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-hpdwwnx1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-hpdwwnx1');
        args.el = args.els[4];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-hpdwwnx1: ', ex)
      };
    

      try {
        let argid = 'beae-8i02p3mssection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8i02p3ms',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8i02p3ms');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8i02p3ms: ', ex)
      };
    

      try {
        let argid = 'beae-6vinj3a8section-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6vinj3a8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6vinj3a8');
        args.el = args.els[0];
        ((a) => { var l;window.BeaeMoneyFormat||(window.BeaeMoneyFormat=(l=a.el.querySelector(".beae-money-format"))==null?void 0:l.innerHTML);let n=a.el.querySelectorAll(".beae-featuted-collection-nav");const t=a.el.querySelectorAll(".beae-feature-collection-tab-content"),o=a.el.querySelector(".beae-featuted-collection-nav.nav-active"),r=a.el.closest(".beae-body--preview");n.forEach((f,_)=>{a.mode.value=="live"&&!o&&(_===0?(f.classList.add("nav-active"),t[_]&&(t[_].style.display="block",t[_].setAttribute("data-active","true"))):(f.classList.remove("nav-active"),t[_]&&(t[_].style.display="none",t[_].setAttribute("data-active","false"))));let b=!1;f.addEventListener("click",()=>{if(b)return;b=!0,n.forEach(w=>{w.classList.remove("nav-active")}),f.classList.add("nav-active");const g=f.getAttribute("data-handle"),u=a.el.querySelectorAll(".viewall-link");u&&u.forEach(w=>{w.setAttribute("href",`/collections/${g}`)});const v=a.el.querySelector(`.beae-feature-collection-tab-content[data-handle="${g}"]`),m=a.el.querySelector('.beae-feature-collection-tab-content[data-active="true"]');if(a.el.querySelector(".beae-feature-collection-tab-content.content-active")!==null&&a.el.querySelector(".beae-feature-collection-tab-content.content-active").classList.remove("content-active"),m){m.setAttribute("data-active","false");const w=s(m);setTimeout(()=>{m.style.display="none",v&&(v.style.display="block"),setTimeout(()=>{v&&v.setAttribute("data-active","true"),b=!1},50)},w)}else v&&(v.style.display="block"),setTimeout(()=>{v&&v.setAttribute("data-active","true"),b=!1},50)})});function s(f){const b=window.getComputedStyle(f).getPropertyValue("transition-duration");let g=parseFloat(b)*1e3;return b.includes("s")?g=parseFloat(b)*1e3:g=parseFloat(b),g||0}setTimeout(()=>{typeof window.handleSwatchForCardForm=="function"&&window.handleSwatchForCardForm(a),typeof(a==null?void 0:a.promotionPosition)=="number"&&p(a==null?void 0:a.promotionPosition)},100),(["builder"].includes(a.mode.value)||r)&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&window.handleEventFormProductCard()},100);function p(f){if(a.mode.value!="live")return;const _=a.el.querySelectorAll(".beae-slider-items");if(_&&_.length){_.forEach(g=>{const u=a.el.querySelector(".beae-promotion > *");if(!u)return;const v=u.cloneNode(!0),m=g.children;f>=m.length?g.appendChild(v):g.insertBefore(v,m[f])});const b=a.el.querySelector(".beae-promotion");b&&b.remove()}}const c=a.el.querySelectorAll(".beae-product-form-next");c&&c.length&&a.el.querySelector(".beae-x-quick-add")&&c.forEach(f=>{f.tagName!=="DIV"&&d(f)});function d(f){const _=f.querySelector(".beae-quick-add-mb-quick-view");_&&(_.onclick=()=>{var B,k;const $=f.getAttribute("data-handle");if($&&(window!=null&&window.BeaePopupLibrary)){const x=window==null?void 0:window.createLoading(_);let M=(k=(B=window==null?void 0:window.BEAE_HELPER)==null?void 0:B.routes)==null?void 0:k.root_url;window==null||window.BeaePopupLibrary.lightbox({url:(M!=="/"?M:"")+"/products/"+$+"?view=beae-quickview-default"}).then(V=>{var L,T;x.remove(),window==null||window.handleEventFormProductCard(V),(T=(L=window==null?void 0:window.Shopify)==null?void 0:L.PaymentButton)==null||T.init()})}});const b=f.getAttribute("data-product_id");if(b&&b.indexOf("encode")>-1)return;const g=f.querySelector('script[data-id="Product-json-'+b+'"]')||f.querySelector("#Product-json-"+b),u=JSON.parse(g!=null&&g.innerHTML?g==null?void 0:g.innerHTML:"{}"),v=u.variants||[],m=u.selected_or_first_available_variant,w=f.querySelector(".beae-x-quick-add"),h=f.closest("section.beae-section");let y=JSON.parse(JSON.stringify(m?m.options:[]));const C=f.querySelector(".beae-quick-add-content");let S=!0;if(w){let $=function(I,A,q){y[A]=q,f.querySelectorAll('.beae-quick-add-variant:not([data-option-name="'+I+'"])').forEach(Y=>{Y.querySelectorAll(".beae-quick-add-item").forEach(Q=>{const X=Q.getAttribute("data-value"),ne=parseInt(Q.getAttribute("data-option-position")-1);let te=JSON.parse(JSON.stringify(y));te[ne]=X;let le=v.find(ce=>ce.options.every((ue,xe)=>ue===te[xe]));le&&(le.available?Q.classList.remove("beae-quick-add-item-disable"):Q.classList.add("beae-quick-add-item-disable"))})});let W=v.find(Y=>Y.options.every((K,Q)=>K===y[Q]));W&&(B(W),W.available?(F.classList.remove("beae-sold-out"),C.innerHTML=z):(F.classList.add("beae-sold-out"),C.innerHTML=H))},B=function(I){if(I){x(I),M(I),T(I),N(I),V(I),k(I),f.setAttribute("data-variant-id",I.id);const A=f.querySelector('input[type="hidden"][name="id"]');A&&A.setAttribute("value",I.id)}},k=function(I){I&&(S||(w.querySelectorAll(".beae-quick-add-variant-images-list").forEach(A=>{const q=parseInt(A.getAttribute("data-option-name").split("_")[1]);let D=[];U(I,q).forEach(W=>{D.push(`
                            <span>
                                <img src="${W.featured_image?W.featured_image.src:"//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif"}" alt="${W.title}" height="120" width="120" loading="lazy"
                                />
                            </span>
                        `)}),A.querySelectorAll(".beae-quick-add-variant-item-image").forEach((W,Y)=>{W.innerHTML=D[Y]})}),S=!0))},x=function(I){let A=u==null?void 0:u.featured_image;if(A=I.featured_image,A){const D=f.querySelector(".beae-image-primary img");if(D){D.removeAttribute("srcset");var q=new Image;q.onload=function(){D.src=this.src},D.src=typeof A=="string"?A:A.src}}},M=function(I){if(!window.BeaeMoneyFormat)return;const A=f.querySelector(".beae-product-single__price"),q=f.querySelector(".beae-product-single__price--regular");if(A){let D=window.BeaeFormatMoney(I.price);D&&typeof D=="string"&&(D=D.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"));const W=A.querySelector(".beae-price-normal"),Y=A.querySelector(".beae-price-from");if(Y||W){if(Y){let K=A.getAttribute("data-from-text");K||(K="From {price}"),Y.innerHTML=K&&K.replace(new RegExp("{\\s*?price\\s*?}","g"),D)}W&&(W.innerHTML=D)}else A.innerHTML=D}if(q)if(I.compare_at_price){let D=window.BeaeFormatMoney(I.compare_at_price);D&&typeof D=="string"&&(D=D.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),q.innerHTML=D,A&&A.setAttribute("data-sale",!0)}else q.innerHTML="";L(I)},V=function(I){var W,Y,K,Q;const A=parseFloat((Y=(W=I.price)==null?void 0:W.toString())==null?void 0:Y.replace(",","")),q=parseFloat((Q=(K=I.compare_at_price)==null?void 0:K.toString())==null?void 0:Q.replace(",","")),D=f.querySelectorAll(".beae-product-badged");D&&D.forEach(X=>{if(!X)return;const ne=X.getAttribute("type"),te=X.getAttribute("data-sale")||"",le=X.getAttribute("data-sold-out");let ce="";if(ne=="percent")ce=Math.floor((q-A)*100/q);else if(ne=="dollar"){const fe=window.BeaeFormatDecimal(I.compare_at_price)-window.BeaeFormatDecimal(I.price);ce=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(fe))}else if(ne=="none"){X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML="";return}const ue=I.inventory_quantity,xe=I.inventory_policy;if(ue>0||ue<1&&xe=="continue"||!I.inventory_management){const fe=parseFloat(I.price),we=parseFloat(I.compare_at_price);if(we&&we>fe){X.classList.remove("beae-sale-sold-out","beae-sale-hidden"),X.classList.add("beae-product-single__price--sale");let ye=te.replace(new RegExp("{\\s*?sale\\s*?}","g"),ce);ye&&(ye=ye.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),X.innerHTML=ye}else X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML=""}else X.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),X.classList.add("beae-sale-sold-out"),X.innerHTML=le})},L=function(I){var W,Y,K,Q;const A=parseFloat((Y=(W=I.price)==null?void 0:W.toString())==null?void 0:Y.replace(",","")),q=parseFloat((Q=(K=I.compare_at_price)==null?void 0:K.toString())==null?void 0:Q.replace(",","")),D=f.querySelectorAll(".beae-product-single__price--badged");D&&D.forEach(X=>{if(!X)return;const ne=X.getAttribute("type"),te=X.getAttribute("data-sale")||"",le=X.getAttribute("data-sold-out");let ce="";if(ne=="percent")ce=Math.floor((q-A)*100/q);else if(ne=="dollar"){const fe=window.BeaeFormatDecimal(I.compare_at_price)-window.BeaeFormatDecimal(I.price);ce=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(fe))}else if(ne=="none"){X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML="";return}const ue=I.inventory_quantity,xe=I.inventory_policy;if(ue>0||ue<1&&xe=="continue"||!I.inventory_management){const fe=parseFloat(I.price),we=parseFloat(I.compare_at_price);if(we&&we>fe){X.classList.remove("beae-sale-sold-out","beae-sale-hidden"),X.classList.add("beae-product-single__price--sale");let ye=te.replace(new RegExp("{\\s*?sale\\s*?}","g"),ce);ye&&(ye=ye.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),X.innerHTML=ye}else X.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),X.classList.add("beae-sale-hidden"),X.innerHTML=""}else X.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),X.classList.add("beae-sale-sold-out"),X.innerHTML=le})},T=function(I){if(F){const q=F.querySelector(".beae-quick-add-text-content");if(I.available){if(F&&(F.removeAttribute("disabled"),q))if(v.length>1){q.innerHTML=F.getAttribute("data-choose-options-text");const D=document.createElement("a");for(let K=0;K<F.attributes.length;K++){let Q=F.attributes[K];D.setAttribute(Q.name,Q.value)}D.innerHTML=F.innerHTML;const Y=F.closest("form.beae-product-form-next").getAttribute("data-handle");D.href="/products/"+Y,F.parentNode.replaceChild(D,F)}else q.innerHTML=F.getAttribute("data-quick-add-text")}else F&&(F.setAttribute("disabled","disabled"),q&&(q.innerHTML=F.getAttribute("data-sold-out-text")))}const A=f.querySelector(".shopify-payment-button__button");A&&(I.inventory_quantity>0?A.removeAttribute("disabled"):a.mode.value=="live"&&A.setAttribute("disabled","disabled"))},N=function(I){const A=f.querySelector(".beae-x-inventory");if(!A||!I)return;const q=A.children[0],D=A.getAttribute("data-in-stock-text"),W=A.getAttribute("data-out-stock-text");A.getAttribute("data-inventory-text");const Y=A.getAttribute("data-pre-order-text"),K=A.getAttribute("data-very-low-stock-text"),Q=A.getAttribute("data-low-stock-text"),X=A.getAttribute("data-incoming-date-text"),ne=A.getAttribute("data-low-number")??20,te=A.getAttribute("data-very-low-number")??5,le=A.getAttribute("data-show-next-incoming-date"),ce=A.getAttribute("data-max-number")??60,ue=A.querySelector(".beae-inventory-label"),xe=A.querySelector(".beae-inventory-process-body");let fe=I.inventory_quantity;f.querySelector(".beae-x-swatch-color")||w||(fe=u.variants.reduce((ke,J)=>ke+(J.inventory_quantity||0),0));function ye(ke){return ke?ke.replace("{quantity}",fe).replace("{next_incoming_date}",I.next_incoming_date):""}!q||!ue||(I.available?I.inventory_policy==="continue"&&fe<1?(ue.innerHTML=ye(Y),q.classList="",q.classList.add("beae-inventory-pre-order")):fe<=te?(ue.innerHTML=ye(K),q.classList="",q.classList.add("beae-inventory-very-low")):fe<=ne?(ue.innerHTML=ye(Q),q.classList="",q.classList.add("beae-inventory-low")):(ue.innerHTML=ye(D),q.classList="",q.classList.add("beae-inventory-in-stock")):I.next_incoming_date&&le?(ue.innerHTML=ye(X),q.classList="",q.classList.add("beae-incoming-transfer")):(ue.innerHTML=ye(W),q.classList="",q.classList.add("beae-inventory-out-stock")),xe&&(fe<=ce?xe.style.width=fe/ce*100+"%":xe.style.width="100%"))},E=function(){let I={};O.forEach(Q=>{const X=Q.querySelector(".beae-quick-add-input");X&&(I[X.getAttribute("name")]=X.value)});const A=new FormData(f);for(var[q,D]of A)q.includes("beae_option")&&(I[q]||(I[q]=D));I=Object.values(I);let W=w.getAttribute("data-type");W||(W="with_button");function Y(){return O.length==0?v[0]:I.length<O.length||Z.size<O.length&&W=="without_button"?null:v.find(Q=>Q.options.every(X=>[...I].includes(X)))}const K=f.querySelector('[name="id"]');if(K){const Q=Y();(Q||O.length==0)&&(Q&&(K.value=Q.id),j&&Q.available&&(f.dispatchEvent(new CustomEvent("addCartOptionSuccess")),j.click(),P()))}},P=function(){O.forEach(I=>{let A=I.querySelector('.beae-quick-add-input[data-exclude="false"]');window.outerWidth<768&&(A=I.querySelector(".beae-quick-add-input"));const q=I.querySelectorAll(".beae-quick-add-item");A&&(A.value=null),q.forEach(D=>{var Y;const W=((Y=D.parentElement)==null?void 0:Y.children)??[];for(let K=0;K<W.length;K++)W[K].classList.remove("beae-quick-add-item-active")})})};const H=w.getAttribute("data-sold-out-text"),z=w.getAttribute("data-add-to-cart-text"),j=f.querySelector(".beae-quick-add-action");w.classList.contains("beae-sold-out")&&(C.innerHTML=H);const O=f.querySelectorAll(".beae-quick-add-variant"),R=f.querySelectorAll(".beae-dropdown-toggle"),F=f.querySelector(".beae-quick-add--submit");let G=!1;const Z=new Set;R.length>0&&(R.forEach(I=>{I.addEventListener("click",function(){const A=this.getAttribute("data-option-name"),q=w.querySelector(`ul.beae-quick-add-variant[data-option-name="${A}"]`);if(q){const D=q.classList.contains("active");w.querySelectorAll(".beae-quick-add-variant").forEach(W=>{W.classList.remove("active")}),D?G=!1:(q.classList.add("active"),G=!0)}})}),document.addEventListener("click",function(I){G&&!w.contains(I.target)&&(w.querySelectorAll(".beae-quick-add-variant").forEach(A=>{A.classList.remove("active")}),G=!1)})),O.forEach(I=>{const A=I.querySelector(".beae-quick-add-input");I.querySelectorAll(".beae-quick-add-item").forEach(D=>{const W=D.getAttribute("data-value"),Y=parseInt(D.getAttribute("data-option-position")-1),K=w.getAttribute("data-type");D.addEventListener("mouseenter",function(){$(I.getAttribute("data-option-name"),Y,W)}),D.addEventListener("click",function(){Z.add(Y),D.classList.contains("beae-quick-add-variant-item-image")?S=!0:S=!1;const Q=I.querySelector(".beae-quick-add-item-active");if(Q.classList.remove("beae-quick-add-item-active"),Q.removeAttribute("data-selected"),D.classList.add("beae-quick-add-item-active"),D.setAttribute("data-selected","true"),A.value=W,$(I.getAttribute("data-option-name"),Y,W),w&&K!="with_button"&&E(),R.length>0){const X=D.closest("ul.beae-quick-add-variant");X.classList.toggle("active");const ne=X.getAttribute("data-option-name"),te=w.querySelector(`.beae-dropdown-toggle[data-option-name="${ne}"] span`);te.innerText=D.innerText}})}),I.addEventListener("mouseleave",function(){const D=I.querySelector(".beae-quick-add-item-active");if(D){const W=parseInt(D.getAttribute("data-option-position")-1),Y=D.getAttribute("data-value");$(I.getAttribute("data-option-name"),W,Y)}})}),f.addEventListener("BeaeSelectedSwatch",function(I){let A=I.detail.swatchWrp;if(A){const q=A.querySelector(".beae-swatch-color-input");q&&$(q.getAttribute("data-option-name"),parseInt(I.detail.position)-1,I.detail.value)}});let U=function(I,A){if(!I)return[];let q=I.options.filter((D,W)=>W!=A);return u.variants.filter(D=>q.every(W=>D.options.includes(W)))??[]};if(h.offsetWidth<768){let I=function(){if(window.BeaePopupLibrary&&(w||A)){let q=document.createElement("div"),W=w.parentElement.cloneNode(!0);W.classList.add("beae-popup-quick-add"),W.setAttribute("form-id",f.getAttribute("id")),q.innerHTML=W.outerHTML;let Y="";h&&(Y=h.getAttribute("data-sectionid")),window.BeaePopupLibrary.createPopup(q,{layout:"center",layoutMobile:"bottom",width:"auto",sectionId:Y,customJs:function(K){if(K){let Q=K.querySelector(".beae-popup-quick-add");if(Q){let X=document.getElementById(Q.getAttribute("form-id"));const ne=X.getAttribute("data-product_id"),te=X.querySelector('script[data-id="Product-json-'+ne+'"]')||X.querySelector("#Product-json-"+ne),le=JSON.parse(te!=null&&te.innerHTML?te==null?void 0:te.innerHTML:"{}"),ce=Q.querySelector(".beae-quick-add--submit"),ue=le.variants||[],xe=le.selected_or_first_available_variant;let fe=JSON.parse(JSON.stringify(xe.options));if(X){let we=function(J,ee,oe){fe[ee]=oe,Q.querySelectorAll('.beae-quick-add-variant:not([data-option-name="'+J+'"])').forEach(se=>{se.querySelectorAll(".beae-quick-add-item").forEach(re=>{const be=re.getAttribute("data-value"),he=parseInt(re.getAttribute("data-option-position")-1);if(he>0){let me=JSON.parse(JSON.stringify(fe));me[he]=be;let ve=v.find(Se=>Se.options.every(($e,pe)=>$e===me[pe]));ve&&(ve.available?re.classList.remove("beae-quick-add-item-disable"):re.classList.add("beae-quick-add-item-disable"))}})});let ae=ue.find(se=>se.options.every((de,re)=>de===fe[re]));ae&&(ae.available?(ce.classList.remove("beae-sold-out"),ke.innerHTML=z):(ce.classList.add("beae-sold-out"),ke.innerHTML=H))};const ye=Q.querySelectorAll(".beae-quick-add-variant"),ke=Q.querySelector(".beae-quick-add-content");ye.forEach(J=>{const ee=J.querySelector(".beae-quick-add-input"),oe=X.querySelector('[name="'+ee.getAttribute("name")+'"]');J.querySelectorAll(".beae-quick-add-item").forEach(ae=>{const se=ae.getAttribute("data-value"),de=parseInt(ae.getAttribute("data-option-position")-1);ae.addEventListener("click",function(){var be;const re=((be=ae.parentElement)==null?void 0:be.children)??[];for(let he=0;he<re.length;he++)re[he].classList.remove("beae-quick-add-item-active");ae.classList.add("beae-quick-add-item-active"),oe.value=se,we(J.getAttribute("data-option-name"),de,se)})})}),ke&&ke.addEventListener("click",function(){X.dispatchEvent(new Event("addCart"))}),X.addEventListener("addCartOptionSuccess",function(){PopupLibrary.closePopup()})}}}}})}};const A=f.querySelector(".beae-quick-add-mb");A&&A.addEventListener("click",function(){I()})}else C&&C.addEventListener("click",function(){j&&E()});f.addEventListener("addCart",function(I){E()})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6vinj3a8: ', ex)
      };
    

      try {
        let argid = 'beae-6vinj3a8section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6vinj3a8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6vinj3a8');
        args.el = args.els[0];
        ((g) => { window.BeaeSlider&&!g.noRunJs&&window.BeaeSlider(g) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6vinj3a8: ', ex)
      };
    

      try {
        let argid = 'beae-5j2hxrw0block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5j2hxrw0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5j2hxrw0');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5j2hxrw0: ', ex)
      };
    

      try {
        let argid = 'beae-6un5xx74section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6un5xx74',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6un5xx74');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6un5xx74: ', ex)
      };
    

      try {
        let argid = 'beae-td2de97isection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-td2de97i',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-td2de97i');
        args.el = args.els[0];
        ((g) => { window.BeaeSlider&&!g.noRunJs&&window.BeaeSlider(g) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-td2de97i: ', ex)
      };
    

      try {
        let argid = 'beae-zy3gq3o1block-imageloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zy3gq3o1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zy3gq3o1');
        args.el = args.els[0];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zy3gq3o1: ', ex)
      };
    

      try {
        let argid = 'beae-asohbnocbutton-jsloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-asohbnoc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-asohbnoc');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-asohbnoc: ', ex)
      };
    

      try {
        let argid = 'beae-zy3gq3o1block-imageloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zy3gq3o1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zy3gq3o1');
        args.el = args.els[1];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zy3gq3o1: ', ex)
      };
    

      try {
        let argid = 'beae-asohbnocbutton-jsloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-asohbnoc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-asohbnoc');
        args.el = args.els[1];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-asohbnoc: ', ex)
      };
    

      try {
        let argid = 'beae-zy3gq3o1block-imageloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zy3gq3o1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zy3gq3o1');
        args.el = args.els[2];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zy3gq3o1: ', ex)
      };
    

      try {
        let argid = 'beae-asohbnocbutton-jsloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-asohbnoc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-asohbnoc');
        args.el = args.els[2];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-asohbnoc: ', ex)
      };
    

      try {
        let argid = 'beae-zy3gq3o1block-imageloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zy3gq3o1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zy3gq3o1');
        args.el = args.els[3];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zy3gq3o1: ', ex)
      };
    

      try {
        let argid = 'beae-asohbnocbutton-jsloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-asohbnoc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-asohbnoc');
        args.el = args.els[3];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-asohbnoc: ', ex)
      };
    

      try {
        let argid = 'beae-zy3gq3o1block-imageloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zy3gq3o1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zy3gq3o1');
        args.el = args.els[4];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zy3gq3o1: ', ex)
      };
    

      try {
        let argid = 'beae-asohbnocbutton-jsloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-asohbnoc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-asohbnoc');
        args.el = args.els[4];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-asohbnoc: ', ex)
      };
    

      try {
        let argid = 'beae-zy3gq3o1block-imageloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zy3gq3o1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zy3gq3o1');
        args.el = args.els[5];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zy3gq3o1: ', ex)
      };
    

      try {
        let argid = 'beae-asohbnocbutton-jsloop-5',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-asohbnoc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-asohbnoc');
        args.el = args.els[5];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-asohbnoc: ', ex)
      };
    

      try {
        let argid = 'beae-zy3gq3o1block-imageloop-6',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zy3gq3o1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zy3gq3o1');
        args.el = args.els[6];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zy3gq3o1: ', ex)
      };
    

      try {
        let argid = 'beae-asohbnocbutton-jsloop-6',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-asohbnoc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-asohbnoc');
        args.el = args.els[6];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-asohbnoc: ', ex)
      };
    

      try {
        let argid = 'beae-zy3gq3o1block-imageloop-7',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zy3gq3o1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zy3gq3o1');
        args.el = args.els[7];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zy3gq3o1: ', ex)
      };
    

      try {
        let argid = 'beae-asohbnocbutton-jsloop-7',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-asohbnoc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-asohbnoc');
        args.el = args.els[7];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-asohbnoc: ', ex)
      };
    

      try {
        let argid = 'beae-zy3gq3o1block-imageloop-8',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zy3gq3o1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zy3gq3o1');
        args.el = args.els[8];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zy3gq3o1: ', ex)
      };
    

      try {
        let argid = 'beae-asohbnocbutton-jsloop-8',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-asohbnoc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-asohbnoc');
        args.el = args.els[8];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-asohbnoc: ', ex)
      };
    

      try {
        let argid = 'beae-zy3gq3o1block-imageloop-9',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-zy3gq3o1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-zy3gq3o1');
        args.el = args.els[9];
        ((P) => { if(P.el){if(P.shape){const G=P.el.closest(".beae-slider-items");G&&!G.hasAttribute("data-svg")&&(G==null||G.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${P.id}" clipPathUnits="objectBoundingBox">
                                ${P.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),G.setAttribute("data-svg","true"))}let O=P.el.querySelector(".beae-image-content-position"),R,F=window.innerWidth>=768&&P.autoHover;var H=O.querySelector(".beae-img-ratio-control"),z=O.querySelector(".beae-img-comp-container"),j=O.querySelector(".beae-img-comp-container--second");if(H&&j){let G=function(Z){let U=0,I;A(),F?O.onmouseover=function(Q){q(Q)}:Z.onmousedown=function(Q){q(Q)},O.onmouseup=function(){D()},Z.ontouchstart=function(Q){q(Q)},O.ontouchend=function(){D()};function A(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),Z.style.left&&parseInt(Z.style.left)}function q(Q){check=!1,Q.preventDefault(),Q.clientX?Q.clientX:Q.touches[0].clientX,parseInt(Z.style.left),U=1,O.onmousemove=function(X){W(X)},O.ontouchmove=function(X){W(X)}}function D(){U=0,check=!0}function W(Q){if(U==0)return!1;I=Y(Q),I<0&&(I=0),I>100&&(I=100),K(I)}function Y(Q){const X=O.getBoundingClientRect(),te=(Q.changedTouches?Q.changedTouches[0].clientX:Q.clientX)-X.left;return Math.max(0,Math.min(100,Math.round(te*100/R)))}function K(Q){Z.style.left=Q+"%",j.style.clipPath=`polygon(${Q}% 0%, ${Q}% 100%, 100% 100%, 100% 0)`,z.style.clipPath=`polygon(0% 100%, 0% 0%, ${Q}% 0%, ${Q}% 100%)`}};H&&j&&G(H),window.addEventListener("resize",function(){H&&j&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{R=j.offsetWidth})}).observe(j),G(H))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-zy3gq3o1: ', ex)
      };
    

      try {
        let argid = 'beae-asohbnocbutton-jsloop-9',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-asohbnoc',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-asohbnoc');
        args.el = args.els[9];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm.addEventListener("click",e=>{let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(n){extOptions={},console.error(n)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let n=document.querySelector(selector+","+selector.replace("#","."));if(n)return n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let t=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(t,{id:data.id,...extOptions}),e.preventDefault();return}const n=window.createLoading(e.currentTarget);return window.BeaePopupLibrary.lightbox({id:data.id,url:((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(t=>{t.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(t),n.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let n=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(n=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(n,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-asohbnoc: ', ex)
      };
    

      try {
        let argid = 'beae-men99c3xsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-men99c3x',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-men99c3x');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-men99c3x: ', ex)
      };
    }; if (window.BEAEBASE) {js_QI3MA6OT()} else {window.BEAEPAGEJS.push(js_QI3MA6OT)} })(); 