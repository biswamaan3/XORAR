import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';

const razorpay = new Razorpay({
 key_id: process.env.RAZORPAY_KEY_ID,
 key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
 const { amount, currency } = await request.json();
 const DefaultCurrency = 'INR';

 if(currency !== DefaultCurrency) {
  return NextResponse.json({ error: 'Invalid currency' }, { status: 400 });
 }
 var options = {
  amount: amount,
  currency: DefaultCurrency,
  receipt: 'rcp1',
 };
 const order = await razorpay.orders.create(options);
 return NextResponse.json({ orderId: order.id }, { status: 200 });
}
