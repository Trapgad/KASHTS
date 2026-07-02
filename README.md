<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to KASHTS</title>
    <!-- FontAwesome for fallback icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            background: #2C064C; 
            text-align: center;
            position: relative;
        }

        /* --- MOTION BACKGROUND SLIDESHOW --- */
        .slideshow {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
            list-style: none;
        }

        .slideshow li {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0;
            animation: imageAnimation 15s linear infinite;
        }

        /* Background Motion Photos Loop */
        .slideshow li:nth-child(1) { background-image: url('IMG_7204.jpg'); }
        .slideshow li:nth-child(2) { background-image: url('IMG_7201.jpg'); animation-delay: 5s; }
        .slideshow li:nth-child(3) { background-image: url('PHOTO-2026-06-30-13-32-10.jpg'); animation-delay: 10s; }

        @keyframes imageAnimation { 
            0% { opacity: 0; animation-timing-function: ease-in; }
            8% { opacity: 1; animation-timing-function: ease-out; }
            33% { opacity: 1; }
            41% { opacity: 0; }
            100% { opacity: 0; }
        }

        /* Branded filter layer overlay */
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(74, 14, 119, 0.85), rgba(44, 6, 76, 0.9));
            z-index: 2;
        }

        /* --- BRANDED INTERACTIVE CONTENT --- */
        .welcome-container {
            position: relative;
            z-index: 3;
            animation: fadeIn 1.5s ease-out forwards;
            padding: 20px;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* Container framework wrapping the school crest image */
        .logo-frame {
            width: 110px;
            height: 110px;
            background: white;
            border-radius: 50%;
            padding: 10px;
            margin-bottom: 25px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            animation: float 3s ease-in-out infinite;
        }

        .logo-frame img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: 2px;
            margin-bottom: 10px;
            text-transform: uppercase;
            opacity: 0;
            animation: slideUp 1s ease-out 0.5s forwards;
            text-shadow: 0 2px 10px rgba(0,0,0,0.4);
        }

        .motto {
            font-size: 1.1rem;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #d8b4f8;
            margin-bottom: 20px;
            font-weight: 600;
            opacity: 0;
            animation: slideUp 1s ease-out 0.8s forwards;
            text-shadow: 0 2px 10px rgba(0,0,0,0.4);
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 40px;
            color: #e2d5f0;
            opacity: 0;
            animation: slideUp 1s ease-out 1s forwards;
            text-shadow: 0 2px 10px rgba(0,0,0,0.4);
        }

        .enter-btn {
            display: inline-block;
            padding: 14px 40px;
            font-size: 1.1rem;
            font-weight: 600;
            color: #4A0E77;
            background: white;
            border: none;
            border-radius: 50px;
            text-decoration: none;
            box-shadow: 0 5px 20px rgba(0,0,0,0.4);
            transition: all 0.3s ease;
            opacity: 0;
            animation: slideUp 1s ease-out 1.3s forwards;
        }

        .enter-btn:hover {
            transform: translateY(-3px);
            background: #d8b4f8;
            color: #2C064C;
            box-shadow: 0 8px 25px rgba(0,0,0,0.5);
        }

        /* Keyframe Utilities */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body>

    <!-- Back layer background image animation -->
    <ul class="slideshow">
        <li></li>
        <li></li>
        <li></li>
    </ul>

    <!-- Filter tint matrix overlay -->
    <div class="overlay"></div>

    <!-- UI Interaction Node Container -->
    <div class="welcome-container">
        
        <!-- Beautiful round frame showcasing your actual school crest logo image -->
        <div class="logo-frame">
            <img src="IMF_7145.jpg" alt="KASHTS Official Crest Logo">
        </div>
        
        <h1>Welcome to KASHTS</h1>
        <div class="motto">Body • Mind • Soul</div> 
        <p>Kwabeng Anglican Senior High Technical School</p>
        
        <a href="index.html" class="enter-btn">
            Enter Website <i class="fa-solid fa-arrow-right" style="margin-left: 8px;"></i>
        </a>
    </div>

</body>
</html>
