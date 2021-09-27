exports.handler = async (event) => {
  console.log('llego a mailer')
  console.log('event recibido - ', event)
  console.log(event.Records[0].dynamodb)
  console.log(event.Records[0].userIdentity)
  return { statusCode: 200, body: JSON.stringify('Llegamos a mailer') }
}
