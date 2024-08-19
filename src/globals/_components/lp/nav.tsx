import React, { useEffect, useState } from "react";
import { navLinks } from "@/globals/mocks/lp";
import { Box, styled, Typography } from "@mui/material";
import { OpenUrl } from "@/globals/utils/utils";
import { COLORS } from "@/globals/utils/colors";
import { useRouter } from "next/router";
import { collection, getDoc, getDocs } from "firebase/firestore";

export interface CategoriesInterface {
  name: string;
  image: string;
  tags: string[];
  slug?: string;
}

const NavLp = () => {
  const router = useRouter();
  // const ref = collection(db, "categories");
  const [categories, setCategories] = useState<CategoriesInterface[]>([]);
  const NavItem = (values: { href: string; text: string }) => (
    <Link
      variant="body1"
      fontWeight={400}
      onClick={() => router.push(values.href)}
    >
      {values.text}
    </Link>
  );

  // const getAllCategories = async () => {
  //   let newArr: CategoriesInterface[] = [
  //     { name: "Inicio", image: "", tags: [], slug: "" },
  //     { name: "Todas Categorias", image: "", tags: [], slug: "" },
  //   ];
  //   const querySnapshot = await getDocs(ref);
  //   querySnapshot.forEach((doc) => {
  //     newArr.push(doc.data() as CategoriesInterface);
  //   });
  //   setCategories(newArr);
  // };

  // useEffect(() => {
  //   getAllCategories();
  // }, []);

  if (!categories) return null;

  return (
    <Container>
      {categories.map((item, index) => (
        <NavItem
          href={
            item.name === "Inicio"
              ? "/"
              : item.name === "Todas Categorias"
              ? "/categories"
              : `/categories/${item.slug}`
          }
          text={item.name}
          key={index}
        />
      ))}
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem 3%;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
`;

const Link = styled(Typography)`
  cursor: pointer;
  transition: ease-in-out 0.2s;
  color: #666;
  :hover {
    color: ${COLORS.SECONDARY};
  }
`;

export default NavLp;
