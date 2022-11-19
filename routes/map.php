<?php

//Route::get('/', 'SimplePage.Index');
Route::get('/', 'Filteres.Index');
Route::post('/getModels', 'Filteres.Models');
Route::post('/getAttributes', 'Filteres.Attributes');
Route::post('/getResult', 'Filteres.Result');

Route::post('/api/products/getItems', 'Product.ApiDynamicList');
Route::post('/api/products/getItems/{id}', 'Product.ApiDynamicListCat');
Route::get('/catalog', 'Product.Index');
Route::get('/catalog/{id}', 'Product.Card');
Route::post('/api/news/getItems', 'News.ApiDynamicList');
Route::get('/delivery', 'Delivery.Index');
//Route::get('/news/{id}','News.Card');
Route::match(['POST', 'GET'], '/login', 'Auth.Login');
Route::match(['POST', 'GET'], '/profile', 'Auth.Profile');
Route::post('/register', 'Auth.Register');

Route::get('/register', 'Auth.Login');
Route::post('/api/feedback/{action}', 'Feedback.Api');
Route::get('/feedback', 'Feedback.Index');
Route::match(['POST', 'GET'], '/cart', 'Cart.Index');
Route::post('/api/cart/{action}', 'Cart.Api');

Route::get('/admin', 'Admin.Index');
Route::get('/admin/orders', 'Admin.Orders');
Route::get('/admin/models', 'Admin.Models');
Route::get('/admin/models/edit/{id}', 'Admin.EditModels');
Route::post('/admin/models/update', 'Admin.UpdateModels');
Route::get('/admin/products', 'Admin.Products');
Route::get('/admin/products/edit/{id}', 'Admin.EditProducts');
Route::post('/admin/products/update', 'Admin.UpdateProducts');

Route::post('/api/orderList/{partOrders}/getItems', 'Shop.ApiOrdersList');
Route::get('/order/{uId}', 'Shop.OrderInfo');
Route::post('/api/order/chageStatus', 'Shop.ChangeStatus');

Route::get('/search', 'Search.Index');
Route::post('/search', 'Search.Search');