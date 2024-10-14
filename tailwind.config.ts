import type { Config } from "tailwindcss";


const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		colors: {
			black: {
				DEFAULT: "#000",
				100: "#000319",
				200: "#1e1e1e",
				300: "rgba(255, 255, 255, 0.125)",
			  },
			  primary: {
				800:"#a78bfa",
				500: '#624CF5',
				50: ' #F6F8FD',
				DEFAULT: '#624CF5',
				foreground: 'hsl(var(--primary-foreground))',
			  },
			  coral: {
				500: '#15BF59',
			  },
	  
			  grey: {
				600: '#545454', // Subdued - color name in figma
				500: '#757575',
				400: '#AFAFAF', // Disabled - color name in figma
				50: '#F6F6F6', // White Grey - color name in figma
			},
			
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},

		animation: {
			scroll:
			  "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		},
		keyframes: {
			scroll: {
			  to: {
				transform: "translate(calc(-50% - 0.5rem))",
			  },
			},
		},
  	}
  },
//
  //plugins: [],
	plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }
