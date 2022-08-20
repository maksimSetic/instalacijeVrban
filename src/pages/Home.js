import React, {useState, useEffect} from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import Dropdown from '../components/Dropdown/Dropdown';
import LoadingScreen from "react-loading-screen"

// Hero Feature Content Carousel

const Home = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 800)
	  }, [])
  
	  return <>
	  { loading ? <LoadingScreen style={{ marginTop: "50px"}}
		  loading={true}
		  bgColor="rgba(242,242,242,255)"
		  spinnerColor="#00917e"
		  textColor="#676767"
		  logoSrc=""
		  text=""
		>
		</LoadingScreen> : <><Hero /><Features /><Content {...heroOne} /><Dropdown /><Content {...heroTwo} /><Content {...heroThree} /><Carousel /></>
 }
	   ;
	   </>
  };

export default Home;

