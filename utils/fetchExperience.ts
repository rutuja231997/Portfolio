import { sanityClient } from "../sanity";
import { Experience } from "../typings";
import { groq } from "next-sanity";

const query = groq`*[_type == "experience"]{..., technologies[]->}`;

export const fetchExperience = async () => {
  const res = await sanityClient.fetch(query);

  const experience: Experience[] = res;

  return experience;

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  // );

  // const data = await res.json();
  // const experience: Experience[] = data.experience;

  // //   console.log("fetching", skills);

  // return experience;
};
