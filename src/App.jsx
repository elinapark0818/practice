import React, { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import styled from "styled-components";

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 8px;
  background: linear-gradient(to right, #b39ddb, #4527a0);
  z-index: 100;
  transition: 0.1s ease;
`;

const Container = styled.div`
  & section {
    margin: 10% 20%;
  }

  & h2 {
    font-size: 4rem;
    padding: 2rem 0;
    font-weight: bold;
  }

  & h3 {
    font-size: 2.5rem;
    padding: 2rem 0;
  }

  & p {
    font-size: 1.3rem;
    line-height: 175%;
    color: rgb(30, 30, 30);
  }
`;

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let handleScrollY = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollY = Math.floor(`${totalScroll / windowHeight}` * 100);
      console.log("스크롤 잘 잡고 있음", scrollY);
      setScroll(scrollY);
    };
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  });

  return (
    <div>
      <ProgressBar style={{ width: `${scroll}%` }} />
      <Container>
        <section>
          <h2>Article</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            animi earum similique voluptas repellat illo praesentium expedita
            voluptate molestias tenetur commodi.
            <br />
            quam harum! Dolorum harum eius rerum perspiciatis officiis et Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dicta animi
            molestias tenetur commodi.
            <br />
            quam harum! Dolorum harum eius rerum perspiciatis officiis et
          </p>
          <h3>More more</h3>
          <p>
            earum similique voluptas repellat illo praesentium expedita
            voluptate Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dicta animi earum similique voluptas repellat illo praesentium
            expedita voluptate
            <br />
            quam harum! Dolorum harum eius rerum perspiciatis officiis et
            molestias tenetur commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui eos consectetur ut id similique aliquid nulla
            sed inventore deleniti corporis quos quam harum, asperiores tenetur
            sunt ducimus architecto exercitationem porro.
          </p>
          <h3>More more</h3>
          <p>
            earum similique voluptas repellat illo praesentium expedita
            voluptate Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dicta animi earum similique voluptas repellat illo praesentium
            expedita voluptate
            <br />
            quam harum! Dolorum harum eius rerum perspiciatis officiis et
            molestias tenetur commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui eos consectetur ut id similique aliquid nulla
            sed inventore deleniti corporis quos quam harum, asperiores tenetur
            sunt ducimus architecto exercitationem porro.
          </p>
          <h3>More more</h3>
          <p>
            earum similique voluptas repellat illo praesentium expedita
            voluptate Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dicta animi earum similique voluptas repellat illo praesentium
            expedita voluptate
            <br />
            quam harum! Dolorum harum eius rerum perspiciatis officiis et
            molestias tenetur commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui eos consectetur ut id similique aliquid nulla
            sed inventore deleniti corporis quos quam harum, asperiores tenetur
            sunt ducimus architecto exercitationem porro.
          </p>
        </section>
      </Container>
      <LoadingSpinner />
    </div>
  );
}

export default App;
