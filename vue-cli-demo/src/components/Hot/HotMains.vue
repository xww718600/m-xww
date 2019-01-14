<template>
    <div class="main">
                <hot-mains1 :data="data.lun"></hot-mains1>
                <hot-mains2 :v-if="data.nav" :navs="data.nav"></hot-mains2>
                <hot-mains3 :data="data.detailsSlide"></hot-mains3>
    </div>
</template>                     

<script>

    import HotMains1 from "./HotMains1";
    import HotMains2 from "./HotMains2";
    import HotMains3 from "./HotMains3";
    export default {
        name: "HotMains",
        props:["data"],
      components: {HotMains1, HotMains2,HotMains3},
      mounted() {
        //   console.log(data.nav)
      },
    }
</script>

<style scoped>
.main{flex:1; overflow:auto;background: #d81a48;display: flex;flex-direction: column;}
</style>
