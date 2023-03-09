require('dotenv').config();
const Airtable = require('airtable');
let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_TABLE_NAME);

module.exports = () => {
  return new Promise((resolve, reject) => {
    let topics = []; 
      base('Темы') // Таблица Темы(tbllv6J9g251emjeq)
        .select({ view: 'Grid view' }) // View 'Grid view'
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
              topics.push({
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
              resolve(topics.sort((a, b) => {
                return b.NumRecords - a.NumRecords
              }));
            }
          }
        );
      });
    };