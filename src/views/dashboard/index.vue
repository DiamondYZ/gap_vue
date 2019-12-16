<template>
  <main class="site-wrapper">

    <div class="pt-table desktop-768">

      <div class="pt-tablecell page-home relative"
           style="background-image: url(../../images/p.jpg);background-position:center;background-size: cover;">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
              <div class="page-title  home text-center">
						  <span class="heading-page">天龙中药材种植管理系统
						  </span>
                <p class="mt20">TianLong GAP</p>
              </div>

              <div class="hexagon-menu clear">
                <div class="hexagon-item">
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-content" @click="gotoMenu('/company/staff-list')">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fa fa-universal-access"></i>
										</span>
										<span class="title">员工管理</span>
									</span>
                    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        fill="#1e2530"></path>
                    </svg>
                  </div>
                </div>
                <div class="hexagon-item">
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-content" @click="gotoMenu('/resourceManagement/product')">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fa fa-bullseye"></i>
										</span>
										<span class="title">产品</span>
									</span>
                    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        fill="#1e2530"></path>
                    </svg>
                  </div>
                </div>
                <div class="hexagon-item">
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-content" @click="gotoMenu('/warehousingManagement/stock-detail')">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fa fa-braille"></i>
										</span>
										<span class="title">库存管理</span>
									</span>
                    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        fill="#1e2530"></path>
                    </svg>
                  </div>
                </div>
                <div class="hexagon-item">
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-content" @click="gotoMenu('/knowledgeBaseManagement/sop-plant')">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fa fa-id-badge"></i>
										</span>
										<span class="title">知识库</span>
									</span>
                    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        fill="#1e2530"></path>
                    </svg>
                  </div>
                </div>
                <div class="hexagon-item">
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-content" @click="gotoMenu('/resourceManagement/equipment')">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fa fa-life-ring"></i>
										</span>
										<span class="title">设备</span>
									</span>
                    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        fill="#1e2530"></path>
                    </svg>
                  </div>
                </div>
                <div class="hexagon-item">
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <a href="https://sugar.baidubce.com/dashboard/c2983713d1250acefe383e4d728c2180" target="_blank" class="hex-content">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fa fa-clipboard"></i>
										</span>
										<span class="title">综合看板</span>
									</span>
                    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        fill="#1e2530"></path>
                    </svg>
                  </a>
                </div>
                <div class="hexagon-item">
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="hex-content" @click="gotoMenu('/resourceManagement/production-base')">
									<span class="hex-content-inner">
										<span class="icon">
											<i class="fa fa-map-signs"></i>
										</span>
										<span class="title">生产基地</span>
									</span>
                    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                        fill="#1e2530"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import router from "../../router";

  export default {
    data() {
      return {}
    },
    components: {},
    computed: {},
    created() {

    },
    mounted() {

    },
    methods: {
      gotoMenu(data) {
        //跳转到上一次浏览的页面  this.$router.go(-1)
        // this.$router.go(-1)

        //指定跳转的地址 this.$router.replace('/menu')
        // this.$router.replace('/menu')

        //指定跳转的路由的名字下 this.$router.replace({name:'menu'})
        // this.$router.replace({name:'menu'})

        //通过push进行跳转
        this.$router.push(data)
      }
    }
  }
</script>

<style scoped src="../../styles/all.min.css"></style>
<style scoped src="../../styles/bootstrap.min.css"></style>
<style scoped src="../../styles/style.css"></style>
