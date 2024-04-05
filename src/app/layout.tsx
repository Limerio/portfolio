import { cn } from '@/utils/functions';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import * as React from 'react';
import './globals.css';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: 'Limerio - Portfolio',
	description: 'In building',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
}
