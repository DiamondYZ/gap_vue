<template>
  <!--<div class="dashboard-editor-container">-->
  <!--<github-corner class="github-corner" />

  <panel-group @handleSetLineChartData="handleSetLineChartData" />

  <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
    <line-chart :chart-data="lineChartData" />
  </el-row>

  <el-row :gutter="32">
    <el-col :xs="24" :sm="24" :lg="8">
      <div class="chart-wrapper">
        <raddar-chart />
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="8">
      <div class="chart-wrapper">
        <pie-chart />
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="8">
      <div class="chart-wrapper">
        <bar-chart />
      </div>
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
      <transaction-table />
    </el-col>
    <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
      <todo-list />
    </el-col>
    <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
      <box-card />
    </el-col>
  </el-row>-->
  <!--</div>-->
  <div class="middle" :style="backgroundDiv">
<!--    <ul></ul>-->
<!--    <ul class="menu">-->
<!--      <li class="menu-cell" @click="test('11111')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">111111</div>-->
<!--      </li>-->
<!--      <li class="menu-cell" @click="test('22222')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">22222</div>-->
<!--      </li>-->
<!--      <li class="menu-cell" @click="test('33333')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">33333</div>-->
<!--      </li>-->
<!--      <li class="menu-cell" @click="test('4444')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">4444</div>-->
<!--      </li>-->
<!--      <li class="menu-cell" @click="test('555555')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">555555</div>-->
<!--      </li>-->
<!--      <li class="menu-cell" @click="test('666666')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">666666</div>-->
<!--      </li>-->
<!--      <li class="menu-cell" @click="test('77777')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">77777</div>-->
<!--      </li>-->
<!--      <li class="menu-cell" @click="test('88888')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">88888</div>-->
<!--      </li>-->
<!--      <li class="menu-cell" @click="test('9999')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">9999</div>-->
<!--      </li>-->
<!--      <li class="menu-cell" @click="test('101010')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">101010</div>-->
<!--      </li>-->
<!--      <li class="menu-cell" @click="test('11111')">-->
<!--        <img class="menu-cell__image" src="/assets/bg.png">-->
<!--        <div class="menu-cell__title">1111</div>-->
<!--      </li>-->
<!--      <li class="menu-cell menu__placeholder"></li>-->
<!--    </ul>-->
  </div>
</template>

<script>
  import RaddarChart from './components/RaddarChart'
  import TransactionTable from './components/TransactionTable'
  import TodoList from './components/TodoList'

  const lineChartData = {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130]
    }
  }

  export default {
    name: 'DashboardAdmin',
    components: {
      RaddarChart,
      TransactionTable,
      TodoList
    },
    data() {
      return {
        lineChartData: lineChartData.newVisitis,
        backgroundDiv: {
          backgroundImage: 'url(' + require('../../../assets/bg.jpg') + ')'
        }
      }
    },
    methods: {
      handleSetLineChartData(type) {
        this.lineChartData = lineChartData[type]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;

    .github-corner {
      position: absolute;
      top: 0px;
      border: 0;
      right: 0;
    }

    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }

  .middle {
    height: 90vh;
    width: 100%;
    background: no-repeat fixed center top;
    background-size: cover;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0;
    -webkit-transform: translateY(34.375px);
    transform: translateY(34.375px);
  }
  .menu-cell {
    flex: 0 1 150px;
    max-width: 150px;
    height: 88.5px;
    margin: 30px 5.5px 25px;
    position: relative;
    padding: 0.5em;
    text-align: center;
    background: #0a7993;
    z-index: 1;
  }
  .menu-cell::before {
    background: #0a7993;
    -webkit-transform: scale(1.055);
    transform: scale(1.055);
  }
  .menu-cell::after {
    background: #3ea0eb;
    opacity: 0.5;
    transition: opacity 350ms;
  }
  .menu-cell::before, .menu-cell::after {
    content: '';
  }
  .menu-cell:hover::before {
    background: #0a7993;
    -webkit-transform: scale(1.055);
    transform: scale(1.055);
  }
  .menu-cell:hover::after {
    opacity: 0.2;
    transition: opacity 350ms;
  }
  .menu__placeholder {
    display: none;
    opacity: 0;
    width: 250px;
    margin: 0 12.5px;
  }
  .menu-cell__image {
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    border-style: none;
  }
  .menu-cell__image{
    width: 70px;
    height: 70px;
    margin-top: -10px;
  }
  .menu-cell__title {
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    word-break: break-word;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 1.35em;
    transition: opacity 350ms;
  }
  .menu-cell::before, .menu-cell::after{
    top: -50%;
    left: 0;
    width: 100%;
    height: 200%;
    display: block;
    position: absolute;
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
  }

</style>
