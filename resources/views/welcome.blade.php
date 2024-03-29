<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="/css/app.css" rel="stylesheet" type="text/css">



    </head>
    <body>
        <div id="root"></div>

        <script type="text/javascript">
        var auth0_client = {!! $auth0 !!};
        </script>

        <script type="text/javascript" src="/js/main.js"></script>
    </body>
</html>
