

require('dotenv').config();
const Airtable = require('airtable');
let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_TABLE_NAME);

module.exports = () => {
  return new Promise((resolve, reject) => {
    let allDatasets = [];
      base('Каталог каталогов') // Таблица Каталог каталогов
        .select({ view: 'Grid view' }) // View 'Grid view'
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
              allDatasets.push({
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
              resolve(allDatasets);
            }
          }
        );
      });
    };

  