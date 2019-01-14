<template>
            <div class="left">
                    <ul class="lu-zuo">
                        <router-link class="ul-li" tag="li" :to="'/fen/'+idx" v-for="(titlelists,idx) in data" :key="idx" :v-if="data">{{titlelists.title}}</router-link>
                    </ul>
            </div>
</template>

<script>

// import indexMaiApi from "../../indexAjax/myData"
    export default {
        name: "FenZuo",
        props:["data"],
        data(){
        return {

            }
    },
    methods:{
       chabgeColor() {
           $(".lu-zuo li").click(function(){
               $(this).css({"border-left":"3px #f60 solid", color:"#f60"});
               $(this).siblings().css({"border-left":"3px solid transparent",color:"#555"});
                
           })
       }
    },
    mounted() {
        this.chabgeColor()
    },
    updated() { 
           this.chabgeColor()
       },
};

</script>

<style scoped>

 .left{
    width:auto;
    height:auto;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: 1px solid #ccc;
}
.left::-webkit-scrollbar{
    display: none;
}
 .left .zuo{
    width:auto;
    height:auto;
   
}
 .left .lu-zuo li{
    font-size: 14px;
    /* width:.70rem; */
    width: 100%;
    height:.30rem;
    line-height:.30rem;
    text-align: center;
    margin:.17rem 0 .26rem;
}
.lu-zuo .ul-li{
    width: 100%;
}
</style>
