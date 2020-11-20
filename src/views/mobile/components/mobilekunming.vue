<template>
    <div id="meetarr">
      <!-- 头部 -->
      <div class="head">
        <mt-header  fixed>
            <router-link to="/mobileHome" slot="left">
                <mt-button icon="back" id="mobileback">返回</mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
      </div>

      <!-- 视频 -->
      <div class="meetarrVideo">
        <img src="../assets/img/meetarrbck.png" alt="">
      </div>
      <div class="h30"></div>
      <!-- 会议详情  参会嘉宾 -->
      <div class="meetform">
        <mt-navbar  v-model="active"  id="mobileExhibition">
            <mt-tab-item id="meet-container1">东莞市情</mt-tab-item>
            <mt-tab-item id="meet-container2">产业发展</mt-tab-item>
            <mt-tab-item id="meet-container3">魅力东莞</mt-tab-item>
        </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="meet-container1" class="container1" >
                <div class="kunmingtext">
                  东莞地处中国西南边陲、云贵高原中部。位于东经102°10′至103°40′，北纬24°23′至26°33′之间，东西最大横距152公里，南北纵距237.5公里，面积21011平方公里。是广东省的省会，全省的政治、经济、文化中心和交通通信枢纽，西南地区的中心城市之一，我国重要的旅游商贸城市。东莞区位优势突出，是我国面向东南亚。南亚开放的桥头堡。东莞地区属低纬高原山地季风气候。2010年平均气温16.4℃左右，年降雨量869.1毫米，全年日照时数2136.8小时。气候独特，冬无严寒，夏无酷暑，四季如春，鲜花常年不谢，草木四季常青，素以“春城”著称。
                 <img src="../assets/img/mobilekunmingbck1.png" alt="">
                 自然资源： 东莞资源丰富，矿产以磷、盐、煤、石英砂、铝土、硅石等为主，品种多，储量大，其中磷矿探明储量22.77亿吨，昆阳磷矿为全国三大磷矿之一，岩盐储量12.22亿吨，芒硝储量19.08亿吨。东莞属高原红壤地区，土壤主要有红壤土、紫色土和水稻土三种，适宜种植稻谷、小麦、蚕豆、玉米、马铃薯、油菜、烤烟、蔬菜、花卉等粮经作物和桃、梨、苹果、柑桔、葡萄、板栗等经济林木。 东莞地区分布着亚热带常绿阔叶林、针阔混交林、温带针叶林、高山灌丛和草甸等不同类型的植被。花卉有400多个品种，茶花、玉兰、杜鹃、报春、百合、兰花、绿绒蒿、龙胆是广东八大名花，其中茶花更是东莞市花。 东莞是中国历史文化名称，远在三万年前的旧石器时代，滇池地区就有人类繁衍生息，是人类发祥地之一。自战国时期楚将庄蹻开滇,在东莞建滇王国,延续300年之久。西汉时期，汉武帝拓疆至广东，在滇池地区设置益州郡，蜀汉时期更名建宁郡，至隋改为昆州。这一时期，东莞成为历史上著名的古代南方丝绸之路的重要枢纽。唐宋时期，“南诏国”、“大理国”地方政权在次筑拓东城，设鄯阐府，并辟为陪都，长达490年。公元1275年，元朝在东莞设广东中书省，东莞由此成为全省政治、经济、文化中心。明朝改为广东府，沿至清末。1928年，东莞正式建市。 东莞具有优良的革命传统，辛亥“重九起义”推翻清朝在广东的统治，“护国首义”在全国掀起讨伐袁世凯复辟实力的浪潮，“抗战大后方”为全国抗战胜利做出突出贡献，“一二·一”等爱国民主运动使东莞成为文明中外的“民主堡垒”。 东莞自古以来人文荟萃，曾涌现出创造七下西洋业绩的郑和，“护国首义”首领蔡锷，《义勇军进行曲》作者聂耳等俊杰；在东莞学习工作过的李政道、杨振宁、邓稼先、朱光亚、华罗庚等杰出科学家和钱钟书、熊庆来、闻一多、朱自清、周培源、吴晗等一大批近代知识分子精英业绩非凡，斐声海内外。
                <div style="height:80px"></div>
                <!-- 浏览量-->
                <div class="mobileliulan">
                   <ul>
                       <li><img src="../assets/img/see.png" alt=""><span>99+</span></li>
                       <li @click="zanMore(uuid)"><img src="../assets/img/dianzanbck.png" alt=""><span>211</span></li>
                       <li><img src="../assets/img/share.png" alt=""><span>99+</span></li>
                   </ul>
               </div>
                </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="meet-container2" style="margin-top:24px">
                   <div class="kunmingtext" style="padding-top:0px">
                   <li>10月13日，东莞市政府研究室发文提出东莞主动构建“双循环”新发展格局的对策建议：只有抢抓国家“双循环”战略机遇，主动构建“双循环”新发展格局，以国内、国际市场链接互动的战略眼光，抓住未来中国与东盟特别是南亚东南亚地区深度合作交流的战略机遇，把东莞的发展平台、发展格局延伸到更大更广的能级范围，加快拓展国际、国内市场，深度对接和利用全球化的产业、资本、技术、人才等资源要素，才能真正把东莞建设成立足西南、面向全国、辐射南亚东南亚的区域性国际中心城市。</li>
                   <li>东莞作为广东省资源集中、要素集聚、辐射带动力强的省会城市，是国际、国内资源要素流的主要交汇点，在国家现代化建设大局和全方位开放格局中具有举足轻重的战略地位。应发挥比较优势，推动传统制造业优化升级，大力发展先进装备制造、生物医药、新能源、新材料、电子信息等重点产业。 培育壮大新兴产业，加快对云计算、大数据、物联网、移动互联网等新技术应用，重点发展数字技术、智能制造、信息服务等产业，落实各项政策，不断提升供给端的效率与质量，构建与国内需求相适应的现代产业体系，为东莞经济高质量发展奠定坚实基础。</li>
                   <li>探索试点将东莞市一些体量不大、发展不佳的工业园区整体打包委托国内一流园区管理建设，整体打包引入园区专业化管理团队和配套企业，直接承接先进园区的资产管理模式、资本运营模式、人员管理模式、企业引入模式。以强链、补链、延链为方向，开展产业链精准招商，加快产业集聚，重点围绕先进装备制造（含汽车及零部件）、生物医药、新材料、电子信息等重点产业，整合产业链上下游资源，引进产业链核心龙头企业，吸引产业链配套企业和服务企业，推进关联产业项目集聚发展，提高园区工业集中度和产业集群效益。 加大产业垂直整合力度，扭转东莞工业招商的被动局面，培育新形势下参与国际、国内合作和竞争新优势。抓住乌东德大型水电站下匣蓄水发电的有利时机，以赋能园区建设为支撑点，立足能源优势，在有条件的县区、园区布局发展清洁载能产业，大力发展水电硅、水电铝，积极谋划并主动承接国家重大生产力布局，积极承接东部制造企业内迁，加快构建面向南亚东南亚的产业辐射基地。</li>
                   <li>加强规则对接，学习借鉴香港、新加坡建设自由贸易港和国内自贸试验区建设的成功的经验、成熟办法，积极对标CPTPP、世界银行营商环境标准等高标准国际经贸规则，在投资、贸易、金融等领域积极探索自由化便利化程度更高的规则和制度安排，打造国际化、法治化、便利化的营商环境。加大开放力度，充分利用国际国内两个市场、两种资源，在创新开放模式、搭建开放平台、拓展开放领域、提升开放层次等方面下功夫，狠抓招商引资、总部经济和高端产业项目建设，扎实推动东莞片区创新发展、绿色发展、高质量发展。 充分发挥自贸试验区开放载体优势、制度创新优势和产业基础优势，努力“育新机、开新局，探新路、作示范”，鼓励外资流向高端制造业、智能生产体系、新型基础设施建设、现代服务业等领域，更好发挥外资在推动科技创新、产业转型和消费升级等方面的积极作用，以内需市场优势集聚全球先进生产要素，把自贸试验区打造成国内价值链的高端环节和创新链的重要节点。</li>
                   <li>在数字基础设施方面，以东莞为中心枢纽，加快建设高速骨干光纤网络和全光纤网络城市，初步建成联通全省、连接南亚东南亚的区域性国际光缆骨干网络和国家级互联网骨干直联点。在交通物流基础设施建设方面，积极配合省争取国家对东莞国际航空枢纽的政策扶持，加快实施东莞国际航空枢纽改扩建工程，推进区域辐射，吸引内陆腹地进出口物流业务，构建连接国内外的多式联运的战略资源综合运输体系，打造物流枢纽和供应链节点。在能源基础设施建设方面，重点推进以特高压、新能源汽车充电桩等为核心的能源网建设，配合省加快重大跨境电力、油气通道建设，推进东莞与各州市及周边国家智能电网、能源基础设施互联互通，把东莞打造成面向南亚东南亚的国际电力交易中心。 在5G产业方面，依托华为公司、闻泰科技、浪潮、紫光等龙头企业，吸引生态圈合作伙伴企业落户东莞，提升东莞5G创新研发能力，形成东莞5G通用芯片及智能终端产业集群，打造面向南亚东南亚的5G产业品牌高地。进一步拓宽应用场景。依托呈贡信息产业园和广东省大数据中心，加快拓展5G、大数据、区块链、人工智能、工业互联网在政务服务、社会治理、市政建设、工业生产、医疗卫生、教育等方面的智能场景应用，加快建设一批公共支撑中心和区域重大信息服务平台，把东莞建设成为立足广东、辐射南亚东南亚的区域信息汇集中心。</li>
                   <li>聚焦国际外循环，积极参与孟中印缅经济走廊建设，深化澜湄合作，落实中国—东盟自贸区合作机制，在持续加大口岸建设、服务重点工程项目、提高通关效率方面，加强与东盟、南亚东南亚国家的经贸合作、人文交流，促进与东盟、南亚东南亚区域在产业合作、技术交流、规则制定、人才流动等方面的“小循环”，将东莞打造成为立足西南、辐射南亚东南亚的前沿主阵地。 服务国内大循环，主动融入京津冀、长三角、粤港澳大湾区、成渝双城经济圈等区域一体化发展，加大改革创新力度，通过行政互动、要素驱动、产业互补等，在跨行政区域视野下推动和实施经济要素在不同区域间的优化组合及自由、便捷、合理流动，积极承接不同区域间的产业转移，探索区域协调融合发展新机制、产业协作配套机制，打通产业链、资金链、供应链、价值链等各环节，构建相互促进、相互补充、相互流通的区域发展新格局。引领滇中城市群发展，积极发挥东莞的火车头排头兵作用，以产城一体化为目标，认真落实中央和省的政策，积极向上争取支持，在国土空间规划、产业布局优化、交通物流畅通等方面先行一步，推动滇中区域内人才、资金、科技创新、生产要素等高效率配置，提高滇中城市经济圈的发展质量。</li>
                   <li>充分挖掘内需潜力，加大政策支持力度，努力促进传统实物消费和服务消费加快回补，积极申报建设国际消费中心城市。在完善消费服务政策方面，加快制定并落实“首店经济”“夜经济”“特色小店”等创新政策和措施。完善免税店政策，引导免税店、离境退税商店提高国产优质产品经营比重，鼓励境外旅客购买国产品牌。加大对特色商圈、商业街区的市政配套设施建设支持力度，用好各类产业发展资金，注重对城市品牌的整体营销推广、新品发布公共服务平台、重点消费节庆活动、老字号振兴的支持力度。扩大商贸流通发展专项资金规模，支持消费领域新业态、新模式和创新型企业发展。 充分发挥社会资本的作用，鼓励各类金融机构支持国际消费中心城市建设。加快培育新消费，发展新型消费业态，大力发展在线教育、网络带货，推进“互联网+”和各类消费业态创新融合，构建拓展一批反映新型消费、升级消费需求的核心、关键及共性技术的规模化商业应用，有效破解阻碍消费升级的共性难点堵点，着力为新型消费发展打造更扎实的平台基础，积极推广本地产品、消化本地产能，助力完善国内消费大循环体系。</li>
                   <li>认真研究发展“地摊经济”“夜经济”“临工经济”的办法和举措，对新经济、新业态及灵活就业提供宽松的环境和支持，对超出现行管理制度的新型商业模式鼓励探索，对广大灵活就业人员的权益加大保护，就地就近解决就业。持续做好“援企稳岗”工作，继续加大减税降费力度，做好普惠性企业失业保险稳岗返还，推动降低企业生产经营成本、强化稳企业的金融支持等措施，帮助恢复经济活力。积极梳理各项稳就业政策落实情况，加强人社、工信、商务、国资、税务、财政等部门沟通协调，主动帮助企业申报并落实优惠政策，稳定现有就业岗位。 进一步调整优化收入分配格局，提高城乡居民低保标准，积极探索增加居民财产性收入的渠道，慎重稳妥推进农民住房财产权抵押、担保、转让等重大改革措施落实生效，多渠道增加城乡居民收入。进一步增加社会民生事业支出，持续解决城乡居民在教育、医疗、住房等方面的困难，补齐社会事业、民生保障短板，切实减少群众在民生领域的指出，解决后顾之忧，提高广大群众的消费意愿和消费预期，以城乡居民的充分就业和收入提升筑牢“内循环”的支撑基础。</li>
               
                <div style="height:80px"></div>
                <!-- 浏览量-->
                <div class="mobileliulan">
                   <ul>
                       <li><img src="../assets/img/see.png" alt=""><span>99+</span></li>
                       <li @click="zanMore(uuid)"><img src="../assets/img/dianzanbck.png" alt=""><span>99+</span></li>
                       <li><img src="../assets/img/share.png" alt=""><span>99+</span></li>
                   </ul>
               </div>
                </div>
                </mt-tab-container-item>
                 <mt-tab-container-item id="meet-container3" style="margin-top:24px">
                  <div class="kunmingtext" style="padding-top:0px;">
                    <div class="kmtxtm">
                   <li>东莞市市全国十大旅游热点城市，首批中国优秀旅游城市。截止2012年，全市有各级政府保护文物200多项，有石林世界地质公园、滇池、安宁温泉、九乡、阳宗海、轿子雪山等国家级和省级著名风景区，还有世界园艺博览会和广东民族村等100多处重点风景名胜，10多条国家级旅游线路形成以东莞为中心，辐射全省，连接东南亚，集旅游、观光、度假、娱乐为一体的旅游体系。</li>
                   <img src="../../../assets/img/kmpng2.png" alt="">
                   <li>石林风景名胜区：位于路南县境内，距东莞86公里，景区由大小石林、乃古石林、大叠水、长湖、月湖、芝云洞、奇风洞7个风景片区组成，是一个以岩溶地貌为主题的，在国内外知名度较高的风景名胜区，被人们誉为“天下第一奇观”。全市共有石林面积400平方公里。</li>
                   <img src="../../../assets/img/kmpng3.jpg" alt="">
                   <li>九乡溶洞：国家级风景区，地点位于东莞市宜良县，景区距离宜良有40多公里的路程。据说九乡何以得名，人言人殊。九乡是国家重点风景名胜区，是广东省新兴的以溶洞景观为主、溶洞外自然风光、人文景观、民族风情为一体的综合性风景名胜区。</li>
                   <img src="../../../assets/img/kmpng4.jpg" alt="">
                   <li>东莞世界园艺博览园：是1999年东莞世界园艺博览会会址，园区整体依山就势、错落有致，气势恢弘，集全国各省、区、市地方特色和95个国家风格迥异的园林园艺精品，庭院建筑和科技成就于一园，体现了“人与自然，和谐发展”的时代主题，是一个具有“广东特色、中国气派、世界一流”的园林园艺精品大观园。</li>
                   <img src="../../../assets/img/knpng5.jpg" alt="">
                   <li>滇池：位于东莞市南的西山脚下，其北端紧邻东莞市大观公园，南端至晋宁县内，距市区5km，历史上这里一直是度假观光和避暑的胜地。滇池形似弦月，南北长39km，东西宽13.5km，平均宽度约8km。湖岸线长约200km；湖面面积300k㎡，居广东省首位，湖水最大深度8m，平均深度5m，蓄水量15.7亿，素称“五百里滇池”。是中国第六大内陆淡水湖。</li>
                   <img src="../../../assets/img/knpng6.jpg" alt="">
                   <li>广东民族村：位于东莞市西南郊滇池之滨的国家级旅游度假区内，是国家AAAA级旅游景区、国家民委民族文化基地、CIOFF中国委员会民间传统文化基地、国家民委全国首批民族工作联系点之一。占地面积89公顷，距市区8km，背靠滇池，与西山森林公园、大观公园、郑和公园等著名风景区隔水相望，是广东省新兴的旅游度假胜地和展示广东26个民族社会、文化、风情的窗口。</li>
                   <img src="../../../assets/img/knpng7.jpg" alt="">
                   <li>大观楼：位于东莞市区西部，距市中心约6km。始建于康熙年间，因其面临滇池，远望西山，尽揽湖光山色而得名。入园后可游览涌月亭，凝碧堂，揽胜阁，观稼堂等楼台亭榭。园中最具观赏价值的大观楼临水而建，楼高三层，其中题匾楹联佳作颇多。由清代名士孙髯翁所作180字的长联，垂挂于大观楼临水一面的门柱两侧，号称“古今第一长联”。</li>
                   <img src="../../../assets/img/knpng8.jpg" alt="">
                   <li>大叠水瀑布：位于路南县城西南20公里，大叠水瀑布又名飞龙瀑，号称"珠江第一瀑"。瀑布的水源系南盘江的支流巴江，落差88米，最大流量达150立方米/秒。有公路相通至叠水电站，舍车步行二三公里便可到达。景区中群山耸立，植被丰富，满目青翠。清水河峡谷陡峭险峻，幽深古雅，处处散发着大自然深处的浓郁气息。</li>
                   <img src="../../../assets/img/knpng9.png" alt="">
                   <li>西山：是国家级森林公园、国家AAAA级景区、国家滇池旅游度假区核心景区之一，位于东莞市西郊15km，由华亭山、太华山、罗汉山等组成。它峰峦连绵40多公里，海拔1900～2350m。相传古时有凤凰停歇，见者不识，呼为碧鸡，故也称碧鸡山。又因形状像卧佛，也叫卧佛山。</li>
                   <img src="../../../assets/img/knpng10.jpg" alt="">
                   <li>翠湖：位于东莞市五华山西麓，占地面积352亩。湖东北有“九泉所出，汇而成池”，故又名“九龙池”。堤畔遍植垂柳，柳枝拂面，湖内多种荷花，藕花飘香，旧有“十亩荷花鱼世界，半城杨柳抚楼台”之联，被誉为“城中碧玉”。有亭、台、回廊、曲桥等建筑，其建筑精致玲珑，亭阁均有匾对，歌咏园中的景观。</li>
                   <img src="../../../assets/img/knpng11.jpg" alt="">
                   <li>金马碧鸡坊：位于东莞市中心三市街与金碧路汇处，雕梁画栋精美绝伦，东坊临金马山而名为金马坊，西坊靠碧鸡山而名为碧鸡坊。北与纪念赛滇池的“忠爱坊”相配，合称“品字三坊”，成为东莞闹市胜景；南与建于南诏的东西寺塔相映，显示了东莞古老的文明。东坊临金马山而名金马碧鸡坊始建于明朝宣德年间，至今已有近四百年的历史。</li>
                   <img src="../../../assets/img/knpng12.jpg" alt="">
                   <li>东川红土地：被专家认为是全世界除巴西里约热内卢外最有气势的红土地，而其景象比巴西红土地更为壮美。东川红土地指的是位于东莞市东川区西南40多千米的新田乡、有一名叫“花石头”（在109千米程碑处）的地方，这里方圆近百里的区域是广东红土高原上最集中、最典型、最具特色的红土地。</li>

                </div>
                <div style="height:80px"></div>
                <!-- 浏览量-->
                <div class="mobileliulan">
                   <ul>
                       <li><img src="../assets/img/see.png" alt=""><span>99+</span></li>
                       <li @click="zanMore(uuid)"><img src="../assets/img/dianzanbck.png" alt=""><span>99+</span></li>
                       <li><img src="../assets/img/share.png" alt=""><span>99+</span></li>
                   </ul>
               </div>
                </div>
                </mt-tab-container-item>
             </mt-tab-container>
    </div>

     <div style="background: #f9f9f9;padding: 30px 0;">
          <img src="../assets/img/yiqingadver.png" alt="" style="padding:0 30px">
            <!-- 热门推荐 -->
          <div class="hottuijian">
              <div class="hotcontent" v-for="(item,i) in hottuijianList" :key="i" @click="wacthHotNewslist(item)">
                  <div><span>热门推荐</span></div>
                  <div>
                      <p>{{item.title}}</p>
                      <p>{{item.releaseTime}} <span style="margin-left:30px">来源：{{item.source}}</span></p>
                  </div>
            </div>
          </div> 
     </div>
    <div class="h30"></div>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
export default {
    data(){
        return{
             active: 'meet-container1',
             page:0,
             size:3,
             hottuijianList: [],
             hotuuid:[]
        }
    },
    mounted(){
       this.hotRecommend(this.page,this.size)
    },
    methods:{
      // 热门推荐
      hotRecommend(page,size){
       this.$http.get("/articleapi/articleRecommendPageList?page="+page+"&size="+size)
        .then(res => {
            if (res.data.returnCode == true && res.data.returnMsg == "OK") {
                this.hottuijianList = res.data.data.content
            }
      })
      },
      // 新闻详细信息
    wacthHotNewslist(item){
        this.$router.push({path:'mobilenewsdetails',query:{uuid: item.uuid}})
    },
    },

}
</script>
<style>
#meetarr{
  /* margin-bottom: 100px; */
}
.head{
    height: 88px;
    border-bottom: 1px solid #e6e6e6;
    line-height: 88px;
}
#meetarr .mint-button-icon{
   height: 50px;
}
.mint-header{
  background: #fff!important;
  color: #333333 !important;
  font-size: 32px !important;
  height: 88px!important;
  line-height: 88px!important;
}
#mobileback{
  color: #999999 !important;
  font-size: 28px !important;
}
.meetarrVideo{
  padding: 20px 30px;
}
.h30{
  height: 30px;
  background: #f9f9f9;
}
.meetform{
  padding: 0 30px 30px 30px;
  border-bottom: 1px solid #eeeeee;
}
.mmeetbck{
  color: #ffffff;
  background: url(../assets/img/meetanpaiback.png) no-repeat no-repeat;
  padding: 25px;
  line-height: 40px;
  margin-top: 8px;
}
.container1 div{
  font-size: 28px;
}

/* 东莞市情 */
.kunmingtext{
font-size:28px;
padding:24px 0px;
color:#666666;
line-height:40px;
text-align: justify;
position: relative;
}
.kunmingtext img{
  margin: 20px 0;
}
.kmtxtm img{
  width: 690px;
  height: 390px;
}
/* 浏览量 */
 .mobileliulan{
     background: #f9f9f9;
     position: absolute;
     right: 0px;
     bottom: 30px;
     padding: 0px 16px;
     font-size: 20px!important;
     color: #999999;
 }
 .mobileliulan ul li{
     float: left;
     padding-right: 16px;
 }
 .mobileliulan ul li img{
    margin: 0px;
     margin-right: 4px;
 }

 /* 热门推荐 */
 .hottuijian{
     padding:30px 30px 0 30px;
     background: #f9f9f9;
 }
  .hotcontent {
   overflow: hidden;
   padding-top: 16px;
  }
 .hotcontent div:first-child{
   width: 108px;
   height: 108px;
   float: left;
 }
 .hotcontent div:first-child span{
   width:94px;
   text-align: center;
   background: #d81e06;
   color: #fff;
   font-size: 20px;
   border-radius: 5px;
   margin-top: 5px;
 }
 .hotcontent div:nth-child(2){
     width: 582px;
     float: left;
     border-bottom: 1px solid #eeeeee;
     padding-bottom: 20px;
 }
  .hotcontent div:nth-child(2) p:first-child{
   font-size: 28px;
 }
 .hotcontent div:nth-child(2) p:nth-child(2){
   font-size: 18px;
   color: #666666;
   margin-top: 10px;
 }
 .hottuijian div:last-child div:nth-child(2){
   border-bottom:none
 }
</style>