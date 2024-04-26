import Button from "../Button/Button"
import styles from "./Contact.module.css"
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {

    const [Name, setName] = useState("Riya");
    const [email, setEmail] = useState("Riya@gmail.com");
    const [text, setText] = useState("Riya kaise ho");

    const onSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT"
                        icon={<MdMessage fontSize="24px" />} />
                    <Button
                        text="VIA CALL"
                        icon={<IoMdCall fontSize="24px" />} />
                </div>
                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px" />} />

                <form onSubmit={onSubmit}>
                    <div className={styles.from_controller}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.from_controller}>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.from_controller}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="9" cols="60" />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end"
                    }}>
                        <Button text="SUBMIT"></Button>
                    </div>
                    <div>{Name + " " + email + " " + text}</div>
                </form>


            </div>
            <div className={styles.contactImage}>
                <img src="/images/Service 24_7-pana 1.svg" alt="contact image" height="80%" />
            </div>
        </section>
    )
}

export default ContactForm