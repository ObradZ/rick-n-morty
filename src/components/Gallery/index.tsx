import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

// Do it with Tailwind
// const smallItemStyles: React.CSSProperties = {
//         cursor: 'pointer',
//         objectFit: 'cover',
//         width: '100%',
//         maxHeight: '100%',
//       }
const smallItemClasses = "object-cover w-full max-h-full";
const imageSources = [
    { alt: "space", src: "space2.jpg", width: 1600, height: 1600, isFirst: true },
    { alt: "classic", src: "classic-min.jpg", width: 1920, height: 1080 },
    { alt: "galaxy", src: "galaxy-min.jpg", width: 1920, height: 1080 },
    { alt: "portal", src: "portal-min.jpg", width: 1920, height: 1080, gridcolStart: 2 },
    { alt: "rick-and-morty", src: "rick-and-morty.jpg", width: 1920, height: 1080 },
];
const ImageGallery = () => {
    return (
        <Gallery>
            <div
                className="w-full bg-bgLight p-3"
                style={{
                    display: "grid",
                    gridTemplateColumns: "332px 290px 290px",
                    gridTemplateRows: "160px 160px",
                    gridGap: 12,
                }}
            >
                {imageSources.map((img) => (
                    <Item
                        key={img.alt}
                        original={`/images/gallery/${img.src}`}
                        thumbnail={`/images/gallery/${img.src}`}
                        width={img.width}
                        height={img.height}
                        alt={img.alt}
                    >
                        {({ ref, open }) => (
                            <Image
                                src={`/images/gallery/${img.src}`}
                                ref={ref as React.MutableRefObject<HTMLImageElement>}
                                onClick={open}
                                alt={img.alt}
                                className={`cursor-pointer ${img.isFirst ? "" : smallItemClasses} ${
                                    img.gridcolStart ? "col-start-2" : ""
                                }`}
                                width={img.width}
                                height={img.height}
                            />
                        )}
                    </Item>
                ))}
            </div>
        </Gallery>
    );
};
export default ImageGallery;
