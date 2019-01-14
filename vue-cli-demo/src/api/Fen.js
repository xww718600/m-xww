export const FenUrl = "http://localhost:3000/vue-cli-server/data/Fen"
export default {
    /**
     * 通过用户的编号来获取carts信息
     * @param cb 返回的数据
     */
    FenYou(cb) {
        fetch(FenUrl).then(res => {
            res.json().then(data => {
                cb(data)
            })
        })
    },

}