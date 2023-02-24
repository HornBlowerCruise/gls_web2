import React from "react";
import styled from "styled-components";
import { HomeMyplant, TodoContent, HomeHeader, Tabbar, SideButton } from "../../Components";
import { Button, Grid } from "../../Elements";
import { Container, Text } from "../../Elements";
import '../../css/Home.css';
import movie from '../../video/wave.mp4'
import Summary from './Summary.js'
import Cases from './Cases.js'
import HomeNotice from './HomeNotice'
import HomeNotice2 from './HomeNotice2'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// 메인 페이지 
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // 메인페이지 상단 탭 선택에 따라 보여줄 컴포넌트 목록
  // const comp = {
  //   0: <TodoContent />,
  //   1: <HomeMyplant />,
  // };

  // 보여줄 컴포넌트 선택하는 state
  const [compNum, setCompNum] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  return (
    <div>
          <div className="bg">
            <img width='100%' src='https://cdn.banklesstimes.com/tr:fo-auto,f-auto,w-1024,h-489/uploads/2022/04/1650892347-metaverse%20land.jpg'/>
            {/* <video 
            muted ={true}
            autoPlay ={true}
            loop ={true}
            playsInline ={true}>
             <source src={movie} type="video/mp4" />
            </video> */}
            
    
            <div class="text">
              {/* <div className="firstLine" >환영합니다</div> */}
              <div className="secondLine" >Good Leader School</div>
              {/* <div className="thirdLine" >좋은 지도자를 양성하는 학교입니다</div> */}
              <div className='goIntroButtonWrapper'>
                <button className="goIntroButton" onClick={() => { history.push('/topmenu01/submenu01');}}>학교소개</button>
              </div>
          </div>
  </div>
  <Summary/>
  <Cases/>
  <HomeNotice/>
  <HomeNotice2/>
    </div>
    // <React.Fragment>
    //   <Wrapper open={open}>
    //     <Container type="np" >
    //       <Box>
    //         <HomeHeader />
    //       </Box>
    //       <Grid padding="90px 16px 0 16px" width="100%" bg="#fff">
    //         <Tabbar tab1="할 일" tab2="내 식물" setCompNum={setCompNum} compNum={compNum} />
    //       </Grid>
    //       <Grid width="100%" bg="#fff">
    //         {comp[compNum]}
    //       </Grid>
    //     </Container>
    //   </Wrapper>
    //   <SideButton open={open} setOpen={setOpen} />
    // </React.Fragment>
  );
}


// const Wrapper = styled.div`
// width: 100%;
// height: 100%;
// overflow: ${(props) => props.open ? "hidden" : "auto"};
// `

// const Box = styled.div`
//   position: absolute;
//   top: 0;
//   width: 100%;
//   background: #fff;
// `


export default Home;