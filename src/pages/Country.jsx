import { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";

import { Loader } from "../Compponents/UI/Loader";
import { CountryCard } from "../Compponents/Layout/CountryCard";
import { SearchFilter } from "../Compponents/UI/SearchFilter";

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountryData();
      setCountries(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};