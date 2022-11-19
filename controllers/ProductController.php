<?php

namespace app\controllers;

use app\model\Products;

class ProductController extends Controller
{

    public function actionIndex() {
        echo $this->render('catalog', ['page_size' => \App::getConfig('pageSize')]);
    }

    public function actionCard($params) {
        echo $this->actionByIdCard('\Products', 'card', $params, ['groupId' => $params['id'], 'categoryFeedback' => 'product']);
    }
    public function actionApiDynamicList( $params) {
        $query = \Products::orderBy('price');
        echo $this->getJSONDynamicList($query, $params);
    }

    public function actionCategory($params) {
        echo $this->render('catalog', ['page_size' => \App::getConfig('pageSize')]);

    }
    public function actionApiDynamicListCat($params) {
        $query = \Products::where('categories_id', $params['id'])->orderBy('price');
        echo $this->getJSONDynamicList($query, $params);
    }
}