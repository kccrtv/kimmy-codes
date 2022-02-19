import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function Home() {
	return (
		<>
			<div>
				<Head>
					<title>Kim Cinco</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<Header />
				<Hero />
				<Footer />
			</div>
		</>
	);
}
