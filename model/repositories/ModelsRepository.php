<?php

namespace app\model\repositories;

use app\model\Repository;
use app\model\entities\Models;

class ModelsRepository extends Repository
{
    public function getEntityClass()
    {
        return Models::class;
    }

    public function getTableName()
    {
        return "models";
    }

    public function getAllModels()
    {
        $sql = "SELECT * FROM models";
        return $this->getDb()->queryAll($sql);
    }
    public function getOneModels($params)
    {
        $sql = "SELECT * FROM models WHERE id = {$params}";
        return $this->getDb()->queryAll($sql);
    }

    public function getModels($params)
    {
        $sql = "SELECT * FROM models WHERE brand_id = {$params}";
        return $this->getDb()->queryAll($sql);
    }
}
