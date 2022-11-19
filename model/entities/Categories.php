<?php

namespace app\model\entities;

use app\model\Model;

class Categories extends Model
{
    protected $id;
    protected $name;

    protected $props = [
            'name' => false
    ];

    public function __construct($name = null)
    {
        $this->name = $name;
    }


}