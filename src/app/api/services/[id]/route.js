import { dataServices } from "@/mocks/services";

export async function GET(request, { params }) {
  const service = dataServices.filter(
    (service) => service.nameLatin === params.id
  );
  return new Response(JSON.stringify(service[0]));
}
