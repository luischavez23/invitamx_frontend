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

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchInvitation = async () => {
      try {
        const [response] = await Promise.all([
          fetch(`${API_URL}/api/invitations/${slug}`),
        ]);

        if (!response.ok) {
          throw new Error("Invitación no encontrada");
        }

        const data = await response.json();
        setInvitation(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchInvitation();
  }, [slug, API_URL]);

  if (loading) {
    return <Cargando />;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <LupitaEduardoTemplate
      invitation={invitation}
    />
  );
}

export default InvitationPage;