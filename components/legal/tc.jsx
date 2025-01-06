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

const TermsAndConditions = () => {
	return (
		<div className='font-satoshi    mx-auto'>
			<p className='text-gray-600 text-lg mb-6'>
				<strong>Effective Date:</strong> January 6, 2025
			</p>
			<Section>
				<p>
					Xorar is an Indian streetwear clothing brand. Our USP lies
					in in-house designing and printing, ensuring unique and
					high-quality apparel for our customers.
				</p>
			</Section>
			<Section title='1. Products and Services'>
				<p>
					Xorar specializes in the sale of t-shirts and hoodies.
					Products are available for delivery across India. We reserve
					the right to update or discontinue products or services
					without prior notice.
				</p>
			</Section>
			<Section title='2. Payment Terms'>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						<strong>Cash on Delivery (COD):</strong> COD is accepted
						for orders within India. The total payable amount,
						including shipping charges (if applicable), must be paid
						at the time of delivery.
					</li>
					<li>
						Other payment methods include online payment options
						through secure payment gateways.
					</li>
				</ul>
			</Section>
			<Section title='3. Shipping and Delivery'>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						<strong>Delivery Time:</strong> Orders are typically
						delivered within 5 to 9 business days from the date of
						order confirmation, depending on your location.
					</li>
					<li>
						Delivery timelines are estimates and may vary due to
						unforeseen circumstances.
					</li>
				</ul>
			</Section>
			<Section title='4. Returns and Refunds'>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						<strong>Return Window:</strong> Customers can request a
						return within 3 days of receiving their order.
					</li>
					<li>
						The product must be in its original condition with tags
						intact.
					</li>
					<li>
						Returns are only accepted if the product is defective,
						damaged, or incorrect.
					</li>
					<li>
						Refunds or replacements will be processed after the
						product is inspected upon return.
					</li>
					<li>
						To initiate a return, contact our customer support team
						at [Insert Contact Information].
					</li>
				</ul>
			</Section>
			<Section title='5. Order Cancellations'>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						<strong>Cancellation Window:</strong> Orders can be
						canceled within 2 days of placement.
					</li>
					<li>
						To cancel an order, please contact our customer support
						team at [Insert Contact Information].
					</li>
					<li>
						Once the cancellation is confirmed, any payment made
						will be refunded within the stipulated timeline.
					</li>
				</ul>
			</Section>
			<Section title='6. Customer Responsibilities'>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						Ensure accurate shipping details are provided at the
						time of order placement.
					</li>
					<li>
						Inspect the product upon delivery and report any issues
						within the 3-day return window.
					</li>
				</ul>
			</Section>
			<Section title='7. Updates to Terms'>
				<p>
					Xorar reserves the right to modify these Terms and
					Conditions at any time. Updates will be posted on our
					platform, and continued use of our services implies
					acceptance of any revised terms.
				</p>
			</Section>
			<Section title='8. Contact Information'>
				<p>
					For queries, cancellations, or support, contact us at:
					<br />
					<strong>Email:</strong>{" "}
					<Link
						href='mailto:support@xorar.com'
						className='text-blue-600 underline'
					>
						support@xorar.com
					</Link>
					<br />
					<strong>Phone:</strong>
					<br />
					<Link
						href='tel:+919163917808'
						className='text-blue-600 '
					>
						+91 9163917808
					</Link>
					<br />
					<Link
						href='tel:+919432760534'
						className='text-blue-600 '
					>
						+91 9432760534
					</Link>
					<br />
					<Link
						href='tel:+918777344731'
						className='text-blue-600 '
					>
						+91 87773 44731
					</Link>
				</p>
			</Section>
		</div>
	);
};

export default TermsAndConditions;
