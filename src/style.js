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
  src: url('./static/font/iconfont.eot?t=1548500600224'); /* IE9 */
  src: url('./static/font/iconfont.eot?t=1548500600224#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./static/font/iconfont.woff?t=1548500600224') format('woff'),
  url('./static/font/iconfont.ttf?t=1548500600224') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./static/font/iconfont.svg?t=1548500600224#iconfont') format('svg'); /* iOS 4.1- */
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
