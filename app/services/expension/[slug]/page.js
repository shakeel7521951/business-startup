import expensionData from "@/app/components/services/expension/expensionData";
import ExpensionDetail from "@/app/components/services/expension/ExpensionDetail";

export default function TransitionSlugPage({ params }) {
  const { slug } = params;
  const item = expensionData.find((d) => d.slug === slug);

  return <ExpensionDetail item={item} />;
}
