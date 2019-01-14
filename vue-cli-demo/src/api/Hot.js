export const HotUrl = "http://localhost:3000/vue-cli-server/data/Hot"
export default {
    /**
     * 通过用户的编号来获取carts信息
     * @param cb 返回的数据
     */
    getHot(cb) {
        fetch(HotUrl).then(res => {
            res.json().then(data => {
                cb(data)
            })
        })
    },

}