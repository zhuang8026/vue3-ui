<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'
import demo8 from './demo8.vue'
import Attributes from './Attributes.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Input 輸入框

#### 數據輸入框類型，通過鍵盤輸入字符

<br/>

## 基本使用

#### input 的基本使用

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="input" demoName="demo1"/>

## 禁用狀態

#### input 的禁用狀態，通過 _disabled_ 屬性限制輸入及操作

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="input" demoName="demo2"/>

## 可清空數據

#### input 的 value 可快捷清空，通過 _clearable_ 屬性啟用

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="input" demoName="demo3"/>

## 使用圖標

#### 可使用 _leftIcon_ 或者 _rightIcon_ 來定義顯示圖標並確定顯示的位置。需要注意的是如果定義了右側顯示圖標，那 _clearable_ 將不再起作用

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="input" demoName="demo4"/>

## 不同大小

#### 通過設置 _size_ 屬性來適應不同大小

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="input" demoName="demo5"/>

## 組合輸入

#### 可通過插槽完成組合輸入，插槽名默認為 _#btn_

<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="input" demoName="demo6"/>

## 密碼類型

#### 密碼類型的輸入框，可通過 _showPassword_ 來啟用是否開啟顯示密碼

<div class="componetnsBox">
  <demo7/>
</div>
<preview compName="input" demoName="demo7"/>

## 自定義 Focus 顏色

#### 通過 _focusColor_ 屬性自定義 input 在獲取焦點後的顏色

<div class="componetnsBox">
  <demo8/>
</div>
<preview compName="input" demoName="demo8"/>

## Attributes 參數

<Attributes/>
<br/>

## Event 事件

<Event/>
<br/>
