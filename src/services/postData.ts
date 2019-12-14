import { SheetRow } from "../@types/sheet";

const API_URL = process.env.REACT_APP_GOOGLE_SCRIPT_POST_URL!;

interface SuccessResponse {
  result: "success";
  nextRow: number;
}

interface ErrorResponse {
  result: "error";
  error: any;
}

export async function postData(
  data: SheetRow
): Promise<SuccessResponse | ErrorResponse> {
  const url = new URL(API_URL);

  Object.entries(data).forEach(([name, value]) =>
    url.searchParams.append(name, value)
  );

  const resp = await fetch(url.toString());
  const json = await resp.json();

  return json;
}
