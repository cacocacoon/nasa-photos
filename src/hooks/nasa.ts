import { useState, useCallback } from 'react'
import { subDays, format } from 'date-fns'
import { getPlanetaryApod } from 'api/nasa'
import useInfinitelyLoad from 'hooks/useInfinitelyLoad'

const DATE_FORMATE = 'yyyy-MM-dd'
export function useAstronomyPictureInfos() {
    const [params, setParams] = useState(() => {
        const today = new Date()
        return {
            start_date: format(subDays(today, 7), DATE_FORMATE),
            end_date: format(today, DATE_FORMATE),
        }
    })

    const handleGetPlanetApod = useCallback(() => {
        return getPlanetaryApod(params)
    }, [params])

    const handleShowSpinner = useCallback(() => {
        setParams((params) => ({
            ...params,
            start_date: format(
                subDays(new Date(params.start_date), 7),
                DATE_FORMATE
            ),
        }))
    }, [])

    const { data: astronomyPictureInfos, spinner: loadingSpinner } =
        useInfinitelyLoad(handleGetPlanetApod, handleShowSpinner)

    return {
        astronomyPictureInfos,
        loadingSpinner,
    }
}
