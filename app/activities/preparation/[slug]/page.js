import preparationData from "@/app/components/activities/preparation/preparationData";
import PreparationDetail from "@/app/components/activities/preparation/PreparationDetail";

export default function PreparationSlugPage({ params }) {
  const { slug } = params;
  const item = preparationData.find((d) => d.slug === slug);

  return <PreparationDetail item={item} />;
}
