import React from 'react'
import '../../css/HomeNotice.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { CommPostList, CommunityFilter, Dimmer, SearchHeader, SideButton } from "../../Components";

const HomeNotice = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLogin = localStorage.getItem('token') ? true : false;
    const [page, setPage] = React.useState(0);
    

  return (
    <div>
      <div className='homeNoticeContainer'>
        <div className='notices'>
            <item>
            공지사항
            <br></br><br></br>
            <span onClick={() => { history.push('/topmenu04/submenu01'); dispatch({type:"SET_SHOW_TYPE", payload: {type: 'postType04'}});}}><b>MORE VIEW &#8594;</b></span>
            </item>
            <div className='casesEx'>
            {/* <item className='card'>
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
            </item> */}
            <CommPostList page={2} setPage={setPage} category="postType04" isLogin={isLogin} />
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeNotice
