// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '天气热得不得了',
    userInfo: {}, //初始化用户的数据
    isShow: true
  },

  // 点击跳转到list页面
  handleClick() {
    wx.switchTab({
      url: "/pages/list/list" // page前加/表示绝对路径,不加表示当前界面
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 做一些初始化工作:发送请求,开启定时器
    console.log('onLoad 页面加载')
    console.log(this) // this是当前页面的实例对象
    this.getUserInfo()
  },

  getUserInfo() {
    // 判断用户是否授权了
    wx.getSetting({
      success: (data) => {
        console.log(data)
        /* scope.userInfo是authSetting的一个属性,遇到这种不规则的属性名不能写成data.authSetting.scope.userInfo,,上述写法把scope当做一个对象了,得把scope.userInfo整体用中括号括起来 */
        if (data.authSetting['scope.userInfo']) {
          // 用户已经授权
          this.setData({
            isShow: false
          })
        } else {
          // 用户没有授权
          this.setData({
            isShow: true
          })
        }
      }
    })

    // 获取用户登录的信息
    wx.getUserInfo({
      success: (data) => {
        console.log(data)
        // 更新data中的userInfo
        this.setData({
          userInfo: data.userInfo
        })
      },
      fail: () => {
        console.log('获取用户信息失败')
      }
    })
  },

  handleGetUserInfo(data) {
    console.log("用户点击了", data)
    // 判断用户点击的是否是允许
    if (data.detail.rawData) {
      // 用户点击的是允许
      this.getUserInfo()
    }
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