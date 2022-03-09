import React from "react";

const forintEuroCheck = () => {
    fetch('https://ratesapi.io/api/latest?base=USD&symbols=INR,GBP')
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
    })
    .catch((error) => {
      console.log(error);
    });
}

export default forintEuroCheck;