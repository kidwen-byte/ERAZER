<?php

namespace app\model\repositories;

use app\model\Repository;
use app\model\entities\Categories;

class CategoriesRepository extends Repository
{
    public function getEntityClass()
    {
        return Categories::class;
    }

    public function getTableName()
    {
        return "categories";
    }

    public function getCategories()
    {
        $sql = "SELECT * FROM categories";
        return $this->getDb()->queryAll($sql);
    }
}
