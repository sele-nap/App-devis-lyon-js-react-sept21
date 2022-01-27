import Link from "next/link";
import React from "react";
import CtaButton from "../components/CtaButton";
import Layout from "../components/Layout";
import HomeIcon from "@mui/icons-material/Home";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Custom404 = () => {
  return (
    <div>
      <Layout>
        <h2 className="text-center text-5xl m-24">
          Oup&#39;s nous sommes face a un problème !{" "}
        </h2>

        <p className="text-center text-xl mt-24">
          {" "}
          Peut etre que vous souhaitez vous :{" "}
        </p>
        <div className="flex justify-around m-24">
          <Link href="/">
            <a className="flex justify-center md:justify-end ">
              <CtaButton title="Home" icon={<HomeIcon />} />
            </a>
          </Link>

          <Link href="/estimates">
            <a className="flex justify-center md:justify-end ">
              <CtaButton title="Mes devis" icon={<BackupTableIcon />} />
            </a>
          </Link>

          <Link href="/askEstimatePage">
            <a className="flex justify-center md:justify-end ">
              <CtaButton title="Nouveau devis" icon={<AddCircleIcon />} />
            </a>
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default Custom404;
