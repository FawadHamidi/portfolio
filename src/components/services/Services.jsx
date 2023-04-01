import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { content } from "./content";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            {content.uiux_services.map((service) => (
              <li key={service.title}>
                <BiCheck className="service__list-icon" />
                <p>{service.title}</p>
              </li>
            ))}
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
          {content.webdev_services.map((service) => (
              <li key={service.title}>
                <BiCheck className="service__list-icon" />
                <p>{service.title}</p>
              </li>
            ))}
          </ul>
        </article>

        {/* END OF WEB */}

        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATION</h3>
          </div>
          <ul className="service__list">
          {content.content_services.map((service) => (
              <li key={service.title}>
                <BiCheck className="service__list-icon" />
                <p>{service.title}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
