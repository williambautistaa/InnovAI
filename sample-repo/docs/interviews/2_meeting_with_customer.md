PM: Hey Ana! Great to have you back. Last time you mentioned the tracker was working well—has that continued?

Ana: Yes, I’m still using it regularly. It’s become part of my routine, especially for small purchases. Logging expenses is super fast, which is exactly what I needed.

PM: That’s great to hear. You mentioned last time you were interested in seeing some trends—want to tell me more about that?

Ana: Absolutely. So right now I can see the total I’ve spent in each category for the month, which is helpful, but I’m missing a sense of how my spending behaves over time. I’d love to see how things fluctuate across the days.

PM: So, a kind of trend visualization. Can you walk me through what you’d expect to see?

Ana: Sure! What I have in mind is a line graph that shows how much I spent each day during the current month. Just one line is enough for now—showing total daily spend. Later it might be nice to break that down by category with different colored lines, but to start, I just want to see whether I spent more at the beginning, middle, or end of the month.

PM: Got it. Where do you think this should live in the app?

Ana: I’d place it on the Dashboard, maybe right above or below the current category breakdown. The graph should update as soon as I land there—no need to click anything.

PM: How important is interactivity? For example, clicking or hovering to see more info?

Ana: That would be nice. For example, if I hover over April 12th, I’d like to see a tooltip saying “$42.50” or something. But even if it’s static, it’s still useful. I just want to visually notice patterns—like “why did I spend nothing for three days, then suddenly a lot?”

PM: Would you expect this for past months too, or just the current one?

Ana: Ideally, I’d be able to pick a month. Maybe a dropdown or selector like “← March | April | May →” so I can go back and review past patterns.

PM: Makes sense. Daily totals per selected month. Anything else?

Ana: Just that it should exclude days where I didn’t spend anything—or at least mark them clearly as zero, so the gaps are visible.

PM: Got it. Now, last time you also hinted at wanting more detailed views of your expenses. Want to expand on that?

Ana: Yes! So right now, once I’ve added an expense, I can’t see the actual list of what I’ve logged. That’s something I really need.

PM: Okay, so a history or list page.

Ana: Exactly. I want a dedicated page—maybe /expenses—where I can see all the entries I’ve made. Not just a summary, but actual items: the date, amount, category, and the note I added.

PM: What would the layout look like?

Ana: I picture a table with columns:
	•	Date
	•	Amount (formatted with currency)
	•	Category
	•	Note (even if it’s short)
And maybe a small “…” menu on the side for future editing or deletion.

PM: Would you want this list to be searchable or filtered?

Ana: Definitely. I’d need three kinds of filtering:
	1.	Date range – Like, I want to say “Show me only April 1–15.”
	2.	Category filter – To only see “Food” or “Transport,” for example.
	3.	Free text search – To find an expense by note, like “dinner” or “Uber.”

These filters should be at the top, and I’d want the table to update dynamically as I type or select filters—no submit button.

PM: Got it. How many entries would you expect to see on that screen?

Ana: Sometimes 10, sometimes 100. Ideally, the list should paginate or infinitely scroll if it gets long. But if pagination is easier, that’s fine for now. I just don’t want it to get overwhelming or laggy.

PM: What about sorting?

Ana: Sort by date descending by default, so the most recent is on top. Later it could be sortable by amount or category too.

PM: Would you want to export this list somehow?

Ana: That would be cool down the line—maybe a CSV export button. But not a priority for now.

⸻

PM: One more thing—how do you imagine navigating between screens?

Ana: Yes, that’s another pain point. If I’m on the list of expenses and realize I forgot to add one, I want to click “Add New Expense” right from there. Right now I have to go back to the dashboard and then to the add screen—it feels a bit roundabout.

PM: So just a clear button on the top right or something?

Ana: Yes! A floating action button or a prominent link that says “Add Expense.” Clicking it should take me straight to the /add form, and ideally, when I come back, I still see my filtered list.

PM: Okay—makes sense. Any preferences around layout or design for these new features?

Ana: Keep it consistent with what’s there now—clean and minimal. Use the same fonts, colors, spacing. But make sure the graph and filters are mobile-friendly if possible. I sometimes log or review expenses from my phone too.

PM: Understood. Thanks Ana—this gives us exactly the detail we need to scope and implement properly.

Ana: Awesome. I’m really excited to see these new features live.
