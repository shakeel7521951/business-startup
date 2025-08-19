import preparationData from "@/app/components/services/preparation/preparationData";
import PreparationDetail from "@/app/components/services/preparation/PreparationDetail";

export default function PreparationSlugPage({ params }) {
  const { slug } = params;
  const item = preparationData.find((d) => d.slug === slug);

  return <PreparationDetail item={item} />;
}
