var articleNodes = Array.prototype.slice.call(
  document.querySelectorAll('.note-list li')
);
var articleInfos = articleNodes.map((item) => {
  var img = item.getElementsByTagName('img')[0];
  var imgSrc = img ? img.src : null;

  var content = item.querySelector('.content');
  console.log(content.querySelectorAll('a')[2]);

  return {
    imgSrc,
    title: content.firstChild.innerHTML,
    abstract: content
      .querySelector('.abstract')
      .innerHTML.replace(/\n/gi, '')
      .trim(),
    authorNickname: content.querySelector('.nickname').innerHTML,
    commentCount: content
      .querySelectorAll('a')[2]
      .innerHTML.replace(/[^\d]/gi, ''),
    likeCount: content.querySelector('span').innerHTML.replace(/[^\d]/gi, '')
  };
});
document.write(JSON.stringify(articleInfos));
