<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kwabeng Anglican Senior High Technical School</title>
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* --- GLOBAL STYLES --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            scroll-behavior: smooth;
        }

        /* --- 1. WELCOME MOTION ANIMATION SPLASH SCREEN --- */
        .splash-screen {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
            background: #2C064C; 
            text-align: center;
        }

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

        /* School Motion Images Rotation */
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

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(74, 14, 119, 0.85), rgba(44, 6, 76, 0.9));
            z-index: 2;
        }

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

        /* Circular framing container for the school crest */
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

        .welcome-container h1 {
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

        .welcome-container p {
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

        /* --- 2. MAIN WEBSITE SECTION STYLING --- */
        header {
            background-color: #4A0E77;
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        section {
            padding: 60px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .about img, .message img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        .cards, .boxes, .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .gallery img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
        }
        .contact-info p {
            margin: 10px 0;
            font-size: 1.1rem;
        }
        .whatsapp {
            display: inline-block;
            background-color: #25D366;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 15px;
        }
        footer {
            background: #2C064C;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }

        /* Keyframes */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body>

    <!-- ==================== ANIMATED SPLASH SCREEN ==================== -->
    <div class="splash-screen">
        <ul class="slideshow">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div class="overlay"></div>
        <div class="welcome-container">
            <!-- Modernized circular crest emblem image placeholder -->
            <div class="logo-frame">
                <img src="IMF_7145.jpg" alt="KASHTS Crest Logo">
            </div>
            <h1>Welcome to KASHTS</h1>
            <div class="motto">Body • Mind • Soul</div> 
            <p>Kwabeng Anglican Senior High Technical School</p>
            <a href="#main-content" class="enter-btn">
                Enter Website <i class="fa-solid fa-arrow-right" style="margin-left: 8px;"></i>
            </a>
        </div>
    </div>

    <!-- Target element that the splash screen scrolls down to -->
    <div id="main-content"></div>

    <!-- ==================== YOUR ACTUAL WEBSITE CONTENT ==================== -->
    <header>
        <div class="logo-area" style="display:flex; align-items:center; gap:10px;">
            <i class="fa-solid fa-school"></i> KASHTS
        </div>
    </header>

    <!-- ABOUT SECTION -->
    <section id="about" class="about">
        <img src="PHOTO-2026-06-30-13-32-10.jpg" alt="School Image">
        <div>
            <h2>About KASHTS</h2>
            <p>Kwabeng Anglican Senior High Technical School (KASHTS) is a Public Category B Senior High Technical School located in Kwabeng, Atiwa District, Eastern Region, Ghana.</p>
            <p>The school is Anglican and provides quality education, technical skills and character development for students.</p>
        </div>
        <div class="boxes">
            <div>
                <i class="fa-solid fa-eye"></i>
                <h3>Vision</h3>
                <p>To create an enabling environment in the school to facilitate effective teaching and learning.</p>
            </div>
            <div>
                <i class="fa-solid fa-star"></i>
                <h3>Mission</h3>
                <p>To ensure students receive quality education and training through effective management and use of teaching and learning materials.</p>
            </div>
        </div>
        <div style="margin-top:20px;">
            <h3>Core Values</h3>
            <p>Teamwork • Excellence • Godliness • Integrity • Quality</p>
        </div>
    </section>

    <!-- ACADEMICS SECTION -->
    <section id="academics">
        <h2>Academic Programmes</h2>
        <div class="cards">
            <div>General Science</div>
            <div>General Arts</div>
            <div>Business</div>
            <div>Home Economics</div>
            <div>Visual Arts</div>
            <div>Technical</div>
            <div>Agriculture Science</div>
        </div>
    </section>

    <!-- STATISTICS SECTION -->
    <section class="stats">
        <div class="boxes">
            <div class="stat-box">
                <i class="fa-solid fa-user-graduate"></i>
                <h2>1500+</h2>
                <p>Students</p>
            </div>
            <div class="stat-box">
                <i class="fa-solid fa-school"></i>
                <h2>1984</h2>
                <p>Established</p>
            </div>
        </div>
    </section>

    <!-- HEADMISTRESS MESSAGE SECTION -->
    <section class="message">
        <img src="IMG_7204.jpg" alt="Headmistress Image">
        <div>
            <h2>Headmistress's Message</h2>
            <p>Welcome to Kwabeng Anglican Senior High Technical School. Our goal is to provide students with quality education, discipline, skills and opportunities that prepare them to become responsible leaders.</p>
            <h3>Miss Elfreda Cecilia Adu Poku<br><small>Headmistress, KASHTS</small></h3>
        </div>
    </section>

    <!-- NEWS SECTION -->
    <section class="news">
        <h2>Latest News & Events</h2>
        <div class="cards">
            <div>
                <i class="fa-solid fa-calendar"></i>
                <h3>Admissions</h3>
                <p>Join KASHTS and begin your journey of excellence.</p>
            </div>
            <div>
                <i class="fa-solid fa-trophy"></i>
                <h3>Achievements</h3>
                <p>Celebrating academic and student successes.</p>
            </div>
            <div>
                <i class="fa-solid fa-bullhorn"></i>
                <h3>Announcements</h3>
                <p>Stay updated with important school information.</p>
            </div>
        </div>
    </section>

    <!-- GALLERY SECTION -->
    <section id="gallery">
        <h2>School Gallery</h2>
        <div class="gallery">
            <img src="IMG_7201.jpg" alt="Gallery Image 1">
            <img src="IMG_4416.JPG" alt="Gallery Image 2">
            <img src="IMG_7196.jpg" alt="Gallery Image 3">
            <img src="PHOTO-2025-12-17-14-19-02.jpg" alt="Gallery Image 4">
            <img src="IMG_7197.jpg" alt="Gallery Image 5">
            <img src="IMG_7200.jpg" alt="Gallery Image 6">
        </div>
        <div style="margin-top:30px;">
            <a href="gallery.html" class="btn" style="text-decoration:none; color:#4A0E77; font-weight:bold;">
                <i class="fa-solid fa-images"></i> View More Images
            </a>
        </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="contact">
        <div class="contact-info">
            <h2>Contact KASHTS</h2>
            <p><i class="fa-solid fa-location-dot"></i> Kwabeng, Atiwa District, Eastern Region, Ghana</p>
            <p><i class="fa-solid fa-phone"></i> +233 24 461 5726</p>
            <p><i class="fa-solid fa-phone"></i> +233 20 555 2735</p>
            <p><i class="fa-solid fa-envelope"></i> kwabenganglicanshst@ges.gov.gh</p>
        </div>
    </section>

    <!-- FOOTER SECTION -->
    <footer>
        <div class="footer-branding">
            <img src="IMF_7145.jpg" alt="Footer Emblem" style="max-height:50px; display:block; margin:0 auto 10px;">
            <h2>KASHTS</h2>
        </div>
        <p>&copy; 2026 Kwabeng Anglican Senior High Technical School</p>
        <div style="margin-top:15px;">
            <!-- WHATSAPP ANCHOR -->
            <a class="whatsapp" href="https://wa.me/233244615726" target="_blank">
                <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
        </div>
    </footer>

</body>
</html>
