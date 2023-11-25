import { styled } from "@mui/material/styles";
import { Typography, TypographyProps } from "@mui/material";

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) => theme.spacing(5)};
  text-align: center;
`;

export const PageTitleStyled = styled((props) => (
  <Typography variant="h3" component={"h1"} {...props} />
))<TypographyProps>`
  text-transform: uppercase;
  font-weight: bold;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
  }
`;

export const PageSubtitleStyled = styled((props) => (
  <Typography variant="body1" component={"p"} {...props} />
))<TypographyProps>`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: bold;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
