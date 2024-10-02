import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_VBWpNdJ1.mjs';
import { manifest } from './manifest_BK55ODMy.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/hitos/_articulos_.astro.mjs');
const _page1 = () => import('./pages/team/_member_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const _page3 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/hitos/[articulos].astro", _page0],
    ["src/pages/team/[member].astro", _page1],
    ["src/pages/index.astro", _page2],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d2cbe228-9a12-4e85-aa3d-7414bb92a066",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
