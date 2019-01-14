<template>
    <div class="all">
        <hot-header></hot-header>
        <hot-mains :data="hotdata"></hot-mains>
        <hot-footer></hot-footer>
    </div>
</template>

<script>
   
   
/*     import MescrollVue from 'mescroll.js/mescroll.vue' */   
    import HotHeader from "../components/Hot/HotHeader";
    import HotFooter from "../components/Hot/HotFooter";
    import HotMains from "../components/Hot/HotMains";
    import  showphone from '../api/Hot'

    export default {
        name: "Hot",
        props:["data"],
        data(){
          return{
                hotdata :[]
           }
        },  
        methods:{
            _InitPhone(){
                let paramsid = this.$route.params.id;
                showphone.getHot(data=>{
                    this.hotdata = data
                        console.log( this.hotdata)
                    //this.detailsSlide=data.product
                    //this.item=data.product[paramsid];
                    //  console.log(data.product[paramsid])
                });
            },
        },
        mounted() {
            this._InitPhone()
        },
        components:{HotFooter, HotHeader,HotMains}
    }
</script>

<style>
@import "../../static/css/swiper.min.css";

.all{ height:100%; display:flex; flex-direction:column;background: #fff;}

</style>
