import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="font-satoshi    mx-auto">

        <p className="mb-8 text-gray-700">
          At Xorar, we strive to ensure that your shopping experience is
          seamless and enjoyable. Below are the details of our shipping policy:
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Shipping Locations</h2>
          <p className="text-gray-700">
            We currently ship to all over India. If your location is not listed,
            please contact us at <span className="font-semibold">support</span>{" "}
            for assistance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Processing Time</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Orders are processed within 1-2 business days after payment
              confirmation.
            </li>
            <li>
              Orders placed on weekends or holidays will be processed on the
              next business day.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Shipping Methods and Delivery Times
          </h2>
          <p className="text-gray-700 mb-4">
            We partner with reliable delivery companies such as Delhivery, Blue
            Dart, and DHL to ensure your order reaches you safely. Delivery
            typically takes between 5 to 9 business days.
          </p>
          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Shipping Method</th>
                <th className="border px-4 py-2">Estimated Delivery Time</th>
                <th className="border px-4 py-2">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border px-4 py-2">Standard Shipping</td>
                <td className="border px-4 py-2">5-9 business days</td>
                <td className="border px-4 py-2">Free</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-700 mt-4">
            Delivery times are estimates and may vary depending on your location
            and external factors beyond our control.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Tracking</h2>
          <p className="text-gray-700 mb-4">
            Once your order has been shipped, you will receive a confirmation
            email and message containing your order and tracking number. You can
            use this information to track your shipment through the following
            links:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Delhivery: Track Here
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blue Dart: Track Here
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                DHL: Track Here
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Shipping Costs</h2>
          <p className="text-gray-700">• Standard shipping is free.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Undeliverable Packages</h2>
          <p className="text-gray-700">
            If a package is returned to us due to an incorrect address or
            refusal to accept delivery, you will be responsible for the
            reshipping costs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Damaged or Lost Packages</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              If your package arrives damaged, please contact us within{" "}
              <span className="font-semibold">[X]</span> days with photos of the
              damaged item and packaging.
            </li>
            <li>
              For lost packages, reach out to us at{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-600 hover:underline"
              >
                support@example.com
              </a>
              , and we will assist you in resolving the issue.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            For any questions or concerns regarding shipping, please contact our
            support team.
          </p>
          <p className="mt-4 text-gray-800 font-semibold">
            Thank you for choosing Xorar!
          </p>
        </section>
      </div>
  );
};

export default ShippingPolicy;
