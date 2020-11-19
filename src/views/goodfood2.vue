<template>
    <div class="goodfood2">
      <div class="goodfood2-banner"><img src="../assets/img/goodfoodbanner.png" alt=""></div>
      <div class="goodfood2-content">
          <div class="goodfood2-content-left">
              <p><img src="../assets/img/lication.png" alt="">当前位置：<a href="/">首页</a>>评选标准</p>
              <ul class="goodfood2-content-list">
                  <li><router-link :to="{name:'goodfood1'}">评选委员会</router-link></li>
                  <li>评选标准</li>
                  <li><router-link :to="{name:'goodfood3'}">获奖企业</router-link></li>
              </ul>
          </div>
          <div class="goodfood2-content-right">
              <p>中华传统好食品评选标准</p>
              <div class="goodfood2-content-xq" style="width:100%">
               <el-table
              :data="tableData"
              :span-method="objectSpanMethod">
              <el-table-column
                prop="biaozhun1"
                width="200%"
                label="一级指标">
              </el-table-column>
               <el-table-column
                prop="biaozhun2"
                
                width="220%"
                label="二级指标">
              </el-table-column>
              <el-table-column label="评价标准" >
                <el-table-column
                  prop="a"
                  width="240%"
                  label="A级" >
                </el-table-column>
                <el-table-column 
                 width="250%"
                 prop="c"
                 label="C级">
            </el-table-column>
          </el-table-column>
               </el-table>
               <el-table 
               :data="tableData2"
               border
               id="tableData2"
               :show-header="false"
               :span-method="objectSpanMethod2">
                 <el-table-column
                  prop="biaozhun1"
                  width="200%"
                  label="市场价值">
                 </el-table-column>
                  <el-table-column
                  prop="biaozhun2"  
                  width="220%"
                  label="二级指标">
                </el-table-column>
                  <el-table-column
                    prop="a"
                    width="240%"
                    label="A级" >
                  </el-table-column>
                  <el-table-column 
                  width="250%"
                  prop="c"
                  label="C级">
                </el-table-column>
                </el-table>
               <div>
                 <p style="font-size:16px;font-weight:500;height:58px;line-height:80px;color:red">说明：</p>
                 <div style="font-size:14px;color:#999999;line-height:28px;text-align:justify">
                   1.A、B、C、D分别表示100、80、60、40四个分值。在评价标准中，只给出了A级(100分)和C级（60分）的标准，介于A级、C级之间即为B级（80分），低于C级即为D级（40分）。<br/>
                   2.评审人员根据评分标准和申报单位提供的相关资料对申报产品进行打分，计算出每种产品评估得分。评价得分即每个评价指标的权重乘以该指标的得分之和。<br/>
                   3.评估得分满分为100分，得分70.0分及以上者人选中华传统好食品。
                 </div>
               </div>
              </div>
          </div>
      </div>
         <div class="h40"></div>
    </div>
</template>
<script>
export default {
  name: "news",
  components: {
  },
  data() {
    return {
      newsList: [],
      newstype: 1,
        tableData: [{
          biaozhun1: '1 文化价值',
          biaozhun2: '1-1 中国特色文化',
          a: '具有鲜明的中国特色和地域特色，与中国传统文化融为一体，为我国经济文化的一大特色',
          c: '具有鲜明的中国特色和地域特色，与中国传统文化融为一体，为我国经济文化的一大特色'
        }, {
          biaozhun1: '1 文化价值',
          biaozhun2: '1-2 产品或技艺传承',
          a: '相关文化艺术或技艺等列入国家或世界为物质文化遗产名录',
          c: '相关文化艺术或技艺等被列入地方级非物质文化遗产名录'
        }, 
        {
          biaozhun1: '1 文化价值',
          biaozhun2: '1-3 品牌价值',
          a: '获得省级以上政府颁发的相关品牌认可，如国家名牌、驰名商标、中华老字号、绿色食品、有机食品、国家地理标识产品等',
          c: '获得由当地政府颁发的相关品牌认可与表彰'
        },
        {
          biaozhun1: '2 健康价值',
          biaozhun2: '2-1 营养研究',
          a: '有关研究报告，企业参与相关研究',
          c: '有关研究报告，研究报告的研究对象为申报产品'
        },
         {
          biaozhun1: '2 健康价值',
          biaozhun2: '2-2 食疗健康',
          a: '企业提供记载申报产品的古文献丰富',
          c: '企业提供部分记载申报产品的古文献'
        },
         {
          biaozhun1: '2 健康价值',
          biaozhun2: '2-3 企业科研',
          a: '企业承担相关研究或参与相关基础性研究，获相关专利',
          c: '企业参与相关研究；研发费用有投入'
        },
        {
          biaozhun1: '3 质量价值',
          biaozhun2: '3-1 产品质量水平',
          a: '获得省级及以上政府相关质量奖',
          c: '获得地方政府的相关质量奖'
        },
         {
          biaozhun1: '3 质量价值',
          biaozhun2: '3-2 质量保证能力',
          a: '取得ISO 22000食品安全管理体系，HACCP或其他相当资格的质量管理体系认证',
          c: '产品质量长期稳定，近三年在各级质量监督检查中均未合格'
        },
         {
          biaozhun1: '3 质量价值',
          biaozhun2: '3-3 顾客满意态度',
          a: '在全国范围内拥有稳定的消费群体，用户满意度高，口碑良好',
          c: '在当地拥有稳定的消费群体，满意度高，口碑良好'
        }],
        tableData2:[{
          biaozhun1: '4 市场价值',
          biaozhun2: '4-1 市场占有率',
          a: '在全国被广泛认知，有一定的美誉度和口碑',
          c: '在部分地区被广泛认知，有一定的美誉度和口碑'
        }, {
          biaozhun1: '4 市场价值',
          biaozhun2: '4-2 企业盈利情况',
          a: '年销售额，实现利税、工业成本费用利润率居国内同行业前列',
          c: '年销售额、实现利税、工业成本费用利润率居省内同行业前列'
        }, {
          biaozhun1: '4 市场价值',
          biaozhun2: '4-3 企业责任',
          a: '企业有自己的博物馆，网站建设富有中国优秀传统食文化特征；对当地经济发展有着突出贡献',
          c: '企业网站建设突出中华优秀传统食文化特征；对当地经济发展增收有一定贡献'
        }, {
          biaozhun1: '4 市场价值',
          biaozhun2: '4-4 企业规模',
          a: '居国内同行业前列',
          c: '居所有省（市、自治区）同行业前列'
        }]
    };
  },
  methods: {
      // eslint-disable-next-line no-unused-vars
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 3 === 0) {
            return {
              rowspan: 3,
              colspan: 1
            };
          } else {
            return {
              rowspan: 4,
              colspan: 0
            };
          }
        }
      },
      objectSpanMethod2({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 4 === 0) {
            return {
              rowspan: 4,
              colspan: 1
            };
          } else {
            return {
              rowspan: 4,
              colspan: 0
            };
          }
        }
      },
       // eslint-disable-next-line no-unused-vars
       tableRowClassName({row, column}) {
        if (column === 1) {
          return 'warning-row';
        }
        return '';
      },
      
  },
  mounted() {
  },

};
</script>

<style lang="scss" scoped>
 .el-table .warning-row {
    background: oldlace;
  }
*,ul li,a{
    margin: 0px;
    padding: 0px;
    list-style:none;
    text-decoration: none;
}
.el-table_body{
  width: 99% !important;
}
.el-table__header{
  width: 99%!important;
}
.el-table__body{
  width: 99%!important;
}
.goodfood2 {
  width: 100%;
  position: relative;
  overflow: hidden;

  &-banner{
   width: 100%;
   height: 100%;
    img{
     width: 100%;
   }
  }
  &-content{
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      &-left{
          float: left;
          width: 200px;
      }
      &-left p{
        font-size: 12px;
        color: #999999;
        margin-top: 5px;
      }
      &-left p img{
        margin-right: 10px;
        margin-top: 2px;
      }
     &-left p a{
       color: #999999;
      }
      &-list{
          margin-top: 18px;
      }
      &-list li{
          width: 180px;
          height: 40px;
          line-height: 40px;
          color: #333333;
          font-size: 16px;
          text-align: center;
          background: #f7f7f7;
          margin-bottom: 8px;
          cursor: pointer;
          a{
            color: #333333;
          }
      }
      &-list li:nth-child(2){
          background: url(../assets/img/selected.png) no-repeat no-repeat left;
          height: 40px;
          color: #ffffff;
          width: 184px;
      }
      &-right{
          margin-top: 26px;
          float: left;
          width: 76%;
          padding: 0 40px;
          padding-bottom: 50px;
          border: 1px solid #f7f7f7;
      }
      &-right p{
          color:#333333;
          font-size: 18px;
          width: 100%;
          height: 68px;
          line-height: 68px;
          text-align: left;
          font-weight: 600;

      }
  }
}
.el-table thead.is-group th{
  background: #f5f9fe!important;
}
.h40{
  height: 40px;
}
</style>