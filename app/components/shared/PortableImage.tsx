import Image from "next/image";

type imageProp = {
  value: {
    alt: string;
    caption: string;
  };
};

export default function SampleImageComponent({ value }: imageProp) {
  return (
    <figure className="my-10">
      <Image
        className="dark:bg-zinc-800 bg-zinc-100 rounded-sm"
        src="/../public/profile_picture.jpg"
        alt={value.alt || ""}
        loading="lazy"
        width={1000}
        height={800}
        placeholder="blur"
        quality={100}
        blurDataURL="/../public/profile_picture.jpg"
      />
      {value.caption && (
        <figcaption className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
