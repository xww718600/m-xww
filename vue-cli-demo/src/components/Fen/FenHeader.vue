<template>
    	<header>
                <ul class="head">
                        <li>
                                <i class="iconfont">&#xe64d;</i>
                                <input type="text" placeholder="小米众筹 米家投影仪 青春版">
                        </li>
                        <li><i class="iconfont">&#xe628;</i></li>
                </ul>
        </header>

</template>

<script>
    export default {
        name: 'FenHeader',
    };


</script>

<style scoped>
header{ height:.5rem; width: 100%;}
header .head{ display:flex;width: 100%; height:.5rem;border-bottom: 1px solid #ccc; background:#fafafa; justify-content:space-around;}
header .head li:nth-child(1){ width:3.15rem;border:1px solid #ccc;border-radius:.04rem;height:.32rem;margin-top: .07rem;display: flex;justify-content:space-around;background: #fff;}
header .head li:nth-child(1) i{font-size: 18px;color:#ccc;text-align: center;line-height:.32rem;}
header .head li:nth-child(1) input{
    width:85%;
    font-size:14px;
    border:0; 
    color:#fff;
    height:.29rem;
}
header .head li:nth-child(2) i{  font-size:22px; color:#939393; line-height:.5rem;}
</style>
