import {
  PageSubtitleStyled,
  PageTitleContainer,
  PageTitleStyled,
} from "./styled";

export interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled color={"primary"}>{title}</PageTitleStyled>
      <PageSubtitleStyled color={"primary"}>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
