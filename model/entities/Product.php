<?php

namespace app\model\entities;

use app\model\Model;

class Product extends Model
{
    protected $id;
    protected $name;
    protected $description;
    protected $price;
    protected $image;
    protected $quantity_stock;
    protected $categories_id;
    protected $filter_id;

    protected $props = [
        'name' => false,
        'description' => false,
        'price' => false,
        'image' => false,
        'quantity_stock' => false,
        'categories_id' => false,
        'filter_id' => false
    ];


    public function __construct($name = null, $description = null, $price = null, $image = 'undefined.jpg', $quantity_stock = null, $categories_id = null, $filter_id= null)
    {
        $this->name = $name;
        $this->description = $description;
        $this->price = $price;
        $this->image = $image;
        $this->quantity_stock = $quantity_stock;
        $this->categories_id = $categories_id;
        $this->filter_id = $filter_id;
    }
}
