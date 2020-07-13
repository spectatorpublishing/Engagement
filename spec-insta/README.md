# Spec Insta 

This app displays articles for the bio link on Spectator's Instagram account. The articles and respective images are stored in a Google Sheet accessed by an API call using the Tabletop package. 

To change an article, simply copy the FULL URL and put it into the `link` field. To add the article's image, right click the headline image in the article and open it in a new tab. Copy the FULL URL for the image (should be an aws public folder) into the `imageurl` field to the right of the article URL. 

To add more articles, simply repeat the process to add one article but in the next available cells below.

Note: There is a date field that is not used at the time of this writing. However, it might be useful to update the UI in the future, so I recommend keeping it up-to-date.

## Connecting A Google Sheet

[Tabletop.js](https://www.npmjs.com/package/tabletop) is a node package that provides a simple API to connect a Google Sheet to a React app.

In the event that the current Google Sheet becomes unusable, just follow the steps to add a new one to the project and the app should be back online.

This [medium post](https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59) has the tutorial I followed to set it up, but I will repeat the steps here.

### Step 1

In the Google Sheet, open the "File" menu and click "Publish to web".

Towards the bottom select Start publishing. *The default setting will export the entire document. You can select a specific tab to export if needed. Tabletop will also by default only grab your first tab if you have multiple. The Tabletop docs have info on grabbing specific tabs.

See image: https://miro.medium.com/max/1400/1*BiXZFRl1HpHPtkrN2N2kfQ.png

### Step 2

Save your spreadsheet key. From the URL, your spreadsheet key will be located here: /spreadsheets/d/**KEY**/edit#gid=0

### Step 3

Update the React app with the key. Tabletop takes the key as a parameter and returns the sheets data in a callback function. App.js `state` is updated inside the callback to supply it with the sheet data. If the first two steps were properly followed, then just adding the key should automatically update this app with the right Google Sheet.

```javascript
const KEY_1 = '1iQjvIWgwD4OWgXZ1X3OdDBtJHpr-ku6ajFp8LrxQWkA';

componentDidMount() {
    // Load the Google Sheets Data
    Tabletop.init({
      key: KEY_1,
      callback: googleData => {
        console.log('google sheet data --->', googleData)
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
}
```

## Deployment

This app is deployed with Github Pages. The `gh-pages` package is one of the constituent modules and there are scripts in `package.json` that enable deployment. 

When an update is ready, merge or push to the master branch. Then, run `npm run deploy`. This will run the appropriate scripts and deploy the site to https://spectatorpublishing.github.io/Engagement/. This url is supplied as the homepage in `package.json`. If there's a mismatch, the page will not load.

## Misc.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

