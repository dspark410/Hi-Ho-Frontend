import axios from "axios";

export default {
  // zipRecruiter: function (job, location, range, numResult) {
  //   return axios.get(
  //     "https://api.ziprecruiter.com/jobs/v1?search=" +
  //       job +
  //       "&location=" +
  //       location +
  //       "&radius_miles=" +
  //       range +
  //       "&days_ago=&jobs_per_page=" + numResult + "&page=1&api_key=un8v7z7yk9yyiuquy49vj9tnduejbwc8"
  //   ).then((res) => {
  //     return res.data
  //   })
  // },
  usaJobs: function async(job, location, range, numResult) {
    console.log(".env", process.env.USAJOBS_AUTH);
    return axios
      .get(
        "https://data.usajobs.gov/api/search?Keyword=" +
          job +
          "&LocationName=" +
          location +
          "&Radius" +
          range +
          "&ResultsPerPage=" +
          numResult,
        {
          headers: {
            "User-Agent": "webdevwes89@gmail.com",
            "Authorization-Key": "liI1ityY8l44e6YmBvTVVOtBROL9GpeHQ5HW0OWMeNY=",
          },
        }
      )
      .then((res) => {
        console.log(res.data.SearchResult.SearchResultItems);
        return res.data.SearchResult.SearchResultItems;
      });
  },
  ItemPrices: function (location) {
    return axios
      .get(
        "https://www.numbeo.com/api/city_prices?api_key=g1qic1xvvmr7h7&query=" +
          location
      )
      .then((res) => {
        return res.data;
      });
  },
  CostOfLiving: function (location) {
    return axios
      .get(
        "https://www.numbeo.com/api/indices?api_key=g1qic1xvvmr7h7&query=" +
          location
      )
      .then((res) => {
        return res.data.cpi_and_rent_index;
      });
  },
};
