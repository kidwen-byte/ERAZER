<?php

namespace app\model\repositories;

use app\model\Repository;
use app\model\entities\Attributes;

class AttributesRepository extends Repository
{
    public function getEntityClass()
    {
        return Attributes::class;
    }

    public function getTableName()
    {
        return "attributes";
    }

    public function getAttributes($params)
    {
        $sql = "SELECT * FROM attributes WHERE models_id = {$params}";
        return $this->getDb()->queryAll($sql);
    }
}
