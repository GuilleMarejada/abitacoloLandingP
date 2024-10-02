import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, a as addAttribute, h as renderScript } from './astro/server_Rc0uAE6r.mjs';
import 'kleur/colors';
import { $ as $$Image } from './Image_BAMIo975.mjs';

const AbitacoloBlanco = new Proxy({"src":"/_astro/AbitacoloBlanco.Ce6IyRnt.webp","width":695,"height":212,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/logos/AbitacoloBlanco.webp";
							}
							
							return target[name];
						}
					});

const MenuMobil = new Proxy({"src":"/_astro/menuMovil.CY78IozY.webp","width":100,"height":100,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/menuMovil.webp";
							}
							
							return target[name];
						}
					});

const Close = new Proxy({"src":"/_astro/X.DEpH7BV5.webp","width":24,"height":24,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/X.webp";
							}
							
							return target[name];
						}
					});

const $$ModalMenuMovil = createComponent(($$result, $$props, $$slots) => {
  const menuItems = [
    { href: "#AboutUs", text: "\xBFQu\xE9 es Abitacolo?", class: "bg-[#333333]" },
    { href: "#team", text: "Nuestro Equipo", class: "bg-[#333333]" },
    { href: "#hitos", text: "Hitos Abitacolo", class: "bg-[#333333]" },
    { href: "#products", text: "Nuestros Productos", class: "bg-[#333333]" },
    {
      href: "#contacto",
      text: "Cont\xE1ctanos",
      class: "bg-[#919e32] font-semibold"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div> <button id="menuButton" class="text-white rounded-md pr-8"> ${renderComponent($$result, "Image", $$Image, { "src": MenuMobil, "alt": "menu", "width": "42", "height": "42", "loading": "eager" })} </button> <div id="menuModal" class="fixed inset-0 bg-black bg-opacity-50 h-full hidden z-50"> <div class="grid"> <button id="closeButton" class="top-4 right-4 px-4 py-2 text-white rounded-md justify-self-end"> ${renderComponent($$result, "Image", $$Image, { "src": Close, "alt": "Close", "width": "42", "height": "42", "loading": "lazy" })} </button> <div class="w-[414px] relative bg-transparent place-self-center grid gap-3"> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`${item.class} rounded-lg justify-center items-center gap-1 inline-flex w-full h-[56px] text-white text-xl leading-normal tracking-tight`, "class")}> ${item.text} </a>`)} </div> </div> </div> </div> ${renderScript($$result, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/ModalMenuMovil.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/ModalMenuMovil.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { href: "#AboutUs", label: "\xBFQu\xE9 es Abitacolo?" },
    { href: "#team", label: "Nuestro equipo" },
    { href: "#hitos", label: "Hitos Abitacolo" },
    { href: "#products", label: "Nuestros productos" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="w-full absolute flex justify-center h-fit pt-4 z-50"> <div class="max-w-[1440px] w-full h-[65px] px-8 py-4 flex items-center"> <a href="/" aria-label="Inicio"> ${renderComponent($$result, "Image", $$Image, { "width": 225, "height": 69, "src": AbitacoloBlanco, "alt": "Logo Abitacolo", "loading": "eager" })} </a> <div class="max-[1030px]:hidden flex justify-between items-center w-full"> <ul class="h-8 flex items-center gap-1 ml-4"> ${navItems.map(({ href, label }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="px-2 py-1.5 rounded-lg text-white bg-[#2e2f32] hover:bg-[#3e3f42] transition-colors duration-300" data-nav-link> ${label} </a> </li>`)} </ul> <div class="flex items-center gap-2"> <button class="px-2 py-1.5 rounded-lg text-white">ES</button> <a href="#contacto" class="px-2 py-1.5 bg-[#919e32] rounded-lg text-white font-semibold tracking-tight hover:bg-[#a1b036] transition-colors duration-300" data-nav-link>
Contáctanos
</a> </div> </div> </div> <div class="min-[1030px]:hidden grid content-center">${renderComponent($$result, "ModalMenuMovil", $$ModalMenuMovil, {})}</div> </nav> ${renderScript($$result, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/Nav.astro", void 0);

const instagramBlanco = new Proxy({"src":"/_astro/instagramBlanco.TSznOhGV.webp","width":78,"height":75,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/logos/instagramBlanco.webp";
							}
							
							return target[name];
						}
					});

const linkedinBlanco = new Proxy({"src":"/_astro/LinkedInBlanco.D38a5dD_.webp","width":78,"height":75,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/logos/LinkedInBlanco.webp";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { href: "#AboutUs", label: "\xBFQu\xE9 es Abitacolo?" },
    { href: "#team", label: "Nuestro Equipo" },
    { href: "#hitos", label: "Hitos Abitacolo" },
    { href: "#products", label: "Nuestros Productos" },
    { href: "#contacto", label: "Contactos" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="w-full flex justify-center bg-[#919e32]"> <div class="max-w-[1440px] w-full p-4"> <div class="md:flex items-center justify-between"> <a href="/" aria-label="Inicio"> ${renderComponent($$result, "Image", $$Image, { "width": 150, "height": 150, "src": AbitacoloBlanco, "alt": "Logo Abitacolo", "loading": "lazy" })} </a> <div class="flex gap-6 items-center max-md:flex-col-reverse"> <p class="text-white cursor-pointer text-sm">POLÍTICA DE PRIVACIDAD</p> <p class="text-white cursor-pointer text-sm">POLÍTICA DE COOKIES</p> <div class="flex gap-5"> ${["Instagram", "LinkedIn"].map((social) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "w-6 h-6", "src": social === "Instagram" ? instagramBlanco : linkedinBlanco, "alt": social, "loading": "lazy" })}`)} </div> </div> </div> <hr class="border-white mt-2 mx-5"> <div class="flex items-center flex-col mt-5"> <div class="flex items-center max-md:flex-col"> ${navItems.map(({ href, label }) => renderTemplate`<a class="p-3"${addAttribute(href, "href")}> <button class="text-white p-2 font-semibold">${label}</button> </a>`)} </div> <p class="text-white text-sm mt-1">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Abitacolo. Todos los derechos reservados.
</p> </div> </div> </footer>`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/Footer.astro", void 0);

const ACG = new Proxy({"src":"/_astro/ACG.CkWo1Rj7.webp","width":430,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/equipo/ACG.webp";
							}
							
							return target[name];
						}
					});

const GCG = new Proxy({"src":"/_astro/GCG.BmJPK8sR.webp","width":430,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/equipo/GCG.webp";
							}
							
							return target[name];
						}
					});

const GPC = new Proxy({"src":"/_astro/GPC.BGfuZVSq.webp","width":430,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/equipo/GPC.webp";
							}
							
							return target[name];
						}
					});

const JCM = new Proxy({"src":"/_astro/JCM.BxOABM4z.webp","width":430,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/equipo/JCM.webp";
							}
							
							return target[name];
						}
					});

const MBR = new Proxy({"src":"/_astro/MBR.CiFHtquf.webp","width":430,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/equipo/MBR.webp";
							}
							
							return target[name];
						}
					});

const MPR = new Proxy({"src":"/_astro/MPR.DmouNx32.webp","width":430,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/equipo/MPR.webp";
							}
							
							return target[name];
						}
					});

const XLD = new Proxy({"src":"/_astro/XLD.C1aJKhRj.webp","width":430,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/equipo/XLD.webp";
							}
							
							return target[name];
						}
					});

export { $$Nav as $, ACG as A, GPC as G, JCM as J, MBR as M, XLD as X, MPR as a, GCG as b, $$Footer as c };
