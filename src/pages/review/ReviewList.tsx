import { Divider, List } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

interface Post {
    userId: number;
    id: number,
    title: string;
    body: string;
}

const ReviewList = () => {
    const [data,setData] = useState<Post[]>([])

    useEffect(() => {
        axios.get('../../db.json').then(res => setData(res.data.posts))
    },[])

    return(
        <div style={{
            paddingLeft: '10rem',
            background: '#FFFFFF',
        }}>
            <List sx={{padding: '0'}}>
                <h3 style={{paddingLeft: '1rem', margin: '1rem 0rem'}}>리뷰목록</h3>
                {
                    data.map((db) => (<ReviewItem key={db.id} posts={db}/>))
                }
            </List>
        </div>
    )
}
export default ReviewList