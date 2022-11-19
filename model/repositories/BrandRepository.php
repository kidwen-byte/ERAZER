<?php

namespace app\model\repositories;

use app\model\Repository;
use app\model\entities\Brand;

class BrandRepository extends Repository
{
    public function getEntityClass()
    {
        return Brand::class;
    }

    public function getTableName()
    {
        return "brand";
    }

    public function getBrand()
    {
        $sql = "SELECT * FROM brand";
        return $this->getDb()->queryAll($sql);
    }
}
