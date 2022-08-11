<div align="center">
  <!-- <img src="http://mzlui.codeym.com/assets/logo.35ebc5f4.png" width="100"/> -->
  <h1 style="border-bottom:0">
    <p>ATD-UEUI 元件庫</p>
    <p style="font-size:20px">適合開發者使用的輕量級UI組件庫，完美支持vue3</p>
  </h1>
</div>
<br/>

<!-- 官网主页: [mzl-ui使用文档](https://mzlui.codeym.com/) -->

---

### 快速安裝

```
npm install atd-ueui --save
```

### 前期準備

```
import { createApp } from 'vue'
import App from '@/App.vue'
import ATDUEUI from 'atd-ueui'
import '../node_modules/atd-ueui/dist/style.css'

const app = createApp(App);
app.use(ATDUEUI);
app.mount('#app');
```

### 引用

```
import { atdButton, atdInput } from 'atd-ueui'
```

### 輕鬆开始

```
<atd-button>默認按鈕</atd-buttonn>
<atd-button type="primary">主要按鈕</atd-button>
```

### 問題反饋

- 您可以發送郵件至wimnft@gmail.com來反饋。

### 分支規範

- 代碼請保持在 _dev_ 分支，禁止操作 _main_ 分支。
- 組件文檔暫時需要提供 _md_ 文件，包括（項目使用方式、演示、配置、事件 API、插槽說明...）。
- 提交代碼前請先 _rebase_。
- git 提交流程示例：

```javascript
git add .
git commit -m "add component:button" // example
git pull --rebase origin dev
git push origin dev
```

### 文檔集成規範

- 組件目錄下新增的 _doc_ 文件夾用於文檔編寫。
- _doc_ 文件夾下提供一個 _doc.md_，一个組件最多只允許一個 _.md_ 文件。
- _doc_ 文件同級存放 _demo.vue_ 文件，_demo_ 不限制個數。
- 然後在 _doc.md_ 文件頂部使用 _setup_ 語法糖的方式引入 _demo_ 文件，使用组件的形式展示。
- _src/router/routerPage/page.js_ 引入 md 文件作爲路由使用即可。
- 左側選單 "menuList" 管理文件在 _/src/const/menuList.js_, _path_ 路徑二級路由保持與元件 _path_ 配置一致。
- _Attributes.vue_ 作爲參數原件，使用請參考 _button/doc/Attributes.vue_。
- _Events.vue_ 作爲事件 API 组件，使用請參考 _input/doc/Events.vue_
- 如果有其他的 api 需要展示，新增相關元件文件并引用，例如：_options.vue_，使用請參考 _tree/doc/options.vue_
- 代碼預覽文件為 src/components/Preview.vue，需在 _doc.md_ 文件以元件的形式引入 _Preview.vue_ ，接收两
  个*props*，_compName_ 为元件目錄名稱（建議與路由名稱保持一致），_demoName_ 是爲了要展示 _demo_ 文件名，例如：

```javascript
//doc.md
<script setup>
  import demo1 from './demo1.vue'; import demo2 from './demo2.vue'; import preview from '@/components/preview.vue';
  <div class="componetnsBox">
    <demo1 />
  </div>
  <preview compName="button" demoName="demo1" />
  <div class="componetnsBox">
    <demo2 />
  </div>
  <preview compName="button" demoName="demo2" />
</script>
```

### 組件測試規範

- 任何一個組件應完成測試後提交 _PR_
- 組件測試腳本提供存放目錄為 _tests_ 目錄文件，提供 _.spec.js_ 為測試腳本
- 測試腳本需包含初始化測試、渲染測試、插槽測試、事件測試、功能測試等基礎測試
- 具體示例請參考 _/tests/button.spec.js_ 腳本文件
- 組件測試命令為：

```
npm test
```

### 開發環境

- 你需要 Node.js 14+，yarn 1.1+ 和 npm 6+及 vite 2+

#### 項目啓動

```javascript
npm run dev
```

#### 項目打包

```javascript
npm run build
```

### 元件開發規範

- 通過在 _packages_ 目錄下創建組件目錄結構，包含測試、入口文件、文檔。
- 原件入口文件必須以 _index.js_ 命名，并包含 _install_ 方法, Example：

```javascript
import mButton from './index.vue';
mButton.install = app => {
  app.component(mButton.name, mButton);
};
export default mButton;
```

- _packages_ 文件夹下 _index.js_ 作爲整體入口文件，需包含所有元件，若需要綁定全局变量或提供元件實例調用，Example：

  ```
  app.config.globalProperties.$message = Message;
  ```

- 任何組件禁止使用三方依賴庫。
- 組件內如果依賴了其他組件，需要在當前組件內引入，Example: _select_。

<br/>
