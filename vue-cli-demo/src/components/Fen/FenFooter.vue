<template>
    <footer>
        	<ul>
            	<router-link to="/" tag="li">
                	<a href="#">
                    	<i class="iconfont">&#xe67e;</i>
                        <span>首页</span>
                    </a>
                </router-link>
            	<router-link to="/Fen/0" tag="li">
                	<a href="#" class="fenlei">
                    	<i class="iconfont">&#xe635;</i>
                        <span>分类</span>
                    </a>
               </router-link>
            	<router-link to="/Fen/0" tag="li">
                	<a href="#" class="faxian">
                    	<i class="iconfont">&#xe629;</i>
                        <span>发现</span>
                    </a>
                </router-link>
            	<router-link to="/Fen/0" tag="li">
                	<a href="#">
                    	<i class="iconfont">&#xe621;</i>
                        <span>购物车</span>
                    </a>
                </router-link>
            	<router-link to="/Fen/0" tag="li">
                	<a href="#">
                    	<i class="iconfont">&#xe619;</i>
                        <span>我的</span>
                    </a>
                </router-link>
            </ul>
    </footer>
</template>

<script>
    export default {
        name: 'FenFooter',
    };


</script>

<style scoped>
footer{ height:.5rem; background:#fff; border-top:1px solid #ccc;}
footer ul{ height:100%; display:flex;}
footer ul li{ flex:1; text-align:center; padding-top:.05rem}
footer ul li a{ display:block;color:#999;}
footer ul li a i{ display:block; font-size:.13rem;}
footer ul li a span{ display:block; font-size:.08rem;}
footer ul li a.fenlei{ color:#ff6600;}
</style>
