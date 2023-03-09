require('dotenv').config();
const Airtable = require('airtable');
let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_TABLE_NAME);

module.exports = () => {
  return new Promise((resolve, reject) => {
    let contents = [];
      base('Типы контента') // Таблица Типы контента (tblZMoZu25lDrhCIX)
        .select({ view: 'Grid view' }) // View 'Grid view'
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
                contents.push({
                "id" : record._rawJson.id,
                ...record._rawJson.fields
              });
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              reject(err)
            } else {
              resolve(contents.sort((a, b) => {
                return b.NumRecords - a.NumRecords
              }));
            }
          }
        );
      });
    };