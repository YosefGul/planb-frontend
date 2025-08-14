import { Dribbble, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import NotificationSubscribe from "@/components/newsteller-subscribe";

export default function Footer() {
	return (
		<footer className="px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{/* Main Footer Content */}
				<div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
					{/* Newsletter Section */}
					<div className="lg:col-span-6">
						<div className="mb-10">
							<NotificationSubscribe />
						</div>
						<div className="flex gap-4">
							<Link
								href="#"
								className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-transparent text-muted-foreground transition-colors hover:bg-muted/40 dark:border-white/20"
							>
								<Dribbble className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-transparent text-muted-foreground transition-colors hover:bg-muted/40 dark:border-white/20"
							>
								<div className="flex h-5 w-5 items-center justify-center rounded-sm bg-foreground text-background">
									<span className="text-[10px] font-bold">Be</span>
								</div>
							</Link>
							<Link
								href="#"
								className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-transparent text-muted-foreground transition-colors hover:bg-muted/40 dark:border-white/20"
							>
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-transparent text-muted-foreground transition-colors hover:bg-muted/40 dark:border-white/20"
							>
								<Twitter className="h-5 w-5" />
							</Link>
						</div>
					</div>

					{/* Explore + Resources + Plan B cluster */}
					<div className="lg:col-span-6">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-6 xl:gap-8">
							{/* Explore Section */}
							<div>
								<h3 className="mb-6 text-lg font-semibold text-foreground">
									Explore
								</h3>
								<nav className="space-y-4">
									<Link
										href="#"
										className="block text-muted-foreground transition-colors hover:text-foreground"
									>
										Who are we?
									</Link>
									<Link
										href="#"
										className="block text-muted-foreground transition-colors hover:text-foreground"
									>
										Company
									</Link>
									<Link
										href="#"
										className="block text-muted-foreground transition-colors hover:text-foreground"
									>
										Sections
									</Link>
									<Link
										href="#"
										className="block text-muted-foreground transition-colors hover:text-foreground"
									>
										Games
									</Link>
									<Link
										href="#"
										className="block text-muted-foreground transition-colors hover:text-foreground"
									>
										Contact
									</Link>
								</nav>
							</div>

							{/* Resources Section */}
							<div>
								<h3 className="mb-6 text-lg font-semibold text-foreground">
									Resources
								</h3>
								<nav className="space-y-4">
									<Link
										href="#"
										className="block text-muted-foreground transition-colors hover:text-foreground"
									>
										Community
									</Link>
									<Link
										href="#"
										className="block text-muted-foreground transition-colors hover:text-foreground"
									>
										Source Documentation
									</Link>
									<Link
										href="#"
										className="block text-muted-foreground transition-colors hover:text-foreground"
									>
										Protocols
									</Link>
									<Link
										href="#"
										className="block text-muted-foreground transition-colors hover:text-foreground"
									>
										PressKit
									</Link>
								</nav>
							</div>

							{/* Plan B Section */}
							<div>
								<p className="leading-relaxed text-muted-foreground">
									We had a plan B and we implemented it.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-border pt-8">
					<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
						{/* Bottom Links */}
						<div className="flex gap-8">
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-foreground"
							>
								LinkedIn
							</Link>
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-foreground"
							>
								Dribbble
							</Link>
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-foreground"
							>
								Pintrest
							</Link>
						</div>

						{/* Studio Text */}
						<p className="text-muted-foreground">
							Plan B Games and Animation Studio 2025
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
