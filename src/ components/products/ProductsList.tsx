import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import ProductItem from "./ProductItem";
import './ProductsList.css'

interface Post {
  userId: number;
  id: number,
  title: string;
  body: string;
}


const ProductsList = () => {
    const [data,setData] = useState<Post[]>([])

    useEffect(() => {
        axios.get('db.json').then(res => setData(res.data.posts)) //최적화 시키기
    },[])

    // const onIntersect = useCallback(async(
    //     entries: IntersectionObserverEntry[],
    //     observer: IntersectionObserver
    // ) => {
    //     if(entries[0].isIntersecting){
    //         observer.unobserve(entries[0].target)
    //         // await 
    //         observer.observe(entries[0].target)
    //     }
    // }, [])

    // const {ref} = useIntersection({
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0.5,
    //     onIntersect
    // });
    return (
        <div className="ProductsList_Grid">
            {
                data.map((db) => (<ProductItem key={db.id} view={db}/>))
            }
        </div>
    )
}

export default ProductsList