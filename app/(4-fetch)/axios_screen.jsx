import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
export default function AxiosScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://emojihub.yurace.pro/api/all").then((response) => {
      setData(response.data);
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
