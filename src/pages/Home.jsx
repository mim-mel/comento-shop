import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import ThemaButton from "../components/ThemaButton";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { MockDataContext } from "../App";

const Home = () => {
  const data = useContext(MockDataContext);

  console.log(data);

  const [themaType, setThemaType] = useState("cup");

  return (
    <div>
      <NavigationSection>
        <Navigation />
      </NavigationSection>
      <ThemaSection>
        <ThemaButton
          themaName={"#겨울 방한템"}
          onClick={() => {
            setThemaType("cup");
          }}
        />
        <ThemaButton
          themaName={"#따순 머그컵"}
          onClick={() => {
            setThemaType("winter");
          }}
        />
      </ThemaSection>
      <GrayLine />
      <ProductSection>
        {data.map((it) => (
          <ProductCard
            key={it.id}
            name={it.name}
            description={it.description}
            thumbnail={it.thumbnail}
          />
        ))}
      </ProductSection>
    </div>
  );
};

export const NavigationSection = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: 800;
  padding: 30px 0;
  border-bottom: 1px solid #bebebe;
`;

const ThemaSection = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 12px;
  justify-content: center;
  align-items: center;
`;

const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

const ProductSection = styled.div`
  padding: 20px;
`;

export default Home;
