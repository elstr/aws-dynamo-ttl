const AWS = require('aws-sdk')
const moment = require('moment')

const dynamo = new AWS.DynamoDB.DocumentClient({ region: 'us-west-1' })
exports.handler = async (event) => {
  try {
    const schedule = (travelTime = moment().add(10, 'minutes').format('hh:mm A'))

    var params = {
      Item: {
        delivery_id: Math.floor(Math.random() * 100),
        schedule_date: moment(schedule).unix() // IMPORTANTE: HAY QUE PASARLE SECONDS
      },
      TableName: 'delivery_schedule'
    }
    const result = await dynamo.put(params)
    console.log('result - ', result)

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message)
    }
  }
}
