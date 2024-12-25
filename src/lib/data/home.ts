import { Platform } from '$lib/types';
import { getSkills } from './skills';
// import { faMedium } from '@fortawesome/free-brands-svg-icons';

export const title = 'Home';

export const name = 'Efe';

export const lastName = 'Uludag';

export const description =
	'Efe Uludağ is a 17-year-old student and a student of Informatics (Computer Science) at the University of Bremen. With his interest in technology and software, he is focused on continuous self-improvement. When faced with challenges, he sees every obstacle as an opportunity to learn and aims to become a better software developer at every step. Efe wants not only to use technology but also to create solutions that will shape it.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/uludagefe' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/efe-uluda%C4%9F-865306302/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://x.com/EfeUluda1242610'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'uludag.efe.tr@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@EfeUludag'
	},
];

export const skills = getSkills('py', 'java', 'js','docker','azure','pandas','numpy');
