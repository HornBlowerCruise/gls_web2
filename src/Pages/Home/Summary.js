import React from 'react'
import '../../css/Home.css';
import { useHistory } from 'react-router-dom';

const Summary = () => {
  const history = useHistory();
  return (
    <div>
      <div className='summaryContainer'>
  <div className='summary1'>
    <item>
    </item>
    <item>
    <br></br>
    그루터기 다민족 행정사 사무소는 출입국 업무, HACCP 인증 허가, 학교폭력, 행정심판, 국가보훈, <br></br><br></br>법인설립/변경, 인허가를 전문적으로 다루는 오직, 유일성, 재창조의 시스템을 가지고 있습니다.<br></br><br></br>
    </item>
    
    <item> 
    </item>
  </div>
    <div className='summary2'>
      <item>
        <img width='129px' height='84px' src='https://www.svgrepo.com/show/54409/school.svg'>
        </img>
        <div className='sumTitle'>
        선한지도자학교
        </div>
        <div className='sumDesc'>
        Good Leader School
        </div>
        <br></br>
        <button onClick={() => { history.push('/topmenu01/submenu01');}}>MORE VIEW</button>
      </item>
      <item>
        <img width='129px' height='84px' src='https://www.freeiconspng.com/uploads/presentation-icon-7.png'>
        </img>
        <div className='sumTitle'>
        주요업무 소개
        </div>
        <div className='sumDesc'>
        출입국 업무, HACCP 인증 허가, 학교폭력, 행정심판, 국가보훈, 법인설립/변경, 인허가
        </div>
        <br></br>
        <button onClick={() => { history.push('/topmenu02/submenu01');}}>MORE VIEW</button>
      </item>
      <item>
        <img width='129px' height='84px' src='https://icons-for-free.com/iconfiles/png/512/check+document+file+icon+icon-1320196654394535651.png'>
        </img>
        <div className='sumTitle'>
        업무사례 소개
        </div>
        <div className='sumDesc'>
        그루터기 다민족 행정사 사무소의 업무사례를 소개합니다.
        </div>
        <br></br>
        <button onClick={() => { history.push('/topmenu03/submenu01');}}>MORE VIEW</button>
      </item>
      <item>
        <img width='129px' height='84px' src='https://cdn-icons-png.flaticon.com/512/3095/3095583.png'>
        </img>
        <div className='sumTitle'>
        문의하기
        </div>
        <div className='sumDesc'>
        Contact Info
        </div>
        <br></br>
        <button onClick={() => { history.push('/topmenu05/submenu01');}}>MORE VIEW</button>
      </item>
    </div>
    </div>
    </div>
  )
}

export default Summary
