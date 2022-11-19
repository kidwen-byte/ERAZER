<?php

namespace app\controllers;

class SearchController extends Controller
{
    public function actionIndex()
    {
        echo $this->render('search', ['page_size' => \App::getConfig('pageSize')]);
    }

    public function actionSearch($params)
    {
        $search = $params['search'];

        $item = \Products::getSearch($search);
        $message = [
            'error' => "По вашему запросу {$search} ничего не найдено",
            'success' => "Результаты запроса: {$search}"
        ];
        echo $this->render('search', array_merge([
            'item' => $item,
            'message' => $message
        ]));
    }
}
