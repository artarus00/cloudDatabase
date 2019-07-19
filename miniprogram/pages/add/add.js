// pages/add/add.js
const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addData:function(event){
    wx.cloud.callFunction({
      name:addData
    }).then(
      res=>{
        console.log('add')
      }
    )
//     console.log('adddata')
//       productsCollection.add({
//       data: {
//         num: 8,
//         image: "/image/7.jpg",
//         price: 5
//       },
//       success: res => {
//         // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
//         console.log(res)
//       }
// })
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