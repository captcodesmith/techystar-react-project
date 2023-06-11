import React from 'react';
import vg from '../assets/2.webp';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in childrens.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum massa vitae sem gravida, sed rhoncus magna congue. Duis
            tincidunt condimentum tempus. Nulla non tincidunt lorem. Aliquam
            blandit, ex egestas iaculis rhoncus, odio mi lacinia turpis,
            dignissim maximus nunc ante euismod urna. Phasellus quis fringilla
            ex. Morbi elementum nibh imperdiet, rhoncus massa non, bibendum
            nisi. Curabitur sagittis, elit quis eleifend varius, eros libero
            iaculis sem, sit amet semper massa mauris id purus. Vivamus nunc
            ligula, consequat eu pretium nec, pellentesque non odio. Vestibulum
            et neque eget sapien mollis vestibulum. Phasellus faucibus sagittis
            turpis, eget suscipit lacus tincidunt commodo. Aliquam erat
            volutpat. Nullam nec molestie libero, nec convallis massa. Duis
            tincidunt leo nec nisi rutrum elementum. Vivamus ac euismod nisl.
            Curabitur mattis rhoncus sem, sed volutpat massa sodales nec. Duis a
            varius felis. Morbi convallis risus at dictum elementum. Integer
            arcu nibh, convallis at egestas quis, bibendum vitae urna. Sed
            pharetra nunc ac augue finibus placerat. Nunc nec dignissim augue.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: '0.3s' }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: '0.5s' }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: '0.7s' }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: '0.9s' }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
