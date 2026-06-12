import { test, expect } from '@playwright/test';

test('Dream Portal Home Page Test', async ({ page, context }) => {

  // Open Home Page
  await page.goto('https://arjitnigam.github.io/myDreams/');
  
  // Wait for loading animation to finish
  await page.waitForTimeout(3500);
  
  // Verify My Dreams button is visible
  const myDreamsButton = page.getByRole('button', { name: /my dreams/i });

  await expect(myDreamsButton).toBeVisible();

  // Click button
  await myDreamsButton.click();

  // Wait for tabs to open
  await page.waitForTimeout(2000);

  // Verify 3 pages exist
  const pages = context.pages();

  expect(pages.length).toBe(3);

  const urls = pages.map(p => p.url());

  console.log(urls);

  expect(
    urls.some(url => url.includes('dreams-diary.html'))
  ).toBeTruthy();

  expect(
    urls.some(url => url.includes('dreams-total.html'))
  ).toBeTruthy();
});

test('Dream Diary Validation', async ({ page }) => {

  await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');

  const rows = page.locator('#dreamsDiary tbody tr');

  // Verify exactly 10 dream entries
  await expect(rows).toHaveCount(10);

  const count = await rows.count();

  for (let i = 0; i < count; i++) {

    const cells = rows.nth(i).locator('td');

    const dreamName = (await cells.nth(0).textContent())?.trim();
    const daysAgo = (await cells.nth(1).textContent())?.trim();
    const dreamType = (await cells.nth(2).textContent())?.trim();

    // Verify all columns have data
    expect(dreamName).not.toBe('');
    expect(daysAgo).not.toBe('');
    expect(dreamType).not.toBe('');

    // Verify Dream Type is Good or Bad
    expect(['Good', 'Bad']).toContain(dreamType!);
  }
});

test('Dream Summary Validation', async ({ page }) => {

  await page.goto('https://arjitnigam.github.io/myDreams/dreams-total.html');

  // Verify summary values are present
  await expect(page.locator('text=Good Dreams')).toBeVisible();
  await expect(page.locator('text=Bad Dreams')).toBeVisible();
  await expect(page.locator('text=Total Dreams')).toBeVisible();
  await expect(page.locator('text=Recurring Dreams')).toBeVisible();

  // Verify counts
  await expect(page.locator('text=6')).toBeVisible();
  await expect(page.locator('text=4')).toBeVisible();
  await expect(page.locator('text=10')).toBeVisible();
  await expect(page.locator('text=2')).toBeVisible();

});

test('Recurring Dreams Validation', async ({ page }) => {

  await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');

  const rows = page.locator('#dreamsDiary tbody tr');
  const count = await rows.count();

  let flyingCount = 0;
  let mazeCount = 0;

  for (let i = 0; i < count; i++) {

    const dreamName = (
      await rows.nth(i).locator('td').nth(0).textContent()
    )?.trim();

    if (dreamName === 'Flying over mountains') {
      flyingCount++;
    }

    if (dreamName === 'Lost in maze') {
      mazeCount++;
    }
  }

  expect(flyingCount).toBeGreaterThan(1);
  expect(mazeCount).toBeGreaterThan(1);
});