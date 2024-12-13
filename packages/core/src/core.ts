import { initFlags } from '@webguard/utils';
import { initRelace } from './replace';
import { reporter } from './repoter';
import { breadcrumb } from './breadcrumb';
import { WebGuardInitConfig } from '@webguard/types';

export class WebGuard {
  config!: Required<WebGuardInitConfig>;
  init(config: WebGuardInitConfig) {
    this.config = {
      needCatchError: true,
      needCatchUnhandledrejection: true,
      monitorReporterConfig: {},
      breadcrumbConfig: {},
      ...config,
    };
    initFlags([
      ['onError', this.config.needCatchError],
      ['onResourceError', true],
      ['onUnHandledUnrejection', this.config.needCatchUnhandledrejection],
      ['onClick', true],
      ['onKeyDown', true],
      ['onKeyUp', true],
      ['onFetch', true],
      ['onXHR', true],
    ]);
    initRelace();
    reporter.bindConfig(this.config.monitorReporterConfig);
    breadcrumb.bindConfig(this.config.breadcrumbConfig);
  }
}

const guard = new WebGuard();
export { guard as Guard };
