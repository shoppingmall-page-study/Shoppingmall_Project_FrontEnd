import styled from "@emotion/styled";
import { Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material"
import { borderRadius } from "@mui/system";
import { Link } from "react-router-dom";
import './ReviewItem.css'

interface Props  {
    posts: {
        userId: number;
        id: number,
        title: string;
        body: string;
    }
    key: number
}

const CssReviewItemBtn = styled(Button)({
    width: '5rem',
    height: '2rem',
    border: '1px solid black',
    borderRadius: '0',
    color: 'black',
    background: '#fafbf6',
    '&:hover': {
        background: '#fafbf6'
    }
})

const ReviewItem = ({posts}: Props) => {
    return(
        <div className="ReviewItem_Window">
        <ListItem>
            <ListItemAvatar>
                <Avatar variant="square" sx={{width: '10rem', height: '10rem'}} alt="도라에몽" src="https://upload.wikimedia.org/wikipedia/ko/c/cd/Doraemon.PNG"/>
            </ListItemAvatar>
            <ListItemText sx={{'&': {padding: '0.5rem 0.5rem', margin: '0'}, 'span': {fontSize: '1rem'}}}
                primary={posts.title}
                secondary={posts.body}
            />
        </ListItem>
        <div style={{textAlign: 'right', marginRight: '1rem', marginBottom: '0.5rem'}}>
            <CssReviewItemBtn>수정</CssReviewItemBtn>
            <CssReviewItemBtn sx={{marginLeft: '0.625rem'}}>삭제</CssReviewItemBtn>
        </div>
        <Divider component="li" variant="middle"/>
        </div>
    )
}

export default ReviewItem