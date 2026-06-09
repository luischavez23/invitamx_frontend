import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LupitaEduardoTemplate from "../templates/LupitaEduardoTemplate";
import NotFound from "./NotFound";

function InvitationPage() {
  const { slug } = useParams();

  const [invitation, setInvitation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/invitations/${slug}`)
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
    return <h1>Cargando...</h1>;
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