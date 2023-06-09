import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const Donations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Number of rows per page
  const [donations] = useState([
    { address: '0x123456789', amount: 100, timestamp: '2023-06-01 10:00 AM' },
    { address: '0x987654321', amount: 200, timestamp: '2023-06-02 09:00 AM' },
    { address: '0x987654321', amount: 200, timestamp: '2023-06-02 09:00 AM' },
    { address: '0x987654321', amount: 200, timestamp: '2023-06-02 09:00 AM' },
    { address: '0x987654321', amount: 200, timestamp: '2023-06-02 09:00 AM' },
    { address: '0x987654321', amount: 200, timestamp: '2023-06-02 09:00 AM' },
    { address: '0x987654321', amount: 200, timestamp: '2023-06-02 09:00 AM' },
    { address: '0x987654321', amount: 200, timestamp: '2023-06-02 09:00 AM' },
    { address: '0x987654321', amount: 200, timestamp: '2023-06-02 09:00 AM' },
    { address: '0x987654321', amount: 200, timestamp: '2023-06-02 09:00 AM' },
    { address: '0x987654321', amount: 200, timestamp: '2023-06-02 09:00 AM' },
    // Add more donation objects here
  ]);

  const handleDownloadCSV = () => {
    const csvData = [
      ['Address', 'Amount', 'Timestamp'],
      ...donations.map((donation) => [donation.address, donation.amount, donation.timestamp]),
    ];

    const csvContent = csvData.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'donations.csv');
  };

  const pageCount = Math.ceil(donations.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentDonations = donations.slice(startIndex, endIndex);

  return (
    <div className="relative overflow-x-auto">
        <h1 className="text-4xl font-bold">Donations</h1>

      <table className="w-full mt-10 text-sm text-center  ">
        <thead className="text-xs   bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center text-white text-xl">
            <th className="py-2 px-4">Address</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {currentDonations.map((donation, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-2 px-4">{donation.address}</td>
              <td className="py-2 px-4">{donation.amount}</td>
              <td className="py-2 px-4">{donation.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <div>
          <p className="text-sm">
            Showing {startIndex + 1} to {Math.min(endIndex, donations.length)} of {donations.length} entries
          </p>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleDownloadCSV}
          >
            Download as CSV
          </button>
        </div>
      </div>

      <div className="mt-4">
        <nav className="relative z-0 inline-flex shadow-sm">
          <button
            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-l-md border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            Previous
          </button>
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-2 border-t border-b text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount))}
            disabled={currentPage === pageCount}
            className="px-3 py-2 rounded-r-md border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Donations;
