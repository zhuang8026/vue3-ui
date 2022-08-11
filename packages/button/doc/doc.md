<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Button 按鈕

#### 網頁常用 button 按鈕，常用於響應一個事件或處理某個邏輯

<br/>

## 基本使用

#### button 按鈕的基本使用

<br/>
<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="button" demoName="demo1"/>

## 禁用狀態

#### 按鈕不可操作的狀態——通過 _disabled_ 屬性設置實現

<br/>
<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="button" demoName="demo2"/>

## 不同大小

#### 不同大小類型的按鈕——通過 _size_ 屬性設置實現

<br/>
<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="button" demoName="demo3"/>

## 圖標按鈕

#### 帶圖標類型的按鈕——通過 _leftIcon_ 或者 _rightIcon_ 屬性設置實現並確定 icon 出現的位置

<br/>
<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="button" demoName="demo4"/>

## 加載狀態

#### 正在加載中的狀態按鈕——通過 _loading_ 和 _leftIcon_ 或者 _rightIcon_屬性設置實現並確定 icon 出現的位置

<br/>
<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="button" demoName="demo5"/>

## 自定義顏色

#### 可可以自定義顏色的按鈕類型——通過設置 _type_ 為 _custom_ 和 _customColor_ 屬性設置實現。 tips：需要注意的是 _type_ 為 _default_、_dashed_、_text_ 類型的按鈕不支持自定義

<br/>
<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="button" demoName="demo6"/>

## Attributes 參數

<Attributes/>
<br/>
