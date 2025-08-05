/* eslint-disable */
import axios from 'axios';

import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51RsPI64qnpkeMF4nzrM3qZqA9yJSoFshLIeaHimn6aCAyWNXg0WpHNG6QtF2rfrL0NgGVI7i3mtL9DXkT8Zly4e100K86nM2Af',
);

export const bookTour = async (tourId) => {
  try {
    // get checkout session from api
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`,
    );

    //create checkout form + change credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
