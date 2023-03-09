# What it is

Repository of the Russian and Russia-related open data catalog SSG website

[SSG](https://en.wikipedia.org/wiki/Static_site_generator#:~:text=Static%20site%20generators%20(SSGs)%20are,content%20delivery%20networks%20(CDNs).) based on [11ty](https://www.11ty.dev/) engine with [Airtable](https://airtable.com) as backend.

Project made specifically for datacatalogs.ru so it might not work with your Airtable tables. Still you might use it as reference.

# How to run

1. Install dependencies
``` npm i ```

2. Add _.env_ to root folder, it shoud have your AIRTABLE_API_KEY and AIRTABLE_TABLE_NAME

3. Run local web server
``` npm run dev ```


# How to contribute

Checkout branch from main

Read 11ty documentation and edit files in *_src* directory

Test your features and code

# How to deploy

You'll need server that can run Node.14 v14 or higher, build process might require up to 4Gb of RAM.

