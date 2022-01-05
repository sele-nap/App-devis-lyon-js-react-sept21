import { getEstimates, getOneEstimate } from "../../models/estimate";
import Layout from "../../components/Layout";

export default function Estimate({
  estimate: { id, deadLine, additionalInformation },
}) {
  return (
    <Layout>
      <div>
        <h2 className="text-center m-12 text-2xl">
          Votre demande de devis n° {id}
        </h2>

        <p> {additionalInformation} </p>
        <p> {JSON.stringify(deadLine)} </p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const estimates = await getEstimates();
  return {
    paths: estimates.map((e) => {
      return { params: { id: e.id.toString() } };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const estimate = await getOneEstimate(ctx.params.id);
  return {
    props: { estimate },
    revalidate: 10,
  };
}
