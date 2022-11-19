<?php

namespace app\controllers;

class FilteresController extends Controller
{
    public function actionIndex()
    {
        $brand = \Brand::getBrand();
        echo $this->render('index', [
            'page_size' => \App::getConfig('pageSize'),
            'brand' => $brand
        ]);
    }

    public function actionModels($params)
    {
        $model = \Models::getModels($params['id']);
        echo json_encode($model, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }

    public function actionAttributes($params)
    {
        $attributes = \Attributes::getAttributes($params['id']);
        echo json_encode($attributes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }

    public function actionResult($params)
    {
        $result = \Products::getFilter($params['id']);
  /*       var_dump($params['id']); */
        echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    } 
}
