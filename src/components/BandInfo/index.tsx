import htmlParse from "html-react-parser";
import sanitizeHtml from "sanitize-html";

import { MdDateRange, MdOutlineLocationOn } from "react-icons/md";

import dateFormatter from "../../utils/dateFormatter";

function BandInfo({ band }: BandFormProps) {
  const { name, location, description_blurb, date, imgUrl } = band;

  // sanitize the external HTML and parse into renderable React code
  const descriptionContent = htmlParse(sanitizeHtml(description_blurb));

  return (
    <>
      <div className="pb-6 md:pb-0 col-span-5">
        <h1 className="text-4xl mb-4 font-bold">{name}</h1>
        <h2 className="flex flex-row items-center h-8">
          <MdDateRange />
          <span className="px-2">{dateFormatter(date)}</span>
        </h2>
        <h2 className="flex flex-row items-center h-8">
          <MdOutlineLocationOn />
          <span className="px-2">{location}</span>
        </h2>
      </div>
      <div className="col-span-2 gap-12">
        <img src={imgUrl} alt={name} className="mb-12" />
        <div>{descriptionContent}</div>
      </div>
    </>
  );
}

export default BandInfo;
