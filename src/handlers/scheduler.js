const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' })

exports.handler = async (event) => {
  try {
    const params = {
      TableName: 'deliveries-ttl',
      Item: {
        id: Math.floor(Math.random() * 100),
        delivery_id: Math.floor(Math.random() * 100),
        schedule_date: 1632772616,
        created_at: Date.now().toString()
      }
    }

    const result = await dynamo.put(params).promise()
    console.log('result - ', result)

    return {
      statusCode: 200,
      body: 'pioli'
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error.message)
    }
  }
}
