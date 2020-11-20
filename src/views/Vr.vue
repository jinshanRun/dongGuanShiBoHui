<template>
<div>
  <div id="container"></div>
</div>
</template>

<script src="http://www.yanhuangxueyuan.com/versions/threejsR92/build/three.js"></script>
<script>
import * as THREE from "three";
// import  image from "@/assets/vrimg/trayshi_pano_b.jpg"
import test from "./Admin/test";
export default {
name: "Vr",
  data() {
    return{
      camera:new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),	// 创建一个摄像机,
      scene: new THREE.Scene(), // 创建一个场景
      renderer: new THREE.WebGLRenderer(), // 创建一个渲染器
      mesh: null,
      controls:null,
      // material:null,// 贴图材质
      geometry:new THREE.SphereBufferGeometry(100, 60, 40,0,Math.PI * 2,0,Math.PI * 2), // 创建一个球形的容器，用于贴全景图上去
      // geometry:new THREE.SphereGeometry(100, 60, 40,0,0,0,Math.PI * 10), // 创建一个球形的容器，用于贴全景图上去
      // geometry:null,

    }
  },
  mounted() {
    // this.init()
    // this.animate()
    this.test();
  },
  methods:{
    testGeometry(){
      var length = 12, width = 8;

      var shape = new THREE.Shape();
      shape.moveTo( 0,0 );
      shape.lineTo( 0, width );
      shape.lineTo( length, width );
      shape.lineTo( length, 0 );
      shape.lineTo( 0, 0 );

      var extrudeSettings = {
        steps: 2,
        depth: 16,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 1,
        bevelSegments: 1
      };

      var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    },
    test(){
      // this.testGeometry();
      this.geometry.scale(-1, 1, 1);
      let texture = new THREE.TextureLoader().load('http://10.131.1.67:8082/dongguan/trayshi_pano_l.jpg')
      let texture1 = new THREE.TextureLoader().load('http://10.131.1.67:8082/dongguan/trayshi_pano_r.jpg')
      this.material = new THREE.MeshBasicMaterial({map: texture,})
      this.material1 = new THREE.MeshBasicMaterial({map: texture1})
      this.mesh = new THREE.Mesh(this.geometry, this.material1,this.material)

      this.renderer.setSize(window.innerWidth, window.innerHeight)

      document.body.appendChild(this.renderer.domElement)

      this.scene.add(this.mesh)

      this.camera.position.z = 0

      window.addEventListener('resize', this.onWindowResize, false)

      // this.renderImg();
    },
    renderImg(){
      // this.mesh.rotation.x += 0.02;
      this.mesh.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.renderImg);
    },
    // 实现窗口大小改变的时候改变全景图的显示大小
    onWindowResize () {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
  // 初始化
  init(){
    //  创建场景对象Scene
    this.scene = new THREE.Scene();

    //网格模型添加到场景中
    let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    let material = new THREE.MeshNormalMaterial({
      color: "white"
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    /**
     * 相机设置
     */
    let container = document.getElementById("container");
    this.camera = new THREE.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
    );
    this.camera.position.z = 1;

    /**
     * 创建渲染器对象
     */
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    //创建控件对象
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  },
    // 动画
  animate() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    }
  }
}
</script>

<style scoped>
#container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
