import { EventTypes, BreadcrumbTypes, BreadcrumbLevel } from '@webguard/common';

/**
 * 将 EventTypes 转换为对应的 BreadcrumbTypes
 */
export function eventTypeToBreadcrumbType(type: EventTypes): BreadcrumbTypes {
  const map: Record<EventTypes, BreadcrumbTypes> = {
    [EventTypes.ERROR]: BreadcrumbTypes.CODE_ERROR,
    [EventTypes.UNHANDLEDREJECTION]: BreadcrumbTypes.CODE_ERROR,
    [EventTypes.CLICK]: BreadcrumbTypes.CLICK,
    [EventTypes.KEYDOWN]: BreadcrumbTypes.KEYBOARD,
    [EventTypes.KEYUP]: BreadcrumbTypes.KEYBOARD,
  };
  return map[type];
}

/**
 * 将 BreadcrumbTypes 转换为对应的 BreadcrumbLevel
 */
export function breadcrumbTypeToBreadcrumbLevel(type: BreadcrumbTypes): BreadcrumbLevel {
  const map: Record<BreadcrumbTypes, BreadcrumbLevel> = {
    [BreadcrumbTypes.HTTP]: BreadcrumbLevel.INFO,
    [BreadcrumbTypes.CLICK]: BreadcrumbLevel.INFO,
    [BreadcrumbTypes.KEYBOARD]: BreadcrumbLevel.INFO,
    [BreadcrumbTypes.ROUTE]: BreadcrumbLevel.INFO,
    [BreadcrumbTypes.CONSOLE]: BreadcrumbLevel.DEBUG,
    [BreadcrumbTypes.CODE_ERROR]: BreadcrumbLevel.ERROR,
    [BreadcrumbTypes.CUSTOM]: BreadcrumbLevel.INFO,
  };
  return map[type];
}
