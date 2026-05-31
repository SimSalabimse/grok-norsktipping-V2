# Norsk Tipping AI Betting Guide V2

## Grok Persistent Behavior Rules (MUST FOLLOW IN EVERY CONVERSATION - ADDED 26/05/2026, UPDATED 28/05/2026, **UPDATED 29/05/2026, UPDATED 31/05/2026**)
1. GitHub Push Reliability: Always use tools to read current files, verify SHA before/after, edit, commit and push successfully. Verify push with re-read.
2. Always load and follow this guide + bet-log.csv + learning.md + bankroll_summary.md at the start of every response.
3. Bankroll Tracking: Maintain accurate running bankroll (starting 500 NOK). **After every bet placement or settlement, you MUST update bankroll_summary.md** (see detailed rule below).
4. Long-term Plan: 2% Kelly max (10 NOK units), positive EV ≥5% post-multiplier, max 4-5 bets/day, weekly review.
5. Full Deep Dive: Scan EVERY match/line in the odds file. No defaulting to first matches or HUBs. Use search tools + Flashscore for standings, form (last 5-6), H2H, injuries, motivation.
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

10. Proactive Ideas: Suggest DNB in combos, safer legs, improvements proactively.
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

This is the main living document for our data-driven betting system on Norsk Tipping. It incorporates lessons from previous runs, value betting principles, bankroll management, and responsible gambling.

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
- Any other relevant news from reliable sources (Sofascore, Flashscore, Transfermarkt, official league sites, etc.)

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
| **Darts** | **1.04** | Skill-based with mental/form volatility on the day; favorites reliable but higher variance than tennis. **Updated from 1.02** after May 2026 data showed repeated upsets on short-odds favorites (e.g. Schindler, Cross, Gurney). Require strong recent form + H2H + averages confirmation. |
| **Rugby** | **1.07** | Physical sport with weather, set pieces, momentum swings, and physicality adding variance |

**Edge Rules & Refinements (Added 31/05/2026 from comprehensive Learnigs.txt analysis)**:
- **Tennis**: Default to ML @1.30–1.60 on form favorites. Limit large handicaps.
- **Darts**: Short-odds favorites require top recent form + H2H confirmation.
- **MLB**: Prefer ML or totals over -1.5 spreads in close-expected or divisional games.
- **Handball**: Favor smaller handicaps (-2.5 to -3.5) or Overs on strong home sides; avoid large spreads.
- **Ice Hockey**: Prioritize ML or totals; limit -1.5 to non-OT/playoff or very strong motivated favorites.
- **Combos**: Max 4 legs. Always include at least one safer leg (DNB, strong ML anchor, or researched Over). Diversify across sports/bet types.
- **Football**: Continue DNB for home favorites in draw-prone leagues. Good value on Overs in open leagues.

These refinements are data-driven from ~95 detailed bet analyses (positive edges in Tennis MLs, smaller handball bets, home MLs/Overs; negative in large spreads, combos, some favorites). They will be used in all future pre-bet EV calculations and research.

## Bet Logging & Bankroll
All bets tracked in `bet-log.csv`. Bankroll starts at 500 NOK. Dynamic Half-Kelly or 10 NOK max per bet.

## Responsible Gambling
- Only bet what you can afford to lose
- Set strict deposit and loss limits on Norsk Tipping
- Take breaks after losing sessions

**Last Updated**: 31 May 2026 (Major update: Added detailed Bet Analysis requirement for results; formalized Darts multiplier increase to 1.04, enhanced Tennis notes and edge rules, added comprehensive Edge Rules section based on full May 2026 Learnigs.txt data. Multipliers and principles validated and refined.)