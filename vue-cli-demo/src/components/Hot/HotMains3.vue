<template>
                    <!--- list1 -->
    <div>
                <div class="list2" :key="idx" v-for="(num,idx) in data">
                        <h1>{{num.h1}}</h1>
                        <div class="top">  
                                <ul class="box" :key="idx3" v-for="(num3,idx3) in num.proId2" :v-if="num3">
                                        <li><img :src="num3.pic1"></li>
                                        <li>
                                                <p>{{num3.p1}}</p>
                                                <p>{{num3.p2}}<span>{{num3.span1}}</span></p>
                                        </li>
                                        <li>
                                                <p>{{num3.p3}}</p>
                                                <p>{{num3.p4}}</p>
                                        </li>
                                </ul>
                        </div>
                        <div class="bottom">
                                <div class="nei" :key="idx2" v-for="(num2,idx2) in num.proId" :v-if="num2">
                                        <img :src="num2.pic2">
                                        <p>{{num2.p5}}</p>
                                        <p>{{num2.p6}}</p>
                                        <p>{{num2.p7}}<span>{{num2.span2}}</span></p>
                                        <p>{{num2.p8}}</p>
                                </div>
                        </div>
                </div>

                        <!--- list3 -->
                <div class="list3"><img src="../../../static/img/hot21.png"></div>
    </div>
</template>

<script>

// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "HotMains3",
        props:["data"],
        data(){
        return {
                
            }
        },
        components: {
               
        },
        mounted(){
        //     console.log(this.data)
        }
    }

</script>

<style scoped>
    /* --list2-- */
.list2{width: 100%;height:auto;}
.list2 .top{padding:0 .06rem;}
.list2 h1{
        font-size: 20px;
        font-family: Arial;
        color:#fad167;
        line-height: .56rem;
        text-align: center;
        margin-top:.05rem;
    }
.list2 .top .box img{width: 100%;height:auto;}
.list2 .top .box{background: #fff;}
.list2 .top .box li:nth-of-type(2){display: flex;justify-content: space-around;margin-top: .2rem;}
.list2 .top .box li:nth-of-type(3){display: flex;justify-content: space-around; margin-bottom: .07rem;}
.list2 .top .box li:nth-of-type(2) p:nth-of-type(1){
    font-size: 17px;
    font-weight: bold;
    text-align: center;
}  
.list2 .top .box li:nth-of-type(2) p:nth-of-type(2){
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color:#e8584d;
}  
.list2 .top .box li:nth-of-type(2) p:nth-of-type(2) span{
    font-size: 12px;
    font-weight: 300;
    color:#ccc;
    text-decoration: line-through;
    margin-left: .07rem
}  
.list2 .top .box li:nth-of-type(3) p:nth-of-type(1){
    font-size: 12px;
    text-align: center;
    
}  
.list2 .top .box li:nth-of-type(3) p:nth-of-type(2){
    display: block;
    font-size: 12px;
    color:#fff;
    font-weight: bold;
    width: 1rem;
    height:.3rem;
    line-height:.3rem;
    text-align: center;
    background: #e9635a;
    margin-bottom: .15rem;
}  

.list2 .bottom{
    height:auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding:0 .06rem;
}
.list2 .bottom .nei{
    width: 49%;
    height:auto;
    background: #fff;
    margin-bottom: .07rem;
}
.list2 .bottom .nei img{
    width: 100%;
    height:auto;
}
.list2 .bottom .nei p:nth-of-type(1){
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height:.3rem;
    margin-top: .15rem;
}
.list2 .bottom .nei p:nth-of-type(2){
    font-size: 12px;
    text-align: center;
}
.list2 .bottom .nei p:nth-of-type(3){
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color:#e8584d;
    line-height:.3rem;

}
.list2 .bottom .nei p:nth-of-type(3) span{
    font-size: 12px;
    font-weight: 300;
    color:#ccc;
    text-decoration: line-through;
    margin-left: .07rem
}

.list2 .bottom .nei p:nth-of-type(4){
    display: block;
    font-size: 12px;
    color:#fff;
    font-weight: bold;
    width: .9rem;
    height:.27rem;
    line-height:.27rem;
    text-align: center;
    background: #e9635a;
    margin:0 auto;
    margin-bottom: .18rem;
}


.list3{width: 100%;height:auto;}
.list3 img{width: 100%;height:auto;}

</style>
