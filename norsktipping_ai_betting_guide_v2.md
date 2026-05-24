# Norsk Tipping AI Betting Guide V2

**Advanced Data-Driven Betting System** – Built for long-term +EV on norsk-tipping.no (Oddsen).

This is the improved version incorporating the strongest elements from the "Grok's Superior AI Betting Analysis" conversation: refined value betting frameworks, dynamic risk management, sport-specific adjustments, combo strategies, and robust GitHub tracking for continuous improvement.

## Core Principles
- Long-term +EV focus through disciplined value betting
- Strict bankroll management and platform compliance
- Data-driven decisions with active learning from results
- Responsible gambling as the foundation

## Platform Rules (Mandatory)
- Maximum stake per single bet: **NOK 500**
- Respect age-based monthly loss limits
- Never exceed remaining monthly budget
- Bets only on Oddsen (fixed odds)

## Enhanced System Prompt V2

Use this as the core instruction for analyses:

```
You are Grok NorskTipping Superior Betting Analyst V2.

Primary goal: Achieve sustainable positive expected value while minimizing risk of ruin.

MANDATORY:
- Max stake NOK 500
- Respect all Norsk Tipping responsible gambling limits
- Only bet when clear +EV exists after adjustments

ANALYSIS STEPS:
1. Gather comprehensive match context (form, H2H, injuries, motivation, venue)
2. Estimate true probability using stats, models, and research
3. Calculate implied probability from provided decimal odds
4. Compute raw edge, then apply sport multiplier
5. Determine optimal stake using Dynamic Half-Kelly (adjust fraction based on variance, confidence, drawdown)
6. Output structured recommendation with confidence level and risks

SPORT MULTIPLIERS (applied to edge):
- Football: ×1.00
- Handball (home): ×1.05
- Ice Hockey (home): ×1.05
- Darts: ×1.06
- Esports: ×1.04
- Tennis: ×0.92
- High variance sports: lower Kelly fraction

Bet only if final edge ≥ 5% (exceptional 4%)

Track every recommendation in bet-log.csv and refine models based on actual outcomes.

Always begin response with responsible gambling reminder.
```

## Value Betting Framework
- True probability estimation is key
- Edge = (True Prob - Implied Prob) × Sport Multiplier
- Minimum threshold: 5%

## Dynamic Staking (Half-Kelly)
- Base Kelly: f* = (b × p - q) / b
- Use 50% Kelly by default
- Reduce to 25-33% in high variance or drawdown situations
- Hard cap at NOK 500

## Combos & Accumulators
- Only combine legs with individual edge ≥5%
- Apply 40-60% stake reduction for correlation risk
- Strong for Oddsbomben-type markets

## Handicap & Over/Under Strategy (New)
- Prioritize handicap and O/U markets when they offer better risk-reward than moneyline
- Especially useful in NHL, Tennis sets, and Esports maps
- Example from May 25 2026 analysis: Colorado Avalanche -0.5 @ 2.75 showed strong value
- Rule: Only use 10 NOK stakes on odds ≥1.50 to maintain good risk-reward

## Lessons from Previous Runs
- Avoid 1.20–1.35 odds with full 10 NOK stakes (low reward, high frustration on losses)
- Better to mix Moneyline with Handicap for improved payout potential
- Minimum recommended odds for 10 NOK stake: **1.50+**

## Long-Term Strategy
- Minimum 100 settled bets before major changes
- Weekly review of ROI, hit rate, and edge realization
- Quarterly recalibration of multipliers and thresholds
- Goal: Positive ROI with controlled drawdown (<15% monthly)

## GitHub Tracking
- `bet-log.csv`: Record every bet (date, match, selection, odds, stake, outcome, P/L)
- Use for performance analytics and model improvement

## Responsible Gambling
Betting should be fun and within your means. Use Norsk Tipping's self-exclusion and limit tools. Seek help at hjelpelinjen.no if needed.

---

*Continuously improved with insights from shared superior analysis conversations. Last major update: May 25 2026 - Added Handicap/O/U section and risk lessons.*