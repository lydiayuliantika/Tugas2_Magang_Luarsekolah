<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lembaga Pelatihan</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8f9fa;
        color: #343a40;
        line-height: 1.6;
      }

      h1,
      h2 {
        color: #007bff;
        text-align: center;
        margin: 10px 0;
      }

      h3 {
        color: #343a40;
        margin-top: 20px;
      }

      div {
        margin: 0 auto;
        max-width: 800px;
        padding: 20px;
        text-align: center;
      }

      img {
        border: 2px solid #007bff;
        border-radius: 10px;
        margin: 20px 0;
      }

      ul {
        list-style-type: square;
        padding-left: 20px;
        text-align: left;
      }

      video {
        width: 75%;
        border: 2px solid #007bff;
        border-radius: 10px;
        margin: 20px 0;
      }

      a {
        display: inline-block;
        margin: 20px 0;
        padding: 10px 15px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s;
      }

      a:hover {
        background-color: #0056b3;
      }

      fieldset {
        border: 2px solid #007bff;
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
      }

      legend {
        font-weight: bold;
        color: #007bff;
      }

      .form-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
      }

      .form-group label {
        flex-basis: 30%;
        text-align: right;
        margin-right: 10px;
      }

      input[type="email"],
      input[type="text"],
      input[type="password"] {
        width: 65%;
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 5px;
      }

      input[type="submit"] {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      input[type="submit"]:hover {
        background-color: #0056b3;
      }

      h5 {
        margin: 10px 0;
      }

      p {
        margin: 5px 0;
      }
      

      .slideshow-container {
        max-width: 800px;
        position: relative;
        margin: auto;
      }

    
      .mySlides {
        display: none;
      }

      /* Add a fade effect */
      .fade {
        animation-name: fade;
        animation-duration: 1.5s;
      }

      @keyframes fade {
        from {opacity: .4} 
        to {opacity: 1}
      }

    </style>
  </head>
  <body>
    <h1>Lembaga Pelatihan Bahasa Internasional FIB UI</h1>
    <h2>
      Siap Uji Kemampuan Bahasa Asing Anda? Daftar Tes di LBI FIB UI Sekarang!
    </h2>
    <div>
      <img
        src="logo-lbifibui.png"
        alt="logo lbi"
        width="250px"
        height="100px"
      />
    </div>
    <h2>Why Choose Us?</h2>
    <h3>Program BIPA</h3>
    <ul>
      <li>
        Bahasa Indonesia untuk Penutur Asing (BIPA) merupakan program pelatihan
        yang didesain agar penutur asing dapat mahir berbahasa Indonesia.
      </li>
    </ul>
    <h3>Program Pelayanan Bahasa</h3>
    <ul>
      <li>
        Program Pelayanan Bahasa (PPB) memberikan berbagai pelayanan untuk
        memenuhi kebutuhan akan berbagai bahasa asing. Bentuk pelayanan mulai
        dari kursus bahasa asing, in-house training, berbagai tes kemampuan
        berbahasa, dan lain sebagainya.
      </li>
    </ul>
    <h3>Program Penerjemah dan Penjurubahasaan</h3>
    <ul>
      <li>
        Program Penerjemahan dan Penjurubahasaan (PPP) menawarkan berbagai
        layanan dan pelatihan dalam bidang penerjemahan, juru bahasa, dan
        penyuntingan. Dengan memberikan layanan dan pelatihan berkualitas tinggi
        kepada berbagai klien, baik lokal maupun internasional, dalam sembilan
        bahasa berbeda (Inggris, Jepang, Cina, Korea, Prancis, Belanda, Jerman,
        Rusia, dan Arab).
      </li>
    </ul>
    
    <!-- Slideshow for Gallery -->
    <h3>Gallery Foto dan Video</h3>
    <div class="slideshow-container">
      <div class="mySlides fade">
        <img src="image1.jpg" style="width:100%">
      </div>
      <div class="mySlides fade">
        <img src="image2.jpg" style="width:100%">
      </div>
      <div class="mySlides fade">
        <video controls width="100%">
          <source src="video1.mp4" type="video/mp4">
        </video>
      </div>
    </div>

    <h3>Get to Know Us</h3>
    <video controls>
      <source src="video lbi fib ui.mp4" type="video/mp4" />
    </video>
    <div>
      <a href="https://lbifib.ui.ac.id/id" target="_blank"
        >Visit Our Website for More Info</a
      >
      <h4>Register Yourself Now!</h4>
    </div>
    <div>
      <form id="loginForm" action="lembagapelatihan.html">
        <fieldset>
          <legend>Login</legend>
          <div class="form-group">
            <label>Email</label>
            <input type="email" id="loginEmail" placeholder="email" required />
          </div>
          <div class="form-group">
            <label>Username</label>
            <input type="text" id="loginUsername" placeholder="username" required />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" id="loginPassword" placeholder="password" required />
          </div>
          <input type="submit" value="Login" />
        </fieldset>
      </form>
    </div>
    <div>
      <h5>CONTACT US:</h5>
      <h5>Customer Service LBI</h5>
      <p>informasi@lbifibui.com</p>
      <h5>Program Penerjemahan</h5>
      <p>ppp@lbifibui.com</p>
      <h5>Program BIPA</h5>
      <p>bipa@lbifibui.com</p>
    </div>

    <script>
      // Validasi Form Login
      document.getElementById('loginForm').addEventListener('submit', function(event) {
        let email = document.getElementById('loginEmail').value;
        let username = document.getElementById('loginUsername').value;
        let password = document.getElementById('loginPassword').value;

        if (email === '' || username === '' || password === '') {
          alert('All fields are required');
          event.preventDefault();
        } else if (!email.includes('@')) {
          alert('Please enter a valid email');
          event.preventDefault();
        }
      });

      // Slideshow Functionality
      let slideIndex = 0;
      showSlides();

      function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000);
    }


    </script>
  </body>
</html>
