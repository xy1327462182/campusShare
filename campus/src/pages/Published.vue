<template>
  <div class="more">
    <Head></Head>
    <Nav></Nav>

    <div class="content">
      <div class="content_main">
        <div class="content_main_title">
          <span class="el-icon-document-checked title_icon"></span>
          <p class="title_txt">我的发布</p>
        </div>

        <div class="mobile_table hidden-sm-and-up">
          <div class="mobile_item">
            <el-image :src="url"></el-image>
            <p class="mobile_item_title">
              撒旦法撒旦法大师傅的撒噶尔阿发山支大哥发呢大锅饭
            </p>
            <div class="mobile_item_date_wrap">
              <span class="mobile_item_date">2020-02-09</span>
            </div>
            <div class="mobile_item_fun_wrap">
              <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            </div>
          </div>

          <div class="mobile_item">
            <el-image :src="url"></el-image>
            <p class="mobile_item_title">
              撒旦法撒旦法大师傅的撒噶尔阿发山支大哥发呢大锅饭
            </p>
            <div class="mobile_item_date_wrap">
              <span class="mobile_item_date">2020-02-09</span>
            </div>
            <div class="mobile_item_fun_wrap">
              <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            </div>
          </div>

          <div class="mobile_item">
            <el-image :src="url"></el-image>
            <p class="mobile_item_title">
              撒旦法撒旦法大师傅的撒噶尔阿发山支大哥发呢大锅饭
            </p>
            <div class="mobile_item_date_wrap">
              <span class="mobile_item_date">2020-02-09</span>
            </div>
            <div class="mobile_item_fun_wrap">
              <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            </div>
          </div>
        </div>

        <el-table
          class="hidden-xs-only"
          :data="tableData"
          border
          stripe
          :header-row-style="tdHeight"
          :row-style="tdHeight"
        >
          <el-table-column prop="date" label="编号" width="120">
          </el-table-column>
          <el-table-column prop="name" label="图片" width="200">
          </el-table-column>
          <el-table-column prop="name" label="标题"> </el-table-column>
          <el-table-column prop="name" label="描述"> </el-table-column>
          <el-table-column prop="name" label="发布人" width="180">
          </el-table-column>
          <el-table-column prop="address" label="发布时间"> </el-table-column>
          <el-table-column label="操作" width="160">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>

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
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      tdHeight: {
        height: "60px",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  components: {
    Head,
    Nav,
    Footer,
  },
  methods: {
    handleEdit() {

    },
    handleDelete() {

    }
  },
};
</script>

<style lang="less" scoped>
.more {
  .content {
    padding-top: 20px;
    margin-bottom: 50px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .content_main {
      width: 85%;
      .content_main_title {
        height: 60px;
        background-color: #bbc1b1;
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
      .mobile_table {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .mobile_item {
          width: 48%;
          background-color: #eee;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
          .mobile_item_title {
            color: #333;
            font-size: 14px;
            line-height: 16px;
            padding: 10px;
          }
          .mobile_item_date_wrap {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 5px 10px;
            .mobile_item_date {
              color: #666;
              font-size: 15px;
            }
          }
          .mobile_item_fun_wrap{
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        }
      }
      .table_pagination {
        margin-top: 40px;
        padding-left: 30px;
        padding-right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>