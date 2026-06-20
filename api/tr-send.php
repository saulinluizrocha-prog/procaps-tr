<?php

error_reporting(0);
ini_set('display_errors', '0');

$success = 0;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Unique for your affiliate account
    $api_key = '185bc954642a73cdb0d9b8508d22fd7a';

    // Unique for each offer
    $offerId = '430';

    // Customer information
    $name         = isset($_POST['name'])         ? trim((string) $_POST['name'])         : '';
    $phone        = isset($_POST['phone'])        ? trim((string) $_POST['phone'])        : '';
    $country_code = isset($_POST['country_code']) ? trim((string) $_POST['country_code']) : 'TR';

    // Revalidate and normalize phone in PHP (Turkish GEO)
    $cleanedPhone = preg_replace('/\D/', '', $phone);
    
    // Stripping potential double prefixes or local zeroes
    if (strpos($cleanedPhone, '0090') === 0) {
        $cleanedPhone = substr($cleanedPhone, 4);
    } elseif (strpos($cleanedPhone, '90') === 0) {
        $cleanedPhone = substr($cleanedPhone, 2);
    } elseif (strpos($cleanedPhone, '0') === 0) {
        $cleanedPhone = substr($cleanedPhone, 1);
    }

    // After stripping, it must be 10 digits (starts with 5 for Turkish mobile)
    if (strlen($cleanedPhone) === 10 && strpos($cleanedPhone, '5') === 0) {
        $phoneToSend = '90' . $cleanedPhone;
    } elseif (strlen($cleanedPhone) === 10) {
        $phoneToSend = '90' . $cleanedPhone;
    } elseif (strlen($cleanedPhone) === 9) {
        $phoneToSend = '90' . $cleanedPhone;
    } else {
        // Fallback: use cleaned phone or original value if completely off
        $phoneToSend = !empty($cleanedPhone) ? $cleanedPhone : $phone;
    }

    // Capture tracking and query params
    $tracking = [];
    $trackingParams = ['sub_1', 'sub_2', 'sub_3', 'sub_4', 'sub_5', 'utm_campaign', 'utm_source', 'utm_medium', 'utm_term', 'utm_content', 'gclid'];
    
    foreach ($trackingParams as $param) {
        $tracking[$param] = isset($_POST[$param]) ? (string) $_POST[$param] : (isset($_GET[$param]) ? (string) $_GET[$param] : '');
    }

    try {
        if ($name && $phoneToSend) {
            $curl = curl_init();

            $postFields = [
                'api_key'       => $api_key,
                'name'          => $name,
                'phone'         => $phoneToSend,
                'offer_id'      => $offerId,
                'country_code'  => $country_code,
                'base_url'      => $_SERVER['HTTP_REFERER'] ?? "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
                'referrer'      => $_SERVER['HTTP_REFERER'] ?? "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
                'user_ip'       => $_SERVER['REMOTE_ADDR'] ?? '',
                'sub_1'         => $tracking['sub_1'],
                'sub_2'         => $tracking['sub_2'],
                'sub_3'         => $tracking['sub_3'],
                'sub_4'         => $tracking['sub_4'],
                'sub_5'         => $tracking['sub_5'],
                'utm_campaign'  => $tracking['utm_campaign'],
                'utm_source'    => $tracking['utm_source'],
                'utm_medium'    => $tracking['utm_medium'],
                'utm_term'      => $tracking['utm_term'],
                'utm_content'   => $tracking['utm_content'],
                'gclid'         => $tracking['gclid'],
            ];

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://api.monadlead.com/api/v1/orders/create/',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 25,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode($postFields),
                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/json',
                ),
            ));

            $response = curl_exec($curl);
            
            if (PHP_VERSION_ID < 80000 && is_resource($curl)) {
                curl_close($curl);
            }
        }
    } catch (Exception $e) {
        // Silent catch to prevent crash and ensure redirect
    }

    // Build success redirect query string with tracking parameters
    $redirectParams = [
        'name'  => $name,
        'phone' => $phoneToSend,
    ];
    foreach ($tracking as $param => $val) {
        if (!empty($val)) {
            $redirectParams[$param] = $val;
        }
    }
    
    $queryString = http_build_query($redirectParams);
    
    header("Location: /tr-success.html?{$queryString}");
    die('');
} else {
    // If accessed directly without POST, redirect to main page
    header("Location: /tr/");
    die('');
}
