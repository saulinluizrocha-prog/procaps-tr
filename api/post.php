<?php

// Response message
$success = 0;

if ($_POST) {

    // Unique for your affiliate account
    $api_key = '185bc954642a73cdb0d9b8508d22fd7a';

    // Unique for each offer
    $offerId = '430';

    // Customer information - Sent via 'form' on the landing page
    $name         = isset($_POST['name'])         ? (string) $_POST['name']         : '';
    $phone        = isset($_POST['phone'])        ? (string) $_POST['phone']        : '';
    $country_code = isset($_POST['country_code']) ? (string) $_POST['country_code'] : '';

    // Tracking - Added to the URL query params on landing page
    // Example https://domain.com/index.php?sub_1=YOUR_SUB1&sub_2=YOUR_SUB2
    $tracking['sub_1']         = isset($_GET['sub_1'])         ? (string) $_GET['sub_1']        : '';
    $tracking['sub_2']         = isset($_GET['sub_2'])         ? (string) $_GET['sub_2']        : '';
    $tracking['sub_3']         = isset($_GET['sub_3'])         ? (string) $_GET['sub_3']        : '';
    $tracking['sub_4']         = isset($_GET['sub_4'])         ? (string) $_GET['sub_4']        : '';
    $tracking['sub_5']         = isset($_GET['sub_5'])         ? (string) $_GET['sub_5']        : '';
    $tracking['utm_campaign']  = isset($_GET['utm_campaign'])  ? (string) $_GET['utm_campaign'] : '';
    $tracking['utm_source']    = isset($_GET['utm_source'])    ? (string) $_GET['utm_source']   : '';
    $tracking['utm_medium']    = isset($_GET['utm_medium'])    ? (string) $_GET['utm_medium']   : '';
    $tracking['utm_term']      = isset($_GET['utm_term'])      ? (string) $_GET['utm_term']     : '';
    $tracking['utm_content']   = isset($_GET['utm_content'])   ? (string) $_GET['utm_content']  : '';

    /**
     * 
     * For tracking params to work you have to add them in your '<form>' element in the form of '<input type="hidden">'
     * 
     * EXAMPLE:
     * 
     * PHP 7.0 and newer
     * <input type="hidden" name="TRACKING_PARAM_NAME" value="<?= $_GET['TRACKING_PARAM_NAME'] ?? '' ?>" >
     * 
     * Older than PHP 7.0
     * <input type="hidden" name="TRACKING_PARAM_NAME" value="<?= isset($_GET['TRACKING_PARAM_NAME']) ? $_GET['TRACKING_PARAM_NAME'] : '' ?>" >
     * 
     * 
     * TRACKING_PARAM_NAME -> sub_1,sub_2,sub_3...
     * 
     */

    try {

        // Mandatory params validation
        if (!$name || !$phone) {
            throw new Exception('Params not passed correctly');
        }

        $curl = curl_init();

        $postFields = [
            'api_key'       => $api_key,
            'name'          => $name,
            'phone'         => $phone,
            'offer_id'      => $offerId,
            'country_code'  => $country_code,
            'base_url'      => $_SERVER['HTTP_REFERER'] ?? "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
            'referrer'      => $_SERVER['HTTP_REFERER'] ?? "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'],
            'user_ip'       => $_SERVER['REMOTE_ADDR'],
            'sub_1'         => $tracking['sub_1'],
            'sub_2'         => $tracking['sub_2'],
            'sub_3'         => $tracking['sub_3'],
            'sub_4'         => $tracking['sub_4'],
            'utm_campaign'  => $tracking['utm_campaign'],
            'utm_source'    => $tracking['utm_source'],
            'utm_medium'    => $tracking['utm_medium'],
            'utm_term'      => $tracking['utm_term'],
            'utm_content'   => $tracking['utm_content'],
        ];

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api.monadlead.com/api/v1/orders/create/',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => json_encode($postFields),
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
            ),
        ));

        $response = curl_exec($curl);
        $responseRaw    = curl_getinfo($curl);
        $httpStatusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        curl_close($curl);

        // Decode json to array
        $responseArray = json_decode($response, true);

        // Ako je success
        if ($httpStatusCode == 200 && $responseArray['type'] == 'success') {

            // Set success to 1
            $success = 1;

            // Create required params for success page
            $successParams = [];
            $successParams['name']        = $name;
            $successParams['phone']       = $phone;


            $successQuerry = '';

            foreach ($successParams as $attribute => $value) {
                $successQuerry .= "&{$attribute}={$value}";
            }

            // Redirect
            header("Location: ?success=1{$successQuerry}");
            die('');
        }

        // Throw error
        throw new Exception('Error');
    } catch (Exception $e) {

        // Set success to 0
        $success = 0;

        header("Location: ?success=0");
        die('');
    }
}

// Get success from url
$success      = isset($_GET['success'])     ? (int) $_GET['success']        : 0;
$name         = isset($_GET['name'])        ? (string) $_GET['name']        : '';
$phone        = isset($_GET['phone'])       ? (string) $_GET['phone']       : '';

$displaySuccessPage = $success && $name ? true : false;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="data:image/x-icon" type="image/x-icon">

    <title>Send order</title>

</head>

<body>
    <div class="mod success-page">
        <div class="container">
            <?php if ($displaySuccessPage) : ?>
                <h2 class="success-page__title">Order created successfully</h2>
                <p class="success-page__message_success">Our operator will contact you by phone call soon.</p>
                <h3 class="success-page__text">Check your personal information once again, to be sure that there are no mistakes.</h3>

                <div class="list-info">
                    <ul class="list-info__list">
                        <li class="list-info__item">
                            <span class="list-info__text">Your name:</span> <?= htmlspecialchars($name) ?>
                        </li>
                        <li class="list-info__item">
                            <span class="list-info__text">Your phone:</span> <?= htmlspecialchars($phone) ?>
                        </li>
                    </ul>
                </div>

            <?php else : ?> <h2 class="success-page__title">Something went wrong</h2> <?php endif; ?>
        </div>
    </div>


    <!-- Page styles -->
    <style>
        html {
            font-family: sans-serif;
            line-height: 1.15;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        body {
            margin: 0;
        }

        article,
        aside,
        footer,
        header,
        nav,
        section {
            display: block;
        }

        h1 {
            font-size: 2em;
            margin: 0.67em 0;
        }

        figcaption,
        figure,
        main {
            display: block;
        }

        figure {
            margin: 1em 40px;
        }

        hr {
            box-sizing: content-box;
            height: 0;
            overflow: visible;
        }

        pre {
            font-family: monospace, monospace;
            font-size: 1em;
        }

        a {
            background-color: transparent;
            -webkit-text-decoration-skip: objects;
        }

        a:active,
        a:hover {
            outline-width: 0;
        }

        abbr[title] {
            border-bottom: none;
            text-decoration: underline;
            text-decoration: underline dotted;
        }

        b,
        strong {
            font-weight: inherit;
        }

        b,
        strong {
            font-weight: bolder;
        }

        code,
        kbd,
        samp {
            font-family: monospace, monospace;
            font-size: 1em;
        }

        dfn {
            font-style: italic;
        }

        mark {
            background-color: #ff0;
            color: #000;
        }

        small {
            font-size: 80%;
        }

        sub,
        sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
        }

        sub {
            bottom: -0.25em;
        }

        sup {
            top: -0.5em;
        }

        audio,
        video {
            display: inline-block;
        }

        audio:not([controls]) {
            display: none;
            height: 0;
        }

        img {
            border-style: none;
        }

        svg:not(:root) {
            overflow: hidden;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
            font-family: sans-serif;
            font-size: 100%;
            line-height: 1.15;
            margin: 0;
        }

        button,
        input {
            overflow: visible;
        }

        button,
        select {
            text-transform: none;
        }

        button,
        html [type=“button”],
        [type=“reset”],
        [type=“submit”] {
            -webkit-appearance: button;
        }

        button::-moz-focus-inner,
        [type=“button”]::-moz-focus-inner,
        [type=“reset”]::-moz-focus-inner,
        [type=“submit”]::-moz-focus-inner {
            border-style: none;
            padding: 0;
        }

        button:-moz-focusring,
        [type=“button”]:-moz-focusring,
        [type=“reset”]:-moz-focusring,
        [type=“submit”]:-moz-focusring {
            outline: 1px dotted ButtonText;
        }

        fieldset {
            border: 1px solid #C0C0C0;
            margin: 0 2px;
            padding: 0.35em 0.625em 0.75em;
        }

        legend {
            box-sizing: border-box;
            color: inherit;
            display: table;
            max-width: 100%;
            padding: 0;
            white-space: normal;
        }

        progress {
            display: inline-block;
            vertical-align: baseline;
        }

        ol,
        ul {
            list-style: none;
        }

        textarea {
            overflow: auto;
        }

        [type=“checkbox”],
        [type=“radio”] {
            box-sizing: border-box;
            padding: 0;
        }

        [type=“number”]::-webkit-inner-spin-button,
        [type=“number”]::-webkit-outer-spin-button {
            height: auto;
        }

        [type=“search”] {
            -webkit-appearance: textfield;
            outline-offset: -2px;
        }

        [type=“search”]::-webkit-search-cancel-button,
        [type=“search”]::-webkit-search-decoration {
            -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
            -webkit-appearance: button;
            font: inherit;
        }

        details,
        menu {
            display: block;
        }

        summary {
            display: list-item;
        }

        canvas {
            display: inline-block;
        }

        template {
            display: none;
        }

        [hidden] {
            display: none;
        }

        .success-page {
            line-height: 1;
            height: 100%;
            font-family: Arial, serif;
            font-size: 15px;
            color: #313E47;
            width: 100%;
            background: #fff;
            position: fixed;
            z-index: 99999;
            top: 0;
            left: 0;
            overflow: scroll;
        }

        .container .order_number {
            text-align: center;
            font-family: Arial, serif;
            font-size: 30px;
            text-transform: uppercase;
            color: #424242;
            line-height: 38px;
            margin: 25px 0 25px 0;
        }

        .container .order_number span {
            color: #E14740;
        }

        .container .url_more_info {
            text-align: center;
            font-size: 20px;
            display: block;
            margin: 20px 0;
        }

        .container .url_more_info:hover {
            color: #E14740;
        }

        .container {
            max-width: 960px;
            padding: 70px 30px 70px 30px;
            margin: 0 auto;
        }

        .success-page__message_success {
            text-align: center;
        }

        .success-page__message_fail {
            margin: 25px 0 50px 0;
            text-align: center;
        }

        .list-info {
            text-align: center;
        }

        .list-info__list {
            text-align: left;
            display: inline-block;
            padding: 0;
        }

        .list-info__item {
            margin: 11px 0;
        }

        .list-info__text {
            width: 150px;
            display: inline-block;
            font-weight: bold;
            font-style: normal;
        }

        .success-page__form {
            position: relative;
            text-align: center;
            margin-top: 40px;
        }

        .success-page__form__error {
            position: absolute;
            display: none;
            top: -28px;
            color: #CA3F3F;
        }

        .success-page__form__container {
            display: block;
        }

        .success-page__form__input {
            height: 30px;
            width: 88%;
            max-width: 300px;
            font-size: 14px;
            padding-right: 10px;
            padding-left: 10px;
            outline: none;
            border-radius: 5px;
            border: 1px solid #B6B6B6;
            margin-bottom: 10px;
        }

        .success-page__form__button {
            display: inline-block;
            outline: none;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            font: 15px/100% Arial, Helvetica, sans-serif;
            padding: .55em 2em .6em;
            text-shadow: 0 1px 1px rgba(0, 0, 0, .3);
            border-radius: .5em;
            box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
            color: #D9EEF7;
            border: solid 1px #0076A3;
            background: #0095CD;
            background: -webkit-gradient(linear, left top, left bottom, from(#00ADEE), to(#0078A5));
            background: -moz-linear-gradient(top, #00ADEE, #0078A5);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#00ADEE", endColorstr="#0078A5");
            height: 15px;
            width: 27%;
        }

        .success-page__form__button:hover {
            text-decoration: none;
            color: #D9EEF7;
            background: #007EAD;
            background: -webkit-gradient(linear, left top, left bottom, from(#0095CC), to(#00678E));
            background: -moz-linear-gradient(top, #0095CC, #00678E);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#0095CC", endColorstr="#00678E");
        }

        .success-page__form__button:active {
            position: relative;
            top: 1px;
            color: #80BED6;
            background: -webkit-gradient(linear, left top, left bottom, from(#0078A5), to(#00ADEE));
            background: -moz-linear-gradient(top, #0078A5, #00ADEE);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#0078A5", endColorstr="#00ADEE");
        }

        .container .disabled {
            color: #80BED6;
            background: -webkit-gradient(linear, left top, left bottom, from(#0078A5), to(#00ADEE));
            background: -moz-linear-gradient(top, #0078A5, #00ADEE);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#0078A5", endColorstr="#00ADEE");
        }

        .container .disabled:hover {
            cursor: default;
            color: #80BED6;
            background: -webkit-gradient(linear, left top, left bottom, from(#0078A5), to(#00ADEE));
            background: -moz-linear-gradient(top, #0078A5, #00ADEE);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#0078A5", endColorstr="#00ADEE");
        }

        .container .disabled:active {
            top: 0
        }

        .container .mail_s {
            color: green;
            position: inherit;
            top: 0;
        }

        .success-page__title {
            font-size: 28px;
            line-height: 44px;
            color: #313E47;
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
        }

        .success-page__text {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            margin: 20px 0;
        }

        .success-page__message_fail__link {
            color: #69B9FF;
        }

        .success-page__message_fail__link:hover {
            color: #E14740;
        }

        @media (max-width: 320px) {
            .list-info__text {
                display: block;
            }
        }
    </style>

</body>

</html> 