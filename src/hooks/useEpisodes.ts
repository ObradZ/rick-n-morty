"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Episode, getEpisodes } from "rickmortyapi";
export function useEpisodes(page?: number) {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const { data, isLoading, error } = useQuery({
        queryKey: ["episodes", page],
        queryFn: async () => {
            const result = await getEpisodes({ page: page });
            return result;
        },
    });

    useEffect(() => {
        setEpisodes((prev) => {
            const allEpisodes = [...prev, ...(data?.data.results || [])];
            return allEpisodes;
        });
    }, [data]);

    return { episodes: episodes, data, isLoadingEpisodes: isLoading, episodesError: error };
}
