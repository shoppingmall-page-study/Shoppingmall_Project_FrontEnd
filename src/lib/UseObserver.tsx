import { useEffect, useRef } from "react"

interface Props{
    root?: null,
    rootMargin?: string,
    threshold?: number,
    onIntersect: IntersectionObserverCallback
}

const useIntersection = ({
    root,
    rootMargin,
    threshold,
    onIntersect
}: Props) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(!ref.current) return;

        const observer: IntersectionObserver = new IntersectionObserver(
            onIntersect, {root,rootMargin,threshold}
        );
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [onIntersect, root, rootMargin, ref, threshold])

    return {ref};
}

export default useIntersection