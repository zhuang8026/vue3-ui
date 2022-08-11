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
import Options from './options.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Select 下拉框

#### 使用下拉的形式選擇需要的數據

<br/>

## 基本使用

#### select 下拉框基本使用示例,需要一個主要的 _options_ 參數

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="select" demoName="demo1"/>

## 禁用狀態

#### 可以設置 _disabled_ 屬性來實現禁用狀態

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="select" demoName="demo2"/>

## 禁用選項

#### 可以針對 _options_ 下某個選項來添加 _disabled_ 屬性實現禁用選項

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="select" demoName="demo3"/>

## 匹配不同格式的數據

#### 默認 _options_ 接收 _label_ 和 _value_ 作為顯示和值綁定，你可以根據 _labelFiled_ 和 _valueFiled_ 來重新確定字段的綁定，更方便的匹配不同格式的數據。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="select" demoName="demo4"/>

## 不同大小

#### 通過設置 _size_ 屬性來顯示不同大小的 select

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="select" demoName="demo5"/>

## 可過濾搜索

#### 通過設置 _searchable_ 屬性來開啟過濾搜索

<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="select" demoName="demo6"/>

## 自定義寬高

#### 通過設置 _width_ 和 _height_ 自定義寬高

<div class="componetnsBox">
  <demo7/>
</div>
<preview compName="select" demoName="demo7"/>

## 多選

#### 通過設置 _multiple_ 屬性來開啟多選

<div class="componetnsBox">
  <demo8/>
</div>
<preview compName="select" demoName="demo8"/>

## Attributes 參數

<Attributes/>
<br/>

## options API

<Options/>
<br/>

## Event 事件

<Event/>
<br/>
