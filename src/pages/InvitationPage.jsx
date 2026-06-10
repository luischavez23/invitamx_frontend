import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LupitaEduardoTemplate from "../templates/LupitaEduardoTemplate";
import NotFound from "./NotFound";
import Cargando from "./Cargando";

function InvitationPage() {
  const { slug } = useParams();

  const [invitation, setInvitation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${VITE_API_URL}/api/invitations/${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }

        return response.json();
      })
      .then((data) => {
        setInvitation(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <Cargando />;
  }

  if (error) {
    return(
        <NotFound />
    );
  }

  return (
    <LupitaEduardoTemplate
      invitation={invitation}
    />
  );
}

export default InvitationPage;