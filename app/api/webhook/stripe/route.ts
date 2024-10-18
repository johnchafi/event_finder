// // This example uses Express to receive webhooks
// const express = require('express');
// const app = express();

// // Match the raw body to content type application/json
// // If you are using Express v4 - v4.16 you need to use body-parser, not express, to retrieve the request body
// app.post('/webhook', express.json({type: 'application/json'}), (request, response) => {
//   const event = request.body;

//   // Handle the event
//   switch (event.type) {
//     case 'payment_intent.succeeded':
//       const paymentIntent = event.data.object;
//       // Then define and call a method to handle the successful payment intent.
//       // handlePaymentIntentSucceeded(paymentIntent);
//       break;
//     case 'payment_method.attached':
//       const paymentMethod = event.data.object;
//       // Then define and call a method to handle the successful attachment of a PaymentMethod.
//       // handlePaymentMethodAttached(paymentMethod);
//       break;
//     // ... handle other event types
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   // Return a response to acknowledge receipt of the event
//   response.json({received: true});
// });

// app.listen(8000, () => console.log('Running on port 8000'));


import stripe from 'stripe'
import { NextResponse } from 'next/server'
import { createOrder } from '@/lib/actions/order.actions'

export async function POST(request: Request) {
  const body = await request.text()

  const sig = request.headers.get('stripe-signature') as string
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

  let event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    return NextResponse.json({ message: 'Webhook error', error: err })
  }

  // Get the ID and type
  const eventType = event.type

  // CREATE
  if (eventType === 'checkout.session.completed') {
    const { id, amount_total, metadata } = event.data.object

    const order = {
      stripeId: id,
      eventId: metadata?.eventId || '',
      buyerId: metadata?.buyerId || '',
      totalAmount: amount_total ? (amount_total / 100).toString() : '0',
      createdAt: new Date(),
    }

    const newOrder = await createOrder(order)
    return NextResponse.json({ message: 'OK', order: newOrder })
  }

  return new Response('', { status: 200 })
}