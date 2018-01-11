<template>
    <v-tab :items="tabItems">
        <div slot="generatecode">
            <v-input-txt label="文本/Url" placeholder="将要生成二维码的文本或链接" v-model="dataTxt"></v-input-txt>
            
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">颜色背景</label>
                <div class="layui-input-inline">
                    <input type="text" class="layui-input" placeholder="颜色 默认#ffffff" v-model="color"/>
                </div>
                <div class="layui-input-inline">
                    <input type="text" class="layui-input" placeholder="背景 默认#1aa094" v-model="bgcolor"/>
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <v-button @click="convert(dataTxt,color,bgcolor)">生成</v-button>
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <img :src="qrcodeImg" />
                </div>
            </div>
        </div>
        <div slot="decode">
           <div id="qrfile" qrCanvas="qr-canvas" qrResult="qrcode_content">
	            <div title="把您的二维码拖到这儿，即可识别内容">
	                <div class="browser" id="canvas_ext_div">
		              <label style="height:30px;line-height:30px;">
		                <span>点击选择识别的二维码</span>
		                <input type="file" name="files" accept="image/*" onchange="webqr.handleFiles(this.files);" title="Click to upload qrcode">
		              </label>
		            </div>
	            </div>
	            <canvas style="border: 1px solid #CCC;" id="qr-canvas" ></canvas>
	        </div>
			<div>识别结果：<p id="qrcode_content" style="border: 1px solid #ccc;line-height: 30px;"></p></div>
        </div>
    </v-tab>
</template>
<script>
import jrQrcode from 'jr-qrcode'
import common from '../utils/common'
export default {
    data(){
        return {
            tabItems:[
                {
                    Name:'generatecode',
                    Title:'二维码生成'
                },
                {
                    Name:'decode',
                    Title:'二维码解码'
                },
                {
                    Name:'source',
                    Title:'jrQrcode使用',
                    Url:'https://github.com/diamont1001/jrQrcode'
                },
                {
                    Name:'code',
                    Title:'查看代码',
                    Url:"http://coding.net/u/yimocoding/p/metools/git/blob/master/src/pages/qrcode.vue"
                }
            ],
            qrcodeImg:'',
            dataTxt:'',
            color:'',
            bgcolor:'',
            imgText:''
        }
    },
    created(){
        this.$nextTick(()=>{
            this.selectDecode();
        })
    },
    watch:{
        'dataTxt':'zidong'
    },
    methods:{
        zidong(){
            this.convert(this.dataTxt,this.color,this.bgcolor);
        },
        convert(txt,color,bgcolor){
            var imgBase64 = jrQrcode.getQrBase64(txt,{
                padding		: 10,   //二维码四边空白，默认为10px
                width		: 256,  //二维码图片宽度，默认为256px
                height		: 256,  //二维码图片高度，默认为256px
                correctLevel	: QRErrorCorrectLevel.H,    //二维码容错level，默认为高
                background      : color||"#ffffff",    //二维码颜色
                foreground      : bgcolor||"#1aa094"     //二维码背景颜色
            });
            this.qrcodeImg=imgBase64;
        },
        selectDecode(){
            if(typeof(webqr)!='undefined'){
                webqr.load('qrfile',200,200);
            }
            else{
                common.dynamicLoadJs('/static/qrcode/llqrcode.js',function(){
                    common.dynamicLoadJs('/static/qrcode/webqr.js',function(){
                        webqr.load('qrfile',200,200);
                    })
                });
            }
        }
    }

}
</script>