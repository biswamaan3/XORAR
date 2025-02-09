import {Geist, Geist_Mono, Lexend} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import AOSProvider from "@/components/providers/AosProvider";
import {Bounce, ToastContainer} from "react-toastify";
import {AppProvider} from "@/components/providers/AppProvider";
import Script from "next/script";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";
import {SpeedInsights} from "@vercel/speed-insights/next";

const SilentForest = localFont({
	name: "SilentForest",
	src: "fonts/SilentForest.ttf",
	weight: "400",
	style: "normal",
	display: "swap",
	variable: "--font-silent-forest",
});

const Lufga = localFont({
	name: "Lufga",
	src: [
		{path: "fonts/LufgaLight.ttf", weight: "300", style: "normal"},
		{path: "fonts/LufgaRegular.ttf", weight: "400", style: "normal"},
		{path: "fonts/LufgaBold.ttf", weight: "700", style: "bold"},
	],

	weight: "400",
	style: "normal",
	display: "swap",
	variable: "--font-lufga",
});

const Satoshi = localFont({
	name: "Satoshi",
	src: "fonts/Satoshi-Regular.otf",
	weight: "400",
	style: "normal",
	display: "swap",
	variable: "--font-satoshi",
});

const IntegralCF = localFont({
	name: "IntegralCF",
	src: "fonts/Integralcf-regular.otf",
	weight: "400",
	style: "normal",
	display: "swap",
	variable: "--font-integral-cf",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});
const LexendFont = Lexend({
	variable: "--font-lexend",
	weight: "700",
	subsets: ["latin"],
});

// authors: [{ name: "Mayur Jadhav", url: "https://mayurjadhav.tech" }],
export const metadata = {
	title: "Xorar | Hoodies and Tshirts",
	description: "",
	keywords: "",
	metadataBase: new URL("https://xorar.com"),
	alternates: {
		canonical: "https://xorar.com",
	},
	icons: {
		icon: "/assets/logo.svg",
	},
	openGraph: {
		title: "Xorar | Hoodies and Tshirts",
		description: "",
		url: "https://xorar.com",
		images: "/assets/wesite_image.png",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Xorar | Hoodies and Tshirts",
		description: "",
		images: "/assets/wesite_image.png",
	},
	other: {
		"google-site-verification": "",

		canonical: "https://xorar.com",
		robots: "index, follow",
	},
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${LexendFont.variable} ${SilentForest.variable} ${geistMono.variable}
          ${Satoshi.variable} ${IntegralCF.variable} ${Lufga.variable}
          antialiased`}
			>
				<AppProvider>
					<AOSProvider>
						<Navbar />

						<div className='border-[1px] w-[90%] mx-auto'></div>
						{children}
						<ToastContainer
							position='top-center'
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick={false}
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme='colored'
							transition={Bounce}
						/>

						<Footer />
					</AOSProvider>
				</AppProvider>
				<GoogleAnalytics gaId='G-Z7RP2203NS' />
				<GoogleTagManager gtmId='GTM-W53ZD5VZ' />
				<Script type='text/javascript' id='microsoft-clarity-analytics'>
					{`    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "pveopzlm7d");`}
				</Script>
				<Script id='fb-pixel' strategy='afterInteractive'>
					{`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '635518738980489');
fbq('track', 'PageView');`}
				</Script>
				<SpeedInsights />
				<noscript>
					<img
						height='1'
						width='1'
						style='display:none'
						src='https://www.facebook.com/tr?id=635518738980489&ev=PageView&noscript=1'
					/>
				</noscript>
			</body>
		</html>
	);
}
