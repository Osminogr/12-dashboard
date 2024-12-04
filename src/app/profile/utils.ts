import { fetcher } from "@/fetcher";

type User = {
  id: number;
  first_name: string;
  last_name: string;
}


export const getMyId = async () => {
  const base_user = await fetcher("/auth/users/me");
  const full_user: User = await fetcher("/api/users/persons/" + base_user.id)
  return full_user
};

