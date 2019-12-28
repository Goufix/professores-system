// --isolatedModules
// import { SheetRow } from "../@types/sheet";

// const API_URL = process.env.REACT_APP_GOOGLE_SCRIPT_POST_URL!;

// interface SuccessResponse {
//   result: "success";
//   row: number;
// }

// interface ErrorResponse {
//   result: "error";
//   error: any;
// }

// export async function postData(data: SheetRow): Promise<SuccessResponse | ErrorResponse> {
//   const body = new FormData();

//   Object.entries(data).forEach(([name, value]) => body.append(name, value));

//   const resp = await fetch(API_URL, { method: "POST", body });
//   const json = await resp.json();

//   return json;
// }

// (async () => {
//   const result = await postData({} as any);
// })();
export const postData = "any";
