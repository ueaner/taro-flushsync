# taro flushSync issue

## 最小示例

### taro init

> taro init taro-flushsync

```
👽 Taro v3.6.19

⚠ 获取 taro 全局配置文件失败，不存在全局配置文件：/Users/ueaner/.taro-global-config/index.json


Taro 即将创建一个新项目!
Need help? Go and open issue: https://tls.jd.com/taro-issue-helper

? 请输入项目介绍
? 请选择框架 React
? 是否需要使用 TypeScript ？ Yes
? 请选择 CSS 预处理器（Sass/Less/Stylus） 无
? 请选择编译工具 Webpack5
? 请选择包管理工具 pnpm
? 请选择模板源 Gitee（最快）
✔ 拉取远程模板仓库成功！
? 请选择模板 默认模板

✔ 创建项目: taro-flushsync
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/.editorconfig
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/.env.dev
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/.env.prod
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/.env.test
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/.eslintrc
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/.gitignore
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/babel.config.js
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/jest.config.ts
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/package.json
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/project.config.json
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/project.tt.json
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/tsconfig.json
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/__tests__/index.test.js
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/config/dev.ts
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/config/index.ts
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/config/prod.ts
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/types/global.d.ts
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/src/app.config.ts
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/src/app.css
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/src/app.ts
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/src/index.html
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/src/pages/index/index.config.ts
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/src/pages/index/index.css
✔ 创建文件: /Users/ueaner/projects/frontend/taro-flushsync/src/pages/index/index.tsx

✔ cd taro-flushsync, 执行 git init
Progress: resolved 1, reused 0, downloaded 0, added 0
Progress: resolved 35, reused 24, downloaded 0, added 0
Progress: resolved 64, reused 54, downloaded 4, added 0
Progress: resolved 157, reused 140, downloaded 6, added 0
Progress: resolved 275, reused 236, downloaded 6, added 0
Progress: resolved 351, reused 340, downloaded 6, added 0
Progress: resolved 452, reused 429, downloaded 11, added 0
Progress: resolved 606, reused 562, downloaded 13, added 0
Progress: resolved 782, reused 736, downloaded 15, added 0
Progress: resolved 967, reused 910, downloaded 17, added 0
Progress: resolved 1133, reused 1052, downloaded 18, added 0
Progress: resolved 1373, reused 1304, downloaded 19, added 0
 WARN  14 deprecated subdependencies found: @babel/plugin-proposal-async-generator-functions@7.20.7, @babel/plugin-proposal-class-properties@7.18.6, @babel/plugin-proposal-nullish-coalescing-operator@7.18.6, @babel/plugin-proposal-object-rest-spread@7.20.7, @babel/plugin-proposal-optional-catch-binding@7.18.6, @babel/plugin-proposal-optional-chaining@7.21.0, @types/sass@1.45.0, consolidate@0.15.1, har-validator@5.1.5, request@2.88.2, source-map-resolve@0.6.0, stable@0.1.8, uuid@3.4.0, vm2@3.9.19
Progress: resolved 1615, reused 1544, downloaded 19, added 0
Packages: +1570
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 1615, reused 1549, downloaded 20, added 52
Progress: resolved 1615, reused 1549, downloaded 20, added 297
Progress: resolved 1615, reused 1549, downloaded 20, added 401
Progress: resolved 1615, reused 1549, downloaded 20, added 523
Progress: resolved 1615, reused 1549, downloaded 20, added 716
Progress: resolved 1615, reused 1549, downloaded 20, added 839
Progress: resolved 1615, reused 1549, downloaded 20, added 947
Progress: resolved 1615, reused 1549, downloaded 20, added 1234
Progress: resolved 1615, reused 1549, downloaded 20, added 1269
Progress: resolved 1615, reused 1549, downloaded 20, added 1280
Progress: resolved 1615, reused 1549, downloaded 20, added 1388
Progress: resolved 1615, reused 1549, downloaded 20, added 1503
Progress: resolved 1615, reused 1549, downloaded 20, added 1570, done

dependencies:
+ @babel/runtime 7.23.4
+ @tarojs/components 3.6.19
+ @tarojs/helper 3.6.19
+ @tarojs/plugin-framework-react 3.6.19
+ @tarojs/plugin-platform-alipay 3.6.19
+ @tarojs/plugin-platform-h5 3.6.19
+ @tarojs/plugin-platform-jd 3.6.19
+ @tarojs/plugin-platform-qq 3.6.19
+ @tarojs/plugin-platform-swan 3.6.19
+ @tarojs/plugin-platform-tt 3.6.19
+ @tarojs/plugin-platform-weapp 3.6.19
+ @tarojs/react 3.6.19
+ @tarojs/runtime 3.6.19
+ @tarojs/shared 3.6.19
+ @tarojs/taro 3.6.19
+ react 18.2.0
+ react-dom 18.2.0

devDependencies:
+ @babel/core 7.23.3
+ @pmmmwh/react-refresh-webpack-plugin 0.5.11
+ @tarojs/cli 3.6.19
+ @tarojs/taro-loader 3.6.19
+ @tarojs/test-utils-react 0.1.1
+ @tarojs/webpack5-runner 3.6.19
+ @types/jest 29.5.9
+ @types/node 18.18.11 (20.9.3 is available)
+ @types/react 18.2.38
+ @types/webpack-env 1.18.4
+ @typescript-eslint/eslint-plugin 6.12.0
+ @typescript-eslint/parser 6.12.0
+ babel-preset-taro 3.6.19
+ eslint 8.54.0
+ eslint-config-taro 3.6.19
+ eslint-plugin-import 2.29.0
+ eslint-plugin-react 7.33.2
+ eslint-plugin-react-hooks 4.6.0
+ jest 29.7.0
+ jest-environment-jsdom 29.7.0
+ postcss 8.4.31
+ react-refresh 0.11.0 (0.14.0 is available)
+ stylelint 14.16.1 (15.11.0 is available)
+ ts-node 10.9.1
+ tsconfig-paths-webpack-plugin 4.1.0
+ typescript 5.3.2
+ webpack 5.78.0 (5.89.0 is available)

 WARN  Issues with peer dependencies found
.
└─┬ @tarojs/webpack5-runner 3.6.19
  └─┬ vue-loader 15.11.1
    └─┬ @vue/component-compiler-utils 3.3.0
      └─┬ consolidate 0.15.1
        ├── ✕ unmet peer react-dom@^16.13.1: found 18.2.0
        └── ✕ unmet peer react@^16.13.1: found 18.2.0

Done in 28.6s
✔ 安装成功
创建项目 taro-flushsync 成功！
请进入项目目录 taro-flushsync 开始工作吧！😝
```

### flushSync 示例代码

直接使用 [https://zh-hans.react.dev/reference/react-dom/flushSync](https://zh-hans.react.dev/reference/react-dom/flushSync) 提供的示例
做了一点点改动，以适应 Taro. 见 [./src/pages/index/index.tsx](./src/pages/index/index.tsx)
其他无改动。

构建产生错误信息，这里虽是 Warning, 但[实际项目中同样的问题还产生了 Error](#实际项目报出的错误信息), 见下面详细错误信息，最终无法构建。

> pnpm run build:weapp

```
> taro-flushsync@1.0.0 build:weapp /Users/ueaner/projects/frontend/taro-flushsync
> taro build --type weapp

👽 Taro v3.6.19

Tips:
1. 建议开启持久化缓存功能，能有效提升二次编译速度，详情请参考: https://docs.taro.zone/docs/config-detail#cache。



✔ Webpack
  Compiled successfully in 7.24s

⚠️ Warnings:

    at HarmonyImportSpecifierDependency.getLinkingErrors (/Users/ueaner/projects/frontend/taro-flushsync/node_modules/.pnpm/webpack@5.78.0_@swc+core@1.3.23/node_modules/webpack/lib/dependencies/HarmonyImportDependency.js:160:8)
ModuleDependencyWarning: export 'flushSync' (imported as 'flushSync') was not found in 'react-dom' (possible exports: createPortal, createRoot, default, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates)
```

### taro info

> taro info

```
👽 Taro v3.6.19


  Taro CLI 3.6.19 environment info:
    System:
      OS: macOS 12.7.1
      Shell: 5.8.1 - /bin/zsh
    Binaries:
      Node: 20.9.0 - /tmp/run-ueaner.501ovL/fnm_multishells/666_1700546716777/bin/node
      npm: 10.1.0 - /tmp/run-ueaner.501ovL/fnm_multishells/666_1700546716777/bin/npm
    npmPackages:
      @tarojs/cli: 3.6.19 => 3.6.19
      @tarojs/components: 3.6.19 => 3.6.19
      @tarojs/helper: 3.6.19 => 3.6.19
      @tarojs/plugin-framework-react: 3.6.19 => 3.6.19
      @tarojs/plugin-platform-alipay: 3.6.19 => 3.6.19
      @tarojs/plugin-platform-h5: 3.6.19 => 3.6.19
      @tarojs/plugin-platform-jd: 3.6.19 => 3.6.19
      @tarojs/plugin-platform-qq: 3.6.19 => 3.6.19
      @tarojs/plugin-platform-swan: 3.6.19 => 3.6.19
      @tarojs/plugin-platform-tt: 3.6.19 => 3.6.19
      @tarojs/plugin-platform-weapp: 3.6.19 => 3.6.19
      @tarojs/react: 3.6.19 => 3.6.19
      @tarojs/runtime: 3.6.19 => 3.6.19
      @tarojs/shared: 3.6.19 => 3.6.19
      @tarojs/taro: 3.6.19 => 3.6.19
      @tarojs/taro-loader: 3.6.19 => 3.6.19
      @tarojs/webpack5-runner: 3.6.19 => 3.6.19
      babel-preset-taro: 3.6.19 => 3.6.19
      eslint-config-taro: 3.6.19 => 3.6.19
      react: ^18.0.0 => 18.2.0
```

## 实际项目报出的错误信息

### build:weapp 错误信息

> pnpm run build:weapp

```
> taro build --type weapp

👽 Taro v3.6.19


✖ Webpack
  Compiled with some errors in 19.19s

⚠️ Warnings:

    at HarmonyImportSpecifierDependency.getLinkingErrors (/Users/ueaner/projects/frontend/hello-taro/node_modules/.pnpm/webpack@5.89.0_@swc+core@1.3.96/node_modules/webpack/lib/dependencies/HarmonyImportDependency.js:163:8)
ModuleDependencyWarning: export 'flushSync' (imported as 'flushSync') was not found in 'react-dom' (possible exports: createPortal, createRoot, default, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates)

    at HarmonyImportSpecifierDependency.getLinkingErrors (/Users/ueaner/projects/frontend/hello-taro/node_modules/.pnpm/webpack@5.89.0_@swc+core@1.3.96/node_modules/webpack/lib/dependencies/HarmonyImportDependency.js:163:8)
ModuleDependencyWarning: export 'flushSync' (imported as 'flushSync') was not found in 'react-dom' (possible exports: createPortal, createRoot, default, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates)

    at HarmonyImportSpecifierDependency.getLinkingErrors (/Users/ueaner/projects/frontend/hello-taro/node_modules/.pnpm/webpack@5.89.0_@swc+core@1.3.96/node_modules/webpack/lib/dependencies/HarmonyImportDependency.js:163:8)
ModuleDependencyWarning: export 'flushSync' (imported as 'flushSync') was not found in 'react-dom' (possible exports: createPortal, createRoot, default, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates)

    at HarmonyImportSpecifierDependency.getLinkingErrors (/Users/ueaner/projects/frontend/hello-taro/node_modules/.pnpm/webpack@5.89.0_@swc+core@1.3.96/node_modules/webpack/lib/dependencies/HarmonyImportDependency.js:163:8)
ModuleDependencyWarning: export 'flushSync' (imported as 'flushSync') was not found in 'react-dom' (possible exports: createPortal, createRoot, default, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates)

✖ Errors:

    at HarmonyImportSpecifierDependency.getLinkingErrors (/Users/ueaner/projects/frontend/hello-taro/node_modules/.pnpm/webpack@5.89.0_@swc+core@1.3.96/node_modules/webpack/lib/dependencies/HarmonyImportDependency.js:163:8)
ModuleDependencyError: export 'flushSync' (imported as 'ReactDOM') was not found in 'react-dom' (possible exports: createPortal, createRoot, default, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates)

 ELIFECYCLE  Command failed with exit code 1.
```


### dev:weapp 错误信息

> pnpm run dev:weapp

```
✘ [ERROR] No matching export in "node_modules/.pnpm/@tarojs+react@3.6.19_react@18.2.0/node_modules/@tarojs/react/dist/react.esm.js" for import "flushSync"

    node_modules/.pnpm/@mantine+core@7.2.2_@mantine+hooks@7.2.2_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Collapse/use-collapse.mjs:3:9:
      3 │ import { flushSync } from 'react-dom';
        ╵          ~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/@tarojs+react@3.6.19_react@18.2.0/node_modules/@tarojs/react/dist/react.esm.js" for import "flushSync"

    node_modules/.pnpm/@floating-ui+react@0.24.8_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js:7:23:
      7 │ import { createPortal, flushSync } from 'react-dom';
        ╵                        ~~~~~~~~~

检测到依赖编译错误，已跳过 @mantine/core、react 依赖预编译。
    > 可以通过手动配置 compiler.prebundle.exclude (​https://nervjs.github.io/taro-docs/docs/next/config-detail#compilerprebundleexclude​) 忽略该提示
✘ [ERROR] No matching export in "node_modules/.pnpm/@tarojs+react@3.6.19_react@18.2.0/node_modules/@tarojs/react/dist/react.esm.js" for import "flushSync"

    node_modules/.pnpm/@mantine+core@7.2.2_@mantine+hooks@7.2.2_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Collapse/use-collapse.mjs:3:9:
      3 │ import { flushSync } from 'react-dom';
        ╵          ~~~~~~~~~

✘ [ERROR] No matching export in "node_modules/.pnpm/@tarojs+react@3.6.19_react@18.2.0/node_modules/@tarojs/react/dist/react.esm.js" for import "flushSync"

    node_modules/.pnpm/@floating-ui+react@0.24.8_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.esm.js:7:23:
      7 │ import { createPortal, flushSync } from 'react-dom';
        ╵                        ~~~~~~~~~

检测到依赖编译错误，已跳过 react-dom、react-dom 依赖预编译。
    > 可以通过手动配置 compiler.prebundle.exclude (​https://nervjs.github.io/taro-docs/docs/next/config-detail#compilerprebundleexclude​) 忽略该提示
✘ [ERROR] No matching export in "node_modules/.pnpm/@tarojs+react@3.6.19_react@18.2.0/node_modules/@tarojs/react/dist/react.esm.js" for import "flushSync"

    node_modules/.pnpm/@mantine+core@7.2.2_@mantine+hooks@7.2.2_@types+react@18.2.37_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Collapse/use-collapse.mjs:3:9:
      3 │ import { flushSync } from 'react-dom';

......
```
