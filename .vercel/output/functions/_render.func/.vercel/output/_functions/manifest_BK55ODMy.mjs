import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DOt8wqc6.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_Rc0uAE6r.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_articulos_.CgS9R4kQ.css"}],"routeData":{"route":"/hitos/[articulos]","isIndex":false,"type":"page","pattern":"^\\/hitos\\/([^/]+?)\\/?$","segments":[[{"content":"hitos","dynamic":false,"spread":false}],[{"content":"articulos","dynamic":true,"spread":false}]],"params":["articulos"],"component":"src/pages/hitos/[articulos].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_articulos_.CgS9R4kQ.css"}],"routeData":{"route":"/team/[member]","isIndex":false,"type":"page","pattern":"^\\/team\\/([^/]+?)\\/?$","segments":[[{"content":"team","dynamic":false,"spread":false}],[{"content":"member","dynamic":true,"spread":false}]],"params":["member"],"component":"src/pages/team/[member].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_articulos_.CgS9R4kQ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/pages/hitos/[articulos].astro",{"propagation":"none","containsHead":true}],["/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/pages/team/[member].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/hitos/[articulos]@_@astro":"pages/hitos/_articulos_.astro.mjs","\u0000@astro-page:src/pages/team/[member]@_@astro":"pages/team/_member_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D3eqYG8m.mjs","\u0000@astrojs-manifest":"manifest_BK55ODMy.mjs","/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/CarruselReact.jsx":"_astro/CarruselReact.DQUsxSd6.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.BmyxbYiP.js","/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/Hitos.astro?astro&type=script&index=0&lang.ts":"_astro/Hitos.astro_astro_type_script_index_0_lang.pLIYFVDj.js","/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/ModalPrivacidad.astro?astro&type=script&index=0&lang.ts":"_astro/ModalPrivacidad.astro_astro_type_script_index_0_lang.DO2XLOUa.js","/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/ModalMenuMovil.astro?astro&type=script&index=0&lang.ts":"_astro/ModalMenuMovil.astro_astro_type_script_index_0_lang.dnZyRz0S.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/Nav.astro?astro&type=script&index=0&lang.ts","function n(e){e.preventDefault();const t=e.currentTarget.getAttribute(\"href\");window.location.pathname===\"/\"||window.location.pathname===\"/index.html\"?document.querySelector(t)?.scrollIntoView({behavior:\"smooth\"}):window.location.href=\"/\"+t}document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\"[data-nav-link]\").forEach(e=>{e.addEventListener(\"click\",n)})});"],["/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/Hitos.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const n=document.querySelectorAll(\"article\"),e=document.getElementById(\"articleImage\");e instanceof HTMLImageElement&&n.forEach(t=>{t.addEventListener(\"mouseenter\",()=>{const a=t.getAttribute(\"data-image-src\"),c=t.getAttribute(\"data-image-srcset\");a&&(e.src=a),c&&(e.srcset=c)})})});"],["/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/ModalPrivacidad.astro?astro&type=script&index=0&lang.ts","const o=\"cookieConsent\";function d(){return localStorage.getItem(o)}function s(e){localStorage.setItem(o,e)}function l(){const e=d();(!e||e===\"rejected\")&&(document.getElementById(\"cookieModal\").classList.remove(\"hidden\"),document.getElementById(\"cookieModal\").classList.add(\"flex\"))}function i(){document.getElementById(\"cookieModal\").classList.add(\"hidden\")}function t(e){s(e),i()}document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"acceptAll\"),n=document.getElementById(\"customize\"),c=document.getElementById(\"rejectAll\");e.onclick=()=>t(\"accepted\"),c.onclick=()=>t(\"rejected\"),n.onclick=()=>{console.log(\"Open customization settings\")},l()});"],["/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/ModalMenuMovil.astro?astro&type=script&index=0&lang.ts","const c=document.getElementById(\"menuButton\"),e=document.getElementById(\"menuModal\"),o=document.getElementById(\"closeButton\");function t(){e.classList.toggle(\"hidden\")}c.addEventListener(\"click\",t);o.addEventListener(\"click\",t);e.addEventListener(\"click\",n=>{n.target===e&&t()});e.querySelectorAll(\"a\").forEach(n=>{n.addEventListener(\"click\",t)});"]],"assets":["/_astro/AbitacoloBlanco.Ce6IyRnt.webp","/_astro/iconoAjustes.CvGCydB-.webp","/_astro/ANegra.BVy9ZUr_.webp","/_astro/rescatamos.D4WXLFCf.webp","/_astro/restauramos.D0Gxqoll.webp","/_astro/entregamos.Cnh74VwG.webp","/_astro/raleway-cyrillic-wght-normal.CqKTn0sv.woff2","/_astro/raleway-cyrillic-ext-wght-normal.Dc5xu4We.woff2","/_astro/raleway-vietnamese-wght-normal.wikBsL6_.woff2","/_astro/raleway-latin-ext-wght-normal.Dm8rnUUK.woff2","/_astro/raleway-latin-wght-normal.B0Bc4KU0.woff2","/_astro/bannerHome1.CrHVhNWg.webp","/_astro/instagramBlanco.TSznOhGV.webp","/_astro/LinkedInBlanco.D38a5dD_.webp","/_astro/placeholder1.BAjJdcZ_.png","/_astro/placeholder2.50d9lmDb.png","/_astro/placeholder3.J_sO3XbW.png","/_astro/menuMovil.CY78IozY.webp","/_astro/X.DEpH7BV5.webp","/_astro/GCG.BmJPK8sR.webp","/_astro/JCM.BxOABM4z.webp","/_astro/ACG.CkWo1Rj7.webp","/_astro/GPC.BGfuZVSq.webp","/_astro/MBR.CiFHtquf.webp","/_astro/MPR.DmouNx32.webp","/_astro/XLD.C1aJKhRj.webp","/_astro/FlechaIzq.BdRyi0Gw.webp","/_astro/FlechaDrch.DlHfDb2Z.webp","/_astro/CA.Cpi7cNr4.webp","/_astro/LinkedInNegro.LYT9grdo.webp","/_astro/_articulos_.CgS9R4kQ.css","/ANegra.webp","/favicon.svg","/_astro/CarruselReact.DQUsxSd6.js","/_astro/client.BIGLHmRd.js","/_astro/index.DhYZZe0J.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Zo5sRnBlF13zTpFPW2imnDaugtQSiqUGgu37nRWcKCI=","envGetSecretEnabled":true});

export { manifest };
