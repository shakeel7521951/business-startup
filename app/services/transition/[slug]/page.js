import transitionData from "@/app/components/services/transition/transitionData";
import TransitionDetail from "@/app/components/services/transition/TransitionDetail";

export default function TransitionSlugPage({ params }) {
  const { slug } = params;
  const item = transitionData.find((d) => d.slug === slug);

  return <TransitionDetail item={item} />;
}
