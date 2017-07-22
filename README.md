# doctor-selector

A simple web app to browse doctors. User can select doctors by specialty, area and ratings. When user click one doctor, his/her detail information will show up, and also a list of similar doctors will be displayed. `Similar means same specialty and same location`.

Specialty list is from yelp api categories https://www.yelp.com/developers/documentation/v3/all_category_list
All doctor information are fetched through yelp fusion api

## Getting Started
Inside server.js, replace `process.env.yelp_access_token` with your own yelp access token. How to get yelp access token? Follow the instruction on https://www.yelp.com/developers/documentation/v3/authentication
```
client = yelp.client(process.env.yelp_access_token);
```
After setting up your yelp api access token, now we can start the App

You need to install npm and Node.js on your device

###Installing
```
npm install
npm run build
```
In another window, run
```
npm start
```

In your browser, type in `localhost:8080`, and you can test this app now.

## Future Improvement
More features and improve interface and user experience.
Refactor the code with following libraries
* [react-router 4](https://github.com/reacttraining/react-router)
* [redux](http://redux.js.org/)

## Acknowledgments
* [olalonde/node-yelp](https://github.com/olalonde/node-yelp)