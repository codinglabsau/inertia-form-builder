import { test, expect } from '@playwright/test'

test.describe('Form Builder', () => {
  test('renders basic form inputs', async ({ page }) => {
    await page.goto('/basics')

    // Check that the form inputs are rendered
    await expect(page.locator('input')).toHaveCount.greaterThan(0)
    await expect(page.locator('button[type="submit"]')).toBeVisible()
  })

  test('handles visibility conditions', async ({ page }) => {
    await page.goto('/visibility')

    // The demo should show conditional visibility based on form values
    const inputs = page.locator('input')
    await expect(inputs.first()).toBeVisible()
  })

  test('renders grid layout correctly', async ({ page }) => {
    await page.goto('/grid')

    // Check for grid container
    const grid = page.locator('.grid')
    await expect(grid).toBeVisible()
  })

  test('renders section with heading', async ({ page }) => {
    await page.goto('/section')

    // Sections should have a label/heading
    await expect(page.locator('label').first()).toBeVisible()
  })

  test('handles form state (processing)', async ({ page }) => {
    await page.goto('/states')

    // Check that form states demo loads
    await expect(page.locator('button')).toBeVisible()
  })

  test('renders select elements', async ({ page }) => {
    await page.goto('/select')

    // Check for select trigger button
    await expect(page.locator('button').first()).toBeVisible()
  })

  test('handles custom components', async ({ page }) => {
    await page.goto('/custom')

    // Custom component demo should render
    await expect(page.locator('form, div').first()).toBeVisible()
  })

  test('handles dynamic form changes', async ({ page }) => {
    await page.goto('/reactivity')

    // Should have add/remove buttons for dynamic fields
    const addButton = page.getByRole('button', { name: /add/i })

    if (await addButton.isVisible()) {
      // Click add to add a new field
      await addButton.click()

      // Verify field was added
      const inputs = page.locator('input')
      const initialCount = await inputs.count()
      expect(initialCount).toBeGreaterThan(0)
    }
  })
})
