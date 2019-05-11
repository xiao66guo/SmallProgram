Page({

    /**
     * 页面的初始数据
     */
    data: {
        message:"js数据",
        sliderList:[],
        navList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        /* ---- 请求轮播图片数据 ---- */
        wx.request({
            url:"https://locally.uieee.com/slides",
            success:(res)=>{
                // console.log(res)
                // res.data
                // 1、设置页面的data数据
                // this.data.sliderList = res.data;  这个写法不是微信小程序的标准
                /*
                    this.setData 有2个功能:
                    1、更新数据
                    2、更新视图
                */
                this.setData({
                    sliderList: res.data
                });
            },
        });

        /* ---- 请求首页导航数据 ---- */
        wx.request({
            url: "https://locally.uieee.com/categories",
            success: (res) => {
                // console.log(res)
                // res.data
                // 1、设置页面的data数据
                // this.data.sliderList = res.data;  这个写法不是微信小程序的标准
                /*
                    this.setData 有2个功能:
                    1、更新数据
                    2、更新视图
                */
                this.setData({
                    navList: res.data
                });
            },
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log("B2:首页—监听页面初次渲染完成");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log("C2:首页—监听页面显示");
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // console.log("D2:首页—监听页面隐藏");
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        // console.log("E2:监听页面卸载");
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        // console.log("F2:监听用户下拉动作");
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        // console.log("G2:页面上拉触底事件");
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        // console.log("H2:用户点击右上角分享");
    }
})