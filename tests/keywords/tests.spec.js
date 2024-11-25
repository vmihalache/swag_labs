const { test } = require('@playwright/test')
const {dataKeywords} = require('./keywords') 
// test('Complete a Succesfull login', async ({ page }) => {
//   const dataKeyword = new dataKeywords(page)
//   await dataKeyword.successfullLogin();
//   })
// test('Complete an Unsuccesfull login', async ({ page }) => {
//   const dataKeyword = new dataKeywords(page)
//   await dataKeyword.unsucessfullLogin();

//   })
test('The Product Page is Functional', async({page}) => {
  const dataKeyword = new dataKeywords(page)
  await dataKeyword.checkSingleProductFlow()
})
