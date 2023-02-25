import React from "react";
import { Text, Grid, Image } from "../../Elements";
import { useHistory } from "react-router-dom";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import { useDispatch } from "react-redux";
import { ReactComponent as FavoriteIcon } from "../../Assets/img/likeBookmarkIcons/favorite.svg";
import { ReactComponent as FavoriteSelectedIcon } from "../../Assets/img/likeBookmarkIcons/favorite_selected.svg";
import { ReactComponent as BookmarkIcon } from "../../Assets/img/likeBookmarkIcons/Bookmark.svg";
import { ReactComponent as CommentIcon } from "../../Assets/img/likeBookmarkIcons/Comment.svg";
import { useEffect } from "react";

const CommPost = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const category = useSelector(state => state.post?.category);
  const isLogin = localStorage.getItem('token');
  const post = props?.postList;

  const postLike = post?.postLike;
  const bookmarked = post?.postBookMark;

  const [like, setLike] = React.useState(postLike);
  const [bookmark, setBookmark] = React.useState(bookmarked);

  const toggleLike = () => {
    if (like === false && isLogin) {
      setLike(true);
      dispatch(postActions.likePostDB(props.category, post.postId));
    } else {
      setLike(false);
      dispatch(postActions.likePostDB(props.category, post.postId));
    }
  };
  const toggleBookmark = () => {
    if (bookmark === false && isLogin) {
      setBookmark(true);
      dispatch(postActions.bookmarkPostDB(props.category, post.postId));
    } else {
      setBookmark(false);
      dispatch(postActions.bookmarkPostDB(props.category, post.postId));
    }
  };
  return (
    // <React.Fragment>
    //   <Grid width="300px" padding="16px">
    //     <Grid width="100%" >
    //       <Grid><Text size="xsmall" color="#24A148">{post?.postType}</Text></Grid>
    //     </Grid>
    //     <Grid width="100%" _onClick={() => history.push(`/community/${post.postId}`)}>
    //       <Grid>
    //         <Text size="large" weight="500">{post?.postTitle.slice(0, 16)}</Text>
    //       </Grid>

    //       <Grid is_flex align="center" margin="4px 0">
    //         {post?.profileImgUrl === 'null' || post?.profileImgUrl === null || post?.profileImgUrl === "" ?
    //           <Image type="circle" size="24px" imgUrl="/img/noProfileImgSmall.svg" /> :
    //           <Image type="circle" size="24px" imgUrl={post?.profileImgUrl} />
    //         }
    //         <Grid is_flex align="center" margin="0 8px 1px 8px">
    //           <Grid align="center" margin="1px 0 0 0">
    //             <Text size="small" weight="400">{post?.nickname}</Text>
    //           </Grid>
    //           <Grid align="center">
    //             <Text size="xsmall" color="#6F6F6F" weight="400">・{post?.postRecentTime}</Text>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //       {post?.postImgUrl ?
    //         <Grid width="100%" height='270px'>
    //           <Image type="planterior" imgUrl={post.postImgUrl} width="100%" />
    //         </Grid> : null}
    //         <Grid margin="8px 0px 16px 0px"><Text color="#262626" size="small" weight="400">{post?.postContent.slice(0, 50)}</Text></Grid>
    //     </Grid>
    //     {/* bottom part - 좋아요, 댓글, 북마크 */}
    //     <Grid width="100%" margin="20px 0 0 0" position="relative">
    //       <Grid is_flex align="center" >
    //         <Grid is_flex align="center">
    //           {like ?
    //             <FavoriteSelectedIcon
    //               onClick={() => { toggleLike() }} /> :
    //             <FavoriteIcon fill="#464646"
    //               onClick={() => toggleLike()} />
    //           }
    //           <Text margin="0px 8px" size="base" weight="400" color="#6F6F6F">{post?.postLikeCount}</Text>
    //         </Grid>
    //         <Grid is_flex align="center" margin="0 8px" _onClick={() => history.push(`/community/${post.postId}`)}>
    //           <CommentIcon fill="#6F6F6F" />
    //           <Text margin="0px 8px" size="base" weight="400" color="#6F6F6F">{post?.commentCount}</Text>
    //         </Grid>
    //       </Grid>
    //       <Grid position="absolute" top="3px" right="0px" >
    //         {bookmark ?
    //           <BookmarkIcon
    //             className='bookmark'
    //             fill="#0AAF42"
    //             stroke="#0AAF42"
    //             onClick={() => toggleBookmark()} /> :
    //           <BookmarkIcon
    //             className='bookmark'
    //             fill="none"
    //             stroke="#6F6F6F"
    //             onClick={() => toggleBookmark()} />
    //         }
    //       </Grid>
    //     </Grid>

    //   </Grid>
    // </React.Fragment>
    <React.Fragment>
      <Grid width="300px" padding="16px">
        <Grid width="100%" >
          <Grid><Text size="xsmall" color="#24A148">{post?.postType}</Text></Grid>
        </Grid>
        <Grid width="100%" _onClick={() => history.push(`/community/${post.postId}`)}>
          <Grid>
            <Text size="large" weight="500">{post?.postTitle.slice(0, 16)}</Text>
          </Grid>

          <Grid is_flex align="center" margin="4px 0">
            {post?.profileImgUrl === 'null' || post?.profileImgUrl === null || post?.profileImgUrl === "" ?
              <Image type="circle" size="24px" imgUrl="/img/noProfileImgSmall.svg" /> :
              <Image type="circle" size="24px" imgUrl={post?.profileImgUrl} />
            }
            <Grid is_flex align="center" margin="0 8px 1px 8px">
              <Grid align="center" margin="1px 0 0 0">
                <Text size="small" weight="400">{post?.nickname}</Text>
              </Grid>
              <Grid align="center">
                <Text size="xsmall" color="#6F6F6F" weight="400">・{post?.postRecentTime}</Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid margin="8px 0px 16px 0px"><Text color="#262626" size="small" weight="400">{post?.postContent.slice(0, 50)}</Text></Grid>
          {post?.postImgUrl ?
            <Grid width="100%" >
              <Image type="planterior" imgUrl={post.postImgUrl} width="100%" />
            </Grid> : null}
        </Grid>
        {/* bottom part - 좋아요, 댓글, 북마크 */}
        <Grid width="100%" margin="20px 0 0 0" position="relative">
          <Grid is_flex align="center" >
            <Grid is_flex align="center">
              {like ?
                <FavoriteSelectedIcon
                  onClick={() => { toggleLike() }} /> :
                <FavoriteIcon fill="#464646"
                  onClick={() => toggleLike()} />
              }
              <Text margin="0px 8px" size="base" weight="400" color="#6F6F6F">{post?.postLikeCount}</Text>
            </Grid>
            <Grid is_flex align="center" margin="0 8px" _onClick={() => history.push(`/community/${post.postId}`)}>
              <CommentIcon fill="#6F6F6F" />
              <Text margin="0px 8px" size="base" weight="400" color="#6F6F6F">{post?.commentCount}</Text>
            </Grid>
          </Grid>
          <Grid position="absolute" top="3px" right="0px" >
            {bookmark ?
              <BookmarkIcon
                className='bookmark'
                fill="#0AAF42"
                stroke="#0AAF42"
                onClick={() => toggleBookmark()} /> :
              <BookmarkIcon
                className='bookmark'
                fill="none"
                stroke="#6F6F6F"
                onClick={() => toggleBookmark()} />
            }
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  )
}


export default CommPost;