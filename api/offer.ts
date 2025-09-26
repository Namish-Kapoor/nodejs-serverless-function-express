import { getOffers } from "./offer.server";

const OFFERS = getOffers();

export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Credentials': 'true',
        },
    });
}

export async function GET() {
    return new Response(JSON.stringify(OFFERS), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}