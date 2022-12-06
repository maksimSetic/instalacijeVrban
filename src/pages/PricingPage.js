import React, {useState, useEffect} from 'react';
import Pricing from '../components/Pricing/Pricing';
import Pricing2 from '../components/Pricing/Pricing2';
import Pricing3 from '../components/Pricing/Pricing3';
import Pricing4 from '../components/Pricing/Pricing4';
import Pricing5 from '../components/Pricing/Pricing5';
import Pricing6 from '../components/Pricing/Pricing6';
import LoadingScreen from "react-loading-screen";
import Carousel from 'react-material-ui-carousel';
import { GiBrainFreeze } from 'react-icons/gi';
import { FaGripfire } from  'react-icons/fa';
import { GiFireplace } from 'react-icons/gi';
import { SiCirrusci } from 'react-icons/si';
import { BiBath } from 'react-icons/bi';
import { GiPipes } from 'react-icons/gi'; 
import { CgSmartHomeBoiler } from 'react-icons/cg'
import BackToTop from '../components/BackToTop/BackToTop';

const PricingPage = () => {

	const [loading, setLoading] = useState(true);

  useEffect(() => {
	  setTimeout(() => setLoading(false), 800)
	}, [])


  const arrayOfIcons = [
  <GiBrainFreeze style={{ height: "45px", width: "45px"}}/>,
  <GiFireplace style={{ height: "45px", width: "45px"}}/>,
  <FaGripfire style={{ height: "45px", width: "45px"}}/>,
  <CgSmartHomeBoiler style={{ height: "40px", width: "40px", marginLeft: "-10px"}}/>,
  <SiCirrusci style={{ height: "35px", width: "35px",  marginLeft: "5px"}}/>,
  <GiPipes style={{ height: "40px", width: "40px", marginLeft: "5px"}}/>,
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
      </LoadingScreen> : <><Carousel IndicatorIcon={arrayOfIcons} autoPlay={false} swipe={false} navButtonsAlwaysInvisible={true} indicatorContainerProps={{
      style: {
        position: "absolute",
        top: "200px",
        zIndex: "2",
        marginTop: "20px"
      }
    }}>
      <Pricing /><Pricing2 /><Pricing3 /><Pricing4 /><Pricing5 /><Pricing6 />
    </Carousel><BackToTop/></>}
	 ;
	 </>
};

export default PricingPage;
