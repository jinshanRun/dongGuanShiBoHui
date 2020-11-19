<template>
  <div class="cases">
      <el-form  :rules="rules" :model="ruleForm"  ref="ruleForm" label-width="80px">
        <el-form-item label="文章标题" prop="articleTitle" style="width:80%">
          <el-input v-model="ruleForm.articleTitle"></el-input>
        </el-form-item>
         <el-form-item label="摘要" prop="summary" style="width:80%">
          <el-input type="textarea" v-model="ruleForm.summary" autosize></el-input>
        </el-form-item>
        <el-form-item label="新闻封面" prop="imageUuid" style="width:50%">
          <!-- <el-input v-model="ruleForm.imageUuid"></el-input> -->
          <el-upload
            class="upload-demo"
            :action="this.uploadImageUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            list-type="picture"
            accept=".png,.jpg,.jpeg,.bmp,.gif,.svg,.pdf"
            name="file"
            :limit="1"
            :on-exceed="handleExceed"
            :on-success="SuccessImg"
            :on-error="ErrorImg"
            :before-upload="beforeUpload">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="发布人" prop="releaseUser" style="width:80%">
          <el-input v-model="ruleForm.releaseUser"></el-input>
        </el-form-item>
        <el-form-item prop="releaseTime" label="发布时间">
         <el-date-picker
         v-model="ruleForm.releaseTime"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          :default-value="new Date()"
          placeholder="选择日期时间"
          style="width: 50%;">
            </el-date-picker>
       </el-form-item>
       <el-form-item label="来源" prop="source" style="width:80%">
        <el-input v-model="ruleForm.source"></el-input>
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
            <quill-editor v-model="ruleForm.content" style="width:80%"
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
      contenta : '',
      imageUuid: null,
      fileUpload:{   //附件上传
        file:null
      },
      ruleForm :{
        articleTitle: '',
        releaseUser: '',
        releaseTime:'',
        source: '',
        file: '',
        summary: '',
        content:'',
      },
      rules: {
        articleTitle: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 1,  message: '文章标题不为空', trigger: 'blur' }
        ],
        summary: [
          { required: true, message: '请输入/摘要', trigger: 'blur' },
          { min: 1,  message: '摘要不为空', trigger: 'blur' }
        ],
        imageUuid: [
          { required: true, type: 'string' , message: '请上传新闻图片', trigger: 'blur' },
        ],
        releaseUser: [
          {required: true, message: '请输入发布人', trigger: 'blur' },
          { min: 1,  message: '发布人不为空', trigger: 'blur' }
        ],
        releaseTime: [
          {required: true, message: '请选择发布时间', trigger: 'blur' },
          // { min: 1,  message: '发布时间不为空', trigger: 'blur' }
        ],
        source: [
          { required: true, message: '请输入来源', trigger: 'blur' },
          { min: 1,  message: '来源不为空', trigger: 'blur' }
        ],
        content:[
            {required:true,message:'请输入正文信息',trigger:'blur'}
        ],

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
    //新闻列表图片封面上传
      handleRemove(file) {
        this.imageUuid = null;
      },
      handlePreview(file) {
        //此处可直接下载文件
        // eslint-disable-next-line no-console
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
      SuccessImg(res){
      // 上传成功所执行
      if (res.returnCode == true && res.returnMsg == "OK") {
         // eslint-disable-next-line no-console
         console.log(res.data)
         this.imageUuid = res.data
      } else {
          this.$message.error('图片插入失败')
      }
      // loading动画消失
      this.quillUpdateImg = false
    },
    changqiu(){
      this.contenta,
      // eslint-disable-next-line no-console
      console.log(this.contenta)
        // eslint-disable-next-line no-unused-vars
      var articleDTO =
          {
            'content':this.ruleForm.content,
            "articleTitle": this.ruleForm.articleTitle,
            "releaseTime": this.ruleForm.releaseTime,
            "releaseUser": this.ruleForm.releaseUser,
            "source": this.ruleForm.source,
            "imageUuid": this.imageUuid,
            "summary": this.ruleForm.summary
          }
      if(!this.ruleForm.articleTitle){
          this.$message({
              message: '请输入新闻或文章标题',
              type: 'error'
          });
          return;
      }
      if(!this.ruleForm.summary){
          this.$message({
              message: '请输入新闻摘要',
              type: 'error'
          });
          return;
      }
      if(!this.imageUuid){
          this.$message({
              message: '请上传新闻封面',
              type: 'error'
          });
          return;
      }
      if(!this.ruleForm.releaseUser){
          this.$message({
              message: '请输入发布人',
              type: 'error'
          });
          return;
      }
      if(!this.ruleForm.releaseTime){
          this.$message({
              message: '请选择发布时间',
              type: 'error'
          });
          return;
      }
      if(!this.ruleForm.source){
          this.$message({
              message: '请输入新闻或文章来源',
              type: 'error'
          });
          return;
      }
      if(!this.ruleForm.content){
          this.$message({
              message: '请输入新闻正文内容',
              type: 'error'
          });
          return;
      }

    this.$http.post("/articleapi/saveArticle", articleDTO)
      .then(response => {
          if(response.data.returnCode == true && response.data.returnMsg =="OK") {
              this.loading = false;
              this.$message({
                  message: "提交成功",
                  type: "success"
              });
              this.$refs.ruleForm.resetFields();
              this.imageUuid = null;
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
  margin-top: 100px!important;
}
</style>
