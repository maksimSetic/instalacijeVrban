import React, {useState, useEffect} from 'react';
import Pricing from '../components/Pricing/Pricing';
import LoadingScreen from "react-loading-screen";

const PricingPage = () => {

	const [loading, setLoading] = useState(true)

	useEffect(() => {
	  setTimeout(() => setLoading(false), 800)
	}, [])

return <>
	{ loading ? <LoadingScreen
        loading={true}
        bgColor="rgba(242,242,242,255)"
        spinnerColor="#00917e"
        textColor="#676767"
        logoSrc=""
        text=""
      >
      </LoadingScreen> : <Pricing />}
	 ;
	 </>
};

export default PricingPage;
