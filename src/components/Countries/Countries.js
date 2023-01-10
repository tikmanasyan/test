import axios from "axios";
import { useEffect, useState } from "react";

const Countries = () => { 
  const [countries, setCountries] = useState([]);
  const [codes, setCodes] = useState([]);
  const [isFetch, setIsFetch] = useState(true);
  const [country, setCountry] = useState({});
  useEffect(() => {
    if(isFetch) {
      axios.get("https://restcountries.com/v3.1/all").then(response => {
        let codes = [];
        // response.data.forEach( country => {
        //   console.log(Object.keys(country.idd));
        // });
        setCountries(response.data.filter(country => Object.keys(country.idd).length != 0))
        // setCountries(response.data);

        response.data.forEach(country => {
          if( Object.keys(country.idd).length != 0) {
            codes = [
              ...codes,
              {
                iddRoot:country.idd.root,
                iddSuffix:country.idd.suffixes[0],
                code:country.idd.root + country.idd.suffixes[0]
              }
            ]; 
          }
        }); 
        setCodes(codes);  
      }).finally(() => {
        setIsFetch(false);
      });
    }
  }, [isFetch]); 
  // console.log(countries);
  // console.log(codes);

  return (
    <div>
      <select onChange={(e) => {
        let codeIndex = e.target.value;
        console.log(codeIndex)
        // console.log(codes[codeIndex]);
        setCountry(countries.filter(country => country.idd.root == codes[codeIndex].iddRoot && country.idd.suffixes[0] == codes[codeIndex].iddSuffix )[0]);

        console.log(country);
      }}>
        {codes.map((code, index) => <option value={index} key={index}>{code.code}</option>)}
      </select>

       {Object.keys(country).length != 0 ? <h1>Country` {country.name.common} </h1> : null}
    </div>
  );
};
export default Countries;