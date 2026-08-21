"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
	theme: Theme;
	isDark: boolean;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
};

const THEME_STORAGE_KEY = "learnstack-theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getStoredTheme(): Theme {
	if (typeof window === "undefined") {
		return "light";
	}

	const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
	if (storedTheme === "light" || storedTheme === "dark") {
		return storedTheme;
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
	const root = document.documentElement;
	root.classList.toggle("dark", theme === "dark");
	root.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<Theme>("light");

	useEffect(() => {
		const initialTheme = getStoredTheme();
		setThemeState(initialTheme);
		applyTheme(initialTheme);
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		applyTheme(theme);
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [theme]);

	const setTheme = (nextTheme: Theme) => {
		setThemeState(nextTheme);
	};

	const toggleTheme = () => {
		setThemeState((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				isDark: theme === "dark",
				setTheme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider.");
	}

	return context;
}
