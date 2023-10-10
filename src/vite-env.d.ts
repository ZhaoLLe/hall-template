/// <reference types="vite/client" />
// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />
declare const VITE_NODE_ENV: string;
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const vueComponent: DefineComponent<{}, {}, any>;
  export default vueComponent;
}
interface Navigator {
  userAgent: string;
  browserLanguage: string;
}
