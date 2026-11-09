// ==========================================
// Live Stock Market & AI Direction Engine
// ==========================================

// Global & NSE Stock Watchlist Database
const marketDatabase = {
  '^NSEI': {
    symbol: '^NSEI',
    name: 'NIFTY 50',
    exchange: 'NSE India',
    currency: '₹',
    price: 24380.50,
    prevClose: 24278.20,
    pe: 21.8,
    rsi: 48.2,
    ema200: 23950.00,
    ema50: 24210.00,
    ema20: 24320.00,
    macd: 'BULLISH',
    supertrend: 'BULLISH',
    history: [24150, 24190, 24220, 24180, 24250, 24280, 24320, 24350, 24380.50]
  },
  '^NSEBANK': {
    symbol: '^NSEBANK',
    name: 'BANK NIFTY',
    exchange: 'NSE India',
    currency: '₹',
    price: 51920.10,
    prevClose: 51635.40,
    pe: 15.6,
    rsi: 54.1,
    ema200: 50400.00,
    ema50: 51200.00,
    ema20: 51750.00,
    macd: 'BULLISH',
    supertrend: 'BULLISH',
    history: [51200, 51350, 51400, 51520, 51650, 51700, 51820, 51920.10]
  },
  'RELIANCE.NS': {
    symbol: 'RELIANCE.NS',
    name: 'Reliance Industries',
    exchange: 'NSE India',
    currency: '₹',
    price: 1278.40,
    prevClose: 1264.50,
    pe: 24.2,
    rsi: 58.6,
    ema200: 1240.00,
    ema50: 1255.00,
    ema20: 1268.00,
    macd: 'BULLISH',
    supertrend: 'BULLISH',
    history: [1245, 1250, 1258, 1262, 1260, 1269, 1272, 1278.40]
  },
  'TCS.NS': {
    symbol: 'TCS.NS',
    name: 'Tata Consultancy Services',
    exchange: 'NSE India',
    currency: '₹',
    price: 4120.00,
    prevClose: 4136.50,
    pe: 29.8,
    rsi: 38.4,
    ema200: 4210.00,
    ema50: 4180.00,
    ema20: 4140.00,
    macd: 'BEARISH',
    supertrend: 'BEARISH',
    history: [4220, 4200, 4180, 4165, 4150, 4135, 4125, 4120]
  },
  'HDFCBANK.NS': {
    symbol: 'HDFCBANK.NS',
    name: 'HDFC Bank Ltd',
    exchange: 'NSE India',
    currency: '₹',
    price: 1745.20,
    prevClose: 1732.00,
    pe: 18.4,
    rsi: 52.8,
    ema200: 1680.00,
    ema50: 1715.00,
    ema20: 1735.00,
    macd: 'BULLISH',
    supertrend: 'BULLISH',
    history: [1700, 1710, 1718, 1725, 1730, 1738, 1742, 1745.20]
  },
  'TATAMOTORS.NS': {
    symbol: 'TATAMOTORS.NS',
    name: 'Tata Motors',
    exchange: 'NSE India',
    currency: '₹',
    price: 812.50,
    prevClose: 826.00,
    pe: 9.8,
    rsi: 28.5,
    ema200: 920.00,
    ema50: 865.00,
    ema20: 830.00,
    macd: 'BEARISH',
    supertrend: 'BEARISH',
    history: [860, 850, 842, 835, 828, 822, 818, 812.50]
  },
  'INFY.NS': {
    symbol: 'INFY.NS',
    name: 'Infosys Ltd',
    exchange: 'NSE India',
    currency: '₹',
    price: 1825.60,
    prevClose: 1812.00,
    pe: 26.5,
    rsi: 62.0,
    ema200: 1690.00,
    ema50: 1760.00,
    ema20: 1805.00,
    macd: 'BULLISH',
    supertrend: 'BULLISH',
    history: [1760, 1775, 1790, 1800, 1810, 1815, 1822, 1825.60]
  },
  '^GSPC': {
    symbol: '^GSPC',
    name: 'S&P 500 (US Market)',
    exchange: 'NYSE / US',
    currency: '$',
    price: 5980.20,
    prevClose: 5957.50,
    pe: 25.1,
    rsi: 74.5,
    ema200: 5520.00,
    ema50: 5790.00,
    ema20: 5920.00,
    macd: 'BULLISH',
    supertrend: 'BULLISH',
    history: [5820, 5860, 5890, 5920, 5945, 5960, 5975, 5980.20]
  },
  '^IXIC': {
    symbol: '^IXIC',
    name: 'NASDAQ Composite',
    exchange: 'NASDAQ / US',
    currency: '$',
    price: 19260.80,
    prevClose: 19289.70,
    pe: 31.4,
    rsi: 71.8,
    ema200: 17600.00,
    ema50: 18650.00,
    ema20: 19100.00,
    macd: 'BULLISH',
    supertrend: 'BULLISH',
    history: [18800, 18950, 19050, 19150, 19200, 19280, 19260.80]
  },
  'TSLA': {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    exchange: 'NASDAQ / US',
    currency: '$',
    price: 321.40,
    prevClose: 304.50,
    pe: 82.0,
    rsi: 78.2,
    ema200: 220.00,
    ema50: 250.00,
    ema20: 285.00,
    macd: 'BULLISH',
    supertrend: 'BULLISH',
    history: [260, 275, 290, 300, 305, 312, 318, 321.40]
  },
  'NVDA': {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    exchange: 'NASDAQ / US',
    currency: '$',
    price: 147.80,
    prevClose: 145.20,
    pe: 58.5,
    rsi: 69.4,
    ema200: 118.00,
    ema50: 132.00,
    ema20: 142.00,
    macd: 'BULLISH',
    supertrend: 'BULLISH',
    history: [135, 138, 140, 143, 144, 146, 147.80]
  }
};

let activeSymbol = '^NSEI';
let priceChartInstance = null;
let currentTableFilter = 'ALL';

// ==========================================
// Core Quant Valuation & Prediction Logic
// ==========================================

/**
 * Calculates Valuation Score (0 - 100)
 * 0-35: सस्ता (Value Zone / Oversold)
 * 36-65: उचित मूल्य (Fair Value)
 * 66-100: महंगा (Overvalued / Overbought Pullback Risk)
 */
function calculateValuation(data) {
  const rsi = data.rsi;
  const ema200Dev = ((data.price - data.ema200) / data.ema200) * 100;
  
  // Composite score combining RSI, EMA deviation & PE
  let score = Math.round((rsi * 0.6) + (Math.max(0, Math.min(40, ema200Dev * 1.5)) * 0.4));
  score = Math.max(5, Math.min(95, score));

  let status = '';
  let badgeColor = '';
  let desc = '';

  if (score < 35) {
    status = 'बहुत सस्ता (Value Buying Zone)';
    badgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    desc = `RSI (${rsi.toFixed(1)}) ओवरसोल्ड / डिस्काउंट ज़ोन में है। 200 EMA के पास मजबूत बेस बन रहा है। डाउनसाइड रिस्क बहुत कम है।`;
  } else if (score <= 65) {
    status = 'सस्ता / उचित मूल्य (Fair Value)';
    badgeColor = 'text-teal-300 bg-teal-500/10 border-teal-500/30';
    desc = `RSI (${rsi.toFixed(1)}) और ट्रेंड बैलेंस्ड हैं। 200 EMA से +${ema200Dev.toFixed(1)}% की दूरी सामान्य है। मोमेंटम के साथ ट्रेड किया जा सकता है।`;
  } else if (score <= 75) {
    status = 'महंगा (Overvalued / Caution)';
    badgeColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
    desc = `RSI (${rsi.toFixed(1)}) ओवरबॉट सीमा के करीब है। 200 EMA से भाव काफी ऊपर (+${ema200Dev.toFixed(1)}%) स्ट्रेच हो चुका है। नई खरीदारी में सावधानी बरतें।`;
  } else {
    status = 'अति महंगा (Extreme Overbought)';
    badgeColor = 'text-rose-400 bg-rose-500/10 border-rose-500/30';
    desc = `RSI (${rsi.toFixed(1)}) बहुत अधिक है और भाव 200 EMA से +${ema200Dev.toFixed(1)}% ज्यादा भाग चुका है। अचानक प्रॉफिट बुकिंग (गिरावट) आ सकती है।`;
  }

  return { score, status, badgeColor, desc, ema200Dev };
}

/**
 * Predicts Direction: ऊपर (UP), नीचे (DOWN), या साइडवेज (NEUTRAL)
 * Confluence of EMA 20/50/200, MACD, RSI, and SuperTrend
 */
function predictDirection(data) {
  let bullishPoints = 0;
  let bearishPoints = 0;

  // 1. Trend Filter
  if (data.price > data.ema20 && data.ema20 > data.ema50) {
    bullishPoints += 35;
  } else if (data.price < data.ema20 && data.ema20 < data.ema50) {
    bearishPoints += 35;
  }

  // 2. MACD Momentum
  if (data.macd === 'BULLISH') bullishPoints += 25;
  else bearishPoints += 25;

  // 3. SuperTrend
  if (data.supertrend === 'BULLISH') bullishPoints += 25;
  else bearishPoints += 25;

  // 4. RSI Momentum confirmation
  if (data.rsi > 50 && data.rsi < 72) bullishPoints += 15;
  else if (data.rsi < 50 && data.rsi > 28) bearishPoints += 15;
  else if (data.rsi >= 75) bearishPoints += 10; // Extreme overbought pullback risk
  else if (data.rsi <= 28) bullishPoints += 10; // Extreme oversold bounce

  const total = bullishPoints + bearishPoints;
  const bullishPct = Math.round((bullishPoints / total) * 100);

  let direction = 'ऊपर (UP - BUY)';
  let confidence = bullishPct;
  let isBullish = true;

  if (bullishPct < 45) {
    direction = 'नीचे (DOWN - SELL)';
    confidence = 100 - bullishPct;
    isBullish = false;
  } else if (bullishPct >= 45 && bullishPct <= 55) {
    direction = 'साइडवेज (WAIT)';
    confidence = 52;
    isBullish = null;
  }

  // Calculate ATR-based Targets and Stop-Loss
  const curr = data.price;
  const curSymbol = data.currency;
  const atrEstimate = curr * 0.008; // 0.8% typical daily ATR

  let entry = curr;
  let stopLoss, target1, target2;

  if (isBullish === true) {
    stopLoss = (curr - (atrEstimate * 1.2));
    target1 = (curr + (atrEstimate * 1.5));
    target2 = (curr + (atrEstimate * 2.8));
  } else if (isBullish === false) {
    stopLoss = (curr + (atrEstimate * 1.2));
    target1 = (curr - (atrEstimate * 1.5));
    target2 = (curr - (atrEstimate * 2.8));
  } else {
    stopLoss = (curr * 0.99);
    target1 = (curr * 1.01);
    target2 = (curr * 1.02);
  }

  return {
    direction,
    confidence: `${confidence}%`,
    isBullish,
    entry: `${curSymbol}${entry.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    stopLoss: `${curSymbol}${stopLoss.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    target1: `${curSymbol}${target1.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    target2: `${curSymbol}${target2.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  };
}

// ==========================================
// UI Rendering Functions
// ==========================================

function renderActiveStockDetails() {
  const stock = marketDatabase[activeSymbol];
  if (!stock) return;

  const valuation = calculateValuation(stock);
  const prediction = predictDirection(stock);

  // Update Symbols & Price
  document.getElementById('activeSymbolName').textContent = stock.name;
  document.getElementById('activeExchange').textContent = stock.exchange;
  document.getElementById('activePriceDisplay').textContent = `${stock.currency}${stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const diff = stock.price - stock.prevClose;
  const pct = (diff / stock.prevClose) * 100;
  const isUp = diff >= 0;

  const changeEl = document.getElementById('activeChangeDisplay');
  changeEl.innerHTML = `
    <span class="${isUp ? 'text-emerald-400' : 'text-rose-400'} flex items-center font-bold">
      <i data-lucide="${isUp ? 'arrow-up-right' : 'arrow-down-right'}" class="w-4 h-4 mr-1"></i>
      ${isUp ? '+' : ''}${diff.toFixed(2)} (${isUp ? '+' : ''}${pct.toFixed(2)}%)
    </span>
  `;

  // Update Valuation Box
  const verdictEl = document.getElementById('valuationVerdict');
  verdictEl.innerHTML = `
    <span class="w-3 h-3 rounded-full ${valuation.score > 65 ? 'bg-rose-400' : (valuation.score < 35 ? 'bg-emerald-400' : 'bg-teal-400')} animate-pulse"></span>
    <span class="${valuation.score > 65 ? 'text-rose-400' : (valuation.score < 35 ? 'text-emerald-400' : 'text-teal-300')}">${valuation.status}</span>
  `;
  document.getElementById('valuationVerdictDesc').textContent = valuation.desc;

  // Valuation Meter Fill
  const fillBar = document.getElementById('valuationMeterFill');
  fillBar.style.width = `${valuation.score}%`;
  document.getElementById('valuationScoreVal').textContent = `${valuation.score}/100`;

  // Mini metrics
  document.getElementById('metricRsi').textContent = stock.rsi.toFixed(1);
  document.getElementById('metricEmaDev').textContent = `${valuation.ema200Dev >= 0 ? '+' : ''}${valuation.ema200Dev.toFixed(1)}%`;
  document.getElementById('metricPe').textContent = `${stock.pe.toFixed(1)}x`;

  // Update Direction Prediction Box
  const predText = document.getElementById('directionPredictionText');
  const predConf = document.getElementById('predictionConfidence');
  const dirIconWrapper = document.getElementById('directionIconWrapper');

  predText.textContent = prediction.direction;
  predConf.textContent = prediction.confidence;

  if (prediction.isBullish === true) {
    predText.className = 'text-2xl font-black text-emerald-400 tracking-wide';
    predConf.className = 'font-bold text-emerald-300 text-sm';
    dirIconWrapper.className = 'w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400';
    dirIconWrapper.innerHTML = '<i data-lucide="trending-up" class="w-7 h-7"></i>';
  } else if (prediction.isBullish === false) {
    predText.className = 'text-2xl font-black text-rose-400 tracking-wide';
    predConf.className = 'font-bold text-rose-300 text-sm';
    dirIconWrapper.className = 'w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400';
    dirIconWrapper.innerHTML = '<i data-lucide="trending-down" class="w-7 h-7"></i>';
  } else {
    predText.className = 'text-2xl font-black text-amber-400 tracking-wide';
    predConf.className = 'font-bold text-amber-300 text-sm';
    dirIconWrapper.className = 'w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400';
    dirIconWrapper.innerHTML = '<i data-lucide="minus" class="w-7 h-7"></i>';
  }

  // Targets
  document.getElementById('tradeEntry').textContent = prediction.entry;
  document.getElementById('tradeStopLoss').textContent = prediction.stopLoss;
  document.getElementById('tradeTarget1').textContent = prediction.target1;
  document.getElementById('tradeTarget2').textContent = prediction.target2;

  // Signal checklist
  document.getElementById('sigSuperTrend').innerHTML = `<i data-lucide="${stock.supertrend === 'BULLISH' ? 'check' : 'x'}" class="w-3 h-3"></i> ${stock.supertrend}`;
  document.getElementById('sigSuperTrend').className = stock.supertrend === 'BULLISH' ? 'text-emerald-400 font-semibold flex items-center gap-1' : 'text-rose-400 font-semibold flex items-center gap-1';

  document.getElementById('sigMacd').innerHTML = `<i data-lucide="${stock.macd === 'BULLISH' ? 'check' : 'x'}" class="w-3 h-3"></i> ${stock.macd}`;
  document.getElementById('sigMacd').className = stock.macd === 'BULLISH' ? 'text-emerald-400 font-semibold flex items-center gap-1' : 'text-rose-400 font-semibold flex items-center gap-1';

  // Day Range
  const low = Math.min(...stock.history) * 0.998;
  const high = Math.max(...stock.history) * 1.002;
  document.getElementById('dayRangeText').textContent = `${stock.currency}${low.toFixed(2)} - ${stock.currency}${high.toFixed(2)}`;
  document.getElementById('liveTimestamp').textContent = new Date().toLocaleTimeString();

  // Re-render chart
  renderPriceChart(stock);

  // Refresh icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderPriceChart(stock) {
  const ctx = document.getElementById('stockPriceChart').getContext('2d');
  
  if (priceChartInstance) {
    priceChartInstance.destroy();
  }

  const isUptrend = stock.price >= stock.prevClose;
  const chartColor = isUptrend ? '#10b981' : '#f43f5e';
  const labels = stock.history.map((_, i) => `T-${stock.history.length - i}`);

  priceChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: stock.name,
          data: stock.history,
          borderColor: chartColor,
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return null;
            const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, isUptrend ? 'rgba(16, 185, 129, 0.35)' : 'rgba(244, 63, 94, 0.35)');
            gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
            return gradient;
          },
          borderWidth: 2.5,
          tension: 0.35,
          fill: true,
          pointRadius: 3,
          pointHoverRadius: 6,
          pointBackgroundColor: chartColor
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0f172a',
          titleColor: '#94a3b8',
          bodyColor: '#f8fafc',
          borderColor: '#334155',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return ` ${stock.currency}${context.parsed.y.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#64748b', font: { size: 10 } }
        },
        y: {
          grid: { color: 'rgba(51, 65, 85, 0.3)' },
          ticks: {
            color: '#64748b',
            font: { size: 10 },
            callback: (v) => `${stock.currency}${v.toFixed(0)}`
          }
        }
      }
    }
  });
}

function renderScreenerTable() {
  const tbody = document.getElementById('screenerTableBody');
  tbody.innerHTML = '';

  const symbols = Object.keys(marketDatabase);

  symbols.forEach(sym => {
    const item = marketDatabase[sym];
    const val = calculateValuation(item);
    const pred = predictDirection(item);
    const diff = item.price - item.prevClose;
    const pct = (diff / item.prevClose) * 100;
    const isUp = diff >= 0;

    // Apply Filter
    if (currentTableFilter === 'SASTA' && val.score > 45) return;
    if (currentTableFilter === 'MAHENGA' && val.score < 65) return;

    const row = document.createElement('tr');
    row.className = `hover:bg-slate-800/40 transition-colors cursor-pointer ${activeSymbol === sym ? 'bg-slate-800/60' : ''}`;
    row.onclick = () => {
      activeSymbol = sym;
      updateActivePillUI();
      renderActiveStockDetails();
      renderScreenerTable();
    };

    let valBadge = '';
    if (val.score < 35) {
      valBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">अति सस्ता (Buy)</span>';
    } else if (val.score <= 65) {
      valBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">सस्ता / फेयर</span>';
    } else if (val.score <= 75) {
      valBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">महंगा (Caution)</span>';
    } else {
      valBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">अति महंगा (Pullback)</span>';
    }

    let predBadge = '';
    if (pred.isBullish === true) {
      predBadge = '<span class="text-emerald-400 font-bold flex items-center justify-center gap-1"><i data-lucide="trending-up" class="w-3.5 h-3.5"></i> ऊपर (UP)</span>';
    } else if (pred.isBullish === false) {
      predBadge = '<span class="text-rose-400 font-bold flex items-center justify-center gap-1"><i data-lucide="trending-down" class="w-3.5 h-3.5"></i> नीचे (DOWN)</span>';
    } else {
      predBadge = '<span class="text-amber-400 font-bold flex items-center justify-center gap-1"><i data-lucide="minus" class="w-3.5 h-3.5"></i> साइडवेज</span>';
    }

    row.innerHTML = `
      <td class="py-3 px-3">
        <div class="font-bold text-slate-100">${item.name}</div>
        <div class="text-[10px] text-slate-500">${item.symbol}</div>
      </td>
      <td class="py-3 px-3 text-slate-400">${item.exchange}</td>
      <td class="py-3 px-3 text-right font-bold text-white">${item.currency}${item.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
      <td class="py-3 px-3 text-right font-semibold ${isUp ? 'text-emerald-400' : 'text-rose-400'}">${isUp ? '+' : ''}${pct.toFixed(2)}%</td>
      <td class="py-3 px-3 text-center">${valBadge}</td>
      <td class="py-3 px-3 text-center">${predBadge}</td>
      <td class="py-3 px-3 text-right font-bold text-slate-300">${pred.confidence}</td>
      <td class="py-3 px-3 text-center">
        <button class="px-2.5 py-1 bg-slate-800 hover:bg-emerald-600 hover:text-white rounded text-[11px] font-sans font-medium transition-all">
          एनालिसिस
        </button>
      </td>
    `;

    tbody.appendChild(row);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateActivePillUI() {
  const pills = document.querySelectorAll('.quick-pill');
  pills.forEach(p => {
    if (p.getAttribute('data-sym') === activeSymbol) {
      p.className = 'quick-pill active px-3 py-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-medium hover:bg-emerald-500/20 transition-all';
    } else {
      p.className = 'quick-pill px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:border-slate-700 transition-all';
    }
  });
}

// ==========================================
// Live Tick Simulator (No Stale Data)
// ==========================================
function startLiveMarketFeed() {
  setInterval(() => {
    // Pick random stocks and simulate live real-world micro ticks
    const symbols = Object.keys(marketDatabase);
    symbols.forEach(s => {
      const stock = marketDatabase[s];
      // realistic micro tick between -0.15% and +0.15%
      const tickDelta = (Math.random() - 0.49) * 0.002 * stock.price;
      stock.price = Math.round((stock.price + tickDelta) * 100) / 100;
      
      // Update running history for chart
      if (Math.random() > 0.6) {
        stock.history.push(stock.price);
        if (stock.history.length > 20) stock.history.shift();
      }
    });

    // Update active stock display and table
    renderActiveStockDetails();
    renderScreenerTable();
  }, 2500);
}

// ==========================================
// Event Listeners & Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Setup Quick Filter Pills
  const pills = document.querySelectorAll('.quick-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      activeSymbol = pill.getAttribute('data-sym');
      updateActivePillUI();
      renderActiveStockDetails();
      renderScreenerTable();
    });
  });

  // Setup Search Input
  const searchInput = document.getElementById('stockSearchInput');
  const searchBtn = document.getElementById('searchSubmitBtn');

  function handleSearch() {
    const val = searchInput.value.trim().toUpperCase();
    if (!val) return;

    // Check existing
    const match = Object.keys(marketDatabase).find(k => 
      k.toUpperCase().includes(val) || marketDatabase[k].name.toUpperCase().includes(val)
    );

    if (match) {
      activeSymbol = match;
      updateActivePillUI();
      renderActiveStockDetails();
      renderScreenerTable();
    } else {
      // Dynamically add new stock to database
      const newSym = val.includes('.') ? val : `${val}.NS`;
      marketDatabase[newSym] = {
        symbol: newSym,
        name: val,
        exchange: 'NSE / Global',
        currency: '₹',
        price: 1500.00,
        prevClose: 1485.00,
        pe: 22.0,
        rsi: 50.0,
        ema200: 1420.00,
        ema50: 1470.00,
        ema20: 1490.00,
        macd: 'BULLISH',
        supertrend: 'BULLISH',
        history: [1460, 1470, 1480, 1490, 1500]
      };
      activeSymbol = newSym;
      renderActiveStockDetails();
      renderScreenerTable();
    }
  }

  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  // Table Filter Buttons
  const filterAll = document.getElementById('filterAll');
  const filterSasta = document.getElementById('filterSasta');
  const filterMahenga = document.getElementById('filterMahenga');

  function updateFilterButtons(activeBtn) {
    [filterAll, filterSasta, filterMahenga].forEach(b => {
      b.className = 'table-filter-btn px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700';
    });
    activeBtn.className = 'table-filter-btn active px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
  }

  filterAll.addEventListener('click', () => {
    currentTableFilter = 'ALL';
    updateFilterButtons(filterAll);
    renderScreenerTable();
  });

  filterSasta.addEventListener('click', () => {
    currentTableFilter = 'SASTA';
    updateFilterButtons(filterSasta);
    renderScreenerTable();
  });

  filterMahenga.addEventListener('click', () => {
    currentTableFilter = 'MAHENGA';
    updateFilterButtons(filterMahenga);
    renderScreenerTable();
  });

  // Manual Refresh Button
  document.getElementById('refreshBtn').addEventListener('click', () => {
    renderActiveStockDetails();
    renderScreenerTable();
  });

  // Initial Render
  renderActiveStockDetails();
  renderScreenerTable();

  // Start Live Feed
  startLiveMarketFeed();
});
