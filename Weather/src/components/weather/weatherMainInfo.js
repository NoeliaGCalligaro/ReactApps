import React from "react";
import styles from "./weatherMainInfo.module.css";

export default function WeatherMainInfo({ weather }) {
  const getBackgroundColor = (condition) => {
    switch (condition) {
      case "Clear":
        return "lightblue";
      case "Partly cloudy":
        return "lightgray";
      case "Cloudy":
        return "gray";
      case "Overcast":
        return "darkgray";
      case "Mist":
        return "lightgray";
      case "Patchy rain possible":
        return "lightblue";
      case "Patchy snow possible":
        return "purple";
      case "Patchy sleet possible":
        return "lightpurple";
      case "Patchy freezing drizzle possible":
        return "darkblue";
      case "Thundery outbreaks possible":
        return "navy";
      case "Blowing snow":
        return "steelblue";
      case "Blizzard":
        return "steelblue";
      case "Fog":
        return "white";
      case "Freezing fog":
        return "lightblue";
      case "Patchy light drizzle":
        return "blue";
      case "Light drizzle":
        return "lightblue";
      case "Freezing drizzle":
        return "slateblue";
      case "Heavy freezing drizzle":
        return "darkblue";
      case "Patchy moderate snow":
        return "verylightblue";
      case "Moderate snow":
        return "verylightblue";
      case "Patchy heavy snow":
        return "verylightblue";
      case "Heavy snow":
        return "lightblue";
      case "Ice pellets":
        return "transparent gray";
      case "Light rain shower":
        return "blue";
      case "Moderate or heavy rain shower":
        return "darkblue";
      case "Torrential rain shower":
        return "darkblue";
      case "Light sleet showers":
        return "lightblue";
      case "Moderate or heavy sleet showers":
        return "almostwhite";
      case "Light snow showers":
        return "lightblue";
      case "Moderate or heavy snow showers":
        return "white";
        
      case "Sunny":
          return "orange";
        default:
          return "white";
    }
  };

  const backgroundStyle = {
    backgroundColor: getBackgroundColor(weather?.current?.condition?.text),
  };

  return (
    <div className={styles.mainInfo} style={backgroundStyle}>
      <div className={styles.city}>{weather?.location?.name}</div>
      <div className={styles.country}>{weather?.location?.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current?.condition?.icon}`}
            width="128"
            alt="Weather Icon"
          />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current?.condition.text}
          </div>
          <div className={styles.current}>{weather?.current?.temp_c}º</div>
        </div>
      </div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
