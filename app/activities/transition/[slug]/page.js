import transitionData from "@/app/components/activities/transition/transitionData";
import TransitionDetail from "@/app/components/activities/transition/TransitionDetail";

export default function TransitionSlugPage({ params }) {
  const { slug } = params;
  const item = transitionData.find((d) => d.slug === slug);

  return <TransitionDetail item={item} />;
}
