import { CardCountry } from "../components/CardCountry";
import { useCountryData } from "../hooks/useCountryData";
import { List } from "../components/_primitives/List";
import { useContext, useEffect } from "react";
import { FlagsDataContext } from "../contexts/FlagsDataContext";

export function Dashboard() {
  const { uniqueCountries, cities } = useCountryData();
  const { flagsData } = useContext(FlagsDataContext);

  useEffect(() => {
    console.log(uniqueCountries.sort());
  }, []);

  return (
    <>
      <section className="px-4 pt-4 pb-2">
        <h1 className="text-5xl leading-[135%]">
          Guess
          <br />
          the City Flag!
        </h1>
      </section>
      <section className="px-4 pt-3.5 pb-2.5 sticky top-0 bg-white dark:bg-black">
        <h1 className="text-[12px] font-bold uppercase text-zinc-600 dark:text-zinc-400">
          Select country
        </h1>
      </section>

      <List.Root className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {uniqueCountries.sort().map((country, index) => {
          const citiesCount = flagsData.filter(
            (item) => item.countryLabel === country
          ).length;

          return (
            <List.Item
              key={index}
              title={country}
              subtitle={`${citiesCount} cities`}
            />
          );
        })}
      </List.Root>
    </>
  );
}
