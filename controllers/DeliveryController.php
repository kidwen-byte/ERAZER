<?php

namespace app\controllers;

class DeliveryController extends Controller
{
    public function actionIndex()
    {
        echo $this->render('delivery', ['page_size' => \App::getConfig('pageSize')]);
    }
}
