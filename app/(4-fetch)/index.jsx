import { useEffect, useState } from "react";
import styled from "styled-components/native";

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://emojihub.yurace.pro/api/all")
      .then((response) => {
        if (!response.ok) {
          setData([{ name: "Error" }]);
          throw new Error("Error en request");
        } else {
          //setData(response.data);
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Contenedor>
      <Texto>Componente Fetch</Texto>
      {data?.map((item, index) => (
        <Texto key={index}>{item.name}</Texto>
      ))}
    </Contenedor>
  );
}

const Contenedor = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text`
  font-size: 20px;
`;
