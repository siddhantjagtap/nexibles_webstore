import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const transactionId = searchParams.get('transactionId');
 const fullUrl = searchParams.get('url');
  
  const MERCHANT_ID = process.env.PAYMENT_MERCHANT_ID;
  if (!transactionId) {
    return NextResponse.json(
      { error: 'Transaction ID is required' },
      { status: 400 }
    );
  }

  try {
    const statusUrl = `https://nexiblesapp.barecms.com/api/status/${transactionId}/${MERCHANT_ID}`;
    const response = await axios.get(statusUrl);

    return NextResponse.redirect(`${fullUrl}/thankyou-page`)
  } catch (error) {
    console.error('Error fetching payment status:', error);

  }
  // Handle errors and return a failed status response
  return NextResponse.json(
    { error: 'Failed to fetch payment status', status: 'failed' },
    { status: 200 }
  );
}
