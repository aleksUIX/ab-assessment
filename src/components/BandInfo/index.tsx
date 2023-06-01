import htmlParse from "html-react-parser";
import sanitizeHtml from "sanitize-html";

import dateFormatter from "../../utils/dateFormatter";



function BandInfo({ band }: BandFormProps) {
  const { name, location, description_blurb, date, imgUrl } = band;

  return (
    <>
      <div className="col-span-5">
        <h1 className="text-4xl mb-4 font-bold">{name}</h1>
        <h2>{dateFormatter(date)}</h2>
        <h2>{location}</h2>
      </div>
      <div className="col-span-2 gap-12">
        <img src={imgUrl} alt={name} className="mb-12" />
        <div>{htmlParse(sanitizeHtml(description_blurb))}</div>
      </div>
    </>
  );
}

export default BandInfo;