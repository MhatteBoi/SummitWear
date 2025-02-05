
using Humanizer;
using SummitWear.Server.Models;
using System.Text.Json;

namespace SummitWear.Server.Services
{
    public class WeatherService(HttpClient httpClient, IConfiguration configuration)
    {
        private readonly HttpClient _httpClient = httpClient;
        

        private static readonly JsonSerializerOptions s_options = new()
        {
            PropertyNameCaseInsensitive = true
        };

        public async Task<WeatherModel> GetWeatherDataAsync(string city)
        {
            try
            {
                var apiKey = Environment.GetEnvironmentVariable("OpenWeatherMap__ApiKey"); // This should work without (Environment.GetEnvironmentVariable) you should be able to use the IConfiguratiuon variable, well well
                var response = await _httpClient.GetAsync($"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric");

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    return JsonSerializer.Deserialize<WeatherModel>(content, s_options);
                }
                else
                {
                    // Log the error or throw a custom exception
                    throw new HttpRequestException($"Error fetching weather data: {response.StatusCode}");
                }
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine(ex.Message);
                throw;
            }
        }
    }
}
