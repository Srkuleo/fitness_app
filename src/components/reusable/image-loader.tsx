import { type SignProps, type ImageProps } from "../../types/types";
import Image from "next/image";

export const ImageLoaderDiv = ({ img }: Pick<SignProps, "img">) => {
  return (
    <>
      <ImageLoader altTag={img.altTag} />
      <ImageFilter />
      {img.altTag === "deadlift" && <ImageIntroductionText />}
    </>
  );
};

const ImageLoader = ({ altTag }: ImageProps) => {
  if (altTag === "deadlift") {
    return (
      <Image
        src="/deadlift.jpg"
        alt={altTag}
        priority
        width={1500}
        height={1000}
        placeholder="blur"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAaEAACAgMAAAAAAAAAAAAAAAAAAQMEAhMz/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCXQtz5b25H0AAS/9k="
      />
    );
  }
  return (
    <Image
      src="/squat.jpg"
      alt={altTag}
      priority
      width={1504}
      height={1004}
      placeholder="blur"
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAC3ARIDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEG/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDHgAAAAAoAAAAACKgAAIACAAgAAAAAAAKAAACgAAAoAAAAACoAoigCAAACKgAAIACAAAAAAAAoAAACoAogCgAogCiKAAAAAAACAAAIAAAIAAAAAAACgAAAAAAAoAAAAAAAAAAAAAAgAAAACAAAAAAAAKigAAAAAAAAKgCiAKIAogCoAAAAAAACKgAAAAAAAAAACoAogCiAKAAAAAAAAAAAAAACAqAAAAAAAAAAAAAAAAAAACgAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAACCoAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAIoCAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAACKAgAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAD/9k="
    />
  );
};

const ImageFilter = () => {
  return (
    <div className="z-10 h-full w-full bg-gradient-to-tl from-black via-slate-900 to-slate-400 opacity-30"></div>
  );
};

const ImageIntroductionText = () => {
  return (
    <p className="absolute bottom-64 right-28 w-5/12 text-right text-xl text-yellow-50">
      <span className="text-3xl font-bold text-green-500">Note</span>
      <span className="text-3xl text-slate-400">Set</span> is highly
      personalized, flexible workout tracker and planner, aiming to replace
      conventional use of a{" "}
      <span className="line-through decoration-slate-600">notebook</span>
      .
      <br /> Sign up now{" "}
      <span className="font-bold italic text-green-500">for free</span> to see
      all the benefits at your hand.
    </p>
  );
};
