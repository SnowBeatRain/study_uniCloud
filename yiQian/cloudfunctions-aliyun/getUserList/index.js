'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  //event为客户端上传的参数
	console.log(event)
		const collection = db.collection('yiQian_test')
		const res = await collection.limit(event.pageSize).get()
  //返回数据给客户端
  return res
};