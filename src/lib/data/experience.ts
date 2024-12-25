import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: '',
		company: '',
		description: '',
		contract: ContractType.SelfEmployed,
		type: '',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('ts', 'js'),
		name: '',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},

];

export const title = 'Experience';
