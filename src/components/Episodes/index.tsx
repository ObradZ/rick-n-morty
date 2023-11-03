import { useEpisodes } from "@/hooks/useEpisodes";
import { ChangeEvent, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import EpisodePreview from "../EpisodePreview";
import Container from "@/layout/Container";
import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";

const Episodes = () => {
    const [episodesPage, setEpisodesPage] = useState(1);
    const { episodes, data } = useEpisodes(episodesPage);

    const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);
    const [value, setValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(value, 500);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        // Only 59 episodes, that can be handled on the frontned - characters are filtered trough API
        const tempEpisodes = episodes.filter(
            (ep) =>
                ep.name.toLowerCase().includes(debouncedValue.toLowerCase()) ||
                ep.episode.toLowerCase().includes(debouncedValue.toLowerCase())
        );
        setFilteredEpisodes(tempEpisodes);
    }, [debouncedValue, episodes]);

    return (
        <Container>
            <h2 className="text-2xl text-primary mb-4">Episode list: </h2>
            <div className="relative">
                <Image
                    className="absolute top-px"
                    width={20}
                    height={20}
                    src="/images/episodes/search.svg"
                    alt="search"
                />
                <input
                    className="text-l text-secondary pl-6 mb-3 w-full bg-transparent border-b-2 border-b-secondary focus:border-b-2 focus:border-primary focus:outline-none focus:placeholder-opacity-50 placeholder-opacity-0 placeholder-secondary"
                    type="text"
                    value={value}
                    id="ep-search"
                    onChange={handleChange}
                    placeholder="Search by episode name or episode number (Pickle Rick or S03E03)"
                />
            </div>

            <InfiniteScroll
                dataLength={data?.data.results?.length || 0}
                next={() => setEpisodesPage((prev) => prev + 1)}
                hasMore={!!data?.data.info?.next}
                className="space-x-4 max-w-full flex pb-5"
                loader={
                    <div>
                        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
                    </div>
                }
            >
                {filteredEpisodes?.map((item) => (
                    <EpisodePreview key={item.id} episode={item} />
                ))}
            </InfiniteScroll>
        </Container>
    );
};

export default Episodes;
