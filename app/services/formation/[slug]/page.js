import formationData from "@/app/components/services/formation/formationData";
import FormationDetail from "@/app/components/services/formation/FormationDetail";

export default function TransitionSlugPage({ params }) {
  const { slug } = params;
  const item = formationData.find((d) => d.slug === slug);

  return <FormationDetail item={item} />;
}
