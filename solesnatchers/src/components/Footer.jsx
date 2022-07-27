import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section class="content">
        <h3>Sole Snatchers</h3>

        <p class="description">
          We buy new and used shoes directly from you. We match or beat offers
          from any shop 99% of the time. Please contact us to inquire.
        </p>

        <ul class="socials">
          <li>
            <a href="www.twitter.com">
              <img src="/imgs/twitter-icon.jpg" alt="twitter logo" />
            </a>
          </li>
          <li>
            <a href="www.facebook.com">
              <img src="/imgs/facebook-icon.jpg" alt="facebook logo" />
            </a>
          </li>
          <li>
            <a href="www.youtube.com">
              <img src="/imgs/youtube-icon.jpg" alt="youtube logo" />
            </a>
          </li>
          <li>
            <a href="www.instagram.com">
              <img src="/imgs/insta-icon.jpg" alt="instagram logo" />
            </a>
          </li>
        </ul>

        <p class="copyright">
          {" "}
          Website Imagined By: Justin Stokes | Copyright 2022 | All Rights
          Reserved
        </p>
      </section>
    </footer>
  );
}

export default Footer;
