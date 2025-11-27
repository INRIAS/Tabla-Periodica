export async function ajax(props) {
  let { url, cbSuccess, cbError } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error para acceder a la API";
      console.warn(`Error ${err.status}: ${message}</p>`);
      cbError(err);
      console.error(err);
    });
}
