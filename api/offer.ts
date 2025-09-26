import { getOffers } from "./offer.server";

const OFFERS = getOffers();
export async function GET() {
    return new Response(JSON.stringify(OFFERS), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}