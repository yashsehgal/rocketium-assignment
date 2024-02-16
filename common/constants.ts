/**
 * @file common/constants.ts
 * @description Constants file containing application-wide constants.
 */

/**
 * Mapping of team names to corresponding badge themes.
 * @constant
 * @type {Record<TeamNameType, string>}
 * @example
 * const badgeTheme = BadgeThemeForTeam['CHRONOS']; // Returns 'green'
 */
export const BadgeThemeForTeam: Record<TeamNameType, string> = {
  CHRONOS: 'green',
  LABS: 'orange',
  PHOENIX: 'purple',
  LUMOS: 'yellow',
};
