import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const ALLOWED_ORIGIN = process.env.NODE_ENV === 'production' ? '*' : '*';

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

export async function POST(req: Request) {
  try {
    const { referenceId, changes, storage } = await req.json();

    if (!process.env.SHOPIFY_API_KEY || !process.env.SHOPIFY_API_SECRET) {
      return Response.json(
        { error: 'Server configuration error' },
        {
          status: 500,
          headers: { 'Access-Control-Allow-Origin': ALLOWED_ORIGIN }
        }
      );
    }

    const payload = {
      iss: process.env.SHOPIFY_API_KEY,
      jti: uuidv4(),
      iat: Math.floor(Date.now() / 1000), // Convert to seconds for JWT standard
      sub: referenceId,
      changes,
    };

    const token = jwt.sign(payload, process.env.SHOPIFY_API_SECRET);

    return Response.json({ token }, {
      headers: { 'Access-Control-Allow-Origin': ALLOWED_ORIGIN }
    }
    );
  } catch (error) {
    console.error('Error signing payload:', error);
    return Response.json({ error: 'Failed to sign payload' },
      {
        status: 500,
        headers: { 'Access-Control-Allow-Origin': ALLOWED_ORIGIN }
      }
    );
  }
}