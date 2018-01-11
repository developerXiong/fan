<template>
    <v-tab :items="tabItems">
        <div slot="main">
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">处理前</label>
                <div class="layui-input-block">
                    <textarea v-model="beforeTxt" placeholder="待处理字符串..." class="layui-textarea" rows="15"></textarea>
                </div>
            </div>
            <div class="layui-form-item layui-form-text" v-for="(item,index) in ruleA">
                <label class="layui-form-label">替换规则</label>
                <div class="layui-input-inline">
                     <input v-model="ruleA[index]"  class="layui-input" />
                </div>
                <div class="layui-input-inline">
                    <span style="height:38px;line-height:38px;">→_→</span>
                </div>
                <div class="layui-input-inline">
                    <input type="text" class="layui-input" v-model="ruleB[index]" placeholder="替换字符串"/>
                </div>
                <i class="layui-icon editicon" @click="addRule" v-if="index==0">&#xe654;</i>  
                <i class="layui-icon editicon" @click="removeRule(index)" v-else>&#xe640;</i>  
            </div>
            <div class="layui-form-item layui-form-text">
                <div class="layui-input-block">
                    <v-button @click="replaceTxt()">
                        <span>替换 <i class="layui-icon">&#xe61a; </i></span>
                    </v-button>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">处理后</label>
                <div class="layui-input-block">
                    <textarea v-model="afterTxt" placeholder="处理后字符串..." class="layui-textarea" rows="15"></textarea>
                </div>
            </div>
        </div>
        </v-tab>
</template>
<style>
.editicon{font-size: 30px; color: #2F4056;cursor: pointer;}
</style>

<script>
    export default {
        data() {
            return {
                tabItems:[
                    {
                        Name:'main',
                        Title:'字符串替换'
                    },
                    {
                        Name:'code',
                        Title:'查看代码',
                        Url:'http://coding.net/u/yimocoding/p/metools/git/blob/master/src/pages/strsplit.vue'
                    }
                ],
                beforeTxt:'',
                afterTxt:'',
                selectRule:[''],
                ruleA:[''],
                ruleB:[''],
            }
        },
        methods: {
            replaceTxt(){
                var str=this.beforeTxt;
                var r1=this.ruleA;
                var r2=this.ruleB;
                
                for(var i=0;i<r1.length;i++){
                    str=str.replace(new RegExp(r1[i],"g"), r2[i]); 
                }
                this.afterTxt=str;
            },
            addRule(){
                this.ruleA.push('');
                this.ruleB.push('');
            },
            removeRule(index){
                this.ruleB.splice(index,1);
                this.ruleA.splice(index,1);
            }
        }
    }

</script>