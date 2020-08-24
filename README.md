# zyl-component
react+storybook


[![Coverage Status](https://coveralls.io/repos/github/zhangyanling77/zyl-component/badge.svg?branch=master)](https://coveralls.io/github/zhangyanling77/zyl-component?branch=master)

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
