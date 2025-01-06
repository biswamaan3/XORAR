import React from "react";

const Section = ({title, children}) => (
	<section className='mb-8'>
		<h2 className='text-xl font-semibold mb-4'>{title}</h2>
		{children}
	</section>
);

const SectionTitle = ({title}) => (
	<h1 className='text-2xl font-bold mb-4'>{title}</h1>
);

const PrivacyPolicy = () => {
	return (
		<div className='font-satoshi    mx-auto'>
			<p className='mb-6'>
				At Xorar, we are committed to protecting your privacy and
				ensuring your personal information is handled responsibly. This
				Privacy Policy outlines how we collect, use, and protect your
				information when you visit our website or make purchases from
				us. By using our website, you agree to the terms described in
				this policy.
			</p>

			<hr className='my-6 border-gray-300' />

			<Section title='1. Information We Collect'>
				<p className='mb-4'>
					We collect only the information necessary to process and
					fulfill your orders. Specifically:
				</p>
				<ul className='list-disc pl-6 space-y-2 mb-6'>
					<li>
						<strong>Email Address:</strong> To send you order
						confirmations, updates, and customer support
						communications.
					</li>
					<li>
						<strong>Phone Number:</strong> To facilitate order
						tracking and for customer service purposes. This is the
						only information we store to maintain your order
						history.
					</li>
					<li>
						<strong>Shipping Address:</strong> To deliver your
						purchased items to the correct location.
					</li>
				</ul>
				<p className='mb-6'>
					We do not require or collect any additional personal
					information such as account details, passwords, or financial
					data (e.g., credit card numbers).
				</p>
			</Section>

			<hr className='my-6 border-gray-300' />

			<Section title='2. How We Use Your Information'>
				<p className='mb-4'>
					Your personal information is used for the following
					purposes:
				</p>
				<ul className='list-disc pl-6 space-y-2 mb-6'>
					<li>
						<strong>Order Fulfillment:</strong> To process, ship,
						and deliver your orders.
					</li>
					<li>
						<strong>Customer Support:</strong> To resolve inquiries
						and provide updates about your orders.
					</li>
					<li>
						<strong>Order History Maintenance:</strong> Your phone
						number is stored to maintain a record of your orders,
						enabling us to assist you efficiently.
					</li>
				</ul>
			</Section>

			<hr className='my-6 border-gray-300' />

			<Section title='3. Data Storage and Retention'>
				<p className='mb-6'>
					We store only your phone number as part of our order history
					records. This information is securely maintained and
					accessible only to authorized personnel. All other
					information, such as your email address and shipping
					address, is retained temporarily and only as long as
					necessary to complete the order and comply with legal
					requirements.
				</p>
			</Section>

			<hr className='my-6 border-gray-300' />

			<Section title='4. Sharing of Information'>
				<p className='mb-6'>
					We value your trust and do not sell, rent, or share your
					personal information with third parties, except as necessary
					to:
				</p>
				<ul className='list-disc pl-6 space-y-2 mb-6'>
					<li>
						Fulfill your order (e.g., sharing your address and
						receiver’s name with shipping providers).
					</li>
					<li>
						Comply with legal obligations or enforce our policies.
					</li>
				</ul>
			</Section>

			<hr className='my-6 border-gray-300' />

			<Section title='5. Security Measures'>
				<p className='mb-6'>
					We take appropriate technical and organizational measures to
					protect your personal information from unauthorized access,
					use, or disclosure. These measures include:
				</p>
				<ul className='list-disc pl-6 space-y-2 mb-6'>
					<li>Secure servers and encrypted connections.</li>
					<li>
						Limited access to stored data, restricted to authorized
						personnel.
					</li>
				</ul>
			</Section>

			<hr className='my-6 border-gray-300' />

			<Section title='6. Your Rights'>
				<p className='mb-4'>You have the right to:</p>
				<ul className='list-disc pl-6 space-y-2 mb-6'>
					<li>
						Request access to the information we hold about you.
					</li>
					<li>
						Request correction or deletion of your stored phone
						number.
					</li>
					<li>
						Opt out of any communications by contacting us at{" "}
						<a
							href='mailto:support@xorar.com'
							className='text-blue-600 underline'
						>
							support@xorar.com
						</a>
						.
					</li>
				</ul>
			</Section>

			<hr className='my-6 border-gray-300' />

			<Section title='7. Changes to This Privacy Policy'>
				<p className='mb-6'>
					We may update this Privacy Policy from time to time to
					reflect changes in our practices or legal requirements. Any
					updates will be posted on this page with the revised date.
				</p>
			</Section>

			<hr className='my-6 border-gray-300' />

			<Section title='8. Contact Us'>
				<p className='mb-6'>
					If you have any questions or concerns about this Privacy
					Policy or how your data is handled, please contact us:
				</p>
				<p>
					<strong>Xorar</strong>
					<br />
					<strong>Email:</strong>{" "}
					<a
						href='mailto:support@xorar.com'
						className='text-blue-600 underline'
					>
						support@xorar.com
					</a>
					<br />
					<strong>Effective Date:</strong> January 6, 2025
				</p>
			</Section>
		</div>
	);
};

export default PrivacyPolicy;
