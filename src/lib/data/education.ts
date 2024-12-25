import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Science in Computer Science',
		description: '',
		location: 'Germany',
		logo: Assets.Bremen,
		name: 'Bremen University',
		organization: '',
		period: { from: new Date(2024, 12, 10), to: new Date(2024, 12, 25)},
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['German']
	},
];

export const title = 'Education';
