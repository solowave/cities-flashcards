import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { FlagsDataContext } from "../contexts/FlagsDataContext";

export function useCountryData() {
  const { countryName } = useParams();
  const { flagsData } = useContext(FlagsDataContext); // Destructure flagsData from context

  // Get unique countries list
  const uniqueCountries = useMemo(() => {
    return [...new Set(flagsData.map((item) => item.countryLabel))];
  }, [flagsData]);

  // Using useMemo to avoid unnecessary recalculations
  const cities = useMemo(() => {
    return flagsData
      .filter((item) => item.countryLabel === countryName)
      .map((item) => {
        return {
          ...item,
          flagUrl: item.flagUrl
            ? `https://commons.wikimedia.org/wiki/Special:FilePath/${item.flagUrl}`
            : "https://placehold.co/63x38?text=No+Flag",
        };
      });
  }, [flagsData, countryName]);

  return {
    countryName,
    uniqueCountries,
    cities,
  };
}
