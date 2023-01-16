import { LastPage } from "@mui/icons-material";
import axios from "axios"
import { useInfiniteQuery } from "react-query";

const UseInfiniteQuery = () => {
    const fetchPost = async({pageParam = 1}) => {
        const result = await axios.get(`/post/popular?page=${pageParam}&size=5`)

        const {posts, isLast} = result.data.payload;
        return{
            result: posts,
            nextPage: pageParam + 1,
            isLast,
        }
    }

    const query = useInfiniteQuery(['popular_posts'], fetchPost, {
        getNextPageParam: (lastPage) => {
            if (!lastPage.isLast) return lastPage.nextPage;
            return undefined;
        },
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        retry: 1,
    })
    return query
}
export default UseInfiniteQuery