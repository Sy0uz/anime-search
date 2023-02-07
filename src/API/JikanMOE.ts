import axios from "axios";
import { IAnime, IAnimeFull, IAnimeFullResponse, IAnimeListResponse } from "../types/types";

export class JikanMOE {
    static async getAnimeListByName(name:string): Promise<IAnime[]> {
        const response = await axios.get<IAnimeListResponse>('https://api.jikan.moe/v4/anime', {
            params: {
                q: name,
            }
        })

        return response.data.data;
    }

    static async getAnimeById(id: number): Promise<IAnimeFull> {
        const response = await axios.get<IAnimeFullResponse>(`https://api.jikan.moe/v4/anime/${id}/full`)
        return response.data.data;
    }
}