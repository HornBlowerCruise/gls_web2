import React from 'react';
import styled from 'styled-components';
import { Text, Grid, Image, Button, Container, Permit } from '../../Elements';
import { AddPostHeader, AddPostFooter } from '../../Components';
import { useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../../Redux/Modules/post';
import { TiDelete } from "react-icons/ti";
import imageCompression from 'browser-image-compression';


const AddPost = () => {
    const dispatch = useDispatch();
    const [postTitle, setPostTitle] = React.useState("");
    const [postContent, setPostContent] = React.useState("");
    const [category, setCategory] = React.useState("");

    const [preview, setPreview] = React.useState(""); //preview
    const [imageUrl, setImageUrl] = React.useState(""); //보내는 image

    //사진 미리보기
    const reader = new FileReader();
    const encodeFileToBase64 = (fileBlob) => {
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setPreview(reader.result);
            };
        });
    };

    const submit = () => {
        dispatch(postActions.addPostDB(postTitle, imageUrl, postContent, category));
    }

    return (
        <React.Fragment>
            <Permit>
                <AddPostHeader submit={submit} disable={postTitle === "" || postContent === "" || category === ""} title="글쓰기" />
                <Grid height="1px" width="100%" bg="#E0E0E0" />
                <Grid margin="16px">
                    {/* <Button type="filter" checked={category === "postType02"} _onClick={() => { setCategory("postType02") }}>질문</Button> */}
                    <Button type="filter" checked={category === "postType03"} _onClick={() => { setCategory("postType03") }}>업무사례</Button>
                    <Button type="filter" checked={category === "postType04"} _onClick={() => { setCategory("postType04") }}>공지사항</Button>
                </Grid>
                <Grid padding="0 16px" width="100%">
                    <Input maxLength="25" type="text" placeholder='글 제목을 입력해주세요'
                    onChange={(e) => {setPostTitle(e.target.value)}}></Input>
                </Grid>
                <Grid width="100%" padding="16px">
                    <Textarea placeholder='본문 내용을 입력해주세요'
                        onChange={(e) => { setPostContent(e.target.value) }}></Textarea>
                </Grid>
                <FixedBox>
                    {imageUrl === "" || imageUrl === null ?
                        <ImageWrap style={{ visibility: "hidden" }}>
                            <Image width="84px" height="84px" type="planterior" />

                        </ImageWrap> :
                        <>
                            <ImageWrap>
                                <Image width="84px" height="84px" type="planterior" imgUrl={preview} />
                                <IconBox>
                                    <TiDelete
                                        size="25px" style={{ flex: "none", marginLeft: "-6.5px" }} color="#5F6060"
                                        onClick={() => { setImageUrl(""); setPreview(""); }} />
                                </IconBox>

                            </ImageWrap>
                        </>
                    }

                    {/* bottom */}
                    <AddPostFooter encodeFileToBase64={encodeFileToBase64} setImageUrl={setImageUrl} />
                </FixedBox>
            </Permit>
        </React.Fragment>
    )
}

const Input = styled.input`
   font-family: 'SUIT';
    width: 100%;
    height: 40px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #DDE1E6;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 500;
    }
    &:focus {
        outline: none;
    }
`
const ImageWrap = styled.div`
    width: fit-content;
    position: relative;
    margin: 12px 8px 12px 16px;
`
const IconBox = styled.div`
  position: absolute;
  top: -5px;
  right: -4px;

  display: flex;
  align-items: center;

  width: 12px;
  height: 12px;

  border: 1px solid #000;
  border-radius: 12px;
  background: #fff;
`

const Textarea = styled.textarea`
    font-family: 'SUIT';
    width: 100%;
    height: 40vh;
    border: none;
    font-size: 14px;
    resize: none;
    &::placeholder {
        color: #DDE1E6;
        font-weight: 500;
    }
    &:focus {
        outline: none;
    }
`
const HR = styled.hr`
    border: 1px solid #E0E0E0;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
`

const FixedBox = styled.div`
    position: fixed;
    bottom: 300px;
`
export default AddPost;