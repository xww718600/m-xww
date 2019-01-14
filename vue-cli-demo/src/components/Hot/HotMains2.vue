<template>
            <!--- menu -->
        <div class="bbbox">
            <ul class="menu">
                        <li :key="idx" v-for="(n,idx) in navs">
                            <a href="javascript:;">
                                <span><img :src="n.pic"></span>
                                <span>
                                    {{n.tit}}
                                </span>
                            </a>
                        </li>
            </ul>
        </div>
</template>

<script>

    export default {
        name: 'HotMains2',
        props:["navs"],
        mounted() {
            //console.log(this.navs)
        },
    };


</script>

<style scoped>
    /* --menu-- */
.bbbox{
    width: 100%;
    height:.85rem;

}
.menu{
    width: 100%;
    height:.85rem;
    background-image:linear-gradient(to right,#d5123a,#f31143,#d5123a);
    display: flex;
}
.menu li{
    width: 20%;
    height:100%;
}
.menu li a{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.menu li a span img{width: .47rem;height:.47rem;margin:0 auto;}
.menu li a span{
    font-size: 12px;
    color:#ffe7b7;
    text-align: center;
}


</style>
