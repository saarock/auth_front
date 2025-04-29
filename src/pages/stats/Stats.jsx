import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import productService from '../../services/productService';
import useUser from '../../hooks/useUser';
import "./Stats.css";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
  const { user } = useUser();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!user?._id) {
      toast.error("User ID is not found, refresh and try again");
      return;
    }

    const fetchPurchaseStats = async () => {
      try {
        const data = await productService.getPurchaseStats(user._id);
        console.log(data);
        setStats(data); // Assuming your response structure matches this
      } catch (error) {
        toast.error("Error fetching purchase stats");
        console.error(error);
      }
    };

    fetchPurchaseStats();
  }, [user]);

  if (!stats) {
    return <div>Loading...</div>;
  }

  const purchaseDates = stats.purchases || [];
  const purchaseCounts = purchaseDates.reduce((acc, date) => {
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(purchaseCounts),
    datasets: [
      {
        label: 'Purchases',
        data: Object.values(purchaseCounts),
        fill: false,
        borderColor: '#36a2eb',
        tension: 0.1
      }
    ]
  };

  const totalPurchases = purchaseDates.length;

  return (
    <div className="stats-container">
      <h2>Purchase Stats</h2>
      
      {/* Stats Overview */}
      <div className="stats-overview">
        <div className="stat-card">
          <h3>Total Completed Purchases</h3>
          <p>{stats.totalCompletedPurchases}</p>
        </div>
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{stats.totalUsersCount}</p>
        </div>
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{stats.totalProductsCount}</p>
        </div>
      </div>

      {/* Purchases Chart */}
      <div className="chart-container">
        <h3>Purchases Over Time</h3>
        <Line data={chartData} options={{ responsive: true }} />
      </div>

      {/* Purchase Dates List */}
      <div className="purchase-dates">
        <h3>Purchase Dates</h3>
        <ul>
          {purchaseDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stats;
