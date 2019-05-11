Page({

    /**
     * 页面的初始数据
     */
    data: {
        shopList:[],
        pageIndex: 0,
        pageSize:20,
        catId: 1,
        // 记录是否还有数据
        hasMore: true
    },
    // 自定义函数，用来加载更多数据
    loadMore:function(){
        // 如果没有更多数据就直接返回
        if(!this.data.hasMore) return;


        wx.request({
            url: "https://locally.uieee.com/categories/" + this.data.catId + "/shops",
            data: {
                _limit: this.data.pageSize,
                _page: ++this.data.pageIndex
            },
            success: (res) => {
                // console.log(res)

                var newList = this.data.shopList.concat(res.data);
                // 获取数据的总数
                var count = parseInt(res.header['X-Total-Count']);
                var flag = this.data.pageIndex * this.data.pageSize < count;

                this.setData({
                    shopList: newList,
                    hasMore: flag,
                })
            },
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        if (options.title){
            // 设置导航条首页传递过来的标题
            wx.setNavigationBarTitle({
                title: options.title,
            });
        } 
        // 把获取的参数设置到data中，方便复用
        this.setData({
            catId: options.cat
        });
        this.loadMore();
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        // 下拉刷新:先设置数据为空后，重新加载数据
        this.setData({
            shopList:[],
            pageIndex:0,
            hasMore:true
        });
        this.loadMore();
        wx.stopPullDownRefresh();
        
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.loadMore();
        
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        
    }
})