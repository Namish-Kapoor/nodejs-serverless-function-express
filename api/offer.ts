import { getOffers } from "./offer.server";

const OFFERS = getOffers();

// CORS headers for Vercel Edge functions
const corsHeaders = {
    'Access-Control-Allow-Origin': '*', // Be more restrictive in production
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
};

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: corsHeaders
    });
}

export async function GET() {
    return new Response(JSON.stringify(OFFERS), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
        }
    });
}