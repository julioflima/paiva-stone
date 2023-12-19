import { Database } from '@/types_db';
import { getURL } from '@/utils/helpers';
import { stripe } from '@/utils/stripe';
import { createOrRetrieveCustomer } from '@/utils/supabase-admin';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const supabase = createRouteHandlerClient<Database>({ cookies });
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) throw Error('Could not get user');
      const customer = await createOrRetrieveCustomer({
        uuid: user.id || '',
        email: user.email || ''
      });

      if (!customer) throw Error('Could not get customer');
      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: `${getURL()}/account`
      });

      // import stripe

      // # Set your secret key
      // stripe.api_key = 'your_secret_key'

      // # Create a checkout session with ad-hoc pricing
      // session = stripe.checkout.Session.create(
      //     payment_method_types=['card'],
      //     line_items=[{
      //         'price_data': {
      //             'currency': 'usd',
      //             'product_data': {
      //                 'name': 'Custom Product Name',
      //                 'description': 'Description of your product',
      //                 # You can also add images, metadata, etc.
      //             },
      //             'unit_amount': 2000,  # Price in cents ($20.00)
      //         },
      //         'quantity': 1,
      //     }],
      //     mode='payment',
      //     success_url='https://example.com/success',
      //     cancel_url='https://example.com/cancel',
      // )

      // # Redirect to Stripe's checkout page
      // print("Checkout URL:", session.url)

      return new Response(JSON.stringify({ url }), {
        status: 200
      });
    } catch (err: any) {
      console.log(err);
      return new Response(
        JSON.stringify({ error: { statusCode: 500, message: err.message } }),
        {
          status: 500
        }
      );
    }
  } else {
    return new Response('Method Not Allowed', {
      headers: { Allow: 'POST' },
      status: 405
    });
  }
}
