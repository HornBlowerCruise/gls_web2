import React from 'react'
import '../css/ContactInfo.css';
import { useHistory } from 'react-router-dom';

const ContactInfo = () => {
  const history = useHistory();
  return (
      <div>
    <div className='goalWrapper'>
      <item className='goal'>
      24시간을 넘어 고객을 살리기 위해 25시 집중하는 행정사들이 되겠습니다.&nbsp;&nbsp;&nbsp;
      <button onClick={() => { history.push('/topmenu05/submenu01');}}>CONTACT US &#128193;</button>
      </item>
    </div>
    <div className='contactInfo'>
    <item><b>COMPANY INFO</b><br></br><br></br>
        <div>
            상호명 : 그루터기 다민족 행정사 사무소 | 대표 : 장경훈 | 개인정보책임자 : 장경훈
            <br></br>
            <br></br>
            {/* 사업자번호 : 000-00-00000<br></br> */}
            경기도 이천시 부발읍 경충대로 2050번길 15-87 1012호(이천클래시아테라스파크)<br></br><br></br>
            Tel : 010-9781-0191 / Fax : 0504-473-0191<br></br><br></br>
            <span>email : jkhjesus@naver.com<br></br><br></br>
    Band: http://band.us/@138142425002375000</span>
        </div>
    </item>
    <item><b>ORGANIZATION INFO</b>
    <div><br></br>
            
            학교명 : 선한지도자학교 | 대표 : 김혜화 
            <br></br>
            <br></br>
            {/* 사업자번호 : 000-00-00000<br></br> */}
            메타버스 : 제페토 월드 18F147BF<br></br><br></br>
            Tel : 010-3634-6720 / Fax : 0504-473-0191<br></br><br></br>
            <span>email : khh6720@naver.com<br></br><br></br>
    Band: https://band.us/@goodleaderschool</span><br></br><br></br>
    장학금 후원계좌: 카카오뱅크 3333-21-1019984
        </div>
    <br></br><br></br>
    
    </item>
    <item><b>SOCIAL</b><br></br><br></br>
    <img height='40px' width='40px' src='https://cdn-icons-png.flaticon.com/512/1936/1936319.png'></img>&nbsp;&nbsp;
    <img height='40px' width='40px' src='https://cdn-icons-png.flaticon.com/512/1384/1384028.png'></img>
    </item>
    
    </div>

    </div>
  )
}

export default ContactInfo
