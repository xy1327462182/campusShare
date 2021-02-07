<template>
  <div class="more">
    <Head></Head>
    <Nav></Nav>

    <div class="content">
      <div class="content_main">

        <div class="content_main_title">
          <span class="el-icon-edit title_icon"></span>
          <p class="title_txt">发布信息</p>
        </div>

        <div class="notice_main">

          <el-card class="box_card">
            <div slot="header" class="clearfix">
              <span class="card_title">信息发布规则</span>
              <div class="card_publish_user_wrap">
                <span class="publish_user">阿斯蒂芬</span>
                <span class="card_title_line"></span>
                <span class="publish_date">2020-09-09</span>
              </div>
            </div>
            <ul>
              <li class="notice_list_item">2354235</li>
              <li class="notice_list_item">2354235</li>
              <li class="notice_list_item">2354235</li>
             
            </ul>
          </el-card>

          <el-card class="box_card">
            <div slot="header" class="clearfix">
              <span class="card_title">信息发布规则</span>
              <div class="card_publish_user_wrap">
                <span class="publish_user">阿斯蒂芬</span>
                <span class="card_title_line"></span>
                <span class="publish_date">2020-09-09</span>
              </div>
            </div>
            <ul>
              <li class="notice_list_item">2354235</li>
              <li class="notice_list_item">2354235</li>
              <li class="notice_list_item">2354235</li>
             
            </ul>
          </el-card>

        </div>

        <div class="table_pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="300"
            :pager-count="5"
          >
          </el-pagination>
        </div>
        
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default {
  name: "Home",
  data() {
    return {
      sort: "",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      tdHeight: {
        height: "60px",
      },
    };
  },
  components: {
    Head,
    Nav,
    Footer,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.more {
  .content {
    padding-top: 20px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .content_main {
      width: 85%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      .content_main_title {
        width: 100%;
        height: 60px;
        background-color: #bfceaa;
        border-radius: 10px;
        display: flex;
        align-items: center;
        margin: 30px 0;
        .title_icon {
          font-weight: 700;
          font-size: 24px;
          margin-left: 20px;
          margin-right: 24px;
        }
        .title_txt {
          font-weight: 600;
          font-size: 20px;
        }
      }
      .notice_main{
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        .box_card{
          width: 740px;
          max-width: 90%;
          border-radius: 12px;
          margin-bottom: 50px;
          .card_title{
            font-size: 20px;
            font-weight: 600;
          }
          .card_publish_user_wrap{
            float: right;
            color: #666;
            display: flex;
            align-items: center;
            .card_title_line{
              display: inline-block;
              width: 2px;
              height: 17px;
              background-color: #666;
              margin: 0 10px;
            }
          }
          .notice_list_item{
            font-size: 18px;
            line-height: 36px;
          }
        }
      }
    }
  }
}
</style>