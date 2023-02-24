import React from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Cases = () => {
    const history = useHistory();
    const dispatch = useDispatch();
  return (
    <div>
      <div className='casesContainer'>
        <div className='cases'>
            <item>
            그루터기 다민족 
            <br></br>
            행정사 사무소
            <br></br>
            <b>주요 업무 사례</b>
            <br></br>
            Business case
            <br></br>
            <span>24시간을 넘어 고객을 살리기 위해 25시 집중하는 행정사들이 되겠습니다.</span>
            <br></br><br></br>
            <span onClick={() => { history.push('/topmenu03/submenu01'); dispatch({type:"SET_SHOW_TYPE", payload: {type: 'postType03'}});}}><b>MORE VIEW &#8594;</b></span>
            </item>
            <div className='casesEx'>
            <item className='card'>
                <span>
                행정법률
                <div>
                    <br></br>
                    행정법률 관련
                    <br></br>
                    모든 상담/자문 진행
                </div>
                </span>
            </item>
            <item className='card'>
                <span>
                행정 및 기업경영
                <div>
                    <br></br>
                    정책자금 / 기업인증
                    <br></br>
                    경영지원 컨설팅
                </div>
                </span>
            </item>
            <item className='card'>
                <span>
                지역정비 및 개발
                <div>
                    <br></br>
                    개발 인허가 / 토지보상
                    <br></br>
                    소규모 주택정비사업
                </div>
                </span>
            </item>
            <item className='card'>
                <span>
                외국인 출입국
                <div>
                    <br></br>
                    체류관련업무 / 단기취업
                    <br></br>
                    비자 / 기술인력 초청 상담
                </div>
                </span>
            </item>
            <item className='card'>
                <span>
                행정심판
                <div>
                    <br></br>
                    각종 행정심판 / 구제
                </div>
                </span>
            </item>
            <item className='card'>
                <span>
                각종 단체
                <div>
                    <br></br>
                    비영리 단체 / 협동조합
                    <br></br>
                    사회적기업 / 마을공동체 설립
                </div>
                </span>
            </item>
            <item className='card'>
                <span>
                국가보훈
                <div>
                    <br></br>
                    국가유공자 등록
                    <br></br>
                    이의신청 / 행정심판
                </div>
                </span>
            </item>
            <item className='card'>
                <span>
                민원행정
                <div>
                    <br></br>
                    각종 행정업무 / 신고 및 등록
                </div>
                </span>
            </item>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cases
