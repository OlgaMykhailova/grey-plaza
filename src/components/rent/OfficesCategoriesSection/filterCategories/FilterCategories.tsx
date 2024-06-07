import Container from "../../../shared/Container";
import FilterButtonsList from "./FilterButtonsList";
import FilterTitle from "./FilterTitle";

export default function FilterCategories() {
  return (
    <Container className="flex flex-col items-center w-full tablet:w-[70%] laptop:w-full py-10">
      <FilterTitle />
      <FilterButtonsList />
    </Container>
  );
}
