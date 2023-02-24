import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionCreators as userActions } from "../Redux/Modules/User";
import { Container, Grid, Text, Button } from "../Elements";
import { useHistory } from "react-router-dom";
import { ReactComponent as Icon } from "../Assets/img/errorIcons/loginerror.svg"

const Permit = (props) => {
    const is_login = localStorage.getItem('token') ? true : false;
    const history = useHistory();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(userActions.isLoginDB())
    // },[]);
    // const is_login = useSelector((state) => state.user.isLogin);


    if (props.element && !is_login) {
        return null;
    }
    if (props.element) {
        <React.Fragment>
            {props.children}
        </React.Fragment>
    }
    // if (!is_login || !is_session) {
    if (!is_login) {
        return (
            <React.Fragment>
                    <Grid width="100%" margin="20vh auto" align="center">
                        
                        <Text size="h5">로그인이 필요한<br />서비스입니다</Text>
                        <br></br><br></br>
                        {/* <Grid margin="20px auto">
                            <Icon />
                        </Grid> */}
                        <Grid margin="0 auto">
                            <Button
                                type="float"
                                _onClick={() => history.push('/')}>
                                <Text weight="600" color="#fff">로그인 하러 가기</Text>
                            </Button>
                            <Grid margin="8px auto">
                                <Button type="tran" _onClick={() => { history.push('/home'); }}>
                                    <Text color="#6F6F6F">홈으로</Text>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
            </React.Fragment>

        )
    }
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )

}

export default Permit;