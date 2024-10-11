import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/footer/Footer";

// Register the required chart components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AlternatingCards = () => {
  const navigate = useNavigate();

  const [activeCard, setActiveCard] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cards = [
    {
      title: "Aoclimaoptions",
      content:
        "AoClimOptions is a decentralized weather market that allows you to trade temperature-based binary options.",
      buttonText: "Trade Now",
      buttonAction: () => navigate("/aoclimaoptions"),
    },
    {
      title: "AoWeatherAgent",
      content:
        "AO Weather Agent, powered by AO, we provide climate insights while keeping your data private.",
      buttonText: "Make Prediction Now",
      buttonAction: () => navigate("/aoweatheragent"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextCard();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeCard]);

  const goToNextCard = () => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 500);
    setActiveCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const goToCard = (index: React.SetStateAction<number>) => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 500);
    setActiveCard(index);
  };

  return (
    <div className="relative mt-8">
      <div className="w-full overflow-hidden">
        <div
          className={`flex px-2 transition-transform duration-500 ease-in-out ${
            isTransitioning ? "transform" : ""
          }`}
          style={{ transform: `translateX(-${activeCard * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-full p-6 bg-gradient-to-tl from-gray-800 to-transparent rounded-xl ml-2 mr-2 first:ml-0 shadow-lg text-md md:text:lg"
            >
              <h3 className="xl:text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-400 mb-6">{card.content}</p>
              <button
                onClick={card.buttonAction}
                className="bg-white text-black px-4 py-2 rounded-full font-medium"
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {cards.map((_, index) => (
          <span
            key={index}
            onClick={() => goToCard(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              activeCard === index ? "bg-amber-400" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Higher Temp",
        data: [8000, 9000, 7000, 10000, 9500, 10500],
        backgroundColor: "rgba(3, 255, 129, 0.6)",
      },
      {
        label: "Lower Temp",
        data: [8500, 9200, 7800, 10500, 9800, 10800],
        backgroundColor: "rgba(199, 0, 57, 0.6)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        ticks: { display: true },
        border: { display: false },
        grid: { display: false },
        position: "right",
        beginAtZero: true,
      },
    },
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
  };
  return <Bar data={data} options={options} />;
};

function Home() {
  const navigate = useNavigate();
  return (
    <div
      className={classNames(
        "content text-black dark:text-white flex flex-col h-full justify-between"
      )}
    >
      <div className="text-white flex flex-col items-center lg:items-start">
        <div
          className="container pt-8 p-6 pb-10 lg:pb-20 min-w-full flex flex-col lg:flex-row space-y-10 space-x-0 md:space-y-0 md:space-x-5 items-center lg:items-start rounded-b-lg"
          style={{
            background:
              "linear-gradient(to top left, rgba(255, 215, 0, 0.3), rgba(255, 215, 0, 0.03))",
          }}
        >
          <div className="container">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-start">
              It's Time to Solve the Weather Problem.
            </h1>
            <p className="text-gray-400 mb-6 text-center lg:text-start">
              It’s unfortunate that Hurricanes Helene and Milton have caused
              over 200 deaths and tens of billions of dollars in losses.
            </p>
            <p className="text-gray-400 mb-6 text-center lg:text-start">
              What’s more alarming is that the US has only 4,470 meteorologists,
              with an average age of 40 years. Only 19% are between 19 and 30
              years old.
            </p>
            <p className="text-gray-400 mb-6 text-center lg:text-start">
              <span className="font-bold">
                Who’s going to solve this weather problem?
              </span>{" "}
              This is why we need to inspire more young people to study
              meteorology. This is what we’re trying to do at AoclimaOptions.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://x.com/NotusOptions"
                className="bg-white text-black px-6 py-2 rounded-full text-sm lg:text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check us out on Twitter
              </a>
              <button
                type="button"
                onClick={() => navigate("/aoclimaoptions")}
                className="border border-gray-500 px-6 py-2 rounded-full text-gray-400 text-sm lg:text-lg"
              >
                Start Trading Today
              </button>
            </div>
          </div>

          <div className="ml-5 relative w-full lg:w-4/5 md:m-0 flex p-5 lg:p-0 justify-center">
            <iframe
              className="rounded-lg h-48 w-4/5 md:h-72 md:w-3/4"
              src="https://www.youtube.com/embed/RJwDpYmiQ8s"
              title="Learn what is aoclimaOptions."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="container px-4 md:px-8 my-8 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:items-start">
          <div className="lg:w-full text-center md:text-start md:my-8 lg:pr-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-4 text-center lg:text-start">
              <span className="text-amber-500">ACO</span> Dapps.
            </h1>
            <AlternatingCards />
          </div>

          <div className="my-10 md:m-0">
            <div
              className="p-0 md:p-6 bg-gray-900 rounded-xl shadow-lg border border-amber-400"
              style={{
                background:
                  "linear-gradient(to top right, rgba(120, 120, 120 , 0.2), rgba(255, 255, 255, 0))",
              }}
            >
              <h2 className="px-4 pt-4 md:p-0 text-lg md:text-xl font-semibold mb-4">
                Contracts Trade Volume
              </h2>
              <div className="px-1 md:p-0 h-50 md:h-64 lg:min-h-100">
                <BarChart />
              </div>
              <div className="px-4 pb-4 md:p-0 flex justify-between mt-4">
                <div className="text-xl md:text-3xl font-bold">8.32%</div>
                <div className="text-sm md:text-base text-green-400 bg-green-900 px-4 py-1 rounded-full">
                  +17% Improvement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
