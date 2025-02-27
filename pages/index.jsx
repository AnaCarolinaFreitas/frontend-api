import styles from "../styles/home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "@/components/card";

export default function Home(){
    return(
        <div className= {styles.container}>
            <Header />

            <main className={styles.main}>
                <div className={styles.left}>
                <Card />
                <Card />
                <Card />
                </div>
                <div className={styles.right}>
                    <img src="https://static-cse.canva.com/blob/673258/Mauve_Set1_7.ddf5d8fc.png" alt="lavander field" />
                </div>
            </main>

        <Footer />
        </div>
    );
}