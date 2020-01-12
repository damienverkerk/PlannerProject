# planner-app

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD3FsBEudnBvKjcJ9WGaHocoGsFUrFnDUA",
    authDomain: "planning-2f9f7.firebaseapp.com",
    databaseURL: "https://planning-2f9f7.firebaseio.com",
    projectId: "planning-2f9f7",
    storageBucket: "planning-2f9f7.appspot.com",
    messagingSenderId: "180300624612",
    appId: "1:180300624612:web:ba3670b28da311efa672f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
