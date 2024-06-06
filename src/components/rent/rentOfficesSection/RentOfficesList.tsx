import { officesData } from "@/src/mockedData/officesData";
import RentOfficesCard from "./RentOfficesCard";

export default function RentOfficesList() {
  return (
    <ul>
      {officesData.category300.map((office) => (
        <li key={office.id} className="[&:not(:last-child)]:mb-5">
          <RentOfficesCard office={office} />
        </li>
      ))}
    </ul>
  );
}
