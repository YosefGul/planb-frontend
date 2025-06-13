import Image from "next/image";
import Link from "next/link";
import {
  Gamepad2,
  Users,
  Calendar,
  Target,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ComingSoonPage from "@/components/coming-soon";

export default function AboutPage() {
  return (
    // <div className="my-20 min-h-screen overflow-hidden rounded-3xl bg-white">
    //   {/* Hero Section */}
    //   <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    //     <div className="absolute inset-0 opacity-20">
    //       <div className="absolute left-20 top-20 h-32 w-32 rounded-full bg-purple-500 blur-3xl"></div>
    //       <div className="absolute bottom-20 right-20 h-32 w-32 rounded-full bg-blue-500 blur-3xl"></div>
    //       <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-red-500 blur-3xl"></div>
    //     </div>
    //     <div className="container relative z-10 mx-auto px-4 py-24">
    //       <div className="mx-auto max-w-3xl text-center">
    //         <h1 className="mb-6 text-5xl font-bold md:text-6xl">
    //           About Our Studio
    //         </h1>
    //         <p className="mb-8 text-xl text-gray-300">
    //           We create immersive gaming experiences that push the boundaries of
    //           imagination
    //         </p>
    //       </div>
    //     </div>
    //     <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    //   </section>

    //   {/* Our Story Section */}
    //   <section className="py-16 md:py-24">
    //     <div className="container mx-auto px-4">
    //       <div className="flex flex-col items-center gap-12 md:flex-row">
    //         <div className="md:w-1/2">
    //           <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
    //             Our Story
    //           </h2>
    //           <p className="mb-6 text-lg text-gray-600">
    //             Founded in 2015, our game studio began with a small team of
    //             passionate developers who shared a vision: to create games that
    //             would leave a lasting impact on players around the world.
    //           </p>
    //           <p className="mb-6 text-lg text-gray-600">
    //             What started as a small indie project in a garage has grown into
    //             a vibrant studio with over 50 talented individuals, each
    //             bringing their unique skills and perspectives to our creative
    //             process.
    //           </p>
    //           <p className="text-lg text-gray-600">
    //             Today, we're proud to have released multiple award-winning
    //             titles across various platforms, while maintaining our core
    //             values of creativity, player-focused design, and technical
    //             excellence.
    //           </p>
    //         </div>
    //         <div className="md:w-1/2">
    //           <div className="relative overflow-hidden rounded-lg shadow-xl">
    //             <Image
    //               src="/placeholder.svg?height=600&width=800"
    //               alt="Our studio office"
    //               width={800}
    //               height={600}
    //               className="h-auto w-full"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Stats Section */}
    //   <section className="bg-gray-50 py-16">
    //     <div className="container mx-auto px-4">
    //       <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
    //         <div className="text-center">
    //           <div className="mb-2 text-4xl font-bold text-purple-600">15+</div>
    //           <div className="text-gray-600">Games Released</div>
    //         </div>
    //         <div className="text-center">
    //           <div className="mb-2 text-4xl font-bold text-blue-600">50+</div>
    //           <div className="text-gray-600">Team Members</div>
    //         </div>
    //         <div className="text-center">
    //           <div className="mb-2 text-4xl font-bold text-red-600">12M+</div>
    //           <div className="text-gray-600">Players Worldwide</div>
    //         </div>
    //         <div className="text-center">
    //           <div className="mb-2 text-4xl font-bold text-green-600">8</div>
    //           <div className="text-gray-600">Industry Awards</div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Our Values Section */}
    //   <section className="py-16 md:py-24">
    //     <div className="container mx-auto px-4">
    //       <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
    //         Our Values
    //       </h2>
    //       <div className="grid gap-8 md:grid-cols-3">
    //         <div className="rounded-lg bg-white p-8 shadow-lg">
    //           <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
    //             <Gamepad2 className="h-8 w-8 text-purple-600" />
    //           </div>
    //           <h3 className="mb-4 text-xl font-bold text-gray-800">
    //             Player-First Approach
    //           </h3>
    //           <p className="text-gray-600">
    //             We believe in creating games that players love. Every decision
    //             we make is guided by how it will enhance the player experience.
    //           </p>
    //         </div>
    //         <div className="rounded-lg bg-white p-8 shadow-lg">
    //           <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
    //             <Target className="h-8 w-8 text-blue-600" />
    //           </div>
    //           <h3 className="mb-4 text-xl font-bold text-gray-800">
    //             Innovation
    //           </h3>
    //           <p className="text-gray-600">
    //             We're not afraid to take risks and explore new ideas. Innovation
    //             is at the heart of everything we create.
    //           </p>
    //         </div>
    //         <div className="rounded-lg bg-white p-8 shadow-lg">
    //           <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
    //             <Users className="h-8 w-8 text-red-600" />
    //           </div>
    //           <h3 className="mb-4 text-xl font-bold text-gray-800">
    //             Diversity & Inclusion
    //           </h3>
    //           <p className="text-gray-600">
    //             We celebrate diverse perspectives and create an inclusive
    //             environment where everyone's voice matters.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Team Section */}
    //   <section className="bg-gray-50 py-16">
    //     <div className="container mx-auto px-4">
    //       <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
    //         Meet Our Team
    //       </h2>
    //       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    //         {[
    //           {
    //             name: "Alex Johnson",
    //             role: "Creative Director",
    //             image: "/placeholder.svg?height=300&width=300",
    //           },
    //           {
    //             name: "Sarah Chen",
    //             role: "Lead Game Designer",
    //             image: "/placeholder.svg?height=300&width=300",
    //           },
    //           {
    //             name: "Marcus Williams",
    //             role: "Technical Director",
    //             image: "/placeholder.svg?height=300&width=300",
    //           },
    //           {
    //             name: "Priya Patel",
    //             role: "Art Director",
    //             image: "/placeholder.svg?height=300&width=300",
    //           },
    //         ].map((member, index) => (
    //           <div
    //             key={index}
    //             className="overflow-hidden rounded-lg bg-white shadow-lg"
    //           >
    //             <div className="relative aspect-square">
    //               <Image
    //                 src={member.image || "/placeholder.svg"}
    //                 alt={member.name}
    //                 fill
    //                 className="object-cover"
    //               />
    //             </div>
    //             <div className="p-6">
    //               <h3 className="mb-1 text-xl font-bold text-gray-800">
    //                 {member.name}
    //               </h3>
    //               <p className="text-gray-600">{member.role}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //       <div className="mt-12 text-center">
    //         <Link
    //           href="/team"
    //           className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-700"
    //         >
    //           View Full Team
    //         </Link>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Timeline Section */}
    //   <section className="py-16 md:py-24">
    //     <div className="container mx-auto px-4">
    //       <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
    //         Our Journey
    //       </h2>
    //       <div className="relative">
    //         {/* Timeline line */}
    //         <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-200"></div>

    //         {/* Timeline items */}
    //         <div className="space-y-12">
    //           {[
    //             {
    //               year: "2015",
    //               title: "Studio Founded",
    //               description:
    //                 "Our journey began with a small team and big dreams.",
    //             },
    //             {
    //               year: "2017",
    //               title: "First Game Release",
    //               description: "Launched our debut title to critical acclaim.",
    //             },
    //             {
    //               year: "2019",
    //               title: "Studio Expansion",
    //               description:
    //                 "Moved to a larger office and doubled our team size.",
    //             },
    //             {
    //               year: "2021",
    //               title: "Award-Winning Release",
    //               description:
    //                 "Our flagship title won Game of the Year at multiple events.",
    //             },
    //             {
    //               year: "2023",
    //               title: "Global Reach",
    //               description:
    //                 "Expanded to new markets with localized content.",
    //             },
    //           ].map((item, index) => (
    //             <div key={index} className="relative">
    //               <div
    //                 className={`flex items-center ${
    //                   index % 2 === 0 ? "flex-row" : "flex-row-reverse"
    //                 }`}
    //               >
    //                 <div
    //                   className={`w-1/2 ${
    //                     index % 2 === 0 ? "pr-12 text-right" : "pl-12"
    //                   }`}
    //                 >
    //                   <div className="rounded-lg bg-white p-6 shadow-lg">
    //                     <div className="mb-2 text-xl font-bold text-purple-600">
    //                       {item.year}
    //                     </div>
    //                     <h3 className="mb-2 text-xl font-bold text-gray-800">
    //                       {item.title}
    //                     </h3>
    //                     <p className="text-gray-600">{item.description}</p>
    //                   </div>
    //                 </div>
    //                 <div className="absolute left-1/2 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-purple-600">
    //                   <Calendar className="h-5 w-5 text-white" />
    //                 </div>
    //                 <div className="w-1/2"></div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Contact Section */}
    //   <section className="bg-gray-50 py-16">
    //     <div className="container mx-auto px-4">
    //       <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
    //         Get In Touch
    //       </h2>
    //       <div className="mx-auto max-w-4xl">
    //         <div className="grid gap-8 md:grid-cols-3">
    //           <div className="rounded-lg bg-white p-6 text-center shadow-lg">
    //             <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
    //               <MapPin className="h-6 w-6 text-blue-600" />
    //             </div>
    //             <h3 className="mb-2 text-lg font-bold text-gray-800">
    //               Visit Us
    //             </h3>
    //             <p className="text-gray-600">
    //               123 Game Studio Street
    //               <br />
    //               San Francisco, CA 94107
    //             </p>
    //           </div>
    //           <div className="rounded-lg bg-white p-6 text-center shadow-lg">
    //             <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
    //               <Mail className="h-6 w-6 text-green-600" />
    //             </div>
    //             <h3 className="mb-2 text-lg font-bold text-gray-800">
    //               Email Us
    //             </h3>
    //             <p className="text-gray-600">
    //               info@gamestudio.com
    //               <br />
    //               careers@gamestudio.com
    //             </p>
    //           </div>
    //           <div className="rounded-lg bg-white p-6 text-center shadow-lg">
    //             <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
    //               <Phone className="h-6 w-6 text-red-600" />
    //             </div>
    //             <h3 className="mb-2 text-lg font-bold text-gray-800">
    //               Call Us
    //             </h3>
    //             <p className="text-gray-600">
    //               +1 (555) 123-4567
    //               <br />
    //               Mon-Fri, 9am-5pm PST
    //             </p>
    //           </div>
    //         </div>
    //         <div className="mt-12 text-center">
    //           <Link
    //             href="/contact"
    //             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-purple-500/25"
    //           >
    //             Contact Us
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <ComingSoonPage />
  );
}
