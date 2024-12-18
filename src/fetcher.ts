import wretch, { Wretch, WretchError } from "wretch";
import { AuthActions } from "@/app/auth/utils";
import { BACKEND_HOST } from "./envConfig";
// Extract necessary functions from the AuthActions utility.
const { handleJWTRefresh, storeToken, getToken } = AuthActions();

export const api = () => {
  return (
    wretch("http://"+ BACKEND_HOST +":8000").accept("application/json")
      // Initialize authentication with the access token.
      .auth(`Bearer ${getToken("access")}`)
      // Catch 401 errors to refresh the token and retry the request.
      .catcher(401, async (error: WretchError, request: Wretch) => {
        try {
          // Attempt to refresh the JWT token.
          const { access } = (await handleJWTRefresh().json()) as {
            access: string;
          };

          // Store the new access token.
          storeToken(access, "access");

          // Replay the original request with the new access token.
          return request
            .auth(`Bearer ${access}`)
            .fetch()
            .unauthorized(() => {
              window.location.replace("/");
            })
            .json();
        } catch (err) {
          window.location.replace("/");
        }
      })
  );
};

export const fetcher = async (url: string): Promise<any> => {
  try{
    return await api().get(url).json();
  } catch(error: any|unknown){
    console.log(error)
    console.log(url)
    return error
  }
  
};
