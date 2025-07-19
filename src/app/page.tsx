import Image from "next/image";
import Link from "next/link";
import MainButton from "./components/mainButton/mainButton"
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="heroSection">
        <div className="heroImageContainer">
          <Image
            src="/home/hero.jpg"
            fill
            className="heroImage"
            alt="background Image"
          />
          <div className="heroOverlay"></div>
        </div>
        <div className="heroContainer">
          <div className="heroTextContainer">
            <div className="heroTitle">
              <h1>Naturally Thoughtful. <br/>Beautifully Made.</h1>
            </div>
            <div>
              <p>Seasonal florals, curated home goods, and small-batch gifts — hand-selected to bring beauty to everyday moments.</p>
            </div>
            <div>
              <MainButton href="#collections" bgColor="#1F4227" textColor="#ffffff">Shop the Collection</MainButton>
            </div>
          </div>
        </div>
      </div>

      <div className="categoriesContainer" id="collections">
        <div className="categoriesTextContainer">
          <div className="categoriesTitle">
            <h2>Shop by Category</h2>
          </div>
          <div className="categoriesDesc">
            <p>Discover our most-loved collections, designed to bring life and beauty to any space.</p>
          </div>
        </div>
        <div className="categoriesImageContainer">
          
          <Link href="/disclaimer">
            <div className="singleCategoryImageContainer">
              <Image
                src="/home/freshFlorals.png"
                fill
                className="categoriesImage"
                alt="Fresh Florals BG Image"
              />
              <div className="categoryOverlay"></div>
              <div className="categoryText">
                Fresh Florals
              </div>
            </div>
          </Link>

          <Link href="/disclaimer">
            <div className="singleCategoryImageContainer">
              <Image
                src="/home/giftsAndWellness.png"
                fill
                className="categoriesImage"
                alt="Fresh Florals BG Image"
              />
              <div className="categoryOverlay"></div>
              <div className="categoryText">
                Gifts & Wellness
              </div>
            </div>
          </Link>

          <Link href="/disclaimer">
            <div className="singleCategoryImageContainer">
              <Image
                src="/home/homeAndDecor.png"
                fill
                className="categoriesImage"
                alt="Fresh Florals BG Image"
              />
              <div className="categoryOverlay"></div>
              <div className="categoryText">
                Home & Decor
              </div>
            </div>
          </Link>
        </div>
        <div className="categoriesButtonContainer">
          <MainButton href="/disclaimer" bgColor="#1F4227" textColor="#ffffff">Shop More Categories</MainButton>
        </div>
      </div>

      <div className="aboutSection" id="about">
        <div className="backDropImageContainer">
          <Image
            src="/home/backdrop.svg"
            alt="backdrop image"
            fill
            className="backDropImage"
          />
        </div>
        <div className="aboutTextContainer">
          <div className="aboutTitle">
            <h2>Rooted in Nature, Grown in San Francisco</h2>
          </div>
          <div className="aboutDescription">
            <p>Nestled in the heart of San Francisco, Vault & Vine began with a simple belief — that beauty should feel natural, never forced. What started as a neighborhood floral studio has grown into a destination for thoughtful gifts, curated home goods, and one-of-a-kind arrangements. Every stem, scent, and object we offer is hand-selected to inspire connection, warmth, and everyday moments of joy.</p>
          </div>
        </div>
        <div className="aboutButtonContainer">
          <MainButton href="/disclaimer" bgColor="#1F4227" textColor="#ffffff">Learn More</MainButton>
        </div>
      </div>


      <div className="spotlightSectionContainer">
        <div className="spotlightTextContainer">
          <div className="spotlightTitle">
            <h2>Seasonal Spotlight</h2>
          </div>
          <div className="spotlightDescription">
            <p>Limited-run floral designs and gift sets, perfect for this season.</p>
          </div>
        </div>

        <div className="spotlightImageContainer">
          
          <div className="singlespotlightImageContainer spotlightImage1">
            <Image
              src="/home/purpleInBowl.png"
              fill
              className="spotlightImage"
              alt="Fresh Florals BG Image"
            />
          </div>

          <div className="singlespotlightImageContainer">
            <Image
              src="/home/bootsOnChair.png"
              fill
              className="spotlightImage"
              alt="Fresh Florals BG Image"
            />
          </div>

          <div className="singlespotlightImageContainer">
            <Image
              src="/home/tinCan.png"
              fill
              className="spotlightImage"
              alt="Fresh Florals BG Image"
            />
          </div>

          <div className="singlespotlightImageContainer spotlightImage2">
            <Image
              src="/home/weddingArrangement.png"
              fill
              className="spotlightImage"
              alt="Fresh Florals BG Image"
            />
          </div>
        </div>
        <div className="padSpacer"></div>
      </div>


      <div className="weddingCTASection" id="weddings">
        <div className="weddingCTAImageContainer">
          <Image
            src="/home/weddingCTA.png"
            fill
            alt="Wedding CTA Image"
            className="weddingCTAImage"
          />
        </div>
        <div className="weddingCTAFullContainer">
          <div className="weddingCTATextContainer">
            <div className="weddingCTATitle">
              <h2>Floral Design for Every Occasion</h2>
            </div>
            <div className="weddingCTADescription">
              <p>Custom arrangements for weddings, events, and corporate spaces — designed with care, delivered with love.</p>
            </div>
            <div className="weddingCTAButtonContainer">
              <MainButton href="/disclaimer" bgColor="#FFEDB5" textColor="#000000ff">Contact for Event Arrangments</MainButton>
            </div>
          </div>
        </div>

      </div>


      <div className="communitySectionContainer">
        <div className="communityTextContainer">
          <div className="communityTitle">
            <h2>Loved By Our Community</h2>
          </div>
          <div className="communityDescription">
            <p>See how our customers style their florals, gifts, and home essentials.</p>
          </div>
        </div>

        <div className="communityImageContainer">
          
          <div className="singlecommunityImageContainer">
            <Image
              src="/home/flowerAndBook.png"
              fill
              className="communityImage"
              alt="Fresh Florals BG Image"
            />
          </div>

          <div className="singlecommunityImageContainer communityImage1">
            <Image
              src="/home/dateTable.png"
              fill
              className="communityImage"
              alt="Fresh Florals BG Image"
            />
          </div>

          <div className="singlecommunityImageContainer communityImage2">
            <Image
              src="/home/picnic.png"
              fill
              className="communityImage"
              alt="Fresh Florals BG Image"
            />
          </div>

          <div className="singlecommunityImageContainer">
            <Image
              src="/home/lady.png"
              fill
              className="communityImage"
              alt="Fresh Florals BG Image"
            />
          </div>

          <div className="singlecommunityImageContainer">
            <Image
              src="/home/cow.png"
              fill
              className="communityImage"
              alt="Fresh Florals BG Image"
            />
          </div>

          <div className="singlecommunityImageContainer communityImage3">
            <Image
              src="/home/flowerAndCoffee.png"
              fill
              className="communityImage"
              alt="Fresh Florals BG Image"
            />
          </div>


        </div>
        <div className="communitySpacer"></div>
      </div>


      <div className="newsletterSection">
        <div className="newsletterImageContainer">
          <Image
            src="/home/newsletterBG.webp"
            fill
            alt="Newsletter BG Image"
            className="newsletterImage"
          />
          <div className="heroOverlay"></div>

          {/* Move text container inside image container */}
          <div className="newsletterTextContainer">
            <div className="newsletterTitle">
              <h2>Stay Connected</h2>
            </div>
            <div className="newsletterDescription">
              <p>Join the Vault & Vine community for fresh ideas, exclusive offers, and more.</p>
            </div>
            <div className="newsletterInputContainer">
              <form className="newsletterForm">
                <input type="email" className="newsletterSingleInput"/>
                <button type="submit" className="newsletterSingleButton"><span className="submitButtonText">Submit</span></button>
              </form>
            </div>  
          </div>
        </div>
      </div>

    </>
  );
}
