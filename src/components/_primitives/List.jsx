import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

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

export const List = {
  Root: ({ children, className }) => <ul className={className}>{children}</ul>,
  Item: ({ title, subtitle }) => (
    <Link to={`/country/${title}`}>
      <li className="flex gap-4 px-4 py-2 items-center">
        <Card className="min-w-14 min-h-14 flex flex-col items-center justify-center rounded-xl text-[28px] leading-[28px] shadow-none">
          {countryFlags[title] || "🏳️"}
        </Card>
        <div className="flex flex-col grow">
          <h3 className="line-clamp-1">{title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </div>
        <div className="text-zinc-700 dark:text-zinc-300">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M9 18L15 12L9 6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </li>
    </Link>
  ),
};
