<template>
  <div class="more">
    <Head></Head>
    <Nav></Nav>

    <div class="content">
      <div class="content_main">
        
        <div class="content_main_title">
          <span class="el-icon-document title_icon"></span>
          <p class="title_txt">出一套考研资料真题</p>
        </div>

        <div class="detail_wrap">
          <div class="detail_img_wrap">
            <el-image :src="url"></el-image>
          </div>
          <div class="detail_info_wrap">
            <el-form
              label-position="right"
              label-width="80px"
            >
              <el-form-item label="标题：">
                <p class="detail_title">这是一个标题内容的内容</p>
              </el-form-item>
              <el-form-item label="描述：">
                <p>这是一个描述内容这是一个描述内容这是一个描述内容这是个描述内容这个描述内容这个描述内容这个描述内容这个描述内容这个描述内容这个描述内容这个描述内容这个描述内容这一个描述内容这是一个描述内容这是一个描述内容这是一个描述内容</p>
              </el-form-item>
              <el-form-item label="昵称：">
                <p>这是昵称</p>
              </el-form-item>
              <el-form-item label="手机号：">
                <p>158515555555</p>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div class="comment_wrap">
          <input type="text" class="comment_txt" placeholder="请发表评论"  />
          <el-button type="primary">评论</el-button>
        </div>

        <div class="comment_list_wrap">
          <ul>
            <li>

              <div class="first_floor">
                <div class="user_wrap">
                  <span class="floor_createor">楼主</span>黄大大
                </div>
                <p>：想要的同学抓紧了，加油考研人。</p>
                <span class="date">(2020-09-09 20:00:09)</span>
                <span class="replay_txt">回复</span>
              </div>

              <div class="floor_item">
                <div class="item_user_wrap">
                  <div class="user_wrap">追分特</div>
                  <span class="replay_txt">回复</span>
                  <div class="user_wrap">
                    <span class="floor_createor">楼主</span>黄大大
                  </div>
                </div>
                <p>：我想要，不知道楼主有没有时间</p>
                <span class="date">(2020-09-09 20:00:09)</span>
                <span class="replay_txt">回复</span>
              </div>

            </li>

            <li>

              <div class="first_floor">
                <div class="user_wrap">
                  <span class="floor_createor">楼主</span>黄大大
                </div>
                <p>：想要的同学抓紧了，加油考研人。</p>
                <span class="date">(2020-09-09 20:00:09)</span>
                <span class="replay_txt">回复</span>
              </div>

              <div class="floor_item">
                <div class="item_user_wrap">
                  <div class="user_wrap">追分特</div>
                  <span class="replay_txt">回复</span>
                  <div class="user_wrap">
                    <span class="floor_createor">楼主</span>黄大大
                  </div>
                </div>
                <p>：我想要，不知道楼主有没有时间</p>
                <span class="date">(2020-09-09 20:00:09)</span>
                <span class="replay_txt">回复</span>
              </div>

            </li>
          </ul>

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
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
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
      .detail_wrap {
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
        display: flex;
        justify-content: space-around;
        .detail_img_wrap {
          width: 30%;
          .el-image {
            border-radius: 8px;
          }
        }
        .detail_info_wrap {
          width: 68%;
          .detail_title{
            font-weight: 600;
          }
          .el-form-item__label {
            font-size: 18px!important;
          }
          p{
            font-size: 18px;
          }
        }
      }
      .comment_wrap{
        width: 100%;
        padding: 12px 30px;
        border-top: 2px solid #bbbbbb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .el-button{
          width: 140px;
          height: 50px;
          margin-left: 50px;
        }
        .comment_txt{
          height: 50px;
          border: 1px solid #ccc;
          border-radius: 6px;
          width: 100%;
          font-size: 16px;
          padding: 4px 16px;
        }
      }
      .comment_list_wrap{
        width: 100%;
        background-color: #bfceaa;
        border-radius: 8px;
        padding: 30px 50px;
        li{
          border-bottom: .5px solid #ddd;
          padding-top: 8px;
          padding-bottom: 8px;
          .first_floor{
            display: flex;
            align-items: center;
            .user_wrap{
              font-size: 18px;
              .floor_createor{
                color: #e43d40;
                font-size: 14px;
                vertical-align: top;
                margin-right: 4px;
              }
            }
            p{
              font-size: 18px;
              margin-right: 30px;
            }
            .date{
              color: #333;
              font-size: 16px;
              margin-right: 30px;
            }
            .replay_txt{
              color: #8b757e;
              font-size: 16px;
            }
          }
          .floor_item{
            display: flex;
            align-items: center;
            margin: 7px 0;
            .item_user_wrap{
              display: flex;
              align-items: center;
              .user_wrap{
                font-size: 18px;
                .floor_createor{
                  color: #e43d40;
                  font-size: 14px;
                  vertical-align: top;
                  margin-right: 4px;
                }
              }
              .replay_txt{
                color: #333;
                margin: 0 10px;
              }
            }
            p{
              font-size: 18px;
              margin-right: 30px;
            }
            .date{
              color: #333;
              font-size: 16px;
              margin-right: 30px;
            }
            .replay_txt{
              color: #8b757e;
              font-size: 16px;
            }
          }
        }
        .table_pagination{
          margin-top: 30px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      }
    }
  }
}
</style>