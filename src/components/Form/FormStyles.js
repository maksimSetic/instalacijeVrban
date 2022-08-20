import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FormSection = styled.div`
	/* color: #fff; */
	padding: 160px 0;
	/* background: ${({ inverse }) => (inverse ? "#00917e" : '#fff')}; */
	background-color: rgba(242,242,242,255);
`;

export const FormTitle = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color:  #00917e;
`;

export const FormContainer = styled.div`
	display: flex;
`;
export const FormColumn = styled.div`
	/* margin-bottom: 15px; */
	padding: 50px;
	background: white;
	border: 20px;
	/* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
	flex: 1;
	max-width: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}

	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
	/* max-width: 540px; */
	padding-top: 0;
	width: 100%;
`;

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1.4rem;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: #afafaf;
`;
export const FormImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const FormImg = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

export const FormButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 1.5rem;
	white-space: nowrap;
	/* color: #fff; */
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid  #00917e;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	color: #00917e;

	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color:  #00917e;
	}
`;

export const FormMessageBox = styled.input`
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;  
    width: 100%;
	height: 60px;
    border:2px solid #aaa;
    border-radius:4px;
    margin:8px 0;
    outline:none;
    padding:8px;
    box-sizing:border-box;
    transition:.3s;
	word-break: break-all;
  }
  
  &:focus{
    border-color:  #00917e;
    box-shadow:0 0 8px 0   #00917e;
  }
`;