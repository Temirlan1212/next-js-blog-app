import { User } from "../types";

const mapUser = (user: Partial<User>): User => {
  return {
    id: user.id || 0,
    name: user.name || "",
    username: user.username || "",
    email: user.email || "",
    phone: user.phone || "",
    website: user.website || "",
    address: {
      street: user.address?.street || "",
      suite: user.address?.suite || "",
      city: user.address?.city || "",
      zipcode: user.address?.zipcode || "",
      geo: {
        lat: user.address?.geo?.lat || "0",
        lng: user.address?.geo?.lng || "0",
      },
    },
    company: {
      name: user.company?.name || "",
      catchPhrase: user.company?.catchPhrase || "",
      bs: user.company?.bs || "",
    },
  };
};

const userMappers = { mapUser };
export { userMappers };
