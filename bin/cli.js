#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import fetch from "node-fetch";

// -------- CLI Prompt --------
const answers = await inquirer.prompt([
  {
    type: "number",
    name: "commitsPerDay",
    message: "How many commits per day do you want?",
    default: 1
  },
  {
    type: "input",
    name: "commitTime",
    message: "Enter commit hour in 24h format (0-23, Bangladesh time):",
    default: "0"
  },
  {
    type: "confirm",
    name: "useAIQuote",
    message: "Do you want optional AI-generated quotes?",
    default: true
  },
  {
    type: "input",
    name: "branch",
    message: "Which branch do you want the auto commit on?",
    default: "main"
  }
]);

const { commitsPerDay, commitTime, useAIQuote, branch } = answers;


// -------- Random Messages --------
const baseMessages = [
  "💻 Coding hard",
  "🚀 Learning daily",
  "🔥 Building future",
  "🤖 Keep grinding",
  "📚 Practice makes perfect"
];

// -------- AI Quote Function --------
async function getAIQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    return `💡 ${data.content} — ${data.author}`;
  } catch (err) {
    return "💡 Keep pushing forward!"; 
  }
}

// -------- Prepare Messages --------
let messages = [...baseMessages];

if (useAIQuote) {
  const aiQuote = await getAIQuote();
  messages.push(aiQuote);
}

// -------- File Paths --------
const repoPath = process.cwd();
fs.ensureDirSync(path.join(repoPath, ".github/workflows"));

// -------- commit.yml --------
const cronTimeUTC = (parseInt(commitTime) - 6 + 24) % 24; 
const cronHour = cronTimeUTC;

const commitYml = `name: Daily Auto Commit

on:
  schedule:
    - cron: '0 ${cronHour} * * *'
  workflow_dispatch:

jobs:
  commit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Make multiple commits with random messages
        run: |
          MESSAGES=(${messages.map(m => `"${m}"`).join(" ")})
          for i in {1..${commitsPerDay}}
          do
            echo "Commit $i at $(date)" >> activity.txt
            git add activity.txt
            RANDOM_MSG=\${MESSAGES[$RANDOM % ${messages.length}]}
            git commit -m "\$RANDOM_MSG" || true
          done
          git push
`;

// -------- Write Files --------
fs.writeFileSync(path.join(repoPath, ".github/workflows/commit.yml"), commitYml);
fs.writeFileSync(path.join(repoPath, "activity.txt"), "Start\n");

console.log("✅ GitHub auto commit workflow setup complete!");
console.log("1. Commit and push these files");
console.log("2. Enable GitHub Actions read/write permissions");
console.log("3. Done, auto daily commit will run!");
console.log("4. AI-generated commit messages included!");
