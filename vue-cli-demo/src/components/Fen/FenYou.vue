<template>
    <div  class="right">
            <div  :key="idx" v-for="(num,idx) in data.proId1" :v-if="data.proId1">
                    <h1><img :src="num.pic1"></h1>
                    <div class="xia">
                        <div :key="idx2" v-for="(num2,idx2) in num.proId" :v-if="num2">
                                <p>{{num2.titles}}</p>
                                <dl :key="idx3" v-for="(num3,idx3) in num2.proId2" :v-if="num3">
                                        <dt><img :src="num3.pic"></dt>
                                        <dd>{{num3.goodsid}}</dd>
                                </dl>
                        </div>
                    </div>
                    <h2><img :src="num.pic2"></h2>
<!--                     <p>{{num.titles2}}</p>
                    <div class="xia">
                            <dl :key="idx2" v-for="(num2,idx2) in num.proId2" :v-if="num2">
                                    <dt><img :src="num2.pic"></dt>
                                    <dd>{{num2.goodsid}}</dd>
                            </dl>
                    </div>

 -->            </div>
    </div>
</template>

<script>

// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "FenYou",
        props:["data"],
        data(){
        return {

            }
        },
        components: {

        },
        mounted(){
            console.log(this.data)
        }
    }
</script>

<style scoped>
 .right{
    flex:1;
    height:auto;
    overflow-x: hidden;
    overflow-y: auto;
}
 .right::-webkit-scrollbar{
    display: none;
}

 .right h1{
    width:100%;
    height:1.1rem;
}
 .right h1 img{
    width: 2.8rem;
    height:100%;
    margin:0 auto;
    margin-top: .05rem
}
 .right h2{
    width:100%;
    height:.45rem;
    margin-bottom: .4rem;

}
 .right h2 img{
    width: 2.8rem;
    height:100%;
    margin:0 auto;
}


 .right .xia{
     width: 100%;
     height:auto;
} 
.right .xia>div{
     width: 100%;
     height:auto;
    display: flex;
    flex-wrap: wrap;
}
 .right .xia p{
    font-size: 16px;
    color:#555;
    text-align:center;
    width: 100%;
    height:.6rem;
    line-height:.6rem;
}

 .right .xia dl{
     width: 33%;
     height:auto;
    
}

 .right .xia dt{
    width: .48rem;
    height:.48rem;
    margin:0 auto;
}
 .right .xia dt img{
    width: .48rem;
    height:.48rem;
}

 .right .xia dd{
    font-size: 11px;
    color:#555;
    text-align:center;
    text-overflow: ellipsis;
    padding:.2rem 0;
}
</style>
