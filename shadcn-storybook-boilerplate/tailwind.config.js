/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			'2xl': '1400px'
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', 'sans-serif'],
				soft: ['var(--font-soft)', 'sans-serif'],
			},
			fontSize: {
				'title-large': [
					'27px',
					{
						lineHeight: '36px',
						fontWeight: '700'
					}
				],
				'title-medium': [
					'21px',
					{
						lineHeight: '28px',
						fontWeight: '700'
					}
				],
				'title-small': [
					'18px',
					{
						lineHeight: '24px',
						fontWeight: '700'
					}
				],
				'body-large': [
					'16.5px',
					{
						lineHeight: '22px',
						fontWeight: '400'
					}
				],
				'body-large-strong': [
					'16.5px',
					{
						lineHeight: '22px',
						fontWeight: '500'
					}
				],
				'body-medium': [
					'15px',
					{
						lineHeight: '20px',
						fontWeight: '400'
					}
				],
				'body-medium-strong': [
					'15px',
					{
						lineHeight: '20px',
						fontWeight: '500'
					}
				],
				'body-small': [
					'13.5px',
					{
						lineHeight: '18px',
						fontWeight: '400'
					}
				],
				'body-small-strong': [
					'13.5px',
					{
						lineHeight: '18px',
						fontWeight: '500'
					}
				],
				'caption-large': [
					'13.5px',
					{
						lineHeight: '18px',
						fontWeight: '400'
					}
				],
				'caption-large-strong': [
					'13.5px',
					{
						lineHeight: '18px',
						fontWeight: '500'
					}
				],
				'caption-medium': [
					'12px',
					{
						lineHeight: '16px',
						fontWeight: '400'
					}
				],
				'caption-medium-strong': [
					'12px',
					{
						lineHeight: '16px',
						fontWeight: '500'
					}
				],
				'caption-small': [
					'10.5px',
					{
						lineHeight: '14px',
						fontWeight: '400'
					}
				],
				'caption-small-strong': [
					'10.5px',
					{
						lineHeight: '14px',
						fontWeight: '500'
					}
				]
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				gray: {
					0: '#FFFFFF',
					50: '#FAFAFA',
					100: '#F4F4F5',
					200: '#E4E4E7',
					300: '#D4D4D8',
					400: '#9E9E9E',
					500: '#71717A',
					600: '#52525B',
					700: '#3F3F46',
					800: '#27272A',
					900: '#18181B',
					950: '#09090B',
					1000: '#000000'
				},
				red: {
					50: '#FCF1F1',
					100: '#FAE5E5',
					200: '#F7CECE',
					300: '#F5A5A5',
					400: '#F06E6E',
					500: '#EB3D3D',
					600: '#D81A1A',
					700: '#B61414',
					800: '#971818',
					900: '#7F1B1B',
					950: '#460A0A'
				},
				yellow: {
					50: '#FEFCEA',
					100: '#FDF9C8',
					200: '#FCF194',
					300: '#FBE152',
					400: '#F5CA0F',
					500: '#E6B313',
					600: '#C68A0B',
					700: '#9C630F',
					800: '#804E13',
					900: '#6C4018',
					950: '#3E210B'
				},
				green: {
					50: '#EFFCF5',
					100: '#D8F9E6',
					200: '#B6F2D2',
					300: '#86E6B8',
					400: '#55D197',
					500: '#44B982',
					600: '#35966A',
					700: '#2A7858',
					800: '#235F47',
					900: '#1E4D3C',
					950: '#0E2B22'
				},
				blue: {
					50: '#F0F8FE',
					100: '#DEEFFC',
					200: '#C4E3FC',
					300: '#9AD2FD',
					400: '#65B6FD',
					500: '#449AFC',
					600: '#2D79F2',
					700: '#2361DD',
					800: '#224FB1',
					900: '#234789',
					950: '#192D52'
				},
				whiteAlpha: {
					50: '#FFFFFF0D', // 0.05
					200: '#FFFFFF33', // 0.20
					400: '#FFFFFF66', // 0.40
					600: '#FFFFFF99', // 0.60
					800: '#FFFFFFCC', // 0.80
					950: '#FFFFFFF2', // 0.95
				},
				blackAlpha: {
					50: '#0000000D', // 0.05
					200: '#00000033', // 0.20
					400: '#00000066', // 0.40
					600: '#00000099', // 0.60
					800: '#000000CC', // 0.80
					950: '#000000F2', // 0.95
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
