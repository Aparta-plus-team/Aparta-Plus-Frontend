


import MainView from "*/mainView";
import PropertyCard from "*/propertyCard";
import Button from "*/button";
import Matrix from "*/Matrix";
import "+/verPropiedades.scss";
import { useQuery, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useParams, Link, useNavigate } from "react-router-dom";

// Query para obtener la propiedad específica
const GET_PROPIEDAD = gql`
  query verPropiedad($id: UUID!) {
  propiedads(where: { propiedadid: { eq: $id } }) {
    items {
      propiedadid
      nombre
      ubicacion
      portadaurl
      imagenespropiedades {
        imagenurl
      }
      inmuebles {
        inmuebleid
        codigo
        contrato {
          precioalquiler
          inquilino {
            inquilinonombre
            contratos {
              estado
            }
            inquilinoid
          }
          inmuebles {
            inmuebleid
          }
        }
        facturas {
          monto
        }
      }
    }
  }
}
`;

// Query para obtener todas las propiedades del usuario
const GET_PROPIEDADES_POR_USUARIO = gql`
  query verPropiedadCarta($usuarioid: UUID) {
    propiedads(
      take: 50
      where: { usuarioid: { eq: $usuarioid }, estado: { eq: true } }
    ) {
      items {
        propiedadid
        nombre
        ubicacion
        portadaurl
        inmuebles {
          inmuebleid
          numbanos
          numhabitaciones
          tieneparqueo
        }
      }
    }
  }
`;

// Mutación para eliminar una propiedad
const DELETE_PROPERTY = gql`
  mutation deletePropiedad($id: String!) {
    deleteProperty(id: $id) 
  }
`;

const VerPropiedades = () => {
  const { id, usuarioid } = useParams(); // Obtenemos el propiedadid y el usuarioid desde la URL
  const navigate = useNavigate(); // Hook para navegación

  console.log("Propiedad ID desde la URL:", id);
  console.log("Usuario ID desde la URL:", usuarioid);

  // Ejecutamos el query para obtener la propiedad específica
  const { loading, error, data } = useQuery(GET_PROPIEDAD, {
    variables: { id },
  });

  // Ejecutamos el query para obtener todas las propiedades del usuario
  const {
    loading: loadingPropiedades,
    error: errorPropiedades,
    data: dataPropiedades,
  } = useQuery(GET_PROPIEDADES_POR_USUARIO, {
    variables: { usuarioid: localStorage.getItem("userId") },
  });

  // Hook para ejecutar la mutación de eliminar propiedad
  const [deleteProperty] = useMutation(DELETE_PROPERTY, {
    onCompleted: () => {
      alert("Propiedad eliminada con éxito!");
      
      // Después de eliminar, redirigir a una propiedad diferente
      const nextProperty = dataPropiedades?.propiedads?.items?.[0];
      if (nextProperty) {
        navigate(`/verpropiedades/${nextProperty.propiedadid}`);
      } else {
        navigate("/"); // Redirigir a la página principal si no hay más propiedades
      }
    },
    onError: (err) => {
      alert("Hubo un error al eliminar la propiedad");
      console.error(err);
    },
  });

  if (loading || loadingPropiedades) return <p>Cargando...</p>;
  if (error || errorPropiedades) return <p>Error al cargar los datos</p>;

  const propiedad = data?.propiedads?.items[0];
  const inmuebles = propiedad?.inmuebles || [];
  const unidades = inmuebles.length;
  const portada = propiedad?.portadaurl;
  const imagenes = propiedad?.imagenespropiedades || [];

  const propiedades = dataPropiedades?.propiedads?.items || [];

  // Función para manejar el clic en eliminar
  const handleDelete = (id) => {
    deleteProperty({ variables: { id } });
  };

  return (
    <MainView sidebarType="thin">
      <div className="property-page">
        <h1 className="property-title">{propiedad?.nombre || "Propiedad"}</h1>
        <section className="property-gallery-section">
          <div className="gallery-container">
            <div className="image-wrapper">
              {/* Mostramos la portada si existe */}
              {portada && (
                <img
                  className="property-image"
                  src={portada}
                  alt="Portada de la propiedad"
                />
              )}
              {/* Mostramos las imágenes adicionales */}
              {imagenes.map((img, index) => (
                <img
                  key={index}
                  className="property-image"
                  src={img.imagenurl}
                  alt={`Imagen ${index + 1} de la propiedad`}
                />
              ))}
            </div>
            <div className="action-buttons">
              {/* Botón eliminar con el onClick para ejecutar la mutación */}
              <Button
                text="Eliminar"
                color="red"
                width="150px"
                onClick={() => handleDelete(propiedad.propiedadid)}
              />
              <Button text="Editar" color="blue" width="150px" />
              <a href={`/crearapartamento/${id}`}>
                <Button text="Crear" color="green" width="150px" />
              </a>
            </div>
          </div>
          <div className="property-list" style={{ scrollbarWidth: "thin" }}>
            {/* Renderizamos todas las propiedades con PropertyCard */}
            {propiedades.map((propiedad) => (
              <Link
                to={`/verpropiedades/${propiedad.propiedadid}`}
                key={propiedad.propiedadid}
              >
                <PropertyCard
                  nombre={propiedad.nombre}
                  propiedadid={propiedad.propiedadid}
                  ubicacion={propiedad.ubicacion}
                  inmuebles={propiedad.inmuebles}
                  portadaurl={propiedad.portadaurl}
                />
              </Link>
            ))}
          </div>
        </section>
        <section className="property-info-section">
          <header className="info-header">
            <h2>Información</h2>
          </header>
          <div className="info-content">
            <p>
              <strong>Ubicación:</strong>{" "}
              {propiedad?.ubicacion || "No disponible"}
            </p>
            <p>
              <strong>Unidades:</strong> {unidades}
            </p>
          </div>
        </section>
        <section className="apartments-section">
          <h2 className="apartments-title">Apartamentos</h2>
          {inmuebles.map((inmueble) => (
            <Matrix
              key={inmueble.inmuebleid}
              tipo="propiedad"
              nombreApartamento={inmueble.inmuebleid}
              nombreInquilino={
                inmueble.contrato?.inquilino?.inquilinonombre || "Sin inquilino"
              }
              monto={inmueble.contrato?.precioalquiler || "No definido"}
            />
          ))}
        </section>
      </div>
    </MainView>
  );
};

export default VerPropiedades;
