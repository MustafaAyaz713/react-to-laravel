<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f8f9fa;
            margin: 0;
        }
        .welcome-container {
            text-align: center;
        }
        .welcome-title {
            font-size: 4rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        .welcome-image {
            width: 300px;
            height: auto;
            margin: 1rem 0;
        }
    </style>
</head>
<body>
    <div class="welcome-container">
        <h1 class="welcome-title">MUSTAFA AYAZ</h1>
        <img src="https://r.resimlink.com/a7fTe1.png" alt="Hoşgeldiniz" class="welcome-image">
        <div class="d-flex justify-content-center gap-3">
            <a href="{{ route('login') }}" class="btn btn-primary">Giriş Yap</a>
            <a href="{{ route('register') }}" class="btn btn-secondary">Kayıt Ol</a>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
