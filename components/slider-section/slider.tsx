import { getSliderList } from "@/services/slider-services";
import type { Slider } from "@/types/slider.types";
import SliderClient from "./slider-client";

// Fallback veriler
const fallbackSliders: Slider[] = [
	{
		id: 1,
		name: "Web animation implementation for BKIW",
		description:
			"Special animation production work for the content of the web marketing. In the animation and production stages, we exceeded the standards set by our customer and received support from both artificial intelligence and Adobe programs.",
		excerpt: "Web animation implementation for BKIW",
		image: "/web-anim.png",
		tags: [
			{ id: 1, name: "Web marketing" },
			{ id: 2, name: "2D Animation" },
			{ id: 3, name: "AI" },
		],
	},
	{
		id: 2,
		name: "Game Development for Steam",
		description:
			"Advanced game development project showcasing our expertise in Unity and Unreal Engine. Features cutting-edge graphics and immersive gameplay mechanics.",
		excerpt: "Game Development for Steam",
		image: "/steam-dev.jpg",
		tags: [
			{ id: 4, name: "Game Development" },
			{ id: 5, name: "Unity" },
			{ id: 6, name: "Steam" },
		],
	},
	{
		id: 3,
		name: "Marketing Campaign Design",
		description:
			"Comprehensive marketing campaign design including digital advertising, social media content, and brand identity development.",
		excerpt: "Marketing Campaign Design",
		image: "/marketing-desc.png",
		tags: [
			{ id: 7, name: "Marketing" },
			{ id: 8, name: "Brand Design" },
			{ id: 9, name: "Social Media" },
		],
	},
];

async function getSliderData(): Promise<Slider[]> {
	try {
		const sliderData = await getSliderList(0, 10, "id,desc");

		const sliders =
			sliderData?.content && sliderData.content.length > 0
				? sliderData.content
				: fallbackSliders;

		return sliders;
	} catch (error) {
		return fallbackSliders;
	}
}

export const revalidate = 600; // Revalidate every 10 minutes

export default async function Slider() {
	const sliders = await getSliderData();
	return <SliderClient sliders={sliders} />;
}
