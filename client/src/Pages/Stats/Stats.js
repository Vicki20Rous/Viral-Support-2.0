import React from "react";
import { Cards, CountryPicker, Chart } from "../../components";
import { fetchData } from "../Covid19Stats";
import "./Stats.css";

class Covid19Stats extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div id="/Stats">
        <main id="stats" className="relative">
          <div className="sm:p-5 md:p-10 lg:p-16 container mx-auto relative">
            <div className="rounded-lg border-solid border-8 border-red-900 border-opacity-50">
              <section className="bg-gray-100 shadow-2xl lg:flex sm:p-2 md:p-4 lg:p-5">
                <div className="flex flex-col justify-center">
                  <h1 className="text-bold text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-center mt-4 mb-2">
                    COVID-19 Statistics
                  </h1>
                  <Cards data={data} />
                  <CountryPicker
                    handleCountryChange={this.handleCountryChange}
                  />
                  <Chart data={data} country={country} />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Covid19Stats;
