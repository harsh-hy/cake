import fs from 'fs';
import { execSync } from 'child_process';

const months = ['Sep', 'Oct', 'Nov'];

for (let i = 1; i <= 59; i++) {
  // Limit to a maximum of 3 commits per day
  const numCommits = Math.min(Math.floor(Math.random() * 6) + 1, 3);

  for (let j = 0; j < numCommits; j++) {
    const month = months[Math.floor(Math.random() * months.length)];
    const day = i;
    const date = `${month} ${day}, 2024`; // Date format for commit
    const commitMessage = 'latest commit';
    
    // Write to file
    const commitText = `${day} days ago\n`;
    fs.appendFileSync('file.txt', commitText);

    // Execute git commands
    execSync(`git add .`);
    execSync(`git commit --date="${date}" -m "${commitMessage}"`);
  }
}

// Push changes to remote repository
execSync('git push -u origin main');
