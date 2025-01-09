import React from "react";

const ReturnRefundPolicy = () => {
  return (
		<div className='font-satoshi    mx-auto'>
          <p className="my-4 text-gray-600">
            At Xorar, we strive to ensure that our customers are fully satisfied with their purchases. If for any reason you are not satisfied with your order, we are here to help. Please review our return and refund policy below.
          </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">Returns</h2>
          <h3 className="mt-4 text-xl font-medium text-gray-800">Eligibility for Returns:</h3>
          <ul className="list-disc ml-8 mt-2 text-gray-700">
            <li>Products must be returned within 2 days of receiving delivery.</li>
            <li>The item must be unused, in its original packaging, and in the same condition that you received it.</li>
            <li>The original tags must be intact; refunds will not be guaranteed if the tags are missing.</li>
            <li>Proof of purchase (e.g., receipt or order confirmation) is required to process your return.</li>
          </ul>

          <h3 className="mt-4 text-xl font-medium text-gray-800">Return Process:</h3>
          <ol className="list-decimal ml-8 mt-2 text-gray-700">
            <li>Contact us at <strong>[Insert Contact Email or Phone]</strong> to initiate a return. Provide your order details and reason for return.</li>
            <li>We will provide you with instructions on how to send back your item.</li>
            <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">Refunds</h2>
          <h3 className="mt-4 text-xl font-medium text-gray-800">Refund Process:</h3>
          <ul className="list-disc ml-8 mt-2 text-gray-700">
            <li>If your return is approved, we will process your refund within 3 – 6 business days.</li>
            <li>Refunds will be issued to the original method of payment.</li>
          </ul>

          <h3 className="mt-4 text-xl font-medium text-gray-800">Refund Policy for COD Orders:</h3>
          <p className="ml-8 mt-2 text-gray-700">
            Refunds are not available for Cash on Delivery (COD) orders. Only replacements will be provided for eligible returns.
          </p>

          <h3 className="mt-4 text-xl font-medium text-gray-800">Non-Refundable Costs:</h3>
          <ul className="list-disc ml-8 mt-2 text-gray-700">
            <li>Original shipping costs are non-refundable.</li>
            <li>Return shipping costs are the responsibility of the customer, except in cases where the return is due to our error (e.g., wrong or defective item received).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">Exchanges</h2>
          <p className=" mt-2 text-gray-700">
            We only replace items if they are defective or damaged. If you need to exchange a defective item for the same product, contact us at <strong>support@xorar.com</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">Late or Missing Refunds</h2>
          <p className="mt-4 text-gray-700">
            If you haven’t received a refund yet, please:
          </p>
          <ol className="list-decimal ml-8 mt-2 text-gray-700">
            <li>Check your bank account again.</li>
            <li>Contact your credit card company; it may take some time before your refund is officially posted.</li>
            <li>Contact your bank. Processing times can vary.</li>
            <li>Check the online wallet or in the UPI app.</li>
          </ol>
          <p className="mt-2 text-gray-700">
            If you’ve done all of this and still have not received your refund, please contact us at <strong>[Insert Contact Email]</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">Contact Us</h2>
          <p className="mt-4 text-gray-700">
            If you have any questions about our return and refund policy, please contact us:
          </p>
          <ul className="list-none ml-8 mt-2 text-gray-700">
            <li>Email: <a href="mailto:support@xorar.com" className="text-blue-600">support@xorar.com</a></li>
            <li>Phone: +91 87773 44731</li>
          </ul>
        </section>

        <footer className="mt-12  text-gray-600">
          <p>We appreciate your understanding and support as we aim to provide you with the best shopping experience at Xorar.</p>
        </footer>
    </div>
  );
};

export default ReturnRefundPolicy;
