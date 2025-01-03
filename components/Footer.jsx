import Link from "next/link";
import React from "react";
import { LiaFacebookF, LiaInstagram, LiaReddit, LiaTwitter } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";

// Social Icon Component
const SocialIcon = ({ href, icon: Icon }) => (
  <Link href={href} target="_blank">
    <Icon className="border-1 text-[24px] border-1 p-1 border-gray-100 bg-white hover:bg-gray-900 hover:border-gray-700
	hover:text-white duration-300
	rounded-full" />
  </Link>
);

// Link Section Component
const LinkSection = ({ title, links }) => (
  <div className="flex flex-col gap-4 w-[48%] sm:w-auto">
    <span className="uppercase text-sm font-medium text-black">{title}</span>
    <ul className="text-sm text-gray-600 space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} target={link.target || "_self"}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Newsletter Subscription Component
const NewsletterSubscription = () => (
  <div className="flex flex-col gap-4 mt-4 md:mt-0 w-full md:w-[40%]">
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
        <MdOutlineMail className="w-6 h-6 text-gray-600" />
      </div>
      <input
        type="email"
        id="email"
        className="w-full p-4 bg-white rounded-full shadow-md border border-gray-300 text-gray-900 text-md 
          focus:ring-blue-500 focus:border-blue-500 block ps-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search branch name..."
        required
      />
    </div>
    <button className="w-full p-4 bg-white rounded-full text-black font-medium text-sm md:text-base">
      Subscribe to Newsletter
    </button>
  </div>
);

export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Works", href: "/works" },
        { name: "Career", href: "/career" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Customer Support", href: "/support" },
        { name: "Delivery Details", href: "/delivery" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "FAQ",
      links: [
        { name: "Account", href: "/account" },
        { name: "Manage Deliveries", href: "/deliveries" },
        { name: "Orders", href: "/orders" },
        { name: "Payments", href: "/payments" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Free eBooks", href: "/ebooks" },
        { name: "Development Tutorial", href: "/tutorial" },
        { name: "How to - Blog", href: "/blog" },
        { name: "YouTube Playlist", href: "/youtube" },
      ],
    },
  ];

  return (
    <div className="max-w-full mx-auto relative">
      {/* Top Section */}
      <div
        className="bg-gradient flex flex-wrap w-full max-w-[80%] md:max-w-[1240px] h-auto p-6 px-10 md:p-10 justify-between items-center 
          rounded-[20px] mx-auto mt-6 md:mt-10 relative z-[4]"
        style={{
          transform: "translateY(50%)",
        }}
      >
        <span className="text-center md:text-left w-full md:w-[60%] text-[20px] md:text-[40px] font-bold leading-snug text-white">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </span>
        <NewsletterSubscription />
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#F0F0F0] py-10">
        <div className="flex flex-wrap max-w-[90%] md:max-w-[1240px] mx-auto justify-between gap-10 mt-[100px]">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 w-full justify-between sm:w-[40%] md:w-[25%]">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 bg-no-repeat"
                style={{
                  backgroundImage: "url(/assets/logo.svg)",
                }}
              />
              <span className="text-[32px] font-bold text-[#012f3f]">XORAR</span>
            </div>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex gap-2 items-center">
              <SocialIcon href={"/"} icon={LiaFacebookF} />
              <SocialIcon href={"/"} icon={LiaTwitter} />
			  <SocialIcon href={"/"} icon={LiaInstagram}/>
			  <SocialIcon href={"/"} icon={LiaReddit}/>
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section, index) => (
            <LinkSection key={index} title={section.title} links={section.links} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 mx-auto w-[90%] md:max-w-[1240px] border-t border-gray-300 pt-4 text-center">
          <div className="flex flex-wrap justify-between items-center">
            <p className="satoshi font-[14px] opacity-60">
              Xorar © 2000-2021, All rights reserved
            </p>
            <img src="/assets/img/card.png" className="" alt="Footer Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
