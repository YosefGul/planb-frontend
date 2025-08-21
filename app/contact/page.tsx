import { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import localFont from "next/font/local";

const kanopiBrazil = localFont({
	src: "../../public/fonts/KanopiBrazil-Regular.otf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "PlanB - Contact | Game Development & Animation Studio",
	description:
		"Get in touch with PlanB Studio. Contact us for game development, 2D animation and marketing solutions.",
};

export default function ContactPage() {
	return (
		<section className="my-20">
			<div className="container mx-auto px-4">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<h1 className={`${kanopiBrazil.className} text-4xl md:text-6xl font-bold text-[#FF314a] mb-6`}>
						CONTACT
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Get in touch with us for your projects. Our expert team is ready to help you 
						with game development, animation and marketing solutions.
					</p>
				</div>

				{/* Contact Form Section */}
				<div className="mb-20">
					<ContactForm />
				</div>

				{/* Additional Info Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<div>
							<h2 className={`${kanopiBrazil.className} text-3xl font-bold text-[#FF314a] mb-4`}>
								WHY PLANB STUDIO?
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
								At PlanB Studio, we bring your projects to life with our experienced team 
								specialized in game development and animation. We make your brand stand out 
								in the digital world with modern technologies and creative approaches.
							</p>
						</div>

						<div className="space-y-4">
							<div className="flex items-start gap-4">
								<div className="w-8 h-8 bg-[#FF314a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 dark:text-white mb-1">Expert Team</h3>
									<p className="text-gray-600 dark:text-gray-300">
										Experienced professionals in game development and animation
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-8 h-8 bg-[#FF314a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 dark:text-white mb-1">Modern Technologies</h3>
									<p className="text-gray-600 dark:text-gray-300">
										Quality solutions with the latest technologies and tools
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-8 h-8 bg-[#FF314a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 dark:text-white mb-1">Fast Delivery</h3>
									<p className="text-gray-600 dark:text-gray-300">
										Guaranteed timely and quality project delivery
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-gradient-to-br from-[#FF314a]/10 to-[#FF314a]/5 rounded-2xl p-8 border border-[#FF314a]/20">
						<h3 className={`${kanopiBrazil.className} text-2xl font-bold text-[#FF314a] mb-6`}>
							OUR SERVICES
						</h3>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-3 h-3 bg-[#FF314a] rounded-full"></div>
								<span className="text-gray-700 dark:text-gray-300">Game Development</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-3 h-3 bg-[#FF314a] rounded-full"></div>
								<span className="text-gray-700 dark:text-gray-300">2D Animation</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-3 h-3 bg-[#FF314a] rounded-full"></div>
								<span className="text-gray-700 dark:text-gray-300">Marketing Solutions</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-3 h-3 bg-[#FF314a] rounded-full"></div>
								<span className="text-gray-700 dark:text-gray-300">UI/UX Design</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-3 h-3 bg-[#FF314a] rounded-full"></div>
								<span className="text-gray-700 dark:text-gray-300">Digital Marketing</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
