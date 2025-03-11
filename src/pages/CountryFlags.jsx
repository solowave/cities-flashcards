import { Button } from "../components/_primitives/Button";
import { Card } from "../components/_primitives/Card";
import { useCountryData } from "../hooks/useCountryData";
import { AppLayout } from "../components/AppLayout";

export function CountryFlags() {
  const { countryName, cities } = useCountryData();

  return (
    <AppLayout.Root>
      <AppLayout.Header
        title={`City flags – ${countryName}`}
        citiesNum={cities.length}
      />
      <AppLayout.Body>
        <div className="grid items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 py-4">
          {cities.map((city, index) => {
            return (
              <Card
                key={index}
                className="flex flex-col gap-2 p-3 items-center"
              >
                <h3 className="line-clamp-1 text-base">{city.cityLabel}</h3>
                <img
                  className="rounded-sm border border-zinc-200  dark:border-zinc-700"
                  src={city.flagUrl}
                  alt={`Flag of ${city.cityLabel}`}
                />
              </Card>
            );
          })}
        </div>
      </AppLayout.Body>
      <AppLayout.Footer className="grid-cols-2">
        <Button to={`/country/${countryName}/learn`} variant="outline">
          LEARN
        </Button>

        <Button to={`/country/${countryName}/quiz`}>QUIZ</Button>
      </AppLayout.Footer>
    </AppLayout.Root>
  );
}
