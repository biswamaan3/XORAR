import Link from "next/link";
import React from "react";

export const SectionHeading = ({children}) => (
	<h2 className='text-lg font-bold mb-2 text-gray-800'>{children}</h2>
);

export const Section = ({title, children}) => (
	<div className='mb-6'>
		{title && <SectionHeading>{title}</SectionHeading>}
		<div className='text-md text-gray-600'>{children}</div>
	</div>
);

const CancellationAndReschedulingPolicy = () => {
	return (
		<div className='font-satoshi mx-auto'>
			
			<Section>
				<p>
					At Xorar, we prioritize providing flexibility and convenience
					to our customers. Please review our policy to understand the
					conditions and processes for cancelling or rescheduling an
					order.
				</p>
			</Section>
			<Section title='1. Order Cancellation Window'>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						<strong>Cancellation Window:</strong> Customers can cancel
						their orders within 3 days (72 hours) of placing the order.
					</li>
					<li>
						After the cancellation window has passed, no cancellations
						will be accepted as the order will already be in the processing
						or shipping stage.
					</li>
				</ul>
			</Section>
			<Section title='2. Rescheduling Orders'>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						<strong>Rescheduling Window:</strong> Customers can request a
						rescheduling of their order within 3 days (72 hours) of placing
						the order.
					</li>
					<li>
						Rescheduling is allowed for changes such as delivery address,
						delivery date, or other order details.
					</li>
					<li>
						Rescheduling requests must be made before the order is shipped.
						Once shipped, modifications will not be possible.
					</li>
					<li>
						To request a reschedule, contact our customer support team and
						provide the required details.
					</li>
				</ul>
			</Section>
			<Section title='3. How to Cancel or Reschedule an Order'>
				<p>
					To cancel or reschedule your order, please follow these steps:
				</p>
				<ol className='list-decimal pl-5 space-y-2'>
					<li>
						Contact our customer support team at:
						<ul className='list-inside'>
							<li>
								<strong>Email:</strong>{" "}
								<Link
									href='mailto:support@xorar.com'
									className='text-blue-600 underline'
								>
									support@xorar.com
								</Link>
							</li>
							<li>
								<strong>Phone:</strong>{" "}
								<Link
									href='tel:+918777344731'
									className='text-blue-600'
								>
									+91 87773 44731
								</Link>
							</li>
						</ul>
					</li>
					<li>
						Provide the following details:
						<ul className='list-inside'>
							<li>Order ID</li>
							<li>Registered Email Address or Phone Number</li>
							<li>Specific request (cancellation or rescheduling)</li>
							<li>
								For rescheduling: Provide updated details (e.g., new
								address, preferred delivery date, etc.)
							</li>
						</ul>
					</li>
				</ol>
			</Section>
			<Section title='4. Refund Process for Canceled Orders'>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						If the payment was made online, the refund will be initiated
						within 5-7 business days after the cancellation request is
						confirmed.
					</li>
					<li>
						Refunds will be processed to the original payment method used
						during the purchase.
					</li>
					<li>
						For Cash on Delivery (COD) orders, no payment would have been
						collected, so no refund is applicable.
					</li>
				</ul>
			</Section>
			<Section title='5. Conditions for Cancellation and Rescheduling'>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						Cancellation and rescheduling requests are only accepted within
						the 3-day window.
					</li>
					<li>Orders that have been shipped cannot be canceled or rescheduled.</li>
				</ul>
			</Section>
			<Section title='6. Changes to the Policy'>
				<p>
					Xorar reserves the right to modify or update this policy at any
					time. Changes will be effective immediately upon being published
					on our platform.
				</p>
			</Section>
			<Section title='7. Contact Us'>
				<p>
					For assistance with cancellations, rescheduling, or any other
					inquiries, contact us:
				</p>
				<ul className='list-inside'>
					<li>
						<strong>Email:</strong>{" "}
						<Link
							href='mailto:support@xorar.com'
							className='text-blue-600 underline'
						>
							support@xorar.com
						</Link>
					</li>
					<li>
						<strong>Phone:</strong>{" "}
						<Link
							href='tel:+918777344731'
							className='text-blue-600'
						>
							+91 87773 44731
						</Link>
					</li>
				</ul>
			</Section>
		</div>
	);
};

export default CancellationAndReschedulingPolicy;
