/* empty css                                          */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Rc0uAE6r.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BseQoCDC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = () => {
  return [
    { params: { articulos: "articulo-1" } },
    { params: { articulos: "articulo-2" } },
    { params: { articulos: "articulo-3" } }
  ];
};
const $$articulos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$articulos;
  const { articulos } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": articulos }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-center text-black ">${articulos}</h1> ` })}`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/pages/hitos/[articulos].astro", void 0);

const $$file = "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/pages/hitos/[articulos].astro";
const $$url = "/hitos/[articulos]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$articulos,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
