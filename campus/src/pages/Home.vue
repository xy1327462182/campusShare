<template>
  <div class="home">
    <Head></Head>
    <Nav></Nav>

    <div class="content">
      <el-row>
        <el-col :md="6">
          <div class="left_card">
            <div class="message_card">
              <div class="message_card_head">站内信息统计</div>
              <div class="message_card_body">
                <div class="card_list_item">
                  <span class="card_list_item_title">今日浏览:</span
                  ><span class="card_list_item_data">{{siteCountInfo.views}}</span>
                </div>
                <div class="card_list_item">
                  <span class="card_list_item_title">帖子:</span
                  ><span class="card_list_item_data">{{siteCountInfo.posts}}</span>
                </div>
                <div class="card_list_item">
                  <span class="card_list_item_title">会员:</span
                  ><span class="card_list_item_data">{{siteCountInfo.members}}</span>
                </div>
              </div>
            </div>

            <div class="order_card">
              <div class="message_card_head">TOP排行</div>
              <div class="order_card_body">
                <ul>
                  <router-link 
                    
                    tag="li" 
                    class="list_item"
                    v-for="(item,index) in orderInfo.list"
                    :key="index"
                    :to="'/detail?id=' + item.id" 
                  >
                    {{index+1}}.{{item.name}}
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :md="18">
          <div class="content_main">
            <div class="content_main_title">
              <span class="el-icon-s-grid title_icon"></span>
              <p class="title_txt">本周推荐</p>
            </div>
            <div class="content_main_list">

              <div class="zone_item" v-for="item in zoneInfo.list" :key="item.typeid">
                <div class="zone_item_title">
                  <div class="zone_item_name_wrap">
                    <h4>{{item.typename}}</h4>
                    <span class="hidden-xs-only">{{item.typeid}}</span>
                  </div>
                  <div class="zone_item_more_wrap" @click="goOthers(item.typeid)">
                    <span class="more_line"></span>
                    <i class="el-icon-caret-right"></i>
                    <span class="more_txt">more</span>
                  </div>
                </div>
                <div class="zone_item_content">
                  <router-link
                    class="zone_item_content_list_item"
                    tag="div"
                    v-for="post in item.items"
                    :key="post.id"
                    :to="'/detail?id=' + post.id"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span>{{post.title}}</span>
                    </div>
                    <div class="news_date">
                      <span>{{post.create_time}}</span>
                    </div>
                  </router-link>

                  <!-- <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link> -->

                </div>
              </div>

              <!-- <div class="zone_item">
                <div class="zone_item_title">
                  <div class="zone_item_name_wrap">
                    <h4>生活专区</h4>
                    <span class="hidden-xs-only">daily</span>
                  </div>
                  <div class="zone_item_more_wrap">
                    <span class="more_line"></span>
                    <i class="el-icon-caret-right"></i>
                    <span class="more_txt">more</span>
                  </div>
                </div>
                <div class="zone_item_content">
                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>
                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>

                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>

                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>

                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>
                </div>
              </div> -->

              <!-- <div class="zone_item">
                <div class="zone_item_title">
                  <div class="zone_item_name_wrap">
                    <h4>娱乐专区</h4>
                    <span class="hidden-xs-only">entertainment</span>
                  </div>
                  <div class="zone_item_more_wrap">
                    <span class="more_line"></span>
                    <i class="el-icon-caret-right"></i>
                    <span class="more_txt">more</span>
                  </div>
                </div>
                <div class="zone_item_content">
                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>
                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>

                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>

                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>

                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>
                </div>
              </div> -->

              <!-- <div class="zone_item">
                <div class="zone_item_title">
                  <div class="zone_item_name_wrap">
                    <h4>其他</h4>
                    <span class="hidden-xs-only">others</span>
                  </div>
                  <div class="zone_item_more_wrap">
                    <span class="more_line"></span>
                    <i class="el-icon-caret-right"></i>
                    <span class="more_txt">more</span>
                  </div>
                </div>
                <div class="zone_item_content">
                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>
                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>

                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>

                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>

                  <router-link
                    to="/login"
                    class="zone_item_content_list_item"
                    tag="div"
                  >
                    <div class="news_name">
                      <div class="circle"></div>
                      <span
                        >但是 沙发斯蒂芬 防守打法撒旦法 但是asf sf s sf aa af
                        affaf fsf sf</span
                      >
                    </div>
                    <div class="news_date">
                      <span>(2020-12-90)</span>
                    </div>
                  </router-link>
                </div>
              </div> -->
            </div>
          </div>
        </el-col>
      </el-row>
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
      siteCountInfo: {},//站内信息
      orderInfo: {},//排行信息
      zoneInfo: {},//专区信息
    };
  },
  components: {
    Head,
    Nav,
    Footer,
  },
  methods: {
    //获取信息数据
    getData() {
      if (!this.siteCountInfo.members) {
        //发送请求 获取站内统计信息
        //axios...
        //此处模拟数据
        this.siteCountInfo = {
          members: 899,
          posts: 1909,
          views: 12423
        }
      }
      if (!this.orderInfo.list) {
        //发送请求 获取排行信息
        //axios...
        //此处模拟数据
        this.orderInfo = {
          list: [
          {
            id: '1212313',
            name: '求购考研资料'
          },
          {
            id: '25345354',
            name: '求黑马程序员java'
          },
          {
            id: '2534zdfs5354',
            name: '求数据可设局'
          },
          {
            id: 'asd34zdfs5354',
            name: '出手机iphone'
          },
        ]}
      }
      if (!this.zoneInfo.list) {
        //发送请求 获取排行信息
        //axios...
        //此处模拟数据
        this.zoneInfo = {
          list: [
            {
              typeid: 'study',
              typename: '学习专区',
              items: [
                {
                  id:'asdwaserwdasasasDxsvfsrfvsrfs',
                  title:'黑马java教程',
                  create_time: '2020-02-02'
                },
                {
                  id:'asderwdasasasDxsvfsrfvsrfs',
                  title:'黑马php教程',
                  create_time: '2020-02-03'
                },
                {
                  id:'123derwdasasasDxsvfsrfvsrfs',
                  title:'课堂前端视频资源',
                  create_time: '2020-02-03'
                },
                {
                  id:'7809873derwdasasasDxsvfsrfvsrfs',
                  title:'张宇考研真题',
                  create_time: '2020-02-04'
                },
                {
                  id:'azzx09873derwdasasasDxsvfsrfvsrfs',
                  title:'数学政治考研',
                  create_time: '2020-02-04'
                },
              ]
            },
            {
              typeid: 'daily',
              typename: '生活专区',
              items: [
                {
                  id:'asdwaserwdasasasDxsvfsrfvsrfs',
                  title:'黑马java教程',
                  create_time: '2020-02-02'
                },
                {
                  id:'asderwdasasasDxsvfsrfvsrfs',
                  title:'黑马php教程',
                  create_time: '2020-02-03'
                },
                {
                  id:'123derwdasasasDxsvfsrfvsrfs',
                  title:'课堂前端视频资源',
                  create_time: '2020-02-03'
                },
                {
                  id:'7809873derwdasasasDxsvfsrfvsrfs',
                  title:'张宇考研真题',
                  create_time: '2020-02-04'
                },
                {
                  id:'azzx09873derwdasasasDxsvfsrfvsrfs',
                  title:'数学政治考研',
                  create_time: '2020-02-04'
                },
              ]
            },
            {
              typeid: 'entertainment',
              typename: '娱乐专区',
              items: [
                {
                  id:'asdwaserwdasasasDxsvfsrfvsrfs',
                  title:'黑马java教程',
                  create_time: '2020-02-02'
                },
                {
                  id:'asderwdasasasDxsvfsrfvsrfs',
                  title:'黑马php教程',
                  create_time: '2020-02-03'
                },
                {
                  id:'123derwdasasasDxsvfsrfvsrfs',
                  title:'课堂前端视频资源',
                  create_time: '2020-02-03'
                },
                {
                  id:'7809873derwdasasasDxsvfsrfvsrfs',
                  title:'张宇考研真题',
                  create_time: '2020-02-04'
                },
                {
                  id:'azzx09873derwdasasasDxsvfsrfvsrfs',
                  title:'数学政治考研',
                  create_time: '2020-02-04'
                },
              ]
            },
            {
              typeid: 'others',
              typename: '其他',
              items: [
                {
                  id:'asdwaserwdasasasDxsvfsrfvsrfs',
                  title:'黑马java教程',
                  create_time: '2020-02-02'
                },
                {
                  id:'asderwdasasasDxsvfsrfvsrfs',
                  title:'黑马php教程',
                  create_time: '2020-02-03'
                },
                {
                  id:'123derwdasasasDxsvfsrfvsrfs',
                  title:'课堂前端视频资源',
                  create_time: '2020-02-03'
                },
                {
                  id:'7809873derwdasasasDxsvfsrfvsrfs',
                  title:'张宇考研真题',
                  create_time: '2020-02-04'
                },
                {
                  id:'azzx09873derwdasasasDxsvfsrfvsrfs',
                  title:'数学政治考研',
                  create_time: '2020-02-04'
                },
              ]
            }
          ]
        }
      }
    },
    //去更多页
    goOthers(id) {
      this.$router.push({
        path: '/more',
        query: {
          id: id
        }
      })
    }
  },
  mounted() {
    //获取信息数据
    this.getData()
  }
};
</script>

<style lang="less" scoped>
.home {
  .content {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 20px;
    .left_card {
      padding-right: 30px;
    }
    .message_card {
      width: 100%;
      background-color: #bbc1b1;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      border-radius: 4px;
      padding-top: 20px;
      padding-bottom: 30px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      .message_card_head {
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .message_card_body {
        color: #333;
        .card_list_item {
          margin: 8px 0;
          .card_list_item_title {
            display: inline-block;
            text-align: right;
          }
          .card_list_item_data {
            width: 30%;
            padding-left: 12px;
            display: inline-block;
            box-sizing: border-box;
          }
        }
      }
    }
    .order_card {
      width: 100%;
      background-color: #cc5e60;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      border-radius: 4px;
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      .message_card_head {
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .order_card_body {
        padding-left: 25px;
        padding-right: 20px;
        padding-bottom: 20px;
        max-width: 70%;
        .list_item {
          margin: 10px 0;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
          &:hover{
            color: #448bdc;
          }
        }
      }
    }
    .content_main {
      width: 100%;
      .content_main_title {
        height: 60px;
        background-color: #bbc1b1;
        border-radius: 10px;
        display: flex;
        align-items: center;
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
      .content_main_list {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin-bottom: 30px;
        .zone_item {
          // width: 430px;
          width: 48%;
          margin-top: 20px;
          .zone_item_title {
            height: 36px;
            padding-right: 15px;
            border-left: 8px solid #878f2c;
            margin: 20px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .zone_item_name_wrap {
              display: flex;
              justify-content: space-between;
              align-items: center;
              h4 {
                font-weight: 600;
                margin-left: 20px;
              }
              span {
                font-size: 14px;
                margin-left: 25px;
              }
            }
            .zone_item_more_wrap {
              display: flex;
              justify-content: space-between;
              align-items: center;
              cursor: pointer;
              .more_line {
                width: 2px;
                height: 20px;
                background-color: #878f2c;
              }
              .el-icon-caret-right {
                color: #d47d7d;
                font-size: 26px;
                margin-left: 12px;
              }
              .more_txt {
                color: #d47d7d;
                margin-left: 10px;
              }
            }
          }
          .zone_item_content {
            border: 1px solid #ccc;
            border-radius: 12px;
            padding: 20px;
            .zone_item_content_list_item {
              cursor: pointer;
              line-height: 34px;
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              justify-content: space-between;
              :hover{
                color: #448bdc;
              }
              .news_name {
                display: flex;
                align-items: center;
                width: 74%;
                .circle {
                  width: 12px;
                  height: 12px;
                  background-color: #5f5f5f;
                  border-radius: 50%;
                }
                span {
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  margin-left: 8px;
                }
              }
              .news_date {
                width: 25%;
                margin-left: 2%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
  
}
</style>
