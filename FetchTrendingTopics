exports.handler = async (event) => {
  // Simulated trending topics (replace with a real API call if needed)
  const topics = [
    { title: "The Rise of Decentralized Finance", description: "Explore how DeFi is reshaping traditional finance...", popularityScore: 95 },
    { title: "AI in Blockchain Technology", description: "How AI and blockchain are converging to create smarter systems...", popularityScore: 92 },
    { title: "Quantum Computing Breakthroughs", description: "Quantum computing's impact on cryptography and encryption...", popularityScore: 89 },
    { title: "NFTs Beyond Art", description: "Exploring NFTs in gaming, music, and intellectual property...", popularityScore: 87 },
    { title: "Web3 Privacy Solutions", description: "How Web3 technologies enhance privacy and security...", popularityScore: 85 },
    // Add more topics as needed
  ];

  // Sort topics by popularity score
  topics.sort((a, b) => b.popularityScore - a.popularityScore);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow all origins (replace "*" with your domain if needed)
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    },
    body: JSON.stringify({ topics }),
  };
};
