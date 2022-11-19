<?php

namespace app\model\entities;

use app\model\Model;

class Attributes extends Model
{
    protected $id;
    protected $models_id;
    protected $volume;
    protected $filter_id;
    

    protected $props = [
            'models_id' => false,
            'volume' => false,
            'filter_id' => false,
    ];

    public function __construct($models_id = null, $volume = null, $filter_id = null)
    {
        $this->models_id = $models_id;
        $this->volume = $volume;
        $this->filter_id = $filter_id;
    }

}
