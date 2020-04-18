import Vue from 'vue';

interface LbzThemeColor {
  readonly light: string;
  readonly dark: string;
}

export function lbzfCancelContextmenu(): void {
  if (Vue.prototype.$isServer) { // SSR
    return;
  }

  document.addEventListener('contextmenu', (e: MouseEvent): void => {
    if (['INPUT', 'TEXTAREA'].indexOf((e as any).target.tagName.toUpperCase()) < 0) {
      e.preventDefault();
    }
  });
}

export function lbzfChangeModeHandler(handler: () => void): void {
  if (Vue.prototype.$isServer) { // SSR
    return;
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler);
}

export function lbzfIsDarkModeEnabled(): boolean {
  if (Vue.prototype.$isServer) { // SSR
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function lbzfIsMobileBreakpoint(): boolean {
  if (Vue.prototype.$isServer) { // SSR
    return false;
  }

  const width = Math.max(document.documentElement!.clientWidth, window.innerWidth || 0);

  return width < 600;
}

export function lbzfLockBodyScroll(val: boolean): void {
  if (Vue.prototype.$isServer) { // SSR
    return;
  }

  document.body.classList[val ? 'add' : 'remove']('lbz-is-locked');
}

export function lbzfRandomId(): string {
  return Math.random().toString(36).slice(4);
}

export function lbzfSetModeAttributes(isDark: boolean, themeColor: LbzThemeColor): void {
  if (Vue.prototype.$isServer) { // SSR
    return;
  }

  document.documentElement.setAttribute('data-lbz-theme', isDark ? 'dark' : 'light');

  if (document.querySelector('meta[name=theme-color]')) {
    document.querySelector('meta[name=theme-color]')!
      .setAttribute('content', isDark ? themeColor.dark : themeColor.light);
  }

  if (document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]')) {
    document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]')!
      .setAttribute('content', isDark ? 'black' : 'default');
  }
}

export function lbzfSupportsCssVariables(): boolean {
  if (Vue.prototype.$isServer) { // SSR
    return false;
  }

  const { CSS }: any = window;

  if (!(CSS && typeof CSS.supports === 'function')) {
    return false;
  }

  // Safari: https://bugs.webkit.org/show_bug.cgi?id=154669
  return CSS.supports('--css-vars', 'yes')
    || (CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000'));
}

export function lbzfSupportsTouch(): boolean {
  if (Vue.prototype.$isServer) { // SSR
    return false;
  }

  return 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
}
