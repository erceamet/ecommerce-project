import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H8oExLzOCHY21lDc4PmKCoDu2mehfm7OcnVKnI7k0lZOSOBmOkrtIJGo7zXlLwaevfcFTwysMyf8dLauPCHiaZR007RmOsccA";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="eCommerce Project Ltd."
      billingAddress
      shippingAddress
      currency="GBP"
      bitcoin
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
