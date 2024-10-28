// import { NextResponse } from 'next/server';
// import axios from 'axios';

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const transactionId = searchParams.get('transactionId');
//  const fullUrl = searchParams.get('url');
  
//   const MERCHANT_ID = process.env.PAYMENT_MERCHANT_ID;
//   if (!transactionId) {
//     return NextResponse.json(
//       { error: 'Transaction ID is required' },
//       { status: 400 }
//     );
//   }

//   try {
//     // Replace this with your payment provider's API endpoint for checking status
//     const statusUrl = `https://nexiblesapp.barecms.com/api/status/${transactionId}/${MERCHANT_ID}`;
//     const response = await axios.get(statusUrl);

//     return NextResponse.redirect(`${fullUrl}/order-placed`)
//   } catch (error) {
//     console.error('Error fetching payment status:', error);

//   }
//   // Handle errors and return a failed status response
//   return NextResponse.json(
//     { error: 'Failed to fetch payment status', status: 'failed' },
//     { status: 200 }
//   );
// }
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
    // Replace this with your payment provider's API endpoint for checking status
    const statusUrl = `https://nexiblesapp.barecms.com/api/status/${transactionId}/${MERCHANT_ID}`;
    const response = await axios.get(statusUrl);

    // Check if the payment status is success
    if (response.data.status === 'success') {
      // Clear local storage items
      const clearLocalStorageScript = `
        <script>
          localStorage.removeItem('cart');
          localStorage.removeItem('subtotal');
          window.location.href = '${fullUrl}/thankyou-page';
        </script>
      `;
      return new Response(clearLocalStorageScript, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    return NextResponse.redirect(`${fullUrl}/thankyou-page`);
  } catch (error) {
    console.error('Error fetching payment status:', error);
  }

  // Handle errors and return a failed status response
  return NextResponse.json(
    { error: 'Failed to fetch payment status', status: 'failed' },
    { status: 200 }
  );
}
