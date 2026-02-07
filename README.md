START
  |
  v
[Step 1: GitHub Repo Ready?]
  - create new GitHub repo  or use existing repo 
  - branch ready  (main or another)
  |
  v
[Step 2: Run CLI]
  - Terminal/PowerShell/Command Prompt:
      npx ripon-auto-commit
  - Interactive prompts:
      1️⃣ How many commits per day?
      2️⃣ Commit hour (0-23, Bangladesh time)
      3️⃣ Optional AI-generated commit messages? (Yes/No)
      4️⃣ Branch to push commits to
  |
  v
[Step 3: Workflow Setup]
  - CLI automatically:
      - Creates `.github/workflows/commit.yml`
      - Creates `activity.txt`
      - Sets commit schedule & branch
  |
  v
[Step 4: Enable GitHub Actions Permissions]
  - Go to Repo → Settings → Actions → General → Workflow permissions
  - Select: ✅ "Read and write permissions"
  - Save changes
  |
  v
[Step 5: Daily Commits Start]
  - GitHub Actions will:
      - Commit to selected branch daily
      - Use AI-generated messages (optional)
      - Track in activity.txt
  |
  v
[Step 6: Verify]
  - Go to GitHub → Actions tab → check workflow runs
  - Check commit history in selected branch
  |
  v
[OPTIONAL: Modify Settings]
  - Edit `.github/workflows/commit.yml` for:
      - Commit hour
      - Branch
      - Frequency
  - Run CLI again for new repo/settings
  |
  v
END
