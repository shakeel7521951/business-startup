import ServicesData from "@/app/components/services/ServicesData";
import ServicesDetailPage from "@/app/components/services/ServicesDetail";


export default function PreparationSlugPage({ params }) {
  const { slug } = params;
  const item = ServicesData.find((d) => d.slug === slug);

  return <ServicesDetailPage item={item} />;
}
