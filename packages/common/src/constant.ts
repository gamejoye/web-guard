export enum EventTypes {
  ERROR = 'error',
  UNHANDLEDREJECTION = 'unhandledrejection',
}

export enum BreadcrumbTypes {
  HTTP = 'http',
  CLICK = 'click',
  ROUTE = 'route',
  CONSOLE = 'console',
  CODE_ERROR = 'code_error',
  CUSTOM = 'custom',
}

export enum BreadcrumbLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
}