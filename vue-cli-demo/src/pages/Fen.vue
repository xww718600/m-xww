<template>
    <div class="all">
        <fen-header></fen-header>
        <div class="main">
                <div class="zuo">
                    <Fen-Zuo :data="goodlist"></Fen-Zuo>
                </div>
                <div class="you">
                    <Fen-You :data="item" v-if="item"></Fen-You>   
                </div>
        </div>
        <fen-footer></fen-footer>
    </div>
</template>

<script>
   
   
/*     import MescrollVue from 'mescroll.js/mescroll.vue' */   
    import FenHeader from "../components/Fen/FenHeader";
    import FenFooter from "../components/Fen/FenFooter";
    import FenZuo from "../components/Fen/FenZuo";
    import FenYou from "../components/Fen/FenYou";
    import  showphone from '../api/Fen'

    export default {
        name: "Fen",
        data() {
        return {
            PhoneList:null,
            goodlist:null,
            item:{}
        }
        },
        methods:{
            _InitPhone(){
                let paramsid = this.$route.params.id;
                showphone.FenYou(data=>{
                    this.PhoneList=data.product
                    this.goodlist =data.titlelists
                    this.item=data.product[paramsid];
                    // console.log( this.item)
                    //  console.log(data.product[paramsid])
                });
            },
        },
        created () {
            this._InitPhone() 
        },
        mounted() {
            this._InitPhone()
        },
        updated() {
            this._InitPhone()
        },
        components:{FenHeader, FenFooter,FenZuo,FenYou}
        }
</script>

<style>
.all{ height:100%; display:flex; flex-direction:column;background: #fff;}
.main{
    display: flex;
    overflow:auto;
}
.you{
    width: 80%;
    height:auto;
    overflow-x: hidden;
    overflow-y: auto;
}
.zuo{
    width: 20%;
    height:auto;
    overflow-x: hidden;
    overflow-y: auto;
}
.zuo::-webkit-scrollbar{
    display: none;
}
.you::-webkit-scrollbar{
    display: none;
}

</style>
