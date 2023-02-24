import '../css/Navbar.css';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../Redux/Modules/post"

const Navbar2 = () => {
  const dispatch = useDispatch();
    const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  return (
    <div>
      <header className={visible ? '' : 'hide'}>
  <h1 className='logo' onClick={() => { history.push('/home');}}>GLS</h1>
  <span className='blankCenter'></span>
    <div className='board1'  onClick={() => { history.push('/topmenu01/submenu01');}}>소개
    {/* <div className='board1DropDown'> */}
        {/* <ul>  */}
        {/* history.replace("/home") */}
             {/* <li className='dropDownContent'>그루터기행정사무소</li> */}
            {/* <li className='dropDownContent' onClick={() => { history.push('/topmenu01/submenu02');}}>GLS</li> */}
            {/* <li className='dropDownContent'>교장</li> */}
        {/* </ul> */}
    {/* </div> */}
    </div>
    {/* <div className='board2' onClick={() => { history.push('/topmenu02/submenu01'); dispatch({type:"SET_SHOW_TYPE", payload: {type: 'postType02'}});}}>업무사례 */}
    <div className='board2' onClick={() => { history.push('/topmenu02/submenu01'); }}>주요업무
    {/* <div className='board2DropDown'>
        <ul>
            <li className='dropDownContent'>인사말</li>
            <li className='dropDownContent'>소개</li>
            <li className='dropDownContent'>교장</li>
        </ul>
    </div> */}
    </div>
    <div className='board3' onClick={() => { history.push('/topmenu03/submenu01'); dispatch({type:"SET_SHOW_TYPE", payload: {type: 'postType03'}});}}>업무사례
    {/* <div className='board3DropDown'>
        <ul>
            <li className='dropDownContent'>인사말</li>
            <li className='dropDownContent'>소개</li>
            <li className='dropDownContent'>교장</li>
        </ul>
    </div> */}
    </div> 
    {/* <div className='board4' onClick={() => { history.push('/topmenu04/submenu01'); console.log("type04"); dispatch(postActions.setShowTypeDB("type04"));}}>공지사항 */}
    <div className='board4' onClick={() => { history.push('/topmenu04/submenu01'); dispatch({type:"SET_SHOW_TYPE", payload: {type: 'postType04'}});}} >공지사항
    {/* <div className='board4DropDown'>
        <ul>
            <li className='dropDownContent' >인사말</li>
            <li className='dropDownContent'>소개</li>
            <li className='dropDownContent'>교장</li>
        </ul>
    </div> */}
    </div>
    <div className='board5' onClick={() => { history.push('/topmenu05/submenu01'); }}>문의하기
    </div>
    <span className='blankRight'></span>
    {/* </span> */}
</header>
    </div>
  )
}

export default Navbar2
