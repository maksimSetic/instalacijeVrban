import React, {useState, useEffect} from 'react';
import Pricing from '../components/Pricing/Pricing';
import Pricing2 from '../components/Pricing/Pricing2';
import Pricing3 from '../components/Pricing/Pricing3';
import LoadingScreen from "react-loading-screen";
import Carousel from 'react-material-ui-carousel';
import { GrHostMaintenance } from 'react-icons/gr';
import { FaGripfire } from  'react-icons/fa';
import { GiFireplace } from 'react-icons/gi';

const PricingPage = () => {

	const [loading, setLoading] = useState(true);

  const arrayOfItems = [
  <GrHostMaintenance/>,
  <GiFireplace/>,
  <FaGripfire/>,
 ];

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
      </LoadingScreen> : <Carousel IndicatorIcon={arrayOfItems} autoPlay={false}>
   <Pricing/><Pricing2/><Pricing3/>
</Carousel> }
	 ;
	 </>
};

export default PricingPage;
