import styled from "styled-components";


export const ExperienceStyle = styled.div`
width: 100%;
min-height: 100vh;
background-color: #fafafa;
display: flex;
justify-content: center;
align-items: center;

.container{
	width: 100%;
	padding: 35px 10%;
}
.container{
	padding-right: calc(10% - 30px);
}
main.row{
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 20px;
}
.col header.title{
	font-family: helvetica;
	color: #11a372;
	padding: 0px 0px 20px 30px;
}
.col .contentBox{
	padding: 0px 30px;
	border-left: 2px solid #bababa;
}
.col .contentBox .box{
	position: relative;
	padding: 20px;
	border: 1px solid #eaeaea;
	background-color: #ffffff;
	cursor: pointer;
	transition: all 0.4s;
	margin-bottom: 20px;
}
.col .contentBox .box:hover{
	box-shadow: 0px 3px 12px 0px #ccc;
	border: 1px solid transparent;
}
.col .contentBox .box::before{
	content: '';
	position: absolute;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	right: calc(100% + 24px);
	top: -2px;
	background-color: #11a372;
	border: 2px solid white;
}
.box h4{
	position: relative;
	color: #11a372;
}
.box h3{
	font-size: 19px;
	padding: 10px 0px 6px;
	font-family: helvetica;
	color: #444;
}
.box p{
	line-height: 1.2;
	color: #666;
	font-size: 17px;
}
@media(max-width: 768px){
	main.row{
		grid-template-columns: 1fr;
	}
	.row .col:nth-child(2){
		margin-top: 30px;
	}
}


`