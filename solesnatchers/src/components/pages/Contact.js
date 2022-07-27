import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-us">
      <div className="info"></div>

      <form action="action_page.php">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="First Name"
        ></input>

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Last Name"
        ></input>

        <label for="barter">Buy or Sell</label>
        <select id="barter" name="barter">
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
          <option value="Trade">Trade</option>
        </select>

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="What Shoe would you like to inquire about?"
        ></textarea>

        <input type="submit" value="submit"></input>
      </form>
    </section>
  );
}

export default Contact;
