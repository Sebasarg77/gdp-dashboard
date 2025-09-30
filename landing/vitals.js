// Minimal Vercel Web Vitals + simple A/B test assignment
(function(){
  try {
    // Persist variant (A or B)
    var key = 'hero_ab_variant';
    var v = localStorage.getItem(key);
    if(!v){ v = Math.random() < 0.5 ? 'A' : 'B'; localStorage.setItem(key, v); }
    document.documentElement.setAttribute('data-variant', v);

    // Basic Web Vitals via web-vitals (loaded dynamically if available)
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js';
    s.defer = true;
    s.onload = function(){
      if(!window.webVitals) return;
      var send = function(metric){
        var body = JSON.stringify({ n: metric.name, v: metric.value, id: metric.id, r: document.referrer, p: location.pathname, var: v });
        if(navigator.sendBeacon){
          navigator.sendBeacon('/vitals', body);
        } else {
          fetch('/vitals', { method:'POST', keepalive:true, headers:{'content-type':'application/json'}, body: body });
        }
      };
      window.webVitals.onCLS(send);
      window.webVitals.onFID(send);
      window.webVitals.onLCP(send);
      window.webVitals.onINP && window.webVitals.onINP(send);
      window.webVitals.onTTFB && window.webVitals.onTTFB(send);
    };
    document.head.appendChild(s);
  } catch(e){}
})();
