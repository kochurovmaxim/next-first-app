import { dataServices } from "@/mocks/services";

export async function GET(request) {
  return new Response(JSON.stringify(dataServices));
}
