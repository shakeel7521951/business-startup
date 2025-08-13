import formationData from "@/app/components/activities/formation/formationData";
import FormationDetail from "@/app/components/activities/formation/FormationDetail";

export default function TransitionSlugPage({ params }) {
  const { slug } = params;
  const item = formationData.find((d) => d.slug === slug);

  return <FormationDetail item={item} />;
}
