<?php

use SugarApi;
use SugarApiExceptionNotAuthorized;

class DemoAnnouncementApi extends SugarApi
{
    public function registerApiRest()
    {
        return [
            'getData' => [
                'reqType' => 'GET',
                'path' => ['demo_announcement', 'data'],
                'pathVars' => ['', ''],
                'method' => 'getDataMethod',
                'shortHelp' => 'Get custom data',
            ],
        ];
    }

    public function getDataMethod($api, $args)
    {
        
        if (!ACLController::checkAccess('demo_announcement', 'view', true)) {
            throw new SugarApiExceptionNotAuthorized('No access');
        }

        global $db;
        $querySQL = "select first_name from leads where id = '00000910-8bc1-11ed-aaee-0a1db36945e2'";
        $result = $db->query($querySQL);
        $row = $db->fetchByAssoc($result);
        return [
            'message' => 'API working',
            'data' => $row,
        ];
    }
}