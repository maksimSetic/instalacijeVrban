import React, {useState, useEffect} from 'react';
import Pricing from '../components/Pricing/Pricing';
import Pricing2 from '../components/Pricing/Pricing2';
import Pricing3 from '../components/Pricing/Pricing3';
import LoadingScreen from "react-loading-screen";
import Carousel from 'react-material-ui-carousel';
import { GiBrainFreeze } from 'react-icons/gi';
import { FaGripfire } from  'react-icons/fa';
import { GiFireplace } from 'react-icons/gi';

const PricingPage = () => {

	const [loading, setLoading] = useState(true);

  useEffect(() => {
	  setTimeout(() => setLoading(false), 800)
	}, [])


  const arrayOfItems = [
  <GiBrainFreeze style={{ height: "50px", width: "50px"}}/>,
  <GiFireplace style={{ height: "50px", width: "50px"}}/>,
  <FaGripfire style={{ height: "50px", width: "50px"}}/>,
 ];


return <>
	{ loading ? <LoadingScreen style={{ marginTop: "50px"}}
        loading={true}
        bgColor="rgba(242,242,242,255)"
        spinnerColor="#00917e"
        textColor="#676767"
        logoSrc=""
        text=""
      >
      </LoadingScreen> : <Carousel IndicatorIcon={arrayOfItems} autoPlay={false}>
   <Pricing/><Pricing2/><Pricing3/>
</Carousel> }
	 ;
	 </>
};

export default PricingPage;
