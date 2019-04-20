let initialized = false

const init = async () => {
    if (initialized) {
        return
    }

    process.env.restaurants_api   = "https://3a2m7xlgj3.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
    process.env.restaurants_table = "restaurants-dev-workshop-razvan"
    process.env.order_events_stream = 'orders-dev-workshop-razvan'
    process.env.AWS_REGION        = "eu-west-1"
    process.env.restaurant_notification_topic = 'restaurants-dev-workshop-razvan'
    process.env.TEST_ROOT = "https://3a2m7xlgj3.execute-api.eu-west-1.amazonaws.com/dev"

    initialized = true
}

module.exports = {
    init
}