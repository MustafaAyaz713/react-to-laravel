import React from 'react';
import styles from './HomePage.module.css';
import campusImage from './Images/CAMPUS.png';
import { VscOrganization } from "react-icons/vsc";
import { CiMap } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbUserQuestion } from "react-icons/tb";
import { SiRobotframework } from "react-icons/si";

function HomePage() {
  return (
    <div className={styles.fourComponentGrid}>
      
      <img className={styles.campusImage} src={campusImage} alt="" />
      <div className={styles.topNav}>
        <div className={styles.flexIconText}>
        <VscOrganization  className={styles.Icon}/>
        <div className={styles.topNavText}>Kulüpler</div>
        </div>
        <div className={styles.flexIconText}>
        <CiMap  className={styles.Icon}/>
        <div className={styles.topNavText}>Okul Haritası</div>
        </div>
        <div className={styles.flexIconText}>
        <FaArrowTrendUp  className={styles.Icon}/>
        <div className={styles.topNavText}>Okul Trendleri</div>
        </div>
        <div className={styles.flexIconText}>
        <SiRobotframework  className={styles.Icon}/>
        <div className={styles.topNavText}>Bana Sor</div>
        </div>
        <div className={styles.flexIconText}>
        <TbUserQuestion  className={styles.Icon}/>
        <div className={styles.topNavText}>Bilene Sor</div>
        </div>
      </div>
      <div className={styles.leftNav}>
        <div>+</div>
        <div>Anasayfa</div>
        <div>Ara</div>
        <div>Keşfet</div>
        <div>Bildirimler</div>
        <div>Mesajlar</div>
        <div>Oluştur</div>
        <div>Profil</div>
        <div>Daha Fazla</div>
        <div>Mağaza</div>
      </div>
      <div className={styles.Akis}></div>
      
        
    </div>
  );
}
export default HomePage;