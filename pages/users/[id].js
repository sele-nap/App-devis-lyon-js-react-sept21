import { getUsers, getOneUser } from "../../models/user";
import Layout from "../../components/Layout";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WorkIcon from "@mui/icons-material/Work";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function User({
  user: {
    id,
    firstname,
    lastname,
    organizationName,
    organizationType,
    address1,
    zipCode,
    city,
    phone,
    email,
    siretNumber,
    managerName,
  },
}) {
  return (
    <Layout>
      <div className="flex flex-col">
        <h2 className="text-center text-2xl  uppercase m-12">
          Fiche client n° {id}
        </h2>
        <div className="flex  justify-around">
          <div className="border-2 m-8 mt-4 w-2/4 p-2 rounded-md">
            <div className=" items-center flex flex-row">
              <AssignmentIndIcon className="m-2" />
              <p className="text-md mx-2 items-center p-1">
                {firstname} {lastname}
              </p>
            </div>
            <div className=" items-center flex">
              <BusinessIcon className="m-2" />
              <div>
                <p className="text-md mx-2 items-center p-1">{address1} </p>
                <p className="text-md mx-2 items-center p-1">
                  {zipCode} {city}
                </p>
              </div>
            </div>
            <div className=" items-center flex flex-row">
              <PhoneIcon className="m-2" />
              <p className="text-md mx-2 items-center p-1">{phone}</p>
            </div>
            <div className=" items-center flex flex-row">
              <AlternateEmailIcon className="m-2" />
              <p className="text-md mx-2 items-center p-1">{email}</p>
            </div>

            <div className=" items-center flex flex-row">
              <WorkIcon className="m-2" />
              <div className="flex-col">
                <p className="text-md mx-2 items-center p-1">
                  type de structure : {organizationType}
                </p>
                <p className="text-md mx-2 items-center p-1">
                  {organizationName}
                </p>
                <p className="text-md mx-2 items-center p-1">
                  Siret : {siretNumber}
                </p>
                <p className="text-md mx-2 items-center p-1">
                  Responsable : {managerName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center cursor-pointer">
          <DeleteForeverIcon />
          <span className="ml-2"> Supprimer le compte client</span>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const users = await getUsers();
  return {
    paths: users.map((e) => {
      return { params: { id: e.id.toString() } };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const user = await getOneUser(ctx.params.id);
  return {
    props: { user },
    revalidate: 10,
  };
}
