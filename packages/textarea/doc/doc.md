<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import Attributes from './Attributes.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Textarea 文本域

#### 用於段落文本的填寫或輸入

<br/>

## 基本使用

#### Textarea 文本域基本使用。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="textarea" demoName="demo1"/>

## 禁用狀態

#### 通過 _disabled_ 啟用。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="textarea" demoName="demo2"/>

## 限制長度

#### 通過 _maxlength_ 啟用。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="textarea" demoName="demo3"/>

## 自定義 Focus 顏色

#### 通過 _focusColor_ 屬性自定義 input 在獲取焦點後的顏色。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="textarea" demoName="demo4"/>

## Attributes 參數

<Attributes/>
<br/>

## Event 事件

<Event/>
<br/>
