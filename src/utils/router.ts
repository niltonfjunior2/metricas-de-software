export type RouteHandler = (params: Record<string, string>) => void;

interface RouteDefinition {
  pattern: RegExp;
  paramNames: string[];
  handler: RouteHandler;
}

export class Router {
  private routes: RouteDefinition[] = [];
  private notFoundHandler: RouteHandler = () => {};
  private currentPath = '';

  public getActivePath(): string {
    return this.currentPath;
  }

  constructor() {
    window.addEventListener('hashchange', () => this.resolve());
  }

  public on(path: string, handler: RouteHandler): this {
    const paramNames: string[] = [];
    const regexPath = path
      .replace(/:([a-zA-Z0-9_]+)/g, (_, paramName) => {
        paramNames.push(paramName);
        return '([^/]+)';
      })
      .replace(/\//g, '\\/');

    const pattern = new RegExp(`^${regexPath}$`);
    this.routes.push({ pattern, paramNames, handler });
    return this;
  }

  public notFound(handler: RouteHandler): this {
    this.notFoundHandler = handler;
    return this;
  }

  public navigate(path: string): void {
    const cleanPath = path.startsWith('#') ? path.slice(1) : path;
    window.location.hash = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  }

  public getCurrentPath(): string {
    const hash = window.location.hash.slice(1);
    if (!hash || hash === '') return '/';
    return hash.startsWith('/') ? hash : `/${hash}`;
  }

  public resolve(): void {
    const path = this.getCurrentPath();
    this.currentPath = path;

    for (const route of this.routes) {
      const match = path.match(route.pattern);
      if (match) {
        const values = match.slice(1);
        const params: Record<string, string> = {};
        route.paramNames.forEach((name, i) => {
          params[name] = decodeURIComponent(values[i] || '');
        });

        route.handler(params);
        this.updateActiveNavLinks(path);
        return;
      }
    }

    this.notFoundHandler({});
    this.updateActiveNavLinks(path);
  }

  private updateActiveNavLinks(currentPath: string): void {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-route]');
    navLinks.forEach((link) => {
      const targetRoute = link.getAttribute('data-route');
      if (targetRoute) {
        const isActive =
          targetRoute === '/'
            ? currentPath === '/'
            : currentPath.startsWith(targetRoute);
        link.classList.toggle('active', isActive);
      }
    });
  }
}

export const router = new Router();
