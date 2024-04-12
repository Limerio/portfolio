'use client';
import { TypeAnimation } from 'react-type-animation';

export const Title = () => (
	<TypeAnimation
		sequence={[
			'Portfolio in building - Limerio',
			2000,
			'Full Stack Developer',
			2000,
			'Fascinated by React',
			1000,
			'Fascinated by Typescript',
			1000,
			'Fascinated by Rust',
			1000,
			'Fascinated by everything in DevOps',
			1000,
		]}
		wrapper="h1"
		cursor={true}
		repeat={Infinity}
		className="text-3xl select-none"
	/>
);
