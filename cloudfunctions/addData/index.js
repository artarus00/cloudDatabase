// 云函数入口文件
const cloud = require('wx-server-sdk')
const productsCollection = db.collection('products')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return await productsCollection.add({
    data:{
      data: {
        num: 8,
        image: "/image/7.jpg",
        price: 5
      }
    }
  })
}