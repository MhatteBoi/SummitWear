using Microsoft.AspNetCore.Mvc;
using SummitWear.Server.Models;
using SummitWear.Server.Services;

namespace SummitWear.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController(WeatherService weatherService) : ControllerBase
    {
        private readonly WeatherService _weatherService = weatherService;

        [HttpGet("{city}")]
        public async Task<ActionResult<WeatherModel>> GetWeather(string city)
        {
            try
            {
                var weatherData = await _weatherService.GetWeatherDataAsync(city);
                return Ok(weatherData);
            }
            catch (HttpRequestException)
            {
                return BadRequest("Unable to fetch weather data");
            }
        }
    }
}
