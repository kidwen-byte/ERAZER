<?php

namespace app\model\repositories;

use app\model\Repository;
use app\model\Model;
use app\model\entities\Product;

class ProductsRepository extends Repository
{
    public function getEntityClass()
    {
        return Product::class;
    }

    public function getTableName()
    {
        return "products";
    }

    protected function update(Model $entity) {
            return parent::update($entity);
    }

    public function getModels()
    {
        $sql = "SELECT * FROM models GROUP BY brand ORDER BY brand ASC";
        return $this->getDb()->queryAll($sql);
    }

    public function getAllProducts()
    {
        $sql = "SELECT * FROM products";
        return $this->getDb()->queryAll($sql);
    }

    public function getOneProducts($params)
    {
        $sql = "SELECT * FROM products WHERE id = {$params}";
        return $this->getDb()->queryAll($sql);
    }

    public function getSearch($params)
    {
        $sql = "SELECT * FROM products WHERE MATCH (name,description) AGAINST ('{$params}')";
        return $this->getDb()->queryAll($sql);
    }

    public function getFilter($params)
    {
        $sql = "SELECT * FROM products WHERE filter_id IN ({$params}, 0)";
        return $this->getDb()->queryAll($sql);
    }
}
