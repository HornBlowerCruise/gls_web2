import React from 'react';
import { Container } from '../../Elements';
import { AddPlantDairy, AddQuestion, AddPostBody } from '../../Components';

const AddPost = (props) => {
    // const comp = {
    //     0: <AddQuestion />,
        // 1: <AddPlantDairy />,
        // 2: <AddRecommendPost />
    // };

    // modal 창에서 버튼을 클릭할 때 props로 각 페이지에 해당하는 no을 같이 넘겨주기
    // const [active, setActive] = React.useState(props.no);
    // const active = props.no;

    // const active = 0;
    // const active = 1;


    // {comp[active]}


    return (
        <React.Fragment>
            <Container>
                <AddQuestion />
            </Container>
        </React.Fragment>
    )
}
export default AddPost;