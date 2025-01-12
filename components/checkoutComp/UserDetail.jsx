import {FaPencilAlt, FaEnvelope, FaPhone} from "react-icons/fa";
import {BiLocationPlus} from "react-icons/bi";
import {useCheckout} from "../providers/CheckoutProvider";
import {FaLocationDot, FaUser} from "react-icons/fa6";

const UserDetailsCard = () => {
	const {formData, handleBack} = useCheckout();

	return (
		<div className='w-full mb-5 -mt-5 hide-scrollbar border-2 mx-auto p-6  text-wrap bg-white
		  rounded-lg flex items-start justify-between'>
			{/* Left Section: User Details */}
			<div className='flex-1 space-y-3'>
				<h2 className='text-lg text-dark font-bold'>
					Personal Details
				</h2>
				<div className='flex items-center text-gray-700'>
					<FaUser className='text-gray-500 mr-2' />
					{formData.name || "Not provided"}
				</div>
				<div className='flex items-center flex-wrap gap-3'>
					<div className='flex items-center text-gray-700'>
						<FaEnvelope className='text-gray-500 mr-2' />
						{formData.email || "Not provided"}
					</div>

					<div className='flex items-center text-gray-700'>
						<FaPhone className='text-gray-500 mr-2' />
						{formData.phone || "Not provided"}
					</div>
				</div>

				<div className='flex items-start text-gray-700'>
					<FaLocationDot className='text-gray-500 mt-1 mr-2' />
					<span>
						{formData.address || "Not provided"},{" "}
						{formData.city || "Not provided"},{" "}
						{formData.state || "Not provided"},{" "}
						{formData.pinCode || "Not provided"},{" "}
						{formData.country || "Not provided"}
					</span>
				</div>

				<div className='flex items-center text-gray-700'>
					<strong className='mr-2'>Landmark:</strong>
					{formData.landmark || "Not provided"}
				</div>
			</div>

			{/* Right Section: Edit Button */}
			<button
				className='p-2 text-blue-500  rounded-full shadow hover:bg-blue-600 hover:text-white transition'
				onClick={handleBack}
			>
				<FaPencilAlt className='text-lg' />
			</button>
		</div>
	);
};

export default UserDetailsCard;
