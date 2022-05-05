import { Input, Text} from '../../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Grid from '../../Elements/Grid';
import { useHistory } from 'react-router-dom';
import Container from '../../Elements/Container';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../Redux/Modules/User';
//1. JWT토큰 const isLogin  = dispatch(isLogin(sessionStorage.getItem('token')))
//2. 소셜 로그인 (구글 로그인, 카카오로그인)
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    console.log(userEmail, password);
    // dispatch(userActions.logIn(userEmail, password));
  }

  return (
    <React.Fragment>
      <Container>
      <Grid padding="30px 10px">
        <InnerWrap>
          <InnerDiv>
            {/* 로고 */}
            <Image src="sample.jpeg" alt="logo"/>
          </InnerDiv>
          <InnerDiv style={{marginBottom:"10px"}}>
            <form>
              <Input _onChange={(e)=>setUserEmail(e.target.value)} placeholder="이메일(아이디)" type="email" name="user_id" padding="0px 0px 0px 20px" height="52px"/>
              <Input _onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="비밀번호" name="user_pwd" padding="0px 0px 0px 20px" height="52px"/>
            </form>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}> 
              <Button variant='text' 
                style={{display:"block", margin:"10px auto", width:"fit-content", color:"#878D96"}} 
                onClick={()=>history.push('/findpwd')}>비밀번호 찾기</Button>
              <Button variant='text' 
                style={{display:"block", margin:"10px auto", width:"fit-content",  color:"#878D96"}} 
                onClick={()=>history.push('/signup')}>회원가입</Button>
            </div>
            <Button variant='contained' 
              onClick={()=>login()}
              style={{display:"block", margin:"20px auto 0px auto", width:"282px", height: "38px", backgroundColor:"#5A916F", borderRadius:"50px", boxShadow:"none"}}>로그인</Button>
          </InnerDiv>
          
          <InnerDiv style={{marginTop:"0px"}}>
            <Button variant='contained' 
            style={{display:"block", margin:"10px auto", width:"282px", height: "38px", backgroundColor:"#FADE86", borderRadius:"50px", color:"#392020", boxShadow:"none"}}>KaKao 계정으로 로그인</Button>
            <Button variant='contained' 
            style={{display:"block", margin:"10px auto", width:"282px", height: "38px", backgroundColor:"#F2F4F8 ", borderRadius:"50px",  color:"#392020", boxShadow:"none"}}>Google 계정으로 로그인</Button>
          </InnerDiv>
          <InnerDiv>           
            <Button variant='text' 
                style={{display:"block", margin:"10px auto", width:"fit-content",  color:"#878D96"}} 
                onClick={()=>history.push('/home')}>먼저 둘러보고 싶어요</Button>
          </InnerDiv>
        </InnerWrap>
      </Grid>
      </Container>
    </React.Fragment>
    );
  }
  
const InnerWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
`
const InnerDiv = styled.div`
width: 100%;
height: 100%;
margin: 20px auto 20px auto;
text-align:center;
`
const Image = styled.img`
width:44px;
height: 44px;
margin: 0px auto;
border-radius: 30px;
`
export default Login;