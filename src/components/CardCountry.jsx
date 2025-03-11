import { Link } from "react-router-dom";
import { Card } from "./_primitives/Card";

const countryFlags = {
  Afghanistan: "🇦🇫",
  Albania: "🇦🇱",
  Algeria: "🇩🇿",
  Argentina: "🇦🇷",
  Australia: "🇦🇺",
  Austria: "🇦🇹",
  Azerbaijan: "🇦🇿",
  Bahamas: "🇧🇸",
  Bangladesh: "🇧🇩",
  Belarus: "🇧🇾",
  Belgium: "🇧🇪",
  Brazil: "🇧🇷",
  Bulgaria: "🇧🇬",
  Canada: "🇨🇦",
  Chile: "🇨🇱",
  China: "🇨🇳",
  Colombia: "🇨🇴",
  Croatia: "🇭🇷",
  Cuba: "🇨🇺",
  "Czech Republic": "🇨🇿",
  Denmark: "🇩🇰",
  Egypt: "🇪🇬",
  Estonia: "🇪🇪",
  Finland: "🇫🇮",
  France: "🇫🇷",
  Germany: "🇩🇪",
  Greece: "🇬🇷",
  Hungary: "🇭🇺",
  Iceland: "🇮🇸",
  India: "🇮🇳",
  Indonesia: "🇮🇩",
  Iran: "🇮🇷",
  Iraq: "🇮🇶",
  Ireland: "🇮🇪",
  Israel: "🇮🇱",
  Italy: "🇮🇹",
  Japan: "🇯🇵",
  Kazakhstan: "🇰🇿",
  Kenya: "🇰🇪",
  Latvia: "🇱🇻",
  Lithuania: "🇱🇹",
  Luxembourg: "🇱🇺",
  Malaysia: "🇲🇾",
  Mexico: "🇲🇽",
  Morocco: "🇲🇦",
  Netherlands: "🇳🇱",
  "New Zealand": "🇳🇿",
  Nigeria: "🇳🇬",
  Norway: "🇳🇴",
  Pakistan: "🇵🇰",
  Peru: "🇵🇪",
  Philippines: "🇵🇭",
  Poland: "🇵🇱",
  Portugal: "🇵🇹",
  Romania: "🇷🇴",
  Russia: "🇷🇺",
  "Saudi Arabia": "🇸🇦",
  Serbia: "🇷🇸",
  Singapore: "🇸🇬",
  Slovakia: "🇸🇰",
  Slovenia: "🇸🇮",
  "South Africa": "🇿🇦",
  "South Korea": "🇰🇷",
  Spain: "🇪🇸",
  Sweden: "🇸🇪",
  Switzerland: "🇨🇭",
  Taiwan: "🇹🇼",
  Thailand: "🇹🇭",
  Turkey: "🇹🇷",
  Ukraine: "🇺🇦",
  "United Arab Emirates": "🇦🇪",
  "United Kingdom": "🇬🇧",
  "United States": "🇺🇸",
  Uruguay: "🇺🇾",
  Venezuela: "🇻🇪",
  Vietnam: "🇻🇳",
};

export function CardCountry({ countryName }) {
  return (
    <Link to={`/country/${countryName}`}>
      <Card className="flex flex-col gap-2 p-6 items-center ">
        <p className="text-[82px] leading-[82px]">
          {countryFlags[countryName] || "🏳️"}
        </p>
        <h3 className="line-clamp-1">{countryName}</h3>
      </Card>
    </Link>
  );
}
