webpackJsonp([35783957827783],{209:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.data,a=t.allMarkdownRemark.edges;return u.default.createElement("div",{className:"blog-posts"},a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e,t){var a=e.node;return u.default.createElement("div",{key:t},u.default.createElement("h2",null,u.default.createElement(f.default,{to:a.frontmatter.path},a.frontmatter.title)),u.default.createElement("p",null,a.frontmatter.date),u.default.createElement("p",null,a.excerpt))}))}t.__esModule=!0,t.pageQuery=void 0,t.default=n;var l=a(2),u=r(l),d=a(46),f=r(d);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-7d116c230f0dc4d5b4a8.js.map