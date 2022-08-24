import React, {useState, useEffect} from 'react';
import { EmailBackToBack } from '../components/EmailBackToBack/EmailBackToBack';
import LoadingScreen from "react-loading-screen";

function SignUp() {

	const [loading, setLoading] = useState(true)

	useEffect(() => {
	  setTimeout(() => setLoading(false), 800)
	}, [])

	return <>
	{ loading ? <LoadingScreen
	styles={{ transition: "1s ease"}}
        loading={true}
        bgColor="rgba(242,242,242,255)"
        spinnerColor="#00917e"
        textColor="#676767"
        logoSrc=""
        text=""
      >
        {" "}
      </LoadingScreen> : <EmailBackToBack />}
	 ;
	 </>
	
}

export default SignUp;
