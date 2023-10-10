using System.Runtime.CompilerServices;

namespace StayReady
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }


        private Int32 Soma(Int32 A, Int32 B)
        {
            return A + B;
        }

        public void Teste()
        {
            this.TemperatureC = Soma(22, 10);
        }
    }
}

