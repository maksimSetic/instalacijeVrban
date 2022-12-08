import React from "react";
import {
  BlogContainer,
  BlogContent,
  CardImage,
  CardImageHolder,
  CardContainer,
  CardOptions,
  CardTime,
  CardTitle,
  CardDescription,
} from "./BlogStyles";
import { blogData } from "../../data/BlogData";

const Blog = () => {
  return (
    <>
      <div>
        <h2
          style={{ display: "inline-flex", color: "#00917e", fontSize: "50px", textShadow: "2px 4px 3px rgba(0,0,0,0.3)"}}
        >
          VB
        </h2>
        <h2 style={{ display: "inline-flex", fontSize: "45px", textShadow: "2px 4px 3px rgba(0,0,0,0.3)" }}>log</h2>
      </div>
      <BlogContainer>
        <BlogContent>
        {blogData.map((card, index) => (
          <CardContainer>
            <CardImageHolder>
              <CardImage src={card.cardImg} />
            </CardImageHolder>
            <CardTitle>{card.cardTitle}</CardTitle>
            <CardTime>{card.cardTime}</CardTime>
            <CardDescription>{card.cardDescription}</CardDescription>
            <CardOptions>{card.cardOptions}</CardOptions>
          </CardContainer>
        ))}
        </BlogContent>
      </BlogContainer>
    </>
  );
};

export default Blog;
