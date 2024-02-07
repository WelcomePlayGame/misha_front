import axios, { AxiosResponse, AxiosError } from "axios";

const addOrGet = <T,>(
  url: string,
  method: "get" | "post" | "put" | "delete",
  object?: T,
  photos?: File[] | null,
  id?: number
): Promise<AxiosResponse<T>> => {
  if (photos !== null && photos !== undefined) {
    const formData = new FormData();

    if (object) {
      formData.append(
        "product",
        new Blob([JSON.stringify(object)], { type: "application/json" })
      );
    }

    photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    return axios[method]<T>(url, formData)
      .then((response: AxiosResponse<T>) => {
        if (response.status !== 200) {
          console.log(response.status);
          throw new Error(`Server responded with status ${response.status}`);
        }
        return response;
      })
      .catch((error: AxiosError) => {
        console.error("Error occurred:", error);
        throw error;
      });
  } else {
    return axios[method]<T>(`${url}/${id || ""}`, object)
      .then((response: AxiosResponse<T>) => {
        if (response.status !== 200) {
          console.log(response.status);
          throw new Error(`Server responded with status ${response.status}`);
        }
        return response;
      })
      .catch((error: AxiosError) => {
        console.error("Error occurred:", error);
        throw error;
      });
  }
};

export default addOrGet;
