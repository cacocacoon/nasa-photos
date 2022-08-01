import { useState, useEffect, useRef, useCallback } from 'react'
import { Spinner } from '@chakra-ui/react'

export default function useInfinitelyLoad<DataType>(
    fetcher: () => Promise<DataType[]> = () => Promise.resolve([]),
    onShowSpinner: () => void = () => {}
) {
    const [data, setData] = useState<DataType[]>([])
    const spinnerRef = useRef<HTMLDivElement>(null)

    const load = useCallback(async () => {
        const newData = await fetcher()
        setData((oldData) => [...oldData, ...newData])
    }, [fetcher])

    useEffect(() => {
        if (spinnerRef.current) {
            const observer = new IntersectionObserver(onShowSpinner, {
                root: spinnerRef.current,
                threshold: 1,
            })

            return () => observer.disconnect()
        }
    }, [onShowSpinner])

    const ignoreRef = useRef(true)
    useEffect(() => {
        if (!ignoreRef.current) {
            load()
        }
        return () => {
            ignoreRef.current = false
        }
    }, [load])

    const spinner = <Spinner ref={spinnerRef} />

    return {
        data,
        load,
        spinner,
    }
}
