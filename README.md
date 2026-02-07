#  Ripon Auto Commit

Automatically makes daily commits to your GitHub repository to keep your streak alive!  
Supports **multiple commits per day**, **custom branch**, and **optional AI-generated commit messages**.

---

## 📦 Installation

No installation required! Run directly with **npx**:

```bash
npx ripon-auto-commit


🛠 Features

✅ Daily auto commits

✅ Multiple commits per day

✅ Custom commit hour

✅ Optional AI-generated quotes for commit messages

✅ Branch selection for commits

✅ Public & ready to use with npx


⚙️ CLI Usage

When you run:

npx ripon-auto-commit


You will be prompted for:

Number of commits per day
Example: 2

Commit hour (0-23, Bangladesh time)
Example: 20 for 8 PM

Optional AI-generated quotes
Example: Yes or No

Branch to commit to
Example: main or dev

After finishing, the workflow will automatically:

Update activity.txt with the commit timestamp

Push commits to your chosen branch daily

📂 Files Created

.github/workflows/commit.yml → GitHub Actions workflow

activity.txt → keeps track of commits

📝 Notes

Make sure GitHub Actions Read/Write permissions are enabled for the repository

You can change the workflow later if needed

Fully public, anyone can run using npx ripon-auto-commit

💡 Example
npx ripon-auto-commit
? How many commits per day do you want? 2
? Enter commit hour in 24h format (0-23, Bangladesh time): 20
? Do you want optional AI-generated quotes? Yes
? Which branch should commits be pushed to? main
✅ GitHub auto commit workflow setup complete!