<template>
  <div class="home">
    <div class="header hidden-xs-only">
      <div class="top_bar">
        <el-row>
          <el-col :xs="24" :sm="16" :md="10" :lg="10">
            <Logo></Logo>
          </el-col>
          <el-col :md="8" :lg="8" class="hidden-sm-and-down">
            <div class="search_wrap">
              <el-input placeholder="搜索" prefix-icon="el-icon-search">
              </el-input>
              <el-button type="primary">搜索</el-button>
            </div>
          </el-col>
          <el-col :sm="8" :md="6" :lg="6" class="hidden-xs-only">
            <div class="login_wrap">
              <router-link to="/login" class="login_link">[登录]</router-link>
              <router-link to="/login" class="login_link">[注册]</router-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="header_mobile hidden-sm-and-up">
      <el-image :src="src" class="logo_mobile"></el-image>
      <span class="logo_mobile_txt">资源共享平台</span>
    </div>
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
                  ><span class="card_list_item_data">900</span>
                </div>
                <div class="card_list_item">
                  <span class="card_list_item_title">帖子:</span
                  ><span class="card_list_item_data">9020</span>
                </div>
                <div class="card_list_item">
                  <span class="card_list_item_title">会员:</span
                  ><span class="card_list_item_data">90</span>
                </div>
              </div>
            </div>

            <div class="order_card">
              <div class="message_card_head">TOP排行</div>
              <div class="order_card_body">
                <ul>
                  <li>
                    1.阿萨德阿萨德安阿萨德阿萨德奥德赛阿萨德阿萨德阿萨的抚
                  </li>
                  <li>2.阿德安抚</li>
                  <li>3.啊啊开口安抚</li>
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
              <div class="zone_item">
                <div class="zone_item_title">
                  <div class="zone_item_name_wrap">
                    <h4>学习专区</h4>
                    <span>study</span>
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
              </div>

              <div class="zone_item">
                <div class="zone_item_title">
                  <div class="zone_item_name_wrap">
                    <h4>生活专区</h4>
                    <span>daily</span>
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
              </div>

              <div class="zone_item">
                <div class="zone_item_title">
                  <div class="zone_item_name_wrap">
                    <h4>娱乐专区</h4>
                    <span>entertainment</span>
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
              </div>

              <div class="zone_item">
                <div class="zone_item_title">
                  <div class="zone_item_name_wrap">
                    <h4>其他</h4>
                    <span>others</span>
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
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <footer>
      <p>©2021 HuangZhen.All rights reserved.</p>
      <div class="empty_line"></div>
      <p>豫ICP备20006661号</p>
    </footer>
  </div>
</template>

<script>
import src from "@/assets/logo.png";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

export default {
  name: "Home",
  data() {
    return {
      src: src,
    };
  },
  components: {
    Logo,
    Nav,
  },
  methods: {
    asd() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  .header {
    height: 165px;
    background-color: #bbc1b1;
    .top_bar {
      height: 165px;
      padding-left: 35px;
      padding-right: 35px;
      .search_wrap {
        height: 165px;
        padding-bottom: 16px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        .el-button {
          background-color: #a75422;
          border-color: #a3d0fd;
          margin-left: 20px;
        }
      }
      .login_wrap {
        height: 165px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .login_link {
          color: #666;
          font-size: 16px;
          margin-right: 20px;
        }
      }
    }
  }
  .header_mobile {
    width: 100%;
    height: 70px;
    background-color: #bbc1b1;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .logo_mobile {
      width: 65px;
      height: 65px;
      margin-right: 10px;
    }
    .logo_mobile_txt {
      font-size: 17px;
      color: #cc5e60;
      font-weight: 550;
    }
  }
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
      .message_card_head {
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .message_card_body {
        padding-right: 50px;
        padding-bottom: 20px;
        box-sizing: border-box;
        color: #333;
        .card_list_item {
          margin: 8px 0;
          .card_list_item_title {
            width: 70%;
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
        li {
          margin: 10px 0;
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .content_main {
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
          max-width: 100%;
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
            padding: 20px 24px;
            .zone_item_content_list_item {
              cursor: pointer;
              line-height: 34px;
              display: flex;
              align-items: center;
              .news_name {
                // width: 280px;
                display: flex;
                align-items: center;
                .circle {
                  width: 12px;
                  height: 12px;
                  background-color: #5f5f5f;
                  border-radius: 50%;
                }
                span {
                  max-width: 250px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  margin-left: 10px;
                }
              }
              .news_date {
                width: 105px;
              }
            }
          }
        }
      }
    }
  }
  footer {
    width: 100%;
    height: 90px;
    background-color: #ebede9;
    font-size: 14px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    .empty_line {
      height: 10px;
    }
  }
}
</style>
