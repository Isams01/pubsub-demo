# pubsub-demo

Demonstrate using

    Subscriptions

        Confirm that a message is sent to each subscription. i.e. each subscription has its own queue and gets a copy of a published message.

        Confirm that message is delivered once even though multiple clients are using the same subscription.

    Ack/Nack

        What happens when you let a delivery timeout? Confirm message gets re-delivered. Are there any caveats with PubSub? How many times does it retry? Is it configurable.

        What happens when you nack it? Is it retried it? Or does it immediate go to dead letter queue

    Dead Letter Queue

    Timeouts

    Subscription filters

        Can we filter messages based on some attribute? What kind of attribute?

Pricing

    How much would it cost if we packaged the signal data in message? A device uses approx 15 MB/month.

    How much would processing messages for one device cost?

Bonus

    What is the throughput? Get a sense of how many messages per second can be processed.