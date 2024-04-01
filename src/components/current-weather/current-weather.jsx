import { PropTypes } from "prop-types";

const CurrentWeather = ({ data }) => {
  CurrentWeather.propTypes = {
    data: PropTypes.shape({
      main: PropTypes.shape({
        temp: PropTypes.number.isRequired,
        temp_min: PropTypes.number.isRequired,
        temp_max: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired,
      }).isRequired,
      city: PropTypes.string.isRequired,
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
        })
      ).isRequired,
      wind: PropTypes.shape({
        speed: PropTypes.number.isRequired,
      }).isRequired,
      clouds: PropTypes.shape({
        all: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };

  const windSpeedKmPerHour = data.wind.speed * 3.6;

  return (
    <div className="max-w-2xl mx-auto mt-20">
      <div className="bg-gray-600 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-xl leading-none text-white">
                {data.city}
              </p>
              <p className="font-normal text-base leading-none text-gray-300">
                {data.weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="w-12 h-12"
              src={`icons/${data.weather[0].icon}.png`}
            />
          </div>
          <div className="mt-4">
            <p className="font-semibold text-5xl text-white">
              {Math.round(data.main.temp)}°C
            </p>
          </div>
        </div>
        <div className="bg-gray-800 px-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-300">
                Min Temperature
              </p>
              <p className="text-sm font-semibold text-white">
                {Math.round(data.main.temp_min)}°C
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-300">
                Max Temperature
              </p>
              <p className="text-sm font-semibold text-white">
                {Math.round(data.main.temp_max)}°C
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-300">Wind</p>
              <p className="text-sm font-semibold text-white">
                {windSpeedKmPerHour.toFixed(1)} km/h
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-300">Cloudiness</p>
              <p className="text-sm font-semibold text-white">
                {data.clouds.all} %
              </p>
            </div>
            {/* Kelembapan Udara */}
            <div>
              <p className="text-sm font-semibold text-gray-300">Humidity</p>
              <p className="text-sm font-semibold text-white">
                {data.main.humidity}%
              </p>
            </div>
            {/* Tekanan Atmosfer */}
            <div>
              <p className="text-sm font-semibold text-gray-300">Pressure</p>
              <p className="text-sm font-semibold text-white">
                {data.main.pressure} hPa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
