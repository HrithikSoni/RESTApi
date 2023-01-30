# RESTApi

This is an API that I created using node.js, express, and MongoDB.

This API  has sorting, selecting, filtering, pagination, and limit of results on page functionality.

You can access the API using this URL.
URL: restapi-production-ac84.up.railway.app


After going to url you will be redirected to the home page which shows HI! I am Live, to access the data of API you can type /api/products after the URL and get data in JSON form.

To Sort the data you can add /api/products?sort=name or you can also sort it by price using /api/products?sort=-price (this will give pricing in descending form, for ascending from you can remove - from the price).

To Select data, you can use /api/products?select=name .

To see only some results on a page you can use limit to the page by /api/products?limit=9 .
