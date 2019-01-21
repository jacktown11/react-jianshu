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
  src: url('./static/font/iconfont.eot?t=1547865192170'); /* IE9 */
  src: url('./static/font/iconfont.eot?t=1547865192170#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAV0AAsAAAAACrgAAAUmAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCECgqHMIYvATYCJAMkCxQABCAFhG0HfhtZCSOSL06L7J+HsbGy8U3W1WDpOHojWCwix99GIgdZU6cNHYn3OZ6n9ns9d3cDgOMzX8VGggOUZZKVv4pYVaoKWaHYiHeEm95/qCWIVs2BmkNdJtkcmFMmJhbm9+6nJXIV5oT5KGth8+jT9JLcpwsWnp/TU2pCTsidrKkuORYOzxe8IboSgvpUtSNdNRJqQjFLIls5u8kZK6chXs2L7eQbgNsJRm3qyV78wQVdDd8vyKPau9fpuhxaBCeGzYPEqU0+GTBcXpczwEf99/MftjNMMVDxQ0/u7N8S+QtvrMO7vkuqy4vifLidRUUPjXwnA99Us9BTjX62bu4Bs6ZVpai/FZnY+I/6pfq1sevwE/FpMSsKFEOd/Jc3oBlUyaCTcRy0Z8VhfmHZQEcRbIaAJlBGow1sAvSHzQBwFGwaUAWbQeBGoGVDGTllFtNklbzF6XtmKKKIpijq7JdCATLX1RVRtrYcQ30mqp+uFFUPDhdWqRWraANZjYYuz752TXL9ulR5NWz/derqVfGVK7n9NfoaxZk9fKXykOpB5WpaH5Ur9DX6iD7PCKnYZ0zM3u/AWboXSn8PyVQLc9UcUsLMJeup/AKNOTnHMK98N6UEoyEPkIpziJZKaVIRKt6yAvorKeVhhOorkFcjL9S5iqxaDyX5ViP0yGlIUrEiib6TkNNKW9UkL6JXfQdAX4QGKSrbJaRSmYeUpkmJRg0XwirxDFv1fktOGesXzjKRGUhnr96+1U6886prs3ilo1qhL9lzpSJ5UcGFV8pyV9VjE8d/M41njqueZTpLkZk6n7u1OVPIjMvBf/2fa2ecfoN6sXzsODkKkXkmJ8veEDlyRbEc9ZKyiE1hR9V0tdUq81XqGcoTVZvt6hs6bGCXmdh8FTjha0VfY9dTdyb3W8zkHODMfHD0w0zLA5byt8ocXrV8ciccqEm46Bh7sZr9/8butbrwDDGOrqgNv874Hd7ecTTQA2lFuTc7SWpZxVRKZPCTEmnHaSPRb2O7j3bmYNjd2Ok4Dv2MvX/+7GWweaY89iLixg1iEers2V7lPpRlZcJjHWKNg1eqnm8vqEPsS8Bf5rwWvF/pW4AwGpcO3JhfJjB6fn/85qTbs1u3mfYbGFL6m41fJPkULPxel4zGpsWL0uPgduiUqeClMGDq1Kxyq4AhxOJluFfULl/WS/QQy8+b+duW4xIZVqmQDDK1S4blWKnCMshwlBzDsOGA7jt+Rejpoi/qHsIQgC2wNkD3tm7F9xnvfz1AAOkAKZJH13xiSGlYHY6tdund4Mejq1DKCf2qSx3ly37K18pP8W5Yg+Qpw/DaQdiBgwwEG1Hz1XD7SHsbQ48mDwkwItFRowCjYgnYbSOz7hVrWkjcSugS2VDoMINKly2p0VxhAMUXBukqjIBRLl7PHiPgTaE2Amz5ZoBw/QDGth8IXL8kBu0PtOj7B23cEECSZH9Jin1qN0ePIuIVLk8gyYOS3HFjtL+hTp3wTo3O/UIfKA1VXnrLrzigL+KIcNN1jAqU5x5e2N2w6xis5wZlzE2M9lAUinqlXHI/2ojhISFCV+DiCRCJDZQ6Pdr4fv4N0pKO4CMIP9JfkBfQxkElVyYgvRqHRIRN2Tq40WpRpM57KR7rgRf4UCcKDFh6pwaSopzJkLMOitM4ldSYV2/q5/U6GMVfbyQlNS0DGcxQhjOSUaznJAb95JRJts+5oAcNG78tGIW9srRll4Z6EiWWwSQRZtiN2vGZNChbGhaBU0g8GgEAAA==') format('woff2'),
  url('./static/font/iconfont.woff?t=1547865192170') format('woff'),
  url('./static/font/iconfont.ttf?t=1547865192170') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./static/font/iconfont.svg?t=1547865192170#iconfont') format('svg'); /* iOS 4.1- */
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
