import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('🔥 Next.js API route /api/chat called');
    const body = await request.json();
    console.log('📝 Request body:', body);
    
    // Use environment variable for backend URL
    let backendUrl: string;
    
    if (process.env.NODE_ENV === 'production') {
      // For Hostinger: Use PHP backend on same domain
      const host = request.headers.get('host') || 'localhost';
      const protocol = request.headers.get('x-forwarded-proto') || 'https';
      backendUrl = `${protocol}://${host}/api/chat`;
    } else {
      // For development: Use local Flask server
      backendUrl = 'http://localhost:5000/api/chat';
    }
    console.log('📡 Calling backend:', backendUrl);
    
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('📊 Backend response status:', response.status);

    if (!response.ok) {
      console.error('❌ Backend error:', response.status, response.statusText);
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Backend response data:', data);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('💥 API route error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to communicate with backend',
        details: error instanceof Error ? error.message : 'Unknown error',
        environment: process.env.NODE_ENV,
        backendUrl: process.env.NODE_ENV === 'production' ? 'hidden' : 'http://localhost:5000/api/chat'
      }, 
      { status: 500 }
    );
  }
}