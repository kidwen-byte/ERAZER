<?php

namespace app\controllers;

class AdminController extends Controller
{

    public function actionIndex()
    {
        if (\Auth::isAdmin()) {
            echo $this->render('admin', [
                'page_size' => \App::getConfig('pageSize'),
            ]);
        } else {
            echo $this->render('accessDenited', []);
        }
    }

    public function actionOrders()
    {
        if (\Auth::isAdmin()) {
            echo $this->render('orders', [
                'page_size' => \App::getConfig('pageSize'),
                'partOrders' => 'all'
            ]);
        } else {
            echo $this->render('accessDenited', []);
        }
    }

    public function actionModels()
    {
        $models = \Models::getAllModels();
        if (\Auth::isAdmin()) {
            echo $this->render('models', [
                'page_size' => \App::getConfig('pageSize'),
                'models' => $models
            ]);
        } else {
            echo $this->render('accessDenited', []);
        }
    }

    public function actionEditModels($params)
    {
        $models = \Models::getOneModels($params['id']);
        $brands = \brand::getBrand();
        if (\Auth::isAdmin()) {
            echo $this->render('edit', [
                'page_size' => \App::getConfig('pageSize'),
                'brands' => $brands,
                'models' => $models
            ]);
        } else {
            echo $this->render('accessDenited', []);
        }
    }

    public function actionUpdateModels($params)
    {
        $models = \Models::where('id', $params['id'])->first();

        if (\Auth::isAdmin()) {
            $models->name = $params['name'];
            $models->brand_id = $params['brand_id'];

            \Models::save($models);

            if (\Models::save($models) == true) {
                $answer = ['result' => 'Модель изменена!'];
            } else {
                $answer = ['result' => 'Что-то пошло не так, не удалось изменить модель!'];
            };
            echo json_encode($answer, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        } else {
            echo $this->render('accessDenited', []);
        }
    }

    public function actionProducts()
    {
        $products = \Products::getAllProducts();
        if (\Auth::isAdmin()) {
            echo $this->render('products', [
                'page_size' => \App::getConfig('pageSize'),
                'products' => $products
            ]);
        } else {
            echo $this->render('accessDenited', []);
        }
    }

    public function actionEditProducts($params)
    {
        $products = \Products::getOneProducts($params['id']);
        $categories = \Categories::getCategories();
        $models = \Models::getAllModels();
        if (\Auth::isAdmin()) {
            echo $this->render('edit', [
                'page_size' => \App::getConfig('pageSize'),
                'products' => $products,
                'categories' => $categories,
                'models' => $models
            ]);
        } else {
            echo $this->render('accessDenited', []);
        }
    }

    public function actionUpdateProducts($params)
    {
        $products = \Products::where('id', $params['id'])->first();

        if (\Auth::isAdmin()) {
            $products->name = $params['name'];
            $products->description = $params['description'];
            $products->price = $params['price'];
            $products->quantity_stock = $params['quantity_stock'];
            $products->categories_id = $params['categories_id'];
            $products->filter_id = $params['filter_id'];
            \Products::save($products);
            if (\Products::save($products) == true) {
                $answer = ['result' => 'Товар изменен!'];
            } else {
                $answer = ['result' => 'Что-то пошло не так, не удалось изменить товар!'];
            };
            echo json_encode($answer, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        } else {
            echo $this->render('accessDenited', []);
        }
    }
}
