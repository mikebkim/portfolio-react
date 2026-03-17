import React, { useState, useEffect, useRef } from "react";
import { HomePageWrap, NameHead } from "./Home.Page";
import AOS from "aos";
import "aos/dist/aos.css";
import Patagonia4 from "../../files/Patagonia4.jpg";

const HomePage = () => {
  const [color, setColor] = useState("rgb(255, 255, 255)");
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = Patagonia4;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.drawImage(img, 0, 0);

      canvasRef.current = {
        canvas,
        ctx,
        width: img.naturalWidth,
        height: img.naturalHeight,
      };
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const imgEl = imgRef.current;
      const canvasData = canvasRef.current;

      if (!imgEl || !canvasData) return;

      const rect = imgEl.getBoundingClientRect();

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (
        mouseX < rect.left ||
        mouseX > rect.right ||
        mouseY < rect.top ||
        mouseY > rect.bottom
      ) {
        return;
      }

      const xPercent = (mouseX - rect.left) / rect.width;
      const yPercent = (mouseY - rect.top) / rect.height;

      const imageX = Math.floor(xPercent * canvasData.width);
      const imageY = Math.floor(yPercent * canvasData.height);

      const pixel = canvasData.ctx.getImageData(imageX, imageY, 1, 1).data;

      const [r, g, b] = pixel;
      const nextColor = `rgb(${r}, ${g}, ${b})`;

      setColor((prev) => (prev === nextColor ? prev : nextColor));
    };

    const handleMouseLeaveWindow = () => {
      setColor("rgb(255, 255, 255)");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeaveWindow);
    };
  }, []);

  return (
    <HomePageWrap>
      <img
        ref={imgRef}
        className="patagonia"
        src={Patagonia4}
        alt="Patagonia"
      />

      <div className="HomePage" data-aos="fade-up">
        <div className="header">
          <h1>HI, I'M</h1>
          <NameHead style={{ color }}>MIKE KIM</NameHead>
          <h3>Web Developer | Music Producer | Project Coordinator</h3>
          <h5>Los Angeles, CA</h5>
        </div>

        <div className="home">
          <p className="home-about">
            I enjoy solving problems and turning complexity into simple
            solutions.
            <br />
            <br />
            I'm a versatile professional with experience spanning web
            development, entertainment, music, recruiting, and consumer
            internet, combining big-picture thinking with agile, high-quality
            execution. I'm a strong communicator and self-starter who thrives in
            fast-paced environments, driven to build products that improve
            everyday life and create meaningful impact.
          </p>
        </div>
      </div>
    </HomePageWrap>
  );
};

export default HomePage;
