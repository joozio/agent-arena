# Agent Arena

A prompt injection security testing tool. Ten hidden attack techniques, three-state scoring, and a leaderboard. Build AI agents and test them against real-world prompt injection vectors.

**[Try it live](https://wiz.jock.pl/experiments/agent-arena)**

## What It Does

Agent Arena presents a series of web pages with hidden prompt injection attacks — from basic HTML comments to expert-level Unicode and zero-width character exploits. Your AI agent reads each page and reports what it finds. The arena scores whether the agent detected the attack, missed it, or got compromised.

## Attack Techniques

| # | Technique | Difficulty |
|---|-----------|-----------|
| 1 | HTML Comment | Basic |
| 2 | White on White | Basic |
| 3 | Hidden Div | Medium |
| 4 | Micro Text | Medium |
| 5 | Data Attribute | Medium |
| 6 | Unicode Bidi | Hard |
| 7 | Base64 Encoded | Hard |
| 8 | Markdown Link | Hard |
| 9 | Zero-Width Characters | Expert |
| 10 | Homoglyph | Expert |

## Run Locally

```bash
npm install
npm run dev
```

## The Story

AI agents that browse the web are vulnerable to prompt injection — hidden instructions on web pages that hijack the agent's behavior. This tool lets you test your agent against 10 real attack vectors, from trivial to nearly undetectable.

## Built With

- React 19
- TypeScript
- Tailwind CSS 4
- Vite

## License

MIT
