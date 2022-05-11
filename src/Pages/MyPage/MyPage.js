import React from "react";
import { MyPageHeader,MyCategoryBar } from "../../Components";
import { Container } from "../../Elements";

const MyPage = () => {

    return (
        <React.Fragment>
            <Container>
                <MyPageHeader />
            </Container>
            <Container type="np" >
                <MyCategoryBar />
            </Container>
        </React.Fragment>
    )
}

export default MyPage;