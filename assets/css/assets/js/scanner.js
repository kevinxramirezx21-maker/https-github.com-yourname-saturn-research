// Sample high-upside tokens (you'll replace with real API calls)
const tokens = [
  {
    symbol: "SOLANA",
    name: "Solana",
    price: 148.5,
    mcap: 69000000000,
    upside: "45x",
    score: 94,
    tokenomics: { fdv: "92B", locked: "68%", team: "12%" },
    institutional: ["a16z", "Paradigm", "Multicoin"],
    news: "Major ETF filing + Firedancer upgrade"
  },
  // ... add 50+ more
];

async function runFullScan() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '<p>🪐 Saturn AI Scanning 12,000+ tokens...</p>';
  
  // Simulate deep analysis
  setTimeout(() => {
    let html = '';
    tokens.sort((a,b) => parseFloat(b.upside) - parseFloat(a.upside)).slice(0,20).forEach(t => {
      html += `
        <div class="card">
          <h3>${t.name} <span class="upside">${t.upside}</span></h3>
          <p>Score: ${t.score}/100</p>
          <p>Institutions: ${t.institutional.join(', ')}</p>
          <p>Tokenomics: ${t.tokenomics.locked} locked</p>
          <button onclick="showDeepDive('${t.symbol}')">Deep Dive →</button>
        </div>`;
    });
    resultsDiv.innerHTML = html;
  }, 1200);
}

function showDeepDive(symbol) {
  // Populate deep dive tab with full tokenomics, charts, projections, etc.
  document.getElementById('tab-2').scrollIntoView();
  // Full implementation in full repo
}
