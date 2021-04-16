import styled from "styled-components";
export const Header = styled.div`
	display: flex;
	align-items: center;
	span {
		cursor: pointer;
		font-weight: bold;
		margin-right: 15px;
	}
`;
export const Alerta = styled.div`
	display: flex;
	flex-direction: column;
	background: #ad2d2d;
	color: #fff;
	margin: 5px;
	border-radius: 5px;
	padding: 15px;
	text-align: center;
	font-weight: bold;
	box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-webkit-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-moz-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
`;
export const PerfilImage = styled.div`
	display: flex;
	width: 150px;
	height: 150px;
	padding: 10px;
	justify-content: center;
	margin: 5px;
	background-color: #fff;
	border-radius: 75px;
	box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-webkit-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-moz-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	img {
		border-radius: 75px;
		background-color: #eee;
	}
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px;
	padding-bottom: 10px;
	button {
		border-radius: 8px;
		display: flex;
		border: 0;
		width: 300px;
		height: 50px;
		justify-content: center;
		align-items: center;
		font-size: 1.5em;
		font-weight: bold;
		color: #fff;
		background-color: green;
		box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
		-webkit-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
		-moz-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
		&:hover {
			transition: 0.5s;
			background: #16b416;
		}
	}
`;
export const Input = styled.div`
	display: flex;
	background-color: #fff;
	margin: 10px;

	justify-content: center;
	width: 300px;
	padding: 10px;
	border-radius: 10px;
	justify-content: center;
	background-color: #eee;
	flex-direction: column;
	box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-webkit-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	-moz-box-shadow: 4px 5px 17px 1px rgba(0, 0, 0, 0.37);
	label {
		font-weight: bold;
		margin-bottom: 5px;
	}
	input,
	select,
	option {
		height: 40px;
		padding: 5px;
		border-radius: 5px;
		border: 0;
		font-size: 0.8rem;
	}
`;
