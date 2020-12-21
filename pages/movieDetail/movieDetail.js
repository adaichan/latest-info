// pages/movieDetail/movieDetail.js
let appDatas = getApp()
console.log(appDatas)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // 更新初始化对象
    this.setData({
      movieDetail: appDatas.data.moviesArr[options.index]
    })
  },
  
  // 在线播放
  playOnline() {
    wx.showToast({
      title: '抱歉，暂无权限',
      icon: 'loading',
      duration: 1000
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})