// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
      '/images/5.jpg',
      '/images/6.jpg',
      '/images/7.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 6000,
    duration: 1500
  },
  add:function(event){
    console.log('add');
    wx.navigateTo({
      url: '../add/add',
    })
    },
  find: function (event) {
    console.log('find');
    wx.navigateTo({
      url: '../find/find',
    })
  },
  info: function (event) {
    console.log('info');
    wx.navigateTo({
      url: '../info/info',
    })
  },
  update: function (event) {
    console.log('update');
    wx.navigateTo({
      url: '../update/update',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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