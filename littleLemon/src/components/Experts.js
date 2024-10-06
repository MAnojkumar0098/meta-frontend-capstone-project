import React from "react";
import "./Experts.css"; // Make sure to import your CSS for styling

// Single Expert Profile component
const ExpertProfile = ({ image, name, title, social }) => {
  return (
    <div className="profile">
      <img src={image} alt={name} />
      <h6>{name}</h6>
      <p>{title}</p>
      <div className="pro-links">
        {social.facebook && <i className="fab fa-facebook"></i>}
        {social.instagram && <i className="fab fa-instagram"></i>}
        {social.linkedin && <i className="fab fa-linkedin-in"></i>}
      </div>
    </div>
  );
};

// Experts Component containing multiple profiles
const Experts = () => {
  const experts = [
    {
      image:
        "https://littlelemon.alexismenest.vercel.app/static/media/logo.e68246686f716ff6e5d8.png",
      name: "",
      title: "experience at hotel",
      social: { facebook: true, instagram: true, linkedin: true },
    },
    {
      image:
        "https://littlelemon.alexismenest.vercel.app/static/media/logo.e68246686f716ff6e5d8.png",
      name: "",
      title: "",
      social: { facebook: true, instagram: true, linkedin: true },
    },
    {
      image:
        "https://littlelemon.alexismenest.vercel.app/static/media/logo.e68246686f716ff6e5d8.png",
      name: "",
      title: "",
      social: { facebook: true, instagram: true, linkedin: true },
    },
    {
      image:
        "https://littlelemon.alexismenest.vercel.app/static/media/logo.e68246686f716ff6e5d8.png",
      name: "",
      title: "",
      social: { facebook: true, instagram: true, linkedin: true },
    },
  ];

  return (
    <section id="experts">
      <h1>Top Reviews</h1>
      <p>what people say about this!</p>
      <div className="expert-box">
        {experts.map((expert, index) => (
          <ExpertProfile
            key={index}
            image={expert.image}
            name={expert.name}
            title={expert.title}
            social={expert.social}
          />
        ))}
      </div>
    </section>
  );
};

export default Experts;
