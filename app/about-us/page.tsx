import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import {
	Gamepad2,
	Users,
	Calendar,
	Target,
	Mail,
	MapPin,
	Phone,
	Linkedin,
	ArrowRight,
} from "lucide-react";
import { getServiceList } from "@/services/service-services";
import { getTeamMemberList } from "@/services/team-member-services";
import type { Service } from "@/types/service.types";
import type { TeamMember as TeamMemberType } from "@/types/team-member-types";

const kanopiBrazil = localFont({
	src: "../../public/fonts/KanopiBrazil-Regular.otf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "PlanB - About Us | Game Development & Animation Studio",
	description:
		"Learn about PlanB Studio - our team, services, and mission to create innovative game development and animation solutions.",
};

// Icon değerinin geçerli bir URL olup olmadığını kontrol eden fonksiyon
const isValidImageUrl = (url: string): boolean => {
	// SVG dosyaları için kontrol
	if (
		url.startsWith("/") &&
		(url.endsWith(".svg") || url.endsWith(".png") || url.endsWith(".jpg"))
	) {
		return true;
	}

	try {
		new URL(url);
		return url.startsWith("http://") || url.startsWith("https://");
	} catch {
		return false;
	}
};

// Icon render fonksiyonu
const renderServiceIcon = (icon: string, serviceName: string) => {
	if (isValidImageUrl(icon)) {
		return (
			<div className="w-16 h-16 bg-[#FF314a] dark:bg-black rounded-full flex items-center justify-center">
				<Image
					src={icon}
					alt={serviceName}
					width={32}
					height={32}
					className="w-8 h-8 object-contain dark:invert"
				/>
			</div>
		);
	} else {
		// Geçerli URL değilse, service name'in ilk harfini göster
		return (
			<div className="w-16 h-16 bg-[#FF314a] dark:bg-black rounded-full flex items-center justify-center">
				<span className="text-white text-2xl font-bold">
					{serviceName.charAt(0)}
				</span>
			</div>
		);
	}
};

// Fallback data for services
const fallbackServices: Service[] = [
	{
		id: 1,
		icon: "🎮",
		name: "Game Development",
		description:
			"Full-cycle game development from concept to launch across multiple platforms.",
	},
	{
		id: 2,
		icon: "🎬",
		name: "2D Animation",
		description:
			"High-quality 2D animations and motion graphics for games and marketing.",
	},
	{
		id: 3,
		icon: "📱",
		name: "Mobile Development",
		description: "Native and cross-platform mobile game development solutions.",
	},
	{
		id: 4,
		icon: "🎨",
		name: "UI/UX Design",
		description:
			"Intuitive and engaging user interface design for games and applications.",
	},
	{
		id: 5,
		icon: "📈",
		name: "Marketing Solutions",
		description:
			"Comprehensive digital marketing strategies for game promotion.",
	},
	{
		id: 6,
		icon: "🌐",
		name: "Web Development",
		description: "Modern web applications and interactive experiences.",
	},
];

// Fallback data for team members
const fallbackTeamMembers: TeamMemberType[] = [
	{
		id: 1,
		name: "Ahmet Eren",
		title: "Co-Founder & CEO",
		quote: "We make more creative productions in the freedom of spacelessness.",
		orderNumber: 1,
	},
	{
		id: 2,
		name: "Yusuf",
		title: "CTO & Lead Developer",
		quote:
			"We provide a faster and more secure working environment by working entirely on the cloud.",
		orderNumber: 2,
	},
	{
		id: 3,
		name: "Sarah Chen",
		title: "Creative Director",
		quote:
			"Every pixel tells a story, every animation brings life to our digital worlds.",
		orderNumber: 3,
	},
	{
		id: 4,
		name: "Marcus Williams",
		title: "Lead Game Designer",
		quote:
			"Great games are built on great mechanics and even greater player experiences.",
		orderNumber: 4,
	},
];

// Server-side data fetching
async function getServicesData(): Promise<Service[]> {
	try {
		const data = await getServiceList("", 0, 20, "id,asc");
		return data?.content && data.content.length > 0
			? data.content
			: fallbackServices;
	} catch (error) {
		return fallbackServices;
	}
}

async function getTeamMembersData(): Promise<TeamMemberType[]> {
	try {
		const data = await getTeamMemberList(0, 20, "orderNumber,asc");
		return data?.content && data.content.length > 0
			? data.content
			: fallbackTeamMembers;
	} catch (error) {
		return fallbackTeamMembers;
	}
}

export const revalidate = 600; // 10 minutes

export default async function AboutPage() {
	const services = await getServicesData();
	const teamMembers = await getTeamMembersData();

	return (
		<section className="my-20">
			<div className="container mx-auto px-4">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<h1
						className={`${kanopiBrazil.className} text-4xl md:text-6xl font-bold text-[#FF314a] mb-6`}
					>
						ABOUT US
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
						PlanB Studio is a dynamic game development and animation studio
						dedicated to creating innovative digital experiences. Our team of
						passionate professionals works remotely across the globe, bringing
						diverse perspectives and cutting-edge technology to every project.
					</p>
				</div>

				{/* Stats Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-[#FF314a] mb-2">
							{services.length}+
						</div>
						<div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
							Services
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-[#FF314a] mb-2">
							{teamMembers.length}+
						</div>
						<div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
							Team Members
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-[#FF314a] mb-2">
							50+
						</div>
						<div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
							Projects Completed
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-[#FF314a] mb-2">
							5+
						</div>
						<div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
							Years Experience
						</div>
					</div>
				</div>

				{/* Our Story Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
					<div className="space-y-6">
						<h2
							className={`${kanopiBrazil.className} text-3xl md:text-4xl font-bold text-[#FF314a] mb-6`}
						>
							OUR STORY
						</h2>
						<div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
							<p>
								Founded with a vision to revolutionize digital entertainment,
								PlanB Studio emerged from the belief that great games and
								animations can be created anywhere, by anyone, with the right
								tools and passion.
							</p>
							<p>
								We pioneered the remote-first approach in game development,
								building a global team that collaborates seamlessly across time
								zones and cultures. This unique structure allows us to tap into
								diverse talent pools and bring fresh perspectives to every
								project.
							</p>
							<p>
								Today, we're proud to have delivered innovative solutions for
								clients worldwide, maintaining our commitment to quality,
								creativity, and technological excellence.
							</p>
						</div>
					</div>
					<div className="relative">
						<div className="bg-gradient-to-br from-[#FF314a]/10 to-[#FF314a]/5 rounded-2xl p-8 border border-[#FF314a]/20">
							<div className="grid grid-cols-2 gap-6">
								<div className="text-center">
									<div className="w-16 h-16 bg-[#FF314a] rounded-full flex items-center justify-center mx-auto mb-4">
										<Gamepad2 className="w-8 h-8 text-white" />
									</div>
									<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
										Innovation
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-300">
										Pushing boundaries with cutting-edge technology
									</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-[#FF314a] rounded-full flex items-center justify-center mx-auto mb-4">
										<Users className="w-8 h-8 text-white" />
									</div>
									<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
										Collaboration
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-300">
										Global team working together seamlessly
									</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-[#FF314a] rounded-full flex items-center justify-center mx-auto mb-4">
										<Target className="w-8 h-8 text-white" />
									</div>
									<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
										Excellence
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-300">
										Delivering quality in every project
									</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 bg-[#FF314a] rounded-full flex items-center justify-center mx-auto mb-4">
										<Calendar className="w-8 h-8 text-white" />
									</div>
									<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
										Reliability
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-300">
										Meeting deadlines with consistent quality
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Services Section */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h2
							className={`${kanopiBrazil.className} text-3xl md:text-4xl font-bold text-[#FF314a] mb-4`}
						>
							OUR SERVICES
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							Comprehensive solutions for game development, animation, and
							digital marketing
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service) => (
							<div
								key={service.id}
								className="bg-white flex flex-col justify-center items-center text-center dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
							>
								<div className="flex items-center justify-center mb-4">
									{renderServiceIcon(service.icon, service.name)}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
									{service.name}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Team Section */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h2
							className={`${kanopiBrazil.className} text-3xl md:text-4xl font-bold text-[#FF314a] mb-4`}
						>
							MEET OUR TEAM
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							Passionate professionals working together to create amazing
							digital experiences
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{teamMembers.map((member) => (
							<div
								key={member.id}
								className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
							>
								<div className="flex items-center justify-between mb-4">
									<div className="w-16 h-16 bg-[#FF314a] rounded-full flex items-center justify-center overflow-hidden">
										{member.profilePhoto &&
										member.profilePhoto.trim() !== "" ? (
											<Image
												src={member.profilePhoto}
												alt={member.name}
												width={64}
												height={64}
												className="w-full h-full object-cover"
											/>
										) : (
											<span className="text-white font-bold text-xl">
												{member.name.charAt(0).toUpperCase()}
											</span>
										)}
									</div>
									{member.linkedinUrl && (
										<Link
											href={member.linkedinUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="w-8 h-8 bg-[#FF314a] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
										>
											<Linkedin className="w-4 h-4 text-white" />
										</Link>
									)}
								</div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
									{member.name}
								</h3>
								<p className="text-[#FF314a] font-medium mb-3">
									{member.title}
								</p>
								<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
									"{member.quote}"
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Contact CTA Section */}
				<div className="bg-gradient-to-r from-[#FF314a]/10 to-[#FF314a]/5 rounded-2xl p-8 md:p-12 border border-[#FF314a]/20">
					<div className="text-center">
						<h2
							className={`${kanopiBrazil.className} text-3xl md:text-4xl font-bold text-[#FF314a] mb-4`}
						>
							READY TO START YOUR PROJECT?
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
							Let's discuss how we can bring your vision to life with our
							expertise in game development and animation.
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 bg-[#FF314a] hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
						>
							Get In Touch
							<ArrowRight className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
