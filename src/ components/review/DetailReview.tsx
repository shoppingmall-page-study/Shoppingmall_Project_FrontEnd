import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from "@mui/material"
import './DetailReview.css'

interface Props  {
    posts: {
        userId: number;
        id: number,
        title: string;
        body: string;
    }
    key: number
}

const DetailReview = ({posts}: Props) => {
    return(
        <div className="DetailReview_Window">
            <ListItem sx={{'&': {paddingLeft: '0rem'}}}>
                <ListItemAvatar>
                    <Avatar variant="square" sx={{width: '10rem', height: '10rem'}} alt="도라에몽" src="https://upload.wikimedia.org/wikipedia/ko/c/cd/Doraemon.PNG"/>
                </ListItemAvatar>
                <ListItemText sx={{'&': {padding: '0.5rem 0.5rem', margin: '0'}, 'span': {fontSize: '1rem'}}}
                    primary={posts.title}
                    secondary={posts.body}
                />
            </ListItem>
            <Divider component="li" variant='fullWidth'/>
        </div>
    )
}
export default DetailReview