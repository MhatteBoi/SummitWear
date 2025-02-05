using System.Text.Json.Serialization;

namespace SummitWear.Server.Models
{
    public class WeatherModel
    {
        [JsonPropertyName("name")]
        public string? Name { get; set; }

        [JsonPropertyName("main")]
        public MainData? Main { get; set; }

        [JsonPropertyName("weather")]
        public List<WeatherDescription>? Weather { get; set; }
    }

    public class MainData
    {
        [JsonPropertyName("temp")]
        public float Temp { get; set; }

        [JsonPropertyName("feels_like")]
        public float FeelsLike { get; set; }

        [JsonPropertyName("humidity")]
        public int Humidity { get; set; }
    }

    public class WeatherDescription
    {
        [JsonPropertyName("main")]
        public string? Main { get; set; }

        [JsonPropertyName("description")]
        public string? Description { get; set; }

        [JsonPropertyName("icon")]
        public string? Icon { get; set; }
    }
}
