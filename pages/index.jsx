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
                <Card text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <Card text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                <Card text="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " />
                </div>
                <div className={styles.right}>
                    <img src="https://static-cse.canva.com/blob/673258/Mauve_Set1_7.ddf5d8fc.png" alt="lavander field" />
                </div>
            </main>

        <Footer />
        </div>
    );
}