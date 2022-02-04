import Layout from "../components/Layout";

import next from "next";

export default function Legal() {
  return (
    <Layout title="Mentions légales">
      <div className="flex justify-center">
        <p className="text-justify mx-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
          molestie eros. Donec sed aliquet dolor. Ut vel dignissim dolor. Nunc
          mollis purus eget nunc congue, non scelerisque urna lacinia. Nunc nunc
          sem, ullamcorper sed turpis sit amet, semper gravida diam. Cras
          vehicula, tellus at volutpat luctus, est lectus placerat leo, et
          suscipit enim libero sit amet massa. Quisque nec nisi augue.
        </p>
      </div>
    </Layout>
  );
}
