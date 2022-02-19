import '../styles/globals.scss';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return <div>{isMounted && <Component {...pageProps} />}</div>;
}

export default MyApp;
