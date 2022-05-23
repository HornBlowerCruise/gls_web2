import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Text, Grid, Image, Container } from '../../../Elements';
import { actionCreators as MyActions } from '../../../Redux/Modules/MyPage';
import { ReactComponent as FavoriteIcon} from "../../../Assets/img/likeBookmarkIcons/favorite.svg";
import { ReactComponent as FavoriteSelectedIcon} from "../../../Assets/img/likeBookmarkIcons/favorite_selected.svg";
import { ReactComponent as BookmarkIcon} from "../../../Assets/img/likeBookmarkIcons/Bookmark.svg";
import { ReactComponent as BookmarkedIcon} from "../../../Assets/img/likeBookmarkIcons/Bookmark_selected.svg";
import { ReactComponent as CommentIcon } from "../../../Assets/img/likeBookmarkIcons/Comment.svg";


const ScrapPostsList = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const scrapPostList = useSelector(state => state.mypage?.scrapPostList);
    console.log(scrapPostList);

    useEffect(() => {
      dispatch(MyActions.getScrapPostListDB());
    }, [])

    if(!scrapPostList || scrapPostList.length === 0){
        return (
            <React.Fragment>
                <div></div>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>        
            {scrapPostList?.map((p) => {
                    return(
                        <Grid  key={p.postId} width="100%">
                        <Container>
                            <Grid width="100%" >
                                <Grid width="100%" >
                                    <Grid><Text size="xs" color="#24A148">{p?.postType}</Text></Grid>
                                </Grid>
                                {p?.postTitle === "title"? 
                                    null: 
                                    <Grid>
                                        <Text size="large">{p?.postTitle}</Text>
                                    </Grid>
                                }
                                
                                <Grid is_flex align="center" margin="5px 0px 16px 0px">
                                    {p?.profileImgUrl===null?
                                        <Image type="circle" size="24px" imgUrl="/img/noProfileImgSmall.svg"/> :
                                        <Image type="circle" size="24px" imgUrl={p?.profileImgUrl}/>
                                    }
                                    <Text margin="0px 8px" size="small">{p?.nickname}</Text>
                                    <Text size="xsmall" color="#6F6F6F">・ {p?.postRecentTime}</Text>
                                </Grid>
                                <Grid margin="12px 0px 16px 0px"><Text color="#262626" size="small">{p?.postContent}</Text></Grid>
                                
                                {p?.postImgUrl? 
                                    <Grid width="100%" >
                                        <Image type="planterior" borderRadius="8px" imgUrl={p.postImgUrl} width="100%" height="240px"/>
                                    </Grid>: 
                                    null
                                }
                                {/* bottom part - 좋아요, 댓글, 북마크  */}
                                <Grid width="100%" margin="20px 0px" position="relative">
                                    <Grid is_flex align="center">
                                        {p.postLike? 
                                            <FavoriteSelectedIcon 
                                            // onClick={()=> toggleLike()} 
                                            style={{width:"24px", height:"fit-content"}}/> : 
                                            <FavoriteIcon 
                                            // onClick={()=>toggleLike()} 
                                            style={{width:"24px", height:"fit-content"}}/>
                                        }
                                        <Text margin="0px 8px" size="base"  color="#6F6F6F">{p?.postLikeCount}</Text>
                                        <CommentIcon 
                                            style={{width: "20px", height:"fit-content"}} />
                                        <Text margin="0px 8px" size="base" color="#6F6F6F">{p?.commentCount}</Text>
                                    </Grid>
                                    {p.postBookMark? 
                                        <Grid position="absolute" top="0px" right="0px" >
                                            <BookmarkedIcon fill="#0AAF42" stroke="#0AAF42"
                                            // onClick={()=>toggleBookmark()}
                                            style={{width: "24px", height:"fit-content"}} />
                                        </Grid> :
                                        <Grid position="absolute" top="0px" right="0px" >
                                            <BookmarkIcon fill="transparent" stroke="#393939"
                                            // onClick={()=>toggleBookmark()}
                                            style={{width: "24px", height:"fit-content"}} />
                                        </Grid> 
                                    }
                                   
                                </Grid>
                            </Grid>
                        </Container>
                        <Container type="np">
                            <div style={{backgroundColor:"#F7F8FA", height: "12px", width:"100%"}}></div>
                        </Container>
                        </Grid>
                    )
                })}
        </React.Fragment>
    )
}

export default ScrapPostsList;