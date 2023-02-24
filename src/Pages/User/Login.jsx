import { Input, Text, Grid, Container } from '../../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { KAKAO_AUTH_URL } from '../../Shared/OAuthKaKao.js';
import { GOOGLE_AUTH_URL } from '../../Shared/OAuthGoogle.js';
import { ReactComponent as KakaoIcon} from '../../Assets/img/logo/kakaoLogo.svg';
import { ReactComponent as GoogleIcon} from '../../Assets/img/logo/googleLogo.svg';

const Login = () => {
  const history = useHistory();
  const isLogin = localStorage.getItem('token');
  
  React.useEffect(() => {
    if(isLogin){
      history.replace('/home');
    }
  }, []);
  
  return (
    <React.Fragment>
      <Container type="np">
      <Div>
        <Container>
          <InnerDiv>
            {/* 로고 */}
            <TitleText>그루터기 다민족 행정 사무소 <br />Good Leader School<br />로그인</TitleText>
          </InnerDiv>
          
          <InnerDiv style={{marginTop:"148px"}}>

              {/* <Grid width="100%" margin="8px 0px 0px 0px">
                <a href={KAKAO_AUTH_URL}><div
                  style={{ placeItems: "self-start", display: "grid", gridTemplateColumns: "0.3fr 0.15fr 0.8fr", width: "100%", fontWeight: "500", height: "48px", alignItems: "center", backgroundColor: "#FEE500 ", padding: "14px", borderRadius: "6px", color: "#242424", boxShadow: "none", boxSizing: "border-box" }}>
                  <div></div>
                  <KakaoIcon />
                  <Text size="small" bold>카카오로 계속하기</Text>
                </div></a>
              </Grid> */}
              {/* <Grid width="100%" margin="8px 0px 0px 0px">
                <a href={GOOGLE_AUTH_URL}><div
                  style={{ placeItems: "self-start", display: "grid", gridTemplateColumns: "0.35fr 0.15fr 0.8fr", width: "100%", fontWeight: "500", height: "48px", alignItems: "center", backgroundColor: "#FFFFFF ", padding: "14px", borderRadius: "6px", color: "#392020", boxShadow: "none", boxSizing: "border-box" }}>
                  <div></div>
                  <GoogleIcon />
                  <Text size="small" bold>구글로 계속하기</Text>
                </div></a>
              </Grid> */}

              {/* <Grid width="100%" margin="8px 0px 0px 0px">
              <Button 
                href={GOOGLE_AUTH_URL}
                variant='contained' 
                style={{textAlign:"center", display:"block", width:"100%", fontWeight:"700",height: "48px", alignItems:"center", backgroundColor:"#FFFFFF ", padding:"14px", borderRadius:"6px",  color:"#392020", boxShadow:"none", boxSizing:"border-box"}}>
                  <img src="img/logo_google.svg" style={{margin:"0px 4px"}}/>
                  구글로 계속하기</Button>
            </Grid> */}
              
              <Grid width="300px" margin="8px 0px 0px 0px">
                <Button variant='text'
                  style={{ textAlign: "center", display: "block", width: "100%", height: "48px", backgroundColor: "#E0E0E0", color: "black", fontWeight: "700", borderRadius: "6px", border: "1px solid #E0E0E0", boxShadow: "none", boxSizing: "border-box"}}
                  onClick={() => history.push('/logIn')}>
                  <Text size="medium" bold>로그인</Text>
                </Button>
              </Grid>
            


            <GridBox>
              <Button variant='text'
                style={{  color: "#ffffff", fontWeight: "700" }}
                onClick={() => history.push('/signup')}>
                <Text size="medium" bold color="#fff">회원가입</Text>
              </Button>
              {/* <Button variant='text'
                style={{ paddingRight: "100px", color: "#ffffff", fontSize: "14px", fontWeight: "700" }}
                onClick={() => history.push('/home')}>
                <Text bold color="#fff">둘러보기</Text>
                </Button> */}
            </GridBox>
            </InnerDiv>
          </Container>
        </Div>
      </Container>
    </React.Fragment>
  );
}

const InnerDiv = styled.div`
width: 100%;
// height: 100%;,
margin: 20px 10px 20px 10px;
box-sizing: border-box;
display: grid;
place-items: center;

`
const GridBox = styled.div`
width: 300px;
display: grid;

box-sizing: border-box;
border : 1px dotted #000000;
`
const Div = styled.div`
padding: 60px 0px;
width: 100%;
height: 1000px;
background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('/img/LoginPage.svg');
background-size: cover;
`
// height: 100vh;
const TitleText = styled.div`
  font-family: 'SUIT';
  font-size: 26px;
  color: #fff;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  padding-top:50px;
`

export default Login;