import React, { useState, useEffect } from "react";
import {
  StripeElementsOptions,
  StripePaymentElementOptions,
  loadStripe,
} from "@stripe/stripe-js";
import {
  PaymentElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios, { AxiosError } from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string);

const CheckoutForm = () => {
  const { total_amount, shipping_fee, clearCart } = useCartContext();
  // const { myUser } = useUserContext();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [succeeded, setSucceeded] = useState(false);
  // const [processing, setProcessing] = useState("");
  // const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const paymentElementOptions = {
    layout: "tabs",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:5173",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    console.log(clientSecret);

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          setSucceeded(true);
          setTimeout(() => {
            clearCart();
            navigate("/");
          }, 8000);
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  console.log(message);
  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to homepage shortly...</h4>
        </article>
      ) : (
        <article>
          <h4>Hello, {user && user.name}</h4>
          <p>Your total is {formatPrice(shipping_fee + total_amount)}</p>
          <p>Test Card Number : 4242 4242 4242 4242</p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement
          id="payment-element"
          options={paymentElementOptions as StripePaymentElementOptions}
        />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  const { cart, shipping_fee } = useCartContext();
  const [clientSecret, setClientSecret] = useState("");

  const createPaymentIntent = async () => {
    const tax = 499;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/orders",
        {
          tax,
          shippingFee: shipping_fee,
          items: cart,
        },
        { withCredentials: true }
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log((error as AxiosError).response);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <section className="stripe-checkout">
      {clientSecret && (
        <Elements options={options as StripeElementsOptions} stripe={promise}>
          <CheckoutForm />
        </Elements>
      )}
    </section>
  );
};

export default StripeCheckout;
