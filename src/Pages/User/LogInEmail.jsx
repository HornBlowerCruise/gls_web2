import { Input, Text,Container } from '../../Elements/index';
import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Grid from '../../Elements/Grid';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../../Redux/Modules/User';
import { GeneralHeader } from '../../Components';
import { idCheck, pwdCheck } from '../../Shared/RegEx';
import { ReactComponent as HideIcon } from '../../Assets/img/hidePassword.svg';
import { ReactComponent as ShowIcon } from '../../Assets/img/showPassword.svg';

const LogInEmail = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.user.isLogin);
    const isToken = localStorage.getItem('token');

    const [showPwd, setShowPwd] = React.useState(false);
    const [disable, setDisable] = React.useState(true);
    const [userEmail, setUserEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const login = () => {
        dispatch(userActions.logInDB(userEmail, password));
    }

    useEffect(() => {
      if(isLogin && isToken) {
        history.replace('/home');
      }
    
      if(userEmail !== "" && password !== "") {
          setDisable(false);
      }
      if(userEmail === "" || password === "") {
          setDisable(true);
      }
    }, [userEmail, password, isLogin]);


  return (
    <React.Fragment>
      <Container>
        <Grid width="100%">
          <GeneralHeader title="이메일로 계속하기"></GeneralHeader>
        
          <InnerDiv>
            <form>
                { !idCheck(userEmail) && userEmail !== "" ? 
               <Input _onChange={(e)=>{setUserEmail(e.target.value); 
                                        idCheck(e.target.value)}} 
                type="email" borderRadius="6px" placeholder="이메일" name="user_id" margin="0px 0px 8px 0px" padding="0px 0px 0px 20px" height="52px" width="100%" border="1px solid #FA4D56" focusOutline="1px solid #FA4D56"/> :
                <Input _onChange={(e)=>{setUserEmail(e.target.value);
                                        idCheck(e.target.value)}}  
                borderRadius="6px" type="email" placeholder="이메일" margin="0px 0px 8px 0px" name="user_id" padding="0px 0px 0px 20px" height="52px" width="100%" />
                }
                {
                  !idCheck(userEmail) && userEmail !== "" ? 
                  <Grid margin="0px 0px 8px 10px">
                    <Text margin="0px" color="#FA4D56" size="xsmall"> 이메일의 형식이 올바르지 않습니다.</Text> 
                  </Grid>
                  : 
                  null
                }
              
              <Grid position="relative" width="100%">
                  <Input 
                  _onChange={(e)=>setPassword(e.target.value)} 
                  borderRadius="6px" type={showPwd? "shownPassword" : "password"} margin="0px" placeholder="비밀번호"/>
              {showPwd? 
              <ShowIcon style={{position:"absolute", top:"44%", right:"16px"}} onClick={()=>setShowPwd(false)} />  : 
              <HideIcon style={{position:"absolute", top:"41%", right:"16px"}} onClick={()=>setShowPwd(true)}/> }
              </Grid>
              
              
            </form>
        </InnerDiv>
            <Grid width="100%"> 
            {disable?  
            <Button variant='text' disabled={true} 
                style={{display:"block", margin:"10px auto", width:"100%", height:"48px",  backgroundColor:"#F4F4F4", color:"#A8A8A8", fontWeight:"700"}} 
                onClick={()=>login()}>로그인하기</Button> :
             <Button variant='text' 
                style={{display:"block", margin:"10px auto", width:"100%", height:"48px",  backgroundColor:"#0AAF42", color:"white", fontWeight:"700"}} 
                onClick={()=>login()}>로그인하기</Button>}
              {/* <Button variant='text' 
                style={{display:"block", margin:"10px auto", width:"100%",  color:"#6F6F6F"}} 
                onClick={()=>{history.push('/findpwd')}}>비밀번호 재설정</Button> */}
            </Grid>  
        </Grid>
      </Container>
    </React.Fragment>
    );
  }
  
const InnerWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0px auto;
`
const InnerDiv = styled.div`
width: 100%;
height: 100%;
margin: 66px auto 24px auto;
text-align: left;
position: relative;
`
const Image = styled.img`
width: 179px;
height: fit-content;
margin: 10px auto 56px auto;
border-radius: 30px;
`
export default LogInEmail;