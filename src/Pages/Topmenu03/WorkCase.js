import React from 'react'
import '../../css/Menu.css';
import { CommPostList, CommunityFilter, Dimmer, SearchHeader, SideButton } from "../../Components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Text, Grid } from "../../Elements";

const WorkCase = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem('token') ? true : false;
  const currentType = useSelector(state => state.post?.showType);
  //infinite scroll 페이지네이션
  const [page, setPage] = React.useState(0);
  const [category, setCategory] = React.useState(currentType);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setCategory(currentType);
  }, [currentType])

  //   React.useEffect(() => {
  //   console.log(category, "category?")
  // }, [category])

  return (
    <div>
      <div className='imgContainer'>
          <img width='100%' src='https://mblogthumb-phinf.pstatic.net/MjAxOTEyMTJfMjI3/MDAxNTc2MTQwMTI3MDQz.BH9CTAPX29-JwHo7tubyLgj79pa_AlukXsEkHS7bZUQg.0cwrlsegcy5RmK5I1bUNMydz555ZTkhCnWE-WJcq6dMg.JPEG.hanbit_goodnews/1576140125987.jpg?type=w800'></img>
          <div submenuContainer>
              <item>인사말</item>
              <item>인사말</item>
              <item>인사말</item>
          </div>
      </div>
      <div className='passage'>
        업무사례
      </div>
      <React.Fragment>
      {/* <Container type="np"> */}
        {/* <Grid width="100%" position={open ? 'fixed' : 'nonset'}>
          <Grid padding="16px 0 0 16px" width="100%"> */}
            {/* <SearchHeader category={category} /> */}
            {/* <CommunityFilter page={page} setPage={setPage} setCategory={setCategory} category={category} /> */}
          {/* </Grid> */}
          <CommPostList page={page} setPage={setPage} category={category} isLogin={isLogin} />
          {/* <Grid height="70px" /> */}
          
          <SideButton open={open} setOpen={setOpen} />
          

        {/* </Grid> */}
      {/* </Container> */}
    </React.Fragment>
    </div>
  )
}

export default WorkCase
