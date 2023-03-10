import axios from "axios";
import { IAnime, IAnimeFull, IAnimeFullResponse, IAnimeListParams, IAnimeListResponse } from "../types/types";

export class JikanMOE {
    static async getAnimeList(params?:IAnimeListParams): Promise<IAnime[]> {
        const response = await axios.get<IAnimeListResponse>('https://api.jikan.moe/v4/anime', {
            params
        })

        return response.data.data;
    }

    static async getAnimeById(id: number | string | undefined): Promise<IAnimeFull> {
        const response = await axios.get<IAnimeFullResponse>(`https://api.jikan.moe/v4/anime/${id}/full`)
        return response.data.data;
    }
}