import { BreadcrumbLevel, BreadcrumbTypes } from "@web-guard/common";

export interface IBaseLog {
  timestamp: number; // 日志产生的时间戳
  type: 'error' | 'performance'; // 日志类型（如 error, performance, api, page）
  pageUrl: string; // 页面 URL
  userAgent: string; // 用户的设备、浏览器信息
  sessionId: string; // 用户会话 ID
  traceId?: string; // 请求或操作的跟踪 ID，用于链路追踪
}

export interface IErrorLog extends IBaseLog {
  type: 'error'; // 错误类型日志
  errorMessage: string; // 错误信息
  errorStack?: string; // 错误堆栈
  filename?: string; // 发生错误的文件名
  line?: number; // 错误发生的行号
  column?: number; // 错误发生的列号
}

export interface IBreadcrumbData {
  type: BreadcrumbTypes;
  level: BreadcrumbLevel;
  message: string;
  timestamp: number;
  data: Record<string, any>;
}

export type BreadcrumbBeforePush = (breadcrumb: IBreadcrumbData) => IBreadcrumbData | null;

export type BreadcrumbConfig = {
  maxBreadcrumbs?: number;
  beforePushBreadcrumb?: BreadcrumbBeforePush;
}

export type MonitorReporterConfig = {
  repetitionErrorRemove?: boolean; // 是否进行错误上报去重
}

export type WebGuardInitConfig = {
  targetUrl: string; // 错误上报服务器
  needCatchError?: boolean; // 是否全局监听error事件
  needCatchUnhandledrejection?: boolean; // 是否监听Promise reject
  monitorReporterConfig?: MonitorReporterConfig; // 监控上报配置
  breadcrumbConfig?: BreadcrumbConfig; // 面包屑配置
}

export type EventMaps = {
  onError: (e: ErrorEvent) => void,
  onUnHandledUnrejection: (e: PromiseRejectionEvent) => void,
}
