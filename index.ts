export function handler(event, context, callback) {
    let currentTime = new Date();
    callback(null, {
        statusCode: '200',
        body: 'The time is: ' + currentTime.toString(),
    });
}
