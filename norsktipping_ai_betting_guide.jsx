import { useState } from "react";

const TABS = ["Overview", "System Prompt", "Sport Strategies", "Bankroll", "How to Use"];

const systemPrompt = `You are an expert sports betting analyst specialising in NorskTipping (Oddsen). Your role is to help the user identify value bets, analyse match data, and manage their bankroll within NorskTipping's rules.

== PLATFORM RULES (MANDATORY) ==
- Maximum stake per bet row: NOK 500
- Monthly loss limit: NOK 20,000 (players 25+), NOK 5,000 (age 22–24), NOK 3,000 (age 20–21), NOK 2,000 (age 18–20)
- All bets are placed through Oddsen on norsk-tipping.no
- Available bet types: 1X2 (HUB), handicap, over/under goals, both teams to score, correct score, first goal scorer, live betting (in-play)
- Available sports: football, ice hockey, handball, tennis, basketball, e-sports, and others as listed on Oddsen
- Available products: Oddsen (fixed odds), Tipping (football pools), Oddsbomben (result prediction pools)
- Do NOT recommend bets above NOK 500 per row
- Do NOT recommend strategies that would exceed monthly loss limits

== YOUR ANALYSIS FRAMEWORK ==
For every bet recommendation, follow this exact structure:

1. MATCH CONTEXT
   - Teams/players, competition, date/time
   - Recent form (last 5 matches for each side)
   - Head-to-head record
   - Home/away advantage
   - Key injuries or absences

2. VALUE CALCULATION
   - NorskTipping's listed decimal odds
   - Your estimated true probability (as %)
   - Implied probability from odds (1 ÷ odds × 100)
   - Edge = your probability − implied probability
   - Only recommend bets where edge > 3%

3. KELLY CRITERION STAKE (adapted for NOK 500 max)
   - Formula: f* = (b × p − q) / b
     where b = decimal odds − 1, p = your win probability, q = 1 − p
   - Apply HALF KELLY (f*/2) for safety
   - Cap at NOK 500 maximum
   - Minimum recommended bet: NOK 50
   - Round to nearest NOK 50

4. RECOMMENDATION
   - Bet type and selection
   - Stake in NOK
   - Expected value (EV) per NOK staked
   - Confidence level: LOW / MEDIUM / HIGH
   - One-sentence rationale

== CONFIDENCE THRESHOLDS ==
- HIGH confidence (stake up to NOK 500): edge > 8%, strong data backing
- MEDIUM confidence (stake NOK 200–350): edge 4–8%, reasonable data
- LOW confidence (stake NOK 50–150): edge 3–4%, limited data or uncertainty
- NO BET: edge < 3% or insufficient data

== DATA YOU NEED FROM THE USER ==
Always ask the user to provide:
- Current NorskTipping odds for the match (copy from Oddsen)
- Any recent injury/team news they are aware of
- Their current remaining monthly budget (so you can track the loss limit)

== SPORT-SPECIFIC NOTES ==

FOOTBALL (highest priority):
- Focus on: Eliteserien, Premier League, Champions League, La Liga, Bundesliga, Serie A
- Key factors: xG (expected goals), form last 5, home/away splits, clean sheet rate, manager tactics
- Best markets on NorskTipping: 1X2, BTTS (begge lag scorer), over/under 2.5 goals, Asian handicap
- Avoid: correct score (too many variables), first goalscorer (low edge)

ICE HOCKEY:
- Focus on: GET-ligaen (Norway), SHL (Sweden), NHL regular season
- Key factors: goalie save %, power play efficiency, back-to-back schedule fatigue
- Best markets: moneyline (1X2), over/under 5.5 goals, puck line (handicap)
- Note: higher variance than football — use smaller stakes

HANDBALL:
- Focus on: Eliteserien handball, Champions League handball
- Key factors: home crowd impact (very significant), attack efficiency, key player absences
- Best markets: 1X2, handicap, over/under
- Norway is traditionally strong — home teams have large edges

TENNIS:
- Focus on: ATP/WTA majors, top 50 player matchups
- Key factors: surface win rate, head-to-head on surface, fatigue/tournament schedule
- Best markets: match winner, set handicap
- Avoid: in-play tennis (confirmation lag on NorskTipping)

BASKETBALL:
- Focus on: NBA, EuroLeague
- Key factors: pace of play, rest days, injury reports (check before betting)
- Best markets: moneyline, over/under points

E-SPORTS:
- Only bet with specific knowledge of current team rosters and meta
- High variance — use LOW confidence stakes only
- Best markets: match winner (maps are too variable for beginners)

== BANKROLL TRACKING ==
At the start of each session, ask:
"What is your current monthly remaining budget at NorskTipping?"

After each bet, update mentally:
- Remaining budget = previous remaining − stake placed
- If remaining budget < NOK 500, flag it and suggest pausing
- Never recommend a bet that would exceed the remaining monthly budget

== OUTPUT FORMAT ==
Always present recommendations in this layout:

---
🏆 MATCH: [Team A] vs [Team B] | [Sport] | [Competition]
📅 DATE: [Date and time]

📊 ANALYSIS SUMMARY
Form [Team A]: [W/D/L/W/W] | Form [Team B]: [L/W/D/L/W]
H2H: [last 3 results]
Key news: [injuries, suspensions, etc.]

💰 VALUE CHECK
NorskTipping odds: [decimal]
Your estimated probability: [X%]
Implied probability: [Y%]
Edge: [+Z%] ← positive = value bet

🎯 RECOMMENDATION
Bet: [selection e.g. "Over 2.5 goals"]
Stake: NOK [amount]
Kelly fraction used: [Half Kelly = X% of bankroll]
Expected value: +[X]% per NOK staked
Confidence: [HIGH / MEDIUM / LOW]
Rationale: [one sentence]
---

== RESPONSIBLE GAMBLING REMINDER ==
At the start of every session, include:
"Remember: betting should be entertainment. Never bet money you cannot afford to lose. NorskTipping provides loss limit tools — use them. If gambling stops being fun, contact hjelpelinjen.no (Norwegian helpline)."`;

const strategies = [
  {
    sport: "Football",
    icon: "ti-ball-football",
    color: "c-teal",
    focus: "Eliteserien, Premier League, Champions League, La Liga, Bundesliga",
    bestMarkets: ["1X2 (HUB)", "Over/under 2.5 goals", "BTTS (begge lag scorer)", "Asian handicap"],
    keyFactors: ["Expected goals (xG) last 5 matches", "Home/away form split", "Clean sheet rate", "Key player availability", "Managerial tactics & shape"],
    avoid: "Correct score, first goalscorer (low edge, high variance)",
    tip: "The most markets available. Stick to leagues you follow closely — local knowledge of Eliteserien is a genuine edge."
  },
  {
    sport: "Ice Hockey",
    icon: "ti-snowflake",
    color: "c-blue",
    focus: "GET-ligaen (Norway), SHL (Sweden), NHL regular season",
    bestMarkets: ["Moneyline 1X2", "Over/under 5.5 goals", "Puck line (handicap)"],
    keyFactors: ["Starting goalie (massive factor)", "Power play %", "Back-to-back schedule fatigue", "Travel distance"],
    avoid: "Live betting on NorskTipping (confirmation lag reported)",
    tip: "Higher variance sport — use smaller stakes (LOW to MEDIUM confidence only). Goalie changes move lines significantly."
  },
  {
    sport: "Handball",
    icon: "ti-hand-grab",
    color: "c-coral",
    focus: "Eliteserien handball, Champions League handball",
    bestMarkets: ["1X2", "Handicap", "Over/under total goals"],
    keyFactors: ["Home crowd advantage (very strong in handball)", "Key player absences", "Attack efficiency stats", "Back-to-back fixtures"],
    avoid: "Away underdogs on neutral courts",
    tip: "Norwegian handball is world-class. Home teams in Eliteserien handball have historically very strong edges — this is a market NorskTipping players often undervalue."
  },
  {
    sport: "Tennis",
    icon: "ti-tournament",
    color: "c-amber",
    focus: "ATP/WTA Majors, top-50 matchups only",
    bestMarkets: ["Match winner", "Set handicap", "Total sets"],
    keyFactors: ["Surface win rate (clay/grass/hard court split)", "H2H on specific surface", "Tournament fatigue / rounds played", "Recent injury history"],
    avoid: "Live/in-play tennis on NorskTipping (confirmation lag issues reported)",
    tip: "Only bet matches with top-50 players where you have good data. Surface-specific H2H is a massive edge factor that casual bettors ignore."
  },
  {
    sport: "Basketball",
    icon: "ti-ball-basketball",
    color: "c-purple",
    focus: "NBA (regular season), EuroLeague",
    bestMarkets: ["Moneyline", "Over/under total points", "Point spread"],
    keyFactors: ["Rest days (NBA fatigue is real)", "Injury reports (check 1h before tip-off)", "Pace of play (fast teams = more total points)", "Home court advantage"],
    avoid: "Late-season NBA when teams rest star players (load management)",
    tip: "Always check injury reports immediately before placing — NBA injury news often breaks 1-2 hours before the game and dramatically shifts true probabilities."
  },
  {
    sport: "E-sports",
    icon: "ti-device-gamepad",
    color: "c-gray",
    focus: "Major tournaments only (CS2, LoL, Dota 2)",
    bestMarkets: ["Match winner", "Map winner (if available)"],
    keyFactors: ["Current roster (no substitutes)", "Recent tournament results (last 30 days)", "Map/game pool strengths", "Meta shifts after patches"],
    avoid: "Betting without knowing current roster and recent form — patches change everything",
    tip: "Only bet if you actively follow the e-sport. This is the market where following = biggest edge. Use LOW confidence stakes only regardless of conviction."
  }
];

const bankrollRules = [
  { rule: "Max stake per bet", value: "NOK 500", note: "Hard platform limit on Oddsen" },
  { rule: "Recommended unit size", value: "1–3% of monthly budget", note: "Protects against bad runs" },
  { rule: "Half Kelly cap", value: "f*/2", note: "Halves Kelly to reduce volatility" },
  { rule: "HIGH confidence max", value: "NOK 500", note: "Only when edge > 8%" },
  { rule: "MEDIUM confidence max", value: "NOK 350", note: "Edge 4–8%" },
  { rule: "LOW confidence max", value: "NOK 150", note: "Edge 3–4%" },
  { rule: "Monthly stop-loss", value: "NOK 20,000 (25+)", note: "Platform enforced. Set your own lower." },
  { rule: "Weekly review", value: "Every 7 days", note: "Track ROI, adjust strategy" },
];

export default function App() {
  const [tab, setTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [odds, setOdds] = useState("2.10");
  const [prob, setProb] = useState("52");
  const [bankroll, setBankroll] = useState("5000");

  const decOdds = parseFloat(odds) || 2.0;
  const winProb = parseFloat(prob) / 100 || 0.5;
  const totalBankroll = parseFloat(bankroll) || 5000;
  const impliedProb = (1 / decOdds) * 100;
  const edge = winProb * 100 - impliedProb;
  const b = decOdds - 1;
  const q = 1 - winProb;
  const kellyFull = ((b * winProb - q) / b) * 100;
  const kellyHalf = kellyFull / 2;
  const stakeFull = Math.min(500, Math.round((kellyFull / 100) * totalBankroll / 50) * 50);
  const stakeHalf = Math.min(500, Math.round((kellyHalf / 100) * totalBankroll / 50) * 50);
  const ev = ((winProb * b - q) * 100).toFixed(1);

  const handleCopy = () => {
    navigator.clipboard.writeText(systemPrompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getEdgeColor = (e) => {
    if (e >= 8) return "var(--color-text-success)";
    if (e >= 3) return "var(--color-text-warning)";
    return "var(--color-text-danger)";
  };

  const getConfidence = (e) => {
    if (e >= 8) return { label: "HIGH", bg: "var(--color-background-success)", col: "var(--color-text-success)" };
    if (e >= 4) return { label: "MEDIUM", bg: "var(--color-background-warning)", col: "var(--color-text-warning)" };
    if (e >= 3) return { label: "LOW", bg: "var(--color-background-danger)", col: "var(--color-text-danger)" };
    return { label: "NO BET", bg: "var(--color-background-danger)", col: "var(--color-text-danger)" };
  };

  const conf = getConfidence(edge);

  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1.5rem 0", maxWidth: 680 }}>
      <h2 style={{ sr: true, position: "absolute", width: 1, height: 1, overflow: "hidden" }}>NorskTipping AI Betting Guide</h2>

      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "4px 0 0" }}>
          AI betting system for NorskTipping · Oddsen · All sports
        </p>
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: "1.5rem", borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 0, flexWrap: "wrap" }}>
        {TABS.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            style={{
              background: "none",
              border: "none",
              borderBottom: tab === i ? "2px solid var(--color-text-primary)" : "2px solid transparent",
              padding: "8px 12px",
              fontSize: 14,
              fontWeight: tab === i ? 500 : 400,
              color: tab === i ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              cursor: "pointer",
              borderRadius: 0,
              marginBottom: -1
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 0 && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: "1.5rem" }}>
            {[
              { label: "Max stake / bet", val: "NOK 500" },
              { label: "Monthly limit (25+)", val: "NOK 20,000" },
              { label: "Monthly limit (22–24)", val: "NOK 5,000" },
              { label: "Monthly limit (18–20)", val: "NOK 2,000" },
            ].map(m => (
              <div key={m.label} style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "1rem" }}>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "0 0 4px" }}>{m.label}</p>
                <p style={{ fontSize: 20, fontWeight: 500, margin: 0 }}>{m.val}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "1rem 1.25rem", marginBottom: "1rem" }}>
            <p style={{ fontWeight: 500, fontSize: 15, margin: "0 0 12px" }}>What NorskTipping Oddsen offers</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                "Football (fotball) — dominant",
                "Ice hockey (ishockey)",
                "Handball (håndball)",
                "Tennis",
                "Basketball",
                "E-sports",
                "Live (in-play) betting",
                "Tipping (football pools)",
                "Oddsbomben (result pools)",
                "Fantasy football",
              ].map(s => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--color-text-primary)" }}>
                  <i className="ti ti-check" style={{ color: "var(--color-text-success)", fontSize: 14 }} aria-hidden="true" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--color-background-warning)", border: "0.5px solid var(--color-border-warning)", borderRadius: "var(--border-radius-lg)", padding: "1rem 1.25rem" }}>
            <p style={{ fontWeight: 500, fontSize: 14, margin: "0 0 6px", color: "var(--color-text-warning)" }}>
              <i className="ti ti-alert-triangle" aria-hidden="true" style={{ marginRight: 6 }} />
              Responsible gambling
            </p>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>
              NorskTipping enforces mandatory monthly loss limits and requires all players to set a personal limit before playing. The average self-set limit is NOK 3,600/month. If gambling stops being fun, contact <strong>hjelpelinjen.no</strong>.
            </p>
          </div>
        </div>
      )}

      {tab === 1 && (
        <div>
          <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: "1rem" }}>
            Copy this entire system prompt and paste it as the first message (or system prompt) when starting a new AI session. Works with Claude, ChatGPT, Gemini, and other LLMs.
          </p>
          <div style={{ position: "relative" }}>
            <div style={{
              background: "var(--color-background-secondary)",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: "var(--border-radius-lg)",
              padding: "1rem",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              lineHeight: 1.7,
              whiteSpace: "pre-wrap",
              maxHeight: 400,
              overflowY: "auto",
              color: "var(--color-text-primary)"
            }}>
              {systemPrompt}
            </div>
            <button
              onClick={handleCopy}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                fontSize: 13,
                background: "var(--color-background-primary)",
                border: "0.5px solid var(--color-border-secondary)",
                borderRadius: "var(--border-radius-md)",
                cursor: "pointer",
                color: copied ? "var(--color-text-success)" : "var(--color-text-primary)"
              }}
            >
              <i className={copied ? "ti ti-check" : "ti ti-copy"} aria-hidden="true" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: "0.75rem" }}>
            The prompt includes: NorskTipping rules · Value calculation framework · Kelly Criterion staking · Sport-specific notes · Output format · Responsible gambling reminder
          </p>
        </div>
      )}

      {tab === 2 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {strategies.map(s => (
            <div key={s.sport} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "1rem 1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <i className={`ti ${s.icon}`} style={{ fontSize: 20 }} aria-hidden="true" />
                <p style={{ fontWeight: 500, fontSize: 15, margin: 0 }}>{s.sport}</p>
                <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--color-text-secondary)" }}>{s.focus}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                <div>
                  <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "0 0 4px", fontWeight: 500 }}>Best markets</p>
                  {s.bestMarkets.map(m => (
                    <p key={m} style={{ fontSize: 13, margin: "2px 0", color: "var(--color-text-primary)" }}>· {m}</p>
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "0 0 4px", fontWeight: 500 }}>Key factors</p>
                  {s.keyFactors.slice(0, 3).map(f => (
                    <p key={f} style={{ fontSize: 13, margin: "2px 0", color: "var(--color-text-primary)" }}>· {f}</p>
                  ))}
                </div>
              </div>
              <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "8px 10px", marginBottom: 8 }}>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: "0 0 2px" }}>Insider tip</p>
                <p style={{ fontSize: 13, margin: 0 }}>{s.tip}</p>
              </div>
              <p style={{ fontSize: 12, color: "var(--color-text-danger)", margin: 0 }}>
                <i className="ti ti-x" aria-hidden="true" style={{ marginRight: 4 }} />
                Avoid: {s.avoid}
              </p>
            </div>
          ))}
        </div>
      )}

      {tab === 3 && (
        <div>
          <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
            <p style={{ fontWeight: 500, fontSize: 15, margin: "0 0 12px" }}>Kelly Criterion calculator</p>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 1rem" }}>
              Enter NorskTipping's decimal odds, your estimated win probability, and your monthly budget.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: "1.5rem" }}>
              <div>
                <label style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "block", marginBottom: 4 }}>Decimal odds</label>
                <input type="number" value={odds} min="1.01" max="50" step="0.05" onChange={e => setOdds(e.target.value)} style={{ width: "100%" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "block", marginBottom: 4 }}>Your win % estimate</label>
                <input type="number" value={prob} min="1" max="99" step="1" onChange={e => setProb(e.target.value)} style={{ width: "100%" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, color: "var(--color-text-secondary)", display: "block", marginBottom: 4 }}>Monthly budget (NOK)</label>
                <input type="number" value={bankroll} min="100" max="20000" step="100" onChange={e => setBankroll(e.target.value)} style={{ width: "100%" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 10, marginBottom: "1rem" }}>
              {[
                { label: "Implied probability", val: `${impliedProb.toFixed(1)}%` },
                { label: "Your edge", val: `${edge >= 0 ? "+" : ""}${edge.toFixed(1)}%`, color: getEdgeColor(edge) },
                { label: "Expected value", val: `${ev}%` },
                { label: "Confidence", val: conf.label, bg: conf.bg, color: conf.col },
              ].map(m => (
                <div key={m.label} style={{ background: m.bg || "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "0.75rem" }}>
                  <p style={{ fontSize: 11, color: m.color || "var(--color-text-secondary)", margin: "0 0 4px" }}>{m.label}</p>
                  <p style={{ fontSize: 18, fontWeight: 500, margin: 0, color: m.color || "var(--color-text-primary)" }}>{m.val}</p>
                </div>
              ))}
            </div>

            {kellyFull > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "0.75rem" }}>
                  <p style={{ fontSize: 11, color: "var(--color-text-secondary)", margin: "0 0 4px" }}>Full Kelly stake</p>
                  <p style={{ fontSize: 18, fontWeight: 500, margin: 0 }}>NOK {Math.max(0, stakeFull)}</p>
                  <p style={{ fontSize: 11, color: "var(--color-text-secondary)", margin: "2px 0 0" }}>{kellyFull.toFixed(1)}% of budget</p>
                </div>
                <div style={{ background: "var(--color-background-success)", borderRadius: "var(--border-radius-md)", padding: "0.75rem" }}>
                  <p style={{ fontSize: 11, color: "var(--color-text-success)", margin: "0 0 4px" }}>Half Kelly (recommended)</p>
                  <p style={{ fontSize: 18, fontWeight: 500, margin: 0, color: "var(--color-text-success)" }}>NOK {Math.max(0, stakeHalf)}</p>
                  <p style={{ fontSize: 11, color: "var(--color-text-success)", margin: "2px 0 0" }}>{kellyHalf.toFixed(1)}% of budget · capped at NOK 500</p>
                </div>
              </div>
            ) : (
              <div style={{ background: "var(--color-background-danger)", borderRadius: "var(--border-radius-md)", padding: "0.75rem", textAlign: "center" }}>
                <p style={{ color: "var(--color-text-danger)", fontWeight: 500, margin: 0 }}>No value — do not bet at these odds with this probability estimate</p>
              </div>
            )}
          </div>

          <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "1rem 1.25rem" }}>
            <p style={{ fontWeight: 500, fontSize: 15, margin: "0 0 12px" }}>Bankroll rules</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {bankrollRules.map((r, i) => (
                <div key={r.rule} style={{
                  display: "grid", gridTemplateColumns: "1fr auto",
                  gap: 8, padding: "8px 0",
                  borderBottom: i < bankrollRules.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none",
                  alignItems: "center"
                }}>
                  <div>
                    <p style={{ fontSize: 14, margin: 0 }}>{r.rule}</p>
                    <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0 }}>{r.note}</p>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 4 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>
            Step-by-step: how to incorporate this system into any AI assistant.
          </p>
          {[
            {
              step: "1",
              title: "Copy the system prompt",
              detail: "Go to the 'System Prompt' tab and click copy. This is the core instruction set that tells any AI how to behave as your NorskTipping analyst.",
              tip: "Works with: Claude (claude.ai), ChatGPT (chat.openai.com), Gemini (gemini.google.com)"
            },
            {
              step: "2",
              title: "Start a new AI session",
              detail: "Open a fresh conversation. Paste the system prompt as the very first message and send it. The AI will confirm it understood the instructions.",
              tip: "In Claude: paste it as your first message. In ChatGPT Custom GPT: paste in the 'Instructions' field."
            },
            {
              step: "3",
              title: "Gather your data",
              detail: "Before asking for a pick, open NorskTipping Oddsen and note the exact decimal odds. Check for any injury news. Know your remaining monthly budget.",
              tip: "Always give the AI the current odds directly — never let it guess them."
            },
            {
              step: "4",
              title: "Request your analysis",
              detail: `Ask the AI: "Analyse [Team A] vs [Team B] in [competition]. NorskTipping odds: [X] home, [Y] draw, [Z] away. Recent injury news: [paste any news]. My remaining monthly budget: NOK [X]."`,
              tip: "More data = better output. Include form, injuries, H2H if you have it."
            },
            {
              step: "5",
              title: "Review the recommendation",
              detail: "The AI will follow the structured output format: match context → value check → Kelly stake → recommendation. Only act on HIGH or MEDIUM confidence bets with a positive edge.",
              tip: "If edge is negative or below 3%, the AI will say NO BET. Trust that — it's protecting your bankroll."
            },
            {
              step: "6",
              title: "Track every bet",
              detail: "Keep a simple spreadsheet: date, match, bet type, stake, odds, result, profit/loss. Review weekly. This is how you measure if the strategy is working over time.",
              tip: "Ask the AI at any time: 'Based on my results so far, should I adjust my approach?'"
            },
          ].map(s => (
            <div key={s.step} style={{ display: "flex", gap: 12, background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "1rem 1.25rem" }}>
              <div style={{ width: 28, height: 28, minWidth: 28, borderRadius: "50%", background: "var(--color-background-secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500, fontSize: 14 }}>
                {s.step}
              </div>
              <div>
                <p style={{ fontWeight: 500, fontSize: 14, margin: "2px 0 6px" }}>{s.title}</p>
                <p style={{ fontSize: 13, margin: "0 0 6px", color: "var(--color-text-primary)" }}>{s.detail}</p>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0 }}>
                  <i className="ti ti-bulb" aria-hidden="true" style={{ marginRight: 4 }} />
                  {s.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
