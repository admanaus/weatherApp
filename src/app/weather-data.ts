import { WeatherDay } from "./weather-day";

export interface WeatherData {
    cityName: string,
    days: WeatherDay[]
}
