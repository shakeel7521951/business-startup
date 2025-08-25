import ServicesData from "@/app/components/services/ServicesData";
import ServicesDetailPage from "@/app/components/services/ServicesDetail";


export default async function  PreparationSlugPage({ params }) {
  const  { slug } = await params;
  const item = ServicesData.find((d) => d.slug === slug);

  return <ServicesDetailPage item={item} />;
}
