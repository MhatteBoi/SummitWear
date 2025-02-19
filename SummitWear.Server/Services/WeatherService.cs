using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using SummitWear.Server.Models;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace SummitWear.Server.Services
{
    public class WeatherService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;
        private readonly ILogger<WeatherService> _logger; // Logging

        private static readonly JsonSerializerOptions s_options = new() { PropertyNameCaseInsensitive = true };

        public WeatherService(HttpClient httpClient, IConfiguration configuration, ILogger<WeatherService> logger)
        {
            _httpClient = httpClient;
            _configuration = configuration;
            _logger = logger;
        }

        public async Task<WeatherModel> GetWeatherDataAsync(string city)
        {
            try
            {
                var apiKey = _configuration["OpenWeather:ApiKey"];

                if (string.IsNullOrEmpty(apiKey))
                {
                    throw new InvalidOperationException("API key for OpenWeather is missing in configuration.");
                }

                var response = await _httpClient.GetAsync($"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric");

                if (!response.IsSuccessStatusCode)
                {
                    _logger.LogWarning($"Failed to fetch weather data. Status Code: {response.StatusCode}");
                    throw new HttpRequestException($"Error fetching weather data: {response.StatusCode}");
                }

                var content = await response.Content.ReadAsStringAsync();
                return JsonSerializer.Deserialize<WeatherModel>(content, s_options)
                    ?? throw new JsonException("Failed to deserialize weather data.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception occurred while fetching weather data.");
                throw;
            }
        }
    }
}
