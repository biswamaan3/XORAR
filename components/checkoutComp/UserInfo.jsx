import React from "react";
import { FaArrowRight } from "react-icons/fa";

function UserInfo({formData, handleInputChange, cartItems, handleSubmit}) {
	return (
		<div className='w-full space-y-4'>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				<div>
					<label
						htmlFor='name'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
					>
						Your name *
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleInputChange}
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
						placeholder='Bonnie Green'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='email'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
					>
						Your email*
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleInputChange}
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
						placeholder='name@flowbite.com'
						required
					/>
				</div>
			</div>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				<div>
					<label
						htmlFor='phone'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
					>
						Phone *
					</label>
					<input
						type='text'
						id='phone'
						name='phone'
						value={formData.phone}
						onChange={handleInputChange}
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
						placeholder='+91 XXXXXXXXXX'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='country'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
					>
						Country*
					</label>
					<input
						type='text'
						id='country'
						name='country'
						value={formData.country}
						onChange={handleInputChange}
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
						placeholder='e.g. United States'
						required
					/>
				</div>
			</div>
			<div>
				<label
					htmlFor='address'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
				>
					Address*
				</label>
				<textarea
					id='address'
					name='address'
					value={formData.address}
					onChange={handleInputChange}
					required
					rows='4'
					className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='Enter Your complete address...'
				></textarea>
			</div>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				<div>
					<label
						htmlFor='state'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
					>
						State *
					</label>
					<input
						type='text'
						id='state'
						name='state'
						value={formData.state}
						onChange={handleInputChange}
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
						placeholder='Bonnie Green'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='city'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
					>
						City*
					</label>
					<input
						type='text'
						id='city'
						value={formData.city}
						name='city'
						onChange={handleInputChange}
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
						placeholder='name@flowbite.com'
						required
					/>
				</div>
			</div>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				<div>
					<label
						htmlFor='pincode'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
					>
						Pin Code *
					</label>
					<input
						type='text'
						id='pincode'
						name='pinCode'
						value={formData.pinCode}
						onChange={handleInputChange}
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
						placeholder='e.g. 123456'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='landmark'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
					>
						Landmark (if any)
					</label>
					<input
						type='landmark'
						id='landmark'
						name='landmark'
						value={formData.landmark}
						onChange={handleInputChange}
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
						placeholder='e.g. Near XYZ'
					/>
				</div>
			</div>
			<div>
				<button
					type='submit'
					onClick={handleSubmit}
					disabled={cartItems.length === 0}
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
    w-full flex items-center gap-3 justify-center mt-8
    disabled:opacity-50 disabled:cursor-not-allowed
     focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
				>
					Continue to Payment <FaArrowRight />
				</button>
			</div>
		</div>
	);
}

export default UserInfo;
