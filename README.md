# WEB103 Project 4 - Bolt Bucket Customizer (No sneakers this time)

Submitted by: **Diana Gomez**

About this web app: **A car customizer where users personalize color, wheels, and engine, watch the price update live, and save/view/edit/delete their custom builds via a PostgreSQL-backed API.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API.**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomItem` table.**
  - [ ]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [ ]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **Users can view multiple features of the `CustomItem` (car) they can customize (color, wheels, engine)**
- [x] **Each customizable feature has multiple options to choose from**
- [x] **On selecting each option, the displayed visual icon for the `CustomItem` updates to match the option the user chose.** (color swatch updates live)
- [x] **The price of the `CustomItem` changes dynamically as different options are selected.**
- [x] **The visual interface changes in response to at least one customizable feature.**
- [x] **The user can submit their choices to save the item to the list of created `CustomItem`s.**
- [x] **If a user submits a feature combo that is impossible, they receive an appropriate error message and the item is not saved to the database.**
- [x] **Users can view a list of all submitted `CustomItem`s.**
- [x] **Users can edit a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [x] **Users can delete a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [ ] **Users can update or delete `CustomItem`s that have been created from the detail page.**

The following **optional** features are implemented:

- [ ] Selecting particular options prevents incompatible options from being selected even before form submission

The following **additional** features are implemented:

- [x] None beyond the required scope — focused on a clean, working core experience given time constraints

## Video Walkthrough

Here's a walkthrough of implemented required features:
https://imgur.com/a/syM5adC<img width="1179" height="987" alt="custom-cars" src="https://github.com/user-attachments/assets/b2202516-19fd-4ca1-8476-6a9151abf9f2" />


GIF created with ScreenToGif

## Notes

Update/delete was implemented via the list view rather than the detail page — the assignment allows either (detail page OR list view), so this satisfies the requirement. Main technical challenges: dotenv not loading in standalone scripts like reset.js (fixed by explicitly importing 'dotenv/config'), and an EADDRINUSE error from a leftover node process after a crash (resolved with taskkill). Used the external Render hostname for local development to avoid ENOTFOUND connection errors.

## License

Copyright 2026 Diana Gomez

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
