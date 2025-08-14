"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function setLocale(theme: Theme): void {
	try {
		window.localStorage.setItem("theme", theme);
	} catch (_error) {
		// ignore
	}
}

function getStoredTheme(): Theme | null {
	try {
		const value = window.localStorage.getItem("theme");
		if (value === "dark" || value === "light") return value;
		return null;
	} catch (_error) {
		return null;
	}
}

function applyThemeToBody(theme: Theme): void {
	if (typeof document === "undefined") return;
	const isDark = theme === "dark";
	document.body.classList.toggle("dark", isDark);
}

export default function ToggleThemeButton() {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		// Determine initial theme: stored preference or system preference
		const stored = getStoredTheme();
		const prefersDark = window.matchMedia?.(
			"(prefers-color-scheme: dark)"
		).matches;
		const initialTheme: Theme = stored ?? (prefersDark ? "dark" : "light");
		setTheme(initialTheme);
		applyThemeToBody(initialTheme);
	}, []);

	const toggleTheme = () => {
		const nextTheme: Theme = theme === "dark" ? "light" : "dark";
		setTheme(nextTheme);
		setLocale(nextTheme);
		applyThemeToBody(nextTheme);
	};

	const isDark = theme === "dark";

	return (
		<Button
			type="button"
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			className="rounded-full"
		>
			{isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
		</Button>
	);
}
