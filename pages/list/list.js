// pages/list/list.js
// 引入模拟的数据,此路径只能以当前页面为相对路径
let datas = require("../../datas/list-data.js")
console.log(datas, typeof datas)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [] // 准备一个空数组来接收模拟数据datas.list_data
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 更新data中listArr的状态值
    this.setData({
      listArr: datas.list_data
    })
  },

  // 点击跳转到detail详情页
  toDetail(event) {
    console.log(event)
    let index = event.currentTarget.dataset.index // 获取点击跳转对应的下标
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index // 拼串,传递下标给detail
    })
  },

  // 点击轮播图跳转到相关页面
  carouselToDetail(event) {
    console.log(event)
    let index = event.target.dataset.index // 获取点击跳转对应的下标
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index // 拼串,传递下标给detail
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
    console.log("页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面卸载")
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