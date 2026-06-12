import { test, expect } from '@playwright/test';

test('AI Classification Validation', async ({ page }) => {

  await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');

  const rows = page.locator('#dreamsDiary tbody tr');
  const count = await rows.count();

  function classifyDream(dream: string): string {

    const badWords = [
      'monster',
      'maze',
      'falling',
      'chased',
      'dark',
      'late',
      'exam'
];

    const lower = dream.toLowerCase();

    for (const word of badWords) {
      if (lower.includes(word)) {
        return 'Bad';
      }
    }

    return 'Good';
  }

  for (let i = 0; i < count; i++) {

    const dreamName = (
      await rows.nth(i).locator('td').nth(0).textContent()
    )?.trim();

    const tableType = (
      await rows.nth(i).locator('td').nth(2).textContent()
    )?.trim();

    const aiPrediction = classifyDream(dreamName!);

    console.log(
      `Dream: ${dreamName} | AI: ${aiPrediction} | Table: ${tableType}`
    );

    expect(aiPrediction).toBe(tableType);
  }
});