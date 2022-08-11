# 安裝使用

## 安裝

#### 推薦使用 _npm_ 的方式安裝。

```bash
npm install atd-ueui
```

<br/>

## 使用 atd-ueui

#### 需要注意的是 css 樣式文件需要您單獨引入。

```javascript
/*js*/
import { createApp } from 'vue';
import App from '@/App.vue';
import ATDUEUI from 'atd-ueui';
import '../node_modules/atd-ueui/dist/style.css';

const app = createApp(App);
app.use(ATDUEUI);
app.mount('#app');
```

<br/>

## 愉快開始

#### 至此 atd-ueui 就引入完成並且可以使用了。

```html
<!-- html -->
<atd-button>默認按鈕</atd-buttonn>
<atd-button type="primary">主要按鈕</atd-button>
```

<br/>

## 按需引用

#### 您可以根據個人需要按需引用組件來使用，按需引用時不需要使用 <font color=#0e80eb>**app.use()**</font> 方法註冊。

```javascript
/*js*/
import { atdButton, atdInput } from 'atd-ueui';
```

<br/>

```html
<!-- html -->
<atd-button>點擊</atd-button>
<atd-input v-model="value" placeholder="基本使用(placeholder)"></atd-input>
```

<br/>
