require('dotenv').config();
const Airtable = require('airtable');
let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_TABLE_NAME);

module.exports = () => {
  return new Promise((resolve, reject) => {
    let owners = [];
      base('Тип владельца') // Таблица Тип владельца (tbl6hG0MpXDZc5E58)
        .select({ view: 'Grid view' }) // View 'Grid view'
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
                owners.push({
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
              resolve(owners.sort((a, b) => {
                return b.NumRecords - a.NumRecords
              }));
            }
          }
        );
      });
    };