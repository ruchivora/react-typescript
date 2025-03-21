import { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
}

function Section({title = "default title", children}: SectionProps) {
  return(
    <>
      <div>Section Component</div>
      <h2>{title}</h2>
      <p>{children}</p>
    </>
  )
}

export default Section;