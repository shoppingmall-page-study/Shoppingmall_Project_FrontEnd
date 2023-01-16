import { List } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import DetailReview from "./DetailReview";

interface Post {
    userId: number;
    id: number,
    title: string;
    body: string;
}

const DetailReviews = () => {
    const [data,setData] = useState<Post []>([])

    useEffect(()=>{
        axios.get('../../../db.json').then(res => setData(res.data.posts))
    },[])

    return(
        <List sx={{padding: '0', background: '#ffffff'}}>
            {
                data.map((db) => (<DetailReview key={db.id} posts={db}/>))
            }
        </List>
    )
}
export default DetailReviews