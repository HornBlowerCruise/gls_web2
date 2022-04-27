import React from 'react';
import { Grid, Image, Text } from '../../Elements';



const PlantCardProfile = () => {
  return (
    <React.Fragment>
      <Grid margin="20px 0" padding="10px">

        <Grid margin="auto" width="fit-content">
          <Image type="circle" size="148px" />
        </Grid>
        <Grid margin="15px auto" width="fit-content">
          <Text bold>로즈마리</Text>
        </Grid>

        <Grid margin="25px 0">
          <Text size="XS" color="#999">
            로즈마리는 바늘 같은 잎을 가진 여러해살이 식물로,
            민트와 같은 과에 속한다. 지중해 연안이 원산지인 허브이며 푸른 잎과 특유의 향을 가졌다.
            로즈마리라는 이름은 라틴어로 '바다(marinus)의 이슬(ros)'이라는 뜻의 '로즈마리누스(rosmarinus)'에서 왔다.
            꽃은 겨울과 봄에 피며 색깔은 흰색, 분홍색, 자주색, 푸른색 등이 있다.
          </Text>
        </Grid>

        <Grid>
          <Grid is_flex height="fit-content">
            <Text bold margin="5px 0">난이도</Text>
            <Text margin="0 40px" size="XS">초보</Text>
          </Grid>
          <Grid is_flex height="fit-content">
            <Text bold margin="5px 0">맞춤 온도</Text>
            <Text size="XS" margin="0 22px">16~20℃</Text>
          </Grid>
        </Grid>


      </Grid>
    </React.Fragment>
  );
}


export default PlantCardProfile;