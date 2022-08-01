import { nasaApiInstance } from './utils'

interface PlanetaryApod {
    title: string
    date: string
    explanation: string
    hdurl: string
    media_type: string
    url: string
}

export async function getPlanetaryApod(params = {}) {
    const { data } = await nasaApiInstance.get<PlanetaryApod[]>(
        '/planetary/apod',
        { params }
    )

    return data
}
