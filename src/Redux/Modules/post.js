import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { searchAPI, postAPI, myPageAPI } from "../../Shared/api";


// 액션 
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const GET_ALL_POST = "GET_ALL_POST";
const GET_POST_DETAIL = "GET_POST_DETAIL";
const POST_SEARCHING = "POST_SEARCHING";

const LIKE_POST = "LIKE_POST";
const GET_LIKE_CNT = "GET_LIKE_CNT";
const BOOKMARK_POST = "BOOKMARK_POST";

const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const SET_SHOW_TYPE = "SET_SHOW_TYPE";

// 액션 생성
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, () => ({}));
const getPostList = createAction(GET_ALL_POST, (postList) => ({ postList }));
const getDetailPost = createAction(GET_POST_DETAIL, (post) => ({ post }));
const postSearching = createAction(POST_SEARCHING, (searchList) => ({ searchList }));

const likePost = createAction(LIKE_POST, (post) => ({ post }));
const getPostLikeCount = createAction(GET_LIKE_CNT, (postLikeCount) => ({postLikeCount}));
const bookmarkPost = createAction(BOOKMARK_POST, (post) => ({ post }));

const addComment = createAction(ADD_COMMENT, () => ({ }));
const editComment = createAction(EDIT_COMMENT, () => ({}));
const deleteComment = createAction(DELETE_COMMENT, () => ({}));

const setShowType = createAction(SET_SHOW_TYPE, (type) => ({type}));


// initial State
const initialState = {
  showType:"type00",
  postList: [],
  post: {
    postId: 0,
    nickname: "",
    profileImgUrl: null,
    postTitle: "",
    postContent: "",
    postImgUrl: "",
    postType: "",
    postRecentTime: "",
    postLike: false,
    postLikeCount: 0,
    postBookMark: false,
    commentList: [
      {
        commentId: 0,
        nickname: "",
        profileImgUrl: null,
        commentContent: "",
        commentRecentTime: ""
      }
    ],
    plantPlace: null
  },
  is_loading: false,
}

// 미들웨어 
// 커뮤니티 글 작성
const addPostDB = (postTitle, postImgUrl, postContent, postTypeCode) => {
    const formData = new FormData();
    formData.append("postTitle", postTitle);
    formData.append("postContent", postContent);
    formData.append("postTypeCode", postTypeCode);
    if(postImgUrl !== ""){
      formData.append("postImgUrl", postImgUrl);
    }
    return function (dispatch, getState, { history }){
        postAPI
            .addPost(formData)
            .then((res) => {
                dispatch(addPost(res));
                history.replace(`/community`);
                window.location.reload();
            }).catch((err) => {
                console.log("error: ", err);
                // window.alert('글 작성하기에 실패하였습니다.');
                return;
            })
    }
    
}

//커뮤니티 글 불러오기(로그인)
const getPostListDB_login = (category, page) => {
  return function (dispatch, getState, { history }) {
    if (category === "all") {
      postAPI
        .getAllPost_login(page)
        .then((res) => {
          dispatch(getPostList(res.data));
        })
        .catch((error) => {
          console.log('error: ', error);
        })
    }
    if (category !== "all") {
      postAPI
        .getFilteredPost_login(category, page)
        .then((res) => {
          dispatch(getPostList(res.data));
        })
        .catch((error) => {
          console.log('error: ', error);
        })
    }
  }
}
//커뮤니티 글 불러오기(non-로그인)
const getPostListDB_non_login = (category, page) => {
  return function (dispatch, getState, { history }) {
    if (category === "all") {
      postAPI
        .getAllPost_nonLogin(page)
        .then((res) => {
          dispatch(getPostList(res.data));
        })
        .catch((error) => {
          console.log('error: ', error);
        })
    }
    if (category !== "all") {
      postAPI
        .getFilteredPost_nonLogin(category, page)
        .then((res) => {
          dispatch(getPostList(res.data));
        })
        .catch((error) => {
          console.log('error: ', error);
        })
    }
  }
}

//게시글 디테일 조회
const getDetailPostDB = (postId) => {
  const _postId = parseInt(postId);
  return function (dispatch, getState, { history }) {
    postAPI
      .getDetailPost(_postId)
      .then((response) => {
        dispatch(getDetailPost(response.data));
      })
      .catch((err) => {
        console.log("error:", err);
        // window.alert("게시글 조회를 실패하였습니다.");
        return;
      })
  }
}

//커뮤니티 글 삭제
const deletePostDB = (postId) => {
    return function(dispatch, getState, { history }) {
        postAPI
            .deletePost(postId)
            .then((response) => {
                dispatch(deletePost());
                // window.alert('게시글이 성공적으로 삭제되었습니다.');
                history.replace('/community');
                window.location.reload();
            })
            .catch((err)=>{
                console.log("error:" , err);
                // window.alert("게시글 삭제를 실패하였습니다.");
            })
    }
}

//커뮤니티 글 수정
const editPostDB = (formData, postId) => {

  return function (dispatch, getState, { history }) {
    postAPI
      .editPost(formData, postId)
      .then((response) => {
        // window.alert('게시글이 성공적으로 수정되었습니다.');
        history.replace(`/community/${postId}`);
        window.location.reload();
        dispatch(getDetailPost(postId));
      })
      .catch((err) => {
        console.log("error:", err);
        // window.alert("게시글 수정을 실패하였습니다.");
      })
  }
}
// 좋아요 표시하기
const likePostDB = (category, postId) => {
  const _postId = parseInt(postId);
  return function (dispatch, getState, { history }) {
    postAPI
      .likePost(postId)
      .then((res) => {
        dispatch(getPostLikeCount(res.data));
      })
      .catch((err) => {
        console.log("error:", err);
        // window.alert("게시글 좋아요에 실패하였습니다.");
      })
  }
}

// 북마크 표시하기 (bookmark는 count는 필요없고 true.false값만 보내주면 될듯 )
const bookmarkPostDB = (category, postId) => {
  return function (dispatch, getState, { history }) {
    postAPI
      .bookmarkPost(postId)
      .then((res) => {
        return;
      })
      .catch((err) => {
        console.log("error:", err);
        // window.alert("게시글 북마크 등록에 실패하였습니다.");
      })
  }
}

// detail페이지에서 좋아요 표시하기
const likeDetailPostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    postAPI
      .likePost(postId)
      .then((res) => {
        dispatch(getPostListDB_login(0));
        dispatch(getDetailPostDB(postId));
      })
      .catch((err) => {
        console.log("error:", err);
        // window.alert("게시글 좋아요에 실패하였습니다.");
      })
  }
}
// detail페이지에서 북마크 표시하기
const bookmarkDetailPostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    postAPI
      .bookmarkPost(postId)
      .then((res) => {
        // if (res.data.result === "true") {
        //   window.alert("북마크로 등록되었습니다.");
        // } else {
        //   window.alert("북마크를 취소하였습니다.");
        // }
        dispatch(getPostListDB_login(0));
        dispatch(getDetailPostDB(postId));
      })
      .catch((err) => {
        console.log("error:", err);
        // window.alert("게시글 좋아요에 실패하였습니다.");
      })
  }
}

//검색 보류보류
// 커뮤니티 검색어 검색 (+ 필터링도 가능하게 해야됨)
const postSearchingDB = (postTypeCode, keyword) => {
  if (postTypeCode === "all") {
    postTypeCode = ""
  }
  return function (dispatch, getState, { history }) {
    searchAPI
      .postSearching(postTypeCode, keyword)
      .then((res) => {
        dispatch(postSearching(res.data));
        dispatch(getPostListDB_login(res.data));
      }).catch((error) => {
        console.log("error: ", error);
        // window.alert('글 검색하기에 실패하였습니다.');
      });
  }
};


//댓글 달기
const addCommentDB = (postId, commentdata) => {
  return function (dispatch, getState, { history }){
    postAPI
      .addComment(commentdata)
      .then((res) => {
        dispatch(getDetailPostDB(postId));
      }).catch((error) => {
        console.log("error: ", error);
        // window.alert('댓글 작성하기를 실패하였습니다.');
      });
  }
}

//댓글 수정 (postId는 필요하지 않은지?)
const editCommentDB = (postId, editdata) => {
    return function (dispatch, getState, { history }){
      postAPI
        .editComment(editdata)
        .then((res) => {
          dispatch(getDetailPostDB(postId));
        }).catch((error) => {
          console.log("error: ", error);
          // window.alert('댓글 수정하기를 실패하였습니다.');
        });
    }
}

//댓글 삭제
const deleteCommentDB = (postId, commentId) => {
    return function (dispatch, getState, { history }){
      postAPI
        .deleteComment(commentId)
        .then((res) => {
          dispatch(getDetailPostDB(postId));
        }).catch((error) => {
          console.log("error: ", error);
          // window.alert('댓글 삭제하기를 실패하였습니다.');
        });
    
  }
}

//게시판 타입 정하기
const setShowTypeDB = (type) => {
  return function (dispatch, getState, { history }) {
    // showType = type;
    console.log("여기까진 넘어오고",type)
    // SET_SHOW_TYPE(type);
    setShowType({ showType: "postType04" });
  }
}

// Reducer
export default handleActions(
  {
    [SET_SHOW_TYPE]: (state, action) => produce(state, (draft) => {
      // draft.showType = "postType04";
      draft.showType = action.payload.type;
      
    }) ,
    [ADD_POST]: (state, action) => produce(state, (draft) => {
      draft.post = action.payload.post;
    }),
    [GET_ALL_POST]: (state, action) => produce(state, (draft) => {
      if(action.payload.postList.page > 0) {
        draft.postList.content.push(...action.payload.postList.content);
      }else {
        draft.postList = action.payload.postList;
      }
      draft.postList.page = action.payload.postList.page;
    }),
    [GET_POST_DETAIL]: (state, action) => produce(state, (draft) => {
      draft.post = action.payload.post;
    }),
    [GET_LIKE_CNT]: (state, action) => produce (state, (draft) => {
      //result
      const postId = parseInt(action.payload.postLikeCount.postId);
      const likeCount = parseInt(action.payload.postLikeCount.likeCount);
      const liked = action.payload.postLikeCount.result;
      
      //현재 배열에서 바꿀 배열의 index값
      const index = state.postList.content.findIndex(i => i.postId === postId);

      //바꿀 객체의 앞 배열
      const contentAheadEditOne = state.postList.content.slice(0,index);
      
      //바꿀 객체 
      const arrayToEdit = state.postList.content.filter(x => x.postId === postId);
      const newArray = arrayToEdit.map(p => 
        p.postId === postId
        ? {...p, postLikeCount: likeCount, postLike: liked} //좋아요 개수와 좋아요 여부 변경
        : p);

      //바꿀 객체의 뒷 배열
      const contentAfterEditOne = state.postList.content.slice(index+1);

      draft.postList.content = [...contentAheadEditOne, ...newArray, ...contentAfterEditOne];
    }),
    [POST_SEARCHING]: (state, action) => produce(state, (draft) => {
      draft.searchList = action.payload.searchList;
    }),
    
  }, initialState
)


const actionCreators = {
    postSearchingDB,
    addPostDB,
    getPostListDB_login,
    getPostListDB_non_login,
    getDetailPostDB,
    editPostDB,
    deletePostDB,
    likePostDB,
    likeDetailPostDB,
    bookmarkPostDB,
    bookmarkDetailPostDB,
    addCommentDB,
    editCommentDB,
    deleteCommentDB,
    setShowTypeDB,
}

export { actionCreators };