import Link from "next/link";
import React from "react";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaInstagram,
	FaFacebook,
} from "react-icons/fa";
import {FiClock} from "react-icons/fi";
const calculateTotalPrice = (items) => {
	return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const ContactUs = () => {
	return (
		<div className='font-satoshi mx-auto p-6'>
			<p className='mb-6 text-lg text-gray-600 text-center'>
				We’re here to help! Whether you have questions, feedback, or
				need assistance, feel free to reach out to us. At{" "}
				<strong>XORAR</strong>, we value your connection and strive to
				provide the best support possible.
			</p>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				<div>
					<section className='mb-8'>
						<h2 className='text-xl font-semibold mb-4 text-gray-800'>
							Contacts
						</h2>
						<ul className='space-y-4 mb-6'>
							<li className='flex items-center gap-2 text-gray-700'>
								<FaEnvelope className=' text-blue-600' />
								<strong>Email: </strong>{" "}
								<Link
									href='mailto:support@xorar.com'
									className='text-blue-600 hover:underline transition duration-300'
								>
									{" "}
									support@xorar.com
								</Link>
							</li>
							<li className='flex items-center gap-2 text-gray-700'>
								<FaPhoneAlt className=' text-green-600' />
								<strong>Phone:</strong> +91 9163917808, +91
								8777244731
							</li>
							<li className='flex items-center gap-2 text-gray-700'>
								<FiClock className='' />
								<strong>Hours:</strong> Monday to Saturday,
								12:00 AM to 6:00 PM IST
							</li>
						</ul>
					</section>

					<section className='mb-8'>
						<h2 className='text-xl font-semibold mb-4 text-gray-800'>
							Address
						</h2>
						<p className='mb-6 text-gray-700'>
							<strong>XORAR Main Office</strong>
							<br />
							Block ED, Rajdanga Main Road,
							<br />
							Near Acropolis Mall,
							<br />
							Kasba, Kolkata - 700107,
							<br />
							West Bengal, India
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-xl font-semibold mb-4 text-gray-800'>
							Follow Us
						</h2>
						<p className='mb-4 text-gray-600'>
							Stay connected and updated with our latest
							collections and offers:
						</p>
						<ul className='space-y-2 mb-6'>
							<li className='flex items-center gap-2 text-gray-700'>
								<FaInstagram className=' text-pink-600' />
								<strong>Instagram:</strong>{" "}
								<a
									href='https://instagram.com/_xorar'
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-600 hover:underline transition duration-300'
								>
									@_xorar
								</a>
							</li>
							<li className='flex items-center gap-2 text-gray-700'>
								<FaFacebook className=' text-blue-600' />
								<strong>Facebook:</strong>{" "}
								<a
									href='#'
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-600 hover:underline transition duration-300'
								>
									@XORAR
								</a>
							</li>
						</ul>
					</section>

					<section className='mb-8'>
						<h2 className='text-xl font-semibold mb-4 text-gray-800'>
							Feedback and Suggestions
						</h2>
						<p className='mb-6 text-gray-700'>
							We’d love to hear from you! Share your thoughts and
							ideas with us at{" "}
							<a
								href='mailto:abiss@xorar.com'
								className='text-blue-600 hover:underline transition duration-300'
							>
								abiss@xorar.com
							</a>
							.
						</p>
					</section>

					<section className='mb-8'>
						<h2 className='text-xl font-semibold mb-4 text-gray-800'>
							Business Inquiries
						</h2>
						<p className='mb-6 text-gray-700'>
							For partnerships, collaborations, or wholesale
							inquiries, contact us at{" "}
							<a
								href='mailto:abiss@xorar.com'
								className='text-blue-600 hover:underline transition duration-300'
							>
								abiss@xorar.com
							</a>
							.
						</p>
					</section>

					<p className='text-lg font-medium text-gray-700'>
						We look forward to connecting with you!
					</p>
				</div>

				{/* You can place other content here */}
			</div>
		</div>
	);
};

export default ContactUs;
