import { expect, test } from '@playwright/test';

test('タイトルが表示されている', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('人口構成グラフ')).toBeVisible();
});
