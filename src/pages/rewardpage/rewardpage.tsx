import React from "react";

interface Trader {
  rank: number;
  reward: number;
}

const traders: Trader[] = [
  { rank: 1, reward: 50 },
  { rank: 2, reward: 30 },
  { rank: 3, reward: 20 },
  { rank: 4, reward: 10 },
  { rank: 5, reward: 5 },
];

const RewardPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Weekly Rewards
      </h1>
      <p className="text-lg mb-8 text-center text-gray-400">
        The top 5 traders will be rewarded every week based on their
        performance.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900 text-white rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="px-6 py-4 border-b-2 border-gray-700 bg-gray-800 text-left text-sm font-semibold">
                Rank
              </th>
              <th className="px-6 py-4 border-b-2 border-gray-700 bg-gray-800 text-left text-sm font-semibold">
                Reward (USDT)
              </th>
            </tr>
          </thead>
          <tbody>
            {traders.map((trader) => (
              <tr key={trader.rank}>
                <td className="px-6 py-4 border-b border-gray-700 text-sm">
                  {trader.rank}
                </td>
                <td className="px-6 py-4 border-b border-gray-700 text-sm">
                  {trader.reward} USDT
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400">
          Make sure to trade and climb the leaderboard to get a chance to win
          these amazing rewards!
        </p>
      </div>
    </div>
  );
};

export default RewardPage;
