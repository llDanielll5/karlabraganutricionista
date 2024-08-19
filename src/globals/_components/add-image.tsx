import React from "react";
import { Box, styled } from "@mui/material";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CreateIcon from "@mui/icons-material/Create";

interface AddImageComponentProps {
  type: "add" | "img";
  value: any;
  setValue: (newImage: any) => void;
}

const AddImageComponent = (props: AddImageComponentProps) => {
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const data = new FormData();
    const url = URL.createObjectURL(file);
    data.append("files", file);
    props.setValue({ file, url, data });
  };
  return (
    <BoxContainer>
      <InputFile type="file" onChange={handleChangeFile} />
      <Sobreposition>
        {props.type === "add" && (
          <AddPhotoAlternateIcon fontSize="large" sx={{ color: "#ccc" }} />
        )}
        {props.type === "img" && (
          <StyledImage src={props.value.url ?? props.value} />
        )}
      </Sobreposition>
    </BoxContainer>
  );
};

const BoxContainer = styled(Box)`
  cursor: pointer;
  border: 3px dashed #ccc;
  border-radius: 1rem;
  padding: 0.4rem;
  margin: 1rem 0;
  height: 250px;
  width: 250px;
  position: relative;
`;

const InputFile = styled("input")`
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: inline;
  z-index: 1000;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
`;

const Sobreposition = styled(Box)`
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledImage = styled("img")`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export default AddImageComponent;
