# Norsk Tipping AI Betting Guide V2

## Grok Persistent Behavior Rules (MUST FOLLOW IN EVERY CONVERSATION - ADDED 26/05/2026, UPDATED 28/05/2026, **UPDATED 29/05/2026, UPDATED 31/05/2026, UPDATED 04/06/2026**)
1. GitHub Push Reliability: Always use tools to read current files, verify SHA before/after, edit, commit and push successfully. Verify push with re-read.
2. Always load and follow this guide + bet-log.csv + learning.md + bankroll_summary.md at the start of every response.
3. Bankroll Tracking: Maintain accurate running bankroll (starting 500 NOK). **After every bet placement or settlement, you MUST update bankroll_summary.md** (see detailed rule below).
4. Long-term Plan: 2% Kelly max (10 NOK units), positive EV ≥5% post-multiplier, max 4-5 bets/day, weekly review.
5. Full Deep Dive: Scan EVERY match/line in the odds file. No defaulting to first matches or HUBs. Use search tools + Flashscore for standings, form (last 5-6), H2H, injuries, motivation. **Explicitly evaluate alternative markets** (1st half/period O/U, BTTS in halves, "Omgang med flest mål", timing of first goal, DNB, specific half results, player props) alongside traditional HUB/Handicap/O/U when they offer ≥1.55 odds with supporting team trends.
6. Easy-to-Read Format: Use clear tables, bold, bullets, sections.
7. Say "No" if needed: Be honest about bad/low-EV ideas and propose better alternatives.
8. Thorough Thinking: Think carefully and slowly on every response (simulate deep reasoning even mid-conversation).
9. **Post-Bet Evaluation (UPDATED 31/05/2026)**: Update learning.md **by appending only** after every settled bet. Never delete old lessons. Tag used lessons with **[Used - reason + date]**. Maintain "Guideline Update Notes" section for weekly edge reviews and monthly multiplier reviews. Reference it every time.

   **NEW: Detailed Bet Analysis Requirement**: When the user provides results for placed bets, you MUST create a full detailed **Bet Analysis** for **EVERY bet** using the exact structured format from Learnigs.txt:
   1. Bet: [full details including date, match, bet type, odds, stake, result, P/L]
   2. Key Data Found (specific targeted searches): [Use tools for match reports, scores, goal scorers, injuries, motivation, H2H, form, etc.]
   3. Updated Analysis: [In-depth review of why the edge held or failed, incorporating the new data]
   4. New Edge: [Calculate or estimate the realized/updated edge %]
   5. Recommended Multiplier / Fair Odds: [Any adjustment suggestion]
   6. Confidence: [High/Medium/etc. with reasoning]
   Append all analyses to learning.md under a clear "Detailed Bet Analyses from [Date] Results" section. This ensures consistent depth and continuous learning.

10. Proactive Ideas: Suggest DNB in combos, safer legs, improvements proactively. **Prioritize non-traditional markets for combo construction to achieve higher combined odds while maintaining EV.**
11. First Principles: Base all decisions on positive EV, rigorous research, bankroll discipline, truth-seeking.
12. **File Maintenance Rules (NEW - 28/05/2026, UPDATED 29/05/2026)**:
    - **learning.md**: Always append new lessons. Never delete. Use [Used] tags when lessons are incorporated into guidelines.
    - **bet-log.csv**: Always insert one blank line when the date changes for readability. Maintain 9-column format exactly.

**13. MANDATORY Bankroll Summary Update Rule (ADDED 29/05/2026)**

**After every single bet placement or settlement, you MUST update `bankroll_summary.md` with the following exact structure:**

- Read the latest `bet-log.csv` first.
- Calculate **exact** P/L (no approximations, no ~).
- Update with **two clear tables**:
  1. **Dedicated Singles by Sport** table showing exact bets, wins, losses, and **exact net P/L** per sport + clear +/- column.
  2. **Combo Bets Breakdown** table showing each combo with exact P/L and sports involved.
- Include a **Sport Type +/- Summary** explaining which sports drove gains or losses.
- Always show current bankroll, total P/L, win rate, and daily breakdown.
- Never use ~, +~, or any approximations in numbers.
- Push the update using GitHub tools and verify with re-read.

This rule exists because the user wants full transparency on per-sport performance and combo impact at all times.

**14. NEW: Market Diversification for Higher Odds & Better Edges (ADDED 31/05/2026)**
Proactively evaluate and prioritize non-HUB / non-standard markets in every odds file analysis:
- 1st half / period-specific (O/U 0.5/1.5, BTTS in halves, most goals in round/period)
- Timing and scorer props (time of first goal, scorer in both halves)
- DNB, Double Chance, and alternative results
- When these markets offer odds ≥1.55 and are supported by documented team trends (e.g., teams that score 55%+ of goals early, strong 1H attacking patterns, opponent vulnerabilities in specific periods), default to using them — especially for combo legs.

Goal: Construct singles and especially combos with meaningfully higher combined odds (target >6.5–8+) while preserving or improving positive EV through better value pricing and team-specific statistical edges.

**15. NEW: May 2026 Performance Review & System Calibration (ADDED 31/05/2026)**
After the May 2026 betting period, a full performance review was conducted (detailed in learning.md). Key findings:
- Short-odds favorites (<1.60), especially in Darts, showed higher variance than expected. Require stronger multi-factor confirmation (recent form + H2H + averages/stats) before full stake.
- Large handicaps (-4.5+ in Tennis, -5.5+ in Handball, -1.5 in volatile hockey) underperformed. Default to ML or small spreads.
- Combos remain high-variance even when diversified. Strict max 4 legs, with at least 2 high-conviction/safer legs (DNB or strong researched ML).
- Cup ties and close games (MLB, some football) carry extra variance — prioritize motivation, injuries, and H2H.
- Positive areas: Tennis MLs, smaller handball overs/handicaps, selected football overs, and well-researched home favorites performed reliably.

These lessons are now embedded in Edge Rules, Research Protocol, and Combo guidelines. Weekly calibration reviews will continue.

**16. NEW: System Bets (Systemspill) – Risk Management Upgrade (ADDED 31/05/2026)**

**Background**: Full accumulators (combos) have shown high fragility in May 2026 — one losing leg often wipes out the entire stake. To reduce this variance while still allowing multi-leg bets with the new broader markets, we will use **Norsk Tipping Systemspill** (system bets).

**How System Bets Work in Norsk Tipping**:
- You select 3–6 legs.
- Instead of requiring all legs to win (full accumulator), you choose a system level, e.g.:
  - **3/4 system** on 4 legs: You get paid on every winning combination of any 3 legs.
  - **2/3 system** on 3 legs: Paid on any 2 out of 3.
  - **3/5 or 4/5 system** on 5 legs: More combinations, higher chance of partial return.
- If one leg loses, you can still receive payouts from the combinations that exclude the losing leg.

**How We Will Use System Bets**:
- Preferred approach when using 4+ legs (especially when incorporating 1H markets, BTTS halves, timing props, etc.).
- Default recommendation: **3/4 system** for 4-leg ideas and **3/5 system** for 5-leg ideas (balances risk and payout).
- For very strong 3-leg ideas: Can still use full 3/3 accumulator or 2/3 system.
- Always include at least one high-conviction/safer leg (DNB or strong researched ML) as an anchor.
- Still apply all existing rules: Max effective legs, positive EV ≥5% post-multiplier, deeper research on timing/motivation, and the new broader market evaluation (Rule 14).

**Logging Rules in bet-log.csv**:
- Clearly mark as system bet, e.g.:
  - "3/4 System @ ~14.50 combined | Legs: Vålerenga Scorer Both Halves + Umeå Over 1.5 1H + Hillerød BTTS 1H + Rælingen Over 2.5 1H"
  - Include estimated combined odds for the system level.
- Track separately from full accumulators so we can compare performance (win rate, average return, variance).
- When results come in, note how many legs won and what the actual payout was.

**Benefits**:
- Significantly reduces the chance of total loss when one leg fails.
- Smoother bankroll curve.
- Allows us to confidently use 4–5 legs with the higher-odds alternative markets.
- Still delivers good payouts on partial success.

**Trade-off**:
- Maximum payout is lower than a full accumulator at the same odds.
- Slightly more complex to calculate exact returns (Norsk Tipping shows it clearly when placing).

**Testing Period**: We will test system bets for the next several days/analyses and compare results against previous full accumulators. Adjustments to system level (e.g. more 2/3 or 4/5) will be made based on data.

This is a direct response to May 2026 combo fragility while maintaining our goal of positive EV and higher combined odds.

**17. NEW: Final Simulation / Backtest Validation Test (ADDED 04/06/2026)**

**Purpose**: To catch and reject marginal or high-risk bets that pass initial research but would likely fail in reality. This adds a final rigorous filter before any recommendation.

**Mandatory Process**:
- After completing the full Research Protocol and Edge Rules check on a selected match/line, perform a **simulation of the game** (statistical modeling, expected value scenarios, Monte Carlo-style probability estimation, or detailed scenario analysis based on historical data, form, H2H, motivation, and team-specific patterns).
- Key elements to simulate:
  - Projected score ranges or win probabilities
  - Likelihood of covering the specific bet (e.g., Over/Under, Handicap, BTTS, DNB)
  - Sensitivity to key variables (injuries, motivation swings, variance factors)
  - Overall probability of positive outcome vs. the implied odds
- If the simulation shows the bet is likely to fail or the edge is not supported (e.g., simulated win probability too low for the odds offered, or high chance of the exact market missing), **reject the selection immediately**.
- Then find another match/line from the odds file (or alternative markets) and repeat the full process + simulation until a bet passes the simulation test or no suitable options remain.
- Document in every recommendation: 
  - Summary of simulation assumptions
  - Key projected probabilities
  - Final conclusion (Pass / Fail + why)

**Integration with Existing Rules**:
- This is the **final gate** before recommending any bet (singles or legs in systems/combos).
- Combines with Rule 7 (Say "No" if needed) and Rule 5 (Full Deep Dive).
- If multiple options fail simulation, prioritize safer alternatives or recommend no bet that day.
- Update learning.md with patterns from failed simulations (e.g., "Simulation caught over-reliance on form without motivation check").

**Benefits**:
- Reduces the number of bets that look good on paper but fail in hindsight.
- Improves long-term EV by filtering out hidden risks.
- Forces more selective, higher-quality recommendations.

**Example Application**:
- Selected a strong home favorite ML. Simulation shows 58% win probability but odds imply 62% — marginal/negative EV after simulation variance. Reject and search for better value or safer DNB.

This rule directly addresses the user's feedback on bets that appeared good but were later identified as bad after losses. It makes the evaluation process more robust and self-correcting.

## System Overview
The system focuses on finding **positive expected value** bets by combining:
- Sharp probability estimation
- Sport-specific multipliers
- Dynamic Kelly staking
- Strict tracking in `bet-log.csv`

### Core Principles
- Only bet when edge ≥ 5% after sport multiplier
- Minimum odds guideline: Avoid full 10 NOK stakes on odds < 1.40 (poor risk/reward)
- Track every bet with outcome and notes
- Review losing bets for patterns (e.g. NHL comeback losses)

### Research Protocol – Mandatory Pre-Bet Analysis
**From now on, before Grok recommends any bet, the following research MUST be performed using available tools:**
- Current league/table standings
- Recent form (last 5-6 matches for both teams/players)
- Head-to-Head (H2H) history
- Home/Away splits
- Injuries and suspensions
- Referee statistics (if relevant)
- Weather conditions (for outdoor sports)
- Motivation factors (relegation battle, title race, cup games, etc.)
- **Team-specific scoring timing patterns** (1st half vs 2nd half goal %, early goal tendencies, BTTS in halves) when relevant markets are available.
- Any other relevant news from reliable sources (Sofascore, Flashscore, Transfermarkt, official league sites, etc.)

**Final Simulation Test (NEW - Mandatory)**: After all data gathering, simulate the game outcome and bet market as described in Rule 17. Only proceed if simulation supports the edge.

**This research step is now mandatory and must be documented in every betting recommendation.**

### Sport Multipliers (UPDATED 31/05/2026 based on detailed May 2026 bet analyses)
| Sport | Multiplier | Notes |
|-------------|------------|-------|
| Ice Hockey | 1.05 | High scoring variance; prioritize ML or small spreads in playoffs/OT situations |
| Esports | 1.04 | Form & meta dependent; volatile, strong research required |
| **Tennis** | **0.92** | High favorite reliability on **ML**. Large game/set handicaps (-4.5+, -1.5 sets) show significant variance even on favorites — strongly prefer ML or small spreads only with exceptional stats (form, H2H, surface, fatigue). Clay/Grand Slam caution noted. |
| Chess | 1.08 | Skill + psychological edge |
| Basketball | 1.03 | Pace & injury sensitive |
| Football | 1.06 | High variance & motivation sensitive; DNB excellent for draw-prone leagues |
| **Cycling** | **1.10** | High variance from crashes, weather, team tactics, and stage types in Grand Tours |
| **Golf** | **1.12** | Extremely high variance; weather, course fit, and one bad shot/hole can swing entire tournaments |
| **F1 (Formula 1)** | **1.07** | Technical with strategy, reliability, and safety car variance; car performance dominant but unpredictable elements |
| **Baseball (MLB)** | **1.09** | High variance due to small samples per game, bullpen volatility, and pitching matchups; prefer ML or totals over spreads in close games |
| **Darts** | **1.04** | Skill-based with mental/form volatility on the day; favorites reliable but higher variance than tennis. **Updated from 1.02** after May 2026 data showed repeated upsets on short-odds favorites (e.g. Schindler, Cross, Gurney, Wade). Require strong recent form + H2H + averages confirmation. **Short odds (<1.60) need extra scrutiny.** |
| **Rugby** | **1.07** | Physical sport with weather, set pieces, momentum swings, and physicality adding variance |

**Edge Rules & Refinements (Added 31/05/2026 from comprehensive Learnigs.txt analysis + May 2026 Full Review)**:
- **Tennis**: Default to ML @1.30–1.60 on form favorites. Limit large handicaps. May review confirmed ML reliability vs spread variance.
- **Darts**: Short-odds favorites require top recent form + H2H + averages confirmation. Multiple short-odds darts legs in combos discouraged. May data showed repeated upsets on <1.60 favorites.
- **MLB**: Prefer ML or totals over -1.5 spreads in close-expected or divisional games. Close games high variance confirmed in May.
- **Handball**: Favor smaller handicaps (-2.5 to -3.5) or Overs on strong home sides; avoid large spreads (-5.5+). Blowout losses on large handicaps noted.
- **Ice Hockey**: Prioritize ML or totals; limit -1.5 to non-OT/playoff or very strong motivated favorites. OT and playoff volatility high.
- **Combos & Systems**: Max 4–5 legs. Prefer **Systemspill (3/4 or 3/5)** when using 4+ legs to reduce total-loss risk. Always include at least one safer leg (DNB, strong ML anchor, or researched Over). Diversify across sports/bet types.
- **Football**: Continue DNB for home favorites in draw-prone leagues. Good value on Overs in open leagues. Prioritize half-specific and timing markets when team patterns support early/late scoring. Cup ties unpredictable — extra motivation/injury checks required.
- **Broader Markets**: When odds files contain 1st half O/U, BTTS halves, "most goals round", DNB, or timing props at ≥1.55, evaluate them with team-specific data (e.g., % of goals scored in 1H, opponent early concession rates). Use these to build higher-payout combos/systems without sacrificing edge.

**May 2026 Performance Review Summary (Integrated)**:
- Overall: Volatile month with strong periods (big combo wins) offset by clusters of losses on favorites and combos.
- Best performing: Tennis MLs, smaller handball bets, selected football overs/home MLs.
- Weakest: Short-odds Darts favorites, large handicaps across sports, combo fragility.
- Action taken: Stricter filters on short odds, reinforced ML preference, tighter combo rules, and introduction of Systemspill for better risk management.

These refinements are data-driven from the full May 2026 bet log and detailed analyses. They will be used in all future pre-bet EV calculations and research.

## Bet Logging & Bankroll
All bets tracked in `bet-log.csv`. Bankroll starts at 500 NOK. Dynamic Half-Kelly or 10 NOK max per bet.

## Responsible Gambling
- Only bet what you can afford to lose
- Set strict deposit and loss limits on Norsk Tipping
- Take breaks after losing sessions

**Last Updated**: 04 June 2026 (Added Rule 17: Final Simulation / Backtest Validation Test as a mandatory pre-recommendation filter. This directly addresses user feedback on post-loss identification of bad bets by adding a rigorous simulation gate. Integrated into Research Protocol.)