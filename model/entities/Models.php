<?php

namespace app\model\entities;

use app\model\Model;

class Models extends Model
{
    protected $id;
    protected $name;
    protected $brand_id;

    protected $props = [
        'name' => false,
        'brand_id' => false,
    ];

    public function __construct($name = null, $brand_id = null)
    {
        $this->name = $name;
        $this->brand_id = $brand_id;
    }
}
