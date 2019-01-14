<template>
    	<header>
                <ul class="head">
                        <li><i class="iconfont">&#xe668;</i></li>
                        <li>
                                <i class="iconfont">&#xe64d;</i>
                                <input type="text" placeholder="小米众筹 米家投影仪 青春版">
                        </li>
                        <li><i class="iconfont">&#xe621;</i></li>
                </ul>
        </header>
</template>

<script>
    export default {
        name: 'HotHeader',
    };


</script>

<style scoped>
header{ height:.5rem; width: 100%;}
header .head{ display:flex;width: 100%; height:.5rem; background:#fafafa; justify-content:space-around;}
header .head li:nth-child(1){ color:#939393; line-height:.45rem;}
header .head li:nth-child(2){ width:2.9rem;border:1px solid #ccc;border-radius:.04rem;height:.32rem;margin-top: .07rem;display: flex;justify-content:space-around;background: #fff;}
header .head li:nth-child(2) i{font-size: 18px;color:#ccc;text-align: center;line-height:.32rem;}
header .head li:nth-child(2) input{
    width:90%;
    font-size:14px;
    text-indent: .1rem;
    border:0; 
    color:#a5a5a5;
    height:.29rem;
}
header .head li:nth-child(3){color:#939393;line-height:.45rem;}
header .head li:nth-child(1) i, li:nth-child(3) i{font-size:20px;}
</style>
