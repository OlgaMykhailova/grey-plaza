import PolicyTitle from "@/src/components/policy/PolicyTitle";
import PolicyVersion from "@/src/components/policy/PolicyVersion";
import Section1 from "@/src/components/policy/Section1";
import Section2 from "@/src/components/policy/Section2";
import Section3 from "@/src/components/policy/Section3";
import Section4 from "@/src/components/policy/Section4";
import Container from "@/src/components/shared/Container";

export default function Policy() {
  return (
    <Container className="pt-[112px] pb-[60px] tablet:pt-[120px]">
      <PolicyTitle />
      <PolicyVersion />
      <ul>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </ul>
    </Container>
  );
}
