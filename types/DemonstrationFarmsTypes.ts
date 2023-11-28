import {
  POU,
  // FarmSpecialization,
  // AmountSpecialization,
  // Specialization,
  // Enterprise,
  // Region,
  // WebResource,
} from "@prisma/client";

// export interface FarmSpecializationWithAmountSpecialization
//   extends FarmSpecialization {
//   AmountSpecialization: AmountSpecialization[];
//   Specialization: Specialization | null;
// }
// interface EnterpriseWithRegion extends Enterprise {
//   Region: Region;
// }
// interface MyWebResource extends Omit<WebResource, "type"> {
//   type: "Сторінка в інтернеті" | "Сторінка в соц. мережі";
// }
export interface POUWithSpecialization extends POU {
  // FarmSpecialization: FarmSpecializationWithAmountSpecialization[];
  // Enterprise: EnterpriseWithRegion | null;
  // WebResource: MyWebResource[];
}
