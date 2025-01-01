import React from "react";
export const PageTitle = ({className = "", children, ...props}) => {
	return (
		<h3 className={`pageTitle font-integralCF  heading2 bold-text ${className}`} {...props}>
			{children}
		</h3>
	);
};

export const Heading2 = ({className = "", children, ...props}) => {
	return (
		<h3 className={`heading2  bold-text ${className}`} {...props}>
			{children}
		</h3>
	);
};

export const ProductDesc = ({className = "", children, ...props}) => {
	return (
		<p
			className={`text-[16px] mb-3 text-[rgba(0,0,0,0.6)] ${className}`}
			{...props}
		>
			{children}
		</p>
	);
};

export const Separator = ({className = "", ...props}) => {
  return <hr className={`separator ${className}`} {...props} />;
}

