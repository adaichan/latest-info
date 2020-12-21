// pages/detail/detail.js
// 引入模拟的数据,此路径只能以当前页面为相对路径
let datas = require("../../datas/list-data.js")
let appDatas = getApp();
console.log(appDatas, typeof appDatas)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {}, // 准备一个空对象来接收模拟数据datas.list_data[index]
    index: null, // 准备一个index属性来接收传递的下标参数
    isCollected: false, // 定义一个标识默认没有收藏
    isMusicPlay: false // 定义一个标识默认不播放音乐
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // 接收从list.js传来的下标参数
    let index = options.index
    // 更新data中detailObj的状态值,并存入下标
    this.setData({
      detailObj: datas.list_data[index],
      index // 同名的属性可以省略不写 index: index
    })

    // 根据本地缓存的数据判断用户是否收藏当前的文章
    let detailStorage = wx.getStorageSync('isCollected')
    console.log(detailStorage)

    if (!detailStorage) {
      // 在缓存中初始化空对象
      wx.setStorageSync('isCollected', {})
    }

    // 判断用户是否收藏
    if (detailStorage[index]) {
      this.setData({
        isCollected: true
      })
    }

    // // 监听音乐播放
    // wx.onBackgroundAudioPlay(() => {
    //   console.log("音乐播放")
    //   // 修改isMusicPlay状态值
    //   this.setData({
    //     isMusicPlay: true
    //   })
    //   // 修改appDatas中的数据
    //   appDatas.data.isPlay = true
    //   appDatas.data.pageIndex = index
    // })

    // // 判断音乐是否在播放
    // if (appDatas.data.isPlay && appDatas.data.pageIndex === index) {
    //   // 修改isMusicPlay状态值
    //   this.setData({
    //     isMusicPlay: true
    //   })
    // }

    // // 监听音乐暂停
    // wx.onBackgroundAudioPause(() => {
    //   // 修改isMusicPlay状态值
    //   this.setData({
    //     isMusicPlay: false
    //   })
    //   // 修改appDatas中的数据
    //   appDatas.data.isPlay = false
    //   // appDatas.data.pageIndex = index
    // })
  },

  // 点击修改isCollected的值
  handleCollection() {
    console.log(this)
    let isCollected = !this.data.isCollected
    // 更新状态
    this.setData({
      isCollected
    })
    // 提示收藏成功/取消收藏
    let title = isCollected ? '收藏成功' : '取消收藏'
    wx.showToast({
      title: title, // 同名的属性可以省略不写
      icon: 'success'
    })
    // 缓存收藏数据到本地 eg:{1:true 2:false 3...}
    let { index } = this.data
    // 不可行,会覆盖之前的状态
    // let obj = {}
    wx.getStorage({
      key: 'isCollected',
      success: (datas) => {
        console.log(datas, typeof datas)
        let obj = datas.data // {0: true}
        obj[index] = isCollected
        wx.setStorage({
          data: obj,
          key: 'isCollected',
          success: () => {
            console.log('缓存成功')
          }
        })
      }
    })
  },

  // // 音乐播放
  // handleMusicPlay() {
  //   let isMusicPlay = !this.data.isMusicPlay
  //   this.setData({
  //     isMusicPlay
  //   })
  //   // 控制音乐播放
  //   if (isMusicPlay) {
  //     // 开始播放
  //     let { dataUrl, title } = this.data.detailObj.music
  //     wx.playBackgroundAudio({
  //       dataUrl,
  //       title
  //     })
  //   } else {
  //     // 暂停播放
  //     wx.pauseBackgroundAudio()
  //   }
  // },

  // 点击分享到...
  handleShare() {
    wx.showActionSheet({
      itemList: [
        '分享到朋友圈',
        '分享到QQ空间',
        '分享到微博'
      ],
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