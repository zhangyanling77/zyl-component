# zyl-component

![GitHub package.json version](https://img.shields.io/github/package-json/v/zhangyanling77/zyl-component)
[![Coverage Status](https://coveralls.io/repos/github/zhangyanling77/zyl-component/badge.svg?branch=master)](https://coveralls.io/github/zhangyanling77/zyl-component?branch=master)
<!-- ![GitHub All Releases](https://img.shields.io/github/downloads/zhangyanling77/zyl-component/total) -->
<!-- ![npm](https://img.shields.io/npm/v/zyl-component) -->
![npm bundle size](https://img.shields.io/bundlephobia/min/zyl-component)
![npm](https://img.shields.io/npm/dt/zyl-component)


### 使用patch-package修改Node.js依赖包内容
- 1. 安装patch-package: npm i patch-package -D
- 2. 创建补丁: npx patch-package package-name   # 使用npm
     会在项目根目录下的patches目录中创建一个名为package-name+version.patch的文件。将该patch文件提交至版本控制中，即可在之后应用该补丁了
- 3. 部署: 修改package.json的内容，在scripts中加入"postinstall": "patch-package"
> 运行npm install或是yarn install命令时，便会自动为依赖包打上我们编写的补丁了


```json
  "build": "tsc -p tsconfig.build.json",
```

```json
  "build": "microbundle build --tsconfig tsconfig.build.json --jsx React.createElement",
```

```json

  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write"
    ]
  },
```

