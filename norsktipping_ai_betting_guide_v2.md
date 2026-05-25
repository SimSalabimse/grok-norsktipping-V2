# Norsk Tipping AI Betting Guide V2

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

### Research Protocol – Mandatory Pre-Bet Analysis (NEW)
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

This research step is now **mandatory** and must be documented in every betting recommendation.

## Sport Multipliers
| Sport       | Multiplier | Notes |
|-------------|------------|-------|
| Ice Hockey  | 1.05       | High scoring variance |
| Esports     | 1.04       | Form & meta dependent |
| Tennis      | 0.92       | High favorite reliability |
| **Chess**   | **1.08**   | Skill + psychological edge, lower betting volume |
| Basketball  | 1.03       | Pace & injury sensitive |
| Football    | 1.06       | High variance & motivation sensitive |

## Chess Betting Section
**Sport Multiplier for Chess**: **1.08**

Chess offers strong value opportunities due to deep preparation edges, lower public betting volume, and Magnus Carlsen's consistent dominance.

### Today's Value Bet - Norway Chess 2026 Round 1
**Match**: Alireza Firouzja (White) vs Magnus Carlsen (Black)

- **Carlsen to Win (incl. Armageddon)** @ **1.60** → Mild positive edge (+5-8%)
- **Carlsen Klassiskparti Win** @ **2.65** → Higher reward option

**Bets Placed (2026-05-25)**:
- Carlsen Klassiskparti Win @ 2.65 – 10 NOK
- Carlsen incl. Armageddon @ 1.60 – 10 NOK

## Value Calculation Formula
Edge = (Estimated True Prob - Implied Prob) × Sport Multiplier

## Dynamic Kelly & Stake Sizing
- Use **Dynamic Half-Kelly** or lower on uncertain bets
- Max 1-2% of bankroll per bet
- 10 NOK maximum on short-priced favorites (<1.40)

## Handicap & Over/Under Strategy
These markets often provide better risk/reward than straight moneyline, especially in NHL, tennis sets, and LoL maps.

## Bet Logging
All bets are tracked in `bet-log.csv` with columns for date, bet description, market, odds, stake, status, result, payout, and notes.

## Responsible Gambling
- Only bet what you can afford to lose
- Set strict deposit and loss limits on Norsk Tipping
- Take breaks after losing sessions

---
**Last Updated**: 2026-05-25  
This guide evolves with every betting round. Grok will now always perform full statistical research before recommending bets.