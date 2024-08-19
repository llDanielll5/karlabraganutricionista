export const createTypography = () => {
  return {
    fontFamily: "Roboto, sans-serif",
    body1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 200,
      lineHeight: 1.57,
    },
    button: {
      fontFamily: "Roboto",
      textTransform: "uppercase",
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 700,
      fontSize: "1.125rem",
      lineHeight: 1.2,
    },
    especial1: {
      fontWeight: "bold",
      fontSize: "2rem",
      lineHeight: 1.2,
      fontFamily: "Madimi;",
    },
    especial2: {
      fontWeight: 300,
      fontSize: "1.75rem",
      lineHeight: 1.2,
      fontFamily: "Madimi;",
    },
    especial3: {
      fontWeight: 200,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      fontFamily: "Madimi;",
    },
  };
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    especial1: React.CSSProperties;
    especial2: React.CSSProperties;
    especial3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    especial1?: React.CSSProperties;
    especial2?: React.CSSProperties;
    especial3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    especial1: true;
    especial2: true;
    especial3: true;
  }
}
