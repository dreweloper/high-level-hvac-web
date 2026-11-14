/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/astro',
    'stylelint-config-recess-order'
  ],
  rules: {
    // Blank lines group the custom properties by type (colors, fonts, spacing)
    'custom-property-empty-line-before': null
  }
};
