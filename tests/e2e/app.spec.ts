import { expect, test } from '@playwright/test';

test('タイトルが表示されている', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('人口構成グラフ')).toBeVisible();
});

test.describe('グラフに関するテスト', () => {
  test('チェックボックスをチェックしていないとき(初期表示時)は「表示するデータが存在しません」と表示される', async ({
    page,
  }) => {
    await page.goto('/');
    await expect(page.getByText('表示するデータが存在しません')).toBeVisible();
  });

  test('チェックボックスを１つでも選択すると、グラフが表示されること', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('北海道').check();

    await expect(page.getByLabel('北海道')).toBeChecked();
    await expect(page.locator('.recharts-wrapper')).toBeVisible();
  });
});
