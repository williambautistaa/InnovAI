// ============================================================
// Demo Extension — a learning example for g-coda extensions
// ============================================================
// An extension is just a TypeScript file that exports a function
// named `activate` (or a `default` function). Coda calls it once
// when the session starts, handing you an `api` object that you
// use to register tools, commands, and hooks.
//
// This file lives in `.coda/extensions/` so Coda discovers it
// automatically for THIS project only. For extensions you want in
// every project, put them in `~/.coda/extensions/` instead.
// ============================================================

import { z, type ExtensionAPI, type AgentTool, type ToolContext } from "@globant/coda-core";

export default function activate(api: ExtensionAPI): void {
  // ----------------------------------------------------------
  // 1) A TOOL — something the AI assistant (me!) can call while
  //    working. Tools are the AI's "hands": search, calculate,
  //    fetch data, etc. Parameters are described with Zod, which
  //    is a library for describing data shapes + validation.
  // ----------------------------------------------------------
  const wordCountTool: AgentTool<{ text: string }, string> = {
    // Name the AI will see. Convention: snake_case.
    name: "word_count",

    // The description is how the AI decides WHEN to use the tool.
    // Be specific — a vague description means the tool gets ignored.
    description:
      "TEXT UTILITY. Counts words, characters, and lines in the given text. Use when the user asks how long a piece of text is.",

    // Zod schema: defines the inputs and documents them for the AI.
    parameters: z.object({
      text: z.string().describe("The text to analyze"),
    }),

    // Human-readable label shown in the UI when the tool runs.
    label: "Word Count",

    // The actual logic. Must return a string — that string is what
    // the AI reads back as the tool's result.
    execute: async (
      _toolCallId: string,
      params: { text: string },
      _context: ToolContext,
    ): Promise<string> => {
      const words = params.text.trim().split(/\s+/).filter(Boolean).length;
      const characters = params.text.length;
      const lines = params.text.split(/\r?\n/).length;
      return `Words: ${words}, Characters: ${characters}, Lines: ${lines}`;
    },
  };

  api.registerTool(wordCountTool);

  // ----------------------------------------------------------
  // 2) A SLASH COMMAND — something the USER types in the chat,
  //    like /demo-stats some text here. Commands are the human's
  //    "handles" on the session.
  // ----------------------------------------------------------
  api.registerCommand("demo-stats", {
    description: "Count words/characters/lines of the given text (demo command)",
    handler: async (args, ctx) => {
      if (!args.trim()) {
        // addMessage shows a message in the chat without triggering the AI.
        ctx.addMessage?.("system", "Usage: /demo-stats <some text>");
        return;
      }
      const words = args.trim().split(/\s+/).filter(Boolean).length;
      ctx.addMessage?.("system", `Your text has ${words} word(s) and ${args.length} character(s).`);
    },
  });

  // ----------------------------------------------------------
  // 3) A LIFECYCLE HOOK — code that runs automatically at a point
  //    in the session's life. This one appends a line to the AI's
  //    system prompt on every session start, so the AI knows the
  //    extension is active.
  // ----------------------------------------------------------
  api.on("session_start", async () => {
    // console.error (not console.log) so it goes to the log file
    // instead of interfering with the terminal UI.
    console.error("[demo-extension] activated — /demo-stats and word_count are available");
  });
}
