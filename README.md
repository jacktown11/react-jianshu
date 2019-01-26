# React jianshu

react 学习： 仿简书首页。

## 部署到 github pages

- 在 package.json 中添加

```json
"homepage": "https::/username.github.io/project-name",
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```

- 安装 gh-pages： `npm install --save-dev gh-pages`
- 部署： `npm run deploy`
- 更多参考：[ http://bit.ly/CRA-deploy](http://bit.ly/CRA-deploy)
