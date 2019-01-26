import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${'' /* part1: reset.css */}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

${'' /*part2:  image font */}

@font-face {font-family: "iconfont";
  src: url('./static/font/iconfont.eot?t=1548470370707'); /* IE9 */
  src: url('./static/font/iconfont.eot?t=1548470370707#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./static/font/iconfont.woff?t=1548470370707') format('woff'),
  url('./static/font/iconfont.ttf?t=1548470370707') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./static/font/iconfont.svg?t=1548470370707#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${'' /* part3: self-define reset */}
button{
	border: none;
	background-color: transparent;
	outline: none;
}
`;

export default GlobalStyle;
