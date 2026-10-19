# Email answer assistant

Customer emails, answered from the firm's own documents. Small AI models run on one laptop: they sort each email, find the answer in the price list and terms, write a draft, and check it. When they are not sure, a person decides. No email leaves the computer.

**Try it:** https://anas-qatanani.github.io/email-answer-assistant/

**Watch it (32 s):** [demo.mp4](https://anas-qatanani.github.io/email-answer-assistant/demo.mp4)

The firm (Älvkant Industridelar AB), the people and all 100 emails are made up. No client data.

## Result on 100 test emails

| Sure bar | Machine handled | Wrong | To a person |
|---|---|---|---|
| 0.6 | 62 | 0 | 38 |
| 0.7 (default) | 59 | 0 | 41 |
| 0.8 | 52 | 0 | 48 |

- **0 wrong** at every sure bar. The machine acts only when it is sure; everything else goes to a person.
- Sorting right: 91/100. Right document found first: 38/42.
- The whole run takes about 6 minutes on a 16 GB laptop.

## How it works

1. **Sort.** A small decision model says: question, order, complaint or other, how sure it is, and whether the sender asks for a person.
2. **Find.** A search model finds the three closest parts of the firm's documents.
3. **Write.** A writer model (Gemma 4 E4B) drafts the reply from those parts only, in the customer's language (Swedish or English).
4. **Check.** The decision model checks that every price, time and number in the draft is in the sources. If not, a person takes it.

Below the **sure bar**, a person decides. Orders go to the order flow ([order email → sheet](https://anas-qatanani.github.io/order-email-to-sheet/)); complaints always go to a person.

## How it was built

- Local and free: Ollama on one MacBook Air, no cloud, no API costs.
- The decision model was picked in a contest on the same 100 emails against a general 2B model.
- One model in memory at a time, so it runs on a 16 GB laptop next to other apps.
- Runs in Docker too; the models stay in Ollama on the host.

The source code is private. This repo holds only the demo page. Ask on a call if you want to see the code.

---
Built by Anas Qatanani · [AI-Driven](https://www.linkedin.com/company/ai-driven-tech) · [Book a 15-min call](https://calendly.com/anas-aidriven/15min)
