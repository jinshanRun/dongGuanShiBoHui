<template>
  <div class="cases">
      <el-form  :rules="rules" :model="ruleForm"  ref="ruleForm" label-width="230px">
        <el-form-item label="所属展区" prop="areaUuid">
          <!-- <el-input v-model="ruleForm.areaUuid"></el-input> -->
            <el-select v-model="ruleForm.areaUuid" style="width:30%">
             <el-option label = "1号馆中华传统好食品馆" value="ff7632e456174ad4b52d6fc76968f35420201023172642">1号馆中华传统好食品馆</el-option>
             <el-option label = "2号馆广东特色馆" value="5f29577d3fd249d1b59d4b9cc2d8ba3920201023172717">2号馆广东特色馆</el-option>
             <el-option label = "3号馆食品科技创新成果馆" value="d51083c57a99405fa3e7a5066a556f9720201023172826">3号馆食品科技创新成果馆</el-option>
             <el-option label = "4号馆综合馆" value="ee51986b1c97468eb20f28a1fc17826f20201023172841">4号馆综合馆</el-option>
             <el-option label = "5号馆中国美食文化馆" value="2b944fcfa09e42d588dcb6b5ace83ea420201023172900">5号馆中国美食文化馆</el-option>
             <el-option label = "6号馆消费扶贫特色农副产品馆" value="324e4b21bb1b4647bc0a7d1a1ad6655820201023172934">6号馆消费扶贫特色农副产品馆</el-option>
             <el-option label = "7号馆精品馆" value="35c6a237bfde4a4181beb441bf169de520201023172953">7号馆精品馆</el-option>
             <el-option label = "云上展厅深加工食品类" value="d6ccd8b213b2419fbd53fe4e5070ea4420201023173027">云上展厅深加工食品类</el-option>
             <el-option label = "云上展厅农副产品类" value="f1327fceaa2440f796570fb48856407220201023173039">云上展厅农副产品类</el-option>
             <el-option label = "云上展厅食品科技类" value="218d0ba591b14f3daa39fcb9e0f4055b20201023173050">云上展厅食品科技类</el-option>
             <el-option label = "云上展厅食品文化类" value="c8610a0908b04ea0858f5ec22e9a4ed720201023173102">云上展厅食品文化类</el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="展商（公司）名称" prop="companyName" style="width:50%">
          <el-input v-model="ruleForm.companyName"></el-input>
        </el-form-item>
        <el-form-item label="展商logo图片" prop="logoUuid" style="width:50%">
          <el-upload
            v-model="ruleForm.logoUuid"
            list-type="picture"
            class="upload-demo"
            :action="uploadImageUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemoveLogo"
            :before-remove="beforeRemove"
            name="file"
            accept=".png,.jpg,.jpeg,.bmp,.gif,.svg,.pdf"
            :limit="1"
            :on-exceed="handleExceed"
            :on-success="SuccessImg"
            :on-error="ErrorImg"
            :before-upload="beforeUpload">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传大小不超过30M的图片</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="展商宣传图" prop="propagandaUuid" style="width:50%">
          <el-upload
            v-model="ruleForm.propagandaUuid"
            class="upload-demo"
            :action="uploadImageUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemovePro"
            :before-remove="beforeRemove"
            list-type="picture"
            accept=".png,.jpg,.jpeg,.bmp,.gif,.svg,.pdf"
            name="file"
            :limit="1"
            :on-exceed="handleExceed"
            :on-success="SuccessImgpro"
            :on-error="ErrorImg"
            :before-upload="beforeUpload">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传大小不超过30M的图片</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="宣传视频" prop="videoUuid" style="width:50%">
          <!-- <el-input v-model="ruleForm.videoUuid"></el-input> -->
            <el-upload
            v-model="ruleForm.videoUuid"
            class="upload-demo"
            :action="uploadImageUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemoveVideo"
            :before-remove="beforeRemove"
            accept=".mp4,.avi,.rmvb,.mov,.FLV,.3GP"
            name="file"
            :limit="1"
            :on-exceed="handleExceed"
            :on-success="SuccessVideo"
            :on-error="ErrorImg"
            :before-upload="beforeUpload">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传大小不超过500M的视频</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="企业介绍" prop="companyIntroduce" style="width:60%">
         <el-input type="textarea" v-model="ruleForm.companyIntroduce" autosize></el-input>
        </el-form-item>
        <el-form-item label="展商位置" prop="placeEnum">
          <el-select v-model="ruleForm.placeEnum">
            <el-option label="热门" value="HOT">热门</el-option>
            <el-option label="前五" value="TOP5">前五</el-option>
            <el-option label="普通" value="NORMAL">普通</el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="展示开始时间" prop="showCreateTime" style="width:60%">
          <el-date-picker
          v-model="ruleForm.showCreateTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            :default-value="new Date()"
            placeholder="选择日期时间"
            style="width: 50%;">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="展示结束时间" prop="showEndTime" style="width:60%">
          <el-date-picker
          v-model="ruleForm.showEndTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            :default-value="new Date()"
            placeholder="选择日期时间"
            style="width: 50%;">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="上架状态" prop="shelfState">
           <el-select v-model="ruleForm.shelfState">
            <el-option value="ON" label="已上架">已上架</el-option>
            <el-option value="NOT" label="未上架" >未上架</el-option>
            <el-option value="OFF" label="已下架" >已下架</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动标题" prop="activityTitle" style="width:60%">
          <el-input v-model="ruleForm.activityTitle"></el-input>
        </el-form-item>
        <el-form-item label="活动简介" prop="activityIntroduce" style="width:60%">
          <el-input type="textarea" autosize v-model="ruleForm.activityIntroduce"></el-input>
        </el-form-item>
     <el-form-item label="正文信息" prop="content">
         <el-upload
                 class="avatar-uploader"
                 :action="serverUrl"
                 name="file"
                 :data='fileUpload'
                 :show-file-list="false"
                 :on-success="uploadSuccess"
                 :on-error="uploadError"
                 :before-upload="beforeUpload">
         </el-upload>
           <quill-editor v-model="ruleForm.content" style="width:60%"
              ref="contenta"
              :options="editorOption"
              @blur="handleEditorBlur($event)"
              @focus="handleEditorFocus($event)"
              @change="handleEditorChange($event)">
           </quill-editor>
        </el-form-item>
      </el-form>
    <el-button @click="changqiu()">提交</el-button>
  </div>
</template>

<script>
import axios from "axios";

const toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{'header': 1}, {'header': 2}],
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'script': 'sub'}, {'script': 'super'}],
            [{'indent': '-1'}, {'indent': '+1'}],
            [{'direction': 'rtl'}],
            [{'size': ['small', false, 'large', 'huge']}],
            [{'header': [1, 2, 3, 4, 5, 6, false]}],
            [{'color': []}, {'background': []}],
            [{'font': []}],
            [{'align': []}],
            ['link', 'image', 'video'],
            ['clean']
]
//  toolbarOptions
export default {
  name: 'contenta',
  data() {
    return {
      imageUuid: null,
      fileUpload:{   //附件上传
        file:null
      },
      ruleForm :{
        areaUuid: '',
        companyName: '',
        logoUuid: '',
        propagandaUuid: '',
        videoUuid: '',
        companyIntroduce: '',
        content: '',
        placeEnum: '',
        showCreateTime: '',
        showEndTime: '',
        shelfState: '',
        activityTitle: '',
        activityIntroduce: ''
      },
      rules: {
        areaUuid: [
          { required: true, message: '请选择展区类型', trigger: 'blur' },
          { min: 1,  message: '所属展区不能为空', trigger: 'blur' }
        ],
        companyName: [
          { required: true, type: 'string' , message: '请输入展商名称', trigger: 'blur' },
          { min: 1,  message: '展商/公司名称不能为空', trigger: 'blur' }
        ],
        logoUuid: [
          {required: true, message: '请上传展商logo', trigger: 'blur' },
          { min: 1,  message: '展商logo不能为空', trigger: 'blur' }
        ],
        propagandaUuid: [
          { required: true, message: '请上传展商宣传图', trigger: 'blur' },
          { min: 1,  message: '展商宣传图不能为空', trigger: 'blur' }
        ],
        videoUuid: [
          { required: true, message: '请上传展商相关视频', trigger: 'blur' },
          { min: 1,  message: '展商视频不能为空', trigger: 'blur' }
        ],
        companyIntroduce: [
          { required: true, message: '请输入展商介绍', trigger: 'blur' },
          { min: 1,  message: '展商介绍不能为空', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入展商相关正文信息', trigger: 'blur' },
          { min: 1,  message: '展商相关正文信息不能为空', trigger: 'blur' }
        ],
        placeEnum: [
          { required: true, message: '请选择展商展示位置', trigger: 'blur' },
          { min: 1,  message: '展示位置不能为空', trigger: 'blur' }
        ],
        showCreateTime: [
          { required: true, message: '请设置展示开始时间', trigger: 'blur' },
        ],
        showEndTime: [
          { required: true, message: '请设置展示结束时间', trigger: 'blur' },
        ],
        shelfState: [
          { required: true, message: '请输入来源', trigger: 'blur' },
          { min: 1,  message: '来源不为空', trigger: 'blur' }
        ],
        // activityTitle: [
        //   { required: true, message: '请输入/摘要', trigger: 'blur' },
        //   { min: 1,  message: '摘要不为空', trigger: 'blur' }
        // ],
        // activityIntroduce: [
        //   { required: true, message: '请输入/摘要', trigger: 'blur' },
        //   { min: 1,  message: '摘要不为空', trigger: 'blur' }
        // ]
      },

      uploadImageUrl:axios.defaults.baseURL + 'fileapi/uploadFile',//普通文件上传地址
      serverUrl: axios.defaults.baseURL +'fileapi/partUploadFile',//富文本编辑器中上传图片的地址
      editorOption: {
        placeholder: '',
        theme: 'snow',
        modules: {
          toolbar: {
              container: toolbarOptions,  // 工具栏
              handlers: {
                  'image': function (value) {
                  if (value) {
                    document.querySelector('.avatar-uploader input').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              }
          }
        }
      },

    }
  },
  mounted() {
    // this.uploadError()
  },
  methods: {
    uploadError() {
        // loading动画消失
        this.quillUpdateImg = false
        this.$message.error('图片插入失败')
    },
    uploadSuccess(res){
      // 首先获取富文本编辑器的实例
      let quill = this.$refs.contenta.quill
      // 上传成功所执行
      if (res.returnCode == true && res.returnMsg == "OK") {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          // 插入图片res为服务器返回的数据
          quill.insertEmbed(length, 'image', res.data)
          // 光标移动至文本末端
          quill.setSelection(length + 1)
      } else {
          this.$message.error('图片插入失败')
      }
      // loading动画消失
      this.quillUpdateImg = false
    },
    beforeUpload(file) {
      this.fileUpload.file=file;
        // 显示loading动画
        this.quillUpdateImg = true
    },
    handleEditorBlur () {},
    handleEditorFocus () {},
    //这个是当初做的个文字限制后来没用就注释了
    handleEditorChange () {},
    //展商logo移除
      handleRemoveLogo() {
        this.ruleForm.logoUuid = null;
      },
      //展商宣传图移除
      handleRemovePro() {
        this.ruleForm.propagandaUuid = null;
      },
      //展商视频移除
      handleRemoveVideo(){
        this.ruleForm.videoUuid = null;
      },
      handlePreview(file) {
        // eslint-disable-next-line no-console
        console.log(file);
      },
      handleExceed(files) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length } 个文件`);
      },
      beforeRemove(file) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      // 新闻封面上传图片
      ErrorImg() {
        // loading动画消失
        this.quillUpdateImg = false
        this.$message.error('图片插入失败')
    },
    // 上传展商图片成功所执行
      SuccessImg(res){
      if (res.returnCode == true && res.returnMsg == "OK") {
         // eslint-disable-next-line no-console
         console.log("======="+res.data)
         this.ruleForm.logoUuid = res.data
      } else {
          this.$message.error('图片插入失败')
      }
      // loading动画消失
      this.quillUpdateImg = false
    },
    // 上传展商宣传图成功所执行
      SuccessImgpro(res){
      if (res.returnCode == true && res.returnMsg == "OK") {
         // eslint-disable-next-line no-console
         console.log(res.data)
         this.ruleForm.propagandaUuid = res.data
      } else {
          this.$message.error('图片插入失败')
      }
      // loading动画消失
      this.quillUpdateImg = false
    },
    // 上传展商宣传视频成功所执行
      SuccessVideo(res){
      if (res.returnCode == true && res.returnMsg == "OK") {
         // eslint-disable-next-line no-console
         this.ruleForm.videoUuid = res.data
      } else {
          this.$message.error('视频插入失败')
      }
      // loading动画消失
      this.quillUpdateImg = false
    },
    changqiu(){
        if (!this.ruleForm.areaUuid) {
            this.$message.error("请选择展区信息");
            return;
        }
        if (!this.ruleForm.companyName) {
            this.$message.error("请输入展商名称");
            return;
        }
        if (!this.ruleForm.logoUuid) {
            this.$message.error("请上传展商logo");
            return;
        }
        if (!this.ruleForm.propagandaUuid) {
            this.$message.error("请上传展商宣传图");
            return;
        }
        if (!this.ruleForm.videoUuid) {
            this.$message.error("请上传展商相关视频");
            return;
        }
        if (!this.ruleForm.companyIntroduce) {
            this.$message.error("请输入展商介绍");
            return;
        }
        if (!this.ruleForm.placeEnum) {
            this.$message.error("请选择展商位置");
            return;
        }
        if (!this.ruleForm.showCreateTime) {
            this.$message.error("请设置展示开始时间");
            return;
        }
        if (!this.ruleForm.showEndTime) {
            this.$message.error("请设置展示结束时间");
            return;
        }
        if (!this.ruleForm.shelfState) {
            this.$message.error("请选择上架状态");
            return;
        }
        if (!this.ruleForm.content) {
            this.$message.error("请输入展商正文信息");
            return;
        }
        this.$http.post("/exhibitioncompanyapi/saveCompany", this.ruleForm)
          .then(response => {
              if(response.data.returnCode == true && response.data.returnMsg =="OK") {
                  this.loading = false;
                  this.$message({
                      message: "提交成功",
                      type: "success"
                  });
                  this.$refs.ruleForm.resetFields();
              }else{
                  this.$message.error("提交失败");
              }
          })
          .catch(e => {
            this.$message({
              message: "提交失败！" + e,
              type: "error"
            });
          });
    }
  }
};
</script>

<style scoped>
.cases{
  margin-top: 50px!important;
}
</style>
