import Faq from '@/components/Faq';
import Feature from '@/components/Feature';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';

export default function Home() {
	return (
		<>
			<Hero />
			<Feature />
			<Services />
			<Gallery />
			<Reviews />
			<Faq />
		</>
	);
}
