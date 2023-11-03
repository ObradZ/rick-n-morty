import Image from "next/image";
import { Episode } from "rickmortyapi";

const EpisodePreview = ({ episode }: { episode: Episode }) => (
    <div
        className={`flex relative border-2 border-primary `}
        style={{ minWidth: "250px", width: "250px", height: "140px" }}
    >
        <Image
            className="absolute opacity-20"
            alt="episode"
            src="/images/episodes/episode-preview.jpeg"
            width={250}
            height={140}
        />
        <div className="flex flex-col p-4 w-full">
            <p className={"text-xl text-primary font-semibold"}>{episode.name}</p>

            <div className="flex justify-between mt-auto text-gray-300">
                <p>{episode.episode}</p>
                <p className="">{episode.air_date}</p>
            </div>
        </div>
    </div>
);

export default EpisodePreview;
