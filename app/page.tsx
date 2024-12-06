"use client";

import { useState } from "react";
import Image from "next/image";
import Xs from "./images/Xs.png";
import vl from "./images/villa.png";
import mvl from "./images/minivilla.png";
import map from "./images/mapv.png";
import vp from "./images/villaPre.png";
import B12 from "./images/BED12.png";
import hou from "./images/houseV.png";
import GV from "./images/GuesV.png";
import room from "./images/bedroV.png";
import pV from "./images/petV.png";
import AC from "./images/AC.png";
import Par from "./images/freeP.png";
import { Star, Search, Phone, Share2, Heart, MenuIcon } from "lucide-react";
import ph from "./images/playhotel.png";
import styles from "./page.module.css";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={Xs} alt="XSERIES" />
        </div>
        <div className={styles.searchBar}>
          <Search className={styles.searchIcon} size={16} />
          <input
            type="text"
            placeholder="Search for hotels, villa, location..."
          />
        </div>
        <div className={styles.navRight}>
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <MenuIcon className="h-6 w-6 text-white" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-black text-white">
              <div className="flex flex-col gap-4 pt-8">
                <button className={styles.getStarted}>SAF</button>
                <button className={styles.phone}>
                  <Phone size={16} /> +91 9999900000
                </button>
                <button className={styles.login}>Login</button>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden lg:flex items-center gap-4">
            <button className={styles.getStarted}>SAF</button>
            <button className={styles.phone}>
              <Phone size={16} /> +91 9999900000
            </button>
            <button className={styles.login}>Login</button>
          </div>
        </div>
      </nav>

      <section className={styles.hero}>
        <Image
          src={vl}
          alt="Sea La Vie Exterior"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1>Sea La Vie</h1>
            <p>Alibaug, Maharashtra</p>
            <div className={styles.rating}>
              <Star className={styles.starFilled} size={16} />
              <span>4.5/5</span>
              <span className={styles.reviews}>(105 reviews)</span>
            </div>
          </div>
          <div className={styles.heroNav}>
            <span className={styles.navDot} />
            <span className={styles.navDot} />
            <span className={styles.navDot} />
            <span className={styles.navDot} />
            <button className={styles.playButton}>
              <Image src={ph} alt="hb" />
            </button>
          </div>
          <div className={styles.xseriesLogo}>
            <Image src={Xs} alt="XSERIES" />
          </div>
          <div className={styles.thumbnailPreview}>
            <Image src={B12} alt="Room Preview" />
          </div>
          <div className={styles.heroActions}>
            <button className={styles.shareBtn}>
              <Share2 size={20} />
            </button>
            <button className={styles.wishlistBtn}>
              <Heart size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.propertyDetails}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <Image src={hou} alt="Villa" width={24} height={24} />
            <span>Entire Villa</span>
          </div>
          <div className={styles.feature}>
            <Image src={GV} alt="Guests" width={24} height={24} />
            <span>8-12 Guests</span>
          </div>
          <div className={styles.feature}>
            <Image src={room} alt="Bedrooms" width={24} height={24} />
            <span>4 Bedrooms</span>
          </div>
          <div className={styles.feature}>
            <Image src={pV} alt="Pet Friendly" width={24} height={24} />
            <span>Pet Friendly</span>
          </div>
        </div>

        <div className={styles.bookingCard}>
          <div className={styles.priceContainer}>
            <span className={styles.originalPrice}>₹1,49,086</span>
            <span className={styles.discountedPrice}>₹1,00,086</span>
            <span className={styles.perNight}>/Night</span>
          </div>
          <div className={styles.discountBanner}>
            <span>Special discounts available!!</span>
            <button className={styles.unlockPrice}>Unlock Price</button>
          </div>
          <div className={styles.bookingForm}>
            <div className={styles.dateInput}>
              <Image
                src="/calendar-icon.svg"
                alt="Calendar"
                width={20}
                height={20}
              />
              <span>Check in - Check out</span>
              <Image
                src="/chevron-down.svg"
                alt="Expand"
                width={20}
                height={20}
              />
            </div>
            <div className={styles.guestInput}>
              <Image src="/user-icon.svg" alt="User" width={20} height={20} />
              <span>2 Guests</span>
              <Image
                src="/chevron-down.svg"
                alt="Expand"
                width={20}
                height={20}
              />
            </div>
            <button className={styles.checkAvailability}>
              Check Availability
            </button>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <h2>About</h2>
        <p>
          • Tucked away cosily in the lap of nature, this is the perfect
          destination getaway for a vacation trip near Delhi and Chandigarh.
          <br /> • The tourist-favourite Bhimtal Lake is only a stone&apos;s
          throw away.
          <button className={styles.readMore}>Read more</button>
        </p>
        <div className={styles.rules}>
          <button>House Rules</button>
          <button>Cancellation Policy</button>
          <button>Things you need to know</button>
          <button>Things to do</button>
        </div>
      </section>

      <section className={styles.amenities}>
        <h2>Amenities</h2>
        <div className={styles.amenityGrid}>
          <div className={styles.amenity}>
            <Image src={room} alt="Bedrooms" width={24} height={24} />
            <span>4 Bedrooms</span>
          </div>
          <div className={styles.amenity}>
            <Image src={Par} alt="Parking" width={24} height={24} />
            <span>Free parking</span>
          </div>
          <div className={styles.amenity}>
            <Image src={AC} alt="AC" width={24} height={24} />
            <span>Air conditioning</span>
          </div>
          <div className={styles.amenity}>
            <Image src={GV} alt="Guests" width={24} height={24} />
            <span>12 Guests</span>
          </div>
        </div>
        <button className={styles.viewAll}>View all Amenities</button>
      </section>

      <section className={styles.meals}>
        <h2>Meals</h2>
        <p>
          A cook is available to prepare local specialties and a delicious
          spread of meals cooked basis of Sea at an additional charge
        </p>
        <div className={styles.mealTypes}>
          <span className={styles.veg}>Veg</span>
          <span className={styles.nonVeg}>Non Veg</span>
        </div>
        <div className={styles.mealActions}>
          <button>View Menu</button>
          <button>Meal Rate Card</button>
        </div>
      </section>

      <section className={styles.realMoments}>
        <h2>Real Moments</h2>
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
            <Image
              src={mvl}
              alt="Terrace view"
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryItem}>
            <Image
              src={mvl}
              alt="Terrace view"
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryItem}>
            <Image
              src={mvl}
              alt="Terrace view"
              className={styles.galleryImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.location}>
        <h2>Location</h2>
        <div className={styles.map}>
          <Image src={map} alt="Location map" className={styles.mapImage} />
        </div>
        <button className={styles.getDirection}>Get Direction</button>
      </section>

      <section className={styles.roomsAndBeds}>
        <h2>Rooms & Beds</h2>
        <div className={styles.roomCards}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.roomCard}>
              <Image src={vp} alt={`Room ${i}`} className={styles.roomImage} />
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3>Company</h3>
            <a href="#">Information</a>
            <a href="#">Signature</a>
            <a href="#">About</a>
          </div>
          <div className={styles.footerColumn}>
            <h3>Company</h3>
            <a href="#">Information</a>
            <a href="#">Signature</a>
            <a href="#">About</a>
          </div>
          <div className={styles.footerColumn}>
            <h3>Contact</h3>
            <a href="mailto:info@xseries.com">info@xseries.com</a>
            <a href="tel:+919129129127">+91 9129129127</a>
            <a href="#">Connect to Partner</a>
          </div>
          <div className={styles.footerColumn}>
            <h3>Partner with us</h3>
            <a href="#">List a hotel</a>
          </div>
          <div className={styles.footerColumn}>
            <h3>Policies</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cancellation Policy</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2023 XSeries Corp. All rights reserved.</p>
          <div className={styles.socialDots}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>
      </footer>
    </div>
  );
}
